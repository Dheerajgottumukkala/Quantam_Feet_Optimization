import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { trucks, routeTrucks, shipmentOrders } from '@/db/schema';
import { eq, like, and, or, desc, asc } from 'drizzle-orm';

const VALID_TRUCK_TYPES = ['Standard', 'Electric', 'Heavy Duty'];
const VALID_AVAILABILITY = ['Available', 'Not Available'];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (id) {
      // Single truck by ID
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json({ 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        }, { status: 400 });
      }
      
      const truck = await db.select()
        .from(trucks)
        .where(eq(trucks.id, parseInt(id)))
        .limit(1);
      
      if (truck.length === 0) {
        return NextResponse.json({ 
          error: 'Truck not found' 
        }, { status: 404 });
      }
      
      return NextResponse.json(truck[0]);
    }
    
    // List trucks with filtering, search, and pagination
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const search = searchParams.get('search');
    const availability = searchParams.get('availability');
    const sort = searchParams.get('sort') || 'createdAt';
    const order = searchParams.get('order') || 'desc';
    
    let query = db.select().from(trucks);
    let conditions = [];
    
    // Filter by availability
    if (availability && VALID_AVAILABILITY.includes(availability)) {
      conditions.push(eq(trucks.availability, availability));
    }
    
    // Search by truck_number and truck_type
    if (search) {
      const searchCondition = or(
        like(trucks.truckNumber, `%${search}%`),
        like(trucks.truckType, `%${search}%`)
      );
      conditions.push(searchCondition);
    }
    
    // Apply conditions
    if (conditions.length > 0) {
      query = query.where(conditions.length === 1 ? conditions[0] : and(...conditions));
    }
    
    // Apply sorting
    const sortColumn = sort === 'truckNumber' ? trucks.truckNumber :
                      sort === 'capacity' ? trucks.capacity :
                      sort === 'truckType' ? trucks.truckType :
                      sort === 'availability' ? trucks.availability :
                      sort === 'updatedAt' ? trucks.updatedAt :
                      trucks.createdAt;
    
    query = query.orderBy(order === 'asc' ? asc(sortColumn) : desc(sortColumn));
    
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
    const body = await request.json();
    const { truckNumber, imageUrl, capacity, truckType, availability } = body;
    
    // Validate required fields
    if (!truckNumber) {
      return NextResponse.json({ 
        error: "Truck number is required",
        code: "MISSING_TRUCK_NUMBER" 
      }, { status: 400 });
    }
    
    if (!capacity) {
      return NextResponse.json({ 
        error: "Capacity is required",
        code: "MISSING_CAPACITY" 
      }, { status: 400 });
    }
    
    if (!truckType) {
      return NextResponse.json({ 
        error: "Truck type is required",
        code: "MISSING_TRUCK_TYPE" 
      }, { status: 400 });
    }
    
    // Validate truck type
    if (!VALID_TRUCK_TYPES.includes(truckType)) {
      return NextResponse.json({ 
        error: `Truck type must be one of: ${VALID_TRUCK_TYPES.join(', ')}`,
        code: "INVALID_TRUCK_TYPE" 
      }, { status: 400 });
    }
    
    // Validate capacity is positive integer
    const capacityInt = parseInt(capacity);
    if (isNaN(capacityInt) || capacityInt <= 0) {
      return NextResponse.json({ 
        error: "Capacity must be a positive integer",
        code: "INVALID_CAPACITY" 
      }, { status: 400 });
    }
    
    // Validate availability if provided
    if (availability && !VALID_AVAILABILITY.includes(availability)) {
      return NextResponse.json({ 
        error: `Availability must be one of: ${VALID_AVAILABILITY.join(', ')}`,
        code: "INVALID_AVAILABILITY" 
      }, { status: 400 });
    }
    
    // Check if truck number already exists
    const existingTruck = await db.select()
      .from(trucks)
      .where(eq(trucks.truckNumber, truckNumber.trim()))
      .limit(1);
    
    if (existingTruck.length > 0) {
      return NextResponse.json({ 
        error: "Truck number already exists",
        code: "DUPLICATE_TRUCK_NUMBER" 
      }, { status: 400 });
    }
    
    // Prepare insert data
    const now = new Date().toISOString();
    const insertData = {
      truckNumber: truckNumber.trim(),
      imageUrl: imageUrl || null,
      capacity: capacityInt,
      truckType,
      availability: availability || 'Available',
      createdAt: now,
      updatedAt: now
    };
    
    const newTruck = await db.insert(trucks)
      .values(insertData)
      .returning();
    
    return NextResponse.json(newTruck[0], { status: 201 });
    
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
    
    const body = await request.json();
    const { truckNumber, imageUrl, capacity, truckType, availability } = body;
    
    // Check if truck exists
    const existingTruck = await db.select()
      .from(trucks)
      .where(eq(trucks.id, parseInt(id)))
      .limit(1);
    
    if (existingTruck.length === 0) {
      return NextResponse.json({ 
        error: 'Truck not found' 
      }, { status: 404 });
    }
    
    // Validate truck type if provided
    if (truckType && !VALID_TRUCK_TYPES.includes(truckType)) {
      return NextResponse.json({ 
        error: `Truck type must be one of: ${VALID_TRUCK_TYPES.join(', ')}`,
        code: "INVALID_TRUCK_TYPE" 
      }, { status: 400 });
    }
    
    // Validate availability if provided
    if (availability && !VALID_AVAILABILITY.includes(availability)) {
      return NextResponse.json({ 
        error: `Availability must be one of: ${VALID_AVAILABILITY.join(', ')}`,
        code: "INVALID_AVAILABILITY" 
      }, { status: 400 });
    }
    
    // Validate capacity if provided
    let capacityInt = undefined;
    if (capacity !== undefined) {
      capacityInt = parseInt(capacity);
      if (isNaN(capacityInt) || capacityInt <= 0) {
        return NextResponse.json({ 
          error: "Capacity must be a positive integer",
          code: "INVALID_CAPACITY" 
        }, { status: 400 });
      }
    }
    
    // Check truck number uniqueness if being updated
    if (truckNumber && truckNumber.trim() !== existingTruck[0].truckNumber) {
      const duplicateTruck = await db.select()
        .from(trucks)
        .where(eq(trucks.truckNumber, truckNumber.trim()))
        .limit(1);
      
      if (duplicateTruck.length > 0) {
        return NextResponse.json({ 
          error: "Truck number already exists",
          code: "DUPLICATE_TRUCK_NUMBER" 
        }, { status: 400 });
      }
    }
    
    // Prepare update data (only include fields that are provided)
    const updateData: any = {
      updatedAt: new Date().toISOString()
    };
    
    if (truckNumber !== undefined) updateData.truckNumber = truckNumber.trim();
    if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
    if (capacityInt !== undefined) updateData.capacity = capacityInt;
    if (truckType !== undefined) updateData.truckType = truckType;
    if (availability !== undefined) updateData.availability = availability;
    
    const updatedTruck = await db.update(trucks)
      .set(updateData)
      .where(eq(trucks.id, parseInt(id)))
      .returning();
    
    return NextResponse.json(updatedTruck[0]);
    
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
    
    // Check if truck exists
    const existingTruck = await db.select()
      .from(trucks)
      .where(eq(trucks.id, parseInt(id)))
      .limit(1);
    
    if (existingTruck.length === 0) {
      return NextResponse.json({ 
        error: 'Truck not found' 
      }, { status: 404 });
    }
    
    // Remove dependent records first to satisfy FK constraints
    await db.delete(routeTrucks)
      .where(eq(routeTrucks.truckId, parseInt(id)));
    await db.delete(shipmentOrders)
      .where(eq(shipmentOrders.truckId, parseInt(id)));

    const deletedTruck = await db.delete(trucks)
      .where(eq(trucks.id, parseInt(id)))
      .returning();
    
    return NextResponse.json({
      message: 'Truck deleted successfully',
      deletedTruck: deletedTruck[0]
    });
    
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}