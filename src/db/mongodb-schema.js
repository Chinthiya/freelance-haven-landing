
/**
 * MongoDB Schema Design for Freelancing Web App
 * 
 * This file contains the schema design for the MongoDB database
 * It's meant as a reference for the database structure
 */

// 1. Users Collection
const usersSchema = {
  _id: "ObjectId", // MongoDB auto-generated ID
  email: "String", // User's email (unique)
  password: "String", // Hashed password
  firstName: "String",
  lastName: "String", 
  userType: "String", // "freelancer", "client", or "admin"
  createdAt: "Date",
  lastLogin: "Date",
  isVerified: "Boolean",
  profilePicture: "String", // URL to image
  savedJobs: ["ObjectId"], // References to Job IDs
  notifications: [
    {
      _id: "ObjectId",
      message: "String",
      type: "String", // "message", "job", "payment", etc.
      isRead: "Boolean",
      createdAt: "Date",
      relatedId: "ObjectId" // ID of related job, message, etc.
    }
  ]
};

// 2. Freelancer Profiles Collection (extends Users)
const freelancerProfilesSchema = {
  _id: "ObjectId", // Same as user ID
  userId: "ObjectId", // Reference to Users collection
  title: "String", // Professional title
  bio: "String", // Detailed description
  skills: ["String"], // Array of skills
  hourlyRate: "Number",
  experience: [
    {
      title: "String",
      company: "String",
      startDate: "Date",
      endDate: "Date", // Null if current
      description: "String"
    }
  ],
  education: [
    {
      institution: "String",
      degree: "String",
      fieldOfStudy: "String",
      startDate: "Date",
      endDate: "Date"
    }
  ],
  portfolio: [
    {
      title: "String",
      description: "String",
      imageUrl: "String",
      projectUrl: "String", // Optional link to live project
      createdAt: "Date"
    }
  ],
  languages: [
    {
      language: "String",
      proficiency: "String" // "Basic", "Conversational", "Fluent", "Native"
    }
  ],
  averageRating: "Number", // Calculated field
  totalReviews: "Number", // Calculated field
  completedJobs: "Number", // Calculated field
  createdAt: "Date",
  updatedAt: "Date"
};

// 3. Client Profiles Collection (extends Users)
const clientProfilesSchema = {
  _id: "ObjectId", // Same as user ID
  userId: "ObjectId", // Reference to Users collection
  companyName: "String", // Optional if representing a company
  industry: "String",
  description: "String",
  website: "String",
  location: {
    country: "String",
    city: "String"
  },
  jobsPosted: "Number", // Calculated field
  createdAt: "Date",
  updatedAt: "Date"
};

// 4. Jobs Collection
const jobsSchema = {
  _id: "ObjectId",
  clientId: "ObjectId", // Reference to Users collection (client)
  title: "String",
  description: "String",
  categoryId: "ObjectId", // Reference to Categories collection
  tags: ["String"], // Array of tags
  budget: {
    type: "String", // "Fixed" or "Hourly"
    minAmount: "Number",
    maxAmount: "Number",
    currency: "String" // USD, EUR, etc.
  },
  requiredSkills: ["String"],
  experienceLevel: "String", // "Entry", "Intermediate", "Expert"
  estimatedDuration: {
    value: "Number",
    unit: "String" // "Hours", "Days", "Weeks", "Months"
  },
  deadline: "Date",
  attachments: ["String"], // URLs to attachments
  status: "String", // "Open", "In Progress", "Completed", "Cancelled"
  visibility: "String", // "Public", "Invitation Only", "Private"
  location: {
    type: "String", // "Remote", "On-site", "Hybrid"
    country: "String", // Required if On-site or Hybrid
    city: "String" // Required if On-site or Hybrid
  },
  createdAt: "Date",
  updatedAt: "Date"
};

// 5. Job Applications Collection
const jobApplicationsSchema = {
  _id: "ObjectId",
  jobId: "ObjectId", // Reference to Jobs collection
  freelancerId: "ObjectId", // Reference to Users collection (freelancer)
  coverLetter: "String",
  proposedBudget: {
    amount: "Number",
    currency: "String" // USD, EUR, etc.
  },
  estimatedDuration: {
    value: "Number",
    unit: "String" // "Hours", "Days", "Weeks", "Months"
  },
  attachments: ["String"], // URLs to attachments
  status: "String", // "Pending", "Accepted", "Rejected", "Withdrawn"
  submissionDate: "Date",
  updatedAt: "Date"
};

