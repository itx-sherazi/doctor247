"use client";

import { MapPin, Phone, User } from "lucide-react";
import { NurseRegistrationData } from "../_lib/types";
import { Checkbox, FileDrop, SectionCard, Select, TextArea, TextInput } from "./FormControls";
import { StepNav } from "./StepNav";

export function Step2Personal({
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
      <SectionCard icon={<User size={18} />} title="Basic Information">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            label="Full Name"
            required
            placeholder="As per Aadhaar"
            value={data.fullName}
            onChange={(e) => update({ fullName: e.target.value })}
          />
          <Select
            label="Gender"
            required
            value={data.gender}
            onChange={(e) => update({ gender: e.target.value as NurseRegistrationData["gender"] })}
          >
            <option value="">Select</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </Select>
          <TextInput
            label="Date of Birth"
            required
            type="date"
            value={data.dob}
            onChange={(e) => update({ dob: e.target.value })}
          />
          <FileDrop
            label="Profile Photo"
            file={data.profilePhoto}
            onFile={(file) => update({ profilePhoto: file })}
          />
          <TextInput
            label="Aadhaar Number"
            inputMode="numeric"
            maxLength={12}
            placeholder="XXXX XXXX XXXX"
            value={data.aadhaarNumber}
            onChange={(e) => update({ aadhaarNumber: e.target.value.replace(/\D/g, "").slice(0, 12) })}
          />
          <TextInput
            label="PAN Number"
            maxLength={10}
            placeholder="ABCDE1234F"
            value={data.panNumber}
            onChange={(e) => update({ panNumber: e.target.value.toUpperCase().slice(0, 10) })}
          />
        </div>
      </SectionCard>

      <SectionCard icon={<MapPin size={18} />} title="Address">
        <div className="space-y-4">
          <TextArea
            label="Permanent Address"
            required
            rows={2}
            value={data.permanentAddress}
            onChange={(e) => update({ permanentAddress: e.target.value })}
          />
          <Checkbox
            label="Current address is same as permanent address"
            checked={data.sameAsPermanent}
            onChange={(checked) =>
              update({
                sameAsPermanent: checked,
                currentAddress: checked ? data.permanentAddress : data.currentAddress,
              })
            }
          />
          {!data.sameAsPermanent && (
            <TextArea
              label="Current Address"
              rows={2}
              value={data.currentAddress}
              onChange={(e) => update({ currentAddress: e.target.value })}
            />
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextInput label="City" required value={data.city} onChange={(e) => update({ city: e.target.value })} />
            <TextInput
              label="PIN Code"
              required
              inputMode="numeric"
              maxLength={6}
              value={data.pinCode}
              onChange={(e) => update({ pinCode: e.target.value.replace(/\D/g, "").slice(0, 6) })}
            />
          </div>
        </div>
      </SectionCard>

      <SectionCard icon={<Phone size={18} />} title="Emergency Contact">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            label="Emergency Contact Name"
            value={data.emergencyContactName}
            onChange={(e) => update({ emergencyContactName: e.target.value })}
          />
          <TextInput
            label="Emergency Contact Number"
            inputMode="numeric"
            maxLength={10}
            value={data.emergencyContactNumber}
            onChange={(e) => update({ emergencyContactNumber: e.target.value.replace(/\D/g, "").slice(0, 10) })}
          />
        </div>
      </SectionCard>

      <StepNav onBack={onBack} onNext={onNext} />
    </div>
  );
}
