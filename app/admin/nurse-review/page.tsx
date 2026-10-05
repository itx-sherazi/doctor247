"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Download,
  Edit,
  GraduationCap,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Plus,
  Search,
  Trash2,
  UserCheck,
} from "lucide-react";
import { AdminTabs } from "../_components/AdminTabs";
import { EditNurseModal } from "../_components/EditNurseModal";
import { UploadNurseModal } from "../_components/UploadNurseModal";

type ApplicationStatus = "pending" | "approved" | "rejected" | "needs-more-information";

interface ApplicationSummary {
  applicationId: string;
  fullName?: string;
  email?: string;
  mobileNumber?: string;
  qualification?: string;
  city?: string;
  pinCode?: string;
  area?: string;
  gender?: string;
  isStudent?: boolean;
  stage: string;
  status: ApplicationStatus;
  createdAt: string;
  reviewerNotes?: string;
}

const STATUS_STYLES: Record<ApplicationStatus, string> = {
  pending: "bg-warning-50 text-warning-600 border border-warning-200",
  approved: "bg-success-50 text-success-600 border border-success-200",
  rejected: "bg-danger-50 text-danger-600 border border-danger-200",
  "needs-more-information": "bg-accent-100 text-accent-600 border border-accent-200",
};

const STATUS_LABELS: Record<ApplicationStatus, string> = {
  pending: "Pending",
  approved: "Approved",
  rejected: "Rejected",
  "needs-more-information": "Needs More Info",
};

const STAGE_LABELS: Record<string, string> = {
  submitted: "Registration Submitted",
  "document-verification": "Document Verification",
  interview: "Interview",
  "clinical-assessment": "Clinical Assessment",
  "background-verification": "Background Check",
  "induction-training": "Induction Training",
  activated: "Activated",
};

function StudentBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={
        "inline-flex items-center gap-1 rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-700 border border-brand-200 " +
        className
      }
    >
      <GraduationCap size={11} />
      Student
    </span>
  );
}

