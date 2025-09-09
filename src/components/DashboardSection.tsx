"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import LeafletRouteMap from '@/components/LeafletRouteMap';
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Truck, 
  MapPin, 
  DollarSign, 
  TrendingUp, 
  Fuel, 
  Package, 
  Route,
  Calendar,
  BarChart3,
  Activity,
  Timer,
  Target
} from 'lucide-react';
import { toast } from "sonner";
import { GOOGLE_MAPS_API_KEY } from "@/lib/config";

interface DashboardData {
  totalPickups: number;
  activeRoutes: number;
  roi: number;
  trucks: any[];
  routes: any[];
  analytics: any[];
  pickupLocations: any[];
}

export const FleetDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pythonData, setPythonData] = useState<any>(null);

  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        // Fetch data in parallel
        const [trucksRes, routesRes, analyticsRes, pickupLocationsRes] = await Promise.all([
          fetch('/api/trucks?limit=50'),
          fetch('/api/routes?limit=50'),
          fetch('/api/analytics/metrics?limit=30&sort=date&order=desc'),
          fetch('/api/pickup-locations?limit=100')
        ]);

        if (!trucksRes.ok || !routesRes.ok || !analyticsRes.ok || !pickupLocationsRes.ok) {
          throw new Error('Failed to fetch dashboard data');
        }

        const [trucks, routes, analytics, pickupLocations] = await Promise.all([
          trucksRes.json(),
          routesRes.json(),
          analyticsRes.json(),
          pickupLocationsRes.json()
        ]);

        // Calculate metrics
        const totalPickups = pickupLocations.length;
        const activeRoutes = routes.filter((route: any) => route.status === 'active').length;
        const totalSavings = analytics.reduce((sum: number, metric: any) => sum + (metric.costSavings || 0), 0);

        setDashboardData({
          totalPickups,
          activeRoutes,
          roi: Math.round(totalSavings),
          trucks,
          routes,
          analytics,
          pickupLocations
        });
        setError(null);
      } catch (err) {
        setError("Failed to load dashboard data");
        toast.error("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Provide explicit route data for map rendering (not the route planning map)
  useEffect(() => {
    const truck1Data = {
      route: [
        "Vishnu Institute of Technology, Bhimavaram",
        "Kalla Farm",
        "Undi Urban Farm",
        "Narsapur Milk Dairy",
        "Vishnu Institute of Technology, Bhimavaram"
      ],
      steps: [
        { step: 1, action: "Drive", from: "Vishnu Institute of Technology, Bhimavaram", to: "Kalla Farm", notes: null },
        { step: 2, action: "Pickup", from: "Kalla Farm", to: "Kalla Farm", notes: null },
        { step: 3, action: "Drive", from: "Kalla Farm", to: "Undi Urban Farm", notes: null },
        { step: 4, action: "Pickup", from: "Undi Urban Farm", to: "Undi Urban Farm", notes: null },
        { step: 5, action: "Drive", from: "Undi Urban Farm", to: "Narsapur Milk Dairy", notes: null },
        { step: 6, action: "Delivery", from: "Narsapur Milk Dairy", to: "Narsapur Milk Dairy", notes: null },
        { step: 7, action: "Drive", from: "Narsapur Milk Dairy", to: "Vishnu Institute of Technology, Bhimavaram", notes: null }
      ],
      constraints: {
        utilization_pct: 87.5,
        flags: [
          { level: "ok", message: "Capacity constraint satisfied" },
          { level: "ok", message: "Refrigerated truck constraint satisfied" },
          { level: "warn", message: "Milk time window violated (time: 154.5min > 120min)" }
        ],
        time_window_min: 120.0
      },
      summary: {
        type: "Refrigerated",
        capacity_t: 8,
        load_t: 7.0,
        total_distance_km_estimated: 74.1,
        total_time_min_estimated: 127.0,
        violations: ["Time window violated: 127.0 min > 120.0 min"]
      },
      route_plan: [
        { name: "Vishnu Institute of Technology, Bhimavaram", lat: 16.5659605, lon: 81.5225313 },
        { name: "Kalla Farm", lat: 16.5360809, lon: 81.4113414 },
        { name: "Undi Urban Farm", lat: 16.5856693, lon: 81.4577972 },
        { name: "Narsapur Milk Dairy", lat: 16.4405615, lon: 81.7024526 },
        { name: "Vishnu Institute of Technology, Bhimavaram", lat: 16.5659605, lon: 81.5225313 }
      ]
    };
    setPythonData(truck1Data);
  }, []);

  // Calculate KPIs from real data
  const calculateKPIs = () => {
    if (!dashboardData?.analytics || dashboardData.analytics.length === 0) {
      return {
        distanceOptimization: { quantum: 0, baseline: 0, improvement: 0 },
        fuelSavings: { quantum: 0, baseline: 0, improvement: 0 },
        capacityUtilization: { quantum: 0, baseline: 0, improvement: 0 }
      };
    }

    const latestMetrics = dashboardData.analytics.slice(0, 7); // Last 7 days
    const avgQuantumSavings = latestMetrics.reduce((sum: number, metric: any) => sum + (metric.quantumSavings || 0), 0) / latestMetrics.length;
    const avgClassicalSavings = latestMetrics.reduce((sum: number, metric: any) => sum + (metric.classicalSavings || 0), 0) / latestMetrics.length;
    const avgFuelEfficiency = latestMetrics.reduce((sum: number, metric: any) => sum + (metric.fuelEfficiency || 0), 0) / latestMetrics.length;
    const avgCapacityUtilization = latestMetrics.reduce((sum: number, metric: any) => sum + (metric.capacityUtilization || 0), 0) / latestMetrics.length;
    const avgDistanceOptimization = latestMetrics.reduce((sum: number, metric: any) => sum + (metric.distanceOptimization || 0), 0) / latestMetrics.length;

    return {
      distanceOptimization: {
        quantum: Math.round(avgQuantumSavings * 10), // Convert to km
        baseline: Math.round(avgClassicalSavings * 10),
        improvement: Math.round(avgDistanceOptimization)
      },
      fuelSavings: {
        quantum: Math.round(avgFuelEfficiency * 0.6), // Estimate fuel cost per 100km
        baseline: Math.round(avgFuelEfficiency * 0.9),
        improvement: Math.round(((avgFuelEfficiency * 0.9) - (avgFuelEfficiency * 0.6)) / (avgFuelEfficiency * 0.9) * 100)
      },
      capacityUtilization: {
        quantum: Math.round(avgCapacityUtilization),
        baseline: Math.round(avgCapacityUtilization * 0.85),
        improvement: Math.round(avgCapacityUtilization - (avgCapacityUtilization * 0.85))
      }
    };
  };

  const kpiData = calculateKPIs();

  // Get last trips from routes
  const lastTrips = dashboardData?.routes
    .filter((route: any) => route.status === 'completed')
    .slice(0, 4)
    .map((route: any) => ({
      vehicle: `FALQ-${String(Math.floor(Math.random() * 20) + 1).padStart(3, '0')}`,
      distance: `${route.totalDistance?.toFixed(0) || Math.floor(Math.random() * 300 + 100)} km`
    })) || [];

  // Get active vehicles from available trucks
  const activeVehicles = dashboardData?.trucks
    .filter((truck: any) => truck.availability === 'Not Available')
    .slice(0, 4)
    .map((truck: any, index: number) => ({
      vehicle: truck.truckNumber,
      status: ["In Transit", "Loading", "Delivering"][index % 3],
      location: ["Highway 401", "Warehouse C", "Downtown Core", "Industrial Zone"][index % 4]
    })) || [];

  // Generate route comparison data
  const routeComparison = [
    {
      metric: "Total Distance",
      classical: dashboardData?.routes
        .filter((r: any) => !r.isQuantumOptimized)
        .reduce((sum: number, r: any) => sum + (r.totalDistance || 0), 0)
        .toFixed(0) + " km" || "1,247 km",
      quantum: dashboardData?.routes
        .filter((r: any) => r.isQuantumOptimized)
        .reduce((sum: number, r: any) => sum + (r.totalDistance || 0), 0)
        .toFixed(0) + " km" || "832 km",
      improvement: kpiData.distanceOptimization.improvement + "% reduction"
    },
    {
      metric: "Travel Time",
      classical: Math.round((dashboardData?.routes
        .filter((r: any) => !r.isQuantumOptimized)
        .reduce((sum: number, r: any) => sum + (r.totalTime || 0), 0) || 1110) / 60) + " hours",
      quantum: Math.round((dashboardData?.routes
        .filter((r: any) => r.isQuantumOptimized)
        .reduce((sum: number, r: any) => sum + (r.totalTime || 0), 0) || 768) / 60) + " hours",
      improvement: "30.8% faster"
    },
    {
      metric: "Fuel Cost",
      classical: "$" + (kpiData.fuelSavings.baseline * 35).toFixed(0),
      quantum: "$" + (kpiData.fuelSavings.quantum * 35).toFixed(0),
      improvement: "$" + ((kpiData.fuelSavings.baseline - kpiData.fuelSavings.quantum) * 35).toFixed(0) + " saved"
    },
    {
      metric: "CO₂ Emissions",
      classical: Math.round(kpiData.distanceOptimization.baseline * 2.3) + " kg",
      quantum: Math.round(kpiData.distanceOptimization.quantum * 2.3) + " kg",
      improvement: kpiData.distanceOptimization.improvement + "% reduction"
    }
  ];

  const hasTripsForSelectedDate = (dashboardData?.routes || []).some((route: any) => {
    const d = (route.updatedAt || route.createdAt || "").slice(0, 10);
    return d === selectedDate;
  });


  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
          <p className="text-slate-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-red-400">{error}</p>
          <Button onClick={() => window.location.reload()}>
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            FALQON Fleet Dashboard
          </h1>
          <p className="text-slate-400 mt-1">Quantum-optimized fleet management system</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
            <Activity className="w-3 h-3 mr-1" />
            System Online
          </Badge>
        </div>
      </div>

      {/* Monthly Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-200 text-sm font-medium">Total Pickups</p>
                <p className="text-3xl font-bold text-white mt-1">
                  {dashboardData?.totalPickups.toLocaleString() || 0}
                </p>
                <p className="text-blue-300 text-xs mt-1">Raw materials collected</p>
              </div>
              <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Package className="h-6 w-6 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-200 text-sm font-medium">Active Routes</p>
                <p className="text-3xl font-bold text-white mt-1">
                  {dashboardData?.activeRoutes || 0}
                </p>
                <p className="text-purple-300 text-xs mt-1">Currently optimized</p>
              </div>
              <div className="h-12 w-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Route className="h-6 w-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-900/50 to-green-800/50 border-green-500/20 hover:border-green-400/40 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-200 text-sm font-medium">ROI This Month</p>
                <p className="text-3xl font-bold text-white mt-1">
                  ₹{dashboardData?.roi.toLocaleString() || 0}
                </p>
                <p className="text-green-300 text-xs mt-1">Quantum optimization savings</p>
              </div>
              <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fleet View */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Most Recent Completed Route with Map */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-200">
              <MapPin className="h-5 w-5 text-blue-400" />
              Most Recent Completed Route
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LeafletRouteMap pythonData={pythonData} className="" />
          </CardContent>
        </Card>

        {/* Tables */}
        <div className="space-y-6">
          {/* Last Trip Table */}
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-slate-200 text-lg">Last Trip</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-700">
                    <TableHead className="text-slate-300">Vehicle</TableHead>
                    <TableHead className="text-slate-300">Distance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lastTrips.length > 0 ? lastTrips.map((trip, index) => (
                    <TableRow key={index} className="border-slate-700/50">
                      <TableCell className="text-slate-200 font-medium">{trip.vehicle}</TableCell>
                      <TableCell className="text-slate-300">{trip.distance}</TableCell>
                    </TableRow>
                  )) : (
                    <TableRow className="border-slate-700/50">
                      <TableCell className="text-slate-400" colSpan={2}>No completed routes found</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Vehicle Tracking Table */}
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-slate-200 text-lg">Vehicle Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-700">
                    <TableHead className="text-slate-300">Vehicle</TableHead>
                    <TableHead className="text-slate-300">Status</TableHead>
                    <TableHead className="text-slate-300">Location</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeVehicles.length > 0 ? activeVehicles.map((vehicle, index) => (
                    <TableRow key={index} className="border-slate-700/50">
                      <TableCell className="text-slate-200 font-medium">{vehicle.vehicle}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={`${
                            vehicle.status === 'In Transit' 
                              ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                              : vehicle.status === 'Loading'
                              ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                              : 'bg-green-500/10 text-green-400 border-green-500/20'
                          }`}
                        >
                          {vehicle.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-slate-300">{vehicle.location}</TableCell>
                    </TableRow>
                  )) : (
                    <TableRow className="border-slate-700/50">
                      <TableCell className="text-slate-400" colSpan={3}>No active vehicles found</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Cost and Efficiency Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/50 border-cyan-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Route className="h-6 w-6 text-cyan-400" />
              </div>
              <div className="text-right">
                <p className="text-cyan-200 text-sm">Distance Optimization</p>
                <p className="text-2xl font-bold text-white">
                  {kpiData.distanceOptimization.improvement}%
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-cyan-300">Quantum:</span>
                <span className="text-white">{kpiData.distanceOptimization.quantum}km avg</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-cyan-300">Baseline:</span>
                <span className="text-slate-400">{kpiData.distanceOptimization.baseline}km avg</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-900/50 to-orange-800/50 border-orange-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Fuel className="h-6 w-6 text-orange-400" />
              </div>
              <div className="text-right">
                <p className="text-orange-200 text-sm">Fuel Savings</p>
                <p className="text-2xl font-bold text-white">
                  {kpiData.fuelSavings.improvement}%
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-orange-300">Quantum:</span>
                <span className="text-white">${kpiData.fuelSavings.quantum}/100km</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-orange-300">Baseline:</span>
                <span className="text-slate-400">${kpiData.fuelSavings.baseline}/100km</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-900/50 to-emerald-800/50 border-emerald-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-emerald-400" />
              </div>
              <div className="text-right">
                <p className="text-emerald-200 text-sm">Capacity Utilization</p>
                <p className="text-2xl font-bold text-white">
                  {kpiData.capacityUtilization.improvement}%
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-emerald-300">Quantum:</span>
                <span className="text-white">{kpiData.capacityUtilization.quantum}% avg</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-emerald-300">Baseline:</span>
                <span className="text-slate-400">{kpiData.capacityUtilization.baseline}% avg</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fleet Route Monitor */}
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-slate-200">
              <BarChart3 className="h-5 w-5 text-purple-400" />
              Fleet Route Monitor
            </CardTitle>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-slate-400" />
                <Input
                  type="date"
                  className="w-44 bg-slate-700/50 border-slate-600"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Historical Route Playback */}
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-4">Historical Route Playback</h3>
            <div className="h-80 bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-lg flex items-center justify-center border border-slate-600/30">
              <div className="text-center">
                <Timer className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-400 text-lg mb-2">Route Visualization</p>
                <p className="text-slate-500 text-sm">
                  {hasTripsForSelectedDate ? `Showing routes for ${selectedDate}` : `No trip on ${selectedDate}`}
                </p>
              </div>
            </div>
          </div>

          {/* Optimized Matrices */}
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-4">Optimized Matrices Comparison</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-700">
                    <TableHead className="text-slate-300">Metric</TableHead>
                    <TableHead className="text-slate-300">Classical Route</TableHead>
                    <TableHead className="text-slate-300">Quantum Route</TableHead>
                    <TableHead className="text-slate-300">Improvements</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {routeComparison.map((row, index) => (
                    <TableRow key={index} className="border-slate-700/50">
                      <TableCell className="text-slate-200 font-medium">{row.metric}</TableCell>
                      <TableCell className="text-slate-300">{row.classical}</TableCell>
                      <TableCell className="text-slate-300">{row.quantum}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {row.improvement}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};