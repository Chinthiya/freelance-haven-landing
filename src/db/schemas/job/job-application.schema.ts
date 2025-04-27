
export const jobApplicationSchema = {
  _id: "ObjectId",
  jobId: "ObjectId",
  freelancerId: "ObjectId",
  coverLetter: "String",
  proposedBudget: {
    amount: "Number",
    currency: "String"
  },
  estimatedDuration: {
    value: "Number",
    unit: "String"
  },
  attachments: ["String"],
  status: "String",
  submissionDate: "Date",
  updatedAt: "Date"
};
