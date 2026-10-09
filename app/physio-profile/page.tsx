"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Activity,
  Briefcase,
  FileStack,
  GraduationCap,
  Languages,
  Loader2,
  LogOut,
  ShieldQuestion,
  User,
} from "lucide-react";
import { SectionCard } from "@/app/physio-registration/_components/FormControls";
import { DOCUMENT_TYPES } from "@/app/physio-registration/_lib/types";

interface ImageInfo {
  url: string;
  publicId: string;
  originalName: string;
}

type ApplicationStatus = "pending" | "approved" | "rejected" | "needs-more-information";

interface PhysioProfile {
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
  statePhysioCouncil?: string;
  yearsOfExperience?: string;
  employmentStatus?: string;
  currentClinic?: string;
  specializations?: string[];
  languages?: string[];
  otherLanguage?: string;
  serviceAreas?: string[];
  documents?: Record<string, ImageInfo>;
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

export default function PhysioProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<PhysioProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/physio-profile")
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

  const isComplete = Boolean(profile.fullName);
  const isStudent = profile.isStudent ?? false;

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
            className="flex items-center gap-1.5 rounded-lg bg-danger-50 px-3 sm:px-3.5 py-2 text-sm font-semibold text-danger-600 transition hover:bg-danger-100"
          >
            <LogOut size={16} /> <span>Log out</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-6 sm:py-8">
        {!isComplete ? (
          <div className="rounded-2xl border border-dashed border-neutral-200 bg-white p-8 text-center">
            <p className="text-sm font-medium text-neutral-700 mb-1">
              You haven&apos;t completed your registration yet
            </p>
            <p className="text-sm text-neutral-400 mb-4">
              Finish your registration to submit your physiotherapist profile for review.
            </p>
            <a
              href="/physio-registration"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Continue Registration
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-5">
              <SectionCard
                icon={<User size={18} />}
                title={profile.fullName || "My Profile"}
                subtitle={`Application ${profile.applicationId}`}
              >
                {profile.profilePhoto && (
                  <img
                    src={profile.profilePhoto.url}
                    alt="Profile"
                    className="h-20 w-20 rounded-full object-cover border border-neutral-100 mb-4"
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
                      Student Physiotherapist
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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

              <SectionCard icon={<Briefcase size={18} />} title="Professional Details">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <InfoRow label="Qualification" value={profile.qualification} />
                  <InfoRow
                    label={isStudent ? "Student Registration ID" : "Registration No."}
                    value={profile.registrationNumber}
                  />
                  {!isStudent && (
                    <InfoRow
                      label="State Physiotherapy Council"
                      value={profile.statePhysioCouncil}
                    />
                  )}
                  {!isStudent && (
                    <InfoRow label="Experience" value={profile.yearsOfExperience} />
                  )}
                  <InfoRow label="Employment Status" value={profile.employmentStatus} />
                  <InfoRow label="Current Clinic" value={profile.currentClinic} />
                </div>

                {isStudent && (
                  <p className="mt-3 text-xs text-neutral-400">
                    You&apos;re registered as a student physiotherapist. Update your profile with
                    your official council registration number once you receive it.
                  </p>
                )}
              </SectionCard>

              <SectionCard icon={<Languages size={18} />} title="Specializations & Languages">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-neutral-400 mb-1.5">Specializations</p>
                    <div className="flex flex-wrap gap-1.5">
                      {(profile.specializations ?? []).map((s) => (
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
                      {[...(profile.languages ?? []), profile.otherLanguage]
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
                      {(profile.serviceAreas ?? []).map((a) => (
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
                      image={profile.documents?.[doc.key]}
                    />
                  ))}
                </div>
              </SectionCard>
            </div>

            <div className="space-y-5">
              <SectionCard icon={<ShieldQuestion size={18} />} title="Application Status">
                <span
                  className={
                    "inline-block rounded-full px-3 py-1 text-sm font-medium " +
                    STATUS_STYLES[profile.status]
                  }
                >
                  {STATUS_LABELS[profile.status]}
                </span>
                <p className="text-xs text-neutral-400 mt-2 capitalize">
                  Stage: {profile.stage.replace(/-/g, " ")}
                </p>
                {profile.reviewerNotes && (
                  <div className="mt-4 rounded-lg bg-warning-50 px-4 py-3 text-sm text-warning-600">
                    <p className="font-medium mb-0.5">Note from Doctor247 team</p>
                    <p>{profile.reviewerNotes}</p>
                  </div>
                )}
              </SectionCard>

              <SectionCard title="Edit Profile">
                <p className="text-xs text-neutral-400 mb-3">
                  Need to update your details or documents? Re-open the registration form to make
                  changes.
                </p>
                <a
                  href="/physio-registration"
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