"use client";

import { Banknote, Landmark } from "lucide-react";
import { NurseRegistrationData } from "../_lib/types";
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
  data: NurseRegistrationData;
  update: (patch: Partial<NurseRegistrationData>) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const hasRate =
    data.rateHomeVisit || data.rate12Hours || data.rate24Hours || data.rateMonthly;
  const canContinue =
    Boolean(hasRate) &&
    (data.upiId.trim().length > 3 || (data.bankAccountNumber.trim().length > 4 && data.bankIfsc.trim().length >= 11));

  return (
    <div className="space-y-5">
      <SectionCard icon={<Banknote size={18} />} title="Expected Rate" subtitle="Fill in the rates relevant to the shift types you're offering">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RupeeInput label="Home Visit" value={data.rateHomeVisit} onChange={(v) => update({ rateHomeVisit: v })} />
          <RupeeInput label="12 Hours" value={data.rate12Hours} onChange={(v) => update({ rate12Hours: v })} />
          <RupeeInput label="24 Hours" value={data.rate24Hours} onChange={(v) => update({ rate24Hours: v })} />
          <RupeeInput label="Monthly Salary" value={data.rateMonthly} onChange={(v) => update({ rateMonthly: v })} />
        </div>
      </SectionCard>

      <SectionCard icon={<Landmark size={18} />} title="Bank Details" subtitle="Needed to process your payments">
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

      <StepNav onBack={onBack} onNext={onNext} nextDisabled={!canContinue} />
    </div>
  );
}
