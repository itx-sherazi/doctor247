import { CalendarCheck, PhoneCall, Stethoscope } from "lucide-react";

const BADGES = [
  "Verified Doctors",
  "60-Min Response",
  "24×7 Availability",
  "Same-Day Visits",
  "Transparent Pricing",
];

export function DoctorHero() {
  return (
    <section className="relative overflow-hidden flex items-center py-2">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&h=800&fit=crop&crop=center')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(15,76,129,0.88)] to-[rgba(0,168,107,0.75)]" />

      <div className="relative z-[2] mx-auto max-w-[1200px] px-4 sm:px-5 py-8 sm:py-12 lg:py-16 grid lg:grid-cols-2 gap-6 sm:gap-8 items-center w-full">
        <div className="text-white order-1 lg:order-none">
          <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur text-white font-semibold text-[0.75rem] uppercase tracking-wide px-4 py-1 rounded-full mb-3 border border-white/10">
            <Stethoscope size={13} className="text-hgreen" /> Home Doctor
          </span>
          <h1 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-black leading-[1.08] mb-3 tracking-tight">
            Home Doctor Visit in 60 Minutes
          </h1>
          <p className="text-[0.95rem] sm:text-[1.1rem] opacity-95 mb-5">
            Verified, experienced doctors at your doorstep — for consultations, IV drips, wound care, and urgent
            medical needs. Available 24×7 across Bangalore.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6">
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-1.5 text-[0.75rem] sm:text-[0.85rem] font-medium bg-white/12 backdrop-blur px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-white/10"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            <a
              href="tel:7676266247"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-[0_4px_20px_rgba(245,158,11,0.35)] transition-all hover:bg-amber-600 hover:-translate-y-0.5 w-full sm:w-auto text-[0.9rem] sm:text-base"
            >
              <PhoneCall size={17} /> Call: +91 76762 66247
            </a>
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur text-white font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border-2 border-white/25 transition-all hover:bg-white/25 hover:-translate-y-0.5 w-full sm:w-auto text-[0.9rem] sm:text-base"
            >
              <CalendarCheck size={17} /> Book Visit
            </a>
          </div>
        </div>

        <div className="order-0 lg:order-none w-full">
          <div className="bg-white rounded-2xl p-5 sm:p-6 [box-shadow:0_16px_48px_rgba(15,76,129,0.16)]">
            <h3 className="font-bold text-[1.05rem] text-htext mb-3">What We Handle</h3>
            <ul className="grid grid-cols-2 gap-2 text-[0.85rem] text-htext-muted">
              {[
                "General Consultation",
                "Fever / Cold / Flu",
                "IV Drip & Injection",
                "Wound Dressing",
                "BP / Diabetes Check",
                "Elderly Home Visit",
                "Post-Hospital Care",
                "Night Visits",
              ].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-hgreen shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-hgrey-border grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-hblue font-black text-[1.3rem]">500+</p>
                <p className="text-[0.7rem] text-htext-muted">Visits</p>
              </div>
              <div>
                <p className="text-hgreen font-black text-[1.3rem]">60 min</p>
                <p className="text-[0.7rem] text-htext-muted">Response</p>
              </div>
              <div>
                <p className="text-amber-500 font-black text-[1.3rem]">4.9★</p>
                <p className="text-[0.7rem] text-htext-muted">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}