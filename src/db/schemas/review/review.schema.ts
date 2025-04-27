
export const reviewSchema = {
  _id: "ObjectId",
  jobId: "ObjectId",
  reviewerId: "ObjectId",
  receiverId: "ObjectId",
  rating: "Number",
  content: "String",
  createdAt: "Date",
  updatedAt: "Date"
};
