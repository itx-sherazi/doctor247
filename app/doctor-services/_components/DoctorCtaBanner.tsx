import { CalendarCheck, Phone } from "lucide-react";

export function DoctorCtaBanner() {
  return (
    <section className="bg-gradient-to-br from-hblue to-hgreen py-12 sm:py-15">
      <div className="mx-auto max-w-[800px] px-5 text-center text-white">
        <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold mb-2">
          Need a Doctor? <span className="text-amber-300">Call Now</span> or{" "}
          <span className="text-amber-300">Book Online</span>
        </h2>
        <p className="text-white/90 text-[0.95rem] sm:text-[1.05rem] mb-6">
          Verified doctors at your doorstep within 60 minutes. Available 24×7 across Bangalore.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <a
            href="tel:7676266247"
            className="inline-flex items-center gap-2 bg-white text-hblue font-bold px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all"
          >
            <Phone size={17} /> Call Now: +91 76762 66247
          </a>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-amber-500 text-white font-bold px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(245,158,11,0.35)] hover:bg-amber-600 hover:-translate-y-0.5 transition-all"
          >
            <CalendarCheck size={17} /> Book Visit
          </a>
        </div>
      </div>
    </section>
  );
}