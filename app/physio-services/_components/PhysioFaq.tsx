"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What conditions can home physiotherapy help with?",
    a: "Post-surgical rehab, orthopaedic injuries, back and neck pain, stroke recovery, sports injuries, geriatric mobility, and post-COVID respiratory rehab.",
  },
  {
    q: "How quickly can I book a physiotherapist?",
    a: "You can book online in under 2 minutes or call us. We confirm and dispatch a physiotherapist within 2 hours in most Bangalore areas.",
  },
  {
    q: "Are your physiotherapists certified?",
    a: "Yes, all our physiotherapists hold BPT or MPT degrees, are council-registered, and have 3+ years of clinical experience.",
  },
  {
    q: "Do I need a doctor's prescription?",
    a: "Not always. For post-surgical cases we recommend following your surgeon's protocol, but for general pain and mobility issues, a physio can assess and design a plan independently.",
  },
  {
    q: "Can I change the physiotherapist if not satisfied?",
    a: "Absolutely. We prioritize your comfort and can replace the physiotherapist at no extra charge within the first session.",
  },
  {
    q: "Are there physiotherapy job vacancies?",
    a: "Yes, we regularly hire certified physiotherapists. Contact us for physiotherapy jobs in Bangalore.",
  },
];

export function PhysioFaq() {
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