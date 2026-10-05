"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Briefcase,
  Camera,
  FileStack,
  GraduationCap,
  Languages,
  Loader2,
  LogOut,
  Plus,
  ShieldQuestion,
  Trash2,
  Upload,
  User,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { SectionCard } from "@/app/nurse-registration/_components/FormControls";
import { DOCUMENT_TYPES, DocumentKey } from "@/app/nurse-registration/_lib/types";

interface ImageInfo {
  url: string;
  publicId: string;
  originalName: string;
}

type ApplicationStatus = "pending" | "approved" | "rejected" | "needs-more-information";

interface NurseProfile {
  applicationId: string;
  createdAt: string;
  fullName?: string;
  mobileNumber?: string;
  email?: string;
  gender?: string;
  dob?: string;
  city?: string;
  pinCode?: string;
  permanentAddress?: string;
  currentAddress?: string;
  profilePhoto?: ImageInfo;
  qualification?: string;
  isStudent?: boolean;
  registrationNumber?: string;
  stateNursingCouncil?: string;
  yearsOfExperience?: string;
  employmentStatus?: string;
  currentEmployer?: string;
  skills?: string[];
  languages?: string[];
  otherLanguage?: string;
  serviceAreas?: string[];
  documents?: Record<string, ImageInfo>;
  status: ApplicationStatus;
  stage: string;
  reviewerNotes?: string;
}

const STATUS_STYLES: Record<ApplicationStatus, string> = {
  pending: "bg-warning-50 text-warning-600 border border-warning-200",
  approved: "bg-success-50 text-success-600 border border-success-200",
  rejected: "bg-danger-50 text-danger-600 border border-danger-200",
  "needs-more-information": "bg-accent-100 text-accent-600 border border-accent-200",
};

const STATUS_LABELS: Record<ApplicationStatus, string> = {
  pending: "Pending Review",
  approved: "Approved",
  rejected: "Rejected",
  "needs-more-information": "Needs More Information",
};

function InfoRow({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <p className="text-xs text-neutral-400">{label}</p>
      <p className="text-sm font-medium text-neutral-800 break-words">{value || "—"}</p>
    </div>
  );
}

