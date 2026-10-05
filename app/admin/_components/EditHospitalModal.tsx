"use client";

import { useState } from "react";
import { Check, FileText, Loader2, Plus, Save, Trash2, Upload, X } from "lucide-react";

interface HospitalDoc {
  url: string;
  publicId?: string;
  originalName?: string;
}

interface HospitalData {
  applicationId: string;
  hospitalName?: string;
  registrationNumber?: string;
  hospitalType?: string;
  ownershipType?: string;
  address?: string;
  city?: string;
  state?: string;
  pinCode?: string;
  mapsUrl?: string;
  contactName?: string;
  contactDesignation?: string;
  contactEmail?: string;
  contactPhone?: string;
  totalBeds?: string;
  icuBeds?: string;
  nicuPicuBeds?: string;
  ventilators?: string;
  operationTheatres?: string;
  emergencyServices?: string;
  ambulanceServices?: string;
  infrastructure?: string[];
  specialities?: string[];
  consultantCount?: string;
  doctorList?: string;
  surgeriesPerformed?: string;
  accreditations?: string[];
  partnershipModel?: string;
  surgeryCostMin?: string;
  surgeryCostMax?: string;
  additionalNotes?: string;
  documents?: HospitalDoc[];
  stage?: string;
  status?: string;
  reviewerNotes?: string;
}

interface EditHospitalModalProps {
  hospital: HospitalData;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (updated: HospitalData) => void;
}

