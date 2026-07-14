import { CalendarDays, CreditCard, Eye, HospitalIcon, IndianRupee, RefreshCcw, Stethoscope } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const REASONS = [
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Up to 40% lower than market" },
  { icon: CreditCard, title: "Cashless Insurance", desc: "All major insurers accepted" },
  { icon: Stethoscope, title: "Experienced Surgeons", desc: "10+ years avg. experience" },
  { icon: Eye, title: "No Hidden Charges", desc: "100% transparent pricing" },
  { icon: CalendarDays, title: "Same Day Admission", desc: "No waiting lists" },
  { icon: RefreshCcw, title: "Free Follow-up", desc: "Post-surgery care included" },
  { icon: HospitalIcon, title: "Hospital Network", desc: "25+ partner hospitals" },
];

export function WhyChoose() {
  return (
    <section className="py-18 pb-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle>
          Why Choose <span className="text-hgreen">Doctor247</span>
        </SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="bg-hgrey rounded-[20px] p-5 sm:p-7 text-center transition-all hover:-translate-y-1 hover:[box-shadow:0_8px_40px_rgba(15,76,129,0.08)]"
            >
              <reason.icon size={28} className="text-hgreen mx-auto mb-2.5" />
              <h4 className="text-[1.05rem] font-semibold">{reason.title}</h4>
              <p className="text-[0.9rem] text-htext-muted mt-1">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
