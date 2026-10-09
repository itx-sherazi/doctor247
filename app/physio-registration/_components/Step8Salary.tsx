"use client";

import { Banknote, Landmark } from "lucide-react";
import { PhysioRegistrationData } from "../_lib/types";
import { SectionCard, TextInput } from "./FormControls";
import { StepNav } from "./StepNav";

function RupeeInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 mb-1.5">{label}</label>
      <div className="flex items-center rounded-lg border border-neutral-200 bg-white shadow-sm focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-100">
        <span className="pl-3.5 text-sm text-neutral-400">₹</span>
        <input
          inputMode="numeric"
          placeholder="0"
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/\D/g, ""))}
          className="w-full rounded-lg bg-transparent px-2 py-2.5 text-sm text-neutral-900 focus:outline-none"
        />
      </div>
    </div>
  );
}

export function Step8Salary({
  data,
  update,
  onNext,
  onBack,
}: {
  data: PhysioRegistrationData;
  update: (patch: Partial<PhysioRegistrationData>) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="space-y-5">
      <SectionCard
        icon={<Banknote size={18} />}
        title="Consultation Fees"
        subtitle="Fill in the fees relevant to the session types you offer"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RupeeInput
            label="Home Visit (assessment)"
            value={data.feeHomeVisit}
            onChange={(v) => update({ feeHomeVisit: v })}
          />
          <RupeeInput
            label="45-Minute Session"
            value={data.fee45Min}
            onChange={(v) => update({ fee45Min: v })}
          />
          <RupeeInput
            label="60-Minute Session"
            value={data.fee60Min}
            onChange={(v) => update({ fee60Min: v })}
          />
          <RupeeInput
            label="Monthly Package"
            value={data.feeMonthly}
            onChange={(v) => update({ feeMonthly: v })}
          />
        </div>
      </SectionCard>

      <SectionCard
        icon={<Landmark size={18} />}
        title="Bank Details"
        subtitle="Needed to process your payments"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            label="Account Holder Name"
            value={data.bankAccountName}
            onChange={(e) => update({ bankAccountName: e.target.value })}
          />
          <TextInput
            label="Bank Account Number"
            value={data.bankAccountNumber}
            onChange={(e) => update({ bankAccountNumber: e.target.value.replace(/\D/g, "") })}
          />
          <TextInput
            label="IFSC Code"
            maxLength={11}
            value={data.bankIfsc}
            onChange={(e) => update({ bankIfsc: e.target.value.toUpperCase() })}
          />
          <TextInput
            label="UPI ID"
            placeholder="name@upi"
            value={data.upiId}
            onChange={(e) => update({ upiId: e.target.value })}
          />
        </div>
      </SectionCard>

      <StepNav onBack={onBack} onNext={onNext} />
    </div>
  );
}