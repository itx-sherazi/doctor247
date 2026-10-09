"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Activity, Building2, LogOut, Stethoscope } from "lucide-react";

export function AdminTabs({ active }: { active: "nurses" | "physios" | "hospitals" }) {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin-logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="flex items-center justify-between gap-2 mb-6">
      <div className="flex flex-wrap gap-2">
        <Link
          href="/admin/nurse-review"
          className={
            "flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition " +
            (active === "nurses"
              ? "bg-brand-600 text-white"
              : "bg-white text-neutral-500 border border-neutral-200 hover:border-brand-300")
          }
        >
          <Stethoscope size={15} /> Nurses
        </Link>
        <Link
          href="/admin/physio-review"
          className={
            "flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition " +
            (active === "physios"
              ? "bg-brand-600 text-white"
              : "bg-white text-neutral-500 border border-neutral-200 hover:border-brand-300")
          }
        >
          <Activity size={15} /> Physios
        </Link>
        <Link
          href="/admin/hospital-review"
          className={
            "flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition " +
            (active === "hospitals"
              ? "bg-brand-600 text-white"
              : "bg-white text-neutral-500 border border-neutral-200 hover:border-brand-300")
          }
        >
          <Building2 size={15} /> Hospitals
        </Link>
      </div>
      <button
        onClick={handleLogout}
        className="flex items-center gap-1.5 rounded-lg bg-danger-50 px-3 sm:px-3.5 py-2 text-sm font-semibold text-danger-600 transition hover:bg-danger-100"
      >
        <LogOut size={16} /> <span>Log out</span>
      </button>
    </div>
  );
}