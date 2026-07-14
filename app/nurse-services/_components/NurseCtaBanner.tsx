import { CalendarCheck, Phone } from "lucide-react";

export function NurseCtaBanner() {
  return (
    <section id="cta" className="bg-gradient-to-br from-hblue to-hgreen py-12 sm:py-16">
      <div className="mx-auto max-w-[800px] px-5 text-center text-white">
        <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold mb-2">
          Ready to Book? <span className="text-amber-300">Call Now</span> or <span className="text-amber-300">Book Online</span>
        </h2>
        <p className="text-white/90 text-[0.95rem] sm:text-[1.05rem] mb-6">
          We&apos;re available 24/7. Get a <strong>nurse for home visit</strong> within 2 hours. No hidden charges, no
          paperwork  just compassionate care.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <a
            href="tel:+917892300247"
            className="inline-flex items-center gap-2 bg-white text-hblue font-bold px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all"
          >
            <Phone size={17} /> Call Now: +91 78923 00247
          </a>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-amber-500 text-white font-bold px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(245,158,11,0.35)] hover:bg-amber-600 hover:-translate-y-0.5 transition-all"
          >
            <CalendarCheck size={17} /> Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
