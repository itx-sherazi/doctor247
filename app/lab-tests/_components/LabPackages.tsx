import { Check, Phone } from "lucide-react";

const PACKAGES = [
  {
    name: "Basic Health Checkup",
    price: "₹999",
    desc: "Essential blood work for routine monitoring",
    tests: ["CBC", "Blood Sugar", "Lipid Profile", "Urine Routine"],
    popular: null,
  },
  {
    name: "Full Body Checkup",
    price: "₹2,499",
    desc: "Most popular — comprehensive screening",
    tests: ["CBC", "LFT", "KFT", "Thyroid", "Lipid", "Vitamin D", "HbA1c", "Urine"],
    popular: "Most Popular",
  },
  {
    name: "Senior Citizen Package",
    price: "₹3,999",
    desc: "Targeted diagnostics for 60+ years",
    tests: ["CBC", "LFT", "KFT", "Thyroid", "Lipid", "Vitamin D & B12", "HbA1c", "ECG"],
    popular: "Best Value",
  },
];

export function LabPackages() {
  return (
    <section className="py-12 sm:py-15 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-hblue tracking-tight">
            Health <span className="text-hgreen">Checkup Packages</span>
          </h2>
          <p className="text-htext-muted text-[0.95rem] sm:text-[1.05rem] max-w-[600px] mx-auto mt-1">
            Save up to 50% with bundled tests. All packages include free home sample collection.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-[1000px] mx-auto">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={
                "relative bg-white rounded-2xl p-6 border transition-all hover:-translate-y-1 " +
                (pkg.popular
                  ? "border-hgreen [box-shadow:0_8px_24px_rgba(0,168,107,0.15)]"
                  : "border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)]")
              }
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-hgreen text-white text-[0.65rem] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  {pkg.popular}
                </span>
              )}
              <h3 className="font-bold text-[1.05rem] text-htext mb-1">{pkg.name}</h3>
              <p className="text-[0.8rem] text-htext-muted mb-3">{pkg.desc}</p>
              <div className="text-[2rem] font-extrabold text-hblue mb-4">{pkg.price}</div>
              <ul className="space-y-1.5 mb-5">
                {pkg.tests.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-[0.85rem] text-htext-muted">
                    <Check size={14} className="mt-0.5 shrink-0 text-hgreen" /> {t}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className={
                  "block w-full text-center py-2.5 rounded-full font-semibold text-[0.85rem] transition-colors " +
                  (pkg.popular
                    ? "bg-hgreen text-white hover:bg-hgreen-dark"
                    : "bg-hblue text-white hover:bg-hblue-dark")
                }
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl p-5 sm:p-6 border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)] max-w-[1000px] mx-auto">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-[1.05rem] text-htext">
              Custom Test Panels <span className="text-hgreen">Available</span>
            </h3>
            <p className="text-[0.85rem] text-htext-muted">
              Call us for custom panels or corporate health packages.
            </p>
          </div>
          <a
            href="tel:7892300247"
            className="inline-flex items-center gap-2 bg-hblue text-white font-semibold px-6 py-3 rounded-full shadow-[0_4px_16px_rgba(15,76,129,0.25)] hover:bg-hblue-dark transition-colors whitespace-nowrap"
          >
            <Phone size={16} /> Call for Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}