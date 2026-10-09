export type ExperienceBand = "fresher" | "1-3" | "3-5" | "5-10" | "10+";

export type EmploymentStatus = "full-time" | "part-time" | "freelance" | "not-working";

export type SessionType = "home-visit" | "45-min" | "60-min" | "monthly-package";

export const PHYSIO_QUALIFICATIONS = [
  "BPT (Bachelor of Physiotherapy)",
  "MPT (Master of Physiotherapy)",
  "DPT (Doctor of Physiotherapy)",
  "Diploma in Physiotherapy",
  "Other",
] as const;

export const PHYSIO_SKILL_GROUPS = {
  "Orthopaedic Rehab": [
    "Post-Surgical Rehab",
    "Fracture Rehab",
    "Joint Replacement Rehab",
    "Sports Injury Rehab",
    "Back & Neck Pain",
    "Frozen Shoulder",
    "Knee Rehabilitation",
  ],
  "Neuro Rehab": [
    "Stroke Rehab",
    "Parkinson's Rehab",
    "Cerebral Palsy",
    "Bell's Palsy",
    "Spinal Cord Injury",
    "Balance & Gait Training",
  ],
  "Cardio-Respiratory": [
    "Chest Physiotherapy",
    "Post-COVID Rehab",
    "Cardiac Rehab",
    "Breathing Exercises",
  ],
  "Geriatric & Others": [
    "Elder Mobility Training",
    "Fall Prevention",
    "Home Exercise Program",
    "Pain Management (TENS, IFT)",
    "Postnatal Physiotherapy",
    "Pediatric Physiotherapy",
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

export const BANGALORE_PINCODES: { pinCode: string; area: string }[] = [
  { pinCode: "560001", area: "Bangalore GPO, MG Road, Cubbon Road" },
  { pinCode: "560002", area: "KR Market, Chamarajpet" },
  { pinCode: "560003", area: "Malleswaram" },
  { pinCode: "560004", area: "Basavanagudi" },
  { pinCode: "560005", area: "Frazer Town" },
  { pinCode: "560006", area: "Benson Town, Vasanth Nagar" },
  { pinCode: "560007", area: "Indiranagar (Old Airport Area)" },
  { pinCode: "560008", area: "HAL 2nd Stage" },
  { pinCode: "560009", area: "Gandhinagar" },
  { pinCode: "560010", area: "Rajajinagar" },
  { pinCode: "560011", area: "Jayanagar" },
  { pinCode: "560012", area: "IISc, Malleswaram West" },
  { pinCode: "560013", area: "Yeshwanthpur" },
  { pinCode: "560014", area: "Jalahalli" },
  { pinCode: "560015", area: "Jalahalli West" },
  { pinCode: "560016", area: "Dooravani Nagar, KR Puram" },
  { pinCode: "560017", area: "Domlur, Old Airport Road" },
  { pinCode: "560018", area: "Chamarajpet" },
  { pinCode: "560019", area: "Banashankari" },
  { pinCode: "560020", area: "Seshadripuram" },
  { pinCode: "560021", area: "Okalipuram" },
  { pinCode: "560022", area: "Yeshwanthpur Industrial Area" },
  { pinCode: "560023", area: "Magadi Road" },
  { pinCode: "560024", area: "RT Nagar" },
  { pinCode: "560025", area: "Richmond Town" },
  { pinCode: "560026", area: "Govindarajanagar" },
  { pinCode: "560027", area: "Wilson Garden" },
  { pinCode: "560028", area: "Basavanagudi South" },
  { pinCode: "560029", area: "BTM Layout" },
  { pinCode: "560030", area: "Adugodi" },
  { pinCode: "560032", area: "Hebbal" },
  { pinCode: "560033", area: "Maruthi Sevanagar" },
  { pinCode: "560034", area: "Koramangala" },
  { pinCode: "560035", area: "Carmelaram" },
  { pinCode: "560036", area: "Whitefield" },
  { pinCode: "560037", area: "Marathahalli" },
  { pinCode: "560038", area: "Indiranagar" },
  { pinCode: "560039", area: "Nayandahalli" },
  { pinCode: "560040", area: "Vijayanagar" },
  { pinCode: "560041", area: "Jayanagar 9th Block" },
  { pinCode: "560042", area: "Ulsoor" },
  { pinCode: "560043", area: "Kalyan Nagar" },
  { pinCode: "560045", area: "Nagawara" },
  { pinCode: "560046", area: "Cox Town" },
  { pinCode: "560047", area: "Ejipura" },
  { pinCode: "560048", area: "Mahadevapura" },
  { pinCode: "560049", area: "KR Puram" },
  { pinCode: "560050", area: "Banashankari 1st Stage" },
  { pinCode: "560051", area: "Austin Town" },
  { pinCode: "560052", area: "Palace Guttahalli" },
  { pinCode: "560053", area: "Chickpet" },
  { pinCode: "560054", area: "Mathikere" },
  { pinCode: "560055", area: "Malleswaram West" },
  { pinCode: "560056", area: "Kengeri" },
  { pinCode: "560057", area: "Peenya" },
  { pinCode: "560058", area: "Peenya Industrial Area" },
  { pinCode: "560059", area: "RR Nagar" },
  { pinCode: "560060", area: "Kengeri Satellite Town" },
  { pinCode: "560061", area: "Uttarahalli" },
  { pinCode: "560062", area: "JP Nagar" },
  { pinCode: "560063", area: "Yelahanka" },
  { pinCode: "560064", area: "Attur, Yelahanka New Town" },
  { pinCode: "560065", area: "Bagalur" },
  { pinCode: "560066", area: "Whitefield ITPL" },
  { pinCode: "560067", area: "Kadugodi" },
  { pinCode: "560068", area: "Bommanahalli" },
  { pinCode: "560070", area: "Banashankari 2nd Stage" },
  { pinCode: "560071", area: "Domlur" },
  { pinCode: "560072", area: "Nagarabhavi" },
  { pinCode: "560073", area: "Hegganahalli" },
  { pinCode: "560075", area: "New Thippasandra" },
  { pinCode: "560076", area: "Bannerghatta Road" },
  { pinCode: "560077", area: "Kothanur" },
  { pinCode: "560078", area: "JP Nagar 7th Phase" },
  { pinCode: "560079", area: "Basaveshwaranagar" },
  { pinCode: "560080", area: "Sadashivanagar" },
  { pinCode: "560083", area: "Bannerghatta" },
  { pinCode: "560084", area: "HBR Layout" },
  { pinCode: "560085", area: "Banashankari 3rd Stage" },
  { pinCode: "560086", area: "Mahalakshmi Layout" },
  { pinCode: "560087", area: "Varthur" },
  { pinCode: "560089", area: "Herohalli" },
  { pinCode: "560090", area: "Chikkabanavara" },
  { pinCode: "560091", area: "Vidyaranyapura" },
  { pinCode: "560092", area: "Sahakar Nagar" },
  { pinCode: "560093", area: "CV Raman Nagar" },
  { pinCode: "560094", area: "Sanjay Nagar" },
  { pinCode: "560095", area: "Koramangala Industrial Layout" },
  { pinCode: "560096", area: "Nagarabhavi 2nd Stage" },
  { pinCode: "560097", area: "Yelahanka Satellite Town" },
  { pinCode: "560098", area: "Rajarajeshwari Nagar" },
  { pinCode: "560099", area: "Electronic City" },
  { pinCode: "560100", area: "Electronic City Phase 1" },
  { pinCode: "560102", area: "HSR Layout" },
  { pinCode: "560103", area: "Bellandur" },
  { pinCode: "560104", area: "Bommasandra Industrial Area" },
];

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
  { key: "physioDegree", label: "Physiotherapy Degree", required: false },
  { key: "registrationCertificate", label: "Council Registration Certificate", required: false },
  { key: "experienceCertificate", label: "Experience Certificate", required: false },
  {
    key: "policeVerification",
    label: "Police Verification",
    required: false,
    note: "Optional initially, required before activation",
  },
  {
    key: "vaccinationCertificate",
    label: "Vaccination Certificate",
    required: false,
    note: "If applicable",
  },
  { key: "cancelledCheque", label: "Cancelled Cheque / Bank Passbook", required: false },
] as const;

export type DocumentKey = (typeof DOCUMENT_TYPES)[number]["key"];

export interface ExistingFile {
  url: string;
  publicId: string;
  originalName: string;
}

export interface PhysioRegistrationData {
  // Step 1
  mobileNumber: string;
  otpVerified: boolean;
  email: string;

  // Step 2
  fullName: string;
  gender: "" | "female" | "male" | "other";
  dob: string;
  profilePhoto: File | ExistingFile | null;
  aadhaarNumber: string;
  panNumber: string;
  permanentAddress: string;
  currentAddress: string;
  sameAsPermanent: boolean;
  city: string;
  pinCode: string;
  area: string;
  emergencyContactName: string;
  emergencyContactNumber: string;

  // Step 3
  qualification: string;
  isStudent?: boolean;
  registrationNumber: string;
  statePhysioCouncil: string;
  registrationExpiryDate: string;
  yearsOfExperience: ExperienceBand | "";
  employmentStatus: EmploymentStatus | "";
  currentClinic: string;
  previousClinics: string;

  // Step 4
  specializations: string[];

  // Step 5
  languages: string[];
  otherLanguage: string;

  // Step 6
  serviceAreas: string[];

  // Step 7
  workingDays: string[];
  workingHours: string[];
  sessionType: SessionType | "";
  emergencyCalls: "" | "yes" | "no";

  // Step 8
  feeHomeVisit: string;
  fee45Min: string;
  fee60Min: string;
  feeMonthly: string;
  bankAccountName: string;
  bankAccountNumber: string;
  bankIfsc: string;
  upiId: string;

  // Step 9
  documents: Partial<Record<DocumentKey, File | ExistingFile>>;

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

export const initialPhysioRegistrationData: PhysioRegistrationData = {
  mobileNumber: "",
  otpVerified: false,
  email: "",

  fullName: "",
  gender: "",
  dob: "",
  profilePhoto: null,
  aadhaarNumber: "",
  panNumber: "",
  permanentAddress: "",
  currentAddress: "",
  sameAsPermanent: false,
  city: "",
  pinCode: "",
  area: "",
  emergencyContactName: "",
  emergencyContactNumber: "",

  qualification: "",
  isStudent: false,
  registrationNumber: "",
  statePhysioCouncil: "",
  registrationExpiryDate: "",
  yearsOfExperience: "",
  employmentStatus: "",
  currentClinic: "",
  previousClinics: "",

  specializations: [],

  languages: [],
  otherLanguage: "",

  serviceAreas: [],

  workingDays: [],
  workingHours: [],
  sessionType: "",
  emergencyCalls: "",

  feeHomeVisit: "",
  fee45Min: "",
  fee60Min: "",
  feeMonthly: "",
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
  "Specializations",
  "Languages",
  "Service Areas",
  "Availability",
  "Fees & Bank Details",
  "Documents Upload",
  "Background Verification",
  "Agreement",
] as const;

export const TOTAL_STEPS = STEP_TITLES.length;