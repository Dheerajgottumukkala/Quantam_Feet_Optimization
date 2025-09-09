(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AnalyticsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/calendar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$combined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartNoAxesCombined$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/chart-no-axes-combined.js [app-client] (ecmascript) <export default as ChartNoAxesCombined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartColumn$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as ChartColumn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileChartLine$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/file-chart-line.js [app-client] (ecmascript) <export default as FileChartLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$bar$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarBig$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/chart-bar-big.js [app-client] (ecmascript) <export default as ChartBarBig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$spline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartSpline$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/chart-spline.js [app-client] (ecmascript) <export default as ChartSpline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as CalendarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/recharts/es6/chart/ComposedChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Brush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/recharts/es6/cartesian/Brush.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/date-fns/subDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/date-fns/endOfDay.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
;
function AnalyticsSection() {
    _s();
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(new Date(), 30),
        to: new Date()
    });
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [exportLoading, setExportLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pinnedInsights, setPinnedInsights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [isCalendarOpen, setIsCalendarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Cache for different date ranges (using date range as key)
    const [dataCache, setDataCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const fetchAnalytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AnalyticsSection.useCallback[fetchAnalytics]": async (range)=>{
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
                const startDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(range.from, 'yyyy-MM-dd');
                const endDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(range.to, 'yyyy-MM-dd');
                const metricsResponse = await fetch(`/api/analytics/metrics?start_date=${startDate}&end_date=${endDate}&limit=100&sort=date&order=asc`);
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
                const analyticsData = {
                    metrics: metrics.map({
                        "AnalyticsSection.useCallback[fetchAnalytics]": (metric)=>({
                                date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(metric.date), 'MMM dd'),
                                quantumSavings: metric.quantumSavings || 0,
                                classicalSavings: metric.classicalSavings || 0,
                                fuelEfficiency: metric.fuelEfficiency || 0,
                                costSavings: metric.costSavings || 0,
                                distanceOptimization: metric.distanceOptimization || 0,
                                capacityUtilization: metric.capacityUtilization || 0
                            })
                    }["AnalyticsSection.useCallback[fetchAnalytics]"]),
                    insights: insights.map({
                        "AnalyticsSection.useCallback[fetchAnalytics]": (insight)=>({
                                id: insight.id,
                                insightText: insight.insightText,
                                insightType: insight.insightType,
                                isPinned: insight.isPinned,
                                dateGenerated: insight.dateGenerated
                            })
                    }["AnalyticsSection.useCallback[fetchAnalytics]"])
                };
                // Update pinned insights state
                const pinned = new Set(insights.filter({
                    "AnalyticsSection.useCallback[fetchAnalytics]": (insight)=>insight.isPinned
                }["AnalyticsSection.useCallback[fetchAnalytics]"]).map({
                    "AnalyticsSection.useCallback[fetchAnalytics]": (insight)=>insight.id
                }["AnalyticsSection.useCallback[fetchAnalytics]"]));
                setPinnedInsights(pinned);
                setData(analyticsData);
                setDataCache({
                    "AnalyticsSection.useCallback[fetchAnalytics]": (prev)=>({
                            ...prev,
                            [cacheKey]: analyticsData
                        })
                }["AnalyticsSection.useCallback[fetchAnalytics]"]);
            } catch (err) {
                setError("Failed to load analytics data. Please try again.");
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load analytics data");
            } finally{
                setLoading(false);
            }
        }
    }["AnalyticsSection.useCallback[fetchAnalytics]"], [
        dataCache
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsSection.useEffect": ()=>{
            fetchAnalytics(dateRange);
        }
    }["AnalyticsSection.useEffect"], [
        dateRange,
        fetchAnalytics
    ]);
    const handleDateRangeChange = (newRange)=>{
        if (newRange?.from && newRange?.to) {
            setDateRange({
                from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(newRange.from),
                to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(newRange.to)
            });
            setIsCalendarOpen(false);
        }
    };
    const handlePresetRange = (days)=>{
        const newRange = {
            from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(new Date(), days),
            to: new Date()
        };
        setDateRange(newRange);
        setIsCalendarOpen(false);
    };
    const handleExport = async (format)=>{
        setExportLoading(format);
        try {
            await new Promise((resolve)=>setTimeout(resolve, 2000));
            if (format === "csv") {
                // Client-side CSV generation
                const csvContent = generateCSV();
                downloadFile(csvContent, `analytics-${format(dateRange.from, 'yyyy-MM-dd')}-to-${format(dateRange.to, 'yyyy-MM-dd')}.csv`, "text/csv");
            } else {
                // Simulate server-side export
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`${format.toUpperCase()} export completed successfully`);
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Failed to export ${format.toUpperCase()}. Please try again.`);
        } finally{
            setExportLoading(null);
        }
    };
    const generateCSV = ()=>{
        if (!data?.metrics) return "";
        const headers = [
            "Date",
            "Quantum Savings",
            "Classical Savings",
            "Fuel Efficiency",
            "Cost Savings",
            "Distance Optimization",
            "Capacity Utilization"
        ];
        const rows = data.metrics.map((metric)=>[
                metric.date,
                metric.quantumSavings,
                metric.classicalSavings,
                metric.fuelEfficiency,
                metric.costSavings,
                metric.distanceOptimization,
                metric.capacityUtilization
            ]);
        return [
            headers,
            ...rows
        ].map((row)=>row.join(",")).join("\n");
    };
    const downloadFile = (content, filename, type)=>{
        const blob = new Blob([
            content
        ], {
            type
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    const toggleInsightPin = async (insightId)=>{
        try {
            const response = await fetch(`/api/analytics/insights/${insightId}/pin`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to toggle insight pin');
            }
            const updatedInsight = await response.json();
            // Update local state
            setPinnedInsights((prev)=>{
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
                setData((prev)=>({
                        ...prev,
                        insights: prev.insights.map((insight)=>insight.id === insightId ? {
                                ...insight,
                                isPinned: updatedInsight.isPinned
                            } : insight)
                    }));
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Insight ${updatedInsight.isPinned ? 'pinned' : 'unpinned'} successfully`);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err instanceof Error ? err.message : "Failed to toggle insight pin");
        }
    };
    const handleRetry = ()=>{
        const cacheKey = `${dateRange.from.toISOString()}-${dateRange.to.toISOString()}`;
        setDataCache((prev)=>{
            const newCache = {
                ...prev
            };
            delete newCache[cacheKey];
            return newCache;
        });
        fetchAnalytics(dateRange);
    };
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src\\components\\AnalyticsSection.tsx:273:6",
            "data-orchids-name": "div",
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src\\components\\AnalyticsSection.tsx:274:8",
                    "data-orchids-name": "div",
                    className: "flex items-center justify-between",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:275:10",
                        "data-orchids-name": "div",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:276:12",
                                "data-orchids-name": "h2",
                                className: "text-2xl font-heading font-bold text-foreground",
                                children: "Analytics & Reporting"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                lineNumber: 276,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:277:12",
                                "data-orchids-name": "p",
                                className: "text-muted-foreground mt-1",
                                children: "Performance insights and data export tools"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                    lineNumber: 274,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    "data-orchids-id": "src\\components\\AnalyticsSection.tsx:281:8",
                    "data-orchids-name": "Card",
                    className: "bg-card border-border",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:282:10",
                        "data-orchids-name": "CardContent",
                        className: "flex flex-col items-center justify-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$combined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartNoAxesCombined$3e$__["ChartNoAxesCombined"], {
                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:283:12",
                                "data-orchids-name": "ChartNoAxesCombined",
                                className: "h-12 w-12 text-muted-foreground mb-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:284:12",
                                "data-orchids-name": "h3",
                                className: "text-lg font-semibold text-foreground mb-2",
                                children: "Unable to Load Analytics"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:285:12",
                                "data-orchids-name": "p",
                                className: "text-muted-foreground text-center mb-6 max-w-md",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:288:12@handleRetry",
                                "data-orchids-name": "Button",
                                onClick: handleRetry,
                                className: "bg-primary text-primary-foreground hover:bg-primary/90",
                                children: "Try Again"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                        lineNumber: 282,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
            lineNumber: 273,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:298:4",
        "data-orchids-name": "div",
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:299:6",
                "data-orchids-name": "div",
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:300:8",
                        "data-orchids-name": "div",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:301:10",
                                "data-orchids-name": "h2",
                                className: "text-2xl font-heading font-bold text-foreground",
                                children: "Analytics & Reporting"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:302:10",
                                "data-orchids-name": "p",
                                className: "text-muted-foreground mt-1",
                                children: "Performance insights and data export tools"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:305:8",
                        "data-orchids-name": "div",
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:307:10",
                                "data-orchids-name": "div",
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                                    "data-orchids-id": "src\\components\\AnalyticsSection.tsx:308:12",
                                    "data-orchids-name": "Popover",
                                    open: isCalendarOpen,
                                    onOpenChange: setIsCalendarOpen,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                            "data-orchids-id": "src\\components\\AnalyticsSection.tsx:309:14",
                                            "data-orchids-name": "PopoverTrigger",
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:310:16",
                                                "data-orchids-name": "Button",
                                                variant: "outline",
                                                className: "w-80 justify-start text-left font-normal",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__["CalendarIcon"], {
                                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:311:18",
                                                        "data-orchids-name": "CalendarIcon",
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 19
                                                    }, this),
                                                    dateRange.from && dateRange.to ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.from, "MMM dd, yyyy"),
                                                            " - ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.to, "MMM dd, yyyy")
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:317:20",
                                                        "data-orchids-name": "span",
                                                        children: "Pick a date range"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 310,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                            "data-orchids-id": "src\\components\\AnalyticsSection.tsx:321:14",
                                            "data-orchids-name": "PopoverContent",
                                            className: "w-auto p-0",
                                            align: "start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src\\components\\AnalyticsSection.tsx:322:16",
                                                    "data-orchids-name": "div",
                                                    className: "p-3 border-b",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:323:18",
                                                        "data-orchids-name": "div",
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:324:20",
                                                                "data-orchids-name": "Button",
                                                                variant: "outline",
                                                                size: "sm",
                                                                onClick: ()=>handlePresetRange(7),
                                                                children: "Last 7 days"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:331:20",
                                                                "data-orchids-name": "Button",
                                                                variant: "outline",
                                                                size: "sm",
                                                                onClick: ()=>handlePresetRange(30),
                                                                children: "Last 30 days"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                                lineNumber: 331,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:338:20",
                                                                "data-orchids-name": "Button",
                                                                variant: "outline",
                                                                size: "sm",
                                                                onClick: ()=>handlePresetRange(90),
                                                                children: "Last 90 days"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                                lineNumber: 338,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar"], {
                                                    "data-orchids-id": "src\\components\\AnalyticsSection.tsx:347:16@handleDateRangeChange",
                                                    "data-orchids-name": "Calendar",
                                                    initialFocus: true,
                                                    mode: "range",
                                                    defaultMonth: dateRange.from,
                                                    selected: {
                                                        from: dateRange.from,
                                                        to: dateRange.to
                                                    },
                                                    onSelect: handleDateRangeChange,
                                                    numberOfMonths: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                            lineNumber: 321,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:362:10",
                                "data-orchids-name": "div",
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:363:12",
                                        "data-orchids-name": "Button",
                                        variant: "outline",
                                        size: "sm",
                                        onClick: ()=>handleExport("csv"),
                                        disabled: loading || !data || exportLoading === "csv",
                                        className: "border-border hover:bg-accent hover:text-accent-foreground",
                                        children: exportLoading === "csv" ? "Exporting..." : "CSV"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                        lineNumber: 363,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:372:12",
                                        "data-orchids-name": "Button",
                                        variant: "outline",
                                        size: "sm",
                                        onClick: ()=>handleExport("excel"),
                                        disabled: loading || !data || exportLoading === "excel",
                                        className: "border-border hover:bg-accent hover:text-accent-foreground",
                                        children: exportLoading === "excel" ? "Exporting..." : "Excel"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                        lineNumber: 372,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:381:12",
                                        "data-orchids-name": "Button",
                                        variant: "outline",
                                        size: "sm",
                                        onClick: ()=>handleExport("pdf"),
                                        disabled: loading || !data || exportLoading === "pdf",
                                        className: "border-border hover:bg-accent hover:text-accent-foreground",
                                        children: exportLoading === "pdf" ? "Exporting..." : "PDF"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                lineNumber: 362,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:394:6",
                "data-orchids-name": "div",
                className: "grid grid-cols-1 xl:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:396:8",
                        "data-orchids-name": "Card",
                        className: "bg-card border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:397:10",
                                "data-orchids-name": "CardHeader",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:398:12",
                                        "data-orchids-name": "CardTitle",
                                        className: "flex items-center gap-2 text-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartColumn$3e$__["ChartColumn"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:399:14",
                                                "data-orchids-name": "ChartColumn",
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 399,
                                                columnNumber: 15
                                            }, this),
                                            "Route Efficiency Comparison"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                        lineNumber: 398,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:402:12",
                                        "data-orchids-name": "CardDescription",
                                        children: "Quantum vs Classical routing savings for selected date range"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                        lineNumber: 402,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:406:10",
                                "data-orchids-name": "CardContent",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\AnalyticsSection.tsx:408:14",
                                    "data-orchids-name": "div",
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                            "data-orchids-id": "src\\components\\AnalyticsSection.tsx:409:16",
                                            "data-orchids-name": "Skeleton",
                                            className: "h-[300px] w-full bg-muted"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                            lineNumber: 409,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\AnalyticsSection.tsx:410:16",
                                            "data-orchids-name": "div",
                                            className: "flex gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    "data-orchids-id": "src\\components\\AnalyticsSection.tsx:411:18",
                                                    "data-orchids-name": "Skeleton",
                                                    className: "h-4 w-24 bg-muted"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    "data-orchids-id": "src\\components\\AnalyticsSection.tsx:412:18",
                                                    "data-orchids-name": "Skeleton",
                                                    className: "h-4 w-24 bg-muted"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                            lineNumber: 410,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                    lineNumber: 408,
                                    columnNumber: 15
                                }, this) : data?.metrics && data.metrics.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    "data-orchids-id": "src\\components\\AnalyticsSection.tsx:416:14",
                                    "data-orchids-name": "ResponsiveContainer",
                                    width: "100%",
                                    height: 300,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:417:16",
                                        "data-orchids-name": "BarChart",
                                        data: data.metrics,
                                        margin: {
                                            top: 20,
                                            right: 30,
                                            left: 20,
                                            bottom: 5
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:418:18",
                                                "data-orchids-name": "defs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:419:20",
                                                        "data-orchids-name": "linearGradient",
                                                        id: "quantumGradient",
                                                        x1: "0",
                                                        y1: "0",
                                                        x2: "0",
                                                        y2: "1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:420:22",
                                                                "data-orchids-name": "stop",
                                                                offset: "0%",
                                                                stopColor: "#ef4444",
                                                                stopOpacity: 0.8
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                                lineNumber: 420,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:421:22",
                                                                "data-orchids-name": "stop",
                                                                offset: "100%",
                                                                stopColor: "#dc2626",
                                                                stopOpacity: 0.6
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:423:20",
                                                        "data-orchids-name": "linearGradient",
                                                        id: "classicalGradient",
                                                        x1: "0",
                                                        y1: "0",
                                                        x2: "0",
                                                        y2: "1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:424:22",
                                                                "data-orchids-name": "stop",
                                                                offset: "0%",
                                                                stopColor: "#f87171",
                                                                stopOpacity: 0.8
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                                lineNumber: 424,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:425:22",
                                                                "data-orchids-name": "stop",
                                                                offset: "100%",
                                                                stopColor: "#ef4444",
                                                                stopOpacity: 0.6
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 418,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:428:18",
                                                "data-orchids-name": "CartesianGrid",
                                                strokeDasharray: "3 3",
                                                stroke: "hsl(var(--border))"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 428,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:429:18",
                                                "data-orchids-name": "XAxis",
                                                dataKey: "date",
                                                stroke: "hsl(var(--muted-foreground))",
                                                fontSize: 12,
                                                tick: {
                                                    fill: 'hsl(var(--foreground))'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 429,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:435:18",
                                                "data-orchids-name": "YAxis",
                                                stroke: "hsl(var(--muted-foreground))",
                                                fontSize: 12,
                                                tick: {
                                                    fill: 'hsl(var(--foreground))'
                                                },
                                                tickFormatter: (value)=>`${value}%`
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 435,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:441:18",
                                                "data-orchids-name": "Tooltip",
                                                contentStyle: {
                                                    backgroundColor: "hsl(var(--popover))",
                                                    border: "1px solid hsl(var(--border))",
                                                    borderRadius: "8px",
                                                    color: "hsl(var(--foreground))"
                                                },
                                                formatter: (value, name)=>[
                                                        `${value}%`,
                                                        name
                                                    ]
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 441,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:450:18",
                                                "data-orchids-name": "Legend"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 450,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:451:18",
                                                "data-orchids-name": "Bar",
                                                dataKey: "quantumSavings",
                                                name: "Quantum Routes",
                                                fill: "url(#quantumGradient)",
                                                radius: [
                                                    2,
                                                    2,
                                                    0,
                                                    0
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 451,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:457:18",
                                                "data-orchids-name": "Bar",
                                                dataKey: "classicalSavings",
                                                name: "Classical Routes",
                                                fill: "url(#classicalGradient)",
                                                radius: [
                                                    2,
                                                    2,
                                                    0,
                                                    0
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 457,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                        lineNumber: 417,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                    lineNumber: 416,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\AnalyticsSection.tsx:466:14",
                                    "data-orchids-name": "div",
                                    className: "flex items-center justify-center h-[300px] text-muted-foreground",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:467:16",
                                        "data-orchids-name": "div",
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartColumn$3e$__["ChartColumn"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:468:18",
                                                "data-orchids-name": "ChartColumn",
                                                className: "h-8 w-8 mx-auto mb-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 468,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:469:18",
                                                "data-orchids-name": "p",
                                                children: "No data available for selected date range"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 469,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                        lineNumber: 467,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                    lineNumber: 466,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                        lineNumber: 396,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:477:8",
                        "data-orchids-name": "Card",
                        className: "bg-card border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:478:10",
                                "data-orchids-name": "CardHeader",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:479:12",
                                        "data-orchids-name": "CardTitle",
                                        className: "flex items-center gap-2 text-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$spline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartSpline$3e$__["ChartSpline"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:480:14",
                                                "data-orchids-name": "ChartSpline",
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 480,
                                                columnNumber: 15
                                            }, this),
                                            "Efficiency Metrics"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                        lineNumber: 479,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:483:12",
                                        "data-orchids-name": "CardDescription",
                                        children: "Fuel efficiency and cost savings with brushing controls"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                        lineNumber: 483,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                lineNumber: 478,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:487:10",
                                "data-orchids-name": "CardContent",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\AnalyticsSection.tsx:489:14",
                                    "data-orchids-name": "div",
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                            "data-orchids-id": "src\\components\\AnalyticsSection.tsx:490:16",
                                            "data-orchids-name": "Skeleton",
                                            className: "h-[300px] w-full bg-muted"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                            lineNumber: 490,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                            "data-orchids-id": "src\\components\\AnalyticsSection.tsx:491:16",
                                            "data-orchids-name": "Skeleton",
                                            className: "h-8 w-full bg-muted"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                            lineNumber: 491,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                    lineNumber: 489,
                                    columnNumber: 15
                                }, this) : data?.metrics && data.metrics.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    "data-orchids-id": "src\\components\\AnalyticsSection.tsx:494:14",
                                    "data-orchids-name": "ResponsiveContainer",
                                    width: "100%",
                                    height: 320,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:495:16",
                                        "data-orchids-name": "ComposedChart",
                                        data: data.metrics,
                                        margin: {
                                            top: 20,
                                            right: 30,
                                            left: 20,
                                            bottom: 60
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:496:18",
                                                "data-orchids-name": "defs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:497:20",
                                                        "data-orchids-name": "linearGradient",
                                                        id: "fuelEfficiencyGradient",
                                                        x1: "0",
                                                        y1: "0",
                                                        x2: "0",
                                                        y2: "1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:498:22",
                                                                "data-orchids-name": "stop",
                                                                offset: "0%",
                                                                stopColor: "#ef4444",
                                                                stopOpacity: 0.8
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                                lineNumber: 498,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:499:22",
                                                                "data-orchids-name": "stop",
                                                                offset: "100%",
                                                                stopColor: "#dc2626",
                                                                stopOpacity: 0.6
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                                lineNumber: 499,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                        lineNumber: 497,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:501:20",
                                                        "data-orchids-name": "linearGradient",
                                                        id: "costSavingsGradient",
                                                        x1: "0",
                                                        y1: "0",
                                                        x2: "1",
                                                        y2: "0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:502:22",
                                                                "data-orchids-name": "stop",
                                                                offset: "0%",
                                                                stopColor: "#f87171",
                                                                stopOpacity: 0.8
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                                lineNumber: 502,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:503:22",
                                                                "data-orchids-name": "stop",
                                                                offset: "100%",
                                                                stopColor: "#ef4444",
                                                                stopOpacity: 0.6
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                                lineNumber: 503,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 496,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:506:18",
                                                "data-orchids-name": "CartesianGrid",
                                                strokeDasharray: "3 3",
                                                stroke: "hsl(var(--border))"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 506,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:507:18",
                                                "data-orchids-name": "XAxis",
                                                dataKey: "date",
                                                stroke: "hsl(var(--muted-foreground))",
                                                fontSize: 12,
                                                tick: {
                                                    fill: 'hsl(var(--foreground))'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 507,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:513:18",
                                                "data-orchids-name": "YAxis",
                                                yAxisId: "left",
                                                stroke: "hsl(var(--muted-foreground))",
                                                fontSize: 12,
                                                tick: {
                                                    fill: 'hsl(var(--foreground))'
                                                },
                                                tickFormatter: (value)=>`${value}%`,
                                                label: {
                                                    value: 'Fuel Efficiency (%)',
                                                    angle: -90,
                                                    position: 'insideLeft'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 513,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:521:18",
                                                "data-orchids-name": "YAxis",
                                                yAxisId: "right",
                                                orientation: "right",
                                                stroke: "hsl(var(--muted-foreground))",
                                                fontSize: 12,
                                                tick: {
                                                    fill: 'hsl(var(--foreground))'
                                                },
                                                tickFormatter: (value)=>`$${value}`,
                                                label: {
                                                    value: 'Cost Savings ($)',
                                                    angle: 90,
                                                    position: 'insideRight'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 521,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:530:18",
                                                "data-orchids-name": "Tooltip",
                                                contentStyle: {
                                                    backgroundColor: "hsl(var(--popover))",
                                                    border: "1px solid hsl(var(--border))",
                                                    borderRadius: "8px",
                                                    color: "hsl(var(--foreground))"
                                                },
                                                formatter: (value, name)=>{
                                                    if (name === 'Fuel Efficiency (%)') return [
                                                        `${value}%`,
                                                        name
                                                    ];
                                                    if (name === 'Cost Savings ($)') return [
                                                        `$${value}`,
                                                        name
                                                    ];
                                                    return [
                                                        value,
                                                        name
                                                    ];
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 530,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:543:18",
                                                "data-orchids-name": "Legend"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 543,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:544:18",
                                                "data-orchids-name": "Bar",
                                                yAxisId: "left",
                                                dataKey: "fuelEfficiency",
                                                name: "Fuel Efficiency (%)",
                                                fill: "url(#fuelEfficiencyGradient)",
                                                radius: [
                                                    2,
                                                    2,
                                                    0,
                                                    0
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 544,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                yAxisId: "right",
                                                type: "monotone",
                                                dataKey: "costSavings",
                                                name: "Cost Savings ($)",
                                                stroke: "url(#costSavingsGradient)",
                                                strokeWidth: 3,
                                                dot: {
                                                    fill: "#ef4444",
                                                    strokeWidth: 2,
                                                    r: 4
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 551,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Brush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Brush"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:560:18",
                                                "data-orchids-name": "Brush",
                                                dataKey: "date",
                                                height: 30,
                                                stroke: "hsl(var(--primary))",
                                                fill: "hsl(var(--muted))"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 560,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                        lineNumber: 495,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                    lineNumber: 494,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\AnalyticsSection.tsx:569:14",
                                    "data-orchids-name": "div",
                                    className: "flex items-center justify-center h-[320px] text-muted-foreground",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:570:16",
                                        "data-orchids-name": "div",
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$spline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartSpline$3e$__["ChartSpline"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:571:18",
                                                "data-orchids-name": "ChartSpline",
                                                className: "h-8 w-8 mx-auto mb-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 571,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:572:18",
                                                "data-orchids-name": "p",
                                                children: "No data available for selected date range"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 572,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                        lineNumber: 570,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                    lineNumber: 569,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                lineNumber: 487,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                        lineNumber: 477,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                lineNumber: 394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:581:6",
                "data-orchids-name": "Card",
                className: "bg-card border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:582:8",
                        "data-orchids-name": "CardHeader",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:583:10",
                                "data-orchids-name": "CardTitle",
                                className: "flex items-center gap-2 text-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileChartLine$3e$__["FileChartLine"], {
                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:584:12",
                                        "data-orchids-name": "FileChartLine",
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                        lineNumber: 584,
                                        columnNumber: 13
                                    }, this),
                                    "Performance Insights"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                lineNumber: 583,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:587:10",
                                "data-orchids-name": "CardDescription",
                                children: "Auto-generated insights based on your routing performance"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                lineNumber: 587,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                        lineNumber: 582,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:591:8",
                        "data-orchids-name": "CardContent",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\AnalyticsSection.tsx:593:12",
                            "data-orchids-name": "div",
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    "data-orchids-id": "src\\components\\AnalyticsSection.tsx:594:14",
                                    "data-orchids-name": "Skeleton",
                                    className: "h-16 w-full bg-muted"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                    lineNumber: 594,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    "data-orchids-id": "src\\components\\AnalyticsSection.tsx:595:14",
                                    "data-orchids-name": "Skeleton",
                                    className: "h-16 w-full bg-muted"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                    lineNumber: 595,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    "data-orchids-id": "src\\components\\AnalyticsSection.tsx:596:14",
                                    "data-orchids-name": "Skeleton",
                                    className: "h-16 w-full bg-muted"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                    lineNumber: 596,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                            lineNumber: 593,
                            columnNumber: 13
                        }, this) : data?.insights && data.insights.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\AnalyticsSection.tsx:599:12",
                            "data-orchids-name": "div",
                            className: "space-y-4",
                            children: [
                                data.insights.map((insight)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:601:16",
                                        "data-orchids-name": "div",
                                        className: "flex items-start justify-between p-4 rounded-lg bg-muted/50 border border-border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:605:18",
                                                "data-orchids-name": "div",
                                                className: "flex-1 pr-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:606:20",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:607:22",
                                                                "data-orchids-name": "Badge",
                                                                variant: "outline",
                                                                className: "text-xs",
                                                                children: insight.insightType
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                                lineNumber: 607,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:610:22",
                                                                "data-orchids-name": "span",
                                                                className: "text-xs text-muted-foreground",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(insight.dateGenerated), 'MMM dd, yyyy')
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                                lineNumber: 610,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                        lineNumber: 606,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:614:20",
                                                        "data-orchids-name": "p",
                                                        className: "text-foreground",
                                                        children: insight.insightText
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                        lineNumber: 614,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 605,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:616:18",
                                                "data-orchids-name": "Button",
                                                variant: insight.isPinned ? "default" : "ghost",
                                                size: "sm",
                                                onClick: ()=>toggleInsightPin(insight.id),
                                                className: insight.isPinned ? "bg-primary text-primary-foreground hover:bg-primary/90 shrink-0" : "text-muted-foreground hover:text-foreground hover:bg-accent shrink-0",
                                                children: insight.isPinned ? "Pinned" : "Pin"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 616,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, insight.id, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                        lineNumber: 601,
                                        columnNumber: 17
                                    }, this)),
                                pinnedInsights.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\AnalyticsSection.tsx:632:16",
                                    "data-orchids-name": "div",
                                    className: "mt-6 pt-4 border-t border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\AnalyticsSection.tsx:633:18",
                                            "data-orchids-name": "div",
                                            className: "flex items-center gap-2 mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:634:20",
                                                "data-orchids-name": "Badge",
                                                variant: "secondary",
                                                className: "bg-primary/10 text-primary",
                                                children: [
                                                    pinnedInsights.size,
                                                    " Pinned"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                                lineNumber: 634,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                            lineNumber: 633,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            "data-orchids-id": "src\\components\\AnalyticsSection.tsx:638:18",
                                            "data-orchids-name": "p",
                                            className: "text-sm text-muted-foreground",
                                            children: "Pinned insights will appear in your dashboard for quick reference."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                            lineNumber: 638,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                    lineNumber: 632,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                            lineNumber: 599,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\AnalyticsSection.tsx:645:12",
                            "data-orchids-name": "div",
                            className: "flex items-center justify-center py-8 text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\AnalyticsSection.tsx:646:14",
                                "data-orchids-name": "div",
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$bar$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarBig$3e$__["ChartBarBig"], {
                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:647:16",
                                        "data-orchids-name": "ChartBarBig",
                                        className: "h-8 w-8 mx-auto mb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                        lineNumber: 647,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:648:16",
                                        "data-orchids-name": "p",
                                        children: "No insights available"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                        lineNumber: 648,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src\\components\\AnalyticsSection.tsx:649:16",
                                        "data-orchids-name": "p",
                                        className: "text-sm mt-1",
                                        children: "Insights will appear as data is collected"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                        lineNumber: 649,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                                lineNumber: 646,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                            lineNumber: 645,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                        lineNumber: 591,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
                lineNumber: 581,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/AnalyticsSection.tsx",
        lineNumber: 298,
        columnNumber: 5
    }, this);
}
_s(AnalyticsSection, "AmAs3T5KiJaQpzzIHDCnYS6s6FQ=");
_c = AnalyticsSection;
var _c;
__turbopack_context__.k.register(_c, "AnalyticsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=Desktop_falqon-fleet-optimizer_src_components_AnalyticsSection_tsx_14cb1c17._.js.map