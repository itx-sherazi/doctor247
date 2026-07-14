"use client";

import { useState } from "react";

const PRICE_MAP: Record<number, number> = {
  1: 299,
  2: 549,
  3: 749,
  4: 799,
  5: 899,
  6: 999,
  7: 1099,
  8: 1199,
  9: 1299,
  10: 1399,
  11: 1449,
  12: 1499,
  13: 1599,
  14: 1649,
  15: 1699,
  16: 1749,
  17: 1799,
  18: 1849,
  19: 1899,
  20: 1949,
  21: 1979,
  22: 1989,
  23: 1999,
  24: 1999,
};

export function NurseCalculator() {
  const [hours, setHours] = useState(4);
  const price = PRICE_MAP[hours] ?? 1999;

  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="mx-auto max-w-[520px] px-5 text-center">
        <h3 className="text-[1.3rem] sm:text-[1.5rem] font-extrabold text-htext mb-5">💰 Estimate Your Cost</h3>
        <div className="bg-hgrey rounded-2xl p-6 sm:p-8 border border-hgrey-border">
          <input
            type="range"
            min={1}
            max={24}
            step={1}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full accent-hgreen h-2 rounded-full cursor-pointer"
          />
          <div className="text-[0.95rem] font-medium text-htext-muted mt-3">
            {hours} hour{hours > 1 ? "s" : ""}
          </div>
          <div className="text-[2rem] font-extrabold text-hblue my-2">₹{price.toLocaleString("en-IN")}</div>
          <a
            href="#booking"
            className="block w-full bg-hblue text-white font-semibold py-3.5 rounded-full mt-2 hover:bg-hblue-dark transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
