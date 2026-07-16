"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Building2,
  FileStack,
  Loader2,
  LogOut,
  ShieldQuestion,
  Stethoscope,
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
  pending: "bg-warning-50 text-warning-600",
  approved: "bg-success-50 text-success-600",
  rejected: "bg-danger-50 text-danger-600",
  "needs-more-information": "bg-accent-100 text-accent-600",
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
      <p className="text-sm font-medium text-neutral-800 break-words">{value || ""}</p>
    </div>
  );
}

export default function HospitalProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<HospitalProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/hospital-profile")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load profile");
        return res.json();
      })
      .then((data) => setProfile(data.application))
      .catch(() => setError("Failed to load your profile."))
      .finally(() => setLoading(false));
  }, []);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center gap-2 text-sm text-neutral-400">
        <Loader2 size={18} className="animate-spin" /> Loading your profile…
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center text-sm text-neutral-400">
        {error || "Profile not found."}
      </div>
    );
  }

  const isComplete = Boolean(profile.hospitalName);

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="border-b border-neutral-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 flex items-center justify-between gap-2.5">
          <Image
            src="/logo-nav.png"
            alt="Doctor247"
            width={140}
            height={40}
            className="h-11 sm:h-12 w-auto object-contain"
            priority
          />
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-700"
          >
            <LogOut size={16} /> <span className="hidden sm:inline">Log out</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-6 sm:py-8">
        {!isComplete ? (
          <div className="rounded-2xl border border-dashed border-neutral-200 bg-white p-8 text-center">
            <p className="text-sm font-medium text-neutral-700 mb-1">You haven&apos;t completed your registration yet</p>
            <p className="text-sm text-neutral-400 mb-4">
              Finish your hospital partnership registration to submit your application for review.
            </p>
            <a
              href="/hospital-registration"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
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
                subtitle={`Application ${profile.applicationId}`}
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
                  <p className="text-xs text-neutral-400 mb-1.5">Specialities</p>
                  <div className="flex flex-wrap gap-1.5">
                    {(profile.specialities ?? []).map((s) => (
                      <span key={s} className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionCard>

              <SectionCard icon={<FileStack size={18} />} title="Documents">
                {profile.documents && profile.documents.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {profile.documents.map((doc, i) => (
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
                  <p className="text-sm text-neutral-400">No documents uploaded yet.</p>
                )}
              </SectionCard>
            </div>

            <div className="space-y-5">
              <SectionCard icon={<ShieldQuestion size={18} />} title="Application Status">
                <span className={"inline-block rounded-full px-3 py-1 text-sm font-medium " + STATUS_STYLES[profile.status]}>
                  {STATUS_LABELS[profile.status]}
                </span>
                <p className="text-xs text-neutral-400 mt-2 capitalize">Stage: {profile.stage.replace(/-/g, " ")}</p>
                {profile.reviewerNotes && (
                  <div className="mt-4 rounded-lg bg-warning-50 px-4 py-3 text-sm text-warning-600">
                    <p className="font-medium mb-0.5">Note from Doctor247 team</p>
                    <p>{profile.reviewerNotes}</p>
                  </div>
                )}
              </SectionCard>

              <SectionCard title="Edit Profile">
                <p className="text-xs text-neutral-400 mb-3">
                  Need to update your details or documents? Re-open the registration form to make changes.
                </p>
                <a
                  href="/hospital-registration"
                  className="flex w-full items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
                >
                  Edit My Details
                </a>
              </SectionCard>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
