"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Do you really collect samples at home?",
    a: "Yes — a certified phlebotomist visits your home at your preferred time. Home collection is free for all bookings.",
  },
  {
    q: "How soon will I get my reports?",
    a: "Most routine tests deliver digital reports within 24 hours. Some specialized tests may take 48–72 hours.",
  },
  {
    q: "Are your labs accredited?",
    a: "Yes, all samples are processed in NABL-accredited partner labs to ensure the highest accuracy standards.",
  },
  {
    q: "Do I need a doctor's prescription?",
    a: "For routine tests, no prescription is needed. For specialized panels, a doctor's recommendation helps us choose the right tests.",
  },
  {
    q: "What if I need to reschedule?",
    a: "You can reschedule free of charge up to 2 hours before your slot — just call or WhatsApp us.",
  },
  {
    q: "Are the reports accepted by hospitals?",
    a: "Yes, our reports are digitally signed and accepted by all major hospitals and clinics in Bangalore.",
  },
];

export function LabFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-15 bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-hblue tracking-tight">
            Frequently Asked <span className="text-hgreen">Questions</span>
          </h2>
        </div>
        <div className="max-w-[780px] mx-auto bg-hgrey rounded-2xl px-5 sm:px-7 border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)]">
          {FAQS.map((faq, i) => {
            const isActive = activeIndex === i;
            return (
              <div key={faq.q} className="border-b border-hgrey-border last:border-0 py-4">
                <button
                  onClick={() => setActiveIndex(isActive ? null : i)}
                  className="w-full flex justify-between items-center gap-3 text-left font-semibold text-[0.95rem] sm:text-[1rem] text-htext hover:text-hblue transition-colors"
                >
                  {faq.q}
                  <ChevronDown
                    size={18}
                    className={
                      "text-hblue shrink-0 transition-transform duration-300 " +
                      (isActive ? "rotate-180" : "")
                    }
                  />
                </button>
                <div
                  className="overflow-hidden transition-[max-height,padding] duration-300 ease-in-out text-htext-muted text-[0.9rem]"
                  style={{
                    maxHeight: isActive ? "260px" : "0px",
                    paddingTop: isActive ? "8px" : "0px",
                  }}
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}