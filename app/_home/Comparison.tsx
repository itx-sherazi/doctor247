import { CircleCheck, CircleX } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const ROWS = [
  { feature: "Transparent Pricing", them: "Hidden Charges" },
  { feature: "Home Doctor Visits", them: "Limited" },
  { feature: "Home Nursing", them: "Limited" },
  { feature: "WhatsApp Booking", them: "Phone Only" },
  { feature: "Free Care Coordinator", them: "No" },
  { feature: "One Platform", them: "Multiple Vendors" },
];

export function Comparison() {
  return (
    <section className="py-18 pb-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle>
          Doctor247 <span className="text-hgreen">Difference</span>
        </SectionTitle>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-[20px] overflow-hidden [box-shadow:0_8px_40px_rgba(15,76,129,0.08)] border border-hgrey-border">
            <thead className="bg-hblue text-white">
              <tr>
                <th className="px-3.5 sm:px-6 py-3 sm:py-4 text-left font-semibold text-[0.9rem] sm:text-base w-[30%]">Feature</th>
                <th className="px-3.5 sm:px-6 py-3 sm:py-4 text-left font-semibold text-[0.9rem] sm:text-base">Doctor247</th>
                <th className="px-3.5 sm:px-6 py-3 sm:py-4 text-left font-semibold text-[0.9rem] sm:text-base">Others</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.feature} className="border-b border-hgrey-border last:border-0 hover:[&>td]:bg-hgrey">
                  <td className="px-3.5 sm:px-6 py-2.5 sm:py-3.5 text-[0.85rem] sm:text-base">{row.feature}</td>
                  <td className="px-3.5 sm:px-6 py-2.5 sm:py-3.5 text-hgreen font-bold text-[0.85rem] sm:text-base">
                    <span className="flex items-center gap-1.5">
                      <CircleCheck size={16} /> Yes
                    </span>
                  </td>
                  <td className="px-3.5 sm:px-6 py-2.5 sm:py-3.5 text-red-500 font-bold text-[0.85rem] sm:text-base">
                    <span className="flex items-center gap-1.5">
                      <CircleX size={16} /> {row.them}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
