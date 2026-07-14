"use client";

import { useState } from "react";
import { ArrowRight, Headset } from "lucide-react";

const SERVICE_OPTIONS = [
  { emoji: "🏠", label: "Doctor Visit at Home" },
  { emoji: "👩‍⚕️", label: "Home Nursing" },
  { emoji: "🏥", label: "Affordable Surgery" },
  { emoji: "💪", label: "Physiotherapy" },
  { emoji: "🧪", label: "Lab Tests" },
  { emoji: "👴", label: "Elder Care" },
];

export function HeroForm() {
  const [service, setService] = useState(SERVICE_OPTIONS[0].label);

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 [box-shadow:0_16px_48px_rgba(0,0,0,0.2)] border border-white/20">
      <div className="text-[1.1rem] font-bold text-hblue mb-4 flex items-center gap-2">
        <Headset size={20} className="text-hgreen" /> What do you need today?
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {SERVICE_OPTIONS.map((opt) => (
          <label
            key={opt.label}
            className={
              "flex items-center gap-2 px-3 py-2.5 rounded-lg text-[0.85rem] font-medium cursor-pointer transition-all border-2 " +
              (service === opt.label ? "bg-hgreen-light border-hgreen text-htext" : "bg-hgrey border-transparent hover:bg-hblue-light hover:border-hblue-light")
            }
          >
            <input
              type="radio"
              name="service"
              checked={service === opt.label}
              onChange={() => setService(opt.label)}
              className="accent-hgreen w-4 h-4 shrink-0"
            />
            {opt.emoji} {opt.label}
          </label>
        ))}
      </div>

      <div className="mb-3">
        <label className="font-medium text-[0.8rem] text-htext-muted block mb-1">Full Name</label>
        <input
          type="text"
          placeholder="Your name"
          className="w-full px-3.5 py-3 border-[1.5px] border-hgrey-border rounded-lg text-[0.95rem] bg-hgrey focus:outline-none focus:border-hblue focus:bg-white transition-colors text-htext placeholder:text-htext-muted"
        />
      </div>
      <div className="mb-3">
        <label className="font-medium text-[0.8rem] text-htext-muted block mb-1">Mobile Number</label>
        <input
          type="tel"
          placeholder="10-digit mobile number"
          className="w-full px-3.5 py-3 border-[1.5px] border-hgrey-border rounded-lg text-[0.95rem] bg-hgrey focus:outline-none focus:border-hblue focus:bg-white transition-colors text-htext placeholder:text-htext-muted"
        />
      </div>
      <button className="w-full flex items-center justify-center gap-2 bg-hgreen text-white font-semibold text-[1rem] py-3.5 rounded-full mt-1 shadow-[0_4px_16px_rgba(0,168,107,0.3)] transition-all hover:bg-hgreen-dark hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,168,107,0.4)]">
        <ArrowRight size={16} /> Book Appointment
      </button>
    </div>
  );
}
