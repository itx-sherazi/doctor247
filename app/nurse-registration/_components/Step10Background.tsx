"use client";

import { ShieldCheck, ShieldQuestion } from "lucide-react";
import { NurseRegistrationData } from "../_lib/types";
import { Checkbox, RadioCard, SectionCard } from "./FormControls";
import { StepNav } from "./StepNav";

function YesNo({
  question,
  value,
  onChange,
}: {
  question: string;
  value: "" | "yes" | "no";
  onChange: (v: "yes" | "no") => void;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-neutral-700 mb-2">{question}</p>
      <div className="grid grid-cols-2 gap-3">
        <RadioCard label="Yes" selected={value === "yes"} onSelect={() => onChange("yes")} />
        <RadioCard label="No" selected={value === "no"} onSelect={() => onChange("no")} />
      </div>
    </div>
  );
}

export function Step10Background({
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
  return (
    <div className="space-y-5">
      <SectionCard
        icon={<ShieldQuestion size={18} />}
        title="Background Verification"
        subtitle="Please answer honestly  false declarations will lead to disqualification or termination"
      >
        <div className="space-y-5">
          <YesNo
            question="Have you ever been terminated from a job?"
            value={data.everTerminated}
            onChange={(v) => update({ everTerminated: v })}
          />
          <YesNo
            question="Do you have any ongoing or past criminal cases?"
            value={data.criminalCases}
            onChange={(v) => update({ criminalCases: v })}
          />
          <YesNo
            question="Are there any ongoing disciplinary proceedings against you?"
            value={data.disciplinaryProceedings}
            onChange={(v) => update({ disciplinaryProceedings: v })}
          />
          <YesNo
            question="Are all documents submitted by you genuine and accurate?"
            value={data.documentsGenuine}
            onChange={(v) => update({ documentsGenuine: v })}
          />
        </div>
      </SectionCard>

      <SectionCard icon={<ShieldCheck size={18} />} title="Authorization">
        <Checkbox
          label="I authorize Doctor247 to verify my credentials and conduct background verification, including police verification, reference checks, and validation of submitted documents."
          checked={data.authorizeBackgroundCheck}
          onChange={(checked) => update({ authorizeBackgroundCheck: checked })}
        />
      </SectionCard>

      <StepNav onBack={onBack} onNext={onNext} />
    </div>
  );
}
