(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TruckManagementSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/src/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table2$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/table-2.js [app-client] (ecmascript) <export default as Table2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2d$electric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckElectric$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/truck-electric.js [app-client] (ecmascript) <export default as TruckElectric>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/falqon-fleet-optimizer/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
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
;
;
function TruckManagementSection() {
    _s();
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("list");
    const [selectedTruck, setSelectedTruck] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [trucks, setTrucks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [shipmentOrders, setShipmentOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("truckNumber");
    const [filterBy, setFilterBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isLoadingOrders, setIsLoadingOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAddTruckOpen, setIsAddTruckOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingField, setEditingField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editValues, setEditValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const ordersPerPage = 10;
    const [addTruckForm, setAddTruckForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        truckNumber: "",
        capacity: 0,
        truckType: "Standard",
        imageUrl: ""
    });
    // Fetch trucks from API
    const fetchTrucks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TruckManagementSection.useCallback[fetchTrucks]": async ()=>{
            setIsLoading(true);
            try {
                const params = new URLSearchParams();
                if (searchQuery) params.append('search', searchQuery);
                if (filterBy !== 'all') params.append('availability', filterBy);
                params.append('sort', sortBy);
                params.append('limit', '50');
                const response = await fetch(`/api/trucks?${params.toString()}`);
                if (!response.ok) throw new Error('Failed to fetch trucks');
                const data = await response.json();
                setTrucks(data);
                setError(null);
            } catch (err) {
                setError("Failed to load trucks");
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load trucks");
            } finally{
                setIsLoading(false);
            }
        }
    }["TruckManagementSection.useCallback[fetchTrucks]"], [
        searchQuery,
        filterBy,
        sortBy
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TruckManagementSection.useEffect": ()=>{
            fetchTrucks();
        }
    }["TruckManagementSection.useEffect"], [
        fetchTrucks
    ]);
    const fetchShipmentOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TruckManagementSection.useCallback[fetchShipmentOrders]": async (truckId)=>{
            setIsLoadingOrders(true);
            try {
                const response = await fetch(`/api/trucks/${truckId}/shipment-orders?limit=50`);
                if (!response.ok) throw new Error('Failed to fetch orders');
                const data = await response.json();
                setShipmentOrders(data);
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load shipment orders");
            } finally{
                setIsLoadingOrders(false);
            }
        }
    }["TruckManagementSection.useCallback[fetchShipmentOrders]"], []);
    const handleTruckClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TruckManagementSection.useCallback[handleTruckClick]": (truck)=>{
            setSelectedTruck(truck);
            setView("detail");
            fetchShipmentOrders(truck.id);
        }
    }["TruckManagementSection.useCallback[handleTruckClick]"], [
        fetchShipmentOrders
    ]);
    const handleBackToList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TruckManagementSection.useCallback[handleBackToList]": ()=>{
            setView("list");
            setSelectedTruck(null);
            setEditingField(null);
            setEditValues({});
        }
    }["TruckManagementSection.useCallback[handleBackToList]"], []);
    const filteredAndSortedTrucks = trucks;
    const handleAddTruck = async ()=>{
        if (!addTruckForm.truckNumber.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Truck number is required");
            return;
        }
        if (!addTruckForm.capacity || addTruckForm.capacity <= 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Capacity in tons is required and must be greater than 0");
            return;
        }
        setIsUploading(true);
        setUploadProgress(0);
        try {
            // Simulate upload progress
            for(let i = 0; i <= 100; i += 10){
                setUploadProgress(i);
                await new Promise((resolve)=>setTimeout(resolve, 100));
            }
            const response = await fetch('/api/trucks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    truckNumber: addTruckForm.truckNumber,
                    capacity: addTruckForm.capacity,
                    truckType: addTruckForm.truckType,
                    imageUrl: addTruckForm.imageUrl || undefined
                })
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to add truck');
            }
            const newTruck = await response.json();
            setTrucks((prev)=>[
                    ...prev,
                    newTruck
                ]);
            setIsAddTruckOpen(false);
            setAddTruckForm({
                truckNumber: "",
                capacity: 0,
                truckType: "Standard",
                imageUrl: ""
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Truck added successfully");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err instanceof Error ? err.message : "Failed to add truck");
        } finally{
            setIsUploading(false);
            setUploadProgress(0);
        }
    };
    const handleEditField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TruckManagementSection.useCallback[handleEditField]": (field)=>{
            if (!selectedTruck) return;
            setEditingField(field);
            setEditValues({
                [field]: selectedTruck[field]
            });
        }
    }["TruckManagementSection.useCallback[handleEditField]"], [
        selectedTruck
    ]);
    const handleSaveEdit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TruckManagementSection.useCallback[handleSaveEdit]": async ()=>{
            if (!selectedTruck || !editingField) return;
            try {
                const response = await fetch(`/api/trucks?id=${selectedTruck.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(editValues)
                });
                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.error || 'Failed to update truck');
                }
                const updatedTruck = await response.json();
                setTrucks({
                    "TruckManagementSection.useCallback[handleSaveEdit]": (prev)=>prev.map({
                            "TruckManagementSection.useCallback[handleSaveEdit]": (truck)=>truck.id === selectedTruck.id ? updatedTruck : truck
                        }["TruckManagementSection.useCallback[handleSaveEdit]"])
                }["TruckManagementSection.useCallback[handleSaveEdit]"]);
                setSelectedTruck(updatedTruck);
                setEditingField(null);
                setEditValues({});
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Truck updated successfully");
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err instanceof Error ? err.message : "Failed to update truck");
            }
        }
    }["TruckManagementSection.useCallback[handleSaveEdit]"], [
        selectedTruck,
        editingField,
        editValues
    ]);
    const handleCancelEdit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TruckManagementSection.useCallback[handleCancelEdit]": ()=>{
            setEditingField(null);
            setEditValues({});
        }
    }["TruckManagementSection.useCallback[handleCancelEdit]"], []);
    const handleOrderStatusToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TruckManagementSection.useCallback[handleOrderStatusToggle]": async (orderId, currentStatus)=>{
            const newStatus = currentStatus === "reached" ? "not_reached" : "reached";
            try {
                const response = await fetch(`/api/shipment-orders/${orderId}/status`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        status: newStatus
                    })
                });
                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.error || 'Failed to update order status');
                }
                // Optimistic update
                setShipmentOrders({
                    "TruckManagementSection.useCallback[handleOrderStatusToggle]": (prev)=>prev.map({
                            "TruckManagementSection.useCallback[handleOrderStatusToggle]": (order)=>order.id === orderId ? {
                                    ...order,
                                    status: newStatus
                                } : order
                        }["TruckManagementSection.useCallback[handleOrderStatusToggle]"])
                }["TruckManagementSection.useCallback[handleOrderStatusToggle]"]);
                // Update truck availability based on new order status
                if (selectedTruck) {
                    const updatedOrders = shipmentOrders.map({
                        "TruckManagementSection.useCallback[handleOrderStatusToggle].updatedOrders": (order)=>order.id === orderId ? {
                                ...order,
                                status: newStatus
                            } : order
                    }["TruckManagementSection.useCallback[handleOrderStatusToggle].updatedOrders"]);
                    const hasUnreachedOrders = updatedOrders.some({
                        "TruckManagementSection.useCallback[handleOrderStatusToggle].hasUnreachedOrders": (order)=>order.status === "not_reached"
                    }["TruckManagementSection.useCallback[handleOrderStatusToggle].hasUnreachedOrders"]);
                    const newAvailability = hasUnreachedOrders ? "Not Available" : "Available";
                    // Update truck availability via API
                    const truckResponse = await fetch(`/api/trucks?id=${selectedTruck.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            availability: newAvailability
                        })
                    });
                    if (truckResponse.ok) {
                        const updatedTruck = await truckResponse.json();
                        setTrucks({
                            "TruckManagementSection.useCallback[handleOrderStatusToggle]": (prev)=>prev.map({
                                    "TruckManagementSection.useCallback[handleOrderStatusToggle]": (truck)=>truck.id === selectedTruck.id ? updatedTruck : truck
                                }["TruckManagementSection.useCallback[handleOrderStatusToggle]"])
                        }["TruckManagementSection.useCallback[handleOrderStatusToggle]"]);
                        setSelectedTruck(updatedTruck);
                    }
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Order status updated to ${newStatus.replace("_", " ")}`);
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err instanceof Error ? err.message : "Failed to update order status");
            }
        }
    }["TruckManagementSection.useCallback[handleOrderStatusToggle]"], [
        selectedTruck,
        shipmentOrders
    ]);
    const paginatedOrders = shipmentOrders.slice((currentPage - 1) * ordersPerPage, currentPage * ordersPerPage);
    const totalPages = Math.ceil(shipmentOrders.length / ordersPerPage);
    const exportToCSV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TruckManagementSection.useCallback[exportToCSV]": ()=>{
            const headers = [
                "S.No",
                "Order ID",
                "Pickup Point",
                "Date",
                "Status"
            ];
            const csvContent = [
                headers.join(","),
                ...shipmentOrders.map({
                    "TruckManagementSection.useCallback[exportToCSV].csvContent": (order, index)=>[
                            index + 1,
                            order.orderId,
                            order.pickupPoint,
                            order.date,
                            order.status.replace("_", " ")
                        ].join(",")
                }["TruckManagementSection.useCallback[exportToCSV].csvContent"])
            ].join("\n");
            const blob = new Blob([
                csvContent
            ], {
                type: "text/csv"
            });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `truck-${selectedTruck?.truckNumber}-orders.csv`;
            a.click();
            window.URL.revokeObjectURL(url);
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Orders exported to CSV");
        }
    }["TruckManagementSection.useCallback[exportToCSV]"], [
        shipmentOrders,
        selectedTruck
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:306:6",
            "data-orchids-name": "div",
            className: "flex items-center justify-center min-h-96",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:307:8",
                "data-orchids-name": "div",
                className: "flex flex-col items-center space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:308:10",
                        "data-orchids-name": "div",
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:309:10",
                        "data-orchids-name": "p",
                        className: "text-muted-foreground",
                        children: "Loading trucks..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                lineNumber: 307,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
            lineNumber: 306,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:317:6",
            "data-orchids-name": "div",
            className: "flex items-center justify-center min-h-96",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:318:8",
                "data-orchids-name": "div",
                className: "text-center space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:319:10",
                        "data-orchids-name": "p",
                        className: "text-destructive",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:320:10",
                        "data-orchids-name": "Button",
                        onClick: ()=>window.location.reload(),
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                        lineNumber: 320,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                lineNumber: 318,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
            lineNumber: 317,
            columnNumber: 7
        }, this);
    }
    if (view === "detail" && selectedTruck) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:328:6",
            "data-orchids-name": "div",
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src\\components\\TruckManagementSection.tsx:330:8",
                    "data-orchids-name": "div",
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:331:10",
                            "data-orchids-name": "div",
                            className: "flex items-center space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "src\\components\\TruckManagementSection.tsx:332:12@handleBackToList",
                                    "data-orchids-name": "Button",
                                    variant: "outline",
                                    onClick: handleBackToList,
                                    children: "← Back to List"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    "data-orchids-id": "src\\components\\TruckManagementSection.tsx:335:12",
                                    "data-orchids-name": "h2",
                                    className: "text-2xl font-heading font-bold",
                                    children: [
                                        "Fleet Management - ",
                                        selectedTruck.truckNumber
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:337:10@exportToCSV",
                            "data-orchids-name": "Button",
                            onClick: exportToCSV,
                            variant: "outline",
                            children: "Export CSV"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                            lineNumber: 337,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                    lineNumber: 330,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    "data-orchids-id": "src\\components\\TruckManagementSection.tsx:343:8",
                    "data-orchids-name": "Card",
                    className: "bg-card",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:344:10",
                        "data-orchids-name": "CardContent",
                        className: "p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:345:12",
                            "data-orchids-name": "div",
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\TruckManagementSection.tsx:347:14",
                                    "data-orchids-name": "div",
                                    className: "space-y-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:348:16",
                                        "data-orchids-name": "img",
                                        src: selectedTruck.imageUrl || "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=250&fit=crop",
                                        alt: selectedTruck.truckNumber,
                                        className: "w-full aspect-video object-cover rounded-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                        lineNumber: 348,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                    lineNumber: 347,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\TruckManagementSection.tsx:356:14",
                                    "data-orchids-name": "div",
                                    className: "space-y-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:357:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:358:18",
                                                "data-orchids-name": "h3",
                                                className: "text-xl font-heading font-semibold mb-4",
                                                children: "Truck Details"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 358,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:359:18",
                                                "data-orchids-name": "div",
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:361:20",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:362:22",
                                                                "data-orchids-name": "Label",
                                                                className: "text-sm font-medium",
                                                                children: "Capacity (tons)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                lineNumber: 362,
                                                                columnNumber: 23
                                                            }, this),
                                                            editingField === "capacity" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:364:24",
                                                                "data-orchids-name": "div",
                                                                className: "flex items-center space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:365:26",
                                                                        "data-orchids-name": "Input",
                                                                        type: "number",
                                                                        value: editValues.capacity || "",
                                                                        onChange: (e)=>setEditValues((prev)=>({
                                                                                    ...prev,
                                                                                    capacity: Number(e.target.value)
                                                                                })),
                                                                        className: "w-24"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                        lineNumber: 365,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:371:26@handleSaveEdit",
                                                                        "data-orchids-name": "Button",
                                                                        size: "sm",
                                                                        onClick: handleSaveEdit,
                                                                        children: "Save"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                        lineNumber: 371,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:372:26@handleCancelEdit",
                                                                        "data-orchids-name": "Button",
                                                                        size: "sm",
                                                                        variant: "outline",
                                                                        onClick: handleCancelEdit,
                                                                        children: "Cancel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                        lineNumber: 372,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:375:24",
                                                                "data-orchids-name": "div",
                                                                className: "flex items-center space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:376:26",
                                                                        "data-orchids-name": "span",
                                                                        className: "text-sm",
                                                                        children: [
                                                                            selectedTruck.capacity,
                                                                            " tons"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                        lineNumber: 376,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:377:26",
                                                                        "data-orchids-name": "Button",
                                                                        size: "sm",
                                                                        variant: "ghost",
                                                                        onClick: ()=>handleEditField("capacity"),
                                                                        children: "Edit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                        lineNumber: 377,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                lineNumber: 375,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:385:20",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:386:22",
                                                                "data-orchids-name": "Label",
                                                                className: "text-sm font-medium",
                                                                children: "Truck Type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                lineNumber: 386,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:387:22",
                                                                "data-orchids-name": "div",
                                                                className: "flex items-center space-x-2",
                                                                children: [
                                                                    selectedTruck.truckType === "Electric" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2d$electric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckElectric$3e$__["TruckElectric"], {
                                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:388:67",
                                                                        "data-orchids-name": "TruckElectric",
                                                                        className: "w-4 h-4 text-green-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                        lineNumber: 388,
                                                                        columnNumber: 68
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:389:24",
                                                                        "data-orchids-name": "Badge",
                                                                        variant: "secondary",
                                                                        children: selectedTruck.truckType
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                        lineNumber: 389,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:394:20",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:395:22",
                                                                "data-orchids-name": "Label",
                                                                className: "text-sm font-medium",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                lineNumber: 395,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:396:22",
                                                                "data-orchids-name": "Badge",
                                                                variant: selectedTruck.availability === "Available" ? "default" : "secondary",
                                                                children: selectedTruck.availability
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                lineNumber: 396,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 359,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                        lineNumber: 357,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                    lineNumber: 356,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                            lineNumber: 345,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                        lineNumber: 344,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                    lineNumber: 343,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    "data-orchids-id": "src\\components\\TruckManagementSection.tsx:408:8",
                    "data-orchids-name": "Card",
                    className: "bg-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:409:10",
                            "data-orchids-name": "CardHeader",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:410:12",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:411:14",
                                        "data-orchids-name": "CardTitle",
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table2$3e$__["Table2"], {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:412:16",
                                                "data-orchids-name": "Table2",
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 412,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:413:16",
                                                "data-orchids-name": "span",
                                                children: "Shipment Orders"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 413,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                        lineNumber: 411,
                                        columnNumber: 15
                                    }, this),
                                    shipmentOrders.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:416:16",
                                        "data-orchids-name": "div",
                                        className: "flex items-center space-x-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:417:18",
                                            "data-orchids-name": "span",
                                            className: "text-sm text-muted-foreground",
                                            children: [
                                                "Page ",
                                                currentPage,
                                                " of ",
                                                totalPages
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                            lineNumber: 417,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                        lineNumber: 416,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                lineNumber: 410,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                            lineNumber: 409,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:424:10",
                            "data-orchids-name": "CardContent",
                            children: isLoadingOrders ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:426:14",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-center py-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\TruckManagementSection.tsx:427:16",
                                    "data-orchids-name": "div",
                                    className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                    lineNumber: 427,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                lineNumber: 426,
                                columnNumber: 15
                            }, this) : shipmentOrders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:430:14",
                                "data-orchids-name": "div",
                                className: "text-center py-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    "data-orchids-id": "src\\components\\TruckManagementSection.tsx:431:16",
                                    "data-orchids-name": "p",
                                    className: "text-muted-foreground",
                                    children: "No shipment orders found for this truck."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                    lineNumber: 431,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                lineNumber: 430,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:434:14",
                                "data-orchids-name": "div",
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:435:16",
                                        "data-orchids-name": "Table",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:436:18",
                                                "data-orchids-name": "TableHeader",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    "data-orchids-id": "src\\components\\TruckManagementSection.tsx:437:20",
                                                    "data-orchids-name": "TableRow",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:438:22",
                                                            "data-orchids-name": "TableHead",
                                                            children: "S.No"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:439:22",
                                                            "data-orchids-name": "TableHead",
                                                            children: "Order ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                            lineNumber: 439,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:440:22",
                                                            "data-orchids-name": "TableHead",
                                                            children: "Pickup Point"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                            lineNumber: 440,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:441:22",
                                                            "data-orchids-name": "TableHead",
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:442:22",
                                                            "data-orchids-name": "TableHead",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 436,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:445:18",
                                                "data-orchids-name": "TableBody",
                                                children: paginatedOrders.map((order, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:447:22@paginatedOrders",
                                                        "data-orchids-name": "TableRow",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                "data-map-index": index,
                                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:448:24@paginatedOrders",
                                                                "data-orchids-name": "TableCell",
                                                                children: (currentPage - 1) * ordersPerPage + index + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                lineNumber: 448,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                "data-map-index": index,
                                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:449:24@paginatedOrders",
                                                                "data-orchids-name": "TableCell",
                                                                className: "font-medium",
                                                                children: order.orderId
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                lineNumber: 449,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                "data-map-index": index,
                                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:450:24@paginatedOrders",
                                                                "data-orchids-name": "TableCell",
                                                                children: order.pickupPoint
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                lineNumber: 450,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                "data-map-index": index,
                                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:451:24@paginatedOrders",
                                                                "data-orchids-name": "TableCell",
                                                                children: new Date(order.date).toLocaleDateString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                lineNumber: 451,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                "data-map-index": index,
                                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:452:24@paginatedOrders",
                                                                "data-orchids-name": "TableCell",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    "data-map-index": index,
                                                                    "data-orchids-id": "src\\components\\TruckManagementSection.tsx:453:26@paginatedOrders",
                                                                    "data-orchids-name": "div",
                                                                    className: "flex items-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                                            "data-map-index": index,
                                                                            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:454:28@paginatedOrders",
                                                                            "data-orchids-name": "Switch",
                                                                            checked: order.status === "reached",
                                                                            onCheckedChange: ()=>handleOrderStatusToggle(order.id, order.status)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                            lineNumber: 454,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            "data-map-index": index,
                                                                            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:458:28@paginatedOrders",
                                                                            "data-orchids-name": "span",
                                                                            className: "text-sm",
                                                                            children: order.status === "reached" ? "Reached" : "Not Reached"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                            lineNumber: 458,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                    lineNumber: 453,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                lineNumber: 452,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, order.id, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 445,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                        lineNumber: 435,
                                        columnNumber: 17
                                    }, this),
                                    totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:470:18",
                                        "data-orchids-name": "div",
                                        className: "flex items-center justify-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:471:20",
                                                "data-orchids-name": "Button",
                                                variant: "outline",
                                                size: "sm",
                                                onClick: ()=>setCurrentPage((prev)=>Math.max(1, prev - 1)),
                                                disabled: currentPage === 1,
                                                children: "Previous"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 471,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:479:20",
                                                "data-orchids-name": "Button",
                                                variant: "outline",
                                                size: "sm",
                                                onClick: ()=>setCurrentPage((prev)=>Math.min(totalPages, prev + 1)),
                                                disabled: currentPage === totalPages,
                                                children: "Next"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 479,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                        lineNumber: 470,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                lineNumber: 434,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                            lineNumber: 424,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                    lineNumber: 408,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
            lineNumber: 328,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:498:4",
        "data-orchids-name": "div",
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:500:6",
                "data-orchids-name": "div",
                className: "flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src\\components\\TruckManagementSection.tsx:501:8",
                    "data-orchids-name": "div",
                    className: "flex items-center space-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:502:10",
                            "data-orchids-name": "List",
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                            lineNumber: 502,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:503:10",
                            "data-orchids-name": "h2",
                            className: "text-2xl font-heading font-bold",
                            children: "Truck Management"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                            lineNumber: 503,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                    lineNumber: 501,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                lineNumber: 500,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:508:6",
                "data-orchids-name": "Card",
                className: "bg-card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    "data-orchids-id": "src\\components\\TruckManagementSection.tsx:509:8",
                    "data-orchids-name": "CardContent",
                    className: "p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:510:10",
                        "data-orchids-name": "div",
                        className: "flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:511:12",
                                "data-orchids-name": "div",
                                className: "flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    "data-orchids-id": "src\\components\\TruckManagementSection.tsx:512:14",
                                    "data-orchids-name": "Input",
                                    placeholder: "Search by truck number or type...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: "w-full"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                    lineNumber: 512,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                lineNumber: 511,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:519:12",
                                "data-orchids-name": "div",
                                className: "flex space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: sortBy,
                                        onValueChange: (value)=>setSortBy(value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:521:16",
                                                "data-orchids-name": "SelectTrigger",
                                                className: "w-40",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    "data-orchids-id": "src\\components\\TruckManagementSection.tsx:522:18",
                                                    "data-orchids-name": "SelectValue",
                                                    placeholder: "Sort by"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 521,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:524:16",
                                                "data-orchids-name": "SelectContent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:525:18",
                                                        "data-orchids-name": "SelectItem",
                                                        value: "truckNumber",
                                                        children: "Truck Number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:526:18",
                                                        "data-orchids-name": "SelectItem",
                                                        value: "availability",
                                                        children: "Availability"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 524,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                        lineNumber: 520,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: filterBy,
                                        onValueChange: (value)=>setFilterBy(value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:530:16",
                                                "data-orchids-name": "SelectTrigger",
                                                className: "w-40",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    "data-orchids-id": "src\\components\\TruckManagementSection.tsx:531:18",
                                                    "data-orchids-name": "SelectValue",
                                                    placeholder: "Filter by"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 530,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:533:16",
                                                "data-orchids-name": "SelectContent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:534:18",
                                                        "data-orchids-name": "SelectItem",
                                                        value: "all",
                                                        children: "All Trucks"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:535:18",
                                                        "data-orchids-name": "SelectItem",
                                                        value: "Available",
                                                        children: "Available"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                        lineNumber: 535,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:536:18",
                                                        "data-orchids-name": "SelectItem",
                                                        value: "Not Available",
                                                        children: "Not Available"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 533,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                        lineNumber: 529,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                lineNumber: 519,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                        lineNumber: 510,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                    lineNumber: 509,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                lineNumber: 508,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:545:6",
                "data-orchids-name": "div",
                className: "space-y-4",
                children: filteredAndSortedTrucks.map((truck)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:547:10@filteredAndSortedTrucks",
                        "data-orchids-name": "Card",
                        className: "bg-card hover:shadow-lg transition-shadow cursor-pointer",
                        onClick: ()=>handleTruckClick(truck),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:552:12@filteredAndSortedTrucks",
                            "data-orchids-name": "CardContent",
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:553:14@filteredAndSortedTrucks",
                                "data-orchids-name": "div",
                                className: "flex items-center space-x-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:554:16@filteredAndSortedTrucks",
                                        "data-orchids-name": "div",
                                        className: "relative flex-shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:555:18@filteredAndSortedTrucks",
                                                "data-orchids-name": "img",
                                                src: truck.imageUrl || "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=250&fit=crop",
                                                alt: truck.truckNumber,
                                                className: "w-32 h-20 object-cover rounded-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 555,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:560:18@filteredAndSortedTrucks",
                                                "data-orchids-name": "Badge",
                                                className: "absolute -top-2 -right-2",
                                                variant: truck.availability === "Available" ? "default" : "secondary",
                                                children: truck.availability
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 560,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                        lineNumber: 554,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:567:16@filteredAndSortedTrucks",
                                        "data-orchids-name": "div",
                                        className: "flex-1 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:568:18@filteredAndSortedTrucks",
                                                "data-orchids-name": "div",
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:569:20@filteredAndSortedTrucks",
                                                        "data-orchids-name": "h3",
                                                        className: "text-lg font-semibold",
                                                        children: truck.truckNumber
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                        lineNumber: 569,
                                                        columnNumber: 21
                                                    }, this),
                                                    truck.truckType === "Electric" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2d$electric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckElectric$3e$__["TruckElectric"], {
                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:571:22",
                                                        "data-orchids-name": "TruckElectric",
                                                        className: "w-5 h-5 text-green-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                        lineNumber: 571,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 568,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:574:18@filteredAndSortedTrucks",
                                                "data-orchids-name": "div",
                                                className: "flex items-center space-x-4 text-sm text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:575:20@filteredAndSortedTrucks",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:576:22@filteredAndSortedTrucks",
                                                                "data-orchids-name": "Truck",
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                lineNumber: 576,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:577:22@filteredAndSortedTrucks",
                                                                "data-orchids-name": "span",
                                                                children: truck.truckType
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                lineNumber: 577,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                        lineNumber: 575,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:579:20@filteredAndSortedTrucks",
                                                        "data-orchids-name": "div",
                                                        children: [
                                                            "Capacity: ",
                                                            truck.capacity,
                                                            " tons"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                        lineNumber: 579,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 574,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                        lineNumber: 567,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                lineNumber: 553,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                            lineNumber: 552,
                            columnNumber: 13
                        }, this)
                    }, truck.id, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                        lineNumber: 547,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                lineNumber: 545,
                columnNumber: 7
            }, this),
            filteredAndSortedTrucks.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:592:8",
                "data-orchids-name": "div",
                className: "text-center py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:593:10",
                        "data-orchids-name": "Truck",
                        className: "w-12 h-12 mx-auto text-muted-foreground mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                        lineNumber: 593,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:594:10",
                        "data-orchids-name": "p",
                        className: "text-muted-foreground",
                        children: "No trucks found matching your criteria."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                        lineNumber: 594,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                lineNumber: 592,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:599:6",
                "data-orchids-name": "Dialog",
                open: isAddTruckOpen,
                onOpenChange: setIsAddTruckOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:600:8",
                        "data-orchids-name": "DialogTrigger",
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:601:10",
                            "data-orchids-name": "Button",
                            className: "fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg",
                            size: "lg",
                            children: "+"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                            lineNumber: 601,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                        lineNumber: 600,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:608:8",
                        "data-orchids-name": "DialogContent",
                        className: "sm:max-w-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:609:10",
                                "data-orchids-name": "DialogHeader",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    "data-orchids-id": "src\\components\\TruckManagementSection.tsx:610:12",
                                    "data-orchids-name": "DialogTitle",
                                    children: "Add New Truck"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                    lineNumber: 610,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                lineNumber: 609,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:612:10",
                                "data-orchids-name": "div",
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:613:12",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:614:14",
                                                "data-orchids-name": "Label",
                                                htmlFor: "truck_number",
                                                children: "Truck Number *"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 614,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:615:14",
                                                "data-orchids-name": "Input",
                                                id: "truck_number",
                                                value: addTruckForm.truckNumber,
                                                onChange: (e)=>setAddTruckForm((prev)=>({
                                                            ...prev,
                                                            truckNumber: e.target.value
                                                        })),
                                                placeholder: "e.g., TR004",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 615,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                        lineNumber: 613,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:623:12",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:624:14",
                                                "data-orchids-name": "Label",
                                                htmlFor: "truck_type",
                                                children: "Truck Type"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 624,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: addTruckForm.truckType,
                                                onValueChange: (value)=>setAddTruckForm((prev)=>({
                                                            ...prev,
                                                            truckType: value
                                                        })),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:629:16",
                                                        "data-orchids-name": "SelectTrigger",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            "data-orchids-id": "src\\components\\TruckManagementSection.tsx:630:18",
                                                            "data-orchids-name": "SelectValue"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                            lineNumber: 630,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                        lineNumber: 629,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:632:16",
                                                        "data-orchids-name": "SelectContent",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:633:18",
                                                                "data-orchids-name": "SelectItem",
                                                                value: "Standard",
                                                                children: "Standard"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                lineNumber: 633,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:634:18",
                                                                "data-orchids-name": "SelectItem",
                                                                value: "Electric",
                                                                children: "Electric"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                lineNumber: 634,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:635:18",
                                                                "data-orchids-name": "SelectItem",
                                                                value: "Heavy Duty",
                                                                children: "Heavy Duty"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                                lineNumber: 635,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                        lineNumber: 632,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 625,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                        lineNumber: 623,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:639:12",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:640:14",
                                                "data-orchids-name": "Label",
                                                htmlFor: "capacity",
                                                children: "Capacity (tons) *"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 640,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:641:14",
                                                "data-orchids-name": "Input",
                                                id: "capacity",
                                                type: "number",
                                                value: addTruckForm.capacity || "",
                                                onChange: (e)=>setAddTruckForm((prev)=>({
                                                            ...prev,
                                                            capacity: Number(e.target.value)
                                                        })),
                                                placeholder: "25",
                                                required: true,
                                                min: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 641,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                        lineNumber: 639,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:651:12",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:652:14",
                                                "data-orchids-name": "Label",
                                                htmlFor: "image_url",
                                                children: "Image URL (optional)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 652,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:653:14",
                                                "data-orchids-name": "Input",
                                                id: "image_url",
                                                value: addTruckForm.imageUrl,
                                                onChange: (e)=>setAddTruckForm((prev)=>({
                                                            ...prev,
                                                            imageUrl: e.target.value
                                                        })),
                                                placeholder: "https://images.unsplash.com/..."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 653,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                        lineNumber: 651,
                                        columnNumber: 13
                                    }, this),
                                    isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:662:14",
                                        "data-orchids-name": "div",
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:663:16",
                                                "data-orchids-name": "div",
                                                className: "flex items-center justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:664:18",
                                                        "data-orchids-name": "span",
                                                        children: "Adding truck..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                        lineNumber: 664,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:665:18",
                                                        "data-orchids-name": "span",
                                                        children: [
                                                            uploadProgress,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                        lineNumber: 665,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 663,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                                value: uploadProgress
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 667,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                        lineNumber: 662,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\TruckManagementSection.tsx:671:12",
                                        "data-orchids-name": "div",
                                        className: "flex space-x-2 pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:672:14@handleAddTruck",
                                                "data-orchids-name": "Button",
                                                onClick: handleAddTruck,
                                                disabled: isUploading,
                                                className: "flex-1",
                                                children: isUploading ? "Adding..." : "Add Truck"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 672,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$falqon$2d$fleet$2d$optimizer$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src\\components\\TruckManagementSection.tsx:679:14",
                                                "data-orchids-name": "Button",
                                                variant: "outline",
                                                onClick: ()=>setIsAddTruckOpen(false),
                                                disabled: isUploading,
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                                lineNumber: 679,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                        lineNumber: 671,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                                lineNumber: 612,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                        lineNumber: 608,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
                lineNumber: 599,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/falqon-fleet-optimizer/src/components/TruckManagementSection.tsx",
        lineNumber: 498,
        columnNumber: 5
    }, this);
}
_s(TruckManagementSection, "bEK0heJr2XO22ACZ/J6a/hzoTwY=");
_c = TruckManagementSection;
var _c;
__turbopack_context__.k.register(_c, "TruckManagementSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=148eb_falqon-fleet-optimizer_src_components_TruckManagementSection_tsx_eaff8d54._.js.map