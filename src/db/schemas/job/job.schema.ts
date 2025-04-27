
export const jobSchema = {
  _id: "ObjectId",
  clientId: "ObjectId",
  title: "String",
  description: "String",
  categoryId: "ObjectId",
  tags: ["String"],
  budget: {
    type: "String",
    minAmount: "Number",
    maxAmount: "Number",
    currency: "String"
  },
  requiredSkills: ["String"],
  experienceLevel: "String",
  estimatedDuration: {
    value: "Number",
    unit: "String"
  },
  deadline: "Date",
  attachments: ["String"],
  status: "String",
  visibility: "String",
  location: {
    type: "String",
    country: "String",
    city: "String"
  },
  createdAt: "Date",
  updatedAt: "Date"
};
