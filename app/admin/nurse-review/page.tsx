"use client";

import { useEffect, useState } from "react";
import { ClipboardList, Loader2, ShieldCheck, Trash2 } from "lucide-react";
import Link from "next/link";

type ApplicationStatus = "pending" | "approved" | "rejected" | "needs-more-information";

interface ApplicationSummary {
  applicationId: string;
  fullName?: string;
  mobileNumber?: string;
  qualification?: string;
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

export default function AdminNurseReviewPage() {
  const [apps, setApps] = useState<ApplicationSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    loadApplications();
  }, []);

  function loadApplications() {
    setLoading(true);
    fetch("/api/nurse-applications")
      .then((res) => res.json())
      .then((data) => setApps(data.applications ?? []))
      .catch(() => setError("Failed to load applications"))
      .finally(() => setLoading(false));
  }

  async function handleDelete(applicationId: string, fullName?: string) {
    const confirmed = window.confirm(
      `Delete application for ${fullName || applicationId}? This will also remove all uploaded images from Cloudinary. This cannot be undone.`
    );
    if (!confirmed) return;

    setDeletingId(applicationId);
    try {
      const res = await fetch(`/api/nurse-applications/${applicationId}`, { method: "DELETE" });
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
            <p className="text-xs text-neutral-400">Nurse Credentialing Review (Internal)</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-6 sm:py-8">
        <h1 className="text-lg font-semibold text-neutral-800 mb-1">Nurse Applications</h1>
        <p className="text-sm text-neutral-400 mb-6">{apps.length} application(s) submitted</p>

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
            No applications yet. Submit one via the nurse registration flow.
          </div>
        ) : (
          <>
            {/* Mobile: card list */}
            <div className="space-y-3 sm:hidden">
              {apps.map((app) => (
                <div key={app.applicationId} className="w-full rounded-xl border border-neutral-100 bg-white p-4 shadow-sm">
                  <Link href={`/admin/nurse-review/${app.applicationId}`} className="block">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium text-neutral-800 truncate">{app.fullName || ""}</p>
                      <span className={"shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium " + STATUS_STYLES[app.status]}>
                        {STATUS_LABELS[app.status]}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-0.5">{app.applicationId} · {app.mobileNumber}</p>
                    <p className="text-xs text-neutral-500 mt-1 capitalize">
                      {app.qualification || ""} · {app.stage.replace(/-/g, " ")}
                    </p>
                  </Link>
                  <button
                    onClick={() => handleDelete(app.applicationId, app.fullName)}
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
                      <th className="px-5 py-3 font-medium">Applicant</th>
                      <th className="px-5 py-3 font-medium">Mobile</th>
                      <th className="px-5 py-3 font-medium">Qualification</th>
                      <th className="px-5 py-3 font-medium">Stage</th>
                      <th className="px-5 py-3 font-medium">Status</th>
                      <th className="px-5 py-3 font-medium" />
                    </tr>
                  </thead>
                  <tbody>
                    {apps.map((app) => (
                      <tr key={app.applicationId} className="border-b border-neutral-50 last:border-0 hover:bg-neutral-50/60">
                        <td className="px-5 py-3">
                          <p className="font-medium text-neutral-800">{app.fullName || ""}</p>
                          <p className="text-xs text-neutral-400">{app.applicationId}</p>
                        </td>
                        <td className="px-5 py-3 text-neutral-600">{app.mobileNumber}</td>
                        <td className="px-5 py-3 text-neutral-600">{app.qualification || ""}</td>
                        <td className="px-5 py-3 text-neutral-600 capitalize">{app.stage.replace(/-/g, " ")}</td>
                        <td className="px-5 py-3">
                          <span className={"rounded-full px-2.5 py-1 text-xs font-medium " + STATUS_STYLES[app.status]}>
                            {STATUS_LABELS[app.status]}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              href={`/admin/nurse-review/${app.applicationId}`}
                              className="rounded-lg bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 hover:bg-brand-100"
                            >
                              Review
                            </Link>
                            <button
                              onClick={() => handleDelete(app.applicationId, app.fullName)}
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
