import mongoose, { Schema, model, models } from "mongoose";

const ImageSubSchema = new Schema(
  { url: String, publicId: String, originalName: String },
  { _id: false }
);

const NurseApplicationSchema = new Schema(
  {
    applicationId: { type: String, required: true, unique: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },

    // Step 1
    mobileNumber: String,
    email: String,

    // Step 2
    fullName: String,
    gender: String,
    dob: String,
    profilePhoto: ImageSubSchema,
    aadhaarNumber: String,
    panNumber: String,
    permanentAddress: String,
    currentAddress: String,
    city: String,
    pinCode: String,
    emergencyContactName: String,
    emergencyContactNumber: String,

    // Step 3
    qualification: String,
    registrationNumber: String,
    stateNursingCouncil: String,
    registrationExpiryDate: String,
    yearsOfExperience: String,
    employmentStatus: String,
    currentEmployer: String,
    previousEmployers: String,

    // Step 4-7
    skills: [String],
    languages: [String],
    otherLanguage: String,
    serviceAreas: [String],
    workingDays: [String],
    workingHours: [String],
    shiftPreference: String,
    emergencyCalls: String,

    // Step 8
    rateHomeVisit: String,
    rate12Hours: String,
    rate24Hours: String,
    rateMonthly: String,
    bankAccountName: String,
    bankAccountNumber: String,
    bankIfsc: String,
    upiId: String,

    // Step 9  uploaded documents (Cloudinary)
    documents: {
      type: Map,
      of: ImageSubSchema,
      default: {},
    },

    // Step 10
    everTerminated: String,
    criminalCases: String,
    disciplinaryProceedings: String,
    documentsGenuine: String,
    authorizeBackgroundCheck: Boolean,

    // Step 11
    agreeConfidentiality: Boolean,
    agreeSOPs: Boolean,
    agreePaymentTerms: Boolean,
    agreeWearId: Boolean,
    agreeNoSoliciting: Boolean,
    signatureName: String,

    // Admin / credentialing
    stage: {
      type: String,
      enum: [
        "submitted",
        "document-verification",
        "interview",
        "clinical-assessment",
        "background-verification",
        "induction-training",
        "activated",
      ],
      default: "submitted",
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "needs-more-information"],
      default: "pending",
    },
    reviewerNotes: String,
  },
  { timestamps: true }
);

export const NurseApplication =
  models.NurseApplication || model("NurseApplication", NurseApplicationSchema);

export type NurseApplicationDoc = mongoose.InferSchemaType<typeof NurseApplicationSchema>;
