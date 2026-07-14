import { ArrowRight, CircleCheck, Clock, Stethoscope } from "lucide-react";

const ITEMS = ["Fever", "Diabetes", "BP", "Elderly Care", "Health Checkup", "Injection"];

export function HomeDoctor() {
  return (
    <section className="py-18 pb-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="aspect-[4/3] bg-gradient-to-br from-hblue-light to-[#d4e4f7] rounded-[20px] flex flex-col items-center justify-center text-hblue [box-shadow:0_8px_40px_rgba(15,76,129,0.08)]">
          <Stethoscope size={64} />
          <span className="text-base mt-2">Doctor visiting patient</span>
        </div>
        <div>
          <span className="inline-flex items-center gap-1.5 bg-hgreen-light text-hgreen font-semibold text-[0.8rem] px-4 py-1 rounded-full mb-3">
            <Clock size={13} /> 60 min response
          </span>
          <h2 className="text-[1.7rem] sm:text-[2.2rem] font-extrabold text-hblue mb-2">Home Doctor</h2>
          <p className="text-htext-muted">
            Professional doctors visit your home for consultation, treatment, and follow-up.
          </p>
          <ul className="list-none grid grid-cols-2 gap-x-4 gap-y-2 my-4 mb-6">
            {ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-[0.95rem]">
                <CircleCheck size={16} className="text-hgreen shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-hgreen text-white font-semibold px-8.5 py-3.5 rounded-full transition-all hover:bg-hgreen-dark hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(0,168,107,0.3)] hover:shadow-[0_8px_28px_rgba(0,168,107,0.4)]"
          >
            <ArrowRight size={17} /> Book Home Doctor →
          </a>
        </div>
      </div>
    </section>
  );
}
