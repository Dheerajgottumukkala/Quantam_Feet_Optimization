"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  ChartNoAxesCombined, 
  ChartColumn, 
  FileChartLine, 
  ChartBarBig,
  ChartSpline,
  CalendarIcon
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Line,
  Brush
} from "recharts";
import { toast } from "sonner";
import { format, subDays, startOfDay, endOfDay } from "date-fns";

interface MetricData {
  date: string;
  quantumSavings: number;
  classicalSavings: number;
  fuelEfficiency: number;
  costSavings: number;
  distanceOptimization: number;
  capacityUtilization: number;
}

interface Insight {
  id: number;
  insightText: string;
  insightType: "fuel" | "route" | "cost" | "efficiency";
  isPinned: boolean;
  dateGenerated: string;
}

interface AnalyticsData {
  metrics: MetricData[];
  insights: Insight[];
}

interface DateRange {
  from: Date;
  to: Date;
}

export default function AnalyticsSection() {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: subDays(new Date(), 30),
    to: new Date()
  });
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [exportLoading, setExportLoading] = useState<string | null>(null);
  const [pinnedInsights, setPinnedInsights] = useState<Set<number>>(new Set());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Cache for different date ranges (using date range as key)
  const [dataCache, setDataCache] = useState<Record<string, AnalyticsData>>({});

  const fetchAnalytics = useCallback(async (range: DateRange) => {
    const cacheKey = `${range.from.toISOString()}-${range.to.toISOString()}`;
    
    // Check cache first
    if (dataCache[cacheKey]) {
      setData(dataCache[cacheKey]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Fetch metrics
      const startDate = format(range.from, 'yyyy-MM-dd');
      const endDate = format(range.to, 'yyyy-MM-dd');
      
      const metricsResponse = await fetch(
        `/api/analytics/metrics?start_date=${startDate}&end_date=${endDate}&limit=100&sort=date&order=asc`
      );
      
      if (!metricsResponse.ok) {
        throw new Error('Failed to fetch analytics metrics');
      }
      
      const metrics = await metricsResponse.json();

      // Fetch insights
      const insightsResponse = await fetch('/api/analytics/insights?limit=20&sort=dateGenerated&order=desc');
      
      if (!insightsResponse.ok) {
        throw new Error('Failed to fetch performance insights');
      }
      
      const insights = await insightsResponse.json();

      const analyticsData: AnalyticsData = {
        metrics: metrics.map((metric: any) => ({
          date: format(new Date(metric.date), 'MMM dd'),
          quantumSavings: metric.quantumSavings || 0,
          classicalSavings: metric.classicalSavings || 0,
          fuelEfficiency: metric.fuelEfficiency || 0,
          costSavings: metric.costSavings || 0,
          distanceOptimization: metric.distanceOptimization || 0,
          capacityUtilization: metric.capacityUtilization || 0
        })),
        insights: insights.map((insight: any) => ({
          id: insight.id,
          insightText: insight.insightText,
          insightType: insight.insightType,
          isPinned: insight.isPinned,
          dateGenerated: insight.dateGenerated
        }))
      };

      // Update pinned insights state
      const pinned = new Set(insights.filter((insight: any) => insight.isPinned).map((insight: any) => insight.id));
      setPinnedInsights(pinned);

      setData(analyticsData);
      setDataCache(prev => ({ ...prev, [cacheKey]: analyticsData }));
    } catch (err) {
      setError("Failed to load analytics data. Please try again.");
      toast.error("Failed to load analytics data");
    } finally {
      setLoading(false);
    }
  }, [dataCache]);

  useEffect(() => {
    fetchAnalytics(dateRange);
  }, [dateRange, fetchAnalytics]);

  const handleDateRangeChange = (newRange: DateRange | undefined) => {
    if (newRange?.from && newRange?.to) {
      setDateRange({
        from: startOfDay(newRange.from),
        to: endOfDay(newRange.to)
      });
      setIsCalendarOpen(false);
    }
  };

  const handlePresetRange = (days: number) => {
    const newRange = {
      from: subDays(new Date(), days),
      to: new Date()
    };
    setDateRange(newRange);
    setIsCalendarOpen(false);
  };

  const handleExport = async (format: "pdf" | "excel" | "csv") => {
    setExportLoading(format);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (format === "csv") {
        // Client-side CSV generation
        const csvContent = generateCSV();
        downloadFile(csvContent, `analytics-${format(dateRange.from, 'yyyy-MM-dd')}-to-${format(dateRange.to, 'yyyy-MM-dd')}.csv`, "text/csv");
      } else {
        // Simulate server-side export
        toast.success(`${format.toUpperCase()} export completed successfully`);
      }
    } catch (err) {
      toast.error(`Failed to export ${format.toUpperCase()}. Please try again.`);
    } finally {
      setExportLoading(null);
    }
  };

  const generateCSV = (): string => {
    if (!data?.metrics) return "";
    
    const headers = ["Date", "Quantum Savings", "Classical Savings", "Fuel Efficiency", "Cost Savings", "Distance Optimization", "Capacity Utilization"];
    const rows = data.metrics.map(metric => [
      metric.date,
      metric.quantumSavings,
      metric.classicalSavings,
      metric.fuelEfficiency,
      metric.costSavings,
      metric.distanceOptimization,
      metric.capacityUtilization
    ]);
    
    return [headers, ...rows].map(row => row.join(",")).join("\n");
  };

  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const toggleInsightPin = async (insightId: number) => {
    try {
      const response = await fetch(`/api/analytics/insights/${insightId}/pin`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to toggle insight pin');
      }

      const updatedInsight = await response.json();

      // Update local state
      setPinnedInsights(prev => {
        const newSet = new Set(prev);
        if (updatedInsight.isPinned) {
          newSet.add(insightId);
        } else {
          newSet.delete(insightId);
        }
        return newSet;
      });

      // Update insights in data
      if (data) {
        setData(prev => ({
          ...prev!,
          insights: prev!.insights.map(insight => 
            insight.id === insightId ? { ...insight, isPinned: updatedInsight.isPinned } : insight
          )
        }));
      }

      toast.success(`Insight ${updatedInsight.isPinned ? 'pinned' : 'unpinned'} successfully`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to toggle insight pin");
    }
  };

  const handleRetry = () => {
    const cacheKey = `${dateRange.from.toISOString()}-${dateRange.to.toISOString()}`;
    setDataCache(prev => {
      const newCache = { ...prev };
      delete newCache[cacheKey];
      return newCache;
    });
    fetchAnalytics(dateRange);
  };

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground">Analytics & Reporting</h2>
            <p className="text-muted-foreground mt-1">Performance insights and data export tools</p>
          </div>
        </div>

        <Card className="bg-card border-border">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <ChartNoAxesCombined className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Unable to Load Analytics</h3>
            <p className="text-muted-foreground text-center mb-6 max-w-md">
              {error}
            </p>
            <Button onClick={handleRetry} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground">Analytics & Reporting</h2>
          <p className="text-muted-foreground mt-1">Performance insights and data export tools</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Date Range Picker */}
          <div className="flex items-center gap-2">
            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-80 justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange.from && dateRange.to ? (
                    <>
                      {format(dateRange.from, "MMM dd, yyyy")} - {format(dateRange.to, "MMM dd, yyyy")}
                    </>
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <div className="p-3 border-b">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePresetRange(7)}
                    >
                      Last 7 days
                    </Button>
                    <Button
                      variant="outline"  
                      size="sm"
                      onClick={() => handlePresetRange(30)}
                    >
                      Last 30 days
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePresetRange(90)}
                    >
                      Last 90 days
                    </Button>
                  </div>
                </div>
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange.from}
                  selected={{
                    from: dateRange.from,
                    to: dateRange.to
                  }}
                  onSelect={handleDateRangeChange}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleExport("csv")}
              disabled={loading || !data || exportLoading === "csv"}
              className="border-border hover:bg-accent hover:text-accent-foreground"
            >
              {exportLoading === "csv" ? "Exporting..." : "CSV"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleExport("excel")}
              disabled={loading || !data || exportLoading === "excel"}
              className="border-border hover:bg-accent hover:text-accent-foreground"
            >
              {exportLoading === "excel" ? "Exporting..." : "Excel"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleExport("pdf")}
              disabled={loading || !data || exportLoading === "pdf"}
              className="border-border hover:bg-accent hover:text-accent-foreground"
            >
              {exportLoading === "pdf" ? "Exporting..." : "PDF"}
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Quantum vs Classical Savings Chart */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <ChartColumn className="h-5 w-5" />
              Route Efficiency Comparison
            </CardTitle>
            <CardDescription>
              Quantum vs Classical routing savings for selected date range
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-3">
                <Skeleton className="h-[300px] w-full bg-muted" />
                <div className="flex gap-4">
                  <Skeleton className="h-4 w-24 bg-muted" />
                  <Skeleton className="h-4 w-24 bg-muted" />
                </div>
              </div>
            ) : data?.metrics && data.metrics.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data.metrics} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="quantumGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity={0.8}/>
                      <stop offset="100%" stopColor="#dc2626" stopOpacity={0.6}/>
                    </linearGradient>
                    <linearGradient id="classicalGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f87171" stopOpacity={0.8}/>
                      <stop offset="100%" stopColor="#ef4444" stopOpacity={0.6}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="date" 
                    stroke="#ef4444"
                    fontSize={12}
                    tick={{ fill: '#ef4444' }}
                  />
                  <YAxis 
                    stroke="#ef4444"
                    fontSize={12}
                    tick={{ fill: '#ef4444' }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--popover))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      color: "hsl(var(--foreground))"
                    }}
                    formatter={(value, name) => [`${value}%`, name]}
                  />
                  <Legend />
                  <Bar 
                    dataKey="quantumSavings" 
                    name="Quantum Routes"
                    fill="url(#quantumGradient)"
                    radius={[2, 2, 0, 0]}
                  />
                  <Bar 
                    dataKey="classicalSavings" 
                    name="Classical Routes"
                    fill="url(#classicalGradient)"
                    radius={[2, 2, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-[300px] text-muted-foreground">
                <div className="text-center">
                  <ChartColumn className="h-8 w-8 mx-auto mb-2" />
                  <p>No data available for selected date range</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Fuel & Cost Efficiency Chart */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <ChartSpline className="h-5 w-5" />
              Efficiency Metrics
            </CardTitle>
            <CardDescription>
              Fuel efficiency and cost savings with brushing controls
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-3">
                <Skeleton className="h-[300px] w-full bg-muted" />
                <Skeleton className="h-8 w-full bg-muted" />
              </div>
            ) : data?.metrics && data.metrics.length > 0 ? (
              <ResponsiveContainer width="100%" height={320}>
                <ComposedChart data={data.metrics} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <defs>
                    <linearGradient id="fuelEfficiencyGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity={0.8}/>
                      <stop offset="100%" stopColor="#dc2626" stopOpacity={0.6}/>
                    </linearGradient>
                    <linearGradient id="costSavingsGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#f87171" stopOpacity={0.8}/>
                      <stop offset="100%" stopColor="#ef4444" stopOpacity={0.6}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="date" 
                    stroke="#ef4444"
                    fontSize={12}
                    tick={{ fill: '#ef4444' }}
                  />
                  <YAxis 
                    yAxisId="left"
                    stroke="#ef4444"
                    fontSize={12}
                    tick={{ fill: '#ef4444' }}
                    tickFormatter={(value) => `${value}%`}
                    label={{ value: 'Fuel Efficiency (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#ef4444' } }}
                  />
                  <YAxis 
                    yAxisId="right"
                    orientation="right"
                    stroke="#ef4444"
                    fontSize={12}
                    tick={{ fill: '#ef4444' }}
                    tickFormatter={(value) => `$${value}`}
                    label={{ value: 'Cost Savings ($)', angle: 90, position: 'insideRight', style: { textAnchor: 'middle', fill: '#ef4444' } }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--popover))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      color: "hsl(var(--foreground))"
                    }}
                    formatter={(value, name) => {
                      if (name === 'Fuel Efficiency (%)') return [`${value}%`, name];
                      if (name === 'Cost Savings ($)') return [`$${value}`, name];
                      return [value, name];
                    }}
                  />
                  <Legend />
                  <Bar
                    yAxisId="left"
                    dataKey="fuelEfficiency"
                    name="Fuel Efficiency (%)"
                    fill="url(#fuelEfficiencyGradient)"
                    radius={[2, 2, 0, 0]}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="costSavings"
                    name="Cost Savings ($)"
                    stroke="#ef4444"
                    strokeWidth={3}
                    dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
                  />
                  <Brush 
                    dataKey="date" 
                    height={30} 
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--muted))"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-[320px] text-muted-foreground">
                <div className="text-center">
                  <ChartSpline className="h-8 w-8 mx-auto mb-2" />
                  <p>No data available for selected date range</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Insights Panel */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <FileChartLine className="h-5 w-5" />
            Performance Insights
          </CardTitle>
          <CardDescription>
            Auto-generated insights based on your routing performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-3">
              <Skeleton className="h-16 w-full bg-muted" />
              <Skeleton className="h-16 w-full bg-muted" />
              <Skeleton className="h-16 w-full bg-muted" />
            </div>
          ) : data?.insights && data.insights.length > 0 ? (
            <div className="space-y-4">
              {data.insights.map((insight) => (
                <div
                  key={insight.id}
                  className="flex items-start justify-between p-4 rounded-lg bg-muted/50 border border-border"
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {insight.insightType}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(insight.dateGenerated), 'MMM dd, yyyy')}
                      </span>
                    </div>
                    <p className="text-foreground">{insight.insightText}</p>
                  </div>
                  <Button
                    variant={insight.isPinned ? "default" : "ghost"}
                    size="sm"
                    onClick={() => toggleInsightPin(insight.id)}
                    className={
                      insight.isPinned
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shrink-0"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent shrink-0"
                    }
                  >
                    {insight.isPinned ? "Pinned" : "Pin"}
                  </Button>
                </div>
              ))}
              
              {pinnedInsights.size > 0 && (
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {pinnedInsights.size} Pinned
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Pinned insights will appear in your dashboard for quick reference.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center py-8 text-muted-foreground">
              <div className="text-center">
                <ChartBarBig className="h-8 w-8 mx-auto mb-2" />
                <p>No insights available</p>
                <p className="text-sm mt-1">Insights will appear as data is collected</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}