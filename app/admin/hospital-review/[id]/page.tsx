"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Award,
  Building2,
  ClipboardCheck,
  Edit,
  FileStack,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Stethoscope,
  Trash2,
  User,
} from "lucide-react";
import { SectionCard, Select, TextArea } from "@/app/nurse-registration/_components/FormControls";
import { EditHospitalModal } from "../../_components/EditHospitalModal";

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
      <p className="text-sm font-medium text-neutral-800 break-words">{value || "—"}</p>
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
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    fetch(`/api/hospital-applications/${id}`)
      .then((res) => res.json())
      .then((data) => setApplication(data.application ?? null))
      .finally(() => setLoading(false));
  }, [id]);

  async function persist(patch: Partial<Application>) {
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
        <Loader2 size={18} className="animate-spin text-brand-600" /> Loading hospital application…
      </div>
    );
  }

  if (!application) {
    return (
      <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center text-sm text-neutral-400 gap-3">
        <p>Application not found.</p>
        <Link
          href="/admin/hospital-review"
          className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white"
        >
          Back to hospital list
        </Link>
      </div>
    );
  }

  const currentIdx = CREDENTIALING_STAGES.findIndex((s) => s.key === application.stage);
  const displayName =
    application.hospitalName ||
    application.contactName ||
    (application.contactEmail ? application.contactEmail.split("@")[0] : "") ||
    "Hospital Partner";

  return (
    <div className="min-h-screen bg-neutral-50 pb-16">
      <header className="border-b border-neutral-100 bg-white sticky top-0 z-20 shadow-xs">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <Link
            href="/admin/hospital-review"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition"
          >
            <ArrowLeft size={16} /> <span>Back to hospitals</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-400">
              {application.applicationId} {saving && "· Saving…"}
            </span>
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="flex items-center gap-1.5 rounded-lg bg-brand-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-brand-700 transition"
            >
              <Edit size={13} /> Edit Hospital
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          {/* Hospital Basic Info */}
          <SectionCard
            icon={<Building2 size={18} />}
            title={displayName}
            subtitle={`Submitted on ${new Date(application.createdAt).toLocaleDateString()}`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4 flex-wrap text-xs text-neutral-500 pb-2 border-b border-neutral-100">
                {application.contactPhone && (
                  <span className="flex items-center gap-1 text-neutral-700 font-medium">
                    <Phone size={12} className="text-neutral-400" /> {application.contactPhone}
                  </span>
                )}
                {application.contactEmail && (
                  <span className="flex items-center gap-1 text-neutral-700">
                    <Mail size={12} className="text-neutral-400" /> {application.contactEmail}
                  </span>
                )}
                {(application.city || application.state) && (
                  <span className="flex items-center gap-1 text-neutral-700">
                    <MapPin size={12} className="text-neutral-400" />{" "}
                    {application.city ? `${application.city}, ` : ""}
                    {application.state || "Karnataka"}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <InfoRow label="Hospital Type" value={application.hospitalType} />
                <InfoRow label="Ownership" value={application.ownershipType} />
                <InfoRow label="Registration No." value={application.registrationNumber} />
                <InfoRow label="City" value={application.city} />
                <InfoRow label="State" value={application.state} />
                <InfoRow label="PIN Code" value={application.pinCode} />
                <div className="sm:col-span-3">
                  <InfoRow label="Full Address" value={application.address} />
                </div>
              </div>
            </div>
          </SectionCard>

          {/* Contact Person */}
          <SectionCard icon={<User size={18} />} title="Contact Person">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <InfoRow label="Contact Name" value={application.contactName} />
              <InfoRow label="Designation" value={application.contactDesignation} />
              <InfoRow label="Phone" value={application.contactPhone} />
              <InfoRow label="Email" value={application.contactEmail} />
            </div>
          </SectionCard>

          {/* Infrastructure & Capacity */}
          <SectionCard icon={<Building2 size={18} />} title="Infrastructure & Capacity">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <InfoRow label="Total Beds" value={application.totalBeds} />
              <InfoRow label="ICU Beds" value={application.icuBeds} />
              <InfoRow label="Operation Theatres" value={application.operationTheatres} />
              <InfoRow label="Ventilators" value={application.emergencyServices} />
            </div>

            {application.infrastructure && application.infrastructure.length > 0 && (
              <div className="mt-4 pt-3 border-t border-neutral-100">
                <p className="text-xs text-neutral-400 mb-2">Available Infrastructure</p>
                <div className="flex flex-wrap gap-1.5">
                  {application.infrastructure.map((inf) => (
                    <span
                      key={inf}
                      className="rounded-lg bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700"
                    >
                      {inf}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </SectionCard>

          {/* Specialities & Surgeries */}
          <SectionCard icon={<Stethoscope size={18} />} title="Services, Specialities & Surgeries">
            <div className="space-y-4">
              {application.specialities && application.specialities.length > 0 && (
                <div>
                  <p className="text-xs text-neutral-400 mb-2 font-medium">Specialities</p>
                  <div className="flex flex-wrap gap-1.5">
                    {application.specialities.map((spec) => (
                      <span
                        key={spec}
                        className="rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 border border-brand-100"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <InfoRow label="Consultant Count" value={application.consultantCount} />
                <InfoRow label="Partnership Model" value={application.partnershipModel} />
                <InfoRow
                  label="Surgery Cost Range"
                  value={
                    application.surgeryCostMin || application.surgeryCostMax
                      ? `₹${application.surgeryCostMin || "0"} - ₹${application.surgeryCostMax || "0"}`
                      : undefined
                  }
                />
              </div>
            </div>
          </SectionCard>

          {/* Documents */}
          <SectionCard icon={<FileStack size={18} />} title="Uploaded Documents">
            {(!application.documents || application.documents.length === 0) ? (
              <p className="text-xs text-neutral-400 italic">No documents uploaded yet.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {application.documents.map((doc, idx) => {
                  const isImg = doc.url && (/\.(jpg|jpeg|png|webp|gif|svg|avif)($|\?)/i.test(doc.url) || doc.url.includes("/image/upload/"));
                  return (
                    <a
                      key={idx}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block overflow-hidden rounded-xl border border-neutral-200 bg-white hover:border-brand-500 transition shadow-2xs"
                    >
                      <div className="h-28 w-full bg-neutral-100 flex items-center justify-center overflow-hidden">
                        {isImg ? (
                          <img
                            src={doc.url}
                            alt={doc.originalName || "Document"}
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
                        <p className="text-xs font-semibold text-neutral-800 truncate">
                          {doc.originalName || `Document ${idx + 1}`}
                        </p>
                        <p className="text-[10px] text-brand-600 mt-0.5 font-medium">
                          {isImg ? "Click to view image ↗" : "Click to view PDF ↗"}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
          </SectionCard>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Quick Edit Action */}
          <div className="rounded-2xl border border-brand-200 bg-brand-50/50 p-4 shadow-2xs">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-brand-900">Need to update info?</p>
                <p className="text-[11px] text-brand-700">Edit hospital partnership details</p>
              </div>
              <button
                onClick={() => setIsEditModalOpen(true)}
                className="flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-brand-700 transition"
              >
                <Edit size={13} /> Edit Hospital
              </button>
            </div>
          </div>

          <SectionCard icon={<ClipboardCheck size={18} />} title="Partnership Pipeline">
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
                label="Reviewer Notes & Terms"
                rows={4}
                value={application.reviewerNotes ?? ""}
                onChange={(e) => setApplication({ ...application, reviewerNotes: e.target.value })}
                onBlur={(e) => persist({ reviewerNotes: e.target.value })}
                placeholder="Hospital visit inspection remarks, agreed terms..."
              />
            </div>
          </SectionCard>

          <SectionCard icon={<Trash2 size={18} />} title="Danger Zone">
            <p className="text-xs text-neutral-400 mb-3">
              Permanently delete this hospital application and all associated documents.
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
              {deleting ? "Deleting…" : "Delete Hospital Application"}
            </button>
          </SectionCard>
        </div>
      </main>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <EditHospitalModal
          hospital={application}
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
