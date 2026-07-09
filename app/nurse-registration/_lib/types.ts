export type ExperienceBand =
  | "fresher"
  | "1-3"
  | "3-5"
  | "5-10"
  | "10+";

export type EmploymentStatus =
  | "full-time"
  | "part-time"
  | "freelance"
  | "not-working";

export type ShiftPreference = "home-visit" | "12-hours" | "24-hours" | "live-in";

export const QUALIFICATIONS = [
  "ANM",
  "GNM",
  "B.Sc Nursing",
  "M.Sc Nursing",
  "Post Basic B.Sc",
  "Other",
] as const;

export const SKILL_GROUPS = {
  "Critical Care": ["ICU Nurse", "Ventilator Care", "Tracheostomy Care", "Oxygen Therapy"],
  "General Nursing": [
    "IV Cannulation",
    "IV Infusion",
    "Injection",
    "BP Monitoring",
    "Sugar Monitoring",
    "ECG",
    "Catheter Care",
    "NG Tube Feeding",
    "PEG Feeding",
    "Wound Dressing",
    "Stoma Care",
    "Colostomy Care",
    "Bedsore Care",
    "Post Surgical Care",
  ],
  "Special Care": [
    "Elder Care",
    "Stroke Care",
    "Dementia Care",
    "Parkinson's Care",
    "Cancer Care",
    "Palliative Care",
    "Mother & Baby Care",
    "Pediatric Nursing",
  ],
} as const;

export const LANGUAGES = [
  "English",
  "Kannada",
  "Hindi",
  "Tamil",
  "Telugu",
  "Malayalam",
  "Bengali",
  "Urdu",
] as const;

export const SERVICE_AREAS = [
  "Whitefield",
  "Marathahalli",
  "HSR Layout",
  "Koramangala",
  "Indiranagar",
  "Electronic City",
  "Yelahanka",
  "JP Nagar",
  "Jayanagar",
  "Hebbal",
  "RR Nagar",
  "Sarjapur Road",
] as const;

export const WORKING_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export const WORKING_HOURS = ["Morning", "Afternoon", "Evening", "Night"] as const;

export const DOCUMENT_TYPES = [
  { key: "aadhaar", label: "Aadhaar", required: true },
  { key: "pan", label: "PAN", required: true },
  { key: "nursingDegree", label: "Nursing Degree", required: true },
  { key: "registrationCertificate", label: "Registration Certificate", required: true },
  { key: "experienceCertificate", label: "Experience Certificate", required: false },
  { key: "policeVerification", label: "Police Verification", required: false, note: "Optional initially, required before activation" },
  { key: "vaccinationCertificate", label: "Vaccination Certificate", required: false, note: "If applicable" },
  { key: "cancelledCheque", label: "Cancelled Cheque / Bank Passbook", required: true },
] as const;

export type DocumentKey = (typeof DOCUMENT_TYPES)[number]["key"];

export interface NurseRegistrationData {
  // Step 1
  mobileNumber: string;
  otpVerified: boolean;
  email: string;

  // Step 2
  fullName: string;
  gender: "" | "female" | "male" | "other";
  dob: string;
  profilePhotoName: string;
  aadhaarNumber: string;
  panNumber: string;
  permanentAddress: string;
  currentAddress: string;
  sameAsPermanent: boolean;
  city: string;
  pinCode: string;
  emergencyContactName: string;
  emergencyContactNumber: string;

  // Step 3
  qualification: string;
  registrationNumber: string;
  stateNursingCouncil: string;
  registrationExpiryDate: string;
  yearsOfExperience: ExperienceBand | "";
  employmentStatus: EmploymentStatus | "";
  currentEmployer: string;
  previousEmployers: string;

  // Step 4
  skills: string[];

  // Step 5
  languages: string[];
  otherLanguage: string;

  // Step 6
  serviceAreas: string[];

  // Step 7
  workingDays: string[];
  workingHours: string[];
  shiftPreference: ShiftPreference | "";
  emergencyCalls: "" | "yes" | "no";

  // Step 8
  rateHomeVisit: string;
  rate12Hours: string;
  rate24Hours: string;
  rateMonthly: string;
  bankAccountName: string;
  bankAccountNumber: string;
  bankIfsc: string;
  upiId: string;

  // Step 9
  documents: Partial<Record<DocumentKey, string>>;

  // Step 10
  everTerminated: "" | "yes" | "no";
  criminalCases: "" | "yes" | "no";
  disciplinaryProceedings: "" | "yes" | "no";
  documentsGenuine: "" | "yes" | "no";
  authorizeBackgroundCheck: boolean;

  // Step 11
  agreeConfidentiality: boolean;
  agreeSOPs: boolean;
  agreePaymentTerms: boolean;
  agreeWearId: boolean;
  agreeNoSoliciting: boolean;
  signatureName: string;
}

export const initialNurseRegistrationData: NurseRegistrationData = {
  mobileNumber: "",
  otpVerified: false,
  email: "",

  fullName: "",
  gender: "",
  dob: "",
  profilePhotoName: "",
  aadhaarNumber: "",
  panNumber: "",
  permanentAddress: "",
  currentAddress: "",
  sameAsPermanent: false,
  city: "",
  pinCode: "",
  emergencyContactName: "",
  emergencyContactNumber: "",

  qualification: "",
  registrationNumber: "",
  stateNursingCouncil: "",
  registrationExpiryDate: "",
  yearsOfExperience: "",
  employmentStatus: "",
  currentEmployer: "",
  previousEmployers: "",

  skills: [],

  languages: [],
  otherLanguage: "",

  serviceAreas: [],

  workingDays: [],
  workingHours: [],
  shiftPreference: "",
  emergencyCalls: "",

  rateHomeVisit: "",
  rate12Hours: "",
  rate24Hours: "",
  rateMonthly: "",
  bankAccountName: "",
  bankAccountNumber: "",
  bankIfsc: "",
  upiId: "",

  documents: {},

  everTerminated: "",
  criminalCases: "",
  disciplinaryProceedings: "",
  documentsGenuine: "",
  authorizeBackgroundCheck: false,

  agreeConfidentiality: false,
  agreeSOPs: false,
  agreePaymentTerms: false,
  agreeWearId: false,
  agreeNoSoliciting: false,
  signatureName: "",
};

export const STEP_TITLES = [
  "Mobile Verification",
  "Personal Details",
  "Professional Details",
  "Skills",
  "Languages",
  "Service Areas",
  "Availability",
  "Salary & Bank Details",
  "Documents Upload",
  "Background Verification",
  "Agreement",
] as const;

export const TOTAL_STEPS = STEP_TITLES.length;
