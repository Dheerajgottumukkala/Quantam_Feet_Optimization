import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { routeTrucks, routes, trucks } from '@/db/schema';
import { eq, like, and, or, desc, asc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const routeId = searchParams.get('route_id');
    const truckId = searchParams.get('truck_id');
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const search = searchParams.get('search');
    const sort = searchParams.get('sort') || 'createdAt';
    const order = searchParams.get('order') || 'desc';

    // Single record fetch by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json({ 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        }, { status: 400 });
      }

      const record = await db.select()
        .from(routeTrucks)
        .where(eq(routeTrucks.id, parseInt(id)))
        .limit(1);

      if (record.length === 0) {
        return NextResponse.json({ error: 'Route-truck association not found' }, { status: 404 });
      }

      return NextResponse.json(record[0]);
    }

    // List with filtering
    let query = db.select().from(routeTrucks);
    let conditions = [];

    // Filter by route_id
    if (routeId) {
      if (isNaN(parseInt(routeId))) {
        return NextResponse.json({ 
          error: "Valid route_id is required",
          code: "INVALID_ROUTE_ID" 
        }, { status: 400 });
      }
      conditions.push(eq(routeTrucks.routeId, parseInt(routeId)));
    }

    // Filter by truck_id
    if (truckId) {
      if (isNaN(parseInt(truckId))) {
        return NextResponse.json({ 
          error: "Valid truck_id is required",
          code: "INVALID_TRUCK_ID" 
        }, { status: 400 });
      }
      conditions.push(eq(routeTrucks.truckId, parseInt(truckId)));
    }

    // Apply filters
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    // Apply sorting
    const sortColumn = sort === 'id' ? routeTrucks.id : 
                      sort === 'routeId' ? routeTrucks.routeId :
                      sort === 'truckId' ? routeTrucks.truckId :
                      routeTrucks.createdAt;
    
    query = query.orderBy(order === 'asc' ? asc(sortColumn) : desc(sortColumn));

    // Apply pagination
    const results = await query.limit(limit).offset(offset);

    return NextResponse.json(results);

  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    const { routeId, truckId } = requestBody;

    // Validate required fields
    if (!routeId) {
      return NextResponse.json({ 
        error: "Route ID is required",
        code: "MISSING_ROUTE_ID" 
      }, { status: 400 });
    }

    if (!truckId) {
      return NextResponse.json({ 
        error: "Truck ID is required",
        code: "MISSING_TRUCK_ID" 
      }, { status: 400 });
    }

    // Validate IDs are integers
    if (isNaN(parseInt(routeId))) {
      return NextResponse.json({ 
        error: "Valid route ID is required",
        code: "INVALID_ROUTE_ID" 
      }, { status: 400 });
    }

    if (isNaN(parseInt(truckId))) {
      return NextResponse.json({ 
        error: "Valid truck ID is required",
        code: "INVALID_TRUCK_ID" 
      }, { status: 400 });
    }

    // Validate route exists
    const existingRoute = await db.select()
      .from(routes)
      .where(eq(routes.id, parseInt(routeId)))
      .limit(1);

    if (existingRoute.length === 0) {
      return NextResponse.json({ 
        error: "Route not found",
        code: "ROUTE_NOT_FOUND" 
      }, { status: 400 });
    }

    // Validate truck exists
    const existingTruck = await db.select()
      .from(trucks)
      .where(eq(trucks.id, parseInt(truckId)))
      .limit(1);

    if (existingTruck.length === 0) {
      return NextResponse.json({ 
        error: "Truck not found",
        code: "TRUCK_NOT_FOUND" 
      }, { status: 400 });
    }

    // Check for duplicate association
    const existingAssociation = await db.select()
      .from(routeTrucks)
      .where(and(
        eq(routeTrucks.routeId, parseInt(routeId)),
        eq(routeTrucks.truckId, parseInt(truckId))
      ))
      .limit(1);

    if (existingAssociation.length > 0) {
      return NextResponse.json({ 
        error: "Route-truck association already exists",
        code: "DUPLICATE_ASSOCIATION" 
      }, { status: 400 });
    }

    // Create new association
    const newAssociation = await db.insert(routeTrucks)
      .values({
        routeId: parseInt(routeId),
        truckId: parseInt(truckId),
        createdAt: new Date().toISOString()
      })
      .returning();

    return NextResponse.json(newAssociation[0], { status: 201 });

  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    // Check if record exists
    const existing = await db.select()
      .from(routeTrucks)
      .where(eq(routeTrucks.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ error: 'Route-truck association not found' }, { status: 404 });
    }

    // Delete the record
    const deleted = await db.delete(routeTrucks)
      .where(eq(routeTrucks.id, parseInt(id)))
      .returning();

    return NextResponse.json({ 
      message: 'Route-truck association deleted successfully',
      deleted: deleted[0]
    });

  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}