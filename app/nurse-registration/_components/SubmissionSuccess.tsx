"use client";

import Link from "next/link";
import { CheckCircle2, User } from "lucide-react";

const CREDENTIALING_STAGES = [
  { key: "submitted", label: "Registration Submitted", description: "Application received and queued for review." },
  { key: "document-verification", label: "Document Verification", description: "KYC, certificates, and registration documents under review." },
  { key: "interview", label: "Video / In-Person Interview", description: "Scheduling and conducting candidate interview." },
  { key: "clinical-assessment", label: "Clinical Skills Assessment", description: "Evaluating clinical competency against claimed skills." },
  { key: "background-verification", label: "Background & Police Verification", description: "Criminal record and reference checks in progress." },
  { key: "induction-training", label: "Doctor247 Induction Training", description: "Mandatory SOP and platform training." },
  { key: "activated", label: "Activation", description: "Nurse is live and eligible to receive job requests." },
] as const;

export function SubmissionSuccess({ applicationId }: { applicationId: string }) {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-2xl border border-brand-100 bg-white p-5 sm:p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success-50">
          <CheckCircle2 size={28} className="text-success-600" />
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-neutral-800">Application submitted successfully</h2>
        <p className="mt-2 text-sm text-neutral-500">
          Your reference ID is <span className="font-mono font-semibold text-brand-700">{applicationId}</span>. Our team
          will review your credentials before your profile goes live.
        </p>

        <div className="mt-8 text-left">
          <h3 className="text-sm font-semibold text-neutral-700 mb-3">What happens next</h3>
          <ol className="space-y-3">
            {CREDENTIALING_STAGES.map((stage, i) => (
              <li key={stage.key} className="flex gap-3">
                <span
                  className={
                    "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold " +
                    (i === 0 ? "bg-brand-600 text-white" : "bg-neutral-100 text-neutral-400")
                  }
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-medium text-neutral-800">{stage.label}</p>
                  <p className="text-xs text-neutral-400">{stage.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <Link
          href="/nurse-profile"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
        >
          <User size={16} /> View My Profile
        </Link>
      </div>
    </div>
  );
}
