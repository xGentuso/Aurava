import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Waitlist from '@/models/Waitlist';
import mongoose from 'mongoose';

// Set timeout for MongoDB operations
const MONGODB_TIMEOUT = 15000; // 15 seconds

// Handle CORS preflight requests
export async function OPTIONS(request: Request) {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
}

export async function POST(req: Request) {
  console.log('Received waitlist submission request');
  
  try {
    // Connect to MongoDB with timeout
    console.log('Attempting to connect to MongoDB...');
    const connectPromise = connectDB();
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Connection timeout')), MONGODB_TIMEOUT);
    });

    const db = await Promise.race([connectPromise, timeoutPromise]);
    console.log('MongoDB connection successful');

    // Parse request body
    const body = await req.json();
    console.log('Request body:', body);

    const { email, name, interests, referralSource } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if email already exists with timeout
    console.log('Checking for existing email:', email);
    const existingUser = await Waitlist.findOne({ email }).maxTimeMS(MONGODB_TIMEOUT);
    
    if (existingUser) {
      console.log('Email already exists:', email);
      return NextResponse.json(
        { error: 'Email already registered for the waitlist' },
        { status: 400 }
      );
    }

    // Create new waitlist entry with timeout
    console.log('Creating new waitlist entry');
    const waitlistEntry = await new Waitlist({
      email,
      name: name || email.split('@')[0],
      interests: interests || ['Health Tracking'],
      referralSource: referralSource || 'Other',
      status: 'Pending',
      notificationPreferences: {
        email: true,
        updates: true
      }
    }).save({ maxTimeMS: MONGODB_TIMEOUT });

    console.log('Successfully created waitlist entry');
    return NextResponse.json(
      { 
        status: 'success',
        message: 'Successfully joined the waitlist',
        data: waitlistEntry
      },
      { 
        status: 201,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      }
    );
  } catch (e) {
    const error = e as Error;
    console.error('Waitlist submission error:', error);

    // Handle specific error types
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        { error: 'Invalid data provided' },
        { status: 400 }
      );
    }

    if (error instanceof mongoose.Error.MongooseServerSelectionError || 
        error.message === 'Connection timeout' ||
        error.name === 'MongoTimeoutError') {
      console.error('Database connection error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      return NextResponse.json(
        { error: 'Unable to connect to database. Please try again.' },
        { 
          status: 503,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }
        }
      );
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    
    // Fetch all waitlist entries, sorted by newest first
    const entries = await Waitlist.find({}).sort({ createdAt: -1 }).maxTimeMS(MONGODB_TIMEOUT);
    
    return NextResponse.json(
      { 
        status: 'success',
        data: entries
      },
      { 
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      }
    );
  } catch (error) {
    console.error('Error fetching waitlist entries:', error);
    return NextResponse.json(
      { 
        status: 'error',
        message: 'Failed to fetch waitlist entries',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      }
    );
  }
} 