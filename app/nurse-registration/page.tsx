"use client";

import { useState } from "react";
import { Stethoscope } from "lucide-react";
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
import { initialNurseRegistrationData, NurseRegistrationData, TOTAL_STEPS } from "./_lib/types";

export default function NurseRegistrationPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<NurseRegistrationData>(initialNurseRegistrationData);
  const [submitting, setSubmitting] = useState(false);
  const [applicationId, setApplicationId] = useState<string | null>(null);

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

  function submit() {
    setSubmitting(true);
    setTimeout(() => {
      setApplicationId(`NUR-${Date.now().toString(36).toUpperCase()}`);
      setSubmitting(false);
    }, 500);
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="border-b border-neutral-100 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-4 flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
            <Stethoscope size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-800 leading-none">Doctor247</p>
            <p className="text-xs text-neutral-400">Nurse Registration</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-6 sm:py-8 pb-24 sm:pb-8">
        {applicationId ? (
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
              <Step11Agreement data={data} update={update} onNext={submit} onBack={back} submitting={submitting} />
            )}
          </>
        )}
      </main>
    </div>
  );
}
