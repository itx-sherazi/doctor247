import { ChevronRight } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const STEPS = [
  { n: 1, label: "Book Appointment", sub: "Call, WhatsApp or Web", color: "bg-hblue" },
  { n: 2, label: "Care Coordinator Calls", sub: "We understand your need", color: "bg-hgreen" },
  { n: 3, label: "Doctor/Nurse Assigned", sub: "Verified professional matched", color: "bg-amber-500" },
  { n: 4, label: "Healthcare Delivered", sub: "At your home or hospital", color: "bg-hgreen" },
  { n: 5, label: "Follow-up Support", sub: "We're with you always", color: "bg-hblue" },
];

export function HowItWorks() {
  return (
    <section className="py-12 sm:py-15 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionTitle subtitle="Simple steps to get healthcare at your doorstep">
          How It <span className="text-hgreen">Works</span>
        </SectionTitle>
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-stretch gap-3 max-w-[960px] mx-auto">
          {STEPS.map((step, i) => (
            <div key={step.n} className="contents">
              <div className="flex-1 min-w-[100px] text-center p-4 bg-white rounded-xl border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)] transition-all hover:-translate-y-1 hover:[box-shadow:0_12px_40px_rgba(15,76,129,0.14)]">
                <div className={"w-12 h-12 rounded-full text-white flex items-center justify-center text-[1.2rem] font-bold mx-auto mb-1.5 " + step.color}>
                  {step.n}
                </div>
                <div className="font-semibold text-[0.85rem]">{step.label}</div>
                <div className="text-[0.7rem] text-htext-muted">{step.sub}</div>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden sm:flex items-center text-hgrey-border shrink-0">
                  <ChevronRight size={22} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