export default function NurseProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<NurseProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionSuccess, setActionSuccess] = useState("");
  const [uploadingKey, setUploadingKey] = useState<string | null>(null);
  const [deletingKey, setDeletingKey] = useState<string | null>(null);

  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const photoInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  function fetchProfile() {
    fetch("/api/nurse-profile")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load profile");
        return res.json();
      })
      .then((data) => setProfile(data.application))
      .catch(() => setError("Failed to load your profile."))
      .finally(() => setLoading(false));
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  async function handleDocumentUpload(docKey: string, file: File) {
    if (!file) return;
    setUploadingKey(docKey);
    setError("");
    setActionSuccess("");

    const formData = new FormData();
    formData.append(`document_${docKey}`, file);
    formData.append("payload", JSON.stringify({}));

    try {
      const res = await fetch("/api/nurse-profile", {
        method: "PATCH",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to upload document");
      const data = await res.json();
      setProfile(data.application);
      setActionSuccess(`Document uploaded successfully!`);
      setTimeout(() => setActionSuccess(""), 4000);
    } catch {
      setError("Failed to upload document. Please try again.");
    } finally {
      setUploadingKey(null);
    }
  }

  async function handleProfilePhotoUpload(file: File) {
    if (!file) return;
    setUploadingKey("profilePhoto");
    setError("");
    setActionSuccess("");

    const formData = new FormData();
    formData.append("profilePhoto", file);
    formData.append("payload", JSON.stringify({}));

    try {
      const res = await fetch("/api/nurse-profile", {
        method: "PATCH",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to upload profile photo");
      const data = await res.json();
      setProfile(data.application);
      setActionSuccess("Profile photo updated successfully!");
      setTimeout(() => setActionSuccess(""), 4000);
    } catch {
      setError("Failed to upload photo. Please try again.");
    } finally {
      setUploadingKey(null);
    }
  }

  async function handleDocumentDelete(docKey: string, label: string) {
    const confirmed = window.confirm(`Are you sure you want to delete ${label}?`);
    if (!confirmed) return;

    setDeletingKey(docKey);
    setError("");
    setActionSuccess("");

    try {
      const res = await fetch(`/api/nurse-profile?docKey=${docKey}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete document");
      const data = await res.json();
      setProfile(data.application);
      setActionSuccess(`${label} deleted successfully.`);
      setTimeout(() => setActionSuccess(""), 4000);
    } catch {
      setError("Failed to delete document. Please try again.");
    } finally {
      setDeletingKey(null);
    }
  }

  async function handleProfilePhotoDelete() {
    const confirmed = window.confirm("Are you sure you want to remove your profile photo?");
    if (!confirmed) return;

    setDeletingKey("profilePhoto");
    setError("");
    setActionSuccess("");

    try {
      const res = await fetch(`/api/nurse-profile?deleteProfilePhoto=true`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to remove profile photo");
      const data = await res.json();
      setProfile(data.application);
      setActionSuccess("Profile photo removed.");
      setTimeout(() => setActionSuccess(""), 4000);
    } catch {
      setError("Failed to remove photo.");
    } finally {
      setDeletingKey(null);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center gap-2 text-sm text-neutral-400">
        <Loader2 size={18} className="animate-spin text-brand-600" /> Loading your profile…
      </div>
    );
  }

  if (error && !profile) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center text-sm text-neutral-400">
        {error || "Profile not found."}
      </div>
    );
  }

  if (!profile) return null;

  const isComplete = Boolean(profile.fullName || profile.mobileNumber);
  const isStudent = profile.isStudent ?? false;

  return (
    <div className="min-h-screen bg-neutral-50 pb-16">
      <header className="border-b border-neutral-100 bg-white sticky top-0 z-20 shadow-xs">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 flex items-center justify-between gap-2.5">
          <Image
            src="/logo-nav.png"
            alt="Doctor247"
            width={140}
            height={40}
            className="h-10 sm:h-11 w-auto object-contain"
            priority
          />
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 rounded-lg bg-danger-50 px-3 sm:px-3.5 py-2 text-xs sm:text-sm font-semibold text-danger-600 transition hover:bg-danger-100"
          >
            <LogOut size={15} /> <span>Log out</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Alerts */}
        {actionSuccess && (
          <div className="mb-4 flex items-center gap-2 rounded-xl bg-success-50 p-3.5 text-xs font-medium text-success-700 border border-success-200 shadow-2xs">
            <CheckCircle2 size={16} className="shrink-0" />
            <span>{actionSuccess}</span>
          </div>
        )}
        {error && (
          <div className="mb-4 flex items-center gap-2 rounded-xl bg-danger-50 p-3.5 text-xs font-medium text-danger-600 border border-danger-200 shadow-2xs">
            <AlertCircle size={16} className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {!isComplete ? (
          <div className="rounded-2xl border border-dashed border-neutral-200 bg-white p-8 text-center">
            <p className="text-base font-semibold text-neutral-800 mb-1">
              You haven&apos;t completed your registration yet
            </p>
            <p className="text-xs text-neutral-500 mb-4 max-w-md mx-auto">
              Finish your profile details to submit your nurse application for fast verification and activation.
            </p>
            <a
              href="/nurse-registration"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-brand-700 transition"
            >
              Continue Registration
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-5">
              {/* Personal Card & Profile Photo Upload */}
              <SectionCard
                icon={<User size={18} />}
                title={profile.fullName || "My Nurse Profile"}
                subtitle={`Application ID: ${profile.applicationId}`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                  <div className="relative group shrink-0">
                    {profile.profilePhoto ? (
                      <img
                        src={profile.profilePhoto.url}
                        alt="Profile"
                        className="h-24 w-24 rounded-2xl object-cover border-2 border-brand-200 shadow-sm"
                      />
                    ) : (
                      <div className="h-24 w-24 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 font-bold text-2xl">
                        {(profile.fullName || "N").charAt(0).toUpperCase()}
                      </div>
                    )}

                    {/* Change / Upload photo button overlay */}
                    <div className="mt-2 flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => photoInputRef.current?.click()}
                        disabled={uploadingKey === "profilePhoto"}
                        className="flex items-center gap-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 px-2.5 py-1 text-[11px] font-semibold text-neutral-700 transition"
                      >
                        {uploadingKey === "profilePhoto" ? (
                          <Loader2 size={12} className="animate-spin" />
                        ) : (
                          <Camera size={12} />
                        )}
                        {profile.profilePhoto ? "Change" : "Upload Photo"}
                      </button>

                      {profile.profilePhoto && (
                        <button
                          type="button"
                          onClick={handleProfilePhotoDelete}
                          disabled={deletingKey === "profilePhoto"}
                          className="flex items-center justify-center rounded-lg bg-danger-50 hover:bg-danger-100 p-1 text-danger-600 transition"
                          title="Remove photo"
                        >
                          {deletingKey === "profilePhoto" ? (
                            <Loader2 size={12} className="animate-spin" />
                          ) : (
                            <Trash2 size={12} />
                          )}
                        </button>
                      )}
                    </div>

                    <input
                      ref={photoInputRef}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleProfilePhotoUpload(file);
                      }}
                      className="hidden"
                    />
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-bold text-neutral-900">
                        {profile.fullName || "Applicant"}
                      </h3>
                      {isStudent && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 border border-brand-200">
                          <GraduationCap size={12} /> Student Nurse
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-500">
                      {profile.email || "No email provided"} · {profile.mobileNumber || "No mobile"}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {profile.city || "Bangalore"} {profile.pinCode ? `(PIN: ${profile.pinCode})` : ""}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 border-t border-neutral-100">
                  <InfoRow label="Mobile" value={profile.mobileNumber} />
                  <InfoRow label="Email" value={profile.email} />
                  <InfoRow label="Gender" value={profile.gender} />
                  <InfoRow label="Date of Birth" value={profile.dob} />
                  <InfoRow label="City" value={profile.city} />
                  <InfoRow label="PIN Code" value={profile.pinCode} />
                  <InfoRow label="Permanent Address" value={profile.permanentAddress} />
                  <InfoRow label="Current Address" value={profile.currentAddress} />
                </div>
              </SectionCard>

              {/* Professional Details */}
              <SectionCard icon={<Briefcase size={18} />} title="Professional Details">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <InfoRow label="Qualification" value={profile.qualification} />
                  <InfoRow
                    label={isStudent ? "Student Registration ID" : "Registration No."}
                    value={profile.registrationNumber}
                  />
                  {!isStudent && (
                    <InfoRow label="State Council" value={profile.stateNursingCouncil} />
                  )}
                  {!isStudent && (
                    <InfoRow label="Experience" value={profile.yearsOfExperience} />
                  )}
                  <InfoRow label="Employment Status" value={profile.employmentStatus} />
                  <InfoRow label="Current Employer" value={profile.currentEmployer} />
                </div>

                {isStudent && (
                  <p className="mt-3 text-xs text-neutral-400">
                    You&apos;re registered as a student nurse. You can upload or update your degree / council certificate as soon as available.
                  </p>
                )}
              </SectionCard>

              {/* Skills & Languages */}
              <SectionCard icon={<Languages size={18} />} title="Skills, Languages & Service Areas">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-neutral-400 mb-1.5 font-medium">Skills</p>
                    <div className="flex flex-wrap gap-1.5">
                      {(profile.skills ?? []).map((s) => (
                        <span
                          key={s}
                          className="rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 border border-brand-100"
                        >
                          {s}
                        </span>
                      ))}
                      {(!profile.skills || profile.skills.length === 0) && (
                        <p className="text-xs text-neutral-400 italic">None selected</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-neutral-400 mb-1.5 font-medium">Languages</p>
                    <div className="flex flex-wrap gap-1.5">
                      {[...(profile.languages ?? []), profile.otherLanguage]
                        .filter(Boolean)
                        .map((l) => (
                          <span
                            key={l}
                            className="rounded-lg bg-accent-50 px-2.5 py-1 text-xs font-semibold text-accent-700 border border-accent-200"
                          >
                            {l}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-neutral-400 mb-1.5 font-medium">Service Areas</p>
                    <div className="flex flex-wrap gap-1.5">
                      {(profile.serviceAreas ?? []).map((a) => (
                        <span
                          key={a}
                          className="rounded-lg bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700"
                        >
                          {a}
                        </span>
                      ))}
                      {(!profile.serviceAreas || profile.serviceAreas.length === 0) && (
                        <p className="text-xs text-neutral-400 italic">All Bangalore Areas</p>
                      )}
                    </div>
                  </div>
                </div>
              </SectionCard>

              {/* Interactive Documents Section: Upload, View, Delete */}
              <SectionCard
                icon={<FileStack size={18} />}
                title="Verification Documents"
                subtitle="Upload, update, or remove your verification certificates"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {DOCUMENT_TYPES.map((doc) => {
                    const uploadedDoc = profile.documents?.[doc.key];
                    const isUploading = uploadingKey === doc.key;
                    const isDeleting = deletingKey === doc.key;

                    return (
                      <div
                        key={doc.key}
                        className={
                          "flex flex-col justify-between rounded-xl border p-3.5 transition " +
                          (uploadedDoc
                            ? "border-neutral-200 bg-white shadow-2xs"
                            : "border-dashed border-neutral-200 bg-neutral-50/60")
                        }
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <div className="flex items-center gap-1.5">
                              <p className="text-xs font-semibold text-neutral-800">{doc.label}</p>
                              {doc.required && (
                                <span className="text-[10px] text-brand-600 font-medium bg-brand-50 px-1.5 py-0.2 rounded">
                                  Required
                                </span>
                              )}
                            </div>
                            {uploadedDoc ? (
                              <p className="text-[11px] text-success-600 font-medium flex items-center gap-1 mt-0.5">
                                <CheckCircle2 size={12} /> Uploaded ({uploadedDoc.originalName})
                              </p>
                            ) : (
                              <p className="text-[11px] text-neutral-400 mt-0.5">Not uploaded yet</p>
                            )}
                          </div>
                        </div>

                        {/* Document Action Buttons */}
                        <div className="flex items-center gap-1.5 pt-2 border-t border-neutral-100">
                          {uploadedDoc ? (
                            <>
                              <a
                                href={uploadedDoc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 px-2.5 py-1 text-xs font-semibold text-neutral-700 transition"
                              >
                                <ExternalLink size={12} /> View
                              </a>
                              <button
                                type="button"
                                onClick={() => fileInputRefs.current[doc.key]?.click()}
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
                                onClick={() => handleDocumentDelete(doc.key, doc.label)}
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
                              onClick={() => fileInputRefs.current[doc.key]?.click()}
                              disabled={isUploading}
                              className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand-600 hover:bg-brand-700 px-3 py-1.5 text-xs font-semibold text-white shadow-xs transition disabled:opacity-60"
                            >
                              {isUploading ? (
                                <Loader2 size={13} className="animate-spin" />
                              ) : (
                                <Plus size={13} />
                              )}
                              {isUploading ? "Uploading…" : `Upload ${doc.label}`}
                            </button>
                          )}

                          {/* Hidden File Input */}
                          <input
                            ref={(el) => {
                              fileInputRefs.current[doc.key] = el;
                            }}
                            type="file"
                            accept="image/*,application/pdf"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleDocumentUpload(doc.key, file);
                            }}
                            className="hidden"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </SectionCard>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <SectionCard icon={<ShieldQuestion size={18} />} title="Verification Status">
                <span
                  className={
                    "inline-block rounded-full px-3 py-1 text-xs font-semibold " +
                    STATUS_STYLES[profile.status]
                  }
                >
                  {STATUS_LABELS[profile.status]}
                </span>
                <p className="text-xs text-neutral-500 mt-2 capitalize font-medium">
                  Pipeline Stage:{" "}
                  <span className="text-neutral-800">{profile.stage.replace(/-/g, " ")}</span>
                </p>
                {profile.reviewerNotes && (
                  <div className="mt-4 rounded-xl bg-warning-50 p-3 text-xs text-warning-700 border border-warning-200">
                    <p className="font-bold mb-0.5">Doctor247 Team Note</p>
                    <p>{profile.reviewerNotes}</p>
                  </div>
                )}
              </SectionCard>

              <SectionCard title="Edit Full Registration">
                <p className="text-xs text-neutral-500 mb-3 leading-relaxed">
                  Need to update your availability, experience, or personal information across all registration steps?
                </p>
                <a
                  href="/nurse-registration"
                  className="flex w-full items-center justify-center rounded-xl bg-brand-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-brand-700 transition"
                >
                  Open Registration Editor
                </a>
              </SectionCard>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}