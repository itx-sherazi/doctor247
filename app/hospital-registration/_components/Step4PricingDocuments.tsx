"use client";

import { FileText } from "lucide-react";
import { HospitalRegistrationData, INSURANCE_OPTIONS, PARTNERSHIP_MODELS } from "../_lib/types";
import { Checkbox, SectionCard, Select, TextArea, TextInput } from "@/app/nurse-registration/_components/FormControls";
import { MultiFileDrop } from "./MultiFileDrop";
import { StepNav } from "./StepNav";

export function Step4PricingDocuments({
  data,
  update,
  onNext,
  onBack,
  submitting,
  error,
}: {
  data: HospitalRegistrationData;
  update: (patch: Partial<HospitalRegistrationData>) => void;
  onNext: () => void;
  onBack: () => void;
  submitting?: boolean;
  error?: string;
}) {
  function toggleInsurance(item: string) {
    update({
      insuranceEmpanelment: data.insuranceEmpanelment.includes(item)
        ? data.insuranceEmpanelment.filter((i) => i !== item)
        : [...data.insuranceEmpanelment, item],
    });
  }

  return (
    <div className="space-y-5">
      <SectionCard icon={<FileText size={18} />} title="Pricing" subtitle="Finalize your partnership with pricing details and document submission.">
        <div className="space-y-4">
          <Select
            label="Preferred Partnership Model"
            value={data.partnershipModel}
            onChange={(e) => update({ partnershipModel: e.target.value })}
          >
            <option value="">Select model</option>
            {PARTNERSHIP_MODELS.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </Select>
          <div>
            <p className="text-sm font-medium text-neutral-700 mb-1.5">Average Surgery Cost Range</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextInput
                label="Minimum (₹)"
                inputMode="numeric"
                placeholder="e.g. 50000"
                value={data.surgeryCostMin}
                onChange={(e) => update({ surgeryCostMin: e.target.value.replace(/\D/g, "") })}
              />
              <TextInput
                label="Maximum (₹)"
                inputMode="numeric"
                placeholder="e.g. 500000"
                value={data.surgeryCostMax}
                onChange={(e) => update({ surgeryCostMax: e.target.value.replace(/\D/g, "") })}
              />
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Insurance Empanelment">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {INSURANCE_OPTIONS.map((item) => (
            <Checkbox
              key={item}
              label={item}
              checked={data.insuranceEmpanelment.includes(item)}
              onChange={() => toggleInsurance(item)}
            />
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Documents">
        <MultiFileDrop
          label="Upload Required Documents"
          note="Upload: Registration Certificate, PAN, GST, NABH Certificate, IMA Registration, etc."
          files={data.documents}
          existingFiles={data.existingDocuments}
          onAdd={(files) => update({ documents: [...data.documents, ...files] })}
          onRemove={(index) => update({ documents: data.documents.filter((_, i) => i !== index) })}
        />
        <div className="mt-4">
          <TextArea
            label="Additional Notes / Special Requests"
            rows={3}
            placeholder="Any additional information you'd like to share with the Doctor247 team"
            value={data.additionalNotes}
            onChange={(e) => update({ additionalNotes: e.target.value })}
          />
        </div>
      </SectionCard>

      <SectionCard title="Agreement">
        <Checkbox
          label={
            <>
              I confirm that all information provided is accurate and complete. I agree to the{" "}
              <span className="font-semibold text-brand-600 underline">Terms &amp; Conditions</span> of partnership with
              Doctor247.
            </>
          }
          checked={data.agreeTerms}
          onChange={(checked) => update({ agreeTerms: checked })}
        />
      </SectionCard>

      {error && (
        <div className="rounded-lg bg-danger-50 px-4 py-2.5 text-sm font-medium text-danger-600">{error}</div>
      )}

      <StepNav
        onBack={onBack}
        onNext={onNext}
        nextDisabled={submitting}
        nextLabel={submitting ? "Submitting…" : "Submit Application"}
      />
    </div>
  );
}
