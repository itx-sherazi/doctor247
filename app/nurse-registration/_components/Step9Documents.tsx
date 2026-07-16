"use client";

import { FileText } from "lucide-react";
import { DOCUMENT_TYPES, NurseRegistrationData } from "../_lib/types";
import { FileDrop, SectionCard } from "./FormControls";
import { StepNav } from "./StepNav";

export function Step9Documents({
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
      <SectionCard icon={<FileText size={18} />} title="Upload Documents" subtitle="Clear photos or scans are accepted (JPG, PNG, PDF)">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DOCUMENT_TYPES.map((doc) => (
            <FileDrop
              key={doc.key}
              label={doc.label}
              required={doc.required}
              note={"note" in doc ? doc.note : undefined}
              file={data.documents[doc.key]}
              onFile={(file) => update({ documents: { ...data.documents, [doc.key]: file } })}
            />
          ))}
        </div>
      </SectionCard>
      <StepNav onBack={onBack} onNext={onNext} />
    </div>
  );
}
