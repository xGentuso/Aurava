import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Waitlist from '@/models/Waitlist';
import mongoose from 'mongoose';

// Set timeout for MongoDB operations
const MONGODB_TIMEOUT = 5000; // 5 seconds

// Handle CORS preflight requests
export async function OPTIONS(request: Request) {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': 'https://www.proventa.health',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
}

export async function POST(req: Request) {
  try {
    // Connect to database with timeout
    const connectPromise = connectDB();
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Database connection timeout')), MONGODB_TIMEOUT);
    });

    try {
      await Promise.race([connectPromise, timeoutPromise]);
    } catch (error) {
      console.error('Database connection error:', error);
      return NextResponse.json(
        { error: 'Unable to connect to database. Please try again.' },
        { status: 503 }
      );
    }

    // Parse request body
    let body;
    try {
      body = await req.json();
    } catch (e) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    const { email, name, interests, referralSource } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if email already exists with timeout
    try {
      const findPromise = Waitlist.findOne({ email });
      const existingUser = await Promise.race([
        findPromise,
        new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Database query timeout')), MONGODB_TIMEOUT);
        })
      ]);

      if (existingUser) {
        return NextResponse.json(
          { error: 'Email already registered for the waitlist' },
          { status: 400 }
        );
      }
    } catch (error) {
      console.error('Error checking existing user:', error);
      return NextResponse.json(
        { error: 'Error checking registration. Please try again.' },
        { status: 503 }
      );
    }

    // Create new waitlist entry with timeout
    try {
      const createPromise = Waitlist.create({
        email,
        name: name || email.split('@')[0],
        interests: interests || ['Health Tracking'],
        referralSource: referralSource || 'Other',
        status: 'Pending',
        notificationPreferences: {
          email: true,
          updates: true
        }
      });

      const waitlistEntry = await Promise.race([
        createPromise,
        new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Database operation timeout')), MONGODB_TIMEOUT);
        })
      ]);

      return NextResponse.json(
        { 
          status: 'success',
          message: 'Successfully joined the waitlist',
          data: waitlistEntry
        },
        { status: 201 }
      );
    } catch (error) {
      console.error('Error creating waitlist entry:', error);
      return NextResponse.json(
        { error: 'Failed to create waitlist entry. Please try again.' },
        { status: 503 }
      );
    }
  } catch (error) {
    console.error('Waitlist submission error:', error);
    
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        { 
          error: 'Invalid data provided',
          details: Object.values(error.errors).map(err => err.message)
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    
    // Fetch all waitlist entries, sorted by newest first
    const entries = await Waitlist.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json(
      { 
        status: 'success',
        data: entries
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching waitlist entries:', error);
    return NextResponse.json(
      { 
        status: 'error',
        message: 'Failed to fetch waitlist entries',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 