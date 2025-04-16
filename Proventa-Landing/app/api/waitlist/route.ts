import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Waitlist from '@/models/Waitlist';
import mongoose from 'mongoose';

// Define the schema if not already defined elsewhere
const waitlistSchema = new mongoose.Schema({
  email: String,
  createdAt: { type: Date, default: Date.now }
});

// Get the model (or create if doesn't exist)
const WaitlistModel = mongoose.models.Waitlist || mongoose.model('Waitlist', waitlistSchema);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, interests, referralSource } = body;

    await connectDB();

    // Check if email already exists
    const existingUser = await WaitlistModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered for the waitlist' },
        { status: 400 }
      );
    }

    // Create new waitlist entry
    const waitlistEntry = await WaitlistModel.create({
      email,
      name,
      interests,
      referralSource,
    });

    // TODO: Add email notification logic here

    return NextResponse.json(
      { message: 'Successfully joined the waitlist', data: waitlistEntry },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to join waitlist' },
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
  } catch (error: any) {
    console.error('Error fetching waitlist entries:', error);
    return NextResponse.json(
      { 
        status: 'error',
        message: 'Failed to fetch waitlist entries',
        error: error.message 
      },
      { status: 500 }
    );
  }
} 