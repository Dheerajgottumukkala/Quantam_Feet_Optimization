import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { trucks, shipmentOrders } from '@/db/schema';
import { eq, and } from 'drizzle-orm';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const truckId = parseInt(params.id);

    // Validate truck ID
    if (!truckId || isNaN(truckId)) {
      return NextResponse.json({ 
        error: "Valid truck ID is required",
        code: "INVALID_TRUCK_ID" 
      }, { status: 400 });
    }

    // Check if truck exists
    const truck = await db.select()
      .from(trucks)
      .where(eq(trucks.id, truckId))
      .limit(1);

    if (truck.length === 0) {
      return NextResponse.json({ 
        error: 'Truck not found',
        code: "TRUCK_NOT_FOUND" 
      }, { status: 404 });
    }

    // Parse query parameters
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const status = searchParams.get('status');

    // Build query
    let query = db.select()
      .from(shipmentOrders)
      .where(eq(shipmentOrders.truckId, truckId));

    // Apply status filter if provided
    if (status) {
      if (status !== 'reached' && status !== 'not_reached') {
        return NextResponse.json({ 
          error: "Invalid status. Must be 'reached' or 'not_reached'",
          code: "INVALID_STATUS" 
        }, { status: 400 });
      }
      
      query = db.select()
        .from(shipmentOrders)
        .where(and(
          eq(shipmentOrders.truckId, truckId),
          eq(shipmentOrders.status, status)
        ));
    }

    // Execute query with pagination
    const orders = await query
      .limit(limit)
      .offset(offset)
      .orderBy(shipmentOrders.createdAt);

    return NextResponse.json(orders, { status: 200 });

  } catch (error) {
    console.error('GET shipment orders error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}