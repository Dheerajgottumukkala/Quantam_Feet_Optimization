import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { performanceInsights } from '@/db/schema';
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
        .from(performanceInsights)
        .where(eq(performanceInsights.id, parseInt(id)))
        .limit(1);

      if (record.length === 0) {
        return NextResponse.json({ error: 'Performance insight not found' }, { status: 404 });
      }

      return NextResponse.json(record[0]);
    }

    // List with filtering, pagination, and sorting
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const search = searchParams.get('search');
    const insightType = searchParams.get('insight_type');
    const isPinned = searchParams.get('is_pinned');
    const sort = searchParams.get('sort') || 'dateGenerated';
    const order = searchParams.get('order') || 'desc';

    let query = db.select().from(performanceInsights);

    // Build where conditions
    let whereConditions = [];

    // Filter by insight_type
    if (insightType) {
      const validTypes = ['fuel', 'route', 'cost', 'efficiency'];
      const types = insightType.split(',').filter(type => validTypes.includes(type));
      if (types.length > 0) {
        if (types.length === 1) {
          whereConditions.push(eq(performanceInsights.insightType, types[0]));
        } else {
          whereConditions.push(or(...types.map(type => eq(performanceInsights.insightType, type))));
        }
      }
    }

    // Filter by is_pinned
    if (isPinned !== null) {
      if (isPinned === 'true') {
        whereConditions.push(eq(performanceInsights.isPinned, true));
      } else if (isPinned === 'false') {
        whereConditions.push(eq(performanceInsights.isPinned, false));
      }
    }

    // Search functionality
    if (search) {
      whereConditions.push(like(performanceInsights.insightText, `%${search}%`));
    }

    // Apply where conditions
    if (whereConditions.length > 0) {
      query = query.where(and(...whereConditions));
    }

    // Apply sorting
    const sortField = sort === 'dateGenerated' ? performanceInsights.dateGenerated : performanceInsights.createdAt;
    query = query.orderBy(order === 'desc' ? desc(sortField) : asc(sortField));

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
    const { insightText, insightType, isPinned } = requestBody;

    // Validate required fields
    if (!insightText) {
      return NextResponse.json({ 
        error: "Insight text is required",
        code: "MISSING_REQUIRED_FIELD" 
      }, { status: 400 });
    }

    if (!insightType) {
      return NextResponse.json({ 
        error: "Insight type is required",
        code: "MISSING_REQUIRED_FIELD" 
      }, { status: 400 });
    }

    // Validate insight_type
    const validTypes = ['fuel', 'route', 'cost', 'efficiency'];
    if (!validTypes.includes(insightType)) {
      return NextResponse.json({ 
        error: "Insight type must be one of: fuel, route, cost, efficiency",
        code: "INVALID_INSIGHT_TYPE" 
      }, { status: 400 });
    }

    // Prepare insert data with defaults
    const currentDate = new Date();
    const insertData = {
      insightText: insightText.trim(),
      insightType,
      isPinned: isPinned || false,
      dateGenerated: currentDate.toISOString().split('T')[0], // YYYY-MM-DD format
      createdAt: currentDate.toISOString()
    };

    const newRecord = await db.insert(performanceInsights)
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

    // Check if record exists
    const existingRecord = await db.select()
      .from(performanceInsights)
      .where(eq(performanceInsights.id, parseInt(id)))
      .limit(1);

    if (existingRecord.length === 0) {
      return NextResponse.json({ error: 'Performance insight not found' }, { status: 404 });
    }

    const requestBody = await request.json();
    const { insightText, insightType, isPinned, dateGenerated } = requestBody;

    // Validate insight_type if provided
    if (insightType) {
      const validTypes = ['fuel', 'route', 'cost', 'efficiency'];
      if (!validTypes.includes(insightType)) {
        return NextResponse.json({ 
          error: "Insight type must be one of: fuel, route, cost, efficiency",
          code: "INVALID_INSIGHT_TYPE" 
        }, { status: 400 });
      }
    }

    // Prepare update data
    const updateData: any = {};

    if (insightText !== undefined) {
      updateData.insightText = insightText.trim();
    }
    if (insightType !== undefined) {
      updateData.insightType = insightType;
    }
    if (isPinned !== undefined) {
      updateData.isPinned = isPinned;
    }
    if (dateGenerated !== undefined) {
      updateData.dateGenerated = dateGenerated;
    }

    const updated = await db.update(performanceInsights)
      .set(updateData)
      .where(eq(performanceInsights.id, parseInt(id)))
      .returning();

    if (updated.length === 0) {
      return NextResponse.json({ error: 'Performance insight not found' }, { status: 404 });
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
      .from(performanceInsights)
      .where(eq(performanceInsights.id, parseInt(id)))
      .limit(1);

    if (existingRecord.length === 0) {
      return NextResponse.json({ error: 'Performance insight not found' }, { status: 404 });
    }

    const deleted = await db.delete(performanceInsights)
      .where(eq(performanceInsights.id, parseInt(id)))
      .returning();

    if (deleted.length === 0) {
      return NextResponse.json({ error: 'Performance insight not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      message: 'Performance insight deleted successfully',
      deleted: deleted[0]
    });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}