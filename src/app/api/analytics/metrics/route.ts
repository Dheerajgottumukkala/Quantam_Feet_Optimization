import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { analyticsMetrics } from '@/db/schema';
import { eq, and, gte, lte, desc, asc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single record fetch by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json({ 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        }, { status: 400 });
      }

      const record = await db.select()
        .from(analyticsMetrics)
        .where(eq(analyticsMetrics.id, parseInt(id)))
        .limit(1);

      if (record.length === 0) {
        return NextResponse.json({ 
          error: 'Analytics metric not found',
          code: "RECORD_NOT_FOUND" 
        }, { status: 404 });
      }

      return NextResponse.json(record[0]);
    }

    // List with filters, pagination, and sorting
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const startDate = searchParams.get('start_date');
    const endDate = searchParams.get('end_date');
    const sort = searchParams.get('sort') || 'date';
    const order = searchParams.get('order') || 'desc';

    // Validate date format if provided
    if (startDate && !isValidDate(startDate)) {
      return NextResponse.json({ 
        error: "Invalid start_date format. Use YYYY-MM-DD",
        code: "INVALID_DATE_FORMAT" 
      }, { status: 400 });
    }

    if (endDate && !isValidDate(endDate)) {
      return NextResponse.json({ 
        error: "Invalid end_date format. Use YYYY-MM-DD",
        code: "INVALID_DATE_FORMAT" 
      }, { status: 400 });
    }

    let query = db.select().from(analyticsMetrics);

    // Date range filtering
    if (startDate && endDate) {
      query = query.where(and(
        gte(analyticsMetrics.date, startDate),
        lte(analyticsMetrics.date, endDate)
      ));
    } else if (startDate) {
      query = query.where(gte(analyticsMetrics.date, startDate));
    } else if (endDate) {
      query = query.where(lte(analyticsMetrics.date, endDate));
    }

    // Sorting
    const orderDirection = order.toLowerCase() === 'asc' ? asc : desc;
    if (sort === 'date') {
      query = query.orderBy(orderDirection(analyticsMetrics.date));
    } else {
      query = query.orderBy(orderDirection(analyticsMetrics.date)); // Default to date
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
    const { 
      date, 
      quantumSavings, 
      classicalSavings, 
      fuelEfficiency, 
      costSavings, 
      distanceOptimization, 
      capacityUtilization 
    } = requestBody;

    // Validate required date field
    if (!date) {
      return NextResponse.json({ 
        error: "Date is required",
        code: "MISSING_REQUIRED_FIELD" 
      }, { status: 400 });
    }

    // Validate date format (ISO date format YYYY-MM-DD)
    if (!isValidDate(date)) {
      return NextResponse.json({ 
        error: "Invalid date format. Use YYYY-MM-DD",
        code: "INVALID_DATE_FORMAT" 
      }, { status: 400 });
    }

    // Check if date already exists (unique constraint)
    const existingRecord = await db.select()
      .from(analyticsMetrics)
      .where(eq(analyticsMetrics.date, date))
      .limit(1);

    if (existingRecord.length > 0) {
      return NextResponse.json({ 
        error: "Analytics metric for this date already exists",
        code: "DATE_NOT_UNIQUE" 
      }, { status: 400 });
    }

    // Validate numeric fields are positive if provided
    const numericFields = {
      quantumSavings,
      classicalSavings,
      fuelEfficiency,
      costSavings,
      distanceOptimization,
      capacityUtilization
    };

    for (const [fieldName, value] of Object.entries(numericFields)) {
      if (value !== undefined && value !== null && value < 0) {
        return NextResponse.json({ 
          error: `${fieldName} must be a positive number`,
          code: "INVALID_NUMERIC_VALUE" 
        }, { status: 400 });
      }
    }

    // Prepare insert data
    const insertData = {
      date,
      quantumSavings: quantumSavings || null,
      classicalSavings: classicalSavings || null,
      fuelEfficiency: fuelEfficiency || null,
      costSavings: costSavings || null,
      distanceOptimization: distanceOptimization || null,
      capacityUtilization: capacityUtilization || null,
      createdAt: new Date().toISOString()
    };

    const newRecord = await db.insert(analyticsMetrics)
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
    const { 
      date,
      quantumSavings, 
      classicalSavings, 
      fuelEfficiency, 
      costSavings, 
      distanceOptimization, 
      capacityUtilization 
    } = requestBody;

    // Check if record exists
    const existingRecord = await db.select()
      .from(analyticsMetrics)
      .where(eq(analyticsMetrics.id, parseInt(id)))
      .limit(1);

    if (existingRecord.length === 0) {
      return NextResponse.json({ 
        error: 'Analytics metric not found',
        code: "RECORD_NOT_FOUND" 
      }, { status: 404 });
    }

    // Validate that date cannot be changed
    if (date !== undefined && date !== existingRecord[0].date) {
      return NextResponse.json({ 
        error: "Date cannot be changed in update operation",
        code: "DATE_IMMUTABLE" 
      }, { status: 400 });
    }

    // Validate numeric fields are positive if provided
    const numericFields = {
      quantumSavings,
      classicalSavings,
      fuelEfficiency,
      costSavings,
      distanceOptimization,
      capacityUtilization
    };

    for (const [fieldName, value] of Object.entries(numericFields)) {
      if (value !== undefined && value !== null && value < 0) {
        return NextResponse.json({ 
          error: `${fieldName} must be a positive number`,
          code: "INVALID_NUMERIC_VALUE" 
        }, { status: 400 });
      }
    }

    // Prepare update data (only include fields that are provided)
    const updateData: any = {
      updatedAt: new Date().toISOString()
    };

    if (quantumSavings !== undefined) updateData.quantumSavings = quantumSavings;
    if (classicalSavings !== undefined) updateData.classicalSavings = classicalSavings;
    if (fuelEfficiency !== undefined) updateData.fuelEfficiency = fuelEfficiency;
    if (costSavings !== undefined) updateData.costSavings = costSavings;
    if (distanceOptimization !== undefined) updateData.distanceOptimization = distanceOptimization;
    if (capacityUtilization !== undefined) updateData.capacityUtilization = capacityUtilization;

    const updated = await db.update(analyticsMetrics)
      .set(updateData)
      .where(eq(analyticsMetrics.id, parseInt(id)))
      .returning();

    if (updated.length === 0) {
      return NextResponse.json({ 
        error: 'Failed to update analytics metric',
        code: "UPDATE_FAILED" 
      }, { status: 500 });
    }

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

    // Check if record exists before deleting
    const existingRecord = await db.select()
      .from(analyticsMetrics)
      .where(eq(analyticsMetrics.id, parseInt(id)))
      .limit(1);

    if (existingRecord.length === 0) {
      return NextResponse.json({ 
        error: 'Analytics metric not found',
        code: "RECORD_NOT_FOUND" 
      }, { status: 404 });
    }

    const deleted = await db.delete(analyticsMetrics)
      .where(eq(analyticsMetrics.id, parseInt(id)))
      .returning();

    if (deleted.length === 0) {
      return NextResponse.json({ 
        error: 'Failed to delete analytics metric',
        code: "DELETE_FAILED" 
      }, { status: 500 });
    }

    return NextResponse.json({
      message: 'Analytics metric deleted successfully',
      deletedRecord: deleted[0]
    });

  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

// Helper function to validate date format (YYYY-MM-DD)
function isValidDate(dateString: string): boolean {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) {
    return false;
  }
  
  const date = new Date(dateString + 'T00:00:00.000Z');
  const [year, month, day] = dateString.split('-').map(Number);
  
  return date.getUTCFullYear() === year &&
         date.getUTCMonth() === month - 1 &&
         date.getUTCDate() === day;
}