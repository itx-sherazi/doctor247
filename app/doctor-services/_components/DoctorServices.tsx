import {
  Activity,
  Bandage,
  Droplet,
  Heart,
  Pill,
  Stethoscope,
  Syringe,
  Thermometer,
  UserCheck,
} from "lucide-react";

const SERVICES = [
  { icon: Stethoscope, label: "General Physician Visit" },
  { icon: Thermometer, label: "Fever / Cold / Flu" },
  { icon: Syringe, label: "Injections & IV Drips" },
  { icon: Bandage, label: "Wound Dressing" },
  { icon: Activity, label: "BP & Diabetes Monitoring" },
  { icon: Heart, label: "Elderly Care Visits" },
  { icon: Pill, label: "Prescription & Refills" },
  { icon: UserCheck, label: "Post-Hospital Follow-up" },
  { icon: Droplet, label: "Blood Sample Collection" },
];

export function DoctorServices() {
  return (
    <section className="py-12 sm:py-15 bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-hblue tracking-tight">
            Doctor Visits for <span className="text-hgreen">Every Need</span>
          </h2>
          <p className="text-htext-muted text-[0.95rem] sm:text-[1.05rem] max-w-[600px] mx-auto mt-1">
            From routine checkups to urgent care — a <strong>verified home doctor</strong> for all your medical needs.
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