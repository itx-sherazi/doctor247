import { ChevronRight } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const STEPS = [
  { n: 1, label: "Book Consultation", sub: "Call or WhatsApp", green: false },
  { n: 2, label: "Talk to Care Coordinator", sub: "We understand your need", green: true },
  { n: 3, label: "Doctor Consultation", sub: "Expert advice", green: false },
  { n: 4, label: "Hospital / Home Visit", sub: "Treatment begins", green: true },
  { n: 5, label: "Recovery Support", sub: "Follow-up care", green: false },
];

export function HowItWorks() {
  return (
    <section className="py-18 pb-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle subtitle="Simple, fast, and hassle-free healthcare">
          How It <span className="text-hgreen">Works</span>
        </SectionTitle>
        <div className="flex flex-col sm:flex-row justify-between flex-wrap gap-5 sm:gap-0 max-w-[900px] mx-auto items-center sm:items-start">
          {STEPS.map((step, i) => (
            <div key={step.n} className="contents">
              <div className="flex flex-col items-center text-center flex-1 min-w-[100px]">
                <div
                  className={
                    "w-16 h-16 rounded-full text-white flex items-center justify-center text-[1.6rem] font-bold mb-2.5 " +
                    (step.green
                      ? "bg-hgreen shadow-[0_4px_16px_rgba(0,168,107,0.25)]"
                      : "bg-hblue shadow-[0_4px_16px_rgba(15,76,129,0.2)]")
                  }
                >
                  {step.n}
                </div>
                <div className="font-semibold text-[0.95rem]">{step.label}</div>
                <div className="text-[0.8rem] text-htext-muted">{step.sub}</div>
              </div>
              {i < STEPS.length - 1 && (
                <div className="text-hgrey-border flex items-center px-1 rotate-90 sm:rotate-0">
                  <ChevronRight size={28} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
