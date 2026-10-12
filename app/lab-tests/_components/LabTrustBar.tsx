import { Award, Clock, FileCheck, Home, MapPin, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, label: "NABL-Accredited Labs" },
  { icon: Home, label: "Free Home Collection" },
  { icon: Clock, label: "24-hr Report Delivery" },
  { icon: MapPin, label: "Pan-Bangalore" },
  { icon: FileCheck, label: "Digital Reports" },
  { icon: Award, label: "Certified Technicians" },
];

export function LabTrustBar() {
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