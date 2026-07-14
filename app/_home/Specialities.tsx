import { Bone, Ear, Footprints, HandHeart, HeartPulse, Scissors, Eye, Venus } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const SPECIALITIES = [
  { icon: Scissors, name: "General Surgery" },
  { icon: Bone, name: "Orthopaedics" },
  { icon: HeartPulse, name: "Urology" },
  { icon: Ear, name: "ENT" },
  { icon: Venus, name: "Gynaecology" },
  { icon: HeartPulse, name: "Cardiology" },
  { icon: Eye, name: "Ophthalmology" },
  { icon: HandHeart, name: "Plastic Surgery" },
  { icon: Footprints, name: "Physiotherapy" },
];

export function Specialities() {
  return (
    <section className="py-18 pb-20 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle>
          Our <span className="text-hgreen">Specialities</span>
        </SectionTitle>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5">
          {SPECIALITIES.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl p-3 sm:p-5 text-center transition-all border border-hgrey-border [box-shadow:0_8px_40px_rgba(15,76,129,0.08)] hover:-translate-y-1 hover:border-hblue hover:[box-shadow:0_12px_56px_rgba(15,76,129,0.14)]"
            >
              <item.icon size={26} className="text-hblue mx-auto mb-1.5" />
              <div className="font-semibold text-[0.95rem]">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
