export interface ExistingFile {
  url: string;
  publicId: string;
  originalName: string;
}

export const HOSPITAL_TYPES = [
  "Multi-Speciality Hospital",
  "Super-Speciality Hospital",
  "General Hospital",
  "Nursing Home",
  "Maternity Home",
  "Eye Hospital",
  "Orthopedic Hospital",
  "Cardiac Hospital",
  "Cancer Hospital",
  "Ayurvedic Hospital",
  "Dental Hospital",
  "Other",
] as const;

export const OWNERSHIP_TYPES = [
  "Private",
  "Public / Government",
  "Trust / NGO",
  "Corporate",
  "Partnership",
  "Other",
] as const;

export const EMERGENCY_SERVICE_OPTIONS = ["24×7", "12 Hours", "Not Available"] as const;

export const AMBULANCE_OPTIONS = ["Available (24×7)", "Available (Limited)", "Not Available"] as const;

export const INFRASTRUCTURE_OPTIONS = [
  "MRI",
  "CT Scan",
  "X-Ray",
  "Ultrasound",
  "Cath Lab",
  "Dialysis",
  "Laboratory",
  "Blood Bank",
  "Pharmacy",
  "Physiotherapy",
  "Telemedicine",
  "Radiology",
] as const;

export const SPECIALITY_OPTIONS = [
  "General Surgery",
  "Orthopaedics",
  "Urology",
  "ENT",
  "Gynaecology",
  "Cardiology",
  "Neurology",
  "Ophthalmology",
  "Dermatology",
  "Endocrinology",
  "Gastroenterology",
  "Pulmonology",
  "Nephrology",
  "Oncology",
  "Psychiatry",
  "Physiotherapy",
  "Maternity",
  "Pediatrics",
] as const;

export const ACCREDITATION_OPTIONS = [
  "NABH Accredited",
  "NABL Accredited",
  "JCI Accredited",
  "ISO Certified",
  "State Govt. Approved",
  "Other",
] as const;

export const PARTNERSHIP_MODELS = [
  "Fixed Commission per Referral",
  "Percentage of Bill Value",
  "Package Rate per Surgery",
  "Custom Agreement",
] as const;

export const INSURANCE_OPTIONS = [
  "Star Health",
  "Niva Bupa",
  "ICICI Lombard",
  "HDFC ERGO",
  "Care Health",
  "Aditya Birla",
  "ACKO",
  "Tata AIG",
  "Government Schemes",
  "Other",
] as const;

export interface HospitalRegistrationData {
  // Step 1: Hospital Info
  hospitalName: string;
  registrationNumber: string;
  hospitalType: string;
  ownershipType: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  mapsUrl: string;
  contactName: string;
  contactDesignation: string;
  contactEmail: string;
  contactPhone: string;

  // Step 2: Infrastructure
  totalBeds: string;
  icuBeds: string;
  nicuPicuBeds: string;
  ventilators: string;
  operationTheatres: string;
  emergencyServices: string;
  ambulanceServices: string;
  infrastructure: string[];

  // Step 3: Services & Doctors
  specialities: string[];
  consultantCount: string;
  doctorList: string;
  surgeriesPerformed: string;
  accreditations: string[];

  // Step 4: Pricing & Documents
  partnershipModel: string;
  surgeryCostMin: string;
  surgeryCostMax: string;
  insuranceEmpanelment: string[];
  documents: File[];
  existingDocuments: ExistingFile[];
  additionalNotes: string;
  agreeTerms: boolean;
}

export const initialHospitalRegistrationData: HospitalRegistrationData = {
  hospitalName: "",
  registrationNumber: "",
  hospitalType: "",
  ownershipType: "",
  address: "",
  city: "",
  state: "",
  pinCode: "",
  mapsUrl: "",
  contactName: "",
  contactDesignation: "",
  contactEmail: "",
  contactPhone: "",

  totalBeds: "",
  icuBeds: "",
  nicuPicuBeds: "",
  ventilators: "",
  operationTheatres: "",
  emergencyServices: "",
  ambulanceServices: "",
  infrastructure: [],

  specialities: [],
  consultantCount: "",
  doctorList: "",
  surgeriesPerformed: "",
  accreditations: [],

  partnershipModel: "",
  surgeryCostMin: "",
  surgeryCostMax: "",
  insuranceEmpanelment: [],
  documents: [],
  existingDocuments: [],
  additionalNotes: "",
  agreeTerms: false,
};

export const STEP_TITLES = [
  "Hospital Info",
  "Infrastructure",
  "Services & Doctors",
  "Pricing & Documents",
] as const;

export const TOTAL_STEPS = STEP_TITLES.length;
