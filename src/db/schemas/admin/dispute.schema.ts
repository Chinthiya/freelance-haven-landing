
export const disputeSchema = {
  _id: "ObjectId",
  contractId: "ObjectId",
  reporterId: "ObjectId",
  reason: "String",
  description: "String",
  status: "String",
  resolution: "String",
  adminId: "ObjectId",
  createdAt: "Date",
  resolvedAt: "Date"
};
