import { Phone } from "lucide-react";

const PLANS = [
  {
    label: "Home Visit Consultation",
    price: "₹799",
    desc: "Single visit, includes vitals check",
    popular: "Most Popular",
  },
  { label: "Follow-up Visit", price: "₹599", desc: "Repeat visit within 7 days", popular: null },
  { label: "IV Drip / Injection", price: "₹999+", desc: "Injection + monitoring at home", popular: null },
  { label: "Elderly Health Checkup", price: "₹1,199", desc: "Full assessment + prescription", popular: null },
  { label: "Post-Hospital Follow-up", price: "₹899", desc: "Doctor visit + wound review", popular: null },
  {
    label: "Night Visit (10 PM – 7 AM)",
    price: "₹1,299",
    desc: "Emergency night consultation",
    popular: null,
  },
];

export function DoctorPricing() {
  return (
    <section className="py-12 sm:py-15 bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-hblue tracking-tight">
            Transparent <span className="text-hgreen">Home Visit Pricing</span>
          </h2>
          <p className="text-htext-muted text-[0.95rem] sm:text-[1.05rem] max-w-[600px] mx-auto mt-1">
            No hidden charges. Pay only for the service you book.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-[1000px] mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.label}
              className={
                "relative bg-white rounded-2xl p-5 sm:p-6 border transition-all hover:-translate-y-1 " +
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
              <div className="font-bold text-[1rem] text-htext mb-1">{plan.label}</div>
              <div className="text-[1.6rem] font-extrabold text-hblue mb-1">{plan.price}</div>
              <div className="text-[0.85rem] text-htext-muted mb-4">{plan.desc}</div>
              <a
                href="#booking"
                className={
                  "block w-full text-center py-2.5 rounded-full font-semibold text-[0.85rem] transition-colors " +
                  (plan.popular
                    ? "bg-hgreen text-white hover:bg-hgreen-dark"
                    : "bg-hblue text-white hover:bg-hblue-dark")
                }
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-hgrey rounded-2xl p-5 sm:p-6 border border-hgrey-border max-w-[1000px] mx-auto">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-[1.05rem] text-htext">
              Need a <span className="text-hgreen">Custom Package</span>?
            </h3>
            <p className="text-[0.85rem] text-htext-muted">
              Weekly or monthly doctor visits for elderly care — call us for a quote.
            </p>
          </div>
          <a
            href="tel:7676266247"
            className="inline-flex items-center gap-2 bg-hblue text-white font-semibold px-6 py-3 rounded-full shadow-[0_4px_16px_rgba(15,76,129,0.25)] hover:bg-hblue-dark transition-colors whitespace-nowrap"
          >
            <Phone size={16} /> Call for Quote
          </a>
        </div>
      </div>
    </section>
  );
}