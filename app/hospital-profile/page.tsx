"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  AlertCircle,
  Building2,
  CheckCircle2,
  ExternalLink,
  FileStack,
  Loader2,
  LogOut,
  Plus,
  ShieldQuestion,
  Stethoscope,
  Trash2,
  Upload,
} from "lucide-react";
import { SectionCard } from "@/app/nurse-registration/_components/FormControls";

interface FileInfo {
  url: string;
  publicId: string;
  originalName: string;
}

type ApplicationStatus = "pending" | "approved" | "rejected" | "needs-more-information";

interface HospitalProfile {
  applicationId: string;
  createdAt: string;
  hospitalName?: string;
  registrationNumber?: string;
  hospitalType?: string;
  ownershipType?: string;
  address?: string;
  city?: string;
  state?: string;
  pinCode?: string;
  contactName?: string;
  contactDesignation?: string;
  contactEmail?: string;
  contactPhone?: string;
  totalBeds?: string;
  icuBeds?: string;
  operationTheatres?: string;
  specialities?: string[];
  consultantCount?: string;
  accreditations?: string[];
  documents?: FileInfo[];
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

export default function HospitalProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<HospitalProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionSuccess, setActionSuccess] = useState("");
  const [uploading, setUploading] = useState(false);
  const [deletingPublicId, setDeletingPublicId] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  function fetchProfile() {
    fetch("/api/hospital-profile")
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

  async function handleDocumentUpload(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    setError("");
    setActionSuccess("");

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("documents", files[i]);
    }
    formData.append("payload", JSON.stringify({}));

    try {
      const res = await fetch("/api/hospital-profile", {
        method: "PATCH",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to upload document");
      const data = await res.json();
      setProfile(data.application);
      setActionSuccess("Document(s) uploaded successfully!");
      setTimeout(() => setActionSuccess(""), 4000);
    } catch {
      setError("Failed to upload document. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  async function handleDocumentDelete(publicId: string, name: string) {
    const confirmed = window.confirm(`Delete document "${name}"?`);
    if (!confirmed) return;

    setDeletingPublicId(publicId);
    setError("");
    setActionSuccess("");

    try {
      const res = await fetch(`/api/hospital-profile?publicId=${encodeURIComponent(publicId)}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete document");
      const data = await res.json();
      setProfile(data.application);
      setActionSuccess(`Document deleted.`);
      setTimeout(() => setActionSuccess(""), 4000);
    } catch {
      setError("Failed to delete document.");
    } finally {
      setDeletingPublicId(null);
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

  const isComplete = Boolean(profile.hospitalName || profile.contactPhone);

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
              Finish your hospital partnership registration to submit your application for review.
            </p>
            <a
              href="/hospital-registration"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-brand-700 transition"
            >
              Continue Registration
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-5">
              <SectionCard
                icon={<Building2 size={18} />}
                title={profile.hospitalName || "My Hospital"}
                subtitle={`Application ID: ${profile.applicationId}`}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <InfoRow label="Registration No." value={profile.registrationNumber} />
                  <InfoRow label="Hospital Type" value={profile.hospitalType} />
                  <InfoRow label="Ownership" value={profile.ownershipType} />
                  <InfoRow label="City" value={profile.city} />
                  <InfoRow label="State" value={profile.state} />
                  <InfoRow label="PIN Code" value={profile.pinCode} />
                  <InfoRow label="Contact Person" value={profile.contactName} />
                  <InfoRow label="Contact Email" value={profile.contactEmail} />
                  <InfoRow label="Contact Phone" value={profile.contactPhone} />
                </div>
              </SectionCard>

              <SectionCard icon={<Stethoscope size={18} />} title="Infrastructure & Specialities">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                  <InfoRow label="Total Beds" value={profile.totalBeds} />
                  <InfoRow label="ICU Beds" value={profile.icuBeds} />
                  <InfoRow label="Operation Theatres" value={profile.operationTheatres} />
                  <InfoRow label="Consultants" value={profile.consultantCount} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 mb-1.5 font-medium">Specialities</p>
                  <div className="flex flex-wrap gap-1.5">
                    {(profile.specialities ?? []).map((s) => (
                      <span
                        key={s}
                        className="rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 border border-brand-100"
                      >
                        {s}
                      </span>
                    ))}
                    {(!profile.specialities || profile.specialities.length === 0) && (
                      <p className="text-xs text-neutral-400 italic">None selected</p>
                    )}
                  </div>
                </div>
              </SectionCard>

              {/* Documents Management: Upload and Delete */}
              <SectionCard
                icon={<FileStack size={18} />}
                title="Hospital Documents & Registrations"
                subtitle="Upload licenses, NABH accreditation, or hospital registration files"
              >
                <div className="mb-4">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-brand-600 hover:bg-brand-700 px-4 py-2 text-xs font-semibold text-white shadow-xs transition disabled:opacity-60"
                  >
                    {uploading ? (
                      <Loader2 size={13} className="animate-spin" />
                    ) : (
                      <Upload size={13} />
                    )}
                    {uploading ? "Uploading…" : "Upload Hospital Document"}
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={(e) => handleDocumentUpload(e.target.files)}
                    className="hidden"
                  />
                </div>

                {profile.documents && profile.documents.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {profile.documents.map((doc, i) => (
                      <div
                        key={doc.publicId ?? i}
                        className="flex items-center justify-between gap-2 rounded-xl border border-neutral-200 bg-white p-3 shadow-2xs"
                      >
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-neutral-800 truncate">
                            {doc.originalName || `Document ${i + 1}`}
                          </p>
                          <a
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] text-brand-600 font-medium hover:underline inline-flex items-center gap-0.5 mt-0.5"
                          >
                            <ExternalLink size={10} /> View Document
                          </a>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleDocumentDelete(doc.publicId, doc.originalName)}
                          disabled={deletingPublicId === doc.publicId}
                          className="rounded-lg bg-danger-50 hover:bg-danger-100 p-1.5 text-danger-600 transition disabled:opacity-50 shrink-0"
                          title="Delete document"
                        >
                          {deletingPublicId === doc.publicId ? (
                            <Loader2 size={13} className="animate-spin" />
                          ) : (
                            <Trash2 size={13} />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-neutral-400 italic">No documents uploaded yet.</p>
                )}
              </SectionCard>
            </div>

            <div className="space-y-5">
              <SectionCard icon={<ShieldQuestion size={18} />} title="Partnership Status">
                <span
                  className={
                    "inline-block rounded-full px-3 py-1 text-xs font-semibold " +
                    STATUS_STYLES[profile.status]
                  }
                >
                  {STATUS_LABELS[profile.status]}
                </span>
                <p className="text-xs text-neutral-500 mt-2 capitalize font-medium">
                  Stage: <span className="text-neutral-800">{profile.stage.replace(/-/g, " ")}</span>
                </p>
                {profile.reviewerNotes && (
                  <div className="mt-4 rounded-xl bg-warning-50 p-3 text-xs text-warning-700 border border-warning-200">
                    <p className="font-bold mb-0.5">Doctor247 Team Note</p>
                    <p>{profile.reviewerNotes}</p>
                  </div>
                )}
              </SectionCard>

              <SectionCard title="Edit Hospital Details">
                <p className="text-xs text-neutral-500 mb-3 leading-relaxed">
                  Need to update your hospital beds, contact information, or infrastructure details?
                </p>
                <a
                  href="/hospital-registration"
                  className="flex w-full items-center justify-center rounded-xl bg-brand-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-brand-700 transition"
                >
                  Open Hospital Editor
                </a>
              </SectionCard>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
