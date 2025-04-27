
export const conversationSchema = {
  _id: "ObjectId",
  participants: ["ObjectId"],
  jobId: "ObjectId",
  lastMessageId: "ObjectId",
  lastMessageAt: "Date",
  createdAt: "Date"
};
