import { CalendarCheck, Phone } from "lucide-react";

export function LabCtaBanner() {
  return (
    <section className="bg-gradient-to-br from-hblue to-hgreen py-12 sm:py-15">
      <div className="mx-auto max-w-[800px] px-5 text-center text-white">
        <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold mb-2">
          Book Your Test <span className="text-amber-300">Today</span>
        </h2>
        <p className="text-white/90 text-[0.95rem] sm:text-[1.05rem] mb-6">
          Free home collection. NABL-accredited labs. Reports within 24 hours.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <a
            href="tel:7892300247"
            className="inline-flex items-center gap-2 bg-white text-hblue font-bold px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all"
          >
            <Phone size={17} /> Call Now: +91 78923 00247
          </a>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-amber-500 text-white font-bold px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(245,158,11,0.35)] hover:bg-amber-600 hover:-translate-y-0.5 transition-all"
          >
            <CalendarCheck size={17} /> Book Test
          </a>
        </div>
      </div>
    </section>
  );
}