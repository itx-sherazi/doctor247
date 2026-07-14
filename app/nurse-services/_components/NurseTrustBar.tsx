import { Clock, HandHeart, MapPin, ShieldCheck, Stethoscope, Zap } from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, label: "Verified & Licensed" },
  { icon: Clock, label: "24/7 Service" },
  { icon: MapPin, label: "Pan-Bangalore" },
  { icon: HandHeart, label: "Compassionate" },
  { icon: Zap, label: "Same-day Booking" },
  { icon: Stethoscope, label: "ICU & Critical Care" },
];

export function NurseTrustBar() {
  return (
    <section className="bg-white border-y border-hgrey-border py-4">
      <div className="mx-auto max-w-[1200px] px-5 flex flex-wrap justify-center gap-x-6 gap-y-2.5">
        {ITEMS.map((item) => (
          <span key={item.label} className="flex items-center gap-1.5 text-[0.8rem] sm:text-[0.85rem] font-medium text-htext-muted">
            <item.icon size={15} className="text-hblue" /> {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}
