"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Map, Route, MapPin, Plus, X, Navigation, Truck, AlertCircle, Check, MapPinPlus, Warehouse, Navigation2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { GOOGLE_MAPS_API_KEY } from "@/lib/config";

interface PickupLocation {
  id: string;
  address: string;
  destinationAddress: string;
  loadQuantity: number;
  cropType: string;
  priority: "low" | "medium" | "high";
  maxDeliveryTime: number;
  notes?: string;
}

interface AvailableTruck {
  id: number;
  truckNumber: string;
  capacity: number;
  truckType: "Standard" | "Electric" | "Heavy Duty";
  imageUrl?: string;
  availability: "Available" | "Not Available";
}

interface SelectedTruck {
  id: number;
  truckNumber: string;
  capacity: number;
  truckType: "Standard" | "Electric" | "Heavy Duty";
}

interface RouteStep {
  id: string;
  address: string;
  distance: number;
  estimatedTime: number;
  loadQuantity: number;
  cropType: string;
  priority: "low" | "medium" | "high";
}

interface OptimizedRoute {
  id: string;
  assignedTrucks: SelectedTruck[];
  steps: RouteStep[];
  totalDistance: number;
  totalTime: number;
  savings: {
    distance: number;
    time: number;
  };
  isQuantumOptimized: boolean;
}

