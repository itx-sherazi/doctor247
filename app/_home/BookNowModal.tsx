"use client";

import { useState } from "react";
import { CalendarCheck, PhoneCall, Stethoscope, UserCheck, X } from "lucide-react";

const STEPS = [
  { icon: PhoneCall, text: "Once you share your details, our care coordinator will get in touch with you." },
  { icon: Stethoscope, text: "The coordinator will understand your symptoms and health condition in detail." },
  { icon: UserCheck, text: "Your consultation will be scheduled at the earliest." },
];

const STATS = [
  { value: "3M+", label: "Happy Patients" },
  { value: "150+", label: "Clinics" },
  { value: "30+", label: "Cities" },
];

export function BookNowModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[820px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white [box-shadow:0_24px_64px_rgba(0,0,0,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-hblue to-hblue-dark px-6 sm:px-8 py-5 rounded-t-2xl">
          <h2 className="text-center text-white font-extrabold text-[1.05rem] sm:text-[1.3rem]">
            Avail <span className="text-amber-400">FREE</span> Doctor Consultation
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 p-6 sm:p-8">
          {/* Left */}
          <div className="sm:pr-8 sm:border-r border-hgrey-border">
            <h3 className="font-extrabold text-[1.15rem] text-htext mb-1">Simplifying Surgery Experience</h3>
            <p className="text-htext-muted text-[0.9rem] mb-5">
              Consult with our expert surgeon for more than 50+ diseases
            </p>

            <h4 className="font-bold text-[0.9rem] text-htext mb-3">Next Steps</h4>
            <div className="mb-6">
              {STEPS.map((step, i) => (
                <div key={step.text} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 shrink-0 rounded-full border-2 border-hblue/25 flex items-center justify-center text-hblue bg-hblue-light">
                      <step.icon size={15} />
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="w-px flex-1 min-h-[18px] border-l border-dashed border-hgrey-border my-1" />
                    )}
                  </div>
                  <p className="text-[0.85rem] text-htext-muted pt-2 pb-2 leading-snug">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 bg-hblue-light rounded-xl p-4 gap-2">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-extrabold text-[1.15rem] sm:text-[1.3rem] text-htext">{s.value}</p>
                  <p className="text-[0.72rem] text-htext-muted mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="flex flex-col gap-3.5">
            <input
              type="text"
              placeholder="Patient Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-[1.5px] border-hgrey-border bg-hgrey text-[0.95rem] text-htext placeholder:text-htext-muted focus:outline-none focus:border-hblue focus:bg-white transition-colors"
            />
            <input
              type="tel"
              placeholder="Enter 10 Digit mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
              className="w-full px-4 py-3 rounded-xl border-[1.5px] border-hgrey-border bg-hgrey text-[0.95rem] text-htext placeholder:text-htext-muted focus:outline-none focus:border-hblue focus:bg-white transition-colors"
            />

            <div className="relative mt-1">
              <span className="absolute -top-3 right-3 bg-hgreen text-white text-[0.7rem] font-semibold px-3 py-1 rounded-full shadow-sm z-10">
                Free Consultation
              </span>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-amber-500 text-white font-bold py-3.5 rounded-xl hover:bg-amber-600 transition-colors"
              >
                <CalendarCheck size={17} /> Book Free Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
