"use client";

import Link from "next/link";
import { CheckCircle2, FileText, Phone, User } from "lucide-react";

export function SubmissionSuccess({ applicationId }: { applicationId: string }) {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-2xl border border-brand-100 bg-white p-5 sm:p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success-50">
          <CheckCircle2 size={28} className="text-success-600" />
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-neutral-800">Application Submitted!</h2>
        <p className="mt-2 text-sm text-neutral-500">
          Your reference ID is <span className="font-mono font-semibold text-brand-700">{applicationId}</span>. Thank
          you for partnering with Doctor247. Our team will review your application and get back to you within 48
          hours.
        </p>

        <div className="mt-8 text-left rounded-lg bg-neutral-50 p-5 space-y-3">
          <div className="flex items-center gap-3">
            <FileText size={16} className="text-brand-600 shrink-0" />
            <p className="text-sm text-neutral-700">Check your email for confirmation</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} className="text-brand-600 shrink-0" />
            <p className="text-sm text-neutral-700">Our partnership team will call you within 48 hours</p>
          </div>
          <div className="flex items-center gap-3">
            <FileText size={16} className="text-brand-600 shrink-0" />
            <p className="text-sm text-neutral-700">Keep your hospital documents ready for verification</p>
          </div>
        </div>

        <Link
          href="/hospital-profile"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
        >
          <User size={16} /> View My Profile
        </Link>
      </div>
    </div>
  );
}
