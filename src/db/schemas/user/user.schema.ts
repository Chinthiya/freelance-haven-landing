
// User schema definition
export const userSchema = {
  _id: "ObjectId",
  email: "String",
  password: "String",
  firstName: "String",
  lastName: "String", 
  userType: "String",
  createdAt: "Date",
  lastLogin: "Date",
  isVerified: "Boolean",
  profilePicture: "String",
  savedJobs: ["ObjectId"],
  notifications: [
    {
      _id: "ObjectId",
      message: "String",
      type: "String",
      isRead: "Boolean",
      createdAt: "Date",
      relatedId: "ObjectId"
    }
  ]
};
