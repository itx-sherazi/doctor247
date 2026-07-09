"use client";

import { Briefcase, GraduationCap, IdCard, TrendingUp } from "lucide-react";
import { EmploymentStatus, ExperienceBand, NurseRegistrationData, QUALIFICATIONS } from "../_lib/types";
import { RadioCard, SectionCard, Select, TextArea, TextInput } from "./FormControls";
import { StepNav } from "./StepNav";

const EXPERIENCE_OPTIONS: { key: ExperienceBand; label: string }[] = [
  { key: "fresher", label: "Fresher" },
  { key: "1-3", label: "1–3 Years" },
  { key: "3-5", label: "3–5 Years" },
  { key: "5-10", label: "5–10 Years" },
  { key: "10+", label: "10+ Years" },
];

const EMPLOYMENT_OPTIONS: { key: EmploymentStatus; label: string }[] = [
  { key: "full-time", label: "Working Full Time" },
  { key: "part-time", label: "Working Part Time" },
  { key: "freelance", label: "Freelance" },
  { key: "not-working", label: "Not Working" },
];

export function Step3Professional({
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
  const canContinue =
    data.qualification !== "" &&
    data.registrationNumber.trim().length > 2 &&
    data.stateNursingCouncil.trim().length > 1 &&
    data.yearsOfExperience !== "" &&
    data.employmentStatus !== "";

  return (
    <div className="space-y-5">
      <SectionCard icon={<GraduationCap size={18} />} title="Qualification">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {QUALIFICATIONS.map((q) => (
            <RadioCard
              key={q}
              label={q}
              selected={data.qualification === q}
              onSelect={() => update({ qualification: q })}
            />
          ))}
        </div>
      </SectionCard>

      <SectionCard icon={<IdCard size={18} />} title="Registration Details">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            label="Nursing Council Registration Number"
            required
            value={data.registrationNumber}
            onChange={(e) => update({ registrationNumber: e.target.value })}
          />
          <TextInput
            label="State Nursing Council"
            required
            placeholder="e.g. Karnataka Nursing Council"
            value={data.stateNursingCouncil}
            onChange={(e) => update({ stateNursingCouncil: e.target.value })}
          />
          <TextInput
            label="Registration Expiry Date (if applicable)"
            type="date"
            value={data.registrationExpiryDate}
            onChange={(e) => update({ registrationExpiryDate: e.target.value })}
          />
        </div>
      </SectionCard>

      <SectionCard icon={<TrendingUp size={18} />} title="Years of Experience">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {EXPERIENCE_OPTIONS.map((opt) => (
            <RadioCard
              key={opt.key}
              label={opt.label}
              selected={data.yearsOfExperience === opt.key}
              onSelect={() => update({ yearsOfExperience: opt.key })}
            />
          ))}
        </div>
      </SectionCard>

      <SectionCard icon={<Briefcase size={18} />} title="Current Employment Status">
        <div className="grid grid-cols-2 gap-3 mb-4">
          {EMPLOYMENT_OPTIONS.map((opt) => (
            <RadioCard
              key={opt.key}
              label={opt.label}
              selected={data.employmentStatus === opt.key}
              onSelect={() => update({ employmentStatus: opt.key })}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            label="Current Hospital/Clinic"
            value={data.currentEmployer}
            onChange={(e) => update({ currentEmployer: e.target.value })}
          />
          <TextArea
            label="Previous Employers (optional)"
            rows={1}
            value={data.previousEmployers}
            onChange={(e) => update({ previousEmployers: e.target.value })}
          />
        </div>
      </SectionCard>

      <StepNav onBack={onBack} onNext={onNext} nextDisabled={!canContinue} />
    </div>
  );
}
