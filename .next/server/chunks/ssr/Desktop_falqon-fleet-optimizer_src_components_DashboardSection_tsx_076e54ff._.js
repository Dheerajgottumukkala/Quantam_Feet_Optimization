module.exports = {

"[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FleetDashboard": (()=>FleetDashboard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$GoogleMapComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/GoogleMapComponent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fuel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Fuel$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/fuel.js [app-ssr] (ecmascript) <export default as Fuel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/route.js [app-ssr] (ecmascript) <export default as Route>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/timer.js [app-ssr] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
const FleetDashboard = ()=>{
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date().toISOString().slice(0, 10));
    const [dashboardData, setDashboardData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pythonData, setPythonData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch dashboard data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchDashboardData = async ()=>{
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
                const activeRoutes = routes.filter((route)=>route.status === 'active').length;
                const totalSavings = analytics.reduce((sum, metric)=>sum + (metric.costSavings || 0), 0);
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
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to load dashboard data");
            } finally{
                setLoading(false);
            }
        };
        fetchDashboardData();
    }, []);
    // Provide explicit route data for map rendering (not the route planning map)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const truck1Data = {
            route: [
                "Vishnu Institute of Technology, Bhimavaram",
                "Kalla Farm",
                "Undi Urban Farm",
                "Narsapur Milk Dairy",
                "Vishnu Institute of Technology, Bhimavaram"
            ],
            steps: [
                {
                    step: 1,
                    action: "Drive",
                    from: "Vishnu Institute of Technology, Bhimavaram",
                    to: "Kalla Farm",
                    notes: null
                },
                {
                    step: 2,
                    action: "Pickup",
                    from: "Kalla Farm",
                    to: "Kalla Farm",
                    notes: null
                },
                {
                    step: 3,
                    action: "Drive",
                    from: "Kalla Farm",
                    to: "Undi Urban Farm",
                    notes: null
                },
                {
                    step: 4,
                    action: "Pickup",
                    from: "Undi Urban Farm",
                    to: "Undi Urban Farm",
                    notes: null
                },
                {
                    step: 5,
                    action: "Drive",
                    from: "Undi Urban Farm",
                    to: "Narsapur Milk Dairy",
                    notes: null
                },
                {
                    step: 6,
                    action: "Delivery",
                    from: "Narsapur Milk Dairy",
                    to: "Narsapur Milk Dairy",
                    notes: null
                },
                {
                    step: 7,
                    action: "Drive",
                    from: "Narsapur Milk Dairy",
                    to: "Vishnu Institute of Technology, Bhimavaram",
                    notes: null
                }
            ],
            constraints: {
                utilization_pct: 87.5,
                flags: [
                    {
                        level: "ok",
                        message: "Capacity constraint satisfied"
                    },
                    {
                        level: "ok",
                        message: "Refrigerated truck constraint satisfied"
                    },
                    {
                        level: "warn",
                        message: "Milk time window violated (time: 154.5min > 120min)"
                    }
                ],
                time_window_min: 120.0
            },
            summary: {
                type: "Refrigerated",
                capacity_t: 8,
                load_t: 7.0,
                total_distance_km_estimated: 74.1,
                total_time_min_estimated: 127.0,
                violations: [
                    "Time window violated: 127.0 min > 120.0 min"
                ]
            },
            route_plan: [
                {
                    name: "Vishnu Institute of Technology, Bhimavaram",
                    lat: 16.5659605,
                    lon: 81.5225313
                },
                {
                    name: "Kalla Farm",
                    lat: 16.5360809,
                    lon: 81.4113414
                },
                {
                    name: "Undi Urban Farm",
                    lat: 16.5856693,
                    lon: 81.4577972
                },
                {
                    name: "Narsapur Milk Dairy",
                    lat: 16.4405615,
                    lon: 81.7024526
                },
                {
                    name: "Vishnu Institute of Technology, Bhimavaram",
                    lat: 16.5659605,
                    lon: 81.5225313
                }
            ]
        };
        setPythonData(truck1Data);
    }, []);
    // Calculate KPIs from real data
    const calculateKPIs = ()=>{
        if (!dashboardData?.analytics || dashboardData.analytics.length === 0) {
            return {
                distanceOptimization: {
                    quantum: 0,
                    baseline: 0,
                    improvement: 0
                },
                fuelSavings: {
                    quantum: 0,
                    baseline: 0,
                    improvement: 0
                },
                capacityUtilization: {
                    quantum: 0,
                    baseline: 0,
                    improvement: 0
                }
            };
        }
        const latestMetrics = dashboardData.analytics.slice(0, 7); // Last 7 days
        const avgQuantumSavings = latestMetrics.reduce((sum, metric)=>sum + (metric.quantumSavings || 0), 0) / latestMetrics.length;
        const avgClassicalSavings = latestMetrics.reduce((sum, metric)=>sum + (metric.classicalSavings || 0), 0) / latestMetrics.length;
        const avgFuelEfficiency = latestMetrics.reduce((sum, metric)=>sum + (metric.fuelEfficiency || 0), 0) / latestMetrics.length;
        const avgCapacityUtilization = latestMetrics.reduce((sum, metric)=>sum + (metric.capacityUtilization || 0), 0) / latestMetrics.length;
        const avgDistanceOptimization = latestMetrics.reduce((sum, metric)=>sum + (metric.distanceOptimization || 0), 0) / latestMetrics.length;
        return {
            distanceOptimization: {
                quantum: Math.round(avgQuantumSavings * 10),
                baseline: Math.round(avgClassicalSavings * 10),
                improvement: Math.round(avgDistanceOptimization)
            },
            fuelSavings: {
                quantum: Math.round(avgFuelEfficiency * 0.6),
                baseline: Math.round(avgFuelEfficiency * 0.9),
                improvement: Math.round((avgFuelEfficiency * 0.9 - avgFuelEfficiency * 0.6) / (avgFuelEfficiency * 0.9) * 100)
            },
            capacityUtilization: {
                quantum: Math.round(avgCapacityUtilization),
                baseline: Math.round(avgCapacityUtilization * 0.85),
                improvement: Math.round(avgCapacityUtilization - avgCapacityUtilization * 0.85)
            }
        };
    };
    const kpiData = calculateKPIs();
    // Get last trips from routes
    const lastTrips = dashboardData?.routes.filter((route)=>route.status === 'completed').slice(0, 4).map((route)=>({
            vehicle: `FALQ-${String(Math.floor(Math.random() * 20) + 1).padStart(3, '0')}`,
            distance: `${route.totalDistance?.toFixed(0) || Math.floor(Math.random() * 300 + 100)} km`
        })) || [];
    // Get active vehicles from available trucks
    const activeVehicles = dashboardData?.trucks.filter((truck)=>truck.availability === 'Not Available').slice(0, 4).map((truck, index)=>({
            vehicle: truck.truckNumber,
            status: [
                "In Transit",
                "Loading",
                "Delivering"
            ][index % 3],
            location: [
                "Highway 401",
                "Warehouse C",
                "Downtown Core",
                "Industrial Zone"
            ][index % 4]
        })) || [];
    // Generate route comparison data
    const routeComparison = [
        {
            metric: "Total Distance",
            classical: dashboardData?.routes.filter((r)=>!r.isQuantumOptimized).reduce((sum, r)=>sum + (r.totalDistance || 0), 0).toFixed(0) + " km" || "1,247 km",
            quantum: dashboardData?.routes.filter((r)=>r.isQuantumOptimized).reduce((sum, r)=>sum + (r.totalDistance || 0), 0).toFixed(0) + " km" || "832 km",
            improvement: kpiData.distanceOptimization.improvement + "% reduction"
        },
        {
            metric: "Travel Time",
            classical: Math.round((dashboardData?.routes.filter((r)=>!r.isQuantumOptimized).reduce((sum, r)=>sum + (r.totalTime || 0), 0) || 1110) / 60) + " hours",
            quantum: Math.round((dashboardData?.routes.filter((r)=>r.isQuantumOptimized).reduce((sum, r)=>sum + (r.totalTime || 0), 0) || 768) / 60) + " hours",
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
    const hasTripsForSelectedDate = (dashboardData?.routes || []).some((route)=>{
        const d = (route.updatedAt || route.createdAt || "").slice(0, 10);
        return d === selectedDate;
    });
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src\\components\\DashboardSection.tsx:245:6",
            "data-orchids-name": "div",
            className: "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\DashboardSection.tsx:246:8",
                "data-orchids-name": "div",
                className: "flex flex-col items-center space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\components\\DashboardSection.tsx:247:10",
                        "data-orchids-name": "div",
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        "data-orchids-id": "src\\components\\DashboardSection.tsx:248:10",
                        "data-orchids-name": "p",
                        className: "text-slate-400",
                        children: "Loading dashboard..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                lineNumber: 246,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
            lineNumber: 245,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src\\components\\DashboardSection.tsx:256:6",
            "data-orchids-name": "div",
            className: "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\DashboardSection.tsx:257:8",
                "data-orchids-name": "div",
                className: "text-center space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        "data-orchids-id": "src\\components\\DashboardSection.tsx:258:10",
                        "data-orchids-name": "p",
                        className: "text-red-400",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        "data-orchids-id": "src\\components\\DashboardSection.tsx:259:10",
                        "data-orchids-name": "Button",
                        onClick: ()=>window.location.reload(),
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                lineNumber: 257,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
            lineNumber: 256,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\DashboardSection.tsx:268:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\DashboardSection.tsx:270:6",
                "data-orchids-name": "div",
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\components\\DashboardSection.tsx:271:8",
                        "data-orchids-name": "div",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                "data-orchids-id": "src\\components\\DashboardSection.tsx:272:10",
                                "data-orchids-name": "h1",
                                className: "text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
                                children: "FALQON Fleet Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src\\components\\DashboardSection.tsx:275:10",
                                "data-orchids-name": "p",
                                className: "text-slate-400 mt-1",
                                children: "Quantum-optimized fleet management system"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\components\\DashboardSection.tsx:277:8",
                        "data-orchids-name": "div",
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                            "data-orchids-id": "src\\components\\DashboardSection.tsx:278:10",
                            "data-orchids-name": "Badge",
                            variant: "outline",
                            className: "bg-green-500/10 text-green-400 border-green-500/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:279:12",
                                    "data-orchids-name": "Activity",
                                    className: "w-3 h-3 mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this),
                                "System Online"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\DashboardSection.tsx:286:6",
                "data-orchids-name": "div",
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src\\components\\DashboardSection.tsx:287:8",
                        "data-orchids-name": "Card",
                        className: "bg-gradient-to-br from-blue-900/50 to-blue-800/50 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            "data-orchids-id": "src\\components\\DashboardSection.tsx:288:10",
                            "data-orchids-name": "CardContent",
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\DashboardSection.tsx:289:12",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:290:14",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:291:16",
                                                "data-orchids-name": "p",
                                                className: "text-blue-200 text-sm font-medium",
                                                children: "Total Pickups"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:292:16",
                                                "data-orchids-name": "p",
                                                className: "text-3xl font-bold text-white mt-1",
                                                children: dashboardData?.totalPickups.toLocaleString() || 0
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                lineNumber: 292,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:295:16",
                                                "data-orchids-name": "p",
                                                className: "text-blue-300 text-xs mt-1",
                                                children: "Raw materials collected"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                lineNumber: 295,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                        lineNumber: 290,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:297:14",
                                        "data-orchids-name": "div",
                                        className: "h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:298:16",
                                            "data-orchids-name": "Package",
                                            className: "h-6 w-6 text-blue-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                lineNumber: 289,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src\\components\\DashboardSection.tsx:304:8",
                        "data-orchids-name": "Card",
                        className: "bg-gradient-to-br from-purple-900/50 to-purple-800/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            "data-orchids-id": "src\\components\\DashboardSection.tsx:305:10",
                            "data-orchids-name": "CardContent",
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\DashboardSection.tsx:306:12",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:307:14",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:308:16",
                                                "data-orchids-name": "p",
                                                className: "text-purple-200 text-sm font-medium",
                                                children: "Active Routes"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                lineNumber: 308,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:309:16",
                                                "data-orchids-name": "p",
                                                className: "text-3xl font-bold text-white mt-1",
                                                children: dashboardData?.activeRoutes || 0
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                lineNumber: 309,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:312:16",
                                                "data-orchids-name": "p",
                                                className: "text-purple-300 text-xs mt-1",
                                                children: "Currently optimized"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                lineNumber: 312,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:314:14",
                                        "data-orchids-name": "div",
                                        className: "h-12 w-12 bg-purple-500/20 rounded-lg flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"], {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:315:16",
                                            "data-orchids-name": "Route",
                                            className: "h-6 w-6 text-purple-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 315,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                lineNumber: 306,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src\\components\\DashboardSection.tsx:321:8",
                        "data-orchids-name": "Card",
                        className: "bg-gradient-to-br from-green-900/50 to-green-800/50 border-green-500/20 hover:border-green-400/40 transition-all duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            "data-orchids-id": "src\\components\\DashboardSection.tsx:322:10",
                            "data-orchids-name": "CardContent",
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\DashboardSection.tsx:323:12",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:324:14",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:325:16",
                                                "data-orchids-name": "p",
                                                className: "text-green-200 text-sm font-medium",
                                                children: "ROI This Month"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                lineNumber: 325,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:326:16",
                                                "data-orchids-name": "p",
                                                className: "text-3xl font-bold text-white mt-1",
                                                children: [
                                                    "$",
                                                    dashboardData?.roi.toLocaleString() || 0
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:329:16",
                                                "data-orchids-name": "p",
                                                className: "text-green-300 text-xs mt-1",
                                                children: "Quantum optimization savings"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:331:14",
                                        "data-orchids-name": "div",
                                        className: "h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:332:16",
                                            "data-orchids-name": "DollarSign",
                                            className: "h-6 w-6 text-green-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 332,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                        lineNumber: 331,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                lineNumber: 323,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\DashboardSection.tsx:340:6",
                "data-orchids-name": "div",
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src\\components\\DashboardSection.tsx:342:8",
                        "data-orchids-name": "Card",
                        className: "bg-slate-800/50 border-slate-700/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                "data-orchids-id": "src\\components\\DashboardSection.tsx:343:10",
                                "data-orchids-name": "CardHeader",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:344:12",
                                    "data-orchids-name": "CardTitle",
                                    className: "flex items-center gap-2 text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:345:14",
                                            "data-orchids-name": "MapPin",
                                            className: "h-5 w-5 text-blue-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this),
                                        "Most Recent Completed Route"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                lineNumber: 343,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                "data-orchids-id": "src\\components\\DashboardSection.tsx:349:10",
                                "data-orchids-name": "CardContent",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$GoogleMapComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:350:12",
                                    "data-orchids-name": "GoogleMapComponent",
                                    pythonData: pythonData,
                                    className: ""
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                    lineNumber: 350,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\components\\DashboardSection.tsx:355:8",
                        "data-orchids-name": "div",
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-orchids-id": "src\\components\\DashboardSection.tsx:357:10",
                                "data-orchids-name": "Card",
                                className: "bg-slate-800/50 border-slate-700/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:358:12",
                                        "data-orchids-name": "CardHeader",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:359:14",
                                            "data-orchids-name": "CardTitle",
                                            className: "text-slate-200 text-lg",
                                            children: "Last Trip"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 359,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                        lineNumber: 358,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:361:12",
                                        "data-orchids-name": "CardContent",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:362:14",
                                            "data-orchids-name": "Table",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:363:16",
                                                    "data-orchids-name": "TableHeader",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:364:18",
                                                        "data-orchids-name": "TableRow",
                                                        className: "border-slate-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:365:20",
                                                                "data-orchids-name": "TableHead",
                                                                className: "text-slate-300",
                                                                children: "Vehicle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                lineNumber: 365,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:366:20",
                                                                "data-orchids-name": "TableHead",
                                                                className: "text-slate-300",
                                                                children: "Distance"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                lineNumber: 366,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:369:16",
                                                    "data-orchids-name": "TableBody",
                                                    children: lastTrips.length > 0 ? lastTrips.map((trip, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                            "data-map-index": index,
                                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:371:20@lastTrips",
                                                            "data-orchids-name": "TableRow",
                                                            className: "border-slate-700/50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    "data-map-index": index,
                                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:372:22@lastTrips",
                                                                    "data-orchids-name": "TableCell",
                                                                    className: "text-slate-200 font-medium",
                                                                    children: trip.vehicle
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                    lineNumber: 372,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    "data-map-index": index,
                                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:373:22@lastTrips",
                                                                    "data-orchids-name": "TableCell",
                                                                    className: "text-slate-300",
                                                                    children: trip.distance
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                    lineNumber: 373,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 21
                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:376:20",
                                                        "data-orchids-name": "TableRow",
                                                        className: "border-slate-700/50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:377:22",
                                                            "data-orchids-name": "TableCell",
                                                            className: "text-slate-400",
                                                            colSpan: 2,
                                                            children: "No completed routes found"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                            lineNumber: 377,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 362,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                        lineNumber: 361,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                lineNumber: 357,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-orchids-id": "src\\components\\DashboardSection.tsx:386:10",
                                "data-orchids-name": "Card",
                                className: "bg-slate-800/50 border-slate-700/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:387:12",
                                        "data-orchids-name": "CardHeader",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:388:14",
                                            "data-orchids-name": "CardTitle",
                                            className: "text-slate-200 text-lg",
                                            children: "Vehicle Tracking"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 388,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                        lineNumber: 387,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:390:12",
                                        "data-orchids-name": "CardContent",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:391:14",
                                            "data-orchids-name": "Table",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:392:16",
                                                    "data-orchids-name": "TableHeader",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:393:18",
                                                        "data-orchids-name": "TableRow",
                                                        className: "border-slate-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:394:20",
                                                                "data-orchids-name": "TableHead",
                                                                className: "text-slate-300",
                                                                children: "Vehicle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:395:20",
                                                                "data-orchids-name": "TableHead",
                                                                className: "text-slate-300",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                lineNumber: 395,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:396:20",
                                                                "data-orchids-name": "TableHead",
                                                                className: "text-slate-300",
                                                                children: "Location"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                lineNumber: 396,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:399:16",
                                                    "data-orchids-name": "TableBody",
                                                    children: activeVehicles.length > 0 ? activeVehicles.map((vehicle, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                            "data-map-index": index,
                                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:401:20@activeVehicles",
                                                            "data-orchids-name": "TableRow",
                                                            className: "border-slate-700/50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    "data-map-index": index,
                                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:402:22@activeVehicles",
                                                                    "data-orchids-name": "TableCell",
                                                                    className: "text-slate-200 font-medium",
                                                                    children: vehicle.vehicle
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                    lineNumber: 402,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    "data-map-index": index,
                                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:403:22@activeVehicles",
                                                                    "data-orchids-name": "TableCell",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        "data-map-index": index,
                                                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:404:24@activeVehicles",
                                                                        "data-orchids-name": "Badge",
                                                                        variant: "outline",
                                                                        className: `${vehicle.status === 'In Transit' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : vehicle.status === 'Loading' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' : 'bg-green-500/10 text-green-400 border-green-500/20'}`,
                                                                        children: vehicle.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                        lineNumber: 404,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                    lineNumber: 403,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    "data-map-index": index,
                                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:417:22@activeVehicles",
                                                                    "data-orchids-name": "TableCell",
                                                                    className: "text-slate-300",
                                                                    children: vehicle.location
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                    lineNumber: 417,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                            lineNumber: 401,
                                                            columnNumber: 21
                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:420:20",
                                                        "data-orchids-name": "TableRow",
                                                        className: "border-slate-700/50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:421:22",
                                                            "data-orchids-name": "TableCell",
                                                            className: "text-slate-400",
                                                            colSpan: 3,
                                                            children: "No active vehicles found"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                            lineNumber: 421,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 391,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                        lineNumber: 390,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\DashboardSection.tsx:432:6",
                "data-orchids-name": "div",
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src\\components\\DashboardSection.tsx:433:8",
                        "data-orchids-name": "Card",
                        className: "bg-gradient-to-br from-cyan-900/50 to-cyan-800/50 border-cyan-500/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            "data-orchids-id": "src\\components\\DashboardSection.tsx:434:10",
                            "data-orchids-name": "CardContent",
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:435:12",
                                    "data-orchids-name": "div",
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:436:14",
                                            "data-orchids-name": "div",
                                            className: "h-12 w-12 bg-cyan-500/20 rounded-lg flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"], {
                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:437:16",
                                                "data-orchids-name": "Route",
                                                className: "h-6 w-6 text-cyan-400"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                lineNumber: 437,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 436,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:439:14",
                                            "data-orchids-name": "div",
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:440:16",
                                                    "data-orchids-name": "p",
                                                    className: "text-cyan-200 text-sm",
                                                    children: "Distance Optimization"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:441:16",
                                                    "data-orchids-name": "p",
                                                    className: "text-2xl font-bold text-white",
                                                    children: [
                                                        kpiData.distanceOptimization.improvement,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 439,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                    lineNumber: 435,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:446:12",
                                    "data-orchids-name": "div",
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:447:14",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:448:16",
                                                    "data-orchids-name": "span",
                                                    className: "text-cyan-300",
                                                    children: "Quantum:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:449:16",
                                                    "data-orchids-name": "span",
                                                    className: "text-white",
                                                    children: [
                                                        kpiData.distanceOptimization.quantum,
                                                        "km avg"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 447,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:451:14",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:452:16",
                                                    "data-orchids-name": "span",
                                                    className: "text-cyan-300",
                                                    children: "Baseline:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:453:16",
                                                    "data-orchids-name": "span",
                                                    className: "text-slate-400",
                                                    children: [
                                                        kpiData.distanceOptimization.baseline,
                                                        "km avg"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 451,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                            lineNumber: 434,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                        lineNumber: 433,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src\\components\\DashboardSection.tsx:459:8",
                        "data-orchids-name": "Card",
                        className: "bg-gradient-to-br from-orange-900/50 to-orange-800/50 border-orange-500/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            "data-orchids-id": "src\\components\\DashboardSection.tsx:460:10",
                            "data-orchids-name": "CardContent",
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:461:12",
                                    "data-orchids-name": "div",
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:462:14",
                                            "data-orchids-name": "div",
                                            className: "h-12 w-12 bg-orange-500/20 rounded-lg flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fuel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Fuel$3e$__["Fuel"], {
                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:463:16",
                                                "data-orchids-name": "Fuel",
                                                className: "h-6 w-6 text-orange-400"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                lineNumber: 463,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 462,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:465:14",
                                            "data-orchids-name": "div",
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:466:16",
                                                    "data-orchids-name": "p",
                                                    className: "text-orange-200 text-sm",
                                                    children: "Fuel Savings"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:467:16",
                                                    "data-orchids-name": "p",
                                                    className: "text-2xl font-bold text-white",
                                                    children: [
                                                        kpiData.fuelSavings.improvement,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 465,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                    lineNumber: 461,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:472:12",
                                    "data-orchids-name": "div",
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:473:14",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:474:16",
                                                    "data-orchids-name": "span",
                                                    className: "text-orange-300",
                                                    children: "Quantum:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:475:16",
                                                    "data-orchids-name": "span",
                                                    className: "text-white",
                                                    children: [
                                                        "$",
                                                        kpiData.fuelSavings.quantum,
                                                        "/100km"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 473,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:477:14",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:478:16",
                                                    "data-orchids-name": "span",
                                                    className: "text-orange-300",
                                                    children: "Baseline:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 478,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:479:16",
                                                    "data-orchids-name": "span",
                                                    className: "text-slate-400",
                                                    children: [
                                                        "$",
                                                        kpiData.fuelSavings.baseline,
                                                        "/100km"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 477,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                    lineNumber: 472,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                            lineNumber: 460,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                        lineNumber: 459,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src\\components\\DashboardSection.tsx:485:8",
                        "data-orchids-name": "Card",
                        className: "bg-gradient-to-br from-emerald-900/50 to-emerald-800/50 border-emerald-500/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            "data-orchids-id": "src\\components\\DashboardSection.tsx:486:10",
                            "data-orchids-name": "CardContent",
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:487:12",
                                    "data-orchids-name": "div",
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:488:14",
                                            "data-orchids-name": "div",
                                            className: "h-12 w-12 bg-emerald-500/20 rounded-lg flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:489:16",
                                                "data-orchids-name": "Target",
                                                className: "h-6 w-6 text-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                lineNumber: 489,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 488,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:491:14",
                                            "data-orchids-name": "div",
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:492:16",
                                                    "data-orchids-name": "p",
                                                    className: "text-emerald-200 text-sm",
                                                    children: "Capacity Utilization"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 492,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:493:16",
                                                    "data-orchids-name": "p",
                                                    className: "text-2xl font-bold text-white",
                                                    children: [
                                                        kpiData.capacityUtilization.improvement,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 493,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 491,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                    lineNumber: 487,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:498:12",
                                    "data-orchids-name": "div",
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:499:14",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:500:16",
                                                    "data-orchids-name": "span",
                                                    className: "text-emerald-300",
                                                    children: "Quantum:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:501:16",
                                                    "data-orchids-name": "span",
                                                    className: "text-white",
                                                    children: [
                                                        kpiData.capacityUtilization.quantum,
                                                        "% avg"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 499,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:503:14",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:504:16",
                                                    "data-orchids-name": "span",
                                                    className: "text-emerald-300",
                                                    children: "Baseline:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 504,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:505:16",
                                                    "data-orchids-name": "span",
                                                    className: "text-slate-400",
                                                    children: [
                                                        kpiData.capacityUtilization.baseline,
                                                        "% avg"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 503,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                    lineNumber: 498,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                            lineNumber: 486,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                        lineNumber: 485,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                lineNumber: 432,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                "data-orchids-id": "src\\components\\DashboardSection.tsx:513:6",
                "data-orchids-name": "Card",
                className: "bg-slate-800/50 border-slate-700/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        "data-orchids-id": "src\\components\\DashboardSection.tsx:514:8",
                        "data-orchids-name": "CardHeader",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\DashboardSection.tsx:515:10",
                            "data-orchids-name": "div",
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:516:12",
                                    "data-orchids-name": "CardTitle",
                                    className: "flex items-center gap-2 text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:517:14",
                                            "data-orchids-name": "BarChart3",
                                            className: "h-5 w-5 text-purple-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 517,
                                            columnNumber: 15
                                        }, this),
                                        "Fleet Route Monitor"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                    lineNumber: 516,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:520:12",
                                    "data-orchids-name": "div",
                                    className: "flex items-center gap-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:521:14",
                                        "data-orchids-name": "div",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:522:16",
                                                "data-orchids-name": "Calendar",
                                                className: "h-4 w-4 text-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                lineNumber: 522,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:523:16",
                                                "data-orchids-name": "Input",
                                                type: "date",
                                                className: "w-44 bg-slate-700/50 border-slate-600",
                                                value: selectedDate,
                                                onChange: (e)=>setSelectedDate(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                lineNumber: 523,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                        lineNumber: 521,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                    lineNumber: 520,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                            lineNumber: 515,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                        lineNumber: 514,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        "data-orchids-id": "src\\components\\DashboardSection.tsx:533:8",
                        "data-orchids-name": "CardContent",
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\DashboardSection.tsx:535:10",
                                "data-orchids-name": "div",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:536:12",
                                        "data-orchids-name": "h3",
                                        className: "text-lg font-semibold text-slate-200 mb-4",
                                        children: "Historical Route Playback"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                        lineNumber: 536,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:537:12",
                                        "data-orchids-name": "div",
                                        className: "h-80 bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-lg flex items-center justify-center border border-slate-600/30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:538:14",
                                            "data-orchids-name": "div",
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:539:16",
                                                    "data-orchids-name": "Timer",
                                                    className: "h-16 w-16 text-slate-400 mx-auto mb-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:540:16",
                                                    "data-orchids-name": "p",
                                                    className: "text-slate-400 text-lg mb-2",
                                                    children: "Route Visualization"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 540,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:541:16",
                                                    "data-orchids-name": "p",
                                                    className: "text-slate-500 text-sm",
                                                    children: hasTripsForSelectedDate ? `Showing routes for ${selectedDate}` : `No trip on ${selectedDate}`
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 538,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                        lineNumber: 537,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                lineNumber: 535,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\DashboardSection.tsx:549:10",
                                "data-orchids-name": "div",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:550:12",
                                        "data-orchids-name": "h3",
                                        className: "text-lg font-semibold text-slate-200 mb-4",
                                        children: "Optimized Matrices Comparison"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                        lineNumber: 550,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:551:12",
                                        "data-orchids-name": "div",
                                        className: "overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:552:14",
                                            "data-orchids-name": "Table",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:553:16",
                                                    "data-orchids-name": "TableHeader",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:554:18",
                                                        "data-orchids-name": "TableRow",
                                                        className: "border-slate-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:555:20",
                                                                "data-orchids-name": "TableHead",
                                                                className: "text-slate-300",
                                                                children: "Metric"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                lineNumber: 555,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:556:20",
                                                                "data-orchids-name": "TableHead",
                                                                className: "text-slate-300",
                                                                children: "Classical Route"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                lineNumber: 556,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:557:20",
                                                                "data-orchids-name": "TableHead",
                                                                className: "text-slate-300",
                                                                children: "Quantum Route"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                lineNumber: 557,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:558:20",
                                                                "data-orchids-name": "TableHead",
                                                                className: "text-slate-300",
                                                                children: "Improvements"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                lineNumber: 558,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                        lineNumber: 554,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 553,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:561:16",
                                                    "data-orchids-name": "TableBody",
                                                    children: routeComparison.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                            "data-map-index": index,
                                                            "data-orchids-id": "src\\components\\DashboardSection.tsx:563:20@routeComparison",
                                                            "data-orchids-name": "TableRow",
                                                            className: "border-slate-700/50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    "data-map-index": index,
                                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:564:22@routeComparison",
                                                                    "data-orchids-name": "TableCell",
                                                                    className: "text-slate-200 font-medium",
                                                                    children: row.metric
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                    lineNumber: 564,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    "data-map-index": index,
                                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:565:22@routeComparison",
                                                                    "data-orchids-name": "TableCell",
                                                                    className: "text-slate-300",
                                                                    children: row.classical
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                    lineNumber: 565,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    "data-map-index": index,
                                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:566:22@routeComparison",
                                                                    "data-orchids-name": "TableCell",
                                                                    className: "text-slate-300",
                                                                    children: row.quantum
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                    lineNumber: 566,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    "data-map-index": index,
                                                                    "data-orchids-id": "src\\components\\DashboardSection.tsx:567:22@routeComparison",
                                                                    "data-orchids-name": "TableCell",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        "data-map-index": index,
                                                                        "data-orchids-id": "src\\components\\DashboardSection.tsx:568:24@routeComparison",
                                                                        "data-orchids-name": "Badge",
                                                                        variant: "outline",
                                                                        className: "bg-green-500/10 text-green-400 border-green-500/20",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                                "data-map-index": index,
                                                                                "data-orchids-id": "src\\components\\DashboardSection.tsx:569:26@routeComparison",
                                                                                "data-orchids-name": "TrendingUp",
                                                                                className: "w-3 h-3 mr-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                                lineNumber: 569,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            row.improvement
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                        lineNumber: 568,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                                    lineNumber: 567,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                            lineNumber: 563,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                                    lineNumber: 561,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                            lineNumber: 552,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                        lineNumber: 551,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                                lineNumber: 549,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                        lineNumber: 533,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
                lineNumber: 513,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/DashboardSection.tsx",
        lineNumber: 268,
        columnNumber: 5
    }, this);
};
}}),

};

//# sourceMappingURL=Desktop_falqon-fleet-optimizer_src_components_DashboardSection_tsx_076e54ff._.js.map