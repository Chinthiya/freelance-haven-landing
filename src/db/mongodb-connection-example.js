
/**
 * Example of how to connect to MongoDB and implement the schemas
 * This is just for reference - in a real application, you would
 * implement this in a backend service
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Connection to MongoDB (would be in a .env file in production)
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/freelance_app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

// Example User Schema implementation
const UserSchema = new Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    lowercase: true
  },
  password: { 
    type: String, 
    required: true 
  },
  firstName: { 
    type: String, 
    required: true,
    trim: true
  },
  lastName: { 
    type: String, 
    required: true,
    trim: true
  },
  userType: { 
    type: String, 
    enum: ['freelancer', 'client', 'admin'], 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  lastLogin: { 
    type: Date 
  },
  isVerified: { 
    type: Boolean, 
    default: false 
  },
  profilePicture: { 
    type: String 
  },
  savedJobs: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Job' 
  }],
  notifications: [{
    message: String,
    type: String,
    isRead: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    relatedId: Schema.Types.ObjectId
  }]
});

// Example Job Schema implementation
const JobSchema = new Schema({
  clientId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  title: { 
    type: String, 
    required: true,
    trim: true
  },
  description: { 
    type: String, 
    required: true 
  },
  categoryId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Category',
    required: true
  },
  tags: [{ 
    type: String,
    trim: true
  }],
  budget: {
    type: { 
      type: String, 
      enum: ['Fixed', 'Hourly'],
      required: true
    },
    minAmount: { 
      type: Number, 
      required: true 
    },
    maxAmount: { 
      type: Number, 
      required: true 
    },
    currency: { 
      type: String, 
      default: 'USD' 
    }
  },
  requiredSkills: [{ 
    type: String,
    trim: true
  }],
  experienceLevel: { 
    type: String, 
    enum: ['Entry', 'Intermediate', 'Expert'] 
  },
  estimatedDuration: {
    value: { 
      type: Number 
    },
    unit: { 
      type: String, 
      enum: ['Hours', 'Days', 'Weeks', 'Months'] 
    }
  },
  deadline: { 
    type: Date 
  },
  attachments: [{ 
    type: String 
  }],
  status: { 
    type: String, 
    enum: ['Open', 'In Progress', 'Completed', 'Cancelled'],
    default: 'Open'
  },
  visibility: { 
    type: String, 
    enum: ['Public', 'Invitation Only', 'Private'],
    default: 'Public'
  },
  location: {
    type: { 
      type: String, 
      enum: ['Remote', 'On-site', 'Hybrid'],
      default: 'Remote'
    },
    country: { 
      type: String 
    },
    city: { 
      type: String 
    }
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Pre-save middleware to update the 'updatedAt' field
JobSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Create models from schemas
const User = mongoose.model('User', UserSchema);
const Job = mongoose.model('Job', JobSchema);

// Example API endpoints (would be implemented in a backend service)
// GET all jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('clientId', 'firstName lastName profilePicture');
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// POST new job
const createJob = async (req, res) => {
  try {
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  connectDB,
  User,
  Job,
  getAllJobs,
  createJob
};
