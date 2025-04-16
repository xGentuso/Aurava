import mongoose from 'mongoose';

const WaitlistSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  interests: [{
    type: String,
    enum: ['Health Tracking', 'Predictive Analytics', 'Environmental Monitoring', 'Wellness Planning'],
  }],
  referralSource: {
    type: String,
    enum: ['Social Media', 'Search Engine', 'Word of Mouth', 'Other'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Invited'],
    default: 'Pending',
  },
  notificationPreferences: {
    email: {
      type: Boolean,
      default: true,
    },
    updates: {
      type: Boolean,
      default: true,
    },
  },
});

// Add indexes for better query performance
WaitlistSchema.index({ email: 1 }, { unique: true });
WaitlistSchema.index({ status: 1 });
WaitlistSchema.index({ createdAt: -1 });

export default mongoose.models.Waitlist || mongoose.model('Waitlist', WaitlistSchema); 