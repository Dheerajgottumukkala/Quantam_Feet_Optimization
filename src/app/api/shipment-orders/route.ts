import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { shipmentOrders, trucks } from '@/db/schema';
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
        .from(shipmentOrders)
        .where(eq(shipmentOrders.id, parseInt(id)))
        .limit(1);
      
      if (record.length === 0) {
        return NextResponse.json({ error: 'Shipment order not found' }, { status: 404 });
      }
      
      return NextResponse.json(record[0]);
    }
    
    // List with filtering, search, and pagination
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const search = searchParams.get('search');
    const status = searchParams.get('status');
    const truckId = searchParams.get('truck_id');
    const sort = searchParams.get('sort') || 'createdAt';
    const order = searchParams.get('order') || 'desc';
    
    let query = db.select().from(shipmentOrders);
    
    // Build WHERE conditions
    const conditions = [];
    
    // Status filtering
    if (status === 'reached' || status === 'not_reached') {
      conditions.push(eq(shipmentOrders.status, status));
    }
    
    // Truck ID filtering
    if (truckId && !isNaN(parseInt(truckId))) {
      conditions.push(eq(shipmentOrders.truckId, parseInt(truckId)));
    }
    
    // Search functionality
    if (search) {
      const searchCondition = or(
        like(shipmentOrders.orderId, `%${search}%`),
        like(shipmentOrders.pickupPoint, `%${search}%`)
      );
      conditions.push(searchCondition);
    }
    
    // Apply WHERE conditions
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }
    
    // Apply sorting
    const orderBy = order === 'asc' ? asc : desc;
    if (sort === 'orderId') {
      query = query.orderBy(orderBy(shipmentOrders.orderId));
    } else if (sort === 'status') {
      query = query.orderBy(orderBy(shipmentOrders.status));
    } else if (sort === 'date') {
      query = query.orderBy(orderBy(shipmentOrders.date));
    } else {
      query = query.orderBy(orderBy(shipmentOrders.createdAt));
    }
    
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
    const { orderId, truckId, pickupPoint, date, status } = requestBody;
    
    // Validate required fields
    if (!orderId) {
      return NextResponse.json({ 
        error: "Order ID is required",
        code: "MISSING_REQUIRED_FIELD" 
      }, { status: 400 });
    }
    
    if (!pickupPoint) {
      return NextResponse.json({ 
        error: "Pickup point is required",
        code: "MISSING_REQUIRED_FIELD" 
      }, { status: 400 });
    }
    
    if (!date) {
      return NextResponse.json({ 
        error: "Date is required",
        code: "MISSING_REQUIRED_FIELD" 
      }, { status: 400 });
    }
    
    // Validate date format (ISO date string)
    if (isNaN(Date.parse(date))) {
      return NextResponse.json({ 
        error: "Invalid date format. Use ISO date string",
        code: "INVALID_DATE_FORMAT" 
      }, { status: 400 });
    }
    
    // Validate status if provided
    if (status && status !== 'reached' && status !== 'not_reached') {
      return NextResponse.json({ 
        error: "Status must be 'reached' or 'not_reached'",
        code: "INVALID_STATUS" 
      }, { status: 400 });
    }
    
    // Check if order_id is unique
    const existingOrder = await db.select()
      .from(shipmentOrders)
      .where(eq(shipmentOrders.orderId, orderId))
      .limit(1);
    
    if (existingOrder.length > 0) {
      return NextResponse.json({ 
        error: "Order ID must be unique",
        code: "DUPLICATE_ORDER_ID" 
      }, { status: 400 });
    }
    
    // Validate truck_id exists if provided
    if (truckId) {
      if (isNaN(parseInt(truckId))) {
        return NextResponse.json({ 
          error: "Truck ID must be a valid number",
          code: "INVALID_TRUCK_ID" 
        }, { status: 400 });
      }
      
      const truck = await db.select()
        .from(trucks)
        .where(eq(trucks.id, parseInt(truckId)))
        .limit(1);
      
      if (truck.length === 0) {
        return NextResponse.json({ 
          error: "Referenced truck does not exist",
          code: "TRUCK_NOT_FOUND" 
        }, { status: 400 });
      }
    }
    
    // Prepare insert data with defaults
    const insertData = {
      orderId: orderId.trim(),
      truckId: truckId ? parseInt(truckId) : null,
      pickupPoint: pickupPoint.trim(),
      date,
      status: status || 'not_reached',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    const newRecord = await db.insert(shipmentOrders)
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
    const { orderId, truckId, pickupPoint, date, status } = requestBody;
    
    // Check if record exists
    const existingRecord = await db.select()
      .from(shipmentOrders)
      .where(eq(shipmentOrders.id, parseInt(id)))
      .limit(1);
    
    if (existingRecord.length === 0) {
      return NextResponse.json({ error: 'Shipment order not found' }, { status: 404 });
    }
    
    // Validate status if provided
    if (status && status !== 'reached' && status !== 'not_reached') {
      return NextResponse.json({ 
        error: "Status must be 'reached' or 'not_reached'",
        code: "INVALID_STATUS" 
      }, { status: 400 });
    }
    
    // Validate date format if provided
    if (date && isNaN(Date.parse(date))) {
      return NextResponse.json({ 
        error: "Invalid date format. Use ISO date string",
        code: "INVALID_DATE_FORMAT" 
      }, { status: 400 });
    }
    
    // Validate truck_id exists if provided
    if (truckId) {
      if (isNaN(parseInt(truckId))) {
        return NextResponse.json({ 
          error: "Truck ID must be a valid number",
          code: "INVALID_TRUCK_ID" 
        }, { status: 400 });
      }
      
      const truck = await db.select()
        .from(trucks)
        .where(eq(trucks.id, parseInt(truckId)))
        .limit(1);
      
      if (truck.length === 0) {
        return NextResponse.json({ 
          error: "Referenced truck does not exist",
          code: "TRUCK_NOT_FOUND" 
        }, { status: 400 });
      }
    }
    
    // Check for unique order_id if updating
    if (orderId && orderId !== existingRecord[0].orderId) {
      const duplicateOrder = await db.select()
        .from(shipmentOrders)
        .where(eq(shipmentOrders.orderId, orderId))
        .limit(1);
      
      if (duplicateOrder.length > 0) {
        return NextResponse.json({ 
          error: "Order ID must be unique",
          code: "DUPLICATE_ORDER_ID" 
        }, { status: 400 });
      }
    }
    
    // Prepare update data
    const updates: any = {
      updatedAt: new Date().toISOString()
    };
    
    if (orderId !== undefined) updates.orderId = orderId.trim();
    if (truckId !== undefined) updates.truckId = truckId ? parseInt(truckId) : null;
    if (pickupPoint !== undefined) updates.pickupPoint = pickupPoint.trim();
    if (date !== undefined) updates.date = date;
    if (status !== undefined) updates.status = status;
    
    const updated = await db.update(shipmentOrders)
      .set(updates)
      .where(eq(shipmentOrders.id, parseInt(id)))
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
      .from(shipmentOrders)
      .where(eq(shipmentOrders.id, parseInt(id)))
      .limit(1);
    
    if (existingRecord.length === 0) {
      return NextResponse.json({ error: 'Shipment order not found' }, { status: 404 });
    }
    
    const deleted = await db.delete(shipmentOrders)
      .where(eq(shipmentOrders.id, parseInt(id)))
      .returning();
    
    return NextResponse.json({
      message: 'Shipment order deleted successfully',
      deleted: deleted[0]
    });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}