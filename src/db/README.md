
# MongoDB Database Schema for Freelancing Web App

This folder contains the database schema design for our freelancing web application using MongoDB.

## Implementation Notes

To implement this database design, you need to:

1. Set up a MongoDB database (either locally or using MongoDB Atlas)
2. Connect your application to MongoDB using a driver or ODM (Object Document Mapper) like Mongoose
3. Define the schemas and models in your application based on the design in `mongodb-schema.js`

## Implementing with Mongoose

Here's how you would implement these schemas using Mongoose:

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Example implementation for the Users schema
const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userType: { 
    type: String, 
    enum: ['freelancer', 'client', 'admin'], 
    required: true 
  },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
  isVerified: { type: Boolean, default: false },
  profilePicture: { type: String },
  savedJobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }],
  notifications: [{
    message: String,
    type: String,
    isRead: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    relatedId: Schema.Types.ObjectId
  }]
});

const User = mongoose.model('User', UserSchema);
```

## Connection to Frontend

Since this is a frontend React application, you will need to:

1. Create a backend service to interface with MongoDB (using Node.js/Express)
2. Create API endpoints for your frontend to communicate with
3. Use a library like Axios or fetch in your React app to make requests to your API

## Security Considerations

When implementing this database:

1. Always hash passwords before storing them
2. Implement proper authentication and authorization
3. Use MongoDB's security features like field-level encryption for sensitive data
4. Set up proper indexes for frequently queried fields to improve performance
5. Use MongoDB Atlas's security features if using their cloud service

## Database Relationships

The schema design implements relationships through references to document IDs in other collections. For example:

- A Job references a Client (User) through `clientId`
- A JobApplication references a Job through `jobId` and a Freelancer (User) through `freelancerId`
- Messages are organized in Conversations that reference participants (Users)

These relationships should be managed in your application logic when querying the database.
