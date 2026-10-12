import { Award, Clock, Home, ShieldCheck, Stethoscope, UserCheck } from "lucide-react";

const REASONS = [
  { icon: ShieldCheck, title: "MCI-Verified Doctors", desc: "All doctors are registered and background-checked." },
  { icon: Clock, title: "60-Min Response", desc: "Fast home visits — day or night." },
  { icon: Home, title: "At Your Doorstep", desc: "No travel, no waiting rooms." },
  { icon: Stethoscope, title: "General & Specialists", desc: "Physicians, pediatricians, and more." },
  { icon: Award, title: "Accredited Practitioners", desc: "Experienced doctors from top hospitals." },
  { icon: UserCheck, title: "Compassionate Care", desc: "Patient-first approach for every visit." },
];

export function DoctorWhyChoose() {
  return (
    <section className="py-12 sm:py-15 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-hblue tracking-tight">
            Why Families Trust <span className="text-hgreen">Doctor247</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-2xl p-5 sm:p-6 transition-all hover:-translate-y-1 hover:[box-shadow:0_12px_40px_rgba(15,76,129,0.14)]"
            >
              <r.icon size={28} className="text-hgreen mb-2" />
              <h4 className="font-semibold text-[0.95rem] sm:text-[1rem]">{r.title}</h4>
              <p className="text-[0.8rem] sm:text-[0.85rem] text-htext-muted mt-1">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}