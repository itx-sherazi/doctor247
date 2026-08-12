"use client";

import { AlertCircle, ScrollText } from "lucide-react";
import { NurseRegistrationData } from "../_lib/types";
import { Checkbox, SectionCard } from "./FormControls";
import { StepNav } from "./StepNav";

export function Step11Agreement({
  data,
  update,
  onNext,
  onBack,
  submitting,
  error,
}: {
  data: NurseRegistrationData;
  update: (patch: Partial<NurseRegistrationData>) => void;
  onNext: () => void;
  onBack: () => void;
  submitting?: boolean;
  error?: string;
}) {
  const canContinue =
    data.agreeConfidentiality &&
    data.agreeSOPs &&
    data.agreePaymentTerms &&
    data.agreeWearId &&
    data.agreeNoSoliciting;

  return (
    <div className="space-y-5">
      <SectionCard icon={<ScrollText size={18} />} title="Code of Conduct Agreement">
        <div className="space-y-3">
          <Checkbox
            label="I will maintain patient confidentiality."
            checked={data.agreeConfidentiality}
            onChange={(v) => update({ agreeConfidentiality: v })}
          />
          <Checkbox
            label="I will follow Doctor247 SOPs."
            checked={data.agreeSOPs}
            onChange={(v) => update({ agreeSOPs: v })}
          />
          <Checkbox
            label="I agree to the payment terms."
            checked={data.agreePaymentTerms}
            onChange={(v) => update({ agreePaymentTerms: v })}
          />
          <Checkbox
            label="I agree to wear my Doctor247 ID during visits."
            checked={data.agreeWearId}
            onChange={(v) => update({ agreeWearId: v })}
          />
          <Checkbox
            label="I will not directly solicit patients introduced by Doctor247."
            checked={data.agreeNoSoliciting}
            onChange={(v) => update({ agreeNoSoliciting: v })}
          />
        </div>
      </SectionCard>

      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-danger-50 px-4 py-2.5 text-sm font-medium text-danger-600">
          <AlertCircle size={16} /> {error}
        </div>
      )}

      <StepNav
        onBack={onBack}
        onNext={onNext}
        nextDisabled={submitting || !canContinue}
        nextLabel={submitting ? "Submitting…" : "Submit Application"}
      />
    </div>
  );
}
