"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Stethoscope } from "lucide-react";
import { SURGERY_LIST } from "./_data/surgeries";

export default function AllSurgeriesPage() {
  const [query, setQuery] = useState("");

  const filtered = SURGERY_LIST.filter((s) => s.name.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <div className="bg-white text-htext">
      <section className="bg-gradient-to-br from-hblue-light to-[#dbeafe] py-10 sm:py-14">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="text-[0.8rem] text-htext-muted mb-3">
            <Link href="/" className="hover:text-hblue">
              Home
            </Link>{" "}
            / Surgeries
          </p>
          <h1 className="text-[1.9rem] sm:text-[2.5rem] font-bold leading-[1.25] text-htext mb-4 tracking-normal">
            All <span className="text-hblue">Surgeries</span> We Offer
          </h1>
          <p className="text-htext-muted text-[1rem] leading-relaxed max-w-[640px] mb-6">
            Affordable, expert-led surgical care across Bangalore. Transparent pricing, cashless insurance, and
            free follow-ups on every procedure.
          </p>

          <div className="relative max-w-[420px]">
            <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-htext-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search surgeries…"
              className="w-full pl-11 pr-4 py-3 rounded-full border-[1.5px] border-hgrey-border bg-white text-[0.95rem] text-htext placeholder:text-htext-muted focus:outline-none focus:border-hblue transition-colors"
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14 bg-white">
        <div className="mx-auto max-w-[1200px] px-5">
          {filtered.length === 0 ? (
            <p className="text-center text-htext-muted py-10">No surgeries match your search.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((s) => (
                <Link
                  key={s.slug}
                  href={`/surgery/${s.slug}`}
                  className="flex items-start gap-3 bg-white border border-hgrey-border rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:[box-shadow:0_12px_40px_rgba(15,76,129,0.12)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-hblue-light text-hblue">
                    <Stethoscope size={18} />
                  </span>
                  <span>
                    <span className="block font-semibold text-[0.95rem] text-htext mb-1">{s.name}</span>
                    <span className="block font-bold text-[0.9rem] text-hgreen">{s.price}</span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 sm:py-14 bg-hblue">
        <div className="mx-auto max-w-[700px] px-5 text-center">
          <h2 className="text-[1.4rem] sm:text-[1.7rem] font-extrabold text-white mb-2">
            Not sure which surgery you need?
          </h2>
          <p className="text-white/80 mb-6">Book a free consultation and our team will guide you.</p>
          <a
            href="tel:7676266247"
            className="inline-flex items-center gap-2 bg-white text-hblue font-semibold px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-all"
          >
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
}
