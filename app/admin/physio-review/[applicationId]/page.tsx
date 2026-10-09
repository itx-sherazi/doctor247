"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  Briefcase,
  CheckCircle2,
  FileStack,
  GraduationCap,
  Languages,
  Loader2,
  Save,
  ShieldQuestion,
  User,
  XCircle,
} from "lucide-react";
import { SectionCard } from "@/app/physio-registration/_components/FormControls";
import { DOCUMENT_TYPES } from "@/app/physio-registration/_lib/types";

type ApplicationStatus = "pending" | "approved" | "rejected" | "needs-more-information";

interface ImageInfo {
  url: string;
  publicId: string;
  originalName: string;
}

interface PhysioApplication {
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
  permanentAddress?: string;
  currentAddress?: string;
  profilePhoto?: ImageInfo;
  qualification?: string;
  isStudent?: boolean;
  registrationNumber?: string;
  statePhysioCouncil?: string;
  registrationExpiryDate?: string;
  yearsOfExperience?: string;
  employmentStatus?: string;
  currentClinic?: string;
  previousClinics?: string;
  specializations?: string[];
  languages?: string[];
  otherLanguage?: string;
  serviceAreas?: string[];
  documents?: Record<string, ImageInfo>;
  everTerminated?: string;
  criminalCases?: string;
  disciplinaryProceedings?: string;
  documentsGenuine?: string;
  status: ApplicationStatus;
  stage: string;
  reviewerNotes?: string;
}

const STATUS_OPTIONS: { value: ApplicationStatus; label: string }[] = [
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
  { value: "needs-more-information", label: "Needs More Information" },
];

const STAGE_OPTIONS = [
  "submitted",
  "document-verification",
  "interview",
  "clinical-assessment",
  "background-verification",
  "induction-training",
  "activated",
];

