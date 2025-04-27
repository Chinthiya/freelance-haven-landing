
export const freelancerProfileSchema = {
  _id: "ObjectId",
  userId: "ObjectId",
  title: "String",
  bio: "String",
  skills: ["String"],
  hourlyRate: "Number",
  experience: [
    {
      title: "String",
      company: "String",
      startDate: "Date",
      endDate: "Date",
      description: "String"
    }
  ],
  education: [
    {
      institution: "String",
      degree: "String",
      fieldOfStudy: "String",
      startDate: "Date",
      endDate: "Date"
    }
  ],
  portfolio: [
    {
      title: "String",
      description: "String",
      imageUrl: "String",
      projectUrl: "String",
      createdAt: "Date"
    }
  ],
  languages: [
    {
      language: "String",
      proficiency: "String"
    }
  ],
  averageRating: "Number",
  totalReviews: "Number",
  completedJobs: "Number",
  createdAt: "Date",
  updatedAt: "Date"
};
