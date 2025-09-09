import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { pickupLocations, routes } from '@/db/schema';
import { eq, like, and, or, desc, asc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single record fetch
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json({ 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        }, { status: 400 });
      }

      const record = await db.select()
        .from(pickupLocations)
        .where(eq(pickupLocations.id, parseInt(id)))
        .limit(1);

      if (record.length === 0) {
        return NextResponse.json({ error: 'Pickup location not found' }, { status: 404 });
      }

      return NextResponse.json(record[0]);
    }

    // List with filtering, pagination, and sorting
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const search = searchParams.get('search');
    const routeId = searchParams.get('route_id');
    const priority = searchParams.get('priority');
    const cropType = searchParams.get('crop_type');
    const sort = searchParams.get('sort') || 'sequenceOrder';
    const order = searchParams.get('order') || 'asc';

    let query = db.select().from(pickupLocations);
    const conditions = [];

    // Filter by route_id
    if (routeId && !isNaN(parseInt(routeId))) {
      conditions.push(eq(pickupLocations.routeId, parseInt(routeId)));
    }

    // Filter by priority
    if (priority && ['low', 'medium', 'high'].includes(priority)) {
      conditions.push(eq(pickupLocations.priority, priority));
    }

    // Filter by crop_type
    if (cropType) {
      conditions.push(eq(pickupLocations.cropType, cropType));
    }

    // Search across text fields
    if (search) {
      const searchCondition = or(
        like(pickupLocations.address, `%${search}%`),
        like(pickupLocations.cropType, `%${search}%`),
        like(pickupLocations.priority, `%${search}%`)
      );
      conditions.push(searchCondition);
    }

    // Apply filters
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    // Apply sorting
    const sortColumn = sort === 'sequenceOrder' ? pickupLocations.sequenceOrder :
                      sort === 'priority' ? pickupLocations.priority :
                      sort === 'loadQuantity' ? pickupLocations.loadQuantity :
                      sort === 'createdAt' ? pickupLocations.createdAt :
                      pickupLocations.sequenceOrder;

    query = query.orderBy(order === 'desc' ? desc(sortColumn) : asc(sortColumn));

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
    const { routeId, address, loadQuantity, cropType, priority, maxDeliveryTime, sequenceOrder, estimatedTime, distanceFromPrevious } = requestBody;

    // Validate required fields
    if (!address || address.trim() === '') {
      return NextResponse.json({ 
        error: "Address is required",
        code: "MISSING_REQUIRED_FIELD" 
      }, { status: 400 });
    }

    if (!loadQuantity) {
      return NextResponse.json({ 
        error: "Load quantity is required",
        code: "MISSING_REQUIRED_FIELD" 
      }, { status: 400 });
    }

    if (!cropType || cropType.trim() === '') {
      return NextResponse.json({ 
        error: "Crop type is required",
        code: "MISSING_REQUIRED_FIELD" 
      }, { status: 400 });
    }

    // Validate load quantity is positive number
    if (isNaN(parseFloat(loadQuantity)) || parseFloat(loadQuantity) <= 0) {
      return NextResponse.json({ 
        error: "Load quantity must be a positive number",
        code: "INVALID_LOAD_QUANTITY" 
      }, { status: 400 });
    }

    // Validate route exists if routeId provided
    if (routeId) {
      if (isNaN(parseInt(routeId))) {
        return NextResponse.json({ 
          error: "Route ID must be a valid number",
          code: "INVALID_ROUTE_ID" 
        }, { status: 400 });
      }

      const route = await db.select()
        .from(routes)
        .where(eq(routes.id, parseInt(routeId)))
        .limit(1);

      if (route.length === 0) {
        return NextResponse.json({ 
          error: "Route not found",
          code: "ROUTE_NOT_FOUND" 
        }, { status: 400 });
      }
    }

    // Validate priority if provided
    if (priority && !['low', 'medium', 'high'].includes(priority)) {
      return NextResponse.json({ 
        error: "Priority must be one of: low, medium, high",
        code: "INVALID_PRIORITY" 
      }, { status: 400 });
    }

    // Validate numeric fields are positive if provided
    if (maxDeliveryTime && (isNaN(parseInt(maxDeliveryTime)) || parseInt(maxDeliveryTime) <= 0)) {
      return NextResponse.json({ 
        error: "Max delivery time must be a positive number",
        code: "INVALID_MAX_DELIVERY_TIME" 
      }, { status: 400 });
    }

    if (estimatedTime && (isNaN(parseInt(estimatedTime)) || parseInt(estimatedTime) <= 0)) {
      return NextResponse.json({ 
        error: "Estimated time must be a positive number",
        code: "INVALID_ESTIMATED_TIME" 
      }, { status: 400 });
    }

    if (distanceFromPrevious && (isNaN(parseFloat(distanceFromPrevious)) || parseFloat(distanceFromPrevious) <= 0)) {
      return NextResponse.json({ 
        error: "Distance from previous must be a positive number",
        code: "INVALID_DISTANCE" 
      }, { status: 400 });
    }

    // Prepare insert data
    const insertData = {
      routeId: routeId ? parseInt(routeId) : null,
      address: address.trim(),
      loadQuantity: parseFloat(loadQuantity),
      cropType: cropType.trim(),
      priority: priority || 'medium',
      maxDeliveryTime: maxDeliveryTime ? parseInt(maxDeliveryTime) : null,
      sequenceOrder: sequenceOrder ? parseInt(sequenceOrder) : null,
      estimatedTime: estimatedTime ? parseInt(estimatedTime) : null,
      distanceFromPrevious: distanceFromPrevious ? parseFloat(distanceFromPrevious) : null,
      createdAt: new Date().toISOString()
    };

    const newRecord = await db.insert(pickupLocations)
      .values(insertData)
      .returning();

    return NextResponse.json(newRecord[0], { status: 201 });

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
    const { routeId, address, loadQuantity, cropType, priority, maxDeliveryTime, sequenceOrder, estimatedTime, distanceFromPrevious } = requestBody;

    // Check if record exists
    const existingRecord = await db.select()
      .from(pickupLocations)
      .where(eq(pickupLocations.id, parseInt(id)))
      .limit(1);

    if (existingRecord.length === 0) {
      return NextResponse.json({ error: 'Pickup location not found' }, { status: 404 });
    }

    // Validate route exists if routeId provided
    if (routeId !== undefined) {
      if (routeId !== null && isNaN(parseInt(routeId))) {
        return NextResponse.json({ 
          error: "Route ID must be a valid number or null",
          code: "INVALID_ROUTE_ID" 
        }, { status: 400 });
      }

      if (routeId !== null) {
        const route = await db.select()
          .from(routes)
          .where(eq(routes.id, parseInt(routeId)))
          .limit(1);

        if (route.length === 0) {
          return NextResponse.json({ 
            error: "Route not found",
            code: "ROUTE_NOT_FOUND" 
          }, { status: 400 });
        }
      }
    }

    // Validate priority if provided
    if (priority && !['low', 'medium', 'high'].includes(priority)) {
      return NextResponse.json({ 
        error: "Priority must be one of: low, medium, high",
        code: "INVALID_PRIORITY" 
      }, { status: 400 });
    }

    // Validate load quantity is positive if provided
    if (loadQuantity !== undefined && (isNaN(parseFloat(loadQuantity)) || parseFloat(loadQuantity) <= 0)) {
      return NextResponse.json({ 
        error: "Load quantity must be a positive number",
        code: "INVALID_LOAD_QUANTITY" 
      }, { status: 400 });
    }

    // Validate numeric fields are positive if provided
    if (maxDeliveryTime !== undefined && maxDeliveryTime !== null && (isNaN(parseInt(maxDeliveryTime)) || parseInt(maxDeliveryTime) <= 0)) {
      return NextResponse.json({ 
        error: "Max delivery time must be a positive number",
        code: "INVALID_MAX_DELIVERY_TIME" 
      }, { status: 400 });
    }

    if (estimatedTime !== undefined && estimatedTime !== null && (isNaN(parseInt(estimatedTime)) || parseInt(estimatedTime) <= 0)) {
      return NextResponse.json({ 
        error: "Estimated time must be a positive number",
        code: "INVALID_ESTIMATED_TIME" 
      }, { status: 400 });
    }

    if (distanceFromPrevious !== undefined && distanceFromPrevious !== null && (isNaN(parseFloat(distanceFromPrevious)) || parseFloat(distanceFromPrevious) <= 0)) {
      return NextResponse.json({ 
        error: "Distance from previous must be a positive number",
        code: "INVALID_DISTANCE" 
      }, { status: 400 });
    }

    // Prepare update data
    const updateData: any = {};

    if (routeId !== undefined) updateData.routeId = routeId ? parseInt(routeId) : null;
    if (address !== undefined) updateData.address = address.trim();
    if (loadQuantity !== undefined) updateData.loadQuantity = parseFloat(loadQuantity);
    if (cropType !== undefined) updateData.cropType = cropType.trim();
    if (priority !== undefined) updateData.priority = priority;
    if (maxDeliveryTime !== undefined) updateData.maxDeliveryTime = maxDeliveryTime ? parseInt(maxDeliveryTime) : null;
    if (sequenceOrder !== undefined) updateData.sequenceOrder = sequenceOrder ? parseInt(sequenceOrder) : null;
    if (estimatedTime !== undefined) updateData.estimatedTime = estimatedTime ? parseInt(estimatedTime) : null;
    if (distanceFromPrevious !== undefined) updateData.distanceFromPrevious = distanceFromPrevious ? parseFloat(distanceFromPrevious) : null;

    // Only proceed if there are fields to update
    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ 
        error: "No valid fields provided for update",
        code: "NO_UPDATE_FIELDS" 
      }, { status: 400 });
    }

    const updated = await db.update(pickupLocations)
      .set(updateData)
      .where(eq(pickupLocations.id, parseInt(id)))
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
    const existingRecord = await db.select()
      .from(pickupLocations)
      .where(eq(pickupLocations.id, parseInt(id)))
      .limit(1);

    if (existingRecord.length === 0) {
      return NextResponse.json({ error: 'Pickup location not found' }, { status: 404 });
    }

    const deleted = await db.delete(pickupLocations)
      .where(eq(pickupLocations.id, parseInt(id)))
      .returning();

    return NextResponse.json({
      message: 'Pickup location deleted successfully',
      deleted: deleted[0]
    });

  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}