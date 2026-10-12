import {
  Activity,
  Dna,
  Droplet,
  FlaskConical,
  Heart,
  Microscope,
  Salad,
  Stethoscope,
  TestTube,
  User,
} from "lucide-react";

const TESTS = [
  { icon: Droplet, label: "Complete Blood Count (CBC)" },
  { icon: Activity, label: "Blood Sugar (Fasting / PP)" },
  { icon: Heart, label: "Lipid Profile" },
  { icon: Stethoscope, label: "Liver Function Test (LFT)" },
  { icon: TestTube, label: "Kidney Function Test (KFT)" },
  { icon: FlaskConical, label: "Thyroid Profile (T3, T4, TSH)" },
  { icon: Microscope, label: "Vitamin D & B12" },
  { icon: Dna, label: "HbA1c (Diabetes)" },
  { icon: Salad, label: "Full Body Checkup" },
  { icon: User, label: "Men & Women Wellness" },
];

export function LabTests() {
  return (
    <section className="py-12 sm:py-15 bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-hblue tracking-tight">
            Comprehensive <span className="text-hgreen">Lab Tests</span> &amp; Diagnostics
          </h2>
          <p className="text-htext-muted text-[0.95rem] sm:text-[1.05rem] max-w-[600px] mx-auto mt-1">
            From routine blood work to advanced diagnostics, we offer NABL-accredited{" "}
            <strong>lab tests at home</strong>.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {TESTS.map((t) => (
            <span
              key={t.label}
              className="flex items-center gap-2 bg-hgrey border border-hgrey-border rounded-full px-4 py-2.5 text-[0.85rem] font-medium text-htext transition-all hover:border-hblue hover:bg-hblue-light hover:text-hblue"
            >
              <t.icon size={16} className="text-hblue" /> {t.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}