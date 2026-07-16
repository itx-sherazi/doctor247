"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { Stepper } from "./_components/Stepper";
import { Step1HospitalInfo } from "./_components/Step1HospitalInfo";
import { Step2Infrastructure } from "./_components/Step2Infrastructure";
import { Step3ServicesDoctors } from "./_components/Step3ServicesDoctors";
import { Step4PricingDocuments } from "./_components/Step4PricingDocuments";
import { SubmissionSuccess } from "./_components/SubmissionSuccess";
import { HospitalRegistrationData, initialHospitalRegistrationData, TOTAL_STEPS } from "./_lib/types";

export default function HospitalRegistrationPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<HospitalRegistrationData>(initialHospitalRegistrationData);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [applicationId, setApplicationId] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    fetch("/api/hospital-profile")
      .then(async (res) => (res.ok ? res.json() : null))
      .then((result) => {
        const application = result?.application;
        if (!application) return;

        setData((prev) => ({
          ...prev,
          ...application,
          documents: [],
          existingDocuments: application.documents ?? [],
        }));
      })
      .finally(() => setLoadingProfile(false));
  }, []);

  function update(patch: Partial<HospitalRegistrationData>) {
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

    const { documents, existingDocuments, ...rest } = data;

    const formData = new FormData();
    formData.append("payload", JSON.stringify(rest));
    for (const file of documents) {
      formData.append("documents", file);
    }

    try {
      const res = await fetch("/api/hospital-profile", { method: "PATCH", body: formData });
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
            <p className="text-xs font-medium text-neutral-500 leading-none">Hospital Partnership</p>
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
            {step === 0 && <Step1HospitalInfo data={data} update={update} onNext={next} />}
            {step === 1 && <Step2Infrastructure data={data} update={update} onNext={next} onBack={back} />}
            {step === 2 && <Step3ServicesDoctors data={data} update={update} onNext={next} onBack={back} />}
            {step === 3 && (
              <Step4PricingDocuments
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
