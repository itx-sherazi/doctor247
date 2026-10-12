"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "How fast can a doctor reach my home?",
    a: "In most Bangalore areas, a doctor arrives within 60 minutes of booking. Night visits may take slightly longer.",
  },
  {
    q: "Are the doctors verified?",
    a: "Yes, all our doctors are MCI-registered, background-verified, and associated with reputed hospitals.",
  },
  {
    q: "What conditions can home doctors treat?",
    a: "Common issues like fever, cold, cough, body aches, wound care, IV drips, BP/diabetes checks, and post-hospital follow-ups.",
  },
  {
    q: "Do you provide prescriptions?",
    a: "Yes, our doctors issue valid digital prescriptions that are accepted by all major pharmacies.",
  },
  {
    q: "Do you handle emergencies?",
    a: "For critical emergencies (chest pain, stroke, severe injury), please call 108 or visit the nearest hospital. We handle non-critical urgent visits.",
  },
  {
    q: "What are the payment options?",
    a: "Cash, UPI, and card payments are accepted. Pay only after the consultation.",
  },
];

export function DoctorFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-15 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-hblue tracking-tight">
            Frequently Asked <span className="text-hgreen">Questions</span>
          </h2>
        </div>
        <div className="max-w-[780px] mx-auto bg-white rounded-2xl px-5 sm:px-7 border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)]">
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