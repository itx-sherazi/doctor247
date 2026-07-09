"use client";

import { Languages } from "lucide-react";
import { LANGUAGES, NurseRegistrationData } from "../_lib/types";
import { ChipToggle, SectionCard, TextInput } from "./FormControls";
import { StepNav } from "./StepNav";

export function Step5Languages({
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
  function toggleLanguage(lang: string) {
    update({
      languages: data.languages.includes(lang)
        ? data.languages.filter((l) => l !== lang)
        : [...data.languages, lang],
    });
  }

  const canContinue = data.languages.length > 0 || data.otherLanguage.trim().length > 0;

  return (
    <div className="space-y-5">
      <SectionCard icon={<Languages size={18} />} title="Languages Spoken" subtitle="Select all languages you can communicate in with patients">
        <div className="flex flex-wrap gap-2 mb-4">
          {LANGUAGES.map((lang) => (
            <ChipToggle
              key={lang}
              label={lang}
              selected={data.languages.includes(lang)}
              onToggle={() => toggleLanguage(lang)}
            />
          ))}
        </div>
        <TextInput
          label="Other"
          placeholder="Any other language"
          value={data.otherLanguage}
          onChange={(e) => update({ otherLanguage: e.target.value })}
        />
      </SectionCard>
      <StepNav onBack={onBack} onNext={onNext} nextDisabled={!canContinue} />
    </div>
  );
}
