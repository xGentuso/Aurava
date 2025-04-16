import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Waitlist from '@/models/Waitlist';
import mongoose from 'mongoose';

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
  console.log('Received POST request to /api/waitlist');
  
  try {
    // Log MongoDB URI (with password removed)
    const mongoUri = process.env.MONGODB_URI || '';
    console.log('MongoDB URI:', mongoUri.replace(/:([^@]+)@/, ':***@'));
    
    // Connect to database
    console.log('Attempting to connect to MongoDB...');
    await connectDB();
    console.log('Successfully connected to MongoDB');

    // Parse request body
    let body;
    try {
      const text = await req.text();
      console.log('Request body text:', text);
      body = JSON.parse(text);
      console.log('Parsed request body:', body);
    } catch (e) {
      console.error('Failed to parse request body:', e);
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const { email, name, interests, referralSource } = body;

    // Validate required fields
    if (!email) {
      console.log('Email field missing');
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    console.log('Checking for existing email:', email);
    const existingUser = await Waitlist.findOne({ email });
    if (existingUser) {
      console.log('Email already exists:', email);
      return NextResponse.json(
        { error: 'Email already registered for the waitlist' },
        { status: 400 }
      );
    }

    // Create new waitlist entry
    console.log('Creating new waitlist entry for:', email);
    const waitlistEntry = await Waitlist.create({
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
    console.log('Successfully created waitlist entry:', waitlistEntry);

    return NextResponse.json(
      { 
        status: 'success',
        message: 'Successfully joined the waitlist',
        data: waitlistEntry
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist submission error:', error);
    
    // Handle mongoose validation errors
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        { 
          status: 'error',
          message: 'Validation failed',
          errors: Object.values(error.errors).map(err => err.message)
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { 
        status: 'error',
        message: 'Failed to join waitlist',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
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