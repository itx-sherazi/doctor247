"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Award,
  Building2,
  ClipboardCheck,
  FileStack,
  Loader2,
  Stethoscope,
  Trash2,
} from "lucide-react";
import { SectionCard, Select, TextArea } from "@/app/nurse-registration/_components/FormControls";

type ApplicationStatus = "pending" | "approved" | "rejected" | "needs-more-information";
type CredentialingStage = "submitted" | "document-verification" | "site-visit" | "agreement-signing" | "activated";

interface FileInfo {
  url: string;
  publicId: string;
  originalName: string;
}

interface Application {
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
  emergencyServices?: string;
  ambulanceServices?: string;
  infrastructure?: string[];
  specialities?: string[];
  consultantCount?: string;
  surgeriesPerformed?: string;
  accreditations?: string[];
  partnershipModel?: string;
  surgeryCostMin?: string;
  surgeryCostMax?: string;
  insuranceEmpanelment?: string[];
  documents?: FileInfo[];
  additionalNotes?: string;
  stage: CredentialingStage;
  status: ApplicationStatus;
  reviewerNotes?: string;
}

const CREDENTIALING_STAGES: { key: CredentialingStage; label: string }[] = [
  { key: "submitted", label: "Application Submitted" },
  { key: "document-verification", label: "Document Verification" },
  { key: "site-visit", label: "Site Visit" },
  { key: "agreement-signing", label: "Agreement Signing" },
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
      <p className="text-sm font-medium text-neutral-800 break-words">{value || ""}</p>
    </div>
  );
}

export default function HospitalApplicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [application, setApplication] = useState<Application | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  useEffect(() => {
    fetch(`/api/hospital-applications/${id}`)
      .then((res) => res.json())
      .then((data) => setApplication(data.application ?? null))
      .finally(() => setLoading(false));
  }, [id]);

  async function persist(patch: Partial<Pick<Application, "stage" | "status" | "reviewerNotes">>) {
    if (!application) return;
    setApplication({ ...application, ...patch });
    setSaving(true);
    try {
      await fetch(`/api/hospital-applications/${id}`, {
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
      `Delete application ${id} permanently? This will also remove all uploaded documents from Cloudinary. This cannot be undone.`
    );
    if (!confirmed) return;

    setDeleting(true);
    setDeleteError("");
    try {
      const res = await fetch(`/api/hospital-applications/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete application");
      router.push("/admin/hospital-review");
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
          <Link href="/admin/hospital-review" className="flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-700">
            <ArrowLeft size={16} /> <span className="hidden sm:inline">Back to applications</span>
          </Link>
          <p className="text-xs text-neutral-400">{application.applicationId} {saving && "· Saving…"}</p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <SectionCard
            icon={<Building2 size={18} />}
            title={application.hospitalName || "Hospital"}
            subtitle={`Submitted ${new Date(application.createdAt).toLocaleString()}`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <InfoRow label="Registration No." value={application.registrationNumber} />
              <InfoRow label="Hospital Type" value={application.hospitalType} />
              <InfoRow label="Ownership" value={application.ownershipType} />
              <InfoRow label="City" value={application.city} />
              <InfoRow label="State" value={application.state} />
              <InfoRow label="PIN Code" value={application.pinCode} />
              <InfoRow label="Address" value={application.address} />
              <InfoRow label="Contact Person" value={application.contactName} />
              <InfoRow label="Designation" value={application.contactDesignation} />
              <InfoRow label="Contact Email" value={application.contactEmail} />
              <InfoRow label="Contact Phone" value={application.contactPhone} />
            </div>
          </SectionCard>

          <SectionCard icon={<Stethoscope size={18} />} title="Infrastructure & Services">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
              <InfoRow label="Total Beds" value={application.totalBeds} />
              <InfoRow label="ICU Beds" value={application.icuBeds} />
              <InfoRow label="Operation Theatres" value={application.operationTheatres} />
              <InfoRow label="Emergency Services" value={application.emergencyServices} />
              <InfoRow label="Ambulance" value={application.ambulanceServices} />
              <InfoRow label="Consultants" value={application.consultantCount} />
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-neutral-400 mb-1.5">Infrastructure</p>
                <div className="flex flex-wrap gap-1.5">
                  {(application.infrastructure ?? []).map((i) => (
                    <span key={i} className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-neutral-400 mb-1.5">Specialities</p>
                <div className="flex flex-wrap gap-1.5">
                  {(application.specialities ?? []).map((s) => (
                    <span key={s} className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-neutral-400 mb-1.5">Accreditations</p>
                <div className="flex flex-wrap gap-1.5">
                  {(application.accreditations ?? []).map((a) => (
                    <span key={a} className="rounded-full bg-accent-100 px-2.5 py-1 text-xs font-medium text-accent-600">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Pricing & Insurance">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
              <InfoRow label="Partnership Model" value={application.partnershipModel} />
              <InfoRow label="Surgery Cost Min" value={application.surgeryCostMin} />
              <InfoRow label="Surgery Cost Max" value={application.surgeryCostMax} />
            </div>
            <p className="text-xs text-neutral-400 mb-1.5">Insurance Empanelment</p>
            <div className="flex flex-wrap gap-1.5">
              {(application.insuranceEmpanelment ?? []).map((i) => (
                <span key={i} className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
                  {i}
                </span>
              ))}
            </div>
          </SectionCard>

          <SectionCard icon={<FileStack size={18} />} title="Documents">
            {application.documents && application.documents.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {application.documents.map((doc, i) => (
                  <a
                    key={doc.publicId ?? i}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-neutral-100 px-3 py-2 text-xs font-medium text-neutral-600 hover:border-brand-300 truncate"
                  >
                    {doc.originalName}
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-sm text-neutral-400">No documents uploaded.</p>
            )}
            {application.additionalNotes && (
              <p className="mt-3 text-sm text-neutral-600">{application.additionalNotes}</p>
            )}
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
              Permanently delete this application and all uploaded documents (Cloudinary). This cannot be undone.
            </p>
            {deleteError && <p className="text-xs font-medium text-danger-600 mb-2">{deleteError}</p>}
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
