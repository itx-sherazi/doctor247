"use client";

import { Building2, MapPin, User } from "lucide-react";
import { HospitalRegistrationData, HOSPITAL_TYPES, OWNERSHIP_TYPES } from "../_lib/types";
import { SectionCard, Select, TextArea, TextInput } from "@/app/nurse-registration/_components/FormControls";
import { StepNav } from "./StepNav";

export function Step1HospitalInfo({
  data,
  update,
  onNext,
}: {
  data: HospitalRegistrationData;
  update: (patch: Partial<HospitalRegistrationData>) => void;
  onNext: () => void;
}) {
  return (
    <div className="space-y-5">
      <SectionCard icon={<Building2 size={18} />} title="Hospital Information" subtitle="Basic details about your hospital for partnership registration.">
        <div className="space-y-4">
          <TextInput
            label="Hospital Name"
            required
            placeholder="e.g. Apollo Hospitals, Bangalore"
            value={data.hospitalName}
            onChange={(e) => update({ hospitalName: e.target.value })}
          />
          <TextInput
            label="Hospital Registration / License Number"
            required
            placeholder="e.g. MH-12345-2024"
            value={data.registrationNumber}
            onChange={(e) => update({ registrationNumber: e.target.value })}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select
              label="Hospital Type"
              required
              value={data.hospitalType}
              onChange={(e) => update({ hospitalType: e.target.value })}
            >
              <option value="">Select hospital type</option>
              {HOSPITAL_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </Select>
            <Select
              label="Ownership Type"
              required
              value={data.ownershipType}
              onChange={(e) => update({ ownershipType: e.target.value })}
            >
              <option value="">Select ownership type</option>
              {OWNERSHIP_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </Select>
          </div>
        </div>
      </SectionCard>

      <SectionCard icon={<MapPin size={18} />} title="Location">
        <div className="space-y-4">
          <TextArea
            label="Complete Address"
            required
            rows={2}
            placeholder="Street, Area, Landmark, City, State, PIN Code"
            value={data.address}
            onChange={(e) => update({ address: e.target.value })}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextInput label="City" required value={data.city} onChange={(e) => update({ city: e.target.value })} />
            <TextInput label="State" required value={data.state} onChange={(e) => update({ state: e.target.value })} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextInput
              label="PIN Code"
              required
              inputMode="numeric"
              maxLength={6}
              value={data.pinCode}
              onChange={(e) => update({ pinCode: e.target.value.replace(/\D/g, "").slice(0, 6) })}
            />
            <TextInput
              label="Google Maps Location (URL)"
              type="url"
              placeholder="Paste Google Maps link"
              value={data.mapsUrl}
              onChange={(e) => update({ mapsUrl: e.target.value })}
            />
          </div>
        </div>
      </SectionCard>

      <SectionCard icon={<User size={18} />} title="Contact Person Details">
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextInput
              label="Name"
              required
              placeholder="Full name"
              value={data.contactName}
              onChange={(e) => update({ contactName: e.target.value })}
            />
            <TextInput
              label="Designation"
              placeholder="e.g. Medical Superintendent"
              value={data.contactDesignation}
              onChange={(e) => update({ contactDesignation: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextInput
              label="Email"
              required
              type="email"
              placeholder="hospital@email.com"
              value={data.contactEmail}
              onChange={(e) => update({ contactEmail: e.target.value })}
            />
            <TextInput
              label="Phone"
              required
              inputMode="numeric"
              maxLength={10}
              placeholder="10-digit mobile"
              value={data.contactPhone}
              onChange={(e) => update({ contactPhone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
            />
          </div>
        </div>
      </SectionCard>

      <StepNav onBack={() => {}} backDisabled onNext={onNext} />
    </div>
  );
}
