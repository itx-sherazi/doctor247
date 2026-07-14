import { ArrowRight, CalendarCheck, CircleCheck, Heart, Phone } from "lucide-react";
import { HeroForm } from "./HeroForm";

const BADGES = ["Verified Doctors", "Verified Nurses", "24×7 Support", "Same Day Service", "Transparent Pricing"];

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[420px] sm:min-h-[560px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=800&fit=crop&crop=center')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(15,76,129,0.88)] to-[rgba(0,168,107,0.75)]" />

      <div className="relative z-[2] mx-auto max-w-[1200px] px-5 py-8 sm:py-12 grid lg:grid-cols-2 gap-8 items-center w-full">
        <div className="text-white order-1 lg:order-none">
          <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur text-white font-semibold text-[0.75rem] uppercase tracking-wide px-4 py-1 rounded-full mb-3 border border-white/10">
            <Heart size={13} className="text-hgreen" /> Trusted Healthcare
          </span>
          <h1 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-black leading-[1.08] mb-1.5 tracking-tight">
            Healthcare at <br />
            <span className="text-amber-300">Your Doorstep</span>
          </h1>
          <p className="text-[0.95rem] sm:text-[1.1rem] opacity-95 mb-4 font-normal">
            <strong className="text-amber-300 font-semibold">Doctor Visits</strong> ·{" "}
            <strong className="text-amber-300 font-semibold">Home Nursing</strong> ·{" "}
            <strong className="text-amber-300 font-semibold">Affordable Surgeries</strong>
          </p>
          <p className="text-[0.9rem] sm:text-[0.95rem] opacity-85 mb-5">
            Book trusted healthcare services across Bangalore. Find the <strong>best home nurse near me</strong> and{" "}
            <strong>best doctors in Bangalore</strong>.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-6">
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-1.5 text-[0.8rem] sm:text-[0.85rem] font-medium bg-white/12 backdrop-blur px-3.5 py-1.5 rounded-full border border-white/10"
              >
                <CircleCheck size={14} className="text-amber-300" /> {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-amber-500 text-white font-bold px-8 py-3.5 rounded-full shadow-[0_4px_20px_rgba(245,158,11,0.35)] transition-all hover:bg-amber-600 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(245,158,11,0.45)]"
            >
              <CalendarCheck size={17} /> Book Consultation
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur text-white font-semibold px-7 py-3.5 rounded-full border-2 border-white/25 transition-all hover:bg-white/25 hover:-translate-y-0.5"
            >
              <ArrowRight size={17} className="rotate-0" /> WhatsApp
            </a>
            <a
              href="tel:7676266247"
              className="inline-flex items-center gap-2 bg-hgreen text-white font-bold px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(0,168,107,0.3)] transition-all hover:bg-hgreen-dark hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,168,107,0.4)]"
            >
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>

        <div className="order-0 lg:order-none">
          <HeroForm />
        </div>
      </div>
    </section>
  );
}
