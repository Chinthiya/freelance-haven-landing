
export const contractSchema = {
  _id: "ObjectId",
  jobId: "ObjectId",
  clientId: "ObjectId",
  freelancerId: "ObjectId",
  terms: "String",
  startDate: "Date",
  endDate: "Date",
  paymentTerms: {
    paymentType: "String",
    amount: "Number",
    currency: "String",
    milestones: [
      {
        description: "String",
        amount: "Number",
        dueDate: "Date",
        status: "String"
      }
    ]
  },
  status: "String",
  createdAt: "Date",
  updatedAt: "Date"
};
