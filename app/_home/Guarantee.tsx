import { CalendarDays, Clock, Headset, IndianRupee, Stethoscope, Undo2 } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const ITEMS = [
  { icon: CalendarDays, label: "Same Day Booking" },
  { icon: Stethoscope, label: "Nurse Replacement" },
  { icon: IndianRupee, label: "Transparent Pricing" },
  { icon: Headset, label: "Dedicated Care Coordinator" },
  { icon: Clock, label: "24×7 Support" },
  { icon: Undo2, label: "Refund Policy" },
];

export function Guarantee() {
  return (
    <section className="py-12 sm:py-15 bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionTitle
          subtitle={
            <>
              We stand behind every service we provide – <strong>home care services in Bangalore</strong> you can trust
            </>
          }
        >
          Our <span className="text-hgreen">Service Guarantee</span>
        </SectionTitle>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
          {ITEMS.map((item) => (
            <div
              key={item.label}
              className="text-center p-3 sm:p-4 bg-white rounded-xl border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)] transition-all hover:-translate-y-1 hover:[box-shadow:0_12px_40px_rgba(15,76,129,0.14)]"
            >
              <item.icon size={26} className="text-hgreen mx-auto mb-1" />
              <span className="block text-[0.7rem] sm:text-[0.75rem] font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
