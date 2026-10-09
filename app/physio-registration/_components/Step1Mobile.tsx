"use client";

import { useState } from "react";
import { CheckCircle2, Smartphone } from "lucide-react";
import { PhysioRegistrationData } from "../_lib/types";
import { SectionCard, TextInput } from "./FormControls";
import { StepNav } from "./StepNav";

export function Step1Mobile({
  data,
  update,
  onNext,
}: {
  data: PhysioRegistrationData;
  update: (patch: Partial<PhysioRegistrationData>) => void;
  onNext: () => void;
}) {
  const [otpSent, setOtpSent] = useState(false);
  const [otpInput, setOtpInput] = useState("");
  const [otpError, setOtpError] = useState("");
  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);

  const mobileValid = /^[6-9]\d{9}$/.test(data.mobileNumber);

  async function sendOtp() {
    if (!mobileValid || sending) return;
    setSending(true);
    setOtpError("");
    try {
      const res = await fetch("/api/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber: data.mobileNumber }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to send OTP");
      setOtpSent(true);
    } catch (error) {
      setOtpError(error instanceof Error ? error.message : "Failed to send OTP. Please try again.");
    } finally {
      setSending(false);
    }
  }

  async function verifyOtp() {
    if (verifying) return;
    setVerifying(true);
    setOtpError("");
    try {
      const res = await fetch("/api/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber: data.mobileNumber, otp: otpInput.trim() }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Incorrect OTP");
      update({ otpVerified: true });

      const formData = new FormData();
      formData.append("payload", JSON.stringify({ mobileNumber: data.mobileNumber }));
      fetch("/api/physio-profile", { method: "PATCH", body: formData }).catch(() => {});

      onNext();
    } catch (error) {
      setOtpError(error instanceof Error ? error.message : "Incorrect OTP. Please try again.");
    } finally {
      setVerifying(false);
    }
  }

  const canContinue = data.otpVerified;

  return (
    <div className="space-y-5">
      <SectionCard
        icon={<Smartphone size={18} />}
        title="Verify your mobile number"
        subtitle="We use this to keep your account secure and to contact you about session requests."
      >
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                Mobile Number<span className="text-danger-500 ml-0.5">*</span>
              </label>
              <div className="flex items-stretch rounded-lg border border-neutral-200 bg-white shadow-sm focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-100 overflow-hidden">
                <span className="flex items-center px-3.5 bg-neutral-50 border-r border-neutral-200 text-[16px] sm:text-sm font-medium text-neutral-600">
                  +91
                </span>
                <input
                  type="text"
                  required
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="98765 43210"
                  value={data.mobileNumber}
                  disabled={data.otpVerified}
                  onChange={(e) =>
                    update({ mobileNumber: e.target.value.replace(/\D/g, "").slice(0, 10) })
                  }
                  className="w-full px-3.5 py-2.5 text-[16px] sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none disabled:bg-neutral-50"
                />
              </div>
            </div>
            <button
              type="button"
              disabled={!mobileValid || data.otpVerified || sending}
              onClick={sendOtp}
              className="mb-0 h-[42px] shrink-0 rounded-lg bg-red-600 px-4 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-400"
            >
              {sending ? "Sending…" : otpSent ? "Resend OTP" : "Send OTP"}
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
                  disabled={verifying || otpInput.trim().length < 4}
                  onClick={verifyOtp}
                  className="mb-0 h-[42px] shrink-0 rounded-lg bg-brand-600 px-4 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-400"
                >
                  {verifying ? "Verifying…" : "Verify"}
                </button>
              </div>
              {otpError && <p className="text-xs text-danger-600 mt-2">{otpError}</p>}
              <p className="text-xs text-neutral-400 mt-2">
                We&apos;ve sent a 6-digit code to your WhatsApp number.
              </p>
            </div>
          )}

          {data.otpVerified && (
            <div className="flex items-center gap-2 rounded-lg bg-success-50 px-4 py-2.5 text-sm font-medium text-success-600">
              <CheckCircle2 size={16} /> Mobile number verified
            </div>
          )}
        </div>
      </SectionCard>

      <StepNav onBack={() => {}} backDisabled onNext={onNext} nextDisabled={!canContinue} />
    </div>
  );
}