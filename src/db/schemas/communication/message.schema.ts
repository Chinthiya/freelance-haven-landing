
export const messageSchema = {
  _id: "ObjectId",
  conversationId: "ObjectId",
  senderId: "ObjectId",
  content: "String", 
  attachments: ["String"],
  isRead: "Boolean",
  readAt: "Date",
  createdAt: "Date"
};
