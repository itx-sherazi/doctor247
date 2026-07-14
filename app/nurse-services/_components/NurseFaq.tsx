"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What nursing services do you offer?",
    a: "We offer ICU/critical care, elderly care, post-surgical care, wound dressing, medication management, dementia & Alzheimer's care, newborn care, palliative care, and 24/7 live-in caregivers.",
  },
  {
    q: "How quickly can I book a nurse?",
    a: "You can book online in under 2 minutes or call us. We confirm and dispatch a nurse within 2 hours.",
  },
  {
    q: "Are your nurses verified?",
    a: "Yes, all our nurses are R.N. licensed, have 3+ years of experience, and undergo background verification.",
  },
  {
    q: "Do you offer ICU care at home?",
    a: "Yes, we provide ICU-grade nursing care at home with trained nurses for ventilator support, tracheostomy, and critical monitoring.",
  },
  {
    q: "Can I change the nurse if not satisfied?",
    a: "Absolutely. We prioritize your comfort and can replace the nurse at no extra charge within the first 24 hours.",
  },
  {
    q: "Are there nursing job vacancies?",
    a: "Yes, we regularly hire R.N.s and caregivers. Contact us for nursing jobs in Bangalore.",
  },
];

export function NurseFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <span className="inline-block text-hgreen font-semibold text-[0.8rem] uppercase tracking-wide mb-1.5">FAQ</span>
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-htext tracking-tight">
            Frequently Asked <span className="text-hblue">Questions</span>
          </h2>
          <p className="text-htext-muted max-w-[560px] mx-auto mt-2">
            Quick answers about <strong>home nursing services near me</strong>.
          </p>
        </div>
        <div className="max-w-[780px] mx-auto bg-hgrey rounded-2xl px-5 sm:px-7 border border-hgrey-border">
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
                    className={"text-hblue shrink-0 transition-transform duration-300 " + (isActive ? "rotate-180" : "")}
                  />
                </button>
                <div
                  className="overflow-hidden transition-[max-height,padding] duration-300 ease-in-out text-htext-muted text-[0.9rem]"
                  style={{ maxHeight: isActive ? "260px" : "0px", paddingTop: isActive ? "8px" : "0px" }}
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
