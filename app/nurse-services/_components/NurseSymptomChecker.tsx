"use client";

import { useState } from "react";

const OPTIONS = [
  { value: "elderly", label: "Elderly (65+) needing daily assistance" },
  { value: "post-surgery", label: "Post-surgery recovery" },
  { value: "icu", label: "ICU / critical care at home" },
  { value: "dementia", label: "Dementia / Alzheimer's patient" },
  { value: "newborn", label: "Newborn or mother care" },
  { value: "chronic", label: "Chronic illness / palliative care" },
  { value: "general", label: "General nursing (wound, medication, etc.)" },
];

const SUGGESTIONS: Record<string, string> = {
  elderly: "We recommend our Elderly Care package with daily assistance and medication management.",
  "post-surgery": "We recommend Post-Surgical Care with wound dressing, physiotherapy support, and pain management.",
  icu: "We offer ICU-level care at home with trained critical care nurses and monitoring equipment.",
  dementia: "Our Dementia Care program provides structured routines, memory support, and caregiver respite.",
  newborn: "We provide Newborn & Mother Care with lactation support, baby hygiene, and postpartum recovery.",
  chronic: "Our Palliative Care focuses on comfort, symptom management, and emotional support.",
  general: "We offer general nursing services including wound care, injections, and medication administration.",
};

export function NurseSymptomChecker() {
  const [choice, setChoice] = useState("");
  const [detail, setDetail] = useState("");
  const [result, setResult] = useState("");

  function handleCheck() {
    if (!choice) {
      setResult("Please select who needs care.");
      return;
    }
    let suggestion = SUGGESTIONS[choice] ?? "We will connect you with the right nurse. Please call us for personalized support.";
    if (detail.trim()) {
      suggestion += ` We noted: "${detail.trim()}" – we'll discuss this in detail when we call.`;
    }
    setResult(suggestion);
  }

  return (
    <section id="symptom-checker" className="py-12 sm:py-16 bg-hgrey">
      <div className="mx-auto max-w-[560px] px-5">
        <div className="text-center mb-8">
          <span className="inline-block text-hgreen font-semibold text-[0.8rem] uppercase tracking-wide mb-1.5">
            Symptom Checker
          </span>
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-htext tracking-tight">
            Need <span className="text-hblue">Care</span>? Let Us Guide You
          </h2>
          <p className="text-htext-muted max-w-[560px] mx-auto mt-2">
            Tell us who needs care and we&apos;ll recommend the right service.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)]">
          <select
            value={choice}
            onChange={(e) => setChoice(e.target.value)}
            className="w-full px-4 py-3 border-[1.5px] border-hgrey-border rounded-lg text-[0.95rem] bg-hgrey focus:outline-none focus:border-hblue focus:bg-white transition-colors text-htext mb-3.5"
          >
            <option value="">Who needs care?</option>
            {OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Any specific conditions or symptoms?"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            className="w-full px-4 py-3 border-[1.5px] border-hgrey-border rounded-lg text-[0.95rem] bg-hgrey focus:outline-none focus:border-hblue focus:bg-white transition-colors text-htext placeholder:text-htext-muted mb-3.5"
          />
          <button
            onClick={handleCheck}
            className="w-full bg-hblue text-white font-semibold py-3.5 rounded-full hover:bg-hblue-dark transition-colors"
          >
            Check Recommended Service
          </button>
          {result && (
            <p className="mt-4 text-[0.9rem] text-htext bg-hblue-light rounded-lg p-4">{result}</p>
          )}
        </div>
      </div>
    </section>
  );
}
