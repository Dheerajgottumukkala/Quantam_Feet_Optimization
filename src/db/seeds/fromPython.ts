import { db } from '@/db';
import { routes, trucks, routeTrucks, pickupLocations } from '@/db/schema';
import fs from 'fs';
import path from 'path';

type PythonTruckPlan = {
  route?: string[];
  steps?: unknown[];
  constraints?: Record<string, unknown>;
  summary?: {
    type?: string;
    capacity_t?: number;
    load_t?: number;
    total_distance_km_estimated?: number;
    total_time_min_estimated?: number;
  };
};

async function main() {
  const jsonPath = process.env.PYTHON_OUTPUT_PATH
    ? path.resolve(process.env.PYTHON_OUTPUT_PATH)
    : path.resolve(process.cwd(), 'python_output.json');

  if (!fs.existsSync(jsonPath)) {
    throw new Error(
      `python_output.json not found at ${jsonPath}. Set PYTHON_OUTPUT_PATH or place file at project root.`
    );
  }

  const raw = fs.readFileSync(jsonPath, 'utf8');
  const parsed: Record<string, PythonTruckPlan> = JSON.parse(raw);

  const nowIso = new Date().toISOString();

  // Insert trucks, routes, associations, and pickup locations derived from Python output.
  // We create one route per truck and associate the truck to that route.
  for (const [truckId, plan] of Object.entries(parsed)) {
    const truckNumber = truckId; // e.g., "Truck 1"
    const truckType = plan.summary?.type || 'Standard';
    const capacityTons = plan.summary?.capacity_t ?? 0;

    // Upsert truck by unique truckNumber
    const insertedTruck = await db
      .insert(trucks)
      .values({
        truckNumber,
        imageUrl: null,
        capacity: Math.max(0, Math.floor(Number(capacityTons) || 0)),
        truckType,
        availability: 'Available',
        createdAt: nowIso,
        updatedAt: nowIso,
      })
      .onConflictDoNothing()
      .returning({ id: trucks.id });

    let truckRowId: number | null = insertedTruck?.[0]?.id ?? null;
    if (truckRowId == null) {
      const existing = await db.query.trucks.findFirst({ where: (t, { eq }) => eq(t.truckNumber, truckNumber) });
      if (!existing) throw new Error('Failed to find or create truck for ' + truckNumber);
      truckRowId = existing.id;
    }

    const routeName = `${truckNumber} Route`;
    const totalDistance = plan.summary?.total_distance_km_estimated ?? null;
    const totalTime = plan.summary?.total_time_min_estimated ?? null;
    const totalLoad = plan.summary?.load_t ?? null;

    const insertedRoute = await db
      .insert(routes)
      .values({
        routeName,
        totalDistance: totalDistance == null ? null : Number(totalDistance),
        totalTime: totalTime == null ? null : Math.round(Number(totalTime)),
        totalLoad: totalLoad == null ? null : Number(totalLoad),
        isQuantumOptimized: true,
        savingsDistance: null,
        savingsTime: null,
        status: 'active',
        createdAt: nowIso,
        updatedAt: nowIso,
      })
      .returning({ id: routes.id });

    const routeRowId = insertedRoute[0].id;

    await db.insert(routeTrucks).values({
      routeId: routeRowId,
      truckId: truckRowId,
      createdAt: nowIso,
    });

    const stops = plan.route ?? [];
    let sequenceOrder = 1;
    for (const stop of stops) {
      const address = String(stop);
      await db.insert(pickupLocations).values({
        routeId: routeRowId,
        address,
        loadQuantity: 0,
        cropType: 'unknown',
        priority: 'medium',
        maxDeliveryTime: null,
        sequenceOrder,
        estimatedTime: null,
        distanceFromPrevious: null,
        createdAt: nowIso,
      });
      sequenceOrder += 1;
    }
  }

  console.log('✅ Seeded data from python_output.json');
}

main().catch((error) => {
  console.error('❌ Seeder failed:', error);
});


