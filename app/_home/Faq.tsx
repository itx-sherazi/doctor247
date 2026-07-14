"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const FAQS = [
  {
    q: "How much does a home doctor visit cost?",
    a: "Home doctor consultation starts from ₹799. The exact fee depends on the type of consultation (general, specialist, or follow-up). Our care coordinator will share the exact cost before booking. We offer the best home visit doctors in Bangalore.",
  },
  {
    q: "How much are home nursing services?",
    a: "Our home nursing services start from ₹999. The final cost depends on the type of care needed, duration, and nurse qualifications. We provide transparent pricing with no hidden charges. Find the best home nursing services near me at Doctor247.",
  },
  {
    q: "Do you accept health insurance?",
    a: "Yes, we accept all major health insurance providers including Star Health, Niva Bupa, ICICI Lombard, HDFC ERGO, Care Health, and more. Our team handles the cashless claim process for you at the best hospitals in Bangalore.",
  },
  {
    q: "Can I book a nurse on the same day?",
    a: "Absolutely. We have 250+ verified nurses available for same-day booking. Whether you need a home nurse near me for 12-hour or 24-hour shifts, our team will match you with a nurse based on your specific care needs.",
  },
  {
    q: "Are your doctors and nurses verified?",
    a: "Yes, all our healthcare professionals are background verified, qualified, experienced, licensed, and continuously evaluated. We only partner with the best, including best skin doctor in Bangalore, best orthopedic doctor in Bangalore, and more.",
  },
];

export function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-15 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionTitle
          subtitle={
            <>
              Everything you need to know about <strong>home nursing services</strong> and{" "}
              <strong>affordable surgeries in Bangalore</strong>
            </>
          }
        >
          Frequently Asked <span className="text-hgreen">Questions</span>
        </SectionTitle>
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
                    className={"text-hblue shrink-0 transition-transform duration-300 " + (isActive ? "rotate-180" : "")}
                  />
                </button>
                <div
                  className="overflow-hidden transition-[max-height,padding] duration-300 ease-in-out text-htext-muted text-[0.9rem]"
                  style={{ maxHeight: isActive ? "300px" : "0px", paddingTop: isActive ? "8px" : "0px" }}
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