// 6. Categories Collection
const categoriesSchema = {
  _id: "ObjectId",
  name: "String", // "Design", "Development", "Writing", etc.
  description: "String",
  iconUrl: "String", // Optional URL to category icon
  parentId: "ObjectId", // Self-reference for subcategories (null for top-level)
  createdAt: "Date",
  updatedAt: "Date"
};

// 7. Contracts Collection
const contractsSchema = {
  _id: "ObjectId",
  jobId: "ObjectId", // Reference to Jobs collection
  clientId: "ObjectId", // Reference to Users collection (client)
  freelancerId: "ObjectId", // Reference to Users collection (freelancer)
  terms: "String", // Contract terms
  startDate: "Date",
  endDate: "Date", // Null if ongoing
  paymentTerms: {
    paymentType: "String", // "Fixed", "Hourly", "Milestone"
    amount: "Number",
    currency: "String", // USD, EUR, etc.
    milestones: [ // If payment type is "Milestone"
      {
        description: "String",
        amount: "Number",
        dueDate: "Date",
        status: "String" // "Pending", "Released", "Disputed"
      }
    ]
  },
  status: "String", // "Draft", "Active", "Completed", "Terminated", "Disputed"
  createdAt: "Date",
  updatedAt: "Date"
};

// 8. Messages Collection
const messagesSchema = {
  _id: "ObjectId",
  conversationId: "ObjectId", // Reference to Conversations collection
  senderId: "ObjectId", // Reference to Users collection
  content: "String", 
  attachments: ["String"], // URLs to attachments
  isRead: "Boolean",
  readAt: "Date",
  createdAt: "Date"
};

// 9. Conversations Collection
const conversationsSchema = {
  _id: "ObjectId",
  participants: ["ObjectId"], // Array of user IDs
  jobId: "ObjectId", // Optional reference to Jobs collection
  lastMessageId: "ObjectId", // Reference to Messages collection
  lastMessageAt: "Date",
  createdAt: "Date"
};

// 10. Reviews Collection
const reviewsSchema = {
  _id: "ObjectId",
  jobId: "ObjectId", // Reference to Jobs collection
  reviewerId: "ObjectId", // Reference to Users collection (who's giving the review)
  receiverId: "ObjectId", // Reference to Users collection (who's receiving the review)
  rating: "Number", // 1-5
  content: "String",
  createdAt: "Date",
  updatedAt: "Date"
};

// 11. Payments Collection
const paymentsSchema = {
  _id: "ObjectId",
  contractId: "ObjectId", // Reference to Contracts collection
  milestoneId: "ObjectId", // Optional reference to milestone in the contract
  amount: "Number",
  currency: "String", // USD, EUR, etc.
  status: "String", // "Pending", "Completed", "Refunded", "Failed"
  paymentMethod: "String", // "Credit Card", "PayPal", "Bank Transfer", etc.
  transactionId: "String", // ID from payment processor
  createdAt: "Date",
  completedAt: "Date"
};

// 12. Admin Actions Collection
const adminActionsSchema = {
  _id: "ObjectId",
  adminId: "ObjectId", // Reference to Users collection (admin)
  actionType: "String", // "Job Approval", "Payment Release", "User Suspension", etc.
  relatedId: "ObjectId", // ID of related job, user, payment, etc.
  description: "String",
  createdAt: "Date"
};

// 13. Disputes Collection
const disputesSchema = {
  _id: "ObjectId",
  contractId: "ObjectId", // Reference to Contracts collection
  reporterId: "ObjectId", // Reference to Users collection (who reported)
  reason: "String",
  description: "String",
  status: "String", // "Open", "Under Review", "Resolved", "Closed"
  resolution: "String",
  adminId: "ObjectId", // Reference to Users collection (admin who handled the dispute)
  createdAt: "Date",
  resolvedAt: "Date"
};

// Export the schemas for documentation purposes
module.exports = {
  usersSchema,
  freelancerProfilesSchema,
  clientProfilesSchema,
  jobsSchema,
  jobApplicationsSchema,
  categoriesSchema,
  contractsSchema,
  messagesSchema,
  conversationsSchema,
  reviewsSchema,
  paymentsSchema,
  adminActionsSchema,
  disputesSchema
};
