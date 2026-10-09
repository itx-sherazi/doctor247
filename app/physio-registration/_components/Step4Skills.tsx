"use client";

import { Activity, Brain, Dumbbell, Heart, Wind } from "lucide-react";
import { PhysioRegistrationData, PHYSIO_SKILL_GROUPS } from "../_lib/types";
import { ChipToggle, SectionCard } from "./FormControls";
import { StepNav } from "./StepNav";

const GROUP_ICONS: Record<string, React.ReactNode> = {
  "Orthopaedic Rehab": <Dumbbell size={18} />,
  "Neuro Rehab": <Brain size={18} />,
  "Cardio-Respiratory": <Wind size={18} />,
  "Geriatric & Others": <Heart size={18} />,
};

export function Step4Skills({
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
  function toggleSkill(skill: string) {
    update({
      specializations: data.specializations.includes(skill)
        ? data.specializations.filter((s) => s !== skill)
        : [...data.specializations, skill],
    });
  }

  function toggleSelectAll(skills: readonly string[]) {
    const allSelected = skills.every((s) => data.specializations.includes(s));
    update({
      specializations: allSelected
        ? data.specializations.filter((s) => !skills.includes(s))
        : [
            ...data.specializations,
            ...skills.filter((s) => !data.specializations.includes(s)),
          ],
    });
  }

  const canContinue = data.specializations.length > 0;

  return (
    <div className="space-y-5">
      {Object.entries(PHYSIO_SKILL_GROUPS).map(([group, skills]) => {
        const allSelected = skills.every((s) => data.specializations.includes(s));
        return (
          <SectionCard
            key={group}
            icon={GROUP_ICONS[group] ?? <Activity size={18} />}
            title={group}
            subtitle="Select all that apply"
          >
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
                  selected={data.specializations.includes(skill)}
                  onToggle={() => toggleSkill(skill)}
                />
              ))}
            </div>
          </SectionCard>
        );
      })}
      <p className="text-xs text-neutral-400">
        {data.specializations.length} specialization(s) selected
      </p>
      <StepNav onBack={onBack} onNext={onNext} nextDisabled={!canContinue} />
    </div>
  );
}