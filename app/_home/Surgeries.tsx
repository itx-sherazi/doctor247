import { Eye } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const SURGERIES: { name: string; price: string; isConsultation?: boolean }[] = [
  { name: "Hernia Surgery", price: "₹55,000" },
  { name: "Piles Surgery", price: "₹45,000" },
  { name: "Gallbladder Surgery", price: "₹60,000" },
  { name: "Kidney Stone (PCNL)", price: "₹90,000" },
  { name: "Knee Replacement", price: "₹1,80,000" },
  { name: "Cataract Surgery", price: "Book Consultation", isConsultation: true },
];

export function Surgeries() {
  return (
    <section className="py-12 sm:py-15 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionTitle
          subtitle={
            <>
              Transparent pricing – no hidden charges. Save up to 30%.{" "}
              <strong>Best hospital for piles treatment in Bangalore</strong> and more.
            </>
          }
        >
          Affordable <span className="text-hgreen">MEDICAL AND SURGICAL SERVICES</span>
        </SectionTitle>
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-[800px] mx-auto">
          {SURGERIES.map((s) => (
            <div
              key={s.name}
              className="flex justify-between items-center bg-white px-5 py-3.5 rounded-xl border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)] transition-all hover:-translate-y-0.5 hover:[box-shadow:0_12px_40px_rgba(15,76,129,0.14)]"
            >
              <span className="font-medium text-[0.9rem]">{s.name}</span>
              <span className={"font-bold text-[0.9rem] " + (s.isConsultation ? "text-hblue" : "text-hgreen")}>{s.price}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-hblue text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:bg-hblue-dark hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(15,76,129,0.25)] hover:shadow-[0_8px_28px_rgba(15,76,129,0.35)]"
          >
            <Eye size={17} /> View All Surgeries →
          </a>
        </div>
      </div>
    </section>
  );
}
