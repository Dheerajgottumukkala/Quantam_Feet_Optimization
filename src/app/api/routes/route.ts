import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { routes } from '@/db/schema';
import { eq, like, and, or, desc, asc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    // Single route by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json({ 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        }, { status: 400 });
      }

      const route = await db.select()
        .from(routes)
        .where(eq(routes.id, parseInt(id)))
        .limit(1);

      if (route.length === 0) {
        return NextResponse.json({ error: 'Route not found' }, { status: 404 });
      }

      return NextResponse.json(route[0]);
    }

    // List routes with filtering, search, and pagination
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const search = searchParams.get('search');
    const status = searchParams.get('status');
    const sort = searchParams.get('sort') || 'createdAt';
    const order = searchParams.get('order') || 'desc';

    let query = db.select().from(routes);
    let conditions = [];

    // Status filtering
    if (status) {
      if (!['active', 'completed', 'cancelled'].includes(status)) {
        return NextResponse.json({ 
          error: "Invalid status. Must be one of: active, completed, cancelled",
          code: "INVALID_STATUS" 
        }, { status: 400 });
      }
      conditions.push(eq(routes.status, status));
    }

    // Search by route name
    if (search) {
      conditions.push(like(routes.routeName, `%${search}%`));
    }

    // Apply conditions
    if (conditions.length > 0) {
      query = query.where(conditions.length === 1 ? conditions[0] : and(...conditions));
    }

    // Apply sorting
    const sortColumn = routes[sort as keyof typeof routes] || routes.createdAt;
    query = order === 'asc' ? query.orderBy(asc(sortColumn)) : query.orderBy(desc(sortColumn));

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
    const { 
      routeName, 
      totalDistance, 
      totalTime, 
      totalLoad,
      isQuantumOptimized,
      savingsDistance,
      savingsTime,
      status
    } = requestBody;

    // Validate required fields
    if (!routeName || typeof routeName !== 'string' || routeName.trim().length === 0) {
      return NextResponse.json({ 
        error: "Route name is required and must be a non-empty string",
        code: "MISSING_ROUTE_NAME" 
      }, { status: 400 });
    }

    // Validate numeric fields are positive when provided
    if (totalDistance !== undefined && totalDistance !== null) {
      if (typeof totalDistance !== 'number' || totalDistance < 0) {
        return NextResponse.json({ 
          error: "Total distance must be a positive number",
          code: "INVALID_TOTAL_DISTANCE" 
        }, { status: 400 });
      }
    }

    if (totalTime !== undefined && totalTime !== null) {
      if (typeof totalTime !== 'number' || totalTime < 0) {
        return NextResponse.json({ 
          error: "Total time must be a positive number",
          code: "INVALID_TOTAL_TIME" 
        }, { status: 400 });
      }
    }

    if (totalLoad !== undefined && totalLoad !== null) {
      if (typeof totalLoad !== 'number' || totalLoad < 0) {
        return NextResponse.json({ 
          error: "Total load must be a positive number",
          code: "INVALID_TOTAL_LOAD" 
        }, { status: 400 });
      }
    }

    if (savingsDistance !== undefined && savingsDistance !== null) {
      if (typeof savingsDistance !== 'number' || savingsDistance < 0) {
        return NextResponse.json({ 
          error: "Savings distance must be a positive number",
          code: "INVALID_SAVINGS_DISTANCE" 
        }, { status: 400 });
      }
    }

    if (savingsTime !== undefined && savingsTime !== null) {
      if (typeof savingsTime !== 'number' || savingsTime < 0) {
        return NextResponse.json({ 
          error: "Savings time must be a positive number",
          code: "INVALID_SAVINGS_TIME" 
        }, { status: 400 });
      }
    }

    // Validate status if provided
    if (status !== undefined && !['active', 'completed', 'cancelled'].includes(status)) {
      return NextResponse.json({ 
        error: "Invalid status. Must be one of: active, completed, cancelled",
        code: "INVALID_STATUS" 
      }, { status: 400 });
    }

    // Prepare insert data with defaults
    const insertData = {
      routeName: routeName.trim(),
      totalDistance: totalDistance || null,
      totalTime: totalTime || null,
      totalLoad: totalLoad || null,
      isQuantumOptimized: isQuantumOptimized || false,
      savingsDistance: savingsDistance || null,
      savingsTime: savingsTime || null,
      status: status || 'active',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const newRoute = await db.insert(routes)
      .values(insertData)
      .returning();

    return NextResponse.json(newRoute[0], { status: 201 });

  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    const requestBody = await request.json();
    const { 
      routeName, 
      totalDistance, 
      totalTime, 
      totalLoad,
      isQuantumOptimized,
      savingsDistance,
      savingsTime,
      status
    } = requestBody;

    // Check if record exists
    const existingRoute = await db.select()
      .from(routes)
      .where(eq(routes.id, parseInt(id)))
      .limit(1);

    if (existingRoute.length === 0) {
      return NextResponse.json({ error: 'Route not found' }, { status: 404 });
    }

    // Validate fields if provided
    if (routeName !== undefined && (typeof routeName !== 'string' || routeName.trim().length === 0)) {
      return NextResponse.json({ 
        error: "Route name must be a non-empty string",
        code: "INVALID_ROUTE_NAME" 
      }, { status: 400 });
    }

    if (totalDistance !== undefined && totalDistance !== null) {
      if (typeof totalDistance !== 'number' || totalDistance < 0) {
        return NextResponse.json({ 
          error: "Total distance must be a positive number",
          code: "INVALID_TOTAL_DISTANCE" 
        }, { status: 400 });
      }
    }

    if (totalTime !== undefined && totalTime !== null) {
      if (typeof totalTime !== 'number' || totalTime < 0) {
        return NextResponse.json({ 
          error: "Total time must be a positive number",
          code: "INVALID_TOTAL_TIME" 
        }, { status: 400 });
      }
    }

    if (totalLoad !== undefined && totalLoad !== null) {
      if (typeof totalLoad !== 'number' || totalLoad < 0) {
        return NextResponse.json({ 
          error: "Total load must be a positive number",
          code: "INVALID_TOTAL_LOAD" 
        }, { status: 400 });
      }
    }

    if (savingsDistance !== undefined && savingsDistance !== null) {
      if (typeof savingsDistance !== 'number' || savingsDistance < 0) {
        return NextResponse.json({ 
          error: "Savings distance must be a positive number",
          code: "INVALID_SAVINGS_DISTANCE" 
        }, { status: 400 });
      }
    }

    if (savingsTime !== undefined && savingsTime !== null) {
      if (typeof savingsTime !== 'number' || savingsTime < 0) {
        return NextResponse.json({ 
          error: "Savings time must be a positive number",
          code: "INVALID_SAVINGS_TIME" 
        }, { status: 400 });
      }
    }

    // Validate status
    if (status !== undefined && !['active', 'completed', 'cancelled'].includes(status)) {
      return NextResponse.json({ 
        error: "Invalid status. Must be one of: active, completed, cancelled",
        code: "INVALID_STATUS" 
      }, { status: 400 });
    }

    // Prepare update data
    const updateData: any = {
      updatedAt: new Date().toISOString(),
    };

    if (routeName !== undefined) updateData.routeName = routeName.trim();
    if (totalDistance !== undefined) updateData.totalDistance = totalDistance;
    if (totalTime !== undefined) updateData.totalTime = totalTime;
    if (totalLoad !== undefined) updateData.totalLoad = totalLoad;
    if (isQuantumOptimized !== undefined) updateData.isQuantumOptimized = isQuantumOptimized;
    if (savingsDistance !== undefined) updateData.savingsDistance = savingsDistance;
    if (savingsTime !== undefined) updateData.savingsTime = savingsTime;
    if (status !== undefined) updateData.status = status;

    const updated = await db.update(routes)
      .set(updateData)
      .where(eq(routes.id, parseInt(id)))
      .returning();

    return NextResponse.json(updated[0]);

  } catch (error) {
    console.error('PUT error:', error);
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
    const existingRoute = await db.select()
      .from(routes)
      .where(eq(routes.id, parseInt(id)))
      .limit(1);

    if (existingRoute.length === 0) {
      return NextResponse.json({ error: 'Route not found' }, { status: 404 });
    }

    const deleted = await db.delete(routes)
      .where(eq(routes.id, parseInt(id)))
      .returning();

    return NextResponse.json({
      message: 'Route deleted successfully',
      deletedRoute: deleted[0]
    });

  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}