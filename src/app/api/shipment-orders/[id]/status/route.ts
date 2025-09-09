import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { shipmentOrders } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    // Validate ID parameter
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid shipment order ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    const shipmentOrderId = parseInt(id);

    // Parse request body
    let requestBody;
    try {
      requestBody = await request.json();
    } catch (error) {
      return NextResponse.json({ 
        error: "Invalid JSON in request body",
        code: "INVALID_JSON" 
      }, { status: 400 });
    }

    const { status } = requestBody;

    // Validate required fields
    if (!status) {
      return NextResponse.json({ 
        error: "Status is required",
        code: "MISSING_STATUS" 
      }, { status: 400 });
    }

    // Validate status value
    const validStatuses = ['reached', 'not_reached'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ 
        error: "Status must be either 'reached' or 'not_reached'",
        code: "INVALID_STATUS" 
      }, { status: 400 });
    }

    // Check if shipment order exists
    const existingOrder = await db.select()
      .from(shipmentOrders)
      .where(eq(shipmentOrders.id, shipmentOrderId))
      .limit(1);

    if (existingOrder.length === 0) {
      return NextResponse.json({ 
        error: 'Shipment order not found',
        code: "SHIPMENT_ORDER_NOT_FOUND" 
      }, { status: 404 });
    }

    // Update the shipment order
    const updated = await db.update(shipmentOrders)
      .set({
        status: status,
        updatedAt: new Date().toISOString()
      })
      .where(eq(shipmentOrders.id, shipmentOrderId))
      .returning();

    if (updated.length === 0) {
      return NextResponse.json({ 
        error: 'Failed to update shipment order',
        code: "UPDATE_FAILED" 
      }, { status: 500 });
    }

    return NextResponse.json(updated[0], { status: 200 });

  } catch (error) {
    console.error('PUT shipment order error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}