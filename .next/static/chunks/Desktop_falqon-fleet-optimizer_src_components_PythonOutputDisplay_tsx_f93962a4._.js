(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PythonOutputDisplay)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$GoogleMapComponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/GoogleMapComponent.tsx [app-client] (ecmascript)");
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
function PythonOutputDisplay() {
    _s();
    const [pythonData, setPythonData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const loadPythonOutput = async ()=>{
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('/python_output.json');
            if (!response.ok) {
                throw new Error('Failed to load Python output file');
            }
            const data = await response.json();
            setPythonData(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load Python output');
        } finally{
            setIsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PythonOutputDisplay.useEffect": ()=>{
            loadPythonOutput();
        }
    }["PythonOutputDisplay.useEffect"], []);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:71:6",
            "data-orchids-name": "Card",
            className: "bg-card border-border",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:72:8",
                "data-orchids-name": "CardContent",
                className: "flex items-center justify-center h-64",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:73:10",
                    "data-orchids-name": "div",
                    className: "text-center space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:74:12",
                            "data-orchids-name": "div",
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:75:12",
                            "data-orchids-name": "p",
                            className: "text-muted-foreground",
                            children: "Loading Python output..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                    lineNumber: 73,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:84:6",
            "data-orchids-name": "Card",
            className: "bg-card border-border",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:85:8",
                    "data-orchids-name": "CardHeader",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:86:10",
                        "data-orchids-name": "CardTitle",
                        className: "flex items-center gap-2 text-card-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:87:12",
                                "data-orchids-name": "FileText",
                                className: "h-5 w-5 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            "Python Output Display"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:91:8",
                    "data-orchids-name": "CardContent",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:92:10",
                            "data-orchids-name": "Alert",
                            className: "border-destructive",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:93:12",
                                    "data-orchids-name": "AlertCircle",
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                    "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:94:12",
                                    "data-orchids-name": "AlertDescription",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:98:10@loadPythonOutput",
                            "data-orchids-name": "Button",
                            onClick: loadPythonOutput,
                            className: "mt-4",
                            children: "Retry Loading"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this);
    }
    if (!pythonData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:108:6",
            "data-orchids-name": "Card",
            className: "bg-card border-border",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:109:8",
                "data-orchids-name": "CardContent",
                className: "flex items-center justify-center h-64",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:110:10",
                    "data-orchids-name": "div",
                    className: "text-center space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:111:12",
                            "data-orchids-name": "FileText",
                            className: "h-12 w-12 text-muted-foreground mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:112:12",
                            "data-orchids-name": "p",
                            className: "text-muted-foreground",
                            children: "No Python output data available"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:113:12@loadPythonOutput",
                            "data-orchids-name": "Button",
                            onClick: loadPythonOutput,
                            children: "Load Python Output"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                    lineNumber: 110,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this);
    }
    const truckData = pythonData["Truck 1"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:125:4",
        "data-orchids-name": "div",
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:126:6",
                "data-orchids-name": "Card",
                className: "bg-card border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:127:8",
                        "data-orchids-name": "CardHeader",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:128:10",
                            "data-orchids-name": "CardTitle",
                            className: "flex items-center gap-2 text-card-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                    "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:129:12",
                                    "data-orchids-name": "FileText",
                                    className: "h-5 w-5 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                "Python Route Optimization Results"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:133:8",
                        "data-orchids-name": "CardContent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:134:10",
                            "data-orchids-name": "div",
                            className: "flex items-center gap-2 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:135:12",
                                    "data-orchids-name": "Badge",
                                    variant: "secondary",
                                    className: "bg-green-500/20 text-green-400",
                                    children: "Optimization Complete"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:138:12",
                                    "data-orchids-name": "Badge",
                                    variant: "secondary",
                                    className: "bg-blue-500/20 text-blue-400",
                                    children: [
                                        truckData.route.length,
                                        " Locations"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:141:12",
                                    "data-orchids-name": "Badge",
                                    variant: "secondary",
                                    className: "bg-purple-500/20 text-purple-400",
                                    children: [
                                        truckData.summary.type,
                                        " Truck"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:148:6",
                "data-orchids-name": "Tabs",
                defaultValue: "map",
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:149:8",
                        "data-orchids-name": "TabsList",
                        className: "grid w-full grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:150:10",
                                "data-orchids-name": "TabsTrigger",
                                value: "map",
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:151:12",
                                        "data-orchids-name": "Map",
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    "Interactive Map"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:154:10",
                                "data-orchids-name": "TabsTrigger",
                                value: "route",
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:155:12",
                                        "data-orchids-name": "Navigation",
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    "Route Details"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:158:10",
                                "data-orchids-name": "TabsTrigger",
                                value: "analysis",
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:159:12",
                                        "data-orchids-name": "FileText",
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    "Analysis"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:164:8",
                        "data-orchids-name": "TabsContent",
                        value: "map",
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$GoogleMapComponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:165:10@truckData",
                            "data-orchids-name": "GoogleMapComponent",
                            pythonData: truckData
                        }, void 0, false, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:168:8",
                        "data-orchids-name": "TabsContent",
                        value: "route",
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:169:10",
                            "data-orchids-name": "div",
                            className: "grid gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:170:12",
                                    "data-orchids-name": "Card",
                                    className: "bg-card border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:171:14",
                                            "data-orchids-name": "CardHeader",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:172:16",
                                                "data-orchids-name": "CardTitle",
                                                className: "flex items-center gap-2 text-card-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:173:18",
                                                        "data-orchids-name": "Navigation",
                                                        className: "h-5 w-5 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Route Steps"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:177:14",
                                            "data-orchids-name": "CardContent",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:178:16",
                                                "data-orchids-name": "div",
                                                className: "space-y-4",
                                                children: truckData.steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:180:20",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-start gap-4 p-4 bg-muted rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:181:22",
                                                                "data-orchids-name": "div",
                                                                className: "w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium flex-shrink-0",
                                                                children: step.step
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:184:22",
                                                                "data-orchids-name": "div",
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:185:24",
                                                                        "data-orchids-name": "div",
                                                                        className: "font-medium text-card-foreground mb-1",
                                                                        children: [
                                                                            step.action,
                                                                            ": ",
                                                                            step.from,
                                                                            " → ",
                                                                            step.to
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                        lineNumber: 185,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    step.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:189:26",
                                                                        "data-orchids-name": "div",
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: step.notes
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                        lineNumber: 189,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:194:22",
                                                                "data-orchids-name": "Badge",
                                                                variant: "outline",
                                                                className: "flex-shrink-0",
                                                                children: step.action
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, step.step, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:203:12",
                                    "data-orchids-name": "Card",
                                    className: "bg-card border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:204:14",
                                            "data-orchids-name": "CardHeader",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:205:16",
                                                "data-orchids-name": "CardTitle",
                                                className: "flex items-center gap-2 text-card-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:206:18",
                                                        "data-orchids-name": "Truck",
                                                        className: "h-5 w-5 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Truck Information"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                            lineNumber: 204,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:210:14",
                                            "data-orchids-name": "CardContent",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:211:16",
                                                "data-orchids-name": "div",
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:212:18",
                                                        "data-orchids-name": "div",
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:213:20",
                                                                "data-orchids-name": "div",
                                                                className: "p-3 bg-muted rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:214:22",
                                                                        "data-orchids-name": "div",
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: "Truck Type"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                        lineNumber: 214,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:215:22",
                                                                        "data-orchids-name": "div",
                                                                        className: "font-medium text-card-foreground",
                                                                        children: truckData.summary.type
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                        lineNumber: 215,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:217:20",
                                                                "data-orchids-name": "div",
                                                                className: "p-3 bg-muted rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:218:22",
                                                                        "data-orchids-name": "div",
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: "Capacity"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                        lineNumber: 218,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:219:22",
                                                                        "data-orchids-name": "div",
                                                                        className: "font-medium text-card-foreground",
                                                                        children: [
                                                                            truckData.summary.capacity_t,
                                                                            " tons"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                        lineNumber: 219,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:221:20",
                                                                "data-orchids-name": "div",
                                                                className: "p-3 bg-muted rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:222:22",
                                                                        "data-orchids-name": "div",
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: "Load"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                        lineNumber: 222,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:223:22",
                                                                        "data-orchids-name": "div",
                                                                        className: "font-medium text-card-foreground",
                                                                        children: [
                                                                            truckData.summary.load_t,
                                                                            " tons"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                        lineNumber: 223,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:226:18",
                                                        "data-orchids-name": "div",
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:227:20",
                                                                "data-orchids-name": "div",
                                                                className: "p-3 bg-muted rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:228:22",
                                                                        "data-orchids-name": "div",
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: "Total Distance"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                        lineNumber: 228,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:229:22",
                                                                        "data-orchids-name": "div",
                                                                        className: "font-medium text-card-foreground",
                                                                        children: [
                                                                            truckData.summary.total_distance_km_estimated,
                                                                            " km"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                        lineNumber: 229,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:231:20",
                                                                "data-orchids-name": "div",
                                                                className: "p-3 bg-muted rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:232:22",
                                                                        "data-orchids-name": "div",
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: "Total Time"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                        lineNumber: 232,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:233:22",
                                                                        "data-orchids-name": "div",
                                                                        className: "font-medium text-card-foreground",
                                                                        children: [
                                                                            Math.round(truckData.summary.total_time_min_estimated),
                                                                            " min"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                        lineNumber: 233,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 231,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:235:20",
                                                                "data-orchids-name": "div",
                                                                className: "p-3 bg-muted rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:236:22",
                                                                        "data-orchids-name": "div",
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: "Utilization"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                        lineNumber: 236,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:237:22",
                                                                        "data-orchids-name": "div",
                                                                        className: "font-medium text-card-foreground",
                                                                        children: [
                                                                            truckData.constraints.utilization_pct,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                        lineNumber: 237,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 235,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:246:8",
                        "data-orchids-name": "TabsContent",
                        value: "analysis",
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:247:10",
                            "data-orchids-name": "div",
                            className: "grid gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:248:12",
                                    "data-orchids-name": "Card",
                                    className: "bg-card border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:249:14",
                                            "data-orchids-name": "CardHeader",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:250:16",
                                                "data-orchids-name": "CardTitle",
                                                className: "flex items-center gap-2 text-card-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:251:18",
                                                        "data-orchids-name": "AlertCircle",
                                                        className: "h-5 w-5 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Constraint Analysis"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                lineNumber: 250,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:255:14",
                                            "data-orchids-name": "CardContent",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:256:16",
                                                "data-orchids-name": "div",
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:257:18",
                                                        "data-orchids-name": "div",
                                                        className: "p-4 bg-muted rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:258:20",
                                                                "data-orchids-name": "div",
                                                                className: "flex items-center gap-2 mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:259:22",
                                                                        "data-orchids-name": "Clock",
                                                                        className: "h-4 w-4 text-primary"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                        lineNumber: 259,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:260:22",
                                                                        "data-orchids-name": "span",
                                                                        className: "font-medium text-card-foreground",
                                                                        children: "Time Window"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                        lineNumber: 260,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:262:20",
                                                                "data-orchids-name": "div",
                                                                className: "text-sm text-muted-foreground",
                                                                children: [
                                                                    "Maximum allowed time: ",
                                                                    truckData.constraints.time_window_min,
                                                                    " minutes"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 262,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:267:18",
                                                        "data-orchids-name": "div",
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:268:20",
                                                                "data-orchids-name": "h4",
                                                                className: "font-medium text-card-foreground",
                                                                children: "Constraint Flags"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 21
                                                            }, this),
                                                            truckData.constraints.flags.map((flag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:270:22",
                                                                    "data-orchids-name": "div",
                                                                    className: "flex items-center gap-3 p-3 bg-muted rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:271:24",
                                                                            "data-orchids-name": "div",
                                                                            className: `w-3 h-3 rounded-full ${flag.level === 'ok' ? 'bg-green-400' : flag.level === 'warn' ? 'bg-yellow-400' : 'bg-red-400'}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                            lineNumber: 271,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:275:24",
                                                                            "data-orchids-name": "span",
                                                                            className: `text-sm ${flag.level === 'ok' ? 'text-green-400' : flag.level === 'warn' ? 'text-yellow-400' : 'text-red-400'}`,
                                                                            children: flag.message
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                            lineNumber: 275,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, index, true, {
                                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                lineNumber: 256,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this),
                                truckData.summary.violations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:289:14",
                                    "data-orchids-name": "Card",
                                    className: "bg-card border-red-500/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:290:16",
                                            "data-orchids-name": "CardHeader",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:291:18",
                                                "data-orchids-name": "CardTitle",
                                                className: "flex items-center gap-2 text-red-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:292:20",
                                                        "data-orchids-name": "AlertCircle",
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Route Violations"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                lineNumber: 291,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:296:16",
                                            "data-orchids-name": "CardContent",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:297:18",
                                                "data-orchids-name": "div",
                                                className: "space-y-2",
                                                children: truckData.summary.violations.map((violation, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:299:22",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-center gap-2 p-3 bg-red-500/10 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:300:24",
                                                                "data-orchids-name": "AlertCircle",
                                                                className: "h-4 w-4 text-red-400 flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 300,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:301:24",
                                                                "data-orchids-name": "span",
                                                                className: "text-sm text-red-400",
                                                                children: violation
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                lineNumber: 297,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                            lineNumber: 296,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:309:12",
                                    "data-orchids-name": "Card",
                                    className: "bg-card border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:310:14",
                                            "data-orchids-name": "CardHeader",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:311:16",
                                                "data-orchids-name": "CardTitle",
                                                className: "flex items-center gap-2 text-card-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:312:18",
                                                        "data-orchids-name": "CheckCircle",
                                                        className: "h-5 w-5 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Optimization Summary"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                lineNumber: 311,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                            lineNumber: 310,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:316:14",
                                            "data-orchids-name": "CardContent",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:317:16",
                                                "data-orchids-name": "div",
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:318:18",
                                                        "data-orchids-name": "div",
                                                        className: "p-4 bg-green-500/10 border border-green-500/20 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:319:20",
                                                                "data-orchids-name": "div",
                                                                className: "text-sm text-green-400 font-medium mb-1",
                                                                children: "Efficiency"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:320:20",
                                                                "data-orchids-name": "div",
                                                                className: "text-lg font-bold text-green-400",
                                                                children: [
                                                                    truckData.constraints.utilization_pct,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:323:20",
                                                                "data-orchids-name": "div",
                                                                className: "text-xs text-green-400/80",
                                                                children: "Truck Utilization"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 323,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:325:18",
                                                        "data-orchids-name": "div",
                                                        className: "p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:326:20",
                                                                "data-orchids-name": "div",
                                                                className: "text-sm text-blue-400 font-medium mb-1",
                                                                children: "Distance"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:327:20",
                                                                "data-orchids-name": "div",
                                                                className: "text-lg font-bold text-blue-400",
                                                                children: [
                                                                    truckData.summary.total_distance_km_estimated,
                                                                    " km"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\components\\PythonOutputDisplay.tsx:330:20",
                                                                "data-orchids-name": "div",
                                                                className: "text-xs text-blue-400/80",
                                                                children: "Total Route"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                                lineNumber: 317,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                            lineNumber: 316,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/PythonOutputDisplay.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_s(PythonOutputDisplay, "AP1HpgdbGhqNTMQXq8AsUeqo6o8=");
_c = PythonOutputDisplay;
var _c;
__turbopack_context__.k.register(_c, "PythonOutputDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=Desktop_falqon-fleet-optimizer_src_components_PythonOutputDisplay_tsx_f93962a4._.js.map