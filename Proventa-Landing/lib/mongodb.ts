import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Remove any trailing whitespace from the URI
const MONGODB_URI = process.env.MONGODB_URI.trim();

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

let cached = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: 'waitlist',
      connectTimeoutMS: 5000, // 5 second timeout
      socketTimeoutMS: 5000,
      maxPoolSize: 10,
      retryWrites: true,
    };

    try {
      cached.promise = mongoose.connect(MONGODB_URI, opts);
      console.log('Attempting to connect to MongoDB...');
    } catch (error) {
      console.error('Error initializing MongoDB connection:', error);
      cached.promise = null;
      throw error;
    }
  }

  try {
    cached.conn = await cached.promise;
    console.log('Successfully connected to MongoDB');
    return cached.conn;
  } catch (error) {
    console.error('Error establishing MongoDB connection:', error);
    cached.promise = null;
    throw error;
  }
}

export default connectDB; 