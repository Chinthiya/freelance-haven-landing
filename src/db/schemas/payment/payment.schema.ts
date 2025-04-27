
export const paymentSchema = {
  _id: "ObjectId",
  contractId: "ObjectId",
  milestoneId: "ObjectId",
  amount: "Number",
  currency: "String",
  status: "String",
  paymentMethod: "String",
  transactionId: "String",
  createdAt: "Date",
  completedAt: "Date"
};
