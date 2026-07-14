import { Check, X } from "lucide-react";

const ROWS: { feature: string; doctor247: string; nursingHome: string; agencies: string }[] = [
  { feature: "Verified Indian Nurses", doctor247: "Yes", nursingHome: "Yes", agencies: "Yes" },
  { feature: "Same-day Booking", doctor247: "Yes", nursingHome: "No", agencies: "Yes" },
  { feature: "24/7 Support", doctor247: "Yes", nursingHome: "Yes", agencies: "Limited" },
  { feature: "Flexible Hours (1–24 hrs)", doctor247: "Yes", nursingHome: "No", agencies: "Yes" },
  { feature: "ICU / Critical Care at Home", doctor247: "Yes", nursingHome: "Yes", agencies: "No" },
  { feature: "No Hidden Charges", doctor247: "Yes", nursingHome: "Often", agencies: "Yes" },
];

function Cell({ value }: { value: string }) {
  const negative = value === "No" || value === "Often";
  return (
    <span className={"inline-flex items-center gap-1.5 font-semibold " + (negative ? "text-red-500" : "text-hgreen")}>
      {negative ? <X size={15} /> : <Check size={15} />} {value}
    </span>
  );
}

export function NurseComparison() {
  return (
    <section className="py-12 sm:py-16 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <span className="inline-block text-hgreen font-semibold text-[0.8rem] uppercase tracking-wide mb-1.5">
            Comparison
          </span>
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-htext tracking-tight">
            Doctor247 vs. <span className="text-hblue">Others</span>
          </h2>
          <p className="text-htext-muted max-w-[560px] mx-auto mt-2">
            See why families choose us over nursing homes and other providers.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden [box-shadow:0_8px_24px_rgba(15,76,129,0.08)] border border-hgrey-border">
            <thead className="bg-hblue text-white">
              <tr>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-[0.85rem] sm:text-base">Feature</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-[0.85rem] sm:text-base">Doctor247</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-[0.85rem] sm:text-base">Nursing Home</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-[0.85rem] sm:text-base">Other Agencies</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.feature} className="border-b border-hgrey-border last:border-0 hover:[&>td]:bg-hgrey">
                  <td className="px-4 sm:px-6 py-2.5 sm:py-3.5 text-[0.8rem] sm:text-base">{row.feature}</td>
                  <td className="px-4 sm:px-6 py-2.5 sm:py-3.5 text-[0.8rem] sm:text-base">
                    <Cell value={row.doctor247} />
                  </td>
                  <td className="px-4 sm:px-6 py-2.5 sm:py-3.5 text-[0.8rem] sm:text-base">
                    <Cell value={row.nursingHome} />
                  </td>
                  <td className="px-4 sm:px-6 py-2.5 sm:py-3.5 text-[0.8rem] sm:text-base">
                    <Cell value={row.agencies} />
                  </td>
                </tr>
              ))}
              <tr className="border-b-0">
                <td className="px-4 sm:px-6 py-2.5 sm:py-3.5 text-[0.8rem] sm:text-base">Price (8-hour shift)</td>
                <td className="px-4 sm:px-6 py-2.5 sm:py-3.5 text-[0.8rem] sm:text-base font-bold text-hgreen">₹1,199</td>
                <td className="px-4 sm:px-6 py-2.5 sm:py-3.5 text-[0.8rem] sm:text-base">₹2,500+</td>
                <td className="px-4 sm:px-6 py-2.5 sm:py-3.5 text-[0.8rem] sm:text-base">₹1,500+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
