import { Baby, CircleCheck, HeartPulse, Stethoscope } from "lucide-react";

const PRICE_CARDS = [
  { icon: Baby, title: "Normal Delivery", price: "22,500", badge: "Most Popular", badgeStyle: "bg-amber-100 text-amber-700", highlighted: true },
  { icon: HeartPulse, title: "C-Section", price: "42,500", badge: "Best Value", badgeStyle: "bg-hgreen text-white", highlighted: false },
  { icon: Stethoscope, title: "Surgeries", price: "40,000", badge: "Save 30%", badgeStyle: "bg-amber-100 text-amber-700", highlighted: false },
];

const BADGES = ["Free Consultation", "Cashless Insurance", "Top Doctors", "24×7 Support", "No Hidden Charges"];

export function HeroPricingCard() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
        {PRICE_CARDS.map((card) => (
          <div
            key={card.title}
            className={
              "bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-5 text-center border-2 transition-all " +
              (card.highlighted ? "border-hgreen" : "border-transparent")
            }
          >
            <div className="flex justify-center mb-1 sm:mb-1.5">
              <card.icon size={22} className="sm:w-7 sm:h-7 text-hgreen" />
            </div>
            <p className="font-bold text-htext text-[0.75rem] sm:text-[0.95rem] mb-0.5 leading-tight">{card.title}</p>
            <p className="hidden sm:block text-[0.7rem] font-semibold text-htext-muted tracking-wide mb-1">
              STARTING FROM
            </p>
            <p className="text-hgreen font-black text-[1rem] sm:text-[1.6rem] mb-1.5 sm:mb-2 whitespace-nowrap">
              ₹{card.price}
            </p>
            <span
              className={
                "inline-block text-[0.6rem] sm:text-[0.7rem] font-semibold px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap " +
                card.badgeStyle
              }
            >
              {card.badge}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-5 mb-4">
        <p className="flex items-start gap-2 text-htext font-medium text-[0.85rem] sm:text-[0.95rem] mb-2">
          <Stethoscope size={18} className="text-hgreen shrink-0 mt-0.5" />
          <span>
            <strong>115+ surgeries</strong> — Hernia, Piles, Knee Replacement, Cataract, Gallbladder, Kidney Stone,
            Hysterectomy &amp; more
          </span>
        </p>
        <a href="#" className="text-hblue font-semibold text-[0.9rem] hover:underline">
          View All →
        </a>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-2.5">
        {BADGES.map((badge) => (
          <span
            key={badge}
            className="flex items-center gap-1.5 bg-white text-htext text-[0.78rem] sm:text-[0.85rem] font-medium px-3 sm:px-3.5 py-1.5 rounded-full"
          >
            <CircleCheck size={14} className="text-hgreen shrink-0" /> {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
