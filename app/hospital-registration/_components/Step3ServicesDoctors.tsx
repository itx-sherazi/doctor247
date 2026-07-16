"use client";

import { Stethoscope } from "lucide-react";
import { ACCREDITATION_OPTIONS, HospitalRegistrationData, SPECIALITY_OPTIONS } from "../_lib/types";
import { Checkbox, SectionCard, TextArea, TextInput } from "@/app/nurse-registration/_components/FormControls";
import { StepNav } from "./StepNav";

export function Step3ServicesDoctors({
  data,
  update,
  onNext,
  onBack,
}: {
  data: HospitalRegistrationData;
  update: (patch: Partial<HospitalRegistrationData>) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  function toggleSpeciality(item: string) {
    update({
      specialities: data.specialities.includes(item)
        ? data.specialities.filter((i) => i !== item)
        : [...data.specialities, item],
    });
  }

  function toggleAllSpecialities() {
    const allSelected = SPECIALITY_OPTIONS.every((i) => data.specialities.includes(i));
    update({ specialities: allSelected ? [] : [...SPECIALITY_OPTIONS] });
  }

  function toggleAccreditation(item: string) {
    update({
      accreditations: data.accreditations.includes(item)
        ? data.accreditations.filter((i) => i !== item)
        : [...data.accreditations, item],
    });
  }

  function toggleAllAccreditations() {
    const allSelected = ACCREDITATION_OPTIONS.every((i) => data.accreditations.includes(i));
    update({ accreditations: allSelected ? [] : [...ACCREDITATION_OPTIONS] });
  }

  const allSpecialitiesSelected = SPECIALITY_OPTIONS.every((i) => data.specialities.includes(i));
  const allAccreditationsSelected = ACCREDITATION_OPTIONS.every((i) => data.accreditations.includes(i));

  return (
    <div className="space-y-5">
      <SectionCard icon={<Stethoscope size={18} />} title="Primary Specialities" subtitle="Select all that apply">
        <div className="mb-3">
          <button
            type="button"
            onClick={toggleAllSpecialities}
            className={
              "inline-flex items-center gap-1.5 rounded-full border border-dashed px-3.5 py-1.5 text-sm font-semibold transition " +
              (allSpecialitiesSelected
                ? "border-brand-600 bg-brand-50 text-brand-700"
                : "border-neutral-300 bg-neutral-50 text-neutral-500 hover:border-brand-300 hover:text-brand-600")
            }
          >
            {allSpecialitiesSelected ? "Clear All" : "Select All"}
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {SPECIALITY_OPTIONS.map((item) => (
            <Checkbox
              key={item}
              label={item}
              checked={data.specialities.includes(item)}
              onChange={() => toggleSpeciality(item)}
            />
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Doctors & Surgeries">
        <div className="space-y-4">
          <TextInput
            label="Number of Consultants / Doctors"
            required
            inputMode="numeric"
            placeholder="e.g. 50"
            value={data.consultantCount}
            onChange={(e) => update({ consultantCount: e.target.value.replace(/\D/g, "") })}
          />
          <TextArea
            label="Doctor Speciality List (JSON Format)"
            rows={3}
            placeholder='[{"name":"Dr. John Doe","speciality":"Cardiology","experience":"15 years"}]'
            value={data.doctorList}
            onChange={(e) => update({ doctorList: e.target.value })}
          />
          <TextArea
            label="Surgeries Performed"
            rows={3}
            placeholder="List the major surgeries your hospital performs (e.g. Knee Replacement, CABG, Hernia Repair, etc.)"
            value={data.surgeriesPerformed}
            onChange={(e) => update({ surgeriesPerformed: e.target.value })}
          />
        </div>
      </SectionCard>

      <SectionCard title="Accreditations & Certifications">
        <div className="mb-3">
          <button
            type="button"
            onClick={toggleAllAccreditations}
            className={
              "inline-flex items-center gap-1.5 rounded-full border border-dashed px-3.5 py-1.5 text-sm font-semibold transition " +
              (allAccreditationsSelected
                ? "border-brand-600 bg-brand-50 text-brand-700"
                : "border-neutral-300 bg-neutral-50 text-neutral-500 hover:border-brand-300 hover:text-brand-600")
            }
          >
            {allAccreditationsSelected ? "Clear All" : "Select All"}
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {ACCREDITATION_OPTIONS.map((item) => (
            <Checkbox
              key={item}
              label={item}
              checked={data.accreditations.includes(item)}
              onChange={() => toggleAccreditation(item)}
            />
          ))}
        </div>
      </SectionCard>

      <StepNav onBack={onBack} onNext={onNext} />
    </div>
  );
}
