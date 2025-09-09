"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { 
  Truck, 
  Table2, 
  TruckElectric,
  List
} from "lucide-react";
import { toast } from "sonner";

interface Truck {
  id: number;
  truckNumber: string;
  imageUrl?: string;
  capacity: number;
  truckType: "Standard" | "Electric" | "Heavy Duty";
  availability: "Available" | "Not Available";
}

interface ShipmentOrder {
  id: number;
  orderId: string;
  pickupPoint: string;
  date: string;
  status: "reached" | "not_reached";
}

interface AddTruckFormData {
  truckNumber: string;
  capacity: number;
  truckType: "Standard" | "Electric" | "Heavy Duty";
  imageUrl?: string;
}

export default function TruckManagementSection() {
  const [view, setView] = useState<"list" | "detail">("list");
  const [selectedTruck, setSelectedTruck] = useState<Truck | null>(null);
  const [trucks, setTrucks] = useState<Truck[]>([]);
  const [shipmentOrders, setShipmentOrders] = useState<ShipmentOrder[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  // Removed sort state per requirement; keep only availability filter
  const [filterBy, setFilterBy] = useState<"all" | "Available" | "Not Available">("all");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingOrders, setIsLoadingOrders] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAddTruckOpen, setIsAddTruckOpen] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<Partial<Truck>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  const UNIFIED_TRUCK_IMAGE = "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=500&fit=crop";

  const [addTruckForm, setAddTruckForm] = useState<AddTruckFormData>({
    truckNumber: "",
    capacity: 0,
    truckType: "Standard",
    imageUrl: ""
  });

  // Fetch trucks from API
  const fetchTrucks = useCallback(async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchQuery) params.append('search', searchQuery);
      if (filterBy !== 'all') params.append('availability', filterBy);
      params.append('limit', '50');

      const response = await fetch(`/api/trucks?${params.toString()}`);
      if (!response.ok) throw new Error('Failed to fetch trucks');
      
      const data = await response.json();
      setTrucks(data);
      setError(null);
    } catch (err) {
      setError("Failed to load trucks");
      toast.error("Failed to load trucks");
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery, filterBy]);

  useEffect(() => {
    fetchTrucks();
  }, [fetchTrucks]);

  const fetchShipmentOrders = useCallback(async (truckId: number) => {
    setIsLoadingOrders(true);
    try {
      const response = await fetch(`/api/trucks/${truckId}/shipment-orders?limit=1`);
      if (!response.ok) throw new Error('Failed to fetch orders');
      
      const data = await response.json();
      setShipmentOrders(Array.isArray(data) ? data.slice(0, 1) : []);
    } catch (err) {
      toast.error("Failed to load shipment orders");
    } finally {
      setIsLoadingOrders(false);
    }
  }, []);

  const handleDeleteTruck = useCallback(async (id: number) => {
    try {
      const confirmed = window.confirm("Delete this truck? This action cannot be undone.");
      if (!confirmed) return;
      const response = await fetch(`/api/trucks?id=${id}`, { method: 'DELETE' });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to delete truck');
      }
      setTrucks(prev => prev.filter(t => t.id !== id));
      if (selectedTruck?.id === id) {
        setSelectedTruck(null);
        setView('list');
      }
      toast.success("Truck deleted successfully");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to delete truck");
    }
  }, [selectedTruck]);

  const handleTruckClick = useCallback((truck: Truck) => {
    setSelectedTruck(truck);
    setView("detail");
    fetchShipmentOrders(truck.id);
  }, [fetchShipmentOrders]);

  const handleBackToList = useCallback(() => {
    setView("list");
    setSelectedTruck(null);
    setEditingField(null);
    setEditValues({});
  }, []);

  const filteredAndSortedTrucks = trucks;

  const handleAddTruck = async () => {
    if (!addTruckForm.truckNumber.trim()) {
      toast.error("Truck number is required");
      return;
    }

    if (!addTruckForm.capacity || addTruckForm.capacity <= 0) {
      toast.error("Capacity in tons is required and must be greater than 0");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Simulate upload progress
      for (let i = 0; i <= 100; i += 10) {
        setUploadProgress(i);
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      const response = await fetch('/api/trucks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
      setTrucks(prev => [...prev, newTruck]);
      setIsAddTruckOpen(false);
      setAddTruckForm({
        truckNumber: "",
        capacity: 0,
        truckType: "Standard",
        imageUrl: ""
      });
      toast.success("Truck added successfully");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to add truck");
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleEditField = useCallback((field: string) => {
    if (!selectedTruck) return;
    setEditingField(field);
    setEditValues({ [field]: selectedTruck[field as keyof Truck] });
  }, [selectedTruck]);

  const handleSaveEdit = useCallback(async () => {
    if (!selectedTruck || !editingField) return;

    try {
      const response = await fetch(`/api/trucks?id=${selectedTruck.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editValues)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to update truck');
      }

      const updatedTruck = await response.json();
      setTrucks(prev => prev.map(truck => 
        truck.id === selectedTruck.id ? updatedTruck : truck
      ));
      setSelectedTruck(updatedTruck);
      setEditingField(null);
      setEditValues({});
      toast.success("Truck updated successfully");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to update truck");
    }
  }, [selectedTruck, editingField, editValues]);

  const handleCancelEdit = useCallback(() => {
    setEditingField(null);
    setEditValues({});
  }, []);

  const handleOrderStatusToggle = useCallback(async (orderId: number, currentStatus: string) => {
    const newStatus = currentStatus === "reached" ? "not_reached" : "reached";
    
    try {
      const response = await fetch(`/api/shipment-orders/${orderId}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to update order status');
      }

      // Optimistic update
      setShipmentOrders(prev => prev.map(order => 
        order.id === orderId ? { ...order, status: newStatus as "reached" | "not_reached" } : order
      ));

      // Update truck availability based on new order status
      if (selectedTruck) {
        const updatedOrders = shipmentOrders.map(order => 
          order.id === orderId ? { ...order, status: newStatus as "reached" | "not_reached" } : order
        );
        const hasUnreachedOrders = updatedOrders.some(order => order.status === "not_reached");
        const newAvailability = hasUnreachedOrders ? "Not Available" : "Available";
        
        // Update truck availability via API
        const truckResponse = await fetch(`/api/trucks?id=${selectedTruck.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ availability: newAvailability })
        });

        if (truckResponse.ok) {
          const updatedTruck = await truckResponse.json();
          setTrucks(prev => prev.map(truck => 
            truck.id === selectedTruck.id ? updatedTruck : truck
          ));
          setSelectedTruck(updatedTruck);
        }
      }

      toast.success(`Order status updated to ${newStatus.replace("_", " ")}`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to update order status");
    }
  }, [selectedTruck, shipmentOrders]);

  const paginatedOrders = shipmentOrders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  const totalPages = Math.ceil(shipmentOrders.length / ordersPerPage);

  const exportToCSV = useCallback(() => {
    const headers = ["S.No", "Order ID", "Pickup Point", "Date", "Status"];
    const csvContent = [
      headers.join(","),
      ...shipmentOrders.map((order, index) => [
        index + 1,
        order.orderId,
        order.pickupPoint,
        order.date,
        order.status.replace("_", " ")
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `truck-${selectedTruck?.truckNumber}-orders.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    toast.success("Orders exported to CSV");
  }, [shipmentOrders, selectedTruck]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="text-muted-foreground">Loading trucks...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center space-y-4">
          <p className="text-destructive">{error}</p>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      </div>
    );
  }

  if (view === "detail" && selectedTruck) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={handleBackToList}>
              ← Back to List
            </Button>
            <h2 className="text-2xl font-heading font-bold">Fleet Management - {selectedTruck.truckNumber}</h2>
          </div>
          <Button onClick={exportToCSV} variant="outline">
            Export CSV
          </Button>
        </div>

        {/* Truck Detail Card */}
        <Card className="bg-card">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Truck Image */}
              <div className="space-y-4">
                <img
                  src={UNIFIED_TRUCK_IMAGE}
                  alt={selectedTruck.truckNumber}
                  className="w-full aspect-video object-cover rounded-lg"
                />
              </div>

              {/* Right: Truck Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-4">Truck Details</h3>
                  <div className="space-y-4">
                    {/* Capacity */}
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium">Capacity (tons)</Label>
                      {editingField === "capacity" ? (
                        <div className="flex items-center space-x-2">
                          <Input
                            type="number"
                            value={editValues.capacity || ""}
                            onChange={(e) => setEditValues(prev => ({ ...prev, capacity: Number(e.target.value) }))}
                            className="w-24"
                          />
                          <Button size="sm" onClick={handleSaveEdit}>Save</Button>
                          <Button size="sm" variant="outline" onClick={handleCancelEdit}>Cancel</Button>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">{selectedTruck.capacity} tons</span>
                          <Button size="sm" variant="ghost" onClick={() => handleEditField("capacity")}>
                            Edit
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* Truck Type */}
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium">Truck Type</Label>
                      <div className="flex items-center space-x-2">
                        {selectedTruck.truckType === "Electric" && <TruckElectric className="w-4 h-4 text-green-500" />}
                        <Badge variant="secondary">{selectedTruck.truckType}</Badge>
                      </div>
                    </div>

                    {/* Availability */}
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium">Status</Label>
                      <Badge variant={selectedTruck.availability === "Available" ? "default" : "secondary"}>
                        {selectedTruck.availability}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shipment Orders Table */}
        <Card className="bg-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <Table2 className="w-5 h-5" />
                <span>Shipment Orders</span>
              </CardTitle>
              {shipmentOrders.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    Page {currentPage} of {totalPages}
                  </span>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {isLoadingOrders ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : shipmentOrders.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No shipment orders found for this truck.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>S.No</TableHead>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Pickup Point</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedOrders.map((order, index) => (
                      <TableRow key={order.id}>
                        <TableCell>{(currentPage - 1) * ordersPerPage + index + 1}</TableCell>
                        <TableCell className="font-medium">{order.orderId}</TableCell>
                        <TableCell>{order.pickupPoint}</TableCell>
                        <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Switch
                              checked={order.status === "reached"}
                              onCheckedChange={() => handleOrderStatusToggle(order.id, order.status)}
                            />
                            <span className="text-sm">
                              {order.status === "reached" ? "Reached" : "Not Reached"}
                            </span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="flex items-center space-x-2">
          <List className="w-6 h-6" />
          <h2 className="text-2xl font-heading font-bold">Truck Management</h2>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <Card className="bg-card">
        <CardContent className="p-4">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <Input
                placeholder="Search by truck number or type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex space-x-2">
              <Select value={filterBy} onValueChange={(value) => setFilterBy(value as typeof filterBy)}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Trucks</SelectItem>
                  <SelectItem value="Available">Available</SelectItem>
                  <SelectItem value="Not Available">Not Available</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Truck Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredAndSortedTrucks.map((truck) => (
          <Card 
            key={truck.id} 
            className="bg-card hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleTruckClick(truck)}
          >
            <CardContent className="p-4 space-y-3">
              <div className="relative">
                <img
                  src={UNIFIED_TRUCK_IMAGE}
                  alt={truck.truckNumber}
                  className="w-full h-28 object-cover rounded-lg"
                />
                <Badge 
                  className="absolute top-2 right-2"
                  variant={truck.availability === "Available" ? "default" : "secondary"}
                >
                  {truck.availability}
                </Badge>
                <div className="absolute top-2 left-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={(e) => { e.stopPropagation(); handleDeleteTruck(truck.id); }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{truck.truckNumber}</h3>
                  {truck.truckType === "Electric" && (
                    <TruckElectric className="w-4 h-4 text-green-500" />
                  )}
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  <span>
                    {truck.truckType === "Standard" ? "Insulated Trucks" :
                     truck.truckType === "Electric" ? "Refrigerated Trucks" :
                     truck.truckType === "Heavy Duty" ? "Refrigerated Trucks" : truck.truckType}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {truck.truckType} • Capacity {truck.capacity} tons
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredAndSortedTrucks.length === 0 && (
        <div className="text-center py-12">
          <Truck className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">No trucks found matching your criteria.</p>
        </div>
      )}

      {/* Add Truck FAB */}
      <Dialog open={isAddTruckOpen} onOpenChange={setIsAddTruckOpen}>
        <DialogTrigger asChild>
          <Button 
            className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg"
            size="lg"
          >
            +
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Truck</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="truck_number">Truck Number *</Label>
              <Input
                id="truck_number"
                value={addTruckForm.truckNumber}
                onChange={(e) => setAddTruckForm(prev => ({ ...prev, truckNumber: e.target.value }))}
                placeholder="e.g., TR004"
                required
              />
            </div>
            <div>
              <Label htmlFor="truck_type">Truck Type</Label>
              <Select 
                value={addTruckForm.truckType} 
                onValueChange={(value) => setAddTruckForm(prev => ({ ...prev, truckType: value as typeof addTruckForm.truckType }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Standard">Standard</SelectItem>
                  <SelectItem value="Electric">Electric</SelectItem>
                  <SelectItem value="Heavy Duty">Heavy Duty</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="capacity">Capacity (tons) *</Label>
              <Input
                id="capacity"
                type="number"
                value={addTruckForm.capacity || ""}
                onChange={(e) => setAddTruckForm(prev => ({ ...prev, capacity: Number(e.target.value) }))}
                placeholder="25"
                required
                min="1"
              />
            </div>
            <div>
              <Label htmlFor="image_url">Image URL (optional)</Label>
              <Input
                id="image_url"
                value={addTruckForm.imageUrl}
                onChange={(e) => setAddTruckForm(prev => ({ ...prev, imageUrl: e.target.value }))}
                placeholder="https://images.unsplash.com/..."
              />
            </div>
            
            {isUploading && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Adding truck...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} />
              </div>
            )}
            
            <div className="flex space-x-2 pt-4">
              <Button 
                onClick={handleAddTruck} 
                disabled={isUploading}
                className="flex-1"
              >
                {isUploading ? "Adding..." : "Add Truck"}
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setIsAddTruckOpen(false)}
                disabled={isUploading}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}