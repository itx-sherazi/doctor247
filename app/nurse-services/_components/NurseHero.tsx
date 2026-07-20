import { CalendarCheck, Check, Phone, Star, Zap } from "lucide-react";

export function NurseHero() {
  return (
    <section id="home" className="bg-gradient-to-br from-hblue-light to-[#dbeafe] py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-5 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 bg-white text-hblue font-semibold text-[0.8rem] px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <Check size={13} /> Trusted by 500+ families in Bangalore
          </span>
          <h1 className="text-[1.9rem] sm:text-[2.6rem] lg:text-[3rem] font-extrabold leading-[1.1] text-htext mb-3 tracking-tight">
            Expert <span className="text-hblue">Home Nursing</span> &amp; <span className="text-hgreen">Elderly Care</span>  At
            Your Doorstep
          </h1>
          <p className="text-htext-muted text-[0.95rem] sm:text-[1.05rem] mb-6">
            Need a <strong>home nurse service near me</strong>? Doctor247 provides verified Indian nurses for{" "}
            <strong>ICU care</strong>, <strong>post-surgery</strong>, <strong>elderly care</strong>,{" "}
            <strong>wound dressing</strong>, and more. Book within 2 hours.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="tel:+917892300247"
              className="inline-flex items-center gap-2 bg-hblue text-white font-semibold px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(15,76,129,0.25)] hover:bg-hblue-dark hover:-translate-y-0.5 transition-all"
            >
              <Phone size={17} /> Call Now
            </a>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-hgreen text-white font-semibold px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(0,168,107,0.3)] hover:bg-hgreen-dark hover:-translate-y-0.5 transition-all"
            >
              <CalendarCheck size={17} /> Book Appointment
            </a>
          </div>
          <div className="flex gap-6 sm:gap-10">
            <div>
              <h3 className="text-[1.6rem] font-extrabold text-hblue">500+</h3>
              <p className="text-[0.8rem] text-htext-muted">Happy Families</p>
            </div>
            <div>
              <h3 className="text-[1.6rem] font-extrabold text-hgreen">98%</h3>
              <p className="text-[0.8rem] text-htext-muted">Satisfaction</p>
            </div>
            <div>
              <h3 className="text-[1.6rem] font-extrabold text-amber-500">2 hrs</h3>
              <p className="text-[0.8rem] text-htext-muted">Avg. Response</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden [box-shadow:0_16px_48px_rgba(15,76,129,0.16)] aspect-[4/3]">
            <img
              src="/nurse-hero.png"
              alt="Nurse caring for an elderly patient at home"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-3 -right-3 sm:top-4 sm:-right-4 bg-white px-3.5 py-2 rounded-full text-[0.8rem] font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.1)] flex items-center gap-1.5">
            <Star size={14} className="text-amber-500" fill="currentColor" /> 4.9 (200+ reviews)
          </div>
          <div className="absolute -bottom-3 -left-3 sm:bottom-4 sm:-left-4 bg-white px-3.5 py-2 rounded-full text-[0.8rem] font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.1)] flex items-center gap-1.5">
            <Zap size={14} className="text-hgreen" /> Book in 2 min
          </div>
        </div>
      </div>
    </section>
  );
}
