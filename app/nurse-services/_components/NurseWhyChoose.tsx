import { Clock, FileText, HandHeart, ShieldCheck, UserCheck, Zap } from "lucide-react";

const REASONS = [
  { icon: UserCheck, title: "Verified Indian Nurses", desc: "All nurses are R.N. licensed with 3+ years experience." },
  { icon: Clock, title: "24/7 Availability", desc: "Emergency service at any hour, any day." },
  { icon: ShieldCheck, title: "Background Verified", desc: "Thorough police and reference checks." },
  { icon: HandHeart, title: "Compassionate Care", desc: "We treat your family like our own." },
  { icon: Zap, title: "Quick Response", desc: "Nurse at your doorstep within 2 hours." },
  { icon: FileText, title: "Transparent Pricing", desc: "No hidden charges  pay only for hours used." },
];

export function NurseWhyChoose() {
  return (
    <section id="why" className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <span className="inline-block text-hgreen font-semibold text-[0.8rem] uppercase tracking-wide mb-1.5">
            Why Us
          </span>
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-htext tracking-tight">
            Why Families Trust <span className="text-hblue">Doctor247</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="bg-hgrey rounded-2xl p-5 sm:p-6 transition-all hover:-translate-y-1 hover:[box-shadow:0_12px_40px_rgba(15,76,129,0.14)]"
            >
              <reason.icon size={28} className="text-hgreen mb-2" />
              <h4 className="font-semibold text-[0.95rem] sm:text-[1rem]">{reason.title}</h4>
              <p className="text-[0.8rem] sm:text-[0.85rem] text-htext-muted mt-1">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
