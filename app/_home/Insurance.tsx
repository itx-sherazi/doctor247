import { CircleCheck } from "lucide-react";

const INSURERS = ["Star Health", "Niva Bupa", "ICICI Lombard", "HDFC ERGO", "Care Health", "Aditya Birla", "ACKO", "Tata AIG"];

export function Insurance() {
  return (
    <section className="py-14 pb-16 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <h3 className="text-[1.5rem] sm:text-[1.8rem] font-extrabold text-hblue">
          Insurance <span className="text-hgreen">Partners</span>
        </h3>
        <p className="text-htext-muted mb-1">Cashless treatment at network hospitals</p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-x-10 sm:gap-y-7 my-5">
          {INSURERS.map((name) => (
            <span
              key={name}
              className="font-semibold text-[0.95rem] sm:text-[1.1rem] text-htext-muted tracking-wide bg-hgrey px-5 py-2 rounded-full border border-hgrey-border"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 text-[1.05rem] text-hblue font-semibold">
          <CircleCheck size={18} className="text-hgreen" /> Cashless Insurance Assistance
        </div>
      </div>
    </section>
  );
}
