import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const pythonOutputPath = path.join(process.cwd(), 'python_output.json');
    
    if (!fs.existsSync(pythonOutputPath)) {
      return NextResponse.json({ error: 'File not found', path: pythonOutputPath });
    }

    const pythonOutput = fs.readFileSync(pythonOutputPath, 'utf8');
    
    return NextResponse.json({
      success: true,
      fileSize: pythonOutput.length,
      preview: pythonOutput.substring(0, 500),
      hasJson: pythonOutput.includes('"Truck 1"'),
      jsonStart: pythonOutput.indexOf('{\n  "Truck 1":'),
      jsonEnd: pythonOutput.lastIndexOf('\n}')
    });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
