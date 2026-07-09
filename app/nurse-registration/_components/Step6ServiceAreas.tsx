"use client";

import { useState } from "react";
import { MapPinned } from "lucide-react";
import { NurseRegistrationData, SERVICE_AREAS } from "../_lib/types";
import { ChipToggle, SectionCard, TextInput } from "./FormControls";
import { StepNav } from "./StepNav";

export function Step6ServiceAreas({
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
  const [customArea, setCustomArea] = useState("");
  const customAreas = data.serviceAreas.filter((a) => !(SERVICE_AREAS as readonly string[]).includes(a));

  function toggleArea(area: string) {
    update({
      serviceAreas: data.serviceAreas.includes(area)
        ? data.serviceAreas.filter((a) => a !== area)
        : [...data.serviceAreas, area],
    });
  }

  function addCustomArea() {
    const trimmed = customArea.trim();
    if (trimmed && !data.serviceAreas.includes(trimmed)) {
      update({ serviceAreas: [...data.serviceAreas, trimmed] });
      setCustomArea("");
    }
  }

  const canContinue = data.serviceAreas.length > 0;

  return (
    <div className="space-y-5">
      <SectionCard icon={<MapPinned size={18} />} title="Select Service Areas" subtitle="Choose the areas where you're available to take home visits">
        <div className="flex flex-wrap gap-2 mb-4">
          {SERVICE_AREAS.map((area) => (
            <ChipToggle key={area} label={area} selected={data.serviceAreas.includes(area)} onToggle={() => toggleArea(area)} />
          ))}
          {customAreas.map((area) => (
            <ChipToggle key={area} label={area} selected onToggle={() => toggleArea(area)} />
          ))}
        </div>
        <div className="flex gap-2 items-end">
          <div className="flex-1">
            <TextInput
              label="Add another area"
              placeholder="e.g. Bellandur"
              value={customArea}
              onChange={(e) => setCustomArea(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addCustomArea();
                }
              }}
            />
          </div>
          <button
            type="button"
            onClick={addCustomArea}
            className="mb-0 h-[42px] shrink-0 rounded-lg bg-brand-50 px-4 text-sm font-semibold text-brand-700 transition hover:bg-brand-100"
          >
            Add
          </button>
        </div>
      </SectionCard>
      <StepNav onBack={onBack} onNext={onNext} nextDisabled={!canContinue} />
    </div>
  );
}
