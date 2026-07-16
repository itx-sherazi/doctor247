"use client";

import { Building2 } from "lucide-react";
import {
  AMBULANCE_OPTIONS,
  EMERGENCY_SERVICE_OPTIONS,
  HospitalRegistrationData,
  INFRASTRUCTURE_OPTIONS,
} from "../_lib/types";
import { Checkbox, SectionCard, Select, TextInput } from "@/app/nurse-registration/_components/FormControls";
import { StepNav } from "./StepNav";

export function Step2Infrastructure({
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
  function toggleInfra(item: string) {
    update({
      infrastructure: data.infrastructure.includes(item)
        ? data.infrastructure.filter((i) => i !== item)
        : [...data.infrastructure, item],
    });
  }

  return (
    <div className="space-y-5">
      <SectionCard icon={<Building2 size={18} />} title="Hospital Infrastructure" subtitle="Tell us about your hospital's facilities and capacity.">
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextInput
              label="Total Bed Capacity"
              required
              inputMode="numeric"
              placeholder="e.g. 100"
              value={data.totalBeds}
              onChange={(e) => update({ totalBeds: e.target.value.replace(/\D/g, "") })}
            />
            <TextInput
              label="ICU Beds"
              inputMode="numeric"
              placeholder="e.g. 20"
              value={data.icuBeds}
              onChange={(e) => update({ icuBeds: e.target.value.replace(/\D/g, "") })}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextInput
              label="NICU / PICU Beds"
              inputMode="numeric"
              placeholder="e.g. 10"
              value={data.nicuPicuBeds}
              onChange={(e) => update({ nicuPicuBeds: e.target.value.replace(/\D/g, "") })}
            />
            <TextInput
              label="Ventilators Available"
              inputMode="numeric"
              placeholder="e.g. 15"
              value={data.ventilators}
              onChange={(e) => update({ ventilators: e.target.value.replace(/\D/g, "") })}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextInput
              label="Operation Theatres"
              required
              inputMode="numeric"
              placeholder="e.g. 5"
              value={data.operationTheatres}
              onChange={(e) => update({ operationTheatres: e.target.value.replace(/\D/g, "") })}
            />
            <Select
              label="Emergency Services"
              value={data.emergencyServices}
              onChange={(e) => update({ emergencyServices: e.target.value })}
            >
              <option value="">Select</option>
              {EMERGENCY_SERVICE_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </Select>
          </div>
          <Select
            label="Ambulance Services"
            value={data.ambulanceServices}
            onChange={(e) => update({ ambulanceServices: e.target.value })}
          >
            <option value="">Select</option>
            {AMBULANCE_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </Select>
        </div>
      </SectionCard>

      <SectionCard title="Available Infrastructure" subtitle="Select all that apply">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {INFRASTRUCTURE_OPTIONS.map((item) => (
            <Checkbox
              key={item}
              label={item}
              checked={data.infrastructure.includes(item)}
              onChange={() => toggleInfra(item)}
            />
          ))}
        </div>
      </SectionCard>

      <StepNav onBack={onBack} onNext={onNext} />
    </div>
  );
}
