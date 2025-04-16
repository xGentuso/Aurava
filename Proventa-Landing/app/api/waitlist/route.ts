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
  // Add CORS headers to the response
  const corsHeaders = {
    'Access-Control-Allow-Origin': 'https://www.proventa.health',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  };

  try {
    // Connect to database
    await connectDB();

    // Parse request body
    let body;
    try {
      body = await req.json();
    } catch (e) {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400, headers: corsHeaders }
      );
    }

    const { email, name, interests, referralSource } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Check if email already exists
    const existingUser = await Waitlist.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered for the waitlist' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Create new waitlist entry
    const waitlistEntry = await Waitlist.create({
      email,
      name: name || email.split('@')[0], // Fallback to email username if name not provided
      interests: interests || ['Health Tracking'], // Default interest
      referralSource: referralSource || 'Other', // Default source
      status: 'Pending',
      notificationPreferences: {
        email: true,
        updates: true
      }
    });

    return NextResponse.json(
      { 
        status: 'success',
        message: 'Successfully joined the waitlist',
        data: waitlistEntry
      },
      { status: 201, headers: corsHeaders }
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
        { status: 400, headers: corsHeaders }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { 
        status: 'error',
        message: 'Failed to join waitlist',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function GET() {
  const corsHeaders = {
    'Access-Control-Allow-Origin': 'https://www.proventa.health',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  };

  try {
    await connectDB();
    
    // Fetch all waitlist entries, sorted by newest first
    const entries = await Waitlist.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json(
      { 
        status: 'success',
        data: entries
      },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error('Error fetching waitlist entries:', error);
    return NextResponse.json(
      { 
        status: 'error',
        message: 'Failed to fetch waitlist entries',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500, headers: corsHeaders }
    );
  }
} 