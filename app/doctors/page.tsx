"use client";

import { useState } from "react";
import { Search, Stethoscope } from "lucide-react";
import { StickyFooter } from "../_home/StickyFooter";
import { FloatingWidget } from "../_home/FloatingWidget";
import { SectionTitle } from "../_home/SectionTitle";

const DOCTORS = [
  { name: "Dr. Anil Kumar", specialty: "General Physician", experience: "12 yrs", city: "Bangalore" },
  { name: "Dr. Priya Sharma", specialty: "Pediatrician", experience: "9 yrs", city: "Bangalore" },
  { name: "Dr. Ramesh Iyer", specialty: "Orthopaedic Surgeon", experience: "15 yrs", city: "Bangalore" },
  { name: "Dr. Kavita Rao", specialty: "Gynaecologist", experience: "11 yrs", city: "Bangalore" },
  { name: "Dr. Suresh Menon", specialty: "Cardiologist", experience: "18 yrs", city: "Bangalore" },
  { name: "Dr. Neha Gupta", specialty: "Dermatologist", experience: "7 yrs", city: "Bangalore" },
  { name: "Dr. Vikram Reddy", specialty: "ENT Specialist", experience: "10 yrs", city: "Bangalore" },
  { name: "Dr. Shalini Nair", specialty: "Neurologist", experience: "14 yrs", city: "Bangalore" },
  { name: "Dr. Arun Verma", specialty: "Urologist", experience: "13 yrs", city: "Bangalore" },
];

export default function DoctorsPage() {
  const [query, setQuery] = useState("");

  const filtered = DOCTORS.filter(
    (d) =>
      d.name.toLowerCase().includes(query.trim().toLowerCase()) ||
      d.specialty.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="bg-white text-htext">
      <section className="bg-gradient-to-br from-hblue-light to-[#dbeafe] py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <span className="inline-block text-hgreen font-semibold text-[0.8rem] uppercase tracking-wide mb-1.5">
            Our Network
          </span>
          <h1 className="text-[1.9rem] sm:text-[2.6rem] font-extrabold text-htext tracking-tight mb-3">
            Meet Our <span className="text-hblue">Doctors</span>
          </h1>
          <p className="text-htext-muted text-[1rem] sm:text-[1.1rem] max-w-[640px] mx-auto mb-6">
            Verified, credentialed, and experienced doctors available for home visits and consultations
            across Bangalore.
          </p>

          <div className="relative max-w-[420px] mx-auto">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-htext-muted"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or speciality…"
              className="w-full pl-11 pr-4 py-3 rounded-full border-[1.5px] border-hgrey-border bg-white text-[0.95rem] text-htext placeholder:text-htext-muted focus:outline-none focus:border-hblue transition-colors"
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-15 bg-white">
        <div className="mx-auto max-w-[1200px] px-5">
          {filtered.length === 0 ? (
            <p className="text-center text-htext-muted py-10">No doctors match your search.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filtered.map((d) => (
                <div
                  key={d.name}
                  className="bg-white border border-hgrey-border rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:[box-shadow:0_12px_40px_rgba(15,76,129,0.12)]"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-hblue-light text-hblue font-bold text-[1.1rem]">
                      {d.name.replace("Dr. ", "").charAt(0)}
                    </span>
                    <div>
                      <h4 className="font-semibold text-[1rem] text-htext">{d.name}</h4>
                      <p className="text-[0.85rem] text-hgreen font-medium">{d.specialty}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[0.8rem] text-htext-muted pt-3 border-t border-hgrey-border">
                    <span>{d.experience} experience</span>
                    <span>{d.city}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <a
              href="tel:7676266247"
              className="inline-flex items-center gap-2 bg-hblue text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:bg-hblue-dark hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(15,76,129,0.25)]"
            >
              <Stethoscope size={17} /> Request a Doctor
            </a>
          </div>
        </div>
      </section>

      <FloatingWidget />
      <StickyFooter />
    </div>
  );
}