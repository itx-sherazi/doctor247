"use client";

import { AlarmClock, CalendarDays, Clock, PhoneCall } from "lucide-react";
import { NurseRegistrationData, ShiftPreference, WORKING_DAYS, WORKING_HOURS } from "../_lib/types";
import { ChipToggle, RadioCard, SectionCard } from "./FormControls";
import { StepNav } from "./StepNav";

const SHIFT_OPTIONS: { key: ShiftPreference; label: string; description: string }[] = [
  { key: "home-visit", label: "Home Visit", description: "Short scheduled visits" },
  { key: "12-hours", label: "12 Hours", description: "Half-day shift coverage" },
  { key: "24-hours", label: "24 Hours", description: "Full-day shift coverage" },
  { key: "live-in", label: "Live-in Nurse", description: "Extended stay with patient" },
];

export function Step7Availability({
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
  function toggleDay(day: string) {
    update({
      workingDays: data.workingDays.includes(day)
        ? data.workingDays.filter((d) => d !== day)
        : [...data.workingDays, day],
    });
  }

  function toggleHour(hour: string) {
    update({
      workingHours: data.workingHours.includes(hour)
        ? data.workingHours.filter((h) => h !== hour)
        : [...data.workingHours, hour],
    });
  }

  return (
    <div className="space-y-5">
      <SectionCard icon={<CalendarDays size={18} />} title="Working Days">
        <div className="flex flex-wrap gap-2">
          {WORKING_DAYS.map((day) => (
            <ChipToggle key={day} label={day} selected={data.workingDays.includes(day)} onToggle={() => toggleDay(day)} />
          ))}
        </div>
      </SectionCard>

      <SectionCard icon={<Clock size={18} />} title="Working Hours">
        <div className="flex flex-wrap gap-2">
          {WORKING_HOURS.map((hour) => (
            <ChipToggle key={hour} label={hour} selected={data.workingHours.includes(hour)} onToggle={() => toggleHour(hour)} />
          ))}
        </div>
      </SectionCard>

      <SectionCard icon={<AlarmClock size={18} />} title="Shift Preference">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SHIFT_OPTIONS.map((opt) => (
            <RadioCard
              key={opt.key}
              label={opt.label}
              description={opt.description}
              selected={data.shiftPreference === opt.key}
              onSelect={() => update({ shiftPreference: opt.key })}
            />
          ))}
        </div>
      </SectionCard>

      <SectionCard icon={<PhoneCall size={18} />} title="Emergency Calls" subtitle="Are you willing to accept urgent/emergency call requests?">
        <div className="grid grid-cols-2 gap-3">
          <RadioCard label="Yes" selected={data.emergencyCalls === "yes"} onSelect={() => update({ emergencyCalls: "yes" })} />
          <RadioCard label="No" selected={data.emergencyCalls === "no"} onSelect={() => update({ emergencyCalls: "no" })} />
        </div>
      </SectionCard>

      <StepNav onBack={onBack} onNext={onNext} />
    </div>
  );
}
