import { Phone } from "lucide-react";

const PLANS = [
  { duration: "1 Hour", price: "₹299", desc: "Quick check-in", popular: false },
  { duration: "2 Hours", price: "₹549", desc: "Medication & assistance", popular: false },
  { duration: "4 Hours", price: "₹799", desc: "Half-day care", popular: false },
  { duration: "8 Hours", price: "₹1,199", desc: "Full daytime nursing", popular: "Most Popular" },
  { duration: "12 Hours", price: "₹1,499", desc: "Extended support", popular: "Best Value" },
  { duration: "24 Hours", price: "₹1,999", desc: "Live-in care", popular: false },
];

export function NursePricing() {
  return (
    <section id="pricing" className="py-12 sm:py-16 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <span className="inline-block text-hgreen font-semibold text-[0.8rem] uppercase tracking-wide mb-1.5">
            Pricing
          </span>
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-htext tracking-tight">
            Flexible <span className="text-hblue">Nursing</span> Packages
          </h2>
          <p className="text-htext-muted text-[0.95rem] sm:text-[1.05rem] max-w-[640px] mx-auto mt-2">
            Transparent pricing for <strong>home care services in Bangalore</strong>.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {PLANS.map((plan) => (
            <div
              key={plan.duration}
              className={
                "relative bg-white rounded-2xl p-5 sm:p-6 text-center border transition-all hover:-translate-y-1 " +
                (plan.popular
                  ? "border-hgreen [box-shadow:0_8px_24px_rgba(0,168,107,0.15)]"
                  : "border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)]")
              }
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-hgreen text-white text-[0.65rem] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  {plan.popular}
                </span>
              )}
              <div className="font-semibold text-[0.85rem] text-htext-muted mb-1">{plan.duration}</div>
              <div className="text-[1.6rem] font-extrabold text-hblue mb-1">{plan.price}</div>
              <div className="text-[0.8rem] text-htext-muted mb-4">{plan.desc}</div>
              <a
                href="#booking"
                className={
                  "block w-full py-2.5 rounded-full font-semibold text-[0.85rem] transition-colors " +
                  (plan.popular ? "bg-hgreen text-white hover:bg-hgreen-dark" : "bg-hblue text-white hover:bg-hblue-dark")
                }
              >
                Book Now
              </a>
            </div>
          ))}
          <div className="col-span-2 sm:col-span-3 lg:col-span-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl p-5 sm:p-6 border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)]">
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-[1.05rem] text-htext">
                📅 Weekly Care <span className="text-hgreen">Custom</span>
              </h3>
              <p className="text-[0.85rem] text-htext-muted">Call us for personalized weekly packages.</p>
            </div>
            <a
              href="tel:+917892300247"
              className="inline-flex items-center gap-2 bg-hblue text-white font-semibold px-6 py-3 rounded-full shadow-[0_4px_16px_rgba(15,76,129,0.25)] hover:bg-hblue-dark transition-colors whitespace-nowrap"
            >
              <Phone size={16} /> Call for Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
