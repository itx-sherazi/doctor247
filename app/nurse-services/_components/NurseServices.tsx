import {
  Accessibility,
  Baby,
  Bandage,
  BedDouble,
  Brain,
  Clock,
  HandHeart,
  HeartPulse,
  Syringe,
} from "lucide-react";

const SERVICES = [
  { icon: HeartPulse, label: "ICU / Critical Care" },
  { icon: HandHeart, label: "Elderly Care" },
  { icon: Baby, label: "Newborn & Mother Care" },
  { icon: BedDouble, label: "Post-Surgical Care" },
  { icon: Bandage, label: "Wound Dressing" },
  { icon: Syringe, label: "Injection & Medication" },
  { icon: Brain, label: "Dementia & Alzheimer's" },
  { icon: Clock, label: "24/7 Live-in Care" },
  { icon: HeartPulse, label: "Palliative Care" },
  { icon: Accessibility, label: "Mobility Assistance" },
];

export function NurseServices() {
  return (
    <section id="services" className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <span className="inline-block text-hgreen font-semibold text-[0.8rem] uppercase tracking-wide mb-1.5">
            Our Services
          </span>
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-htext tracking-tight">
            Complete <span className="text-hblue">Home Nursing</span> &amp; <span className="text-hgreen">Elderly Care</span>{" "}
            Solutions
          </h2>
          <p className="text-htext-muted text-[0.95rem] sm:text-[1.05rem] max-w-[640px] mx-auto mt-2">
            From ICU care to daily assistance, we provide professional <strong>home nursing services</strong> for all
            needs.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {SERVICES.map((s, i) => (
            <span
              key={s.label + i}
              className="flex items-center gap-2 bg-hgrey border border-hgrey-border rounded-full px-4 py-2.5 text-[0.85rem] font-medium text-htext transition-all hover:border-hblue hover:bg-hblue-light hover:text-hblue"
            >
              <s.icon size={16} className="text-hblue" /> {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
