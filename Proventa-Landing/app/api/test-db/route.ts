import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';

export async function GET() {
  try {
    const mongoose = await connectDB();
    
    // Only try to access database properties after we're sure we're connected
    if (!mongoose?.connection?.db) {
      throw new Error('Database connection not established');
    }

    return NextResponse.json(
      { 
        status: 'success',
        message: 'Successfully connected to MongoDB',
        database: mongoose.connection.db.databaseName
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Database connection error:', error);
    return NextResponse.json(
      { 
        status: 'error',
        message: 'Failed to connect to MongoDB',
        error: error.message 
      },
      { status: 500 }
    );
  }
} 