export default function AdminNurseReviewPage() {
  const [apps, setApps] = useState<ApplicationSummary[]>([]);
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | "all">("all");
  const [studentFilter, setStudentFilter] = useState<"all" | "students" | "non-students">("all");

  // Modals state
  const [editingApplicant, setEditingApplicant] = useState<ApplicationSummary | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search.trim()), 350);
    return () => clearTimeout(t);
  }, [search]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, statusFilter, studentFilter]);

  useEffect(() => {
    loadApplications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, debouncedSearch, statusFilter, studentFilter]);

  function loadApplications() {
    setLoading(true);
    setError("");
    const params = new URLSearchParams({ page: String(page) });
    if (debouncedSearch) params.set("search", debouncedSearch);
    if (statusFilter !== "all") params.set("status", statusFilter);
    if (studentFilter !== "all") params.set("student", studentFilter);

    fetch(`/api/nurse-applications?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setApps(data.applications ?? []);
        setTotal(data.total ?? 0);
        setPageSize(data.pageSize ?? 20);
      })
      .catch(() => setError("Failed to load applications"))
      .finally(() => setLoading(false));
  }

  async function handleDelete(applicationId: string, displayName?: string) {
    const confirmed = window.confirm(
      `Delete application for ${displayName || applicationId}? This will also remove all uploaded images. This cannot be undone.`
    );
    if (!confirmed) return;

    setDeletingId(applicationId);
    try {
      const res = await fetch(`/api/nurse-applications/${applicationId}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setApps((prev) => prev.filter((a) => a.applicationId !== applicationId));
      setTotal((prev) => Math.max(0, prev - 1));
    } catch {
      setError("Failed to delete application. Please try again.");
    } finally {
      setDeletingId(null);
    }
  }

  function exportToCSV() {
    if (apps.length === 0) return;
    const headers = [
      "Application ID",
      "Full Name",
      "Email",
      "Mobile",
      "Qualification",
      "City",
      "PIN Code",
      "Area",
      "Is Student",
      "Stage",
      "Status",
      "Created At",
    ];
    const rows = apps.map((a) => [
      a.applicationId,
      `"${(a.fullName || "").replace(/"/g, '""')}"`,
      a.email || "",
      a.mobileNumber || "",
      a.qualification || "",
      `"${(a.city || "").replace(/"/g, '""')}"`,
      a.pinCode || "",
      `"${(a.area || "").replace(/"/g, '""')}"`,
      a.isStudent ? "Yes" : "No",
      a.stage,
      a.status,
      new Date(a.createdAt).toISOString(),
    ]);

    const csvString = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `nurse_applicants_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const rangeStart = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const rangeEnd = Math.min(page * pageSize, total);

  return (
    <div className="min-h-screen bg-neutral-50 pb-16">
      <header className="border-b border-neutral-100 bg-white sticky top-0 z-20 shadow-xs">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-nav.png"
              alt="Doctor247"
              width={140}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
            <div className="border-l border-neutral-200 pl-3">
              <p className="text-sm font-semibold text-neutral-800 leading-none">Admin Panel</p>
              <p className="text-xs text-neutral-400 mt-0.5">Nurse Credentialing & Management</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="flex items-center gap-1.5 rounded-lg bg-brand-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-brand-700 transition"
            >
              <Plus size={15} /> Upload / Add Applicants
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-8">
        <AdminTabs active="nurses" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h1 className="text-xl font-bold text-neutral-800">Nurse Applicants</h1>
            <p className="text-xs text-neutral-500 mt-0.5">
              {total === 0
                ? "0 applicants found"
                : `Showing ${rangeStart}-${rangeEnd} of ${total} total applicants`}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportToCSV}
              disabled={apps.length === 0}
              className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 disabled:opacity-40 transition shadow-2xs"
            >
              <Download size={14} /> Export CSV
            </button>
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-brand-700 transition shadow-2xs"
            >
              <Plus size={14} /> Add Applicant
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-2.5 mb-6">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, mobile, qualification, city, area, ID..."
              className="w-full rounded-xl border border-neutral-200 bg-white pl-9 pr-3 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition shadow-2xs"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as ApplicationStatus | "all")}
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-700 focus:outline-none focus:border-brand-500 shadow-2xs"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="needs-more-information">Needs More Info</option>
            </select>
            <select
              value={studentFilter}
              onChange={(e) =>
                setStudentFilter(e.target.value as "all" | "students" | "non-students")
              }
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-700 focus:outline-none focus:border-brand-500 shadow-2xs"
            >
              <option value="all">All Applicants</option>
              <option value="students">Students Only</option>
              <option value="non-students">Registered Nurses</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-neutral-200 bg-white p-16 text-sm text-neutral-400">
            <Loader2 size={20} className="animate-spin text-brand-600" /> Loading applicant data…
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-dashed border-danger-200 bg-white p-10 text-center text-sm text-danger-500">
            {error}
          </div>
        ) : apps.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-neutral-200 bg-white p-12 text-center text-sm text-neutral-500 flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
              <ClipboardList size={24} />
            </div>
            <div>
              <p className="font-semibold text-neutral-800 text-base">No applicants found</p>
              <p className="text-xs text-neutral-400 mt-1 max-w-sm">
                {debouncedSearch || statusFilter !== "all" || studentFilter !== "all"
                  ? "No applicants match your current filters. Try changing your search query or reset filters."
                  : "No applicants uploaded yet. Click 'Upload / Add Applicants' to add applicants or import a CSV."}
              </p>
            </div>
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-brand-700 transition"
            >
              <Plus size={14} /> Upload Applicants
            </button>
          </div>
        ) : (
          <>
            {/* Mobile: card list */}
            <div className="space-y-3 sm:hidden">
              {apps.map((app) => {
                const displayName =
                  app.fullName ||
                  (app.email ? app.email.split("@")[0] : "") ||
                  app.mobileNumber ||
                  app.applicationId;
                const isDraft = !app.fullName && !app.qualification;

                return (
                  <div
                    key={app.applicationId}
                    className="w-full rounded-xl border border-neutral-100 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <p className="font-semibold text-neutral-900 truncate">{displayName}</p>
                          {app.isStudent && <StudentBadge />}
                          {isDraft && (
                            <span className="rounded-md bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium text-neutral-500">
                              Incomplete
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] font-mono text-neutral-400 mt-0.5">
                          {app.applicationId}
                        </p>
                      </div>
                      <span
                        className={
                          "shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium " +
                          STATUS_STYLES[app.status]
                        }
                      >
                        {STATUS_LABELS[app.status]}
                      </span>
                    </div>

                    <div className="mt-3 space-y-1 text-xs text-neutral-600 border-t border-neutral-50 pt-2.5">
                      {app.mobileNumber && (
                        <p className="flex items-center gap-1.5">
                          <Phone size={13} className="text-neutral-400" /> {app.mobileNumber}
                        </p>
                      )}
                      {app.email && (
                        <p className="flex items-center gap-1.5 truncate">
                          <Mail size={13} className="text-neutral-400" /> {app.email}
                        </p>
                      )}
                      {(app.qualification || app.city || app.area) && (
                        <p className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-neutral-400" />
                          <span>
                            {app.qualification || "Nursing"}{" "}
                            {app.area ? `· ${app.area}` : app.city ? `· ${app.city}` : ""}
                            {app.pinCode ? ` (${app.pinCode})` : ""}
                          </span>
                        </p>
                      )}
                      <p className="text-[11px] text-neutral-400 pt-1">
                        Stage:{" "}
                        <span className="font-medium text-neutral-700">
                          {STAGE_LABELS[app.stage] || app.stage.replace(/-/g, " ")}
                        </span>
                      </p>
                    </div>

                    <div className="mt-3.5 flex items-center gap-2 border-t border-neutral-100 pt-3">
                      <Link
                        href={`/admin/nurse-review/${app.applicationId}`}
                        className="flex-1 text-center rounded-lg bg-brand-50 py-1.5 text-xs font-semibold text-brand-700 hover:bg-brand-100"
                      >
                        Review
                      </Link>
                      <button
                        onClick={() => setEditingApplicant(app)}
                        className="flex items-center justify-center gap-1 rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-50"
                      >
                        <Edit size={13} /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(app.applicationId, displayName)}
                        disabled={deletingId === app.applicationId}
                        className="flex items-center justify-center rounded-lg bg-danger-50 p-1.5 text-danger-600 hover:bg-danger-100"
                        title="Delete"
                      >
                        {deletingId === app.applicationId ? (
                          <Loader2 size={13} className="animate-spin" />
                        ) : (
                          <Trash2 size={13} />
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop: rich table */}
            <div className="hidden sm:block overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-100 bg-neutral-50/70 text-left text-xs uppercase tracking-wide text-neutral-400">
                      <th className="px-5 py-3.5 font-semibold">Applicant</th>
                      <th className="px-4 py-3.5 font-semibold">Contact</th>
                      <th className="px-4 py-3.5 font-semibold">Qualification</th>
                      <th className="px-4 py-3.5 font-semibold">Location</th>
                      <th className="px-4 py-3.5 font-semibold">Stage</th>
                      <th className="px-4 py-3.5 font-semibold">Status</th>
                      <th className="px-5 py-3.5 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {apps.map((app) => {
                      const displayName =
                        app.fullName ||
                        (app.email ? app.email.split("@")[0] : "") ||
                        app.mobileNumber ||
                        "Applicant";
                      const isDraft = !app.fullName;

                      return (
                        <tr
                          key={app.applicationId}
                          className="hover:bg-neutral-50/80 transition-colors"
                        >
                          <td className="px-5 py-3.5">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-neutral-900">
                                {displayName}
                              </span>
                              {app.isStudent && <StudentBadge />}
                              {isDraft && (
                                <span className="rounded-sm bg-neutral-100 px-1.5 py-0.2 text-[10px] text-neutral-500">
                                  Draft
                                </span>
                              )}
                            </div>
                            <p className="text-xs font-mono text-neutral-400 mt-0.5">
                              {app.applicationId}
                            </p>
                          </td>

                          <td className="px-4 py-3.5">
                            <p className="text-neutral-800 font-medium text-xs">
                              {app.mobileNumber || "—"}
                            </p>
                            <p className="text-xs text-neutral-400 truncate max-w-[160px]">
                              {app.email || "—"}
                            </p>
                          </td>

                          <td className="px-4 py-3.5 text-neutral-700 text-xs">
                            <span className="font-medium">
                              {app.qualification || (app.isStudent ? "Student Nurse" : "—")}
                            </span>
                            {app.gender && (
                              <p className="text-[11px] text-neutral-400 capitalize">{app.gender}</p>
                            )}
                          </td>

                          <td className="px-4 py-3.5 text-neutral-600 text-xs">
                            <p className="font-medium text-neutral-700">
                              {app.area || app.city || "Bangalore"}
                            </p>
                            <p className="text-[11px] text-neutral-400">
                              {app.pinCode ? `PIN ${app.pinCode}` : ""}
                            </p>
                          </td>

                          <td className="px-4 py-3.5">
                            <span className="inline-flex items-center gap-1 rounded-md bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700 font-medium">
                              {STAGE_LABELS[app.stage] || app.stage.replace(/-/g, " ")}
                            </span>
                          </td>

                          <td className="px-4 py-3.5">
                            <span
                              className={
                                "rounded-full px-2.5 py-1 text-xs font-semibold " +
                                STATUS_STYLES[app.status]
                              }
                            >
                              {STATUS_LABELS[app.status]}
                            </span>
                          </td>

                          <td className="px-5 py-3.5 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <Link
                                href={`/admin/nurse-review/${app.applicationId}`}
                                className="rounded-lg bg-brand-50 px-2.5 py-1.5 text-xs font-semibold text-brand-700 hover:bg-brand-100 transition shadow-2xs"
                              >
                                Review
                              </Link>
                              <button
                                onClick={() => setEditingApplicant(app)}
                                className="flex items-center gap-1 rounded-lg border border-neutral-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition shadow-2xs"
                              >
                                <Edit size={12} /> Edit
                              </button>
                              <button
                                onClick={() => handleDelete(app.applicationId, displayName)}
                                disabled={deletingId === app.applicationId}
                                className="flex items-center rounded-lg bg-danger-50 p-1.5 text-xs font-semibold text-danger-600 hover:bg-danger-100 disabled:opacity-60 transition"
                                title="Delete application"
                              >
                                {deletingId === app.applicationId ? (
                                  <Loader2 size={13} className="animate-spin" />
                                ) : (
                                  <Trash2 size={13} />
                                )}
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-5 bg-white p-3 rounded-xl border border-neutral-100 shadow-2xs">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  className="flex items-center gap-1 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                  <ChevronLeft size={14} /> Previous
                </button>
                <p className="text-xs text-neutral-500 font-medium">
                  Page <span className="font-semibold text-neutral-800">{page}</span> of {totalPages}
                </p>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages}
                  className="flex items-center gap-1 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                  Next <ChevronRight size={14} />
                </button>
              </div>
            )}
          </>
        )}
      </main>

      {/* Edit Modal */}
      {editingApplicant && (
        <EditNurseModal
          applicant={editingApplicant}
          isOpen={Boolean(editingApplicant)}
          onClose={() => setEditingApplicant(null)}
          onSuccess={() => {
            loadApplications();
            setEditingApplicant(null);
          }}
        />
      )}

      {/* Upload / Add Modal */}
      {isUploadModalOpen && (
        <UploadNurseModal
          isOpen={isUploadModalOpen}
          onClose={() => setIsUploadModalOpen(false)}
          onSuccess={() => {
            loadApplications();
            setIsUploadModalOpen(false);
          }}
        />
      )}
    </div>
  );
}