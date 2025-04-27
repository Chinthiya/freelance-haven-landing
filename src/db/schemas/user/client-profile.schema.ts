
export const clientProfileSchema = {
  _id: "ObjectId",
  userId: "ObjectId",
  companyName: "String",
  industry: "String",
  description: "String",
  website: "String",
  location: {
    country: "String",
    city: "String"
  },
  jobsPosted: "Number",
  createdAt: "Date",
  updatedAt: "Date"
};
