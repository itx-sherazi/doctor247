import { GraduationCap, IdCard, RefreshCw, ShieldAlert, Star, UserCheck } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const BADGES = [
  { icon: ShieldAlert, label: "Background Verified" },
  { icon: GraduationCap, label: "Qualified" },
  { icon: Star, label: "Experienced" },
  { icon: IdCard, label: "Licensed" },
  { icon: UserCheck, label: "Trained by Doctor247" },
  { icon: RefreshCw, label: "Continuously Evaluated" },
];

export function Professionals() {
  return (
    <section className="py-12 sm:py-15 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionTitle
          subtitle={
            <>
              All healthcare professionals are thoroughly vetted – including <strong>best orthopedic doctor in Bangalore</strong>,{" "}
              <strong>best ENT doctor in Bangalore</strong>, and more
            </>
          }
        >
          Our Healthcare <span className="text-hgreen">Professionals</span>
        </SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 max-w-[800px] mx-auto">
          {BADGES.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 bg-white px-4 py-3.5 rounded-xl border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)] transition-all hover:-translate-y-0.5 hover:[box-shadow:0_12px_40px_rgba(15,76,129,0.14)]"
            >
              <badge.icon size={22} className="text-hgreen shrink-0" />
              <span className="font-medium text-[0.85rem] sm:text-[0.9rem]">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
