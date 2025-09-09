import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { performanceInsights } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Validate ID is valid integer
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({
        error: "Valid ID is required",
        code: "INVALID_ID"
      }, { status: 400 });
    }

    const insightId = parseInt(id);

    // Get current insight to check if it exists and get current is_pinned value
    const currentInsight = await db.select()
      .from(performanceInsights)
      .where(eq(performanceInsights.id, insightId))
      .limit(1);

    if (currentInsight.length === 0) {
      return NextResponse.json({
        error: 'Performance insight not found',
        code: 'INSIGHT_NOT_FOUND'
      }, { status: 404 });
    }

    // Toggle the is_pinned status
    const currentPinnedStatus = currentInsight[0].isPinned;
    const newPinnedStatus = !currentPinnedStatus;

    // Update the insight with toggled is_pinned status
    const updatedInsight = await db.update(performanceInsights)
      .set({
        isPinned: newPinnedStatus,
        updatedAt: new Date().toISOString()
      })
      .where(eq(performanceInsights.id, insightId))
      .returning();

    if (updatedInsight.length === 0) {
      return NextResponse.json({
        error: 'Failed to update performance insight',
        code: 'UPDATE_FAILED'
      }, { status: 500 });
    }

    return NextResponse.json(updatedInsight[0], { status: 200 });

  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({
      error: 'Internal server error: ' + error
    }, { status: 500 });
  }
}