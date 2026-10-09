"use client";

import { useState, useRef } from "react";
import {
  Camera,
  Check,
  CheckCircle2,
  ExternalLink,
  FileStack,
  Loader2,
  Plus,
  Save,
  Trash2,
  Upload,
  User,
  X,
} from "lucide-react";
import { QUALIFICATIONS, DOCUMENT_TYPES } from "@/app/nurse-registration/_lib/types";

interface ImageInfo {
  url: string;
  publicId: string;
  originalName: string;
}

interface NurseData {
  applicationId: string;
  fullName?: string;
  mobileNumber?: string;
  email?: string;
  gender?: string;
  dob?: string;
  city?: string;
  pinCode?: string;
  area?: string;
  permanentAddress?: string;
  currentAddress?: string;
  aadhaarNumber?: string;
  panNumber?: string;
  profilePhoto?: ImageInfo;
  qualification?: string;
  isStudent?: boolean;
  registrationNumber?: string;
  stateNursingCouncil?: string;
  registrationExpiryDate?: string;
  yearsOfExperience?: string;
  employmentStatus?: string;
  currentEmployer?: string;
  previousEmployers?: string;
  skills?: string[];
  languages?: string[];
  otherLanguage?: string;
  serviceAreas?: string[];
  rateHomeVisit?: string;
  rate12Hours?: string;
  rate24Hours?: string;
  rateMonthly?: string;
  bankAccountName?: string;
  bankAccountNumber?: string;
  bankIfsc?: string;
  upiId?: string;
  documents?: Record<string, ImageInfo>;
  stage?: string;
  status?: string;
  reviewerNotes?: string;
}

interface EditNurseModalProps {
  applicant: NurseData;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (updated: NurseData) => void;
}

export function EditNurseModal({ applicant, isOpen, onClose, onSuccess }: EditNurseModalProps) {
  const [activeTab, setActiveTab] = useState<"details" | "documents">("details");

  const [formData, setFormData] = useState<NurseData>({
    ...applicant,
    fullName: applicant.fullName || "",
    mobileNumber: applicant.mobileNumber || "",
    email: applicant.email || "",
    gender: applicant.gender || "",
    dob: applicant.dob || "",
    city: applicant.city || "",
    pinCode: applicant.pinCode || "",
    area: applicant.area || "",
    permanentAddress: applicant.permanentAddress || "",
    currentAddress: applicant.currentAddress || "",
    qualification: applicant.qualification || "",
    isStudent: applicant.isStudent ?? false,
    registrationNumber: applicant.registrationNumber || "",
    stateNursingCouncil: applicant.stateNursingCouncil || "",
    yearsOfExperience: applicant.yearsOfExperience || "",
    employmentStatus: applicant.employmentStatus || "",
    currentEmployer: applicant.currentEmployer || "",
    rateHomeVisit: applicant.rateHomeVisit || "",
    rate12Hours: applicant.rate12Hours || "",
    rate24Hours: applicant.rate24Hours || "",
    bankAccountName: applicant.bankAccountName || "",
    bankAccountNumber: applicant.bankAccountNumber || "",
    bankIfsc: applicant.bankIfsc || "",
    upiId: applicant.upiId || "",
    stage: applicant.stage || "submitted",
    status: applicant.status || "pending",
    reviewerNotes: applicant.reviewerNotes || "",
  });

  const [profilePhoto, setProfilePhoto] = useState<ImageInfo | undefined>(applicant.profilePhoto);
  const [documents, setDocuments] = useState<Record<string, ImageInfo>>(applicant.documents || {});

  const [saving, setSaving] = useState(false);
  const [uploadingDocKey, setUploadingDocKey] = useState<string | null>(null);
  const [deletingDocKey, setDeletingDocKey] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const docInputRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const photoInputRef = useRef<HTMLInputElement | null>(null);

  if (!isOpen) return null;

  function updateField<K extends keyof NurseData>(key: K, value: NurseData[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  // Upload Profile Photo via API
  async function handlePhotoUpload(file: File) {
    if (!file) return;
    setUploadingDocKey("profilePhoto");
    setError("");

    const data = new FormData();
    data.append("profilePhoto", file);

    try {
      const res = await fetch(`/api/nurse-applications/${applicant.applicationId}`, {
        method: "PATCH",
        body: data,
      });

      if (!res.ok) throw new Error("Failed to upload photo");
      const result = await res.json();
      setProfilePhoto(result.application.profilePhoto);
      setFormData((prev) => ({ ...prev, profilePhoto: result.application.profilePhoto }));
    } catch {
      setError("Failed to upload photo. Please try again.");
    } finally {
      setUploadingDocKey(null);
    }
  }

  // Delete Profile Photo via API
  async function handlePhotoDelete() {
    const confirmed = window.confirm("Are you sure you want to remove this applicant's profile photo?");
    if (!confirmed) return;

    setDeletingDocKey("profilePhoto");
    setError("");

    try {
      const res = await fetch(`/api/nurse-applications/${applicant.applicationId}?deleteProfilePhoto=true`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete photo");
      setProfilePhoto(undefined);
      setFormData((prev) => ({ ...prev, profilePhoto: undefined }));
    } catch {
      setError("Failed to delete photo.");
    } finally {
      setDeletingDocKey(null);
    }
  }

  // Upload / Replace Single Document via API
  async function handleDocUpload(docKey: string, file: File) {
    if (!file) return;
    setUploadingDocKey(docKey);
    setError("");

    const data = new FormData();
    data.append(`document_${docKey}`, file);

    try {
      const res = await fetch(`/api/nurse-applications/${applicant.applicationId}`, {
        method: "PATCH",
        body: data,
      });

      if (!res.ok) throw new Error("Failed to upload document");
      const result = await res.json();
      setDocuments(result.application.documents || {});
      setFormData((prev) => ({ ...prev, documents: result.application.documents || {} }));
    } catch {
      setError("Failed to upload document. Please try again.");
    } finally {
      setUploadingDocKey(null);
    }
  }

  // Delete Single Document via API
  async function handleDocDelete(docKey: string, label: string) {
    const confirmed = window.confirm(`Delete "${label}" for this applicant?`);
    if (!confirmed) return;

    setDeletingDocKey(docKey);
    setError("");

    try {
      const res = await fetch(`/api/nurse-applications/${applicant.applicationId}?docKey=${docKey}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete document");
      setDocuments((prev) => {
        const next = { ...prev };
        delete next[docKey];
        return next;
      });
      setFormData((prev) => {
        const nextDocs = { ...(prev.documents || {}) };
        delete nextDocs[docKey];
        return { ...prev, documents: nextDocs };
      });
    } catch {
      setError("Failed to delete document.");
    } finally {
      setDeletingDocKey(null);
    }
  }

  // Save text form fields
  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch(`/api/nurse-applications/${applicant.applicationId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          profilePhoto,
          documents,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to update applicant");
      }

      const data = await res.json();
      setSuccess(true);
      setTimeout(() => {
        onSuccess(data.application || formData);
        onClose();
      }, 600);
    } catch (err: unknown) {
      setError((err as Error).message || "Something went wrong while saving.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-neutral-100">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4 bg-neutral-50/50">
          <div>
            <h2 className="text-lg font-bold text-neutral-800">
              Edit Applicant: {formData.fullName || applicant.applicationId}
            </h2>
            <p className="text-xs text-neutral-400">ID: {applicant.applicationId} · Full Admin Control</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-neutral-100 px-6 bg-white gap-4">
          <button
            type="button"
            onClick={() => setActiveTab("details")}
            className={
              "flex items-center gap-2 py-3 text-sm font-semibold border-b-2 transition " +
              (activeTab === "details"
                ? "border-brand-600 text-brand-600"
                : "border-transparent text-neutral-400 hover:text-neutral-700")
            }
          >
            <User size={15} /> Personal & Professional Details
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("documents")}
            className={
              "flex items-center gap-2 py-3 text-sm font-semibold border-b-2 transition " +
              (activeTab === "documents"
                ? "border-brand-600 text-brand-600"
                : "border-transparent text-neutral-400 hover:text-neutral-700")
            }
          >
            <FileStack size={15} /> Documents & Photo Upload
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {error && (
            <div className="mb-4 rounded-lg bg-danger-50 p-3 text-xs text-danger-600 border border-danger-200">
              {error}
            </div>
          )}

          {activeTab === "details" ? (
            <form id="editNurseDetailsForm" onSubmit={handleSave} className="space-y-6">
              {/* Section 1: Basic Information */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Personal Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      placeholder="e.g. Fasiha Begum"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={(e) => updateField("mobileNumber", e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="e.g. nurse@doctor247.com"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Gender</label>
                    <select
                      value={formData.gender}
                      onChange={(e) => updateField("gender", e.target.value)}
                      className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    >
                      <option value="">Select Gender</option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Date of Birth</label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => updateField("dob", e.target.value)}
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-6">
                    <input
                      type="checkbox"
                      id="editIsStudentCheck"
                      checked={formData.isStudent}
                      onChange={(e) => updateField("isStudent", e.target.checked)}
                      className="h-4 w-4 rounded border-neutral-300 text-brand-600 focus:ring-brand-500"
                    />
                    <label htmlFor="editIsStudentCheck" className="text-sm font-medium text-neutral-700">
                      Student Nurse (In-training)
                    </label>
                  </div>
                </div>
              </div>

              {/* Section 2: Location */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Location & Address
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">City</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => updateField("city", e.target.value)}
                      placeholder="e.g. Bangalore"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">PIN Code</label>
                    <input
                      type="text"
                      value={formData.pinCode}
                      onChange={(e) => updateField("pinCode", e.target.value)}
                      placeholder="e.g. 560047"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Area / Locality</label>
                    <input
                      type="text"
                      value={formData.area}
                      onChange={(e) => updateField("area", e.target.value)}
                      placeholder="e.g. Neelsandra / Koramangala"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Current Address</label>
                    <input
                      type="text"
                      value={formData.currentAddress}
                      onChange={(e) => updateField("currentAddress", e.target.value)}
                      placeholder="Full street address"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Professional Info */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Professional Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Qualification</label>
                    <select
                      value={formData.qualification}
                      onChange={(e) => updateField("qualification", e.target.value)}
                      className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    >
                      <option value="">Select Qualification</option>
                      {QUALIFICATIONS.map((q) => (
                        <option key={q} value={q}>
                          {q}
                        </option>
                      ))}
                      <option value="Student">Nursing Student</option>
                      <option value="Home Attendant">General Healthcare Worker / Attendant</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">
                      Registration Number / Student ID
                    </label>
                    <input
                      type="text"
                      value={formData.registrationNumber}
                      onChange={(e) => updateField("registrationNumber", e.target.value)}
                      placeholder="e.g. 17CE0081"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">State Council</label>
                    <input
                      type="text"
                      value={formData.stateNursingCouncil}
                      onChange={(e) => updateField("stateNursingCouncil", e.target.value)}
                      placeholder="e.g. Karnataka"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Experience</label>
                    <select
                      value={formData.yearsOfExperience}
                      onChange={(e) => updateField("yearsOfExperience", e.target.value)}
                      className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    >
                      <option value="">Select Experience</option>
                      <option value="fresher">Fresher (&lt; 1 yr)</option>
                      <option value="1-3">1 - 3 years</option>
                      <option value="3-5">3 - 5 years</option>
                      <option value="5-10">5 - 10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Current Employer</label>
                    <input
                      type="text"
                      value={formData.currentEmployer}
                      onChange={(e) => updateField("currentEmployer", e.target.value)}
                      placeholder="e.g. Anand Hospital"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Employment Status</label>
                    <select
                      value={formData.employmentStatus}
                      onChange={(e) => updateField("employmentStatus", e.target.value)}
                      className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    >
                      <option value="">Select Status</option>
                      <option value="full-time">Full Time</option>
                      <option value="part-time">Part Time</option>
                      <option value="freelance">Freelance / On-call</option>
                      <option value="not-working">Available Immediately</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 4: Credentialing & Status */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Credentialing & Review
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => updateField("status", e.target.value)}
                      className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    >
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                      <option value="needs-more-information">Needs More Information</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Stage</label>
                    <select
                      value={formData.stage}
                      onChange={(e) => updateField("stage", e.target.value)}
                      className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    >
                      <option value="submitted">Registration Submitted</option>
                      <option value="document-verification">Document Verification</option>
                      <option value="interview">Interview</option>
                      <option value="clinical-assessment">Clinical Assessment</option>
                      <option value="background-verification">Background Verification</option>
                      <option value="induction-training">Induction Training</option>
                      <option value="activated">Activated</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Reviewer Notes</label>
                    <textarea
                      rows={3}
                      value={formData.reviewerNotes}
                      onChange={(e) => updateField("reviewerNotes", e.target.value)}
                      placeholder="Admin remarks, interview notes, shifts preferences..."
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </form>
          ) : (
            /* Documents & Image Manager */
            <div className="space-y-6">
              {/* Profile Photo Section */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50/50 p-4">
                <p className="text-xs font-semibold text-neutral-800 mb-2">Profile Photo</p>
                <div className="flex items-center gap-4">
                  {profilePhoto ? (
                    <img
                      src={profilePhoto.url}
                      alt="Profile"
                      className="h-20 w-20 rounded-2xl object-cover border border-neutral-200 shadow-2xs shrink-0"
                    />
                  ) : (
                    <div className="h-20 w-20 rounded-2xl bg-neutral-200 flex items-center justify-center text-neutral-500 font-bold text-lg shrink-0">
                      No Photo
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => photoInputRef.current?.click()}
                        disabled={uploadingDocKey === "profilePhoto"}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 hover:bg-brand-700 px-3 py-1.5 text-xs font-semibold text-white shadow-2xs transition disabled:opacity-50"
                      >
                        {uploadingDocKey === "profilePhoto" ? (
                          <Loader2 size={13} className="animate-spin" />
                        ) : (
                          <Camera size={13} />
                        )}
                        {profilePhoto ? "Replace Photo" : "Upload Photo"}
                      </button>

                      {profilePhoto && (
                        <button
                          type="button"
                          onClick={handlePhotoDelete}
                          disabled={deletingDocKey === "profilePhoto"}
                          className="inline-flex items-center gap-1 rounded-lg bg-danger-50 hover:bg-danger-100 px-3 py-1.5 text-xs font-semibold text-danger-600 transition disabled:opacity-50"
                        >
                          {deletingDocKey === "profilePhoto" ? (
                            <Loader2 size={13} className="animate-spin" />
                          ) : (
                            <Trash2 size={13} />
                          )}
                          Delete Photo
                        </button>
                      )}
                    </div>
                    <p className="text-[11px] text-neutral-400">Accepted formats: JPG, PNG, WEBP (Max 5MB)</p>
                    <input
                      ref={photoInputRef}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handlePhotoUpload(file);
                      }}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Uploaded Documents List */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Credential & Verification Documents
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {DOCUMENT_TYPES.map((doc) => {
                    const uploaded = documents[doc.key];
                    const isUploading = uploadingDocKey === doc.key;
                    const isDeleting = deletingDocKey === doc.key;
                    const isImg = uploaded?.url && (/\.(jpg|jpeg|png|webp|gif|svg|avif)($|\?)/i.test(uploaded.url) || uploaded.url.includes("/image/upload/"));

                    return (
                      <div
                        key={doc.key}
                        className={
                          "flex flex-col justify-between rounded-xl border p-3.5 transition " +
                          (uploaded
                            ? "border-neutral-200 bg-white shadow-2xs hover:border-brand-300"
                            : "border-dashed border-neutral-200 bg-neutral-50/60")
                        }
                      >
                        <div className="flex items-start gap-3 mb-2.5">
                          {uploaded && (
                            <div className="shrink-0">
                              {isImg ? (
                                <a
                                  href={uploaded.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title="Click to view full image"
                                  className="group relative block h-16 w-16 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 shadow-2xs transition hover:opacity-90"
                                >
                                  <img
                                    src={uploaded.url}
                                    alt={doc.label}
                                    className="h-full w-full object-cover transition group-hover:scale-105"
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                                    <ExternalLink size={14} className="text-white" />
                                  </div>
                                </a>
                              ) : (
                                <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-neutral-200 bg-brand-50 text-brand-700 font-bold text-xs">
                                  PDF
                                </div>
                              )}
                            </div>
                          )}

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <p className="text-xs font-semibold text-neutral-800 truncate">{doc.label}</p>
                              {doc.required && (
                                <span className="text-[10px] text-brand-600 font-medium bg-brand-50 px-1.5 py-0.2 rounded shrink-0">
                                  Required
                                </span>
                              )}
                            </div>
                            {uploaded ? (
                              <p className="text-[11px] text-success-600 font-medium flex items-center gap-1 mt-0.5 truncate">
                                <CheckCircle2 size={12} className="shrink-0" />
                                <span className="truncate">{uploaded.originalName || "Uploaded"}</span>
                              </p>
                            ) : (
                              <p className="text-[11px] text-neutral-400 mt-0.5">Not uploaded</p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 pt-2 border-t border-neutral-100">
                          {uploaded ? (
                            <>
                              <a
                                href={uploaded.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 px-2.5 py-1 text-xs font-semibold text-neutral-700 transition"
                              >
                                <ExternalLink size={12} /> View
                              </a>
                              <button
                                type="button"
                                onClick={() => docInputRefs.current[doc.key]?.click()}
                                disabled={isUploading || isDeleting}
                                className="flex items-center gap-1 rounded-lg border border-neutral-200 hover:bg-neutral-50 px-2.5 py-1 text-xs font-semibold text-neutral-700 transition disabled:opacity-50"
                              >
                                {isUploading ? (
                                  <Loader2 size={12} className="animate-spin" />
                                ) : (
                                  <Upload size={12} />
                                )}
                                Replace
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDocDelete(doc.key, doc.label)}
                                disabled={isUploading || isDeleting}
                                className="flex items-center gap-1 rounded-lg bg-danger-50 hover:bg-danger-100 px-2.5 py-1 text-xs font-semibold text-danger-600 transition disabled:opacity-50 ml-auto"
                              >
                                {isDeleting ? (
                                  <Loader2 size={12} className="animate-spin" />
                                ) : (
                                  <Trash2 size={12} />
                                )}
                                Delete
                              </button>
                            </>
                          ) : (
                            <button
                              type="button"
                              onClick={() => docInputRefs.current[doc.key]?.click()}
                              disabled={isUploading}
                              className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand-600 hover:bg-brand-700 px-3 py-1.5 text-xs font-semibold text-white shadow-2xs transition disabled:opacity-60"
                            >
                              {isUploading ? (
                                <Loader2 size={13} className="animate-spin" />
                              ) : (
                                <Plus size={13} />
                              )}
                              {isUploading ? "Uploading…" : `Upload ${doc.label}`}
                            </button>
                          )}

                          <input
                            ref={(el) => {
                              docInputRefs.current[doc.key] = el;
                            }}
                            type="file"
                            accept="image/*,application/pdf"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleDocUpload(doc.key, file);
                            }}
                            className="hidden"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-neutral-100 px-6 py-4 bg-neutral-50/50">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100 transition"
          >
            Close
          </button>
          <button
            type="submit"
            form="editNurseDetailsForm"
            onClick={activeTab === "documents" ? handleSave : undefined}
            disabled={saving}
            className="flex items-center gap-1.5 rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 disabled:opacity-60 transition"
          >
            {saving ? (
              <Loader2 size={16} className="animate-spin" />
            ) : success ? (
              <Check size={16} />
            ) : (
              <Save size={16} />
            )}
            {saving ? "Saving…" : success ? "Saved!" : "Save All Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
