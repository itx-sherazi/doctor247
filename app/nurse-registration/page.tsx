"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { Stepper } from "./_components/Stepper";
import { Step1Mobile } from "./_components/Step1Mobile";
import { Step2Personal } from "./_components/Step2Personal";
import { Step3Professional } from "./_components/Step3Professional";
import { Step4Skills } from "./_components/Step4Skills";
import { Step5Languages } from "./_components/Step5Languages";
import { Step6ServiceAreas } from "./_components/Step6ServiceAreas";
import { Step7Availability } from "./_components/Step7Availability";
import { Step8Salary } from "./_components/Step8Salary";
import { Step9Documents } from "./_components/Step9Documents";
import { Step10Background } from "./_components/Step10Background";
import { Step11Agreement } from "./_components/Step11Agreement";
import { SubmissionSuccess } from "./_components/SubmissionSuccess";
import {
  DOCUMENT_TYPES,
  initialNurseRegistrationData,
  NurseRegistrationData,
  TOTAL_STEPS,
} from "./_lib/types";

function isNewFile(value: unknown): value is File {
  return value instanceof File;
}

export default function NurseRegistrationPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<NurseRegistrationData>(initialNurseRegistrationData);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [applicationId, setApplicationId] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    fetch("/api/nurse-profile")
      .then(async (res) => (res.ok ? res.json() : null))
      .then((result) => {
        const application = result?.application;
        if (!application) return;

        setData((prev) => ({
          ...prev,
          ...application,
          otpVerified: Boolean(application.mobileNumber) || prev.otpVerified,
          profilePhoto: application.profilePhoto ?? prev.profilePhoto,
          documents: application.documents ?? prev.documents,
        }));
      })
      .finally(() => setLoadingProfile(false));
  }, []);

  function update(patch: Partial<NurseRegistrationData>) {
    setData((prev) => ({ ...prev, ...patch }));
  }

  function next() {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function submit() {
    setSubmitting(true);
    setSubmitError("");

    const { profilePhoto, documents, ...rest } = data;

    const formData = new FormData();
    formData.append("payload", JSON.stringify(rest));
    if (isNewFile(profilePhoto)) formData.append("profilePhoto", profilePhoto);
    for (const doc of DOCUMENT_TYPES) {
      const file = documents[doc.key];
      if (isNewFile(file)) formData.append(`document_${doc.key}`, file);
    }

    try {
      const res = await fetch("/api/nurse-profile", { method: "PATCH", body: formData });
      if (!res.ok) throw new Error("Submission failed");
      const result = await res.json();
      setApplicationId(result.application.applicationId);
    } catch {
      setSubmitError("Something went wrong while submitting. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="border-b border-neutral-100 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-3 flex items-center gap-2.5">
          <Image
            src="/logo-nav.png"
            alt="Doctor247"
            width={140}
            height={40}
            className="h-11 sm:h-12 w-auto object-contain"
            priority
          />
          <div className="border-l border-neutral-200 pl-2.5">
            <p className="text-xs font-medium text-neutral-500 leading-none">Nurse Registration</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-6 sm:py-8 pb-24 sm:pb-8">
        {loadingProfile ? (
          <div className="flex items-center justify-center gap-2 py-16 text-sm text-neutral-400">
            <Loader2 size={18} className="animate-spin" /> Loading your details…
          </div>
        ) : applicationId ? (
          <SubmissionSuccess applicationId={applicationId} />
        ) : (
          <>
            <Stepper current={step} />
            {step === 0 && <Step1Mobile data={data} update={update} onNext={next} />}
            {step === 1 && <Step2Personal data={data} update={update} onNext={next} onBack={back} />}
            {step === 2 && <Step3Professional data={data} update={update} onNext={next} onBack={back} />}
            {step === 3 && <Step4Skills data={data} update={update} onNext={next} onBack={back} />}
            {step === 4 && <Step5Languages data={data} update={update} onNext={next} onBack={back} />}
            {step === 5 && <Step6ServiceAreas data={data} update={update} onNext={next} onBack={back} />}
            {step === 6 && <Step7Availability data={data} update={update} onNext={next} onBack={back} />}
            {step === 7 && <Step8Salary data={data} update={update} onNext={next} onBack={back} />}
            {step === 8 && <Step9Documents data={data} update={update} onNext={next} onBack={back} />}
            {step === 9 && <Step10Background data={data} update={update} onNext={next} onBack={back} />}
            {step === 10 && (
              <Step11Agreement
                data={data}
                update={update}
                onNext={submit}
                onBack={back}
                submitting={submitting}
                error={submitError}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}
