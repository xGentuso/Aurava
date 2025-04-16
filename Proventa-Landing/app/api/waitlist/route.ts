import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Waitlist from '@/models/Waitlist';
import mongoose from 'mongoose';

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { email, name, interests, referralSource } = body;

    // Check if email already exists
    const existingUser = await Waitlist.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered for the waitlist' },
        { status: 400 }
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