"use client";

import Link from "next/link";
import { Building2, Stethoscope } from "lucide-react";

export function AdminTabs({ active }: { active: "nurses" | "hospitals" }) {
  return (
    <div className="flex gap-2 mb-6">
      <Link
        href="/admin/nurse-review"
        className={
          "flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition " +
          (active === "nurses" ? "bg-brand-600 text-white" : "bg-white text-neutral-500 border border-neutral-200 hover:border-brand-300")
        }
      >
        <Stethoscope size={15} /> Nurses
      </Link>
      <Link
        href="/admin/hospital-review"
        className={
          "flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition " +
          (active === "hospitals" ? "bg-brand-600 text-white" : "bg-white text-neutral-500 border border-neutral-200 hover:border-brand-300")
        }
      >
        <Building2 size={15} /> Hospitals
      </Link>
    </div>
  );
}