export function EditHospitalModal({ hospital, isOpen, onClose, onSuccess }: EditHospitalModalProps) {
  const [activeTab, setActiveTab] = useState<"details" | "documents">("details");
  const [formData, setFormData] = useState<HospitalData>({
    ...hospital,
    hospitalName: hospital.hospitalName || "",
    contactName: hospital.contactName || "",
    contactDesignation: hospital.contactDesignation || "",
    contactEmail: hospital.contactEmail || "",
    contactPhone: hospital.contactPhone || "",
    hospitalType: hospital.hospitalType || "",
    ownershipType: hospital.ownershipType || "",
    address: hospital.address || "",
    city: hospital.city || "",
    state: hospital.state || "",
    pinCode: hospital.pinCode || "",
    totalBeds: hospital.totalBeds || "",
    icuBeds: hospital.icuBeds || "",
    ventilators: hospital.ventilators || "",
    operationTheatres: hospital.operationTheatres || "",
    partnershipModel: hospital.partnershipModel || "",
    surgeryCostMin: hospital.surgeryCostMin || "",
    surgeryCostMax: hospital.surgeryCostMax || "",
    stage: hospital.stage || "submitted",
    status: hospital.status || "pending",
    reviewerNotes: hospital.reviewerNotes || "",
  });

  const [documentsList, setDocumentsList] = useState<HospitalDoc[]>(hospital.documents || []);
  const [saving, setSaving] = useState(false);
  const [uploadingDoc, setUploadingDoc] = useState(false);
  const [deletingDocId, setDeletingDocId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  function updateField<K extends keyof HospitalData>(key: K, value: HospitalData[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadingDoc(true);
    setError("");

    try {
      const uploadData = new FormData();
      for (let i = 0; i < files.length; i++) {
        uploadData.append("documents", files[i]);
      }

      const res = await fetch(`/api/hospital-applications/${hospital.applicationId}`, {
        method: "PATCH",
        body: uploadData,
      });

      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error || "Failed to upload document");
      }

      const data = await res.json();
      if (data.application?.documents) {
        setDocumentsList(data.application.documents);
        setFormData((prev) => ({ ...prev, documents: data.application.documents }));
      }
    } catch (err: unknown) {
      setError((err as Error).message || "Failed to upload document");
    } finally {
      setUploadingDoc(false);
      e.target.value = "";
    }
  }

  async function handleDeleteDocument(publicId?: string) {
    if (!publicId) return;
    if (!confirm("Are you sure you want to delete this document?")) return;

    setDeletingDocId(publicId);
    setError("");

    try {
      const res = await fetch(
        `/api/hospital-applications/${hospital.applicationId}?publicId=${encodeURIComponent(publicId)}`,
        { method: "DELETE" }
      );

      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error || "Failed to delete document");
      }

      const updated = documentsList.filter((d) => d.publicId !== publicId);
      setDocumentsList(updated);
      setFormData((prev) => ({ ...prev, documents: updated }));
    } catch (err: unknown) {
      setError((err as Error).message || "Failed to delete document");
    } finally {
      setDeletingDocId(null);
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch(`/api/hospital-applications/${hospital.applicationId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to update hospital");
      }

      const data = await res.json();
      setSuccess(true);
      setTimeout(() => {
        onSuccess(data.application || formData);
        onClose();
      }, 600);
    } catch (err: unknown) {
      setError((err as Error).message || "Something went wrong while saving.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-neutral-100">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4 bg-neutral-50/50">
          <div>
            <h2 className="text-lg font-bold text-neutral-800">Edit Hospital Profile & Documents</h2>
            <p className="text-xs text-neutral-400">ID: {hospital.applicationId}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-neutral-100 px-6 bg-white gap-4 text-xs font-semibold text-neutral-500">
          <button
            type="button"
            onClick={() => setActiveTab("details")}
            className={`py-3 border-b-2 transition ${
              activeTab === "details"
                ? "border-brand-600 text-brand-600 font-bold"
                : "border-transparent hover:text-neutral-700"
            }`}
          >
            Hospital Details
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("documents")}
            className={`py-3 border-b-2 flex items-center gap-1.5 transition ${
              activeTab === "documents"
                ? "border-brand-600 text-brand-600 font-bold"
                : "border-transparent hover:text-neutral-700"
            }`}
          >
            <FileText size={14} />
            Documents & Verification ({documentsList.length})
          </button>
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {error && (
            <div className="rounded-lg bg-danger-50 p-3 text-xs text-danger-600 border border-danger-200">
              {error}
            </div>
          )}

          {activeTab === "details" ? (
            <form id="hospital-edit-form" onSubmit={handleSave} className="space-y-6">
              {/* Section 1: Hospital Details */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Hospital Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Hospital Name</label>
                    <input
                      type="text"
                      value={formData.hospitalName}
                      onChange={(e) => updateField("hospitalName", e.target.value)}
                      placeholder="e.g. City Day Care & Surgery"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Hospital Type</label>
                    <select
                      value={formData.hospitalType}
                      onChange={(e) => updateField("hospitalType", e.target.value)}
                      className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    >
                      <option value="">Select Type</option>
                      <option value="Multi-Speciality Hospital">Multi-Speciality Hospital</option>
                      <option value="Single-Speciality Center">Single-Speciality Center</option>
                      <option value="Day Care / Clinic">Day Care / Clinic</option>
                      <option value="Nursing Home">Nursing Home</option>
                      <option value="Diagnostic & Surgical Center">Diagnostic & Surgical Center</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Ownership Type</label>
                    <select
                      value={formData.ownershipType}
                      onChange={(e) => updateField("ownershipType", e.target.value)}
                      className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    >
                      <option value="">Select Ownership</option>
                      <option value="Private">Private</option>
                      <option value="Trust / NGO">Trust / NGO</option>
                      <option value="Corporate / Chain">Corporate / Chain</option>
                      <option value="Partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Registration Number</label>
                    <input
                      type="text"
                      value={formData.registrationNumber}
                      onChange={(e) => updateField("registrationNumber", e.target.value)}
                      placeholder="e.g. KPME-98765"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Contact Information */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Contact Person
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Contact Name</label>
                    <input
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => updateField("contactName", e.target.value)}
                      placeholder="e.g. Dr. Sumana Zehra"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Designation</label>
                    <input
                      type="text"
                      value={formData.contactDesignation}
                      onChange={(e) => updateField("contactDesignation", e.target.value)}
                      placeholder="e.g. Medical Director / Administrator"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Contact Phone</label>
                    <input
                      type="tel"
                      value={formData.contactPhone}
                      onChange={(e) => updateField("contactPhone", e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Contact Email</label>
                    <input
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => updateField("contactEmail", e.target.value)}
                      placeholder="e.g. hospital@example.com"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Location */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Address & Location
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">City</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => updateField("city", e.target.value)}
                      placeholder="e.g. Bangalore"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">State</label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => updateField("state", e.target.value)}
                      placeholder="e.g. Karnataka"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">PIN Code</label>
                    <input
                      type="text"
                      value={formData.pinCode}
                      onChange={(e) => updateField("pinCode", e.target.value)}
                      placeholder="e.g. 560047"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Full Address</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => updateField("address", e.target.value)}
                      placeholder="Building, street, landmark"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 4: Capacity */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Capacity & Facilities
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Total Beds</label>
                    <input
                      type="text"
                      value={formData.totalBeds}
                      onChange={(e) => updateField("totalBeds", e.target.value)}
                      placeholder="e.g. 50"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">ICU Beds</label>
                    <input
                      type="text"
                      value={formData.icuBeds}
                      onChange={(e) => updateField("icuBeds", e.target.value)}
                      placeholder="e.g. 10"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Ventilators</label>
                    <input
                      type="text"
                      value={formData.ventilators}
                      onChange={(e) => updateField("ventilators", e.target.value)}
                      placeholder="e.g. 5"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">OT Count</label>
                    <input
                      type="text"
                      value={formData.operationTheatres}
                      onChange={(e) => updateField("operationTheatres", e.target.value)}
                      placeholder="e.g. 3"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 5: Credentialing & Status */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Partnership Status
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => updateField("status", e.target.value)}
                      className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    >
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                      <option value="needs-more-information">Needs More Information</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Stage</label>
                    <select
                      value={formData.stage}
                      onChange={(e) => updateField("stage", e.target.value)}
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
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Reviewer Notes</label>
                    <textarea
                      rows={3}
                      value={formData.reviewerNotes}
                      onChange={(e) => updateField("reviewerNotes", e.target.value)}
                      placeholder="Notes on hospital facilities, inspection, agreement terms..."
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:border-brand-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </form>
          ) : (
            /* Document Management Tab */
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-brand-50/60 rounded-xl border border-brand-100">
                <div>
                  <h4 className="text-sm font-bold text-neutral-800">Hospital Verification Documents</h4>
                  <p className="text-xs text-neutral-500">
                    Upload registration certificates, NABH / NABL licenses, clinical establishment certificates, or tax documents.
                  </p>
                </div>
                <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-brand-700 transition">
                  {uploadingDoc ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <Plus size={14} />
                  )}
                  {uploadingDoc ? "Uploading..." : "Upload New File"}
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.png,.jpg,.jpeg,.webp"
                    onChange={handleFileUpload}
                    disabled={uploadingDoc}
                    className="hidden"
                  />
                </label>
              </div>

              {documentsList.length === 0 ? (
                <div className="text-center py-10 border-2 border-dashed border-neutral-200 rounded-xl bg-neutral-50">
                  <FileText className="mx-auto h-8 w-8 text-neutral-300 mb-2" />
                  <p className="text-sm font-medium text-neutral-600">No documents uploaded yet</p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Upload hospital accreditation or establishment documents above.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {documentsList.map((doc, idx) => {
                    const isImg = doc.url && (/\.(jpg|jpeg|png|webp|gif|svg|avif)($|\?)/i.test(doc.url) || doc.url.includes("/image/upload/"));
                    return (
                      <div
                        key={doc.publicId || idx}
                        className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-white hover:border-brand-300 transition shadow-2xs"
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          {isImg ? (
                            <a
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group relative block h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100"
                              title="Click to view full image"
                            >
                              <img
                                src={doc.url}
                                alt={doc.originalName || "Document"}
                                className="h-full w-full object-cover transition group-hover:scale-105"
                              />
                            </a>
                          ) : (
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 font-bold text-xs border border-brand-100">
                              PDF
                            </div>
                          )}
                          <div className="truncate">
                            <p className="text-xs font-bold text-neutral-800 truncate max-w-[170px]">
                              {doc.originalName || `Document ${idx + 1}`}
                            </p>
                            <a
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] font-medium text-brand-600 hover:underline inline-block mt-0.5"
                            >
                              View File ↗
                            </a>
                          </div>
                        </div>

                        {doc.publicId && (
                          <button
                            type="button"
                            onClick={() => handleDeleteDocument(doc.publicId)}
                            disabled={deletingDocId === doc.publicId}
                            className="rounded-lg p-2 text-neutral-400 hover:bg-danger-50 hover:text-danger-600 transition shrink-0 ml-2"
                            title="Delete Document"
                          >
                            {deletingDocId === doc.publicId ? (
                              <Loader2 size={16} className="animate-spin text-danger-600" />
                            ) : (
                              <Trash2 size={16} />
                            )}
                          </button>
                        )}
                      </div>
                    );
                  })}
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
          {activeTab === "details" ? (
            <button
              type="submit"
              form="hospital-edit-form"
              disabled={saving}
              className="flex items-center gap-1.5 rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 disabled:opacity-60 transition"
            >
              {saving ? (
                <Loader2 size={16} className="animate-spin" />
              ) : success ? (
                <Check size={16} />
              ) : (
                <Save size={16} />
              )}
              {saving ? "Saving…" : success ? "Saved!" : "Save Changes"}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                onSuccess(formData);
                onClose();
              }}
              className="flex items-center gap-1.5 rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 transition"
            >
              <Check size={16} />
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

