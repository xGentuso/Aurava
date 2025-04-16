import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';

export async function GET() {
  try {
    // Attempt to connect to MongoDB
    const mongoose = await connectDB();
    
    // If we get here, connection was successful
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