import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI?.trim();

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    console.log('Using cached MongoDB connection');
    return cached.conn;
  }

  const opts = {
    bufferCommands: true,
    dbName: 'waitlist',
    maxPoolSize: 10,
    minPoolSize: 5,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4,
    retryWrites: true,
    retryReads: true,
  };

  try {
    if (!cached.promise) {
      console.log('Initializing new MongoDB connection...');
      const mongoose = await import('mongoose');
      
      // Enable debug mode for connection issues
      mongoose.set('debug', true);
      
      cached.promise = mongoose.connect(MONGODB_URI, opts);
    }

    cached.conn = await cached.promise;
    console.log('Successfully connected to MongoDB');
    
    // Add connection error handlers
    cached.conn.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });

    cached.conn.connection.on('disconnected', () => {
      console.warn('MongoDB disconnected. Attempting to reconnect...');
      cached.conn = null;
      cached.promise = null;
    });

    return cached.conn;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    cached.promise = null;
    throw error;
  }
}

export default connectDB; 