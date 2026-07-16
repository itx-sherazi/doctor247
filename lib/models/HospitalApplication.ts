import mongoose, { Schema, model, models } from "mongoose";

const FileSubSchema = new Schema(
  { url: String, publicId: String, originalName: String },
  { _id: false }
);

const HospitalApplicationSchema = new Schema(
  {
    applicationId: { type: String, required: true, unique: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },

    // Step 1: Hospital Info
    hospitalName: String,
    registrationNumber: String,
    hospitalType: String,
    ownershipType: String,
    address: String,
    city: String,
    state: String,
    pinCode: String,
    mapsUrl: String,
    contactName: String,
    contactDesignation: String,
    contactEmail: String,
    contactPhone: String,

    // Step 2: Infrastructure
    totalBeds: String,
    icuBeds: String,
    nicuPicuBeds: String,
    ventilators: String,
    operationTheatres: String,
    emergencyServices: String,
    ambulanceServices: String,
    infrastructure: [String],

    // Step 3: Services & Doctors
    specialities: [String],
    consultantCount: String,
    doctorList: String,
    surgeriesPerformed: String,
    accreditations: [String],

    // Step 4: Pricing & Documents
    partnershipModel: String,
    surgeryCostMin: String,
    surgeryCostMax: String,
    insuranceEmpanelment: [String],
    documents: [FileSubSchema],
    additionalNotes: String,
    agreeTerms: Boolean,

    // Admin / credentialing
    stage: {
      type: String,
      enum: ["submitted", "document-verification", "site-visit", "agreement-signing", "activated"],
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

export const HospitalApplication =
  models.HospitalApplication || model("HospitalApplication", HospitalApplicationSchema);

export type HospitalApplicationDoc = mongoose.InferSchemaType<typeof HospitalApplicationSchema>;
