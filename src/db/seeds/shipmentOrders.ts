import { db } from '@/db';
import { trucks, shipmentOrders } from '@/db/schema';
import { eq } from 'drizzle-orm';

async function main() {
  const nowIso = new Date().toISOString();
  
  // Get existing trucks to find their IDs
  const existingTrucks = await db.select().from(trucks);
  
  if (existingTrucks.length === 0) {
    console.log('ℹ️ No trucks found. Please run truck seeding first.');
    return;
  }

  // Create 3 trucks if they don't exist (Truck 1, Truck 2, Truck 3)
  const truckNumbers = ['Truck 1', 'Truck 2', 'Truck 3'];
  const truckIds: number[] = [];

  for (const truckNumber of truckNumbers) {
    let truck = existingTrucks.find(t => t.truckNumber === truckNumber);
    
    if (!truck) {
      // Create truck if it doesn't exist
      const newTruck = await db.insert(trucks).values({
        truckNumber,
        imageUrl: null,
        capacity: truckNumber === 'Truck 1' ? 8 : truckNumber === 'Truck 2' ? 12 : 15,
        truckType: truckNumber === 'Truck 1' ? 'Electric' : truckNumber === 'Truck 2' ? 'Standard' : 'Heavy Duty',
        availability: 'Available',
        createdAt: nowIso,
        updatedAt: nowIso,
      }).returning();
      
      truck = newTruck[0];
    }
    
    truckIds.push(truck.id);
  }

  // Clear existing shipment orders for these trucks
  for (const truckId of truckIds) {
    await db.delete(shipmentOrders).where(eq(shipmentOrders.truckId, truckId));
  }

  // Create shipment orders for Truck 1 (ID: truckIds[0])
  const truck1Orders = [
    {
      truckId: truckIds[0],
      orderId: 'SO-T001-001',
      pickupPoint: 'Vishnu Institute of Technology, Bhimavaram',
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
      status: 'reached',
      createdAt: nowIso,
      updatedAt: nowIso,
    },
    {
      truckId: truckIds[0],
      orderId: 'SO-T001-002',
      pickupPoint: 'Kalla Farm, West Godavari',
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
      status: 'reached',
      createdAt: nowIso,
      updatedAt: nowIso,
    },
    {
      truckId: truckIds[0],
      orderId: 'SO-T001-003',
      pickupPoint: 'Undi Urban Farm, West Godavari',
      date: new Date().toISOString(), // Today
      status: 'not_reached',
      createdAt: nowIso,
      updatedAt: nowIso,
    },
    {
      truckId: truckIds[0],
      orderId: 'SO-T001-004',
      pickupPoint: 'Narsapur Milk Dairy, West Godavari',
      date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(), // Tomorrow
      status: 'not_reached',
      createdAt: nowIso,
      updatedAt: nowIso,
    },
  ];

  // Create shipment orders for Truck 2 (ID: truckIds[1])
  const truck2Orders = [
    {
      truckId: truckIds[1],
      orderId: 'SO-T002-001',
      pickupPoint: 'Central Warehouse, Hyderabad',
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
      status: 'reached',
      createdAt: nowIso,
      updatedAt: nowIso,
    },
    {
      truckId: truckIds[1],
      orderId: 'SO-T002-002',
      pickupPoint: 'Distribution Center, Vijayawada',
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
      status: 'reached',
      createdAt: nowIso,
      updatedAt: nowIso,
    },
    {
      truckId: truckIds[1],
      orderId: 'SO-T002-003',
      pickupPoint: 'Retail Store, Guntur',
      date: new Date().toISOString(), // Today
      status: 'not_reached',
      createdAt: nowIso,
      updatedAt: nowIso,
    },
    {
      truckId: truckIds[1],
      orderId: 'SO-T002-004',
      pickupPoint: 'Cold Storage, Rajahmundry',
      date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // Day after tomorrow
      status: 'not_reached',
      createdAt: nowIso,
      updatedAt: nowIso,
    },
    {
      truckId: truckIds[1],
      orderId: 'SO-T002-005',
      pickupPoint: 'Processing Plant, Visakhapatnam',
      date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days from now
      status: 'not_reached',
      createdAt: nowIso,
      updatedAt: nowIso,
    },
  ];

  // Create shipment orders for Truck 3 (ID: truckIds[2])
  const truck3Orders = [
    {
      truckId: truckIds[2],
      orderId: 'SO-T003-001',
      pickupPoint: 'Main Depot, Chennai',
      date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
      status: 'reached',
      createdAt: nowIso,
      updatedAt: nowIso,
    },
    {
      truckId: truckIds[2],
      orderId: 'SO-T003-002',
      pickupPoint: 'Industrial Zone, Coimbatore',
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
      status: 'reached',
      createdAt: nowIso,
      updatedAt: nowIso,
    },
    {
      truckId: truckIds[2],
      orderId: 'SO-T003-003',
      pickupPoint: 'Port Terminal, Tuticorin',
      date: new Date().toISOString(), // Today
      status: 'not_reached',
      createdAt: nowIso,
      updatedAt: nowIso,
    },
    {
      truckId: truckIds[2],
      orderId: 'SO-T003-004',
      pickupPoint: 'Export Hub, Madurai',
      date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(), // Tomorrow
      status: 'not_reached',
      createdAt: nowIso,
      updatedAt: nowIso,
    },
    {
      truckId: truckIds[2],
      orderId: 'SO-T003-005',
      pickupPoint: 'Border Checkpoint, Salem',
      date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // Day after tomorrow
      status: 'not_reached',
      createdAt: nowIso,
      updatedAt: nowIso,
    },
    {
      truckId: truckIds[2],
      orderId: 'SO-T003-006',
      pickupPoint: 'Final Destination, Bangalore',
      date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days from now
      status: 'not_reached',
      createdAt: nowIso,
      updatedAt: nowIso,
    },
  ];

  // Insert all shipment orders
  const allOrders = [...truck1Orders, ...truck2Orders, ...truck3Orders];
  
  for (const order of allOrders) {
    await db.insert(shipmentOrders).values(order);
  }

  console.log(`✅ Seeded ${allOrders.length} shipment orders for 3 trucks`);
  console.log(`   - Truck 1: ${truck1Orders.length} orders`);
  console.log(`   - Truck 2: ${truck2Orders.length} orders`);
  console.log(`   - Truck 3: ${truck3Orders.length} orders`);
}

main().catch((error) => {
  console.error('❌ Shipment orders seeder failed:', error);
});