"use client";

import { Heart, HeartPulse, Stethoscope } from "lucide-react";
import { NurseRegistrationData, SKILL_GROUPS } from "../_lib/types";
import { ChipToggle, SectionCard } from "./FormControls";
import { StepNav } from "./StepNav";

const GROUP_ICONS: Record<string, React.ReactNode> = {
  "Critical Care": <HeartPulse size={18} />,
  "General Nursing": <Stethoscope size={18} />,
  "Special Care": <Heart size={18} />,
};

export function Step4Skills({
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
  function toggleSkill(skill: string) {
    update({
      skills: data.skills.includes(skill)
        ? data.skills.filter((s) => s !== skill)
        : [...data.skills, skill],
    });
  }

  function toggleSelectAll(skills: readonly string[]) {
    const allSelected = skills.every((s) => data.skills.includes(s));
    update({
      skills: allSelected
        ? data.skills.filter((s) => !skills.includes(s))
        : [...data.skills, ...skills.filter((s) => !data.skills.includes(s))],
    });
  }

  const canContinue = data.skills.length > 0;

  return (
    <div className="space-y-5">
      {Object.entries(SKILL_GROUPS).map(([group, skills]) => {
        const allSelected = skills.every((s) => data.skills.includes(s));
        return (
          <SectionCard key={group} icon={GROUP_ICONS[group]} title={group} subtitle="Select all that apply">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => toggleSelectAll(skills)}
                className={
                  "inline-flex items-center gap-1.5 rounded-full border border-dashed px-3.5 py-1.5 text-sm font-semibold transition " +
                  (allSelected
                    ? "border-brand-600 bg-brand-50 text-brand-700"
                    : "border-neutral-300 bg-neutral-50 text-neutral-500 hover:border-brand-300 hover:text-brand-600")
                }
              >
                {allSelected ? "Clear All" : "Select All"}
              </button>
              {skills.map((skill) => (
                <ChipToggle
                  key={skill}
                  label={skill}
                  selected={data.skills.includes(skill)}
                  onToggle={() => toggleSkill(skill)}
                />
              ))}
            </div>
          </SectionCard>
        );
      })}
      <p className="text-xs text-neutral-400">{data.skills.length} skill(s) selected</p>
      <StepNav onBack={onBack} onNext={onNext} nextDisabled={!canContinue} />
    </div>
  );
}