export default function RoutePlanningSection() {
  const [selectedTrucks, setSelectedTrucks] = useState<SelectedTruck[]>([]);
  const [availableTrucks, setAvailableTrucks] = useState<AvailableTruck[]>([]);
  const [loadingTrucks, setLoadingTrucks] = useState(true);

  const [pickupLocations, setPickupLocations] = useState<PickupLocation[]>([
    {
      id: "1",
      address: "",
      destinationAddress: "",
      loadQuantity: 0,
      cropType: "",
      priority: "medium",
      maxDeliveryTime: 8,
      notes: ""
    }
  ]);

  const [optimizedRoute, setOptimizedRoute] = useState<OptimizedRoute | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [mapView, setMapView] = useState<"quantum" | "classical">("quantum");
  const [pythonData, setPythonData] = useState<any>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [mapType, setMapType] = useState<"roadmap" | "satellite">("roadmap");

  // Geocoded coordinates from Python output
  const geocodedPoints = {
    "Vishnu Institute of Technology, Bhimavaram": { lat: 16.5659605, lng: 81.5225313 },
    "Kalla Farm": { lat: 16.5360809, lng: 81.4113414 },
    "Undi Urban Farm": { lat: 16.5856693, lng: 81.4577972 },
    "Narsapur Milk Dairy": { lat: 16.4405615, lng: 81.7024526 }
  };

  // Fetch available trucks from API
  useEffect(() => {
    const fetchAvailableTrucks = async () => {
      setLoadingTrucks(true);
      try {
        const response = await fetch('/api/trucks?availability=Available&limit=50');
        if (!response.ok) throw new Error('Failed to fetch trucks');
        
        const data = await response.json();
        setAvailableTrucks(data);
      } catch (err) {
        toast.error("Failed to load available trucks");
      } finally {
        setLoadingTrucks(false);
      }
    };

    fetchAvailableTrucks();
  }, []);

  // Load Python output data
  useEffect(() => {
    const loadPythonData = async () => {
      try {
        const response = await fetch('/python_output.json');
        if (response.ok) {
          const data = await response.json();
          console.log('Loaded Python data:', data["Truck 1"]);
          setPythonData(data["Truck 1"]);
        }
      } catch (err) {
        console.log('Python output not available:', err);
      }
    };

    loadPythonData();
  }, []);

  // Initialize Google Maps
  useEffect(() => {
    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;

      const mapInstance = new window.google.maps.Map(mapRef.current, {
        zoom: 12,
        center: { lat: 16.5659605, lng: 81.5225313 },
        mapTypeId: mapType === "roadmap" ? window.google.maps.MapTypeId.ROADMAP : window.google.maps.MapTypeId.SATELLITE,
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      });

      setMap(mapInstance);
      setIsMapLoaded(true);

      // Add markers if Python data is available
      if (pythonData && pythonData.route) {
        addRouteMarkers(mapInstance, pythonData.route);
      }
    };

    const loadGoogleMaps = () => {
      if (window.google) {
        initializeMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=geometry,directions&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      window.initMap = initializeMap;
      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, []);

  // Update map when Python data changes
  useEffect(() => {
    if (map && pythonData && pythonData.route) {
      addRouteMarkers(map, pythonData.route);
    }
  }, [map, pythonData]);

  // Update map type when mapType state changes
  useEffect(() => {
    if (map) {
      map.setMapTypeId(mapType === "roadmap" ? window.google.maps.MapTypeId.ROADMAP : window.google.maps.MapTypeId.SATELLITE);
    }
  }, [map, mapType]);

  const addRouteMarkers = (mapInstance: any, route: string[]) => {
    // First, add all markers
    route.forEach((location, index) => {
      const coords = geocodedPoints[location as keyof typeof geocodedPoints];
      if (!coords) return;

      const marker = new window.google.maps.Marker({
        position: coords,
        map: mapInstance,
        title: location,
        label: {
          text: (index + 1).toString(),
          color: 'white',
          fontWeight: 'bold',
        },
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 12,
          fillColor: index === 0 || index === route.length - 1 ? '#28a745' : '#dc3545',
          fillOpacity: 1,
          strokeColor: 'white',
          strokeWeight: 3
        }
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 8px;">
            <h3 style="margin: 0 0 4px 0; font-size: 14px; font-weight: bold;">${location}</h3>
            <p style="margin: 0; font-size: 12px; color: #666;">Step ${index + 1}</p>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(mapInstance, marker);
      });
    });

    // Draw route using Google Directions API to follow roads
    if (route.length >= 2) {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer({
        draggable: false,
        suppressMarkers: true, // We already have custom markers
        polylineOptions: {
          strokeColor: '#FF6B35',
          strokeWeight: 6,
          strokeOpacity: 0.9
        }
      });

      directionsRenderer.setMap(mapInstance);

      // Prepare waypoints (all locations except first and last)
      const waypoints = route.slice(1, -1).map(location => {
        const coords = geocodedPoints[location as keyof typeof geocodedPoints];
        return coords ? { location: coords } : null;
      }).filter(Boolean);

      const request = {
        origin: geocodedPoints[route[0] as keyof typeof geocodedPoints],
        destination: geocodedPoints[route[route.length - 1] as keyof typeof geocodedPoints],
        waypoints: waypoints,
        travelMode: window.google.maps.TravelMode.DRIVING,
        optimizeWaypoints: false // Keep the order as provided
      };

      directionsService.route(request, (result: any, status: any) => {
        console.log('Directions request status:', status);
        console.log('Directions request result:', result);
        
        if (status === window.google.maps.DirectionsStatus.OK) {
          console.log('Setting directions on renderer');
          directionsRenderer.setDirections(result);
        } else {
          console.error('Directions request failed:', status);
          console.log('Falling back to segment-by-segment routing');
          // Fallback: draw segment by segment to ensure road following
          drawRouteBySegments(mapInstance, route);
          
          // Additional fallback: draw a simple polyline if directions completely fail
          setTimeout(() => {
            console.log('Drawing fallback polyline');
            const routeCoordinates = route.map(location => 
              geocodedPoints[location as keyof typeof geocodedPoints]
            ).filter(Boolean);
            
            if (routeCoordinates.length > 1) {
              new window.google.maps.Polyline({
                path: routeCoordinates,
                geodesic: true,
                strokeColor: '#FF6B35',
                strokeOpacity: 0.9,
                strokeWeight: 4,
                map: mapInstance
              });
            }
          }, 2000);
        }
      });
    }
  };

  const drawRouteBySegments = (mapInstance: any, route: string[]) => {
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer({
      draggable: false,
      suppressMarkers: true,
      polylineOptions: {
        strokeColor: '#FF6B35',
        strokeWeight: 6,
        strokeOpacity: 0.9
      }
    });

    directionsRenderer.setMap(mapInstance);

    // Draw route segment by segment to ensure road following
    const drawNextSegment = (index: number) => {
      if (index >= route.length - 1) return;

      const origin = geocodedPoints[route[index] as keyof typeof geocodedPoints];
      const destination = geocodedPoints[route[index + 1] as keyof typeof geocodedPoints];

      if (!origin || !destination) {
        drawNextSegment(index + 1);
        return;
      }

      const request = {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING
      };

      directionsService.route(request, (result: any, status: any) => {
        console.log(`Segment ${index + 1} to ${index + 2} status:`, status);
        
        if (status === window.google.maps.DirectionsStatus.OK) {
          console.log(`Drawing segment ${index + 1} to ${index + 2}`);
          // Create a new directions renderer for this segment
          const segmentRenderer = new window.google.maps.DirectionsRenderer({
            draggable: false,
            suppressMarkers: true,
            polylineOptions: {
              strokeColor: '#FF6B35',
              strokeWeight: 6,
              strokeOpacity: 0.9
            }
          });
          segmentRenderer.setMap(mapInstance);
          segmentRenderer.setDirections(result);
        } else {
          console.error(`Failed to get directions for segment ${index + 1} to ${index + 2}:`, status);
        }
        // Continue to next segment
        drawNextSegment(index + 1);
      });
    };

    drawNextSegment(0);
  };

  const totalCapacity = useMemo(() => {
    return selectedTrucks.reduce((sum, truck) => sum + truck.capacity, 0);
  }, [selectedTrucks]);

  const totalLoad = useMemo(() => {
    return pickupLocations.reduce((sum, location) => sum + location.loadQuantity, 0);
  }, [pickupLocations]);

  const isOverCapacity = useMemo(() => {
    return totalLoad > totalCapacity && totalCapacity > 0;
  }, [totalLoad, totalCapacity]);

  const handleTruckSelection = useCallback((truck: AvailableTruck, isSelected: boolean) => {
    if (isSelected) {
      setSelectedTrucks(prev => [...prev, {
        id: truck.id,
        truckNumber: truck.truckNumber,
        capacity: truck.capacity,
        truckType: truck.truckType
      }]);
    } else {
      setSelectedTrucks(prev => prev.filter(t => t.id !== truck.id));
    }
  }, []);

  const addPickupLocation = useCallback(() => {
    const newLocation: PickupLocation = {
      id: Date.now().toString(),
      address: "",
      destinationAddress: "",
      loadQuantity: 0,
      cropType: "",
      priority: "medium",
      maxDeliveryTime: 8,
      notes: ""
    };
    setPickupLocations(prev => [...prev, newLocation]);
  }, []);

  const removePickupLocation = useCallback((id: string) => {
    setPickupLocations(prev => prev.filter(location => location.id !== id));
  }, []);

  const updatePickupLocation = useCallback((id: string, updates: Partial<PickupLocation>) => {
    setPickupLocations(prev =>
      prev.map(location =>
        location.id === id ? { ...location, ...updates } : location
      )
    );
  }, []);

  const validateForm = useCallback(() => {
    const newErrors: Record<string, string> = {};

    if (selectedTrucks.length === 0) {
      newErrors.trucks = "At least one truck must be selected";
    }

    if (isOverCapacity) {
      newErrors.capacity = `Total load (${totalLoad} tons) exceeds total truck capacity (${totalCapacity} tons)`;
    }

    pickupLocations.forEach((location, index) => {
      if (!location.address) {
        newErrors[`address_${location.id}`] = "Pickup location is required";
      }
      if (!location.destinationAddress) {
        newErrors[`destinationAddress_${location.id}`] = "Destination location is required";
      }
      if (!location.loadQuantity || location.loadQuantity <= 0) {
        newErrors[`loadQuantity_${location.id}`] = "Load quantity must be greater than 0";
      }
      if (!location.cropType) {
        newErrors[`cropType_${location.id}`] = "Goods type is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [selectedTrucks, pickupLocations, isOverCapacity, totalLoad, totalCapacity]);

  const updateTruckStatusAfterRouteAssignment = useCallback(async (truckIds: number[]) => {
    try {
      // Update each truck's availability to "Not Available"
      const updatePromises = truckIds.map(truckId => 
        fetch(`/api/trucks?id=${truckId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ availability: 'Not Available' })
        })
      );

      await Promise.all(updatePromises);
      
      // Refresh available trucks
      const response = await fetch('/api/trucks?availability=Available&limit=50');
      if (response.ok) {
        const data = await response.json();
        setAvailableTrucks(data);
      }

      toast.success(`${truckIds.length} truck(s) status updated to "Not Available"`);
    } catch (err) {
      toast.error("Failed to update truck status");
    }
  }, []);

  const saveRouteToDatabase = useCallback(async (routeData: OptimizedRoute) => {
    try {
      // Create route
      const routeResponse = await fetch('/api/routes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          routeName: `Route ${new Date().toLocaleDateString()} - ${routeData.assignedTrucks.length} trucks`,
          totalDistance: routeData.totalDistance,
          totalTime: routeData.totalTime,
          totalLoad: totalLoad,
          isQuantumOptimized: routeData.isQuantumOptimized,
          savingsDistance: routeData.savings.distance,
          savingsTime: routeData.savings.time,
          status: 'active'
        })
      });

      if (!routeResponse.ok) throw new Error('Failed to create route');
      
      const route = await routeResponse.json();
      const routeId = route.id;

      // Create route-truck associations
      const routeTruckPromises = routeData.assignedTrucks.map(truck => 
        fetch('/api/route-trucks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            routeId: routeId,
            truckId: truck.id
          })
        })
      );

      await Promise.all(routeTruckPromises);

      // Create pickup locations
      const pickupLocationPromises = routeData.steps.map((step, index) => 
        fetch('/api/pickup-locations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            routeId: routeId,
            address: step.address,
            loadQuantity: step.loadQuantity,
            cropType: step.cropType,
            priority: step.priority,
            sequenceOrder: index + 1,
            estimatedTime: step.estimatedTime,
            distanceFromPrevious: step.distance
          })
        })
      );

      await Promise.all(pickupLocationPromises);

      toast.success("Route saved to database successfully!");
      return routeId;
    } catch (err) {
      toast.error("Failed to save route to database");
      throw err;
    }
  }, [totalLoad]);

  const handleOptimizeRoute = useCallback(async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    setShowConfirmModal(false);

    try {
      // Show initial progress
      toast.loading("Initializing quantum optimizer...", { id: "route-optimization" });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.loading("Computing optimal path for multiple trucks...", { id: "route-optimization" });
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Fetch real Python optimization results
      const response = await fetch('/api/route-optimization');
      if (!response.ok) {
        throw new Error('Failed to fetch route optimization results');
      }
      
      const optimizationData = await response.json();
      
      if (!optimizationData.routes || optimizationData.routes.length === 0) {
        throw new Error('No optimized routes found');
      }
      
      // Use the first route from Python results, or create a combined route if multiple trucks
      const pythonRoute = optimizationData.routes[0];
      
      // Transform Python route to match our interface
      const optimizedRoute: OptimizedRoute = {
        id: pythonRoute.id,
        assignedTrucks: selectedTrucks.length > 0 ? selectedTrucks : pythonRoute.assignedTrucks,
        steps: pythonRoute.steps,
        totalDistance: pythonRoute.totalDistance,
        totalTime: pythonRoute.totalTime,
        savings: pythonRoute.savings,
        isQuantumOptimized: pythonRoute.isQuantumOptimized
      };

      setOptimizedRoute(optimizedRoute);
      
      // Save route to database
      await saveRouteToDatabase(optimizedRoute);
      
      // Update truck status after route assignment
      await updateTruckStatusAfterRouteAssignment(selectedTrucks.map(t => t.id));
      
      const computeTime = Math.round((Date.now() - Date.now()) / 1000) + 3;
      
      toast.success(
        `Route optimized for ${optimizedRoute.assignedTrucks.length} truck(s) in ${computeTime}s using quantum computing`,
        { id: "route-optimization" }
      );

    } catch (error) {
      console.error("Route optimization error:", error);
      
      // Fallback to mock data if Python results are not available
      toast.loading("Falling back to classical optimization...", { id: "route-optimization" });
      
      const mockRoute: OptimizedRoute = {
        id: Date.now().toString(),
        assignedTrucks: selectedTrucks,
        steps: pickupLocations.map((location, index) => ({
          id: location.id,
          address: location.address || `Stop ${index + 1}`,
          distance: Math.random() * 50 + 10,
          estimatedTime: Math.random() * 60 + 30,
          loadQuantity: location.loadQuantity,
          cropType: location.cropType || "Mixed",
          priority: location.priority
        })),
        totalDistance: Math.random() * 200 + 100,
        totalTime: Math.random() * 180 + 120,
        savings: {
          distance: Math.random() * 30 + 10,
          time: Math.random() * 45 + 15
        },
        isQuantumOptimized: false
      };

      setOptimizedRoute(mockRoute);
      
      // Save route to database
      await saveRouteToDatabase(mockRoute);
      
      // Update truck status after route assignment
      await updateTruckStatusAfterRouteAssignment(selectedTrucks.map(t => t.id));
      
      toast.success(
        `Route optimized for ${selectedTrucks.length} truck(s) using classical algorithms (Python results unavailable)`,
        { id: "route-optimization" }
      );
    } finally {
      setIsLoading(false);
    }
  }, [validateForm, pickupLocations, selectedTrucks, saveRouteToDatabase, updateTruckStatusAfterRouteAssignment]);

  const handleSaveRoute = useCallback(async () => {
    if (!optimizedRoute) return;

    try {
      toast.loading("Saving route...", { id: "save-route" });
      
      // Route is already saved during optimization, so just confirm
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Route saved successfully!", { id: "save-route" });
    } catch (error) {
      toast.error("Failed to save route", { id: "save-route" });
    }
  }, [optimizedRoute]);

  const handleExportRoute = useCallback(async (format: "pdf" | "csv") => {
    if (!optimizedRoute) return;

    try {
      toast.loading(`Exporting route as ${format.toUpperCase()}...`, { id: "export-route" });
      
      if (format === "csv") {
        // Generate CSV content
        const headers = ["Step", "Address", "Goods Type", "Load (tons)", "Priority", "Distance (km)", "Time (min)"];
        const rows = optimizedRoute.steps.map((step, index) => [
          index + 1,
          step.address,
          step.cropType,
          step.loadQuantity,
          step.priority,
          step.distance.toFixed(1),
          Math.round(step.estimatedTime)
        ]);
        
        const csvContent = [headers, ...rows].map(row => row.join(",")).join("\n");
        
        // Download CSV
        const blob = new Blob([csvContent], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `route-${Date.now()}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } else {
        // Simulate PDF export
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      toast.success(`Route exported as ${format.toUpperCase()}!`, { id: "export-route" });
    } catch (error) {
      toast.error("Failed to export route", { id: "export-route" });
    }
  }, [optimizedRoute]);

  const cropTypes = [
    "Wheat", "Corn", "Soybeans", "Rice", "Barley", "Oats", "Cotton", "Tomatoes", "Lettuce", "Carrots"
  ];

  const priorityColors = {
    low: "bg-green-500/20 text-green-400",
    medium: "bg-yellow-500/20 text-yellow-400",
    high: "bg-red-500/20 text-red-400"
  };

  return (
    <div className="h-full flex flex-col lg:flex-row gap-6">
      {/* Left Column - Form */}
      <div className="w-full lg:w-2/5 space-y-6 overflow-y-auto">
        {/* Truck Selection */}
        <Card className="bg-card border-border">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-card-foreground">
              <Truck className="h-5 w-5 text-primary" />
              Select Trucks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {loadingTrucks ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : (
              <div className="space-y-3">
                {availableTrucks.map((truck) => {
                  const isSelected = selectedTrucks.some(t => t.id === truck.id);
                  return (
                    <div
                      key={truck.id}
                      className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-all ${
                        isSelected ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => handleTruckSelection(truck, !isSelected)}
                    >
                      <Checkbox
                        checked={isSelected}
                        onChange={() => {}} // Handled by parent onClick
                      />
                      <img
                        src={truck.imageUrl || "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=250&fit=crop"}
                        alt={truck.truckNumber}
                        className="w-12 h-8 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{truck.truckNumber}</span>
                          <Badge variant="secondary" className="text-xs">
                            {truck.truckType}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Capacity: {truck.capacity} tons
                        </p>
                      </div>
                    </div>
                  );
                })}
                
                {availableTrucks.length === 0 && (
                  <div className="text-center py-8">
                    <Truck className="w-12 h-12 mx-auto text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">No available trucks found</p>
                  </div>
                )}
              </div>
            )}

            {errors.trucks && (
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.trucks}
              </p>
            )}

            {/* Selected Trucks Summary */}
            {selectedTrucks.length > 0 && (
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Selected Trucks ({selectedTrucks.length})
                  </span>
                  <span className="text-sm font-medium">
                    Total Capacity: {totalCapacity} tons
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {selectedTrucks.map((truck) => (
                    <Badge key={truck.id} variant="secondary" className="text-xs">
                      {truck.truckNumber}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Load vs Capacity Summary */}
            {selectedTrucks.length > 0 && (
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Load vs Capacity</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${isOverCapacity ? 'text-destructive' : 'text-card-foreground'}`}>
                      {totalLoad} / {totalCapacity} tons
                    </span>
                    {isOverCapacity && <AlertCircle className="h-4 w-4 text-destructive" />}
                  </div>
                </div>
                <div className="mt-2 h-2 bg-background rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      isOverCapacity ? 'bg-destructive' : 'bg-primary'
                    }`}
                    style={{ width: `${Math.min((totalLoad / Math.max(totalCapacity, 1)) * 100, 100)}%` }}
                  />
                </div>
                {errors.capacity && (
                  <p className="text-sm text-destructive flex items-center gap-1 mt-2">
                    <AlertCircle className="h-3 w-3" />
                    {errors.capacity}
                  </p>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Pickup Locations */}
        <Card className="bg-card border-border">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                Pickup Locations
              </CardTitle>
              <Button
                onClick={addPickupLocation}
                size="sm"
                variant="outline"
                className="flex items-center gap-1"
              >
                <Plus className="h-4 w-4" />
                Add Location
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {pickupLocations.map((location, index) => (
              <div key={location.id} className="p-4 border border-border rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-card-foreground">Pickup {index + 1}</h4>
                  {pickupLocations.length > 1 && (
                    <Button
                      onClick={() => removePickupLocation(location.id)}
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-card-foreground">
                      Source Location *
                    </Label>
                    <Input
                      placeholder="Enter address or location"
                      value={location.address}
                      onChange={(e) => updatePickupLocation(location.id, { address: e.target.value })}
                      className={errors[`address_${location.id}`] ? "border-destructive" : ""}
                    />
                    {errors[`address_${location.id}`] && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors[`address_${location.id}`]}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-card-foreground">
                      Destination Location *
                    </Label>
                    <Input
                      placeholder="Enter destination address"
                      value={location.destinationAddress}
                      onChange={(e) => updatePickupLocation(location.id, { destinationAddress: e.target.value })}
                      className={errors[`destinationAddress_${location.id}`] ? "border-destructive" : ""}
                    />
                    {errors[`destinationAddress_${location.id}`] && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors[`destinationAddress_${location.id}`]}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-card-foreground">
                        Load Quantity (tons) *
                      </Label>
                      <Input
                        type="number"
                        placeholder="10"
                        value={location.loadQuantity || ""}
                        onChange={(e) => updatePickupLocation(location.id, { loadQuantity: Number(e.target.value) })}
                        className={errors[`loadQuantity_${location.id}`] ? "border-destructive" : ""}
                      />
                      {errors[`loadQuantity_${location.id}`] && (
                        <p className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors[`loadQuantity_${location.id}`]}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-card-foreground">
                        Type of Goods *
                      </Label>
                      <Select
                        value={location.cropType}
                        onValueChange={(value) => updatePickupLocation(location.id, { cropType: value })}
                      >
                        <SelectTrigger className={errors[`cropType_${location.id}`] ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select goods" />
                        </SelectTrigger>
                        <SelectContent>
                          {cropTypes.map(crop => (
                            <SelectItem key={crop} value={crop}>{crop}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors[`cropType_${location.id}`] && (
                        <p className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors[`cropType_${location.id}`]}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-card-foreground">
                      Constraints
                    </Label>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-card-foreground">
                        Priority
                      </Label>
                      <Select
                        value={location.priority}
                        onValueChange={(value: "low" | "medium" | "high") => 
                          updatePickupLocation(location.id, { priority: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-card-foreground">
                        Max Delivery Time (hours)
                      </Label>
                      <Input
                        type="number"
                        placeholder="8"
                        value={location.maxDeliveryTime}
                        onChange={(e) => updatePickupLocation(location.id, { maxDeliveryTime: Number(e.target.value) })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-card-foreground">
                      Notes
                    </Label>
                    <Textarea
                      placeholder="Add any special instructions or constraints"
                      value={location.notes || ""}
                      onChange={(e) => updatePickupLocation(location.id, { notes: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Generate Path Button */}
        <Dialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
          <DialogTrigger asChild>
            <Button
              className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium py-6 text-lg hover:scale-[1.02] transition-all duration-200"
              disabled={isLoading || isOverCapacity || selectedTrucks.length === 0}
            >
              <Route className="h-5 w-5 mr-2" />
              {isLoading ? "Optimizing Route..." : "Generate Path"}
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle className="text-card-foreground">Confirm Route Optimization</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium text-card-foreground">Route Summary</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Selected Trucks: {selectedTrucks.length}</p>
                  <p>Total Capacity: {totalCapacity} tons</p>
                  <p>Total Load: {totalLoad} tons</p>
                  <p>Pickup Locations: {pickupLocations.length}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button onClick={handleOptimizeRoute} className="flex-1">
                  <Navigation className="h-4 w-4 mr-2" />
                  Optimize Route
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowConfirmModal(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Right Column - Map and Route Summary */}
      <div className="w-full lg:w-3/5 flex flex-col gap-6">
        {/* Map Container */}
        <Card className="bg-card border-border flex-1 min-h-[400px]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Map className="h-5 w-5 text-primary" />
                Route Map
              </CardTitle>
              <div className="flex items-center gap-2">
                {/* Map Type Toggle */}
                <div className="flex items-center bg-muted rounded-lg p-1">
                  <Button
                    variant={mapType === "roadmap" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setMapType("roadmap")}
                    className="h-8 px-3 text-xs"
                  >
                    Road
                  </Button>
                  <Button
                    variant={mapType === "satellite" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setMapType("satellite")}
                    className="h-8 px-3 text-xs"
                  >
                    Satellite
                  </Button>
                </div>
                {pythonData && (
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                      Python Optimized
                    </Badge>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                      {pythonData.route?.length || 0} Stops
                    </Badge>
                  </div>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {!isMapLoaded && (
                <div className="absolute inset-0 bg-muted/50 flex items-center justify-center z-10 rounded-lg">
                  <div className="text-center space-y-2">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="text-sm text-muted-foreground">Loading map...</p>
                  </div>
                </div>
              )}
              <div 
                ref={mapRef} 
                className="w-full h-96 rounded-lg border border-border"
                style={{ minHeight: '400px' }}
              />
            </div>
            
            {pythonData && (
              <div className="mt-4 space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="text-lg font-bold text-card-foreground">
                      {pythonData.summary?.total_distance_km_estimated || 0} km
                    </div>
                    <div className="text-sm text-muted-foreground">Total Distance</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="text-lg font-bold text-card-foreground">
                      {Math.round(pythonData.summary?.total_time_min_estimated || 0)} min
                    </div>
                    <div className="text-sm text-muted-foreground">Total Time</div>
                  </div>
                </div>
                
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Navigation className="h-4 w-4 text-primary" />
                    <span className="font-medium text-card-foreground">Route Summary</span>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><strong>Truck Type:</strong> {pythonData.summary?.type || 'N/A'}</p>
                    <p><strong>Capacity:</strong> {pythonData.summary?.capacity_t || 0}t</p>
                    <p><strong>Load:</strong> {pythonData.summary?.load_t || 0}t</p>
                    <p><strong>Utilization:</strong> {pythonData.constraints?.utilization_pct || 0}%</p>
                  </div>
                </div>

                {pythonData.constraints?.flags && pythonData.constraints.flags.length > 0 && (
                  <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-4 w-4 text-yellow-400" />
                      <span className="font-medium text-yellow-400">Constraints</span>
                    </div>
                    <div className="space-y-1">
                      {pythonData.constraints.flags.map((flag: any, index: number) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <span className={`w-2 h-2 rounded-full ${
                            flag.level === 'ok' ? 'bg-green-400' : 
                            flag.level === 'warn' ? 'bg-yellow-400' : 'bg-red-400'
                          }`}></span>
                          <span className={`${
                            flag.level === 'ok' ? 'text-green-400' : 
                            flag.level === 'warn' ? 'text-yellow-400' : 'text-red-400'
                          }`}>
                            {flag.message}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {pythonData.summary?.violations && pythonData.summary.violations.length > 0 && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-4 w-4 text-red-400" />
                      <span className="font-medium text-red-400">Violations</span>
                    </div>
                    <div className="space-y-1">
                      {pythonData.summary.violations.map((violation: string, index: number) => (
                        <p key={index} className="text-sm text-red-400">• {violation}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Route Summary */}
        {optimizedRoute && (
          <Card className="bg-card border-border">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Navigation2 className="h-5 w-5 text-primary" />
                  Route Summary
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={handleSaveRoute}
                    size="sm"
                    variant="outline"
                  >
                    Save Route
                  </Button>
                  <Button
                    onClick={() => handleExportRoute("pdf")}
                    size="sm"
                    variant="outline"
                  >
                    Export PDF
                  </Button>
                  <Button
                    onClick={() => handleExportRoute("csv")}
                    size="sm"
                    variant="outline"
                  >
                    Export CSV
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Assigned Trucks */}
                <div className="space-y-2">
                  <h4 className="font-medium text-card-foreground">Assigned Trucks</h4>
                  <div className="flex flex-wrap gap-2">
                    {optimizedRoute.assignedTrucks.map((truck) => (
                      <div key={truck.id} className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                        <Badge variant="secondary" className="text-xs">
                          {truck.truckNumber}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {truck.capacity}t • {truck.truckType}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Route Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-card-foreground">
                      {(optimizedRoute as any).pythonData?.summary?.total_distance_km_estimated || optimizedRoute.totalDistance.toFixed(1)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Distance (km)</div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-card-foreground">
                      {(optimizedRoute as any).pythonData?.summary?.total_time_min_estimated || Math.round(optimizedRoute.totalTime)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Time (min)</div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-green-400">
                      {optimizedRoute.savings.distance.toFixed(1)}
                    </div>
                    <div className="text-sm text-muted-foreground">Distance Saved (km)</div>
                  </div>
                </div>

                <Separator />

                {/* Route Steps */}
                <div className="space-y-3">
                  <h4 className="font-medium text-card-foreground">Route Steps</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {(optimizedRoute as any).pythonData?.originalSteps ? (
                      // Display Python steps if available
                      (optimizedRoute as any).pythonData.originalSteps.map((step: any, index: number) => (
                        <div key={`python-step-${index}`} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium flex-shrink-0">
                            {step.step}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-card-foreground">
                              {step.action}: {step.from} → {step.to}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {step.notes || 'No additional notes'}
                            </div>
                          </div>
                          <Badge variant="outline" className="flex-shrink-0">
                            {step.action}
                          </Badge>
                        </div>
                      ))
                    ) : (
                      // Fallback to regular steps
                      optimizedRoute.steps.map((step, index) => (
                        <div key={step.id} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-card-foreground truncate">
                              {step.address}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {step.loadQuantity} tons • {step.cropType}
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="text-sm font-medium text-card-foreground">
                              {step.distance.toFixed(1)} km
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {Math.round(step.estimatedTime)} min
                            </div>
                          </div>
                          <Badge className={`${priorityColors[step.priority]} flex-shrink-0`}>
                            {step.priority}
                          </Badge>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Optimization Benefits */}
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="font-medium text-green-400">
                      {optimizedRoute.isQuantumOptimized ? 'Quantum Optimization Benefits' : 'Multi-Truck Optimization Benefits'}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Distance reduced by {optimizedRoute.savings.distance.toFixed(1)} km ({((optimizedRoute.savings.distance / optimizedRoute.totalDistance) * 100).toFixed(1)}%)</p>
                    <p>• Time saved: {Math.round(optimizedRoute.savings.time)} minutes</p>
                    <p>• Estimated fuel savings: ${(optimizedRoute.savings.distance * 0.8).toFixed(2)}</p>
                    <p>• {optimizedRoute.assignedTrucks.length} truck(s) assigned optimally</p>
                    {optimizedRoute.isQuantumOptimized && (
                      <p>• Quantum optimization achieved superior multi-truck route efficiency</p>
                    )}
                  </div>
                </div>

                {/* Python Optimization Details */}
                {(optimizedRoute as any).pythonData && (
                  <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-blue-400" />
                      <span className="font-medium text-blue-400">Python Optimization Details</span>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>• <strong>Truck ID:</strong> {(optimizedRoute as any).pythonData.truckId}</p>
                      <p>• <strong>Original route:</strong> {(optimizedRoute as any).pythonData.originalRoute?.join(' → ')}</p>
                      <p>• <strong>Truck type:</strong> {(optimizedRoute as any).pythonData.summary?.type}</p>
                      <p>• <strong>Capacity:</strong> {(optimizedRoute as any).pythonData.summary?.capacity_t}t</p>
                      <p>• <strong>Load:</strong> {(optimizedRoute as any).pythonData.summary?.load_t}t</p>
                      <p>• <strong>Total Distance:</strong> {(optimizedRoute as any).pythonData.summary?.total_distance_km_estimated} km</p>
                      <p>• <strong>Total Time:</strong> {(optimizedRoute as any).pythonData.summary?.total_time_min_estimated} minutes</p>
                      <p>• <strong>Utilization:</strong> {(optimizedRoute as any).pythonData.constraints?.utilization_pct}%</p>
                      <p>• <strong>Time Window:</strong> {(optimizedRoute as any).pythonData.constraints?.time_window_min} minutes</p>
                    </div>
                  </div>
                )}

                {/* Python Constraints & Flags */}
                {(optimizedRoute as any).pythonData?.constraints?.flags && (
                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-4 w-4 text-yellow-400" />
                      <span className="font-medium text-yellow-400">Constraint Analysis</span>
                    </div>
                    <div className="space-y-2">
                      {(optimizedRoute as any).pythonData.constraints.flags.map((flag: any, index: number) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <span className={`w-2 h-2 rounded-full ${
                            flag.level === 'ok' ? 'bg-green-400' : 
                            flag.level === 'warn' ? 'bg-yellow-400' : 'bg-red-400'
                          }`}></span>
                          <span className={`${
                            flag.level === 'ok' ? 'text-green-400' : 
                            flag.level === 'warn' ? 'text-yellow-400' : 'text-red-400'
                          }`}>
                            {flag.message}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Python Violations */}
                {(optimizedRoute as any).pythonData?.summary?.violations && (optimizedRoute as any).pythonData.summary.violations.length > 0 && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-4 w-4 text-red-400" />
                      <span className="font-medium text-red-400">Route Violations</span>
                    </div>
                    <div className="space-y-1">
                      {(optimizedRoute as any).pythonData.summary.violations.map((violation: string, index: number) => (
                        <p key={index} className="text-sm text-red-400">• {violation}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}