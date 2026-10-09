import { Schema, model, models, Types } from "mongoose";

export interface IPhysioApplication {
  _id?: Types.ObjectId;
  applicationId: string;
  userId: Types.ObjectId;
  email: string;

  // Step 1
  mobileNumber?: string;

  // Step 2
  fullName?: string;
  gender?: string;
  dob?: string;
  profilePhoto?: { url: string; publicId: string; originalName: string } | null;
  aadhaarNumber?: string;
  panNumber?: string;
  permanentAddress?: string;
  currentAddress?: string;
  sameAsPermanent?: boolean;
  city?: string;
  pinCode?: string;
  area?: string;
  emergencyContactName?: string;
  emergencyContactNumber?: string;

  // Step 3
  qualification?: string;
  isStudent?: boolean;
  registrationNumber?: string;
  statePhysioCouncil?: string;
  registrationExpiryDate?: string;
  yearsOfExperience?: string;
  employmentStatus?: string;
  currentClinic?: string;
  previousClinics?: string;

  // Step 4
  specializations?: string[];

  // Step 5
  languages?: string[];
  otherLanguage?: string;

  // Step 6
  serviceAreas?: string[];

  // Step 7
  workingDays?: string[];
  workingHours?: string[];
  sessionType?: string;
  emergencyCalls?: string;

  // Step 8
  feeHomeVisit?: string;
  fee45Min?: string;
  fee60Min?: string;
  feeMonthly?: string;
  bankAccountName?: string;
  bankAccountNumber?: string;
  bankIfsc?: string;
  upiId?: string;

  // Step 9
  documents?: Record<string, { url: string; publicId: string; originalName: string }>;

  // Step 10
  everTerminated?: string;
  criminalCases?: string;
  disciplinaryProceedings?: string;
  documentsGenuine?: string;
  authorizeBackgroundCheck?: boolean;

  // Step 11
  agreeConfidentiality?: boolean;
  agreeSOPs?: boolean;
  agreePaymentTerms?: boolean;
  agreeWearId?: boolean;
  agreeNoSoliciting?: boolean;
  signatureName?: string;

  // Review
  status?: "pending" | "approved" | "rejected" | "needs-more-information";
  stage?: string;
  reviewerNotes?: string;

  createdAt?: Date;
  updatedAt?: Date;
}

const ImageInfoSchema = new Schema(
  {
    url: { type: String, required: true },
    publicId: { type: String, required: true },
    originalName: { type: String, required: true },
  },
  { _id: false }
);

const PhysioApplicationSchema = new Schema<IPhysioApplication>(
  {
    applicationId: { type: String, required: true, unique: true, index: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    email: { type: String },

    mobileNumber: String,

    fullName: String,
    gender: String,
    dob: String,
    profilePhoto: { type: ImageInfoSchema, default: null },
    aadhaarNumber: String,
    panNumber: String,
    permanentAddress: String,
    currentAddress: String,
    sameAsPermanent: { type: Boolean, default: false },
    city: String,
    pinCode: String,
    area: String,
    emergencyContactName: String,
    emergencyContactNumber: String,

    qualification: String,
    isStudent: { type: Boolean, default: false },
    registrationNumber: String,
    statePhysioCouncil: String,
    registrationExpiryDate: String,
    yearsOfExperience: String,
    employmentStatus: String,
    currentClinic: String,
    previousClinics: String,

    specializations: { type: [String], default: [] },

    languages: { type: [String], default: [] },
    otherLanguage: String,

    serviceAreas: { type: [String], default: [] },

    workingDays: { type: [String], default: [] },
    workingHours: { type: [String], default: [] },
    sessionType: String,
    emergencyCalls: String,

    feeHomeVisit: String,
    fee45Min: String,
    fee60Min: String,
    feeMonthly: String,
    bankAccountName: String,
    bankAccountNumber: String,
    bankIfsc: String,
    upiId: String,

    documents: { type: Schema.Types.Mixed, default: {} },

    everTerminated: String,
    criminalCases: String,
    disciplinaryProceedings: String,
    documentsGenuine: String,
    authorizeBackgroundCheck: { type: Boolean, default: false },

    agreeConfidentiality: { type: Boolean, default: false },
    agreeSOPs: { type: Boolean, default: false },
    agreePaymentTerms: { type: Boolean, default: false },
    agreeWearId: { type: Boolean, default: false },
    agreeNoSoliciting: { type: Boolean, default: false },
    signatureName: String,

    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "needs-more-information"],
      default: "pending",
    },
    stage: { type: String, default: "submitted" },
    reviewerNotes: String,
  },
  { timestamps: true }
);

PhysioApplicationSchema.index({ status: 1 });
PhysioApplicationSchema.index({ isStudent: 1 });
PhysioApplicationSchema.index({ createdAt: -1 });

export const PhysioApplication =
  models.PhysioApplication ||
  model<IPhysioApplication>("PhysioApplication", PhysioApplicationSchema);