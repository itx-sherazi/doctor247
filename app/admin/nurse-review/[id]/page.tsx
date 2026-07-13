"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Award,
  Briefcase,
  ClipboardCheck,
  FileStack,
  Languages,
  Loader2,
  ShieldQuestion,
  Trash2,
  User,
} from "lucide-react";
import { SectionCard, Select, TextArea } from "@/app/nurse-registration/_components/FormControls";
import { DOCUMENT_TYPES } from "@/app/nurse-registration/_lib/types";

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
  aadhaarNumber?: string;
  panNumber?: string;
  permanentAddress?: string;
  currentAddress?: string;
  profilePhoto?: ImageInfo;
  qualification?: string;
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
      <div className="rounded-lg border border-dashed border-neutral-200 p-3 text-xs text-neutral-400">
        {label}
        <p className="mt-1">Not uploaded</p>
      </div>
    );
  }
  return (
    <a
      href={image.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-lg border border-neutral-100 hover:border-brand-300 transition"
    >
      <img src={image.url} alt={label} className="h-32 w-full object-cover bg-neutral-50" />
      <p className="px-2 py-1.5 text-xs font-medium text-neutral-600 truncate">{label}</p>
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

  useEffect(() => {
    fetch(`/api/nurse-applications/${id}`)
      .then((res) => res.json())
      .then((data) => setApplication(data.application ?? null))
      .finally(() => setLoading(false));
  }, [id]);

  async function persist(patch: Partial<Pick<Application, "stage" | "status" | "reviewerNotes">>) {
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
        <Loader2 size={18} className="animate-spin" /> Loading application…
      </div>
    );
  }

  if (!application) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center text-sm text-neutral-400">
        Application not found.
      </div>
    );
  }

  const currentIdx = CREDENTIALING_STAGES.findIndex((s) => s.key === application.stage);

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="border-b border-neutral-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/admin/nurse-review" className="flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-700">
            <ArrowLeft size={16} /> <span className="hidden sm:inline">Back to applications</span>
          </Link>
          <p className="text-xs text-neutral-400">{application.applicationId} {saving && "· Saving…"}</p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <SectionCard
            icon={<User size={18} />}
            title={application.fullName || "Applicant"}
            subtitle={`Submitted ${new Date(application.createdAt).toLocaleString()}`}
          >
            {application.profilePhoto && (
              <img
                src={application.profilePhoto.url}
                alt="Profile"
                className="h-20 w-20 rounded-full object-cover border border-neutral-100 mb-4"
              />
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <InfoRow label="Mobile" value={application.mobileNumber} />
              <InfoRow label="Email" value={application.email} />
              <InfoRow label="Gender" value={application.gender} />
              <InfoRow label="Date of Birth" value={application.dob} />
              <InfoRow label="City" value={application.city} />
              <InfoRow label="PIN Code" value={application.pinCode} />
              <InfoRow label="Aadhaar" value={application.aadhaarNumber} />
              <InfoRow label="PAN" value={application.panNumber} />
              <InfoRow label="Permanent Address" value={application.permanentAddress} />
              <InfoRow label="Current Address" value={application.currentAddress} />
            </div>
          </SectionCard>

          <SectionCard icon={<Briefcase size={18} />} title="Professional Details">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <InfoRow label="Qualification" value={application.qualification} />
              <InfoRow label="Registration No." value={application.registrationNumber} />
              <InfoRow label="State Council" value={application.stateNursingCouncil} />
              <InfoRow label="Experience" value={application.yearsOfExperience} />
              <InfoRow label="Employment Status" value={application.employmentStatus} />
              <InfoRow label="Current Employer" value={application.currentEmployer} />
            </div>
          </SectionCard>

          <SectionCard icon={<Languages size={18} />} title="Skills & Languages">
            <div className="space-y-3">
              <div>
                <p className="text-xs text-neutral-400 mb-1.5">Skills</p>
                <div className="flex flex-wrap gap-1.5">
                  {(application.skills ?? []).map((s) => (
                    <span key={s} className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-neutral-400 mb-1.5">Languages</p>
                <div className="flex flex-wrap gap-1.5">
                  {[...(application.languages ?? []), application.otherLanguage].filter(Boolean).map((l) => (
                    <span key={l} className="rounded-full bg-accent-100 px-2.5 py-1 text-xs font-medium text-accent-600">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-neutral-400 mb-1.5">Service Areas</p>
                <div className="flex flex-wrap gap-1.5">
                  {(application.serviceAreas ?? []).map((a) => (
                    <span key={a} className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard icon={<FileStack size={18} />} title="Documents">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {DOCUMENT_TYPES.map((doc) => (
                <ImageCard key={doc.key} label={doc.label} image={application.documents?.[doc.key]} />
              ))}
            </div>
          </SectionCard>

          <SectionCard icon={<ShieldQuestion size={18} />} title="Background Verification Declarations">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <InfoRow label="Ever terminated?" value={application.everTerminated} />
              <InfoRow label="Criminal cases?" value={application.criminalCases} />
              <InfoRow label="Disciplinary proceedings?" value={application.disciplinaryProceedings} />
              <InfoRow label="Documents genuine?" value={application.documentsGenuine} />
            </div>
          </SectionCard>
        </div>

        <div className="space-y-5">
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
                      "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition " +
                      (active ? "bg-brand-50" : "hover:bg-neutral-50")
                    }
                  >
                    <span
                      className={
                        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold " +
                        (done ? "bg-brand-500 text-white" : active ? "bg-brand-600 text-white" : "bg-neutral-100 text-neutral-400")
                      }
                    >
                      {done ? "✓" : i + 1}
                    </span>
                    <span className={"text-sm " + (active ? "font-semibold text-brand-700" : "text-neutral-600")}>{s.label}</span>
                  </button>
                );
              })}
            </div>
          </SectionCard>

          <SectionCard icon={<Award size={18} />} title="Decision">
            <div className="space-y-3">
              <Select
                label="Status"
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
                label="Reviewer Notes"
                rows={4}
                value={application.reviewerNotes ?? ""}
                onChange={(e) => setApplication({ ...application, reviewerNotes: e.target.value })}
                onBlur={(e) => persist({ reviewerNotes: e.target.value })}
              />
            </div>
          </SectionCard>

          <SectionCard icon={<Trash2 size={18} />} title="Danger Zone">
            <p className="text-xs text-neutral-400 mb-3">
              Permanently delete this application and all uploaded images (Cloudinary). This cannot be undone.
            </p>
            {deleteError && (
              <p className="text-xs font-medium text-danger-600 mb-2">{deleteError}</p>
            )}
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-danger-50 px-4 py-2.5 text-sm font-semibold text-danger-600 transition hover:bg-danger-100 disabled:opacity-60"
            >
              {deleting ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
              {deleting ? "Deleting…" : "Delete Application"}
            </button>
          </SectionCard>
        </div>
      </main>
    </div>
  );
}
