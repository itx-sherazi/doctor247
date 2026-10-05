"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Download, FileSpreadsheet, Loader2, Plus, Upload, Building2, X } from "lucide-react";

interface UploadHospitalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function UploadHospitalModal({ isOpen, onClose, onSuccess }: UploadHospitalModalProps) {
  const [tab, setTab] = useState<"single" | "bulk">("single");

  const [singleForm, setSingleForm] = useState({
    hospitalName: "",
    contactName: "",
    contactDesignation: "",
    contactPhone: "",
    contactEmail: "",
    hospitalType: "Multi-Speciality Hospital",
    ownershipType: "Private",
    address: "",
    city: "Bangalore",
    state: "Karnataka",
    pinCode: "",
    totalBeds: "20",
    icuBeds: "4",
    stage: "submitted",
    status: "approved",
    reviewerNotes: "",
  });

  const [bulkText, setBulkText] = useState("");
  const [parsedRows, setParsedRows] = useState<Record<string, string>[]>([]);
  const [fileName, setFileName] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resultMsg, setResultMsg] = useState("");

  if (!isOpen) return null;

  function handleSingleChange(key: string, value: string) {
    setSingleForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSingleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!singleForm.hospitalName && !singleForm.contactPhone && !singleForm.contactEmail) {
      setError("Please provide at least Hospital Name, Phone, or Email.");
      return;
    }

    setLoading(true);
    setError("");
    setResultMsg("");

    try {
      const res = await fetch("/api/hospital-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(singleForm),
      });

      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error || "Failed to create hospital application");
      }

      setResultMsg("Hospital application added successfully!");
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 700);
    } catch (err: unknown) {
      setError((err as Error).message || "Failed to submit hospital application.");
    } finally {
      setLoading(false);
    }
  }

  function parseCSV(text: string) {
    const lines = text.trim().split(/\r?\n/).filter((l) => l.trim().length > 0);
    if (lines.length === 0) return [];

    const headers = lines[0].split(",").map((h) => h.trim().replace(/^["']|["']$/g, ""));
    const rows = [];

    for (let i = 1; i < lines.length; i++) {
      const rowVals: string[] = [];
      let inQuotes = false;
      let curr = "";
      for (const ch of lines[i]) {
        if (ch === '"') {
          inQuotes = !inQuotes;
        } else if (ch === "," && !inQuotes) {
          rowVals.push(curr.trim().replace(/^["']|["']$/g, ""));
          curr = "";
        } else {
          curr += ch;
        }
      }
      rowVals.push(curr.trim().replace(/^["']|["']$/g, ""));

      if (rowVals.some((v) => v.length > 0)) {
        const obj: Record<string, string> = {};
        headers.forEach((h, idx) => {
          obj[h] = rowVals[idx] || "";
        });
        rows.push(obj);
      }
    }
    return rows;
  }

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setError("");
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = String(event.target?.result || "");
      setBulkText(content);
      const rows = parseCSV(content);
      setParsedRows(rows);
    };
    reader.readAsText(file);
  }

  function handleTextChange(val: string) {
    setBulkText(val);
    const rows = parseCSV(val);
    setParsedRows(rows);
  }

  function downloadSampleCSV() {
    const csvContent =
      "Hospital Name,Contact Person,Phone,Email,Hospital Type,City,PIN,Address,Total Beds,ICU Beds,Status,Notes\n" +
      "City Day Care Center,Dr. Sumana Zehra,8618783832,citycare@example.com,Day Care / Clinic,Bangalore,560047,Neelsandra Bazar St,15,2,approved,Surgical day care\n" +
      "Metro Care Hospital,Mr. Anil Kumar,9845012345,metrocare@example.com,Multi-Speciality Hospital,Bangalore,560034,Koramangala 4th Block,50,10,approved,Emergency ready\n" +
      "Apex Healthcare,Dr. Priya,9900112233,apex@example.com,Nursing Home,Bangalore,560099,Electronic City,25,4,pending,Needs agreement signing";

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "sample_hospital_applicants.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  async function handleBulkSubmit() {
    if (parsedRows.length === 0) {
      setError("No valid hospital rows found to upload. Please select a CSV or enter rows.");
      return;
    }

    setLoading(true);
    setError("");
    setResultMsg("");

    try {
      const res = await fetch("/api/hospital-applications/bulk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ applications: parsedRows }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Bulk upload failed");
      }

      setResultMsg(`Successfully uploaded ${data.createdCount} hospital applications!`);
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 1000);
    } catch (err: unknown) {
      setError((err as Error).message || "Bulk upload failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-neutral-100">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4 bg-neutral-50/50">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Building2 size={18} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-neutral-800">Upload / Add Hospital Partner</h2>
              <p className="text-xs text-neutral-400">Add individual hospital or upload list via CSV spreadsheet</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-neutral-100 px-6 bg-white gap-4">
          <button
            type="button"
            onClick={() => {
              setTab("single");
              setError("");
              setResultMsg("");
            }}
            className={
              "flex items-center gap-2 py-3 text-sm font-semibold border-b-2 transition " +
              (tab === "single"
                ? "border-brand-600 text-brand-600"
                : "border-transparent text-neutral-400 hover:text-neutral-700")
            }
          >
            <Plus size={15} /> Add Single Hospital
          </button>
          <button
            type="button"
            onClick={() => {
              setTab("bulk");
              setError("");
              setResultMsg("");
            }}
            className={
              "flex items-center gap-2 py-3 text-sm font-semibold border-b-2 transition " +
              (tab === "bulk"
                ? "border-brand-600 text-brand-600"
                : "border-transparent text-neutral-400 hover:text-neutral-700")
            }
          >
            <FileSpreadsheet size={15} /> Bulk Upload CSV
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {error && (
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-danger-50 p-3 text-xs text-danger-600 border border-danger-200">
              <AlertCircle size={15} className="shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {resultMsg && (
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-success-50 p-3 text-xs text-success-700 border border-success-200">
              <CheckCircle2 size={15} className="shrink-0" />
              <span>{resultMsg}</span>
            </div>
          )}

          {tab === "single" ? (
            <form id="singleHospForm" onSubmit={handleSingleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-neutral-600 mb-1">
                    Hospital Name <span className="text-danger-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={singleForm.hospitalName}
                    onChange={(e) => handleSingleChange("hospitalName", e.target.value)}
                    placeholder="e.g. City Day Care & Surgery Hospital"
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 placeholder:text-neutral-300 focus:border-brand-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Contact Person Name</label>
                  <input
                    type="text"
                    value={singleForm.contactName}
                    onChange={(e) => handleSingleChange("contactName", e.target.value)}
                    placeholder="e.g. Dr. Sumana Zehra"
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Designation</label>
                  <input
                    type="text"
                    value={singleForm.contactDesignation}
                    onChange={(e) => handleSingleChange("contactDesignation", e.target.value)}
                    placeholder="e.g. Administrator / Medical Director"
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Contact Phone</label>
                  <input
                    type="tel"
                    value={singleForm.contactPhone}
                    onChange={(e) => handleSingleChange("contactPhone", e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Contact Email</label>
                  <input
                    type="email"
                    value={singleForm.contactEmail}
                    onChange={(e) => handleSingleChange("contactEmail", e.target.value)}
                    placeholder="e.g. contact@cityhospital.com"
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Hospital Type</label>
                  <select
                    value={singleForm.hospitalType}
                    onChange={(e) => handleSingleChange("hospitalType", e.target.value)}
                    className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                  >
                    <option value="Multi-Speciality Hospital">Multi-Speciality Hospital</option>
                    <option value="Single-Speciality Center">Single-Speciality Center</option>
                    <option value="Day Care / Clinic">Day Care / Clinic</option>
                    <option value="Nursing Home">Nursing Home</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">City</label>
                  <input
                    type="text"
                    value={singleForm.city}
                    onChange={(e) => handleSingleChange("city", e.target.value)}
                    placeholder="e.g. Bangalore"
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">PIN Code</label>
                  <input
                    type="text"
                    value={singleForm.pinCode}
                    onChange={(e) => handleSingleChange("pinCode", e.target.value)}
                    placeholder="e.g. 560047"
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Total Beds</label>
                  <input
                    type="text"
                    value={singleForm.totalBeds}
                    onChange={(e) => handleSingleChange("totalBeds", e.target.value)}
                    placeholder="e.g. 30"
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Full Address</label>
                  <input
                    type="text"
                    value={singleForm.address}
                    onChange={(e) => handleSingleChange("address", e.target.value)}
                    placeholder="e.g. #42, Main Road, Neelsandra, Bangalore"
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Status</label>
                  <select
                    value={singleForm.status}
                    onChange={(e) => handleSingleChange("status", e.target.value)}
                    className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                  >
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                    <option value="needs-more-information">Needs More Information</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Stage</label>
                  <select
                    value={singleForm.stage}
                    onChange={(e) => handleSingleChange("stage", e.target.value)}
                    className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                  >
                    <option value="submitted">Application Submitted</option>
                    <option value="document-verification">Document Verification</option>
                    <option value="site-visit">Site Visit</option>
                    <option value="agreement-signing">Agreement Signing</option>
                    <option value="activated">Activated</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Notes / Remarks</label>
                  <input
                    type="text"
                    value={singleForm.reviewerNotes}
                    onChange={(e) => handleSingleChange("reviewerNotes", e.target.value)}
                    placeholder="e.g. Partner hospital for daycare surgeries"
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                  />
                </div>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-brand-50/60 rounded-xl border border-brand-100">
                <div>
                  <p className="text-xs font-semibold text-brand-900">Upload Hospital Spreadsheet (CSV)</p>
                  <p className="text-[11px] text-brand-700">Columns: Hospital Name, Contact Person, Phone, Email, Hospital Type, City, PIN, Address, Total Beds, Status, Notes</p>
                </div>
                <button
                  type="button"
                  onClick={downloadSampleCSV}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-sm border border-brand-200 hover:bg-brand-50 transition shrink-0"
                >
                  <Download size={13} /> Download Sample CSV
                </button>
              </div>

              {/* Drag & Drop File Input */}
              <label className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-neutral-200 p-6 text-center hover:border-brand-400 hover:bg-brand-50/20 cursor-pointer transition">
                <Upload size={24} className="text-neutral-400 mb-2" />
                <span className="text-sm font-medium text-neutral-700">
                  {fileName ? `Selected: ${fileName}` : "Click to select a CSV file or drag and drop"}
                </span>
                <span className="text-xs text-neutral-400 mt-0.5">Supports .csv or plain text list</span>
                <input
                  type="file"
                  accept=".csv,text/csv,text/plain"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>

              {/* Or paste CSV content */}
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">
                  Or paste CSV rows directly:
                </label>
                <textarea
                  rows={4}
                  value={bulkText}
                  onChange={(e) => handleTextChange(e.target.value)}
                  placeholder="Hospital Name,Contact Person,Phone,Email,Hospital Type,City..."
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2 font-mono text-xs text-neutral-800 placeholder:text-neutral-300 focus:border-brand-500 focus:outline-none"
                />
              </div>

              {/* Preview Table */}
              {parsedRows.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-neutral-700 mb-1.5">
                    Parsed Hospitals ({parsedRows.length} ready to import)
                  </p>
                  <div className="max-h-48 overflow-auto rounded-lg border border-neutral-200 bg-neutral-50 text-xs">
                    <table className="w-full text-left">
                      <thead className="border-b border-neutral-200 bg-neutral-100 font-semibold text-neutral-600 sticky top-0">
                        <tr>
                          <th className="p-2">#</th>
                          <th className="p-2">Hospital</th>
                          <th className="p-2">Contact Person</th>
                          <th className="p-2">Phone</th>
                          <th className="p-2">Email</th>
                          <th className="p-2">City</th>
                        </tr>
                      </thead>
                      <tbody>
                        {parsedRows.slice(0, 10).map((row, i) => (
                          <tr key={i} className="border-b border-neutral-100 last:border-0 hover:bg-white">
                            <td className="p-2 font-mono text-neutral-400">{i + 1}</td>
                            <td className="p-2 font-medium text-neutral-800">
                              {row["Hospital Name"] || row.hospitalName || row.Name || row.name || "—"}
                            </td>
                            <td className="p-2 text-neutral-600">
                              {row["Contact Person"] || row.contactName || "—"}
                            </td>
                            <td className="p-2 text-neutral-600">
                              {row["Phone"] || row.phone || row.contactPhone || "—"}
                            </td>
                            <td className="p-2 text-neutral-600">{row["Email"] || row.email || "—"}</td>
                            <td className="p-2 text-neutral-600">{row["City"] || row.city || "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-neutral-100 px-6 py-4 bg-neutral-50/50">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100 transition"
          >
            Cancel
          </button>
          {tab === "single" ? (
            <button
              type="submit"
              form="singleHospForm"
              disabled={loading}
              className="flex items-center gap-1.5 rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 disabled:opacity-60 transition"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
              {loading ? "Adding…" : "Add Hospital"}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleBulkSubmit}
              disabled={loading || parsedRows.length === 0}
              className="flex items-center gap-1.5 rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 disabled:opacity-60 transition"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
              {loading ? "Uploading…" : `Import ${parsedRows.length} Hospitals`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
