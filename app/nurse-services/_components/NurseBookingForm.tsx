"use client";

import { useState } from "react";
import { Banknote, CheckCircle2, Clock, Lock, Send, UserCheck } from "lucide-react";

const SERVICES = [
  "ICU / Critical Care Nursing",
  "Elderly Care / Senior Care",
  "Post-Surgical Care",
  "Wound Dressing & Injection",
  "Dementia / Alzheimer's Care",
  "24/7 Live-in Caregiver",
  "Palliative Care",
  "Newborn & Mother Care",
  "Companion Care",
];

export function NurseBookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section id="booking" className="bg-hgrey py-12 sm:py-16">
      <div className="mx-auto max-w-[700px] px-5">
        <h2 className="text-[1.6rem] sm:text-[2rem] font-extrabold text-center text-hblue mb-1">
          Book Your <span className="text-hgreen">Nurse</span> in 2 Minutes
        </h2>
        <p className="text-center text-htext-muted mb-6">Fill in your details and we&apos;ll confirm within 30 minutes.</p>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)]">
          <div className="grid sm:grid-cols-2 gap-3.5">
            <input
              type="text"
              placeholder="Full Name *"
              required
              className="w-full px-4 py-3 border-[1.5px] border-hgrey-border rounded-lg text-[0.95rem] bg-hgrey focus:outline-none focus:border-hblue focus:bg-white transition-colors text-htext placeholder:text-htext-muted"
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              required
              className="w-full px-4 py-3 border-[1.5px] border-hgrey-border rounded-lg text-[0.95rem] bg-hgrey focus:outline-none focus:border-hblue focus:bg-white transition-colors text-htext placeholder:text-htext-muted"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-3.5 mt-3.5">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border-[1.5px] border-hgrey-border rounded-lg text-[0.95rem] bg-hgrey focus:outline-none focus:border-hblue focus:bg-white transition-colors text-htext placeholder:text-htext-muted"
            />
            <select
              required
              defaultValue=""
              className="w-full px-4 py-3 border-[1.5px] border-hgrey-border rounded-lg text-[0.95rem] bg-hgrey focus:outline-none focus:border-hblue focus:bg-white transition-colors text-htext"
            >
              <option value="" disabled>
                Select Service
              </option>
              {SERVICES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <textarea
            rows={3}
            placeholder="Tell us about your needs (patient age, condition, preferred timings, etc.)"
            className="w-full mt-3.5 px-4 py-3 border-[1.5px] border-hgrey-border rounded-lg text-[0.95rem] bg-hgrey focus:outline-none focus:border-hblue focus:bg-white transition-colors text-htext placeholder:text-htext-muted resize-none"
          />
          <button
            type="submit"
            className="w-full mt-5 flex items-center justify-center gap-2 bg-hblue text-white font-semibold text-[1rem] py-4 rounded-full shadow-[0_4px_16px_rgba(15,76,129,0.25)] hover:bg-hblue-dark hover:-translate-y-0.5 transition-all"
          >
            <Send size={17} /> Book Now  We&apos;ll Call You
          </button>

          {submitted && (
            <p className="flex items-center justify-center gap-1.5 text-center text-hgreen font-medium text-[0.9rem] mt-3">
              <CheckCircle2 size={16} /> Thank you! We&apos;ll call you within 30 minutes to confirm your booking.
            </p>
          )}

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-5 pt-5 border-t border-hgrey-border">
            <span className="flex items-center gap-1.5 text-[0.75rem] font-medium text-htext-muted">
              <Lock size={13} className="text-hgreen" /> Secure &amp; Private
            </span>
            <span className="flex items-center gap-1.5 text-[0.75rem] font-medium text-htext-muted">
              <UserCheck size={13} className="text-hgreen" /> Verified Nurses
            </span>
            <span className="flex items-center gap-1.5 text-[0.75rem] font-medium text-htext-muted">
              <Clock size={13} className="text-hgreen" /> 24/7 Support
            </span>
            <span className="flex items-center gap-1.5 text-[0.75rem] font-medium text-htext-muted">
              <Banknote size={13} className="text-hgreen" /> No Hidden Charges
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