function InfoRow({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <p className="text-xs text-neutral-400">{label}</p>
      <p className="text-sm font-medium text-neutral-800 break-words">{value || ""}</p>
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

export default function AdminPhysioReviewDetailPage() {
  const { applicationId } = useParams<{ applicationId: string }>();
  const router = useRouter();
  const [app, setApp] = useState<PhysioApplication | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<ApplicationStatus>("pending");
  const [stage, setStage] = useState("submitted");
  const [reviewerNotes, setReviewerNotes] = useState("");

  useEffect(() => {
    if (!applicationId) return;
    fetch(`/api/physio-applications/${applicationId}`)
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load");
        return res.json();
      })
      .then((data) => {
        const application = data.application as PhysioApplication;
        setApp(application);
        setStatus(application.status);
        setStage(application.stage);
        setReviewerNotes(application.reviewerNotes ?? "");
      })
      .catch(() => setError("Failed to load application."))
      .finally(() => setLoading(false));
  }, [applicationId]);

  async function save(overrides?: Partial<{ status: ApplicationStatus; stage: string }>) {
    setSaving(true);
    setError("");
    try {
      const res = await fetch(`/api/physio-applications/${applicationId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: overrides?.status ?? status,
          stage: overrides?.stage ?? stage,
          reviewerNotes,
        }),
      });
      if (!res.ok) throw new Error("Failed to save");
      const data = await res.json();
      setApp(data.application);
      setStatus(data.application.status);
      setStage(data.application.stage);
    } catch {
      setError("Failed to save changes. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center gap-2 text-sm text-neutral-400">
        <Loader2 size={18} className="animate-spin" /> Loading application…
      </div>
    );
  }

  if (error && !app) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center text-sm text-neutral-400">
        {error}
      </div>
    );
  }

  if (!app) return null;

  const isStudent = app.isStudent ?? false;

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="border-b border-neutral-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3.5 flex items-center gap-3">
          <Image
            src="/logo-nav.png"
            alt="Doctor247"
            width={140}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
          <div className="border-l border-neutral-200 pl-3">
            <p className="text-sm font-semibold text-neutral-800 leading-none">Admin</p>
            <p className="text-xs text-neutral-400 mt-0.5">Physiotherapist Review</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-6 sm:py-8">
        <Link
          href="/admin/physio-review"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-brand-700 mb-4"
        >
          <ArrowLeft size={15} /> Back to all applications
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">
            <SectionCard
              icon={<User size={18} />}
              title={app.fullName || "Applicant"}
              subtitle={`Application ${app.applicationId}`}
            >
              {app.profilePhoto && (
                <img
                  src={app.profilePhoto.url}
                  alt="Profile"
                  className="h-24 w-24 rounded-full object-cover border border-neutral-100 mb-4"
                />
              )}
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-600">
                  <Activity size={14} />
                  Physiotherapist
                </span>
                {isStudent && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    <GraduationCap size={14} />
                    Student
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <InfoRow label="Mobile" value={app.mobileNumber} />
                <InfoRow label="Email" value={app.email} />
                <InfoRow label="Gender" value={app.gender} />
                <InfoRow label="Date of Birth" value={app.dob} />
                <InfoRow label="City" value={app.city} />
                <InfoRow label="PIN Code" value={app.pinCode} />
                <InfoRow label="Area" value={app.area} />
                <InfoRow label="Permanent Address" value={app.permanentAddress} />
                <InfoRow label="Current Address" value={app.currentAddress} />
              </div>
            </SectionCard>

            <SectionCard icon={<Briefcase size={18} />} title="Professional Details">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <InfoRow label="Qualification" value={app.qualification} />
                <InfoRow
                  label={isStudent ? "Student Registration ID" : "Registration No."}
                  value={app.registrationNumber}
                />
                {!isStudent && (
                  <InfoRow label="State Council" value={app.statePhysioCouncil} />
                )}
                {app.registrationExpiryDate && !isStudent && (
                  <InfoRow label="Expiry Date" value={app.registrationExpiryDate} />
                )}
                {!isStudent && (
                  <InfoRow label="Experience" value={app.yearsOfExperience} />
                )}
                <InfoRow label="Employment Status" value={app.employmentStatus} />
                <InfoRow label="Current Clinic" value={app.currentClinic} />
                {app.previousClinics && (
                  <InfoRow label="Previous Clinics" value={app.previousClinics} />
                )}
              </div>
            </SectionCard>

            <SectionCard icon={<Languages size={18} />} title="Specializations & Languages">
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-neutral-400 mb-1.5">Specializations</p>
                  <div className="flex flex-wrap gap-1.5">
                    {(app.specializations ?? []).map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 mb-1.5">Languages</p>
                  <div className="flex flex-wrap gap-1.5">
                    {[...(app.languages ?? []), app.otherLanguage]
                      .filter(Boolean)
                      .map((l) => (
                        <span
                          key={l}
                          className="rounded-full bg-accent-100 px-2.5 py-1 text-xs font-medium text-accent-600"
                        >
                          {l}
                        </span>
                      ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 mb-1.5">Service Areas</p>
                  <div className="flex flex-wrap gap-1.5">
                    {(app.serviceAreas ?? []).map((a) => (
                      <span
                        key={a}
                        className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600"
                      >
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
                  <ImageCard
                    key={doc.key}
                    label={doc.label}
                    image={app.documents?.[doc.key]}
                  />
                ))}
              </div>
            </SectionCard>

            <SectionCard icon={<ShieldQuestion size={18} />} title="Background Checks">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <InfoRow label="Terminated?" value={app.everTerminated} />
                <InfoRow label="Criminal Cases?" value={app.criminalCases} />
                <InfoRow
                  label="Disciplinary?"
                  value={app.disciplinaryProceedings}
                />
                <InfoRow label="Docs Genuine?" value={app.documentsGenuine} />
              </div>
            </SectionCard>
          </div>

          <div className="space-y-5">
            <SectionCard title="Review Decision">
              <label className="block text-xs font-medium text-neutral-500 mb-1.5">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as ApplicationStatus)}
                className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-700 focus:outline-none focus:border-brand-400 mb-3"
              >
                {STATUS_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>

              <label className="block text-xs font-medium text-neutral-500 mb-1.5">Stage</label>
              <select
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-700 focus:outline-none focus:border-brand-400 mb-3 capitalize"
              >
                {STAGE_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s.replace(/-/g, " ")}
                  </option>
                ))}
              </select>

              <label className="block text-xs font-medium text-neutral-500 mb-1.5">
                Reviewer Notes
              </label>
              <textarea
                rows={4}
                value={reviewerNotes}
                onChange={(e) => setReviewerNotes(e.target.value)}
                placeholder="Add a note for the applicant…"
                className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-700 focus:outline-none focus:border-brand-400 mb-3 resize-none"
              />

              {error && (
                <div className="rounded-lg bg-danger-50 px-3 py-2 text-xs text-danger-600 mb-3">
                  {error}
                </div>
              )}

              <button
                onClick={() => save()}
                disabled={saving}
                className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-60"
              >
                {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
                {saving ? "Saving…" : "Save Changes"}
              </button>

              <div className="grid grid-cols-2 gap-2 mt-3">
                <button
                  onClick={() => save({ status: "approved" })}
                  disabled={saving}
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-success-50 px-3 py-2 text-xs font-semibold text-success-600 hover:bg-success-100 disabled:opacity-60"
                >
                  <CheckCircle2 size={13} /> Approve
                </button>
                <button
                  onClick={() => save({ status: "rejected" })}
                  disabled={saving}
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-danger-50 px-3 py-2 text-xs font-semibold text-danger-600 hover:bg-danger-100 disabled:opacity-60"
                >
                  <XCircle size={13} /> Reject
                </button>
              </div>
            </SectionCard>

            <SectionCard title="Applicant Contact">
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-neutral-400">Phone: </span>
                  <a
                    href={`tel:${app.mobileNumber}`}
                    className="font-medium text-brand-700 hover:underline"
                  >
                    {app.mobileNumber}
                  </a>
                </p>
                {app.email && (
                  <p>
                    <span className="text-neutral-400">Email: </span>
                    <a
                      href={`mailto:${app.email}`}
                      className="font-medium text-brand-700 hover:underline break-all"
                    >
                      {app.email}
                    </a>
                  </p>
                )}
              </div>
            </SectionCard>
          </div>
        </div>
      </main>
    </div>
  );
}