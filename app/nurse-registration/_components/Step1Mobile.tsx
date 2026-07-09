"use client";

import { useState } from "react";
import { CheckCircle2, Smartphone } from "lucide-react";
import { NurseRegistrationData } from "../_lib/types";
import { SectionCard, TextInput } from "./FormControls";
import { StepNav } from "./StepNav";

export function Step1Mobile({
  data,
  update,
  onNext,
}: {
  data: NurseRegistrationData;
  update: (patch: Partial<NurseRegistrationData>) => void;
  onNext: () => void;
}) {
  const [otpSent, setOtpSent] = useState(false);
  const [otpInput, setOtpInput] = useState("");
  const [otpError, setOtpError] = useState("");

  const mobileValid = /^[6-9]\d{9}$/.test(data.mobileNumber);

  function sendOtp() {
    if (!mobileValid) return;
    setOtpSent(true);
    setOtpError("");
  }

  function verifyOtp() {
    if (otpInput.trim().length === 4 || otpInput.trim().length === 6) {
      update({ otpVerified: true });
      setOtpError("");
    } else {
      setOtpError("Enter the OTP sent to your mobile number.");
    }
  }

  const canContinue = data.otpVerified;

  return (
    <div className="space-y-5">
      <SectionCard
        icon={<Smartphone size={18} />}
        title="Verify your mobile number"
        subtitle="We use this to keep your account secure and to contact you about job requests."
      >
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-end">
            <div className="flex-1">
              <TextInput
                label="Mobile Number"
                required
                inputMode="numeric"
                maxLength={10}
                placeholder="98765 43210"
                value={data.mobileNumber}
                disabled={data.otpVerified}
                onChange={(e) => update({ mobileNumber: e.target.value.replace(/\D/g, "").slice(0, 10) })}
              />
            </div>
            <button
              type="button"
              disabled={!mobileValid || data.otpVerified}
              onClick={sendOtp}
              className="mb-0 h-[42px] shrink-0 rounded-lg bg-brand-50 px-4 text-sm font-semibold text-brand-700 transition hover:bg-brand-100 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-400"
            >
              {otpSent ? "Resend OTP" : "Send OTP"}
            </button>
          </div>

          {otpSent && !data.otpVerified && (
            <div className="rounded-lg bg-brand-50/60 border border-brand-100 p-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:items-end">
                <div className="flex-1">
                  <TextInput
                    label="Enter OTP"
                    required
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="••••"
                    value={otpInput}
                    onChange={(e) => setOtpInput(e.target.value.replace(/\D/g, ""))}
                  />
                </div>
                <button
                  type="button"
                  onClick={verifyOtp}
                  className="mb-0 h-[42px] shrink-0 rounded-lg bg-brand-600 px-4 text-sm font-semibold text-white transition hover:bg-brand-700"
                >
                  Verify
                </button>
              </div>
              {otpError && <p className="text-xs text-danger-600 mt-2">{otpError}</p>}
              <p className="text-xs text-neutral-400 mt-2">Demo mode: enter any 4–6 digit code to verify.</p>
            </div>
          )}

          {data.otpVerified && (
            <div className="flex items-center gap-2 rounded-lg bg-success-50 px-4 py-2.5 text-sm font-medium text-success-600">
              <CheckCircle2 size={16} /> Mobile number verified
            </div>
          )}

          <TextInput
            label="Email Address (Optional but recommended)"
            type="email"
            placeholder="you@example.com"
            value={data.email}
            onChange={(e) => update({ email: e.target.value })}
          />
        </div>
      </SectionCard>

      <StepNav onBack={() => {}} backDisabled onNext={onNext} nextDisabled={!canContinue} />
    </div>
  );
}
