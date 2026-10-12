import {
  Activity,
  Baby,
  Brain,
  Dumbbell,
  HeartPulse,
  PersonStanding,
  Wind,
  Accessibility,
  HandHeart,
  Syringe,
} from "lucide-react";

const SERVICES = [
  { icon: Dumbbell, label: "Orthopaedic Rehab" },
  { icon: Brain, label: "Neuro / Stroke Rehab" },
  { icon: Activity, label: "Sports Injury Rehab" },
  { icon: PersonStanding, label: "Post-Surgical Rehab" },
  { icon: Accessibility, label: "Geriatric Mobility" },
  { icon: Wind, label: "Chest & Respiratory Physio" },
  { icon: HeartPulse, label: "Cardiac Rehab" },
  { icon: HandHeart, label: "Pain Management" },
  { icon: Baby, label: "Postnatal Physiotherapy" },
  { icon: Syringe, label: "Home Exercise Program" },
];

export function PhysioServices() {
  return (
    <section className="py-12 sm:py-15 bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-hblue tracking-tight">
            Complete <span className="text-hgreen">Physiotherapy</span> &amp; Rehab
          </h2>
          <p className="text-htext-muted text-[0.95rem] sm:text-[1.05rem] max-w-[600px] mx-auto mt-1">
            From orthopaedic rehab to neuro recovery — professional <strong>home physiotherapy</strong> tailored to
            each patient.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {SERVICES.map((s) => (
            <span
              key={s.label}
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