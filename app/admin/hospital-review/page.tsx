"use client";

import { useEffect, useMemo, useState } from "react";
import { ClipboardList, Loader2, Search, ShieldCheck, Trash2 } from "lucide-react";
import Link from "next/link";
import { AdminTabs } from "../_components/AdminTabs";

type ApplicationStatus = "pending" | "approved" | "rejected" | "needs-more-information";

interface ApplicationSummary {
  applicationId: string;
  hospitalName?: string;
  contactPhone?: string;
  hospitalType?: string;
  pinCode?: string;
  stage: string;
  status: ApplicationStatus;
  createdAt: string;
}

const STATUS_STYLES: Record<ApplicationStatus, string> = {
  pending: "bg-warning-50 text-warning-600",
  approved: "bg-success-50 text-success-600",
  rejected: "bg-danger-50 text-danger-600",
  "needs-more-information": "bg-accent-100 text-accent-600",
};

const STATUS_LABELS: Record<ApplicationStatus, string> = {
  pending: "Pending",
  approved: "Approved",
  rejected: "Rejected",
  "needs-more-information": "Needs More Info",
};

export default function AdminHospitalReviewPage() {
  const [apps, setApps] = useState<ApplicationSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | "all">("all");

  useEffect(() => {
    loadApplications();
  }, []);

  const filteredApps = useMemo(() => {
    const query = search.trim().toLowerCase();
    return apps.filter((app) => {
      const matchesStatus = statusFilter === "all" || app.status === statusFilter;
      const matchesQuery =
        !query ||
        app.hospitalName?.toLowerCase().includes(query) ||
        app.contactPhone?.toLowerCase().includes(query) ||
        app.pinCode?.toLowerCase().includes(query) ||
        app.applicationId.toLowerCase().includes(query);
      return matchesStatus && matchesQuery;
    });
  }, [apps, search, statusFilter]);

  function loadApplications() {
    setLoading(true);
    fetch("/api/hospital-applications")
      .then((res) => res.json())
      .then((data) => setApps(data.applications ?? []))
      .catch(() => setError("Failed to load applications"))
      .finally(() => setLoading(false));
  }

  async function handleDelete(applicationId: string, hospitalName?: string) {
    const confirmed = window.confirm(
      `Delete application for ${hospitalName || applicationId}? This will also remove all uploaded documents from Cloudinary. This cannot be undone.`
    );
    if (!confirmed) return;

    setDeletingId(applicationId);
    try {
      const res = await fetch(`/api/hospital-applications/${applicationId}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setApps((prev) => prev.filter((a) => a.applicationId !== applicationId));
    } catch {
      setError("Failed to delete application. Please try again.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="border-b border-neutral-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-4 flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-800 text-white">
            <ShieldCheck size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-800 leading-none">Doctor247 Admin</p>
            <p className="text-xs text-neutral-400">Hospital Partnership Review (Internal)</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-6 sm:py-8">
        <AdminTabs active="hospitals" />
        <h1 className="text-lg font-semibold text-neutral-800 mb-1">Hospital Applications</h1>
        <p className="text-sm text-neutral-400 mb-4">
          {filteredApps.length} of {apps.length} application(s)
        </p>

        <div className="flex flex-col sm:flex-row gap-2.5 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-300" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by hospital name, phone, pincode, or application ID"
              className="w-full rounded-lg border border-neutral-200 bg-white pl-9 pr-3 py-2.5 text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:border-brand-400"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as ApplicationStatus | "all")}
            className="rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-700 focus:outline-none focus:border-brand-400"
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="needs-more-information">Needs More Info</option>
          </select>
        </div>

        {loading ? (
          <div className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-neutral-200 bg-white p-10 text-sm text-neutral-400">
            <Loader2 size={18} className="animate-spin" /> Loading applications…
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-dashed border-danger-200 bg-white p-10 text-center text-sm text-danger-500">
            {error}
          </div>
        ) : apps.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-neutral-200 bg-white p-10 text-center text-sm text-neutral-400 flex flex-col items-center gap-2">
            <ClipboardList size={24} className="text-neutral-300" />
            No applications yet. Submit one via the hospital registration flow.
          </div>
        ) : filteredApps.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-neutral-200 bg-white p-10 text-center text-sm text-neutral-400 flex flex-col items-center gap-2">
            <Search size={24} className="text-neutral-300" />
            No applications match your search/filter.
          </div>
        ) : (
          <>
            {/* Mobile: card list */}
            <div className="space-y-3 sm:hidden">
              {filteredApps.map((app) => (
                <div key={app.applicationId} className="w-full rounded-xl border border-neutral-100 bg-white p-4 shadow-sm">
                  <Link href={`/admin/hospital-review/${app.applicationId}`} className="block">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium text-neutral-800 truncate">{app.hospitalName || ""}</p>
                      <span className={"shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium " + STATUS_STYLES[app.status]}>
                        {STATUS_LABELS[app.status]}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-0.5">{app.applicationId} · {app.contactPhone}</p>
                    <p className="text-xs text-neutral-500 mt-1 capitalize">
                      {app.hospitalType || ""} · {app.stage.replace(/-/g, " ")}
                      {app.pinCode ? ` · PIN ${app.pinCode}` : ""}
                    </p>
                  </Link>
                  <button
                    onClick={() => handleDelete(app.applicationId, app.hospitalName)}
                    disabled={deletingId === app.applicationId}
                    className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-danger-50 px-3 py-1.5 text-xs font-semibold text-danger-600 hover:bg-danger-100 disabled:opacity-60"
                  >
                    {deletingId === app.applicationId ? (
                      <Loader2 size={13} className="animate-spin" />
                    ) : (
                      <Trash2 size={13} />
                    )}
                    Delete
                  </button>
                </div>
              ))}
            </div>

            {/* Desktop: table */}
            <div className="hidden sm:block overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-100 text-left text-xs uppercase tracking-wide text-neutral-400">
                      <th className="px-5 py-3 font-medium">Hospital</th>
                      <th className="px-5 py-3 font-medium">Contact Phone</th>
                      <th className="px-5 py-3 font-medium">Type</th>
                      <th className="px-5 py-3 font-medium">Pincode</th>
                      <th className="px-5 py-3 font-medium">Stage</th>
                      <th className="px-5 py-3 font-medium">Status</th>
                      <th className="px-5 py-3 font-medium" />
                    </tr>
                  </thead>
                  <tbody>
                    {filteredApps.map((app) => (
                      <tr key={app.applicationId} className="border-b border-neutral-50 last:border-0 hover:bg-neutral-50/60">
                        <td className="px-5 py-3">
                          <p className="font-medium text-neutral-800">{app.hospitalName || ""}</p>
                          <p className="text-xs text-neutral-400">{app.applicationId}</p>
                        </td>
                        <td className="px-5 py-3 text-neutral-600">{app.contactPhone}</td>
                        <td className="px-5 py-3 text-neutral-600">{app.hospitalType || ""}</td>
                        <td className="px-5 py-3 text-neutral-600">{app.pinCode || ""}</td>
                        <td className="px-5 py-3 text-neutral-600 capitalize">{app.stage.replace(/-/g, " ")}</td>
                        <td className="px-5 py-3">
                          <span className={"rounded-full px-2.5 py-1 text-xs font-medium " + STATUS_STYLES[app.status]}>
                            {STATUS_LABELS[app.status]}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              href={`/admin/hospital-review/${app.applicationId}`}
                              className="rounded-lg bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 hover:bg-brand-100"
                            >
                              Review
                            </Link>
                            <button
                              onClick={() => handleDelete(app.applicationId, app.hospitalName)}
                              disabled={deletingId === app.applicationId}
                              className="flex items-center gap-1 rounded-lg bg-danger-50 px-3 py-1.5 text-xs font-semibold text-danger-600 hover:bg-danger-100 disabled:opacity-60"
                            >
                              {deletingId === app.applicationId ? (
                                <Loader2 size={13} className="animate-spin" />
                              ) : (
                                <Trash2 size={13} />
                              )}
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
