"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const FAQS = [
  {
    q: "How much is piles surgery?",
    a: "Piles surgery at Doctor247 starts from ₹45,000 (General Ward rates). The final cost depends on the hospital and room category chosen. We provide a detailed estimate before admission with zero hidden charges.",
  },
  {
    q: "Do you accept insurance?",
    a: "Yes, we accept all major health insurance providers including Star Health, Niva Bupa, ICICI Lombard, HDFC ERGO, Care Health, Aditya Birla, ACKO, and Tata AIG. Our team handles the cashless claim process for you.",
  },
  {
    q: "Can I book a nurse today?",
    a: "Absolutely. We have 250+ verified nurses available for same-day booking. Choose from 12-hour or 24-hour shifts, and our team will match you with a nurse based on your specific care needs.",
  },
  {
    q: "How much does a home doctor cost?",
    a: "Home doctor consultation starts from ₹499. The exact fee depends on the type of consultation (general, specialist, or follow-up). Our care coordinator will share the exact cost before booking.",
  },
  {
    q: "What are the home nursing charges?",
    a: "Our home nursing rates start from ₹299 for 1 hour, ₹550 for 2 hours, ₹799 for 4 hours, ₹1,199 for 8 hours, ₹1,499 for 12 hours, and ₹1,999 for 24 hours. All rates are transparent with no hidden charges. The 12-hour and 24-hour packages are our most popular options for post-surgery care.",
  },
];

export function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-18 pb-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle>
          Frequently Asked <span className="text-hgreen">Questions</span>
        </SectionTitle>
        <div className="max-w-[780px] mx-auto">
          {FAQS.map((faq, i) => {
            const isActive = activeIndex === i;
            return (
              <div key={faq.q} className="border-b border-hgrey-border last:border-0 py-4.5">
                <button
                  onClick={() => setActiveIndex(isActive ? null : i)}
                  className="w-full flex justify-between items-center gap-3 text-left font-semibold text-[1.05rem] text-htext hover:text-hblue transition-colors"
                >
                  {faq.q}
                  <ChevronDown
                    size={20}
                    className={"text-hblue shrink-0 transition-transform duration-300 " + (isActive ? "rotate-180" : "")}
                  />
                </button>
                <div
                  className="overflow-hidden transition-[max-height,padding] duration-300 ease-in-out text-htext-muted text-[0.95rem]"
                  style={{ maxHeight: isActive ? "260px" : "0px", paddingTop: isActive ? "12px" : "0px" }}
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
