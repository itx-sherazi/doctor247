"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Award,
  Briefcase,
  Building2,
  ClipboardCheck,
  Edit,
  FileStack,
  GraduationCap,
  Languages,
  Loader2,
  Phone,
  Mail,
  MapPin,
  ShieldQuestion,
  Trash2,
  User,
  Wallet,
} from "lucide-react";
import { SectionCard, Select, TextArea } from "@/app/nurse-registration/_components/FormControls";
import { DOCUMENT_TYPES } from "@/app/nurse-registration/_lib/types";
import { EditNurseModal } from "../../_components/EditNurseModal";

type ApplicationStatus = "pending" | "approved" | "rejected" | "needs-more-information";
type CredentialingStage =
  | "submitted"
  | "document-verification"
  | "interview"
  | "clinical-assessment"
  | "background-verification"
  | "induction-training"
  | "activated";

interface ImageInfo {
  url: string;
  publicId: string;
  originalName: string;
}

interface Application {
  applicationId: string;
  createdAt: string;
  fullName?: string;
  mobileNumber?: string;
  email?: string;
  gender?: string;
  dob?: string;
  city?: string;
  pinCode?: string;
  area?: string;
  aadhaarNumber?: string;
  panNumber?: string;
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
  everTerminated?: string;
  criminalCases?: string;
  disciplinaryProceedings?: string;
  documentsGenuine?: string;
  stage: CredentialingStage;
  status: ApplicationStatus;
  reviewerNotes?: string;
}

const CREDENTIALING_STAGES: { key: CredentialingStage; label: string }[] = [
  { key: "submitted", label: "Registration Submitted" },
  { key: "document-verification", label: "Document Verification" },
  { key: "interview", label: "Video / In-Person Interview" },
  { key: "clinical-assessment", label: "Clinical Skills Assessment" },
  { key: "background-verification", label: "Background & Police Verification" },
  { key: "induction-training", label: "Doctor247 Induction Training" },
  { key: "activated", label: "Activation" },
];

const STATUS_OPTIONS: { key: ApplicationStatus; label: string }[] = [
  { key: "pending", label: "Pending" },
  { key: "approved", label: "Approved" },
  { key: "rejected", label: "Rejected" },
  { key: "needs-more-information", label: "Needs More Information" },
];

function InfoRow({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <p className="text-xs text-neutral-400">{label}</p>
      <p className="text-sm font-medium text-neutral-800 break-words">{value || "—"}</p>
    </div>
  );
}

function ImageCard({ label, image }: { label: string; image?: ImageInfo }) {
  if (!image) {
    return (
      <div className="rounded-xl border border-dashed border-neutral-200 p-3.5 text-xs text-neutral-400 bg-neutral-50/50">
        <p className="font-medium text-neutral-600 mb-1">{label}</p>
        <p className="text-[11px] text-neutral-400 italic">Not uploaded</p>
      </div>
    );
  }

  const isImg = image.url && (/\.(jpg|jpeg|png|webp|gif|svg|avif)($|\?)/i.test(image.url) || image.url.includes("/image/upload/"));

  return (
    <a
      href={image.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border border-neutral-200 hover:border-brand-500 bg-white transition shadow-2xs"
    >
      <div className="h-32 w-full bg-neutral-100 flex items-center justify-center overflow-hidden">
        {isImg ? (
          <img
            src={image.url}
            alt={label}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-1 text-brand-700 bg-brand-50 w-full h-full">
            <span className="text-sm font-bold bg-white px-2.5 py-1 rounded shadow-2xs border border-brand-200">PDF</span>
            <span className="text-[11px] text-neutral-500 font-medium">Document</span>
          </div>
        )}
      </div>
      <div className="p-2 border-t border-neutral-100">
        <p className="text-xs font-semibold text-neutral-700 truncate">{label}</p>
        <p className="text-[10px] text-brand-600 mt-0.5">
          {isImg ? "Click to view full image ↗" : "Click to open PDF ↗"}
        </p>
      </div>
    </a>
  );
}

export default function ApplicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [application, setApplication] = useState<Application | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    fetch(`/api/nurse-applications/${id}`)
      .then((res) => res.json())
      .then((data) => setApplication(data.application ?? null))
      .finally(() => setLoading(false));
  }, [id]);

  async function persist(patch: Partial<Application>) {
    if (!application) return;
    setApplication({ ...application, ...patch });
    setSaving(true);
    try {
      await fetch(`/api/nurse-applications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    const confirmed = window.confirm(
      `Delete application ${id} permanently? This will also remove all uploaded images from Cloudinary. This cannot be undone.`
    );
    if (!confirmed) return;

    setDeleting(true);
    setDeleteError("");
    try {
      const res = await fetch(`/api/nurse-applications/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete application");
      router.push("/admin/nurse-review");
      router.refresh();
    } catch {
      setDeleteError("Failed to delete application. Please try again.");
      setDeleting(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center gap-2 text-sm text-neutral-400">
        <Loader2 size={18} className="animate-spin text-brand-600" /> Loading applicant details…
      </div>
    );
  }

  if (!application) {
    return (
      <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center text-sm text-neutral-400 gap-3">
        <p>Application not found.</p>
        <Link
          href="/admin/nurse-review"
          className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white"
        >
          Back to applications
        </Link>
      </div>
    );
  }

  const currentIdx = CREDENTIALING_STAGES.findIndex((s) => s.key === application.stage);
  const displayName =
    application.fullName ||
    (application.email ? application.email.split("@")[0] : "") ||
    application.mobileNumber ||
    "Applicant";

  return (
    <div className="min-h-screen bg-neutral-50 pb-16">
      <header className="border-b border-neutral-100 bg-white sticky top-0 z-20 shadow-xs">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <Link
            href="/admin/nurse-review"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition"
          >
            <ArrowLeft size={16} /> <span>Back to applications</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-400">
              {application.applicationId} {saving && "· Saving…"}
            </span>
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="flex items-center gap-1.5 rounded-lg bg-brand-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-brand-700 transition"
            >
              <Edit size={13} /> Edit Applicant
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          {/* Personal Info */}
          <SectionCard
            icon={<User size={18} />}
            title={displayName}
            subtitle={`Submitted on ${new Date(application.createdAt).toLocaleDateString()}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-4">
              {application.profilePhoto ? (
                <img
                  src={application.profilePhoto.url}
                  alt="Profile"
                  className="h-20 w-20 rounded-2xl object-cover border border-neutral-200 shadow-2xs shrink-0"
                />
              ) : (
                <div className="h-20 w-20 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 font-bold text-xl shrink-0">
                  {displayName.charAt(0).toUpperCase()}
                </div>
              )}

              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-bold text-neutral-900">{displayName}</h3>
                  {application.isStudent && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 border border-brand-200">
                      <GraduationCap size={12} /> Student Nurse
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 flex-wrap text-xs text-neutral-500 pt-1">
                  {application.mobileNumber && (
                    <span className="flex items-center gap-1 text-neutral-700 font-medium">
                      <Phone size={12} className="text-neutral-400" /> {application.mobileNumber}
                    </span>
                  )}
                  {application.email && (
                    <span className="flex items-center gap-1 text-neutral-700">
                      <Mail size={12} className="text-neutral-400" /> {application.email}
                    </span>
                  )}
                  {(application.area || application.city) && (
                    <span className="flex items-center gap-1 text-neutral-700">
                      <MapPin size={12} className="text-neutral-400" />{" "}
                      {application.area ? `${application.area}, ` : ""}
                      {application.city || "Bangalore"}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 border-t border-neutral-100">
              <InfoRow label="Gender" value={application.gender} />
              <InfoRow label="Date of Birth" value={application.dob} />
              <InfoRow label="PIN Code" value={application.pinCode} />
              <InfoRow label="Area" value={application.area} />
              <InfoRow label="City" value={application.city} />
              <InfoRow label="Permanent Address" value={application.permanentAddress} />
              <InfoRow label="Current Address" value={application.currentAddress} />
              <InfoRow label="Aadhaar Number" value={application.aadhaarNumber} />
              <InfoRow label="PAN Number" value={application.panNumber} />
            </div>
          </SectionCard>

          {/* Professional Details */}
          <SectionCard icon={<Briefcase size={18} />} title="Professional Details">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <InfoRow label="Qualification" value={application.qualification} />
              <InfoRow
                label={application.isStudent ? "Student ID / Reg" : "Registration No."}
                value={application.registrationNumber}
              />
              <InfoRow label="State Council" value={application.stateNursingCouncil} />
              <InfoRow label="Experience" value={application.yearsOfExperience} />
              <InfoRow label="Employment Status" value={application.employmentStatus} />
              <InfoRow label="Current Employer" value={application.currentEmployer} />
            </div>
          </SectionCard>

          {/* Skills & Preferences */}
          <SectionCard icon={<Languages size={18} />} title="Skills, Languages & Service Areas">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-neutral-400 mb-1.5 font-medium">Skills</p>
                <div className="flex flex-wrap gap-1.5">
                  {(application.skills && application.skills.length > 0) ? (
                    application.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700 border border-brand-100"
                      >
                        {s}
                      </span>
                    ))
                  ) : (
                    <p className="text-xs text-neutral-400 italic">None specified</p>
                  )}
                </div>
              </div>

              <div>
                <p className="text-xs text-neutral-400 mb-1.5 font-medium">Languages</p>
                <div className="flex flex-wrap gap-1.5">
                  {[...(application.languages ?? []), application.otherLanguage]
                    .filter(Boolean)
                    .map((l) => (
                      <span
                        key={l}
                        className="rounded-lg bg-accent-50 px-2.5 py-1 text-xs font-medium text-accent-700 border border-accent-200"
                      >
                        {l}
                      </span>
                    ))}
                  {(!application.languages || application.languages.length === 0) &&
                    !application.otherLanguage && (
                      <p className="text-xs text-neutral-400 italic">None specified</p>
                    )}
                </div>
              </div>

              <div>
                <p className="text-xs text-neutral-400 mb-1.5 font-medium">Service Areas</p>
                <div className="flex flex-wrap gap-1.5">
                  {(application.serviceAreas && application.serviceAreas.length > 0) ? (
                    application.serviceAreas.map((a) => (
                      <span
                        key={a}
                        className="rounded-lg bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700"
                      >
                        {a}
                      </span>
                    ))
                  ) : (
                    <p className="text-xs text-neutral-400 italic">Any Bangalore area</p>
                  )}
                </div>
              </div>
            </div>
          </SectionCard>

          {/* Rates & Banking */}
          <SectionCard icon={<Wallet size={18} />} title="Rates & Payment Details">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <InfoRow
                label="Home Visit Rate"
                value={application.rateHomeVisit ? `₹${application.rateHomeVisit}` : undefined}
              />
              <InfoRow
                label="12-Hour Rate"
                value={application.rate12Hours ? `₹${application.rate12Hours}` : undefined}
              />
              <InfoRow
                label="24-Hour Rate"
                value={application.rate24Hours ? `₹${application.rate24Hours}` : undefined}
              />
              <InfoRow
                label="Monthly Rate"
                value={application.rateMonthly ? `₹${application.rateMonthly}` : undefined}
              />
              <InfoRow label="Bank Account Name" value={application.bankAccountName} />
              <InfoRow label="Account Number" value={application.bankAccountNumber} />
              <InfoRow label="IFSC Code" value={application.bankIfsc} />
              <InfoRow label="UPI ID" value={application.upiId} />
            </div>
          </SectionCard>

          {/* Documents */}
          <SectionCard icon={<FileStack size={18} />} title="Uploaded Documents">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {DOCUMENT_TYPES.map((doc) => (
                <ImageCard
                  key={doc.key}
                  label={doc.label}
                  image={application.documents?.[doc.key]}
                />
              ))}
            </div>
          </SectionCard>

          {/* Background Declarations */}
          <SectionCard
            icon={<ShieldQuestion size={18} />}
            title="Background Verification Declarations"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <InfoRow label="Ever terminated?" value={application.everTerminated} />
              <InfoRow label="Criminal cases?" value={application.criminalCases} />
              <InfoRow
                label="Disciplinary proceedings?"
                value={application.disciplinaryProceedings}
              />
              <InfoRow label="Documents genuine?" value={application.documentsGenuine} />
            </div>
          </SectionCard>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Quick Edit Action */}
          <div className="rounded-2xl border border-brand-200 bg-brand-50/50 p-4 shadow-2xs">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-brand-900">Need to update info?</p>
                <p className="text-[11px] text-brand-700">Edit any details of this nurse applicant</p>
              </div>
              <button
                onClick={() => setIsEditModalOpen(true)}
                className="flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-brand-700 transition"
              >
                <Edit size={13} /> Edit Details
              </button>
            </div>
          </div>

          <SectionCard icon={<ClipboardCheck size={18} />} title="Credentialing Pipeline">
            <div className="space-y-1">
              {CREDENTIALING_STAGES.map((s, i) => {
                const done = i < currentIdx;
                const active = i === currentIdx;
                return (
                  <button
                    key={s.key}
                    onClick={() => persist({ stage: s.key })}
                    className={
                      "flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left transition " +
                      (active
                        ? "bg-brand-50 border border-brand-200 shadow-2xs"
                        : "hover:bg-neutral-50")
                    }
                  >
                    <span
                      className={
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold " +
                        (done
                          ? "bg-brand-500 text-white"
                          : active
                          ? "bg-brand-600 text-white"
                          : "bg-neutral-100 text-neutral-400")
                      }
                    >
                      {done ? "✓" : i + 1}
                    </span>
                    <span
                      className={
                        "text-xs font-medium " +
                        (active ? "font-bold text-brand-800" : "text-neutral-600")
                      }
                    >
                      {s.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </SectionCard>

          <SectionCard icon={<Award size={18} />} title="Decision & Status">
            <div className="space-y-3.5">
              <Select
                label="Application Status"
                value={application.status}
                onChange={(e) => persist({ status: e.target.value as ApplicationStatus })}
              >
                {STATUS_OPTIONS.map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.label}
                  </option>
                ))}
              </Select>
              <TextArea
                label="Reviewer Remarks & Notes"
                rows={4}
                value={application.reviewerNotes ?? ""}
                onChange={(e) => setApplication({ ...application, reviewerNotes: e.target.value })}
                onBlur={(e) => persist({ reviewerNotes: e.target.value })}
                placeholder="Remarks, shifts preferences, or background notes..."
              />
            </div>
          </SectionCard>

          <SectionCard icon={<Trash2 size={18} />} title="Danger Zone">
            <p className="text-xs text-neutral-400 mb-3">
              Permanently delete this applicant and all uploaded verification files.
            </p>
            {deleteError && (
              <p className="text-xs font-medium text-danger-600 mb-2">{deleteError}</p>
            )}
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-danger-50 px-4 py-2.5 text-xs font-semibold text-danger-600 transition hover:bg-danger-100 disabled:opacity-60"
            >
              {deleting ? <Loader2 size={15} className="animate-spin" /> : <Trash2 size={15} />}
              {deleting ? "Deleting…" : "Delete Application"}
            </button>
          </SectionCard>
        </div>
      </main>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <EditNurseModal
          applicant={application}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSuccess={(updated) => {
            setApplication((prev) => (prev ? ({ ...prev, ...updated } as Application) : (updated as unknown as Application)));
            setIsEditModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
