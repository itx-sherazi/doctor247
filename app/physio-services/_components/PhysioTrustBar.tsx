import { Activity, Clock, HeartPulse, MapPin, ShieldCheck, Zap } from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, label: "Certified Physios" },
  { icon: Clock, label: "Same-Day Sessions" },
  { icon: MapPin, label: "Pan-Bangalore" },
  { icon: HeartPulse, label: "Personalized Rehab" },
  { icon: Zap, label: "Home Visits" },
  { icon: Activity, label: "Progress Tracking" },
];

export function PhysioTrustBar() {
  return (
    <section className="bg-white border-y border-hgrey-border py-4">
      <div className="mx-auto max-w-[1200px] px-5 flex flex-wrap justify-center gap-x-6 gap-y-2.5">
        {ITEMS.map((item) => (
          <span
            key={item.label}
            className="flex items-center gap-1.5 text-[0.8rem] sm:text-[0.85rem] font-medium text-htext-muted"
          >
            <item.icon size={15} className="text-hblue" /> {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}