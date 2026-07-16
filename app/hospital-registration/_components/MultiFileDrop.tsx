"use client";

import { CheckCircle2, Upload, X } from "lucide-react";
import { ExistingFile } from "../_lib/types";

export function MultiFileDrop({
  label,
  files,
  existingFiles,
  onAdd,
  onRemove,
  note,
}: {
  label: string;
  files: File[];
  existingFiles?: ExistingFile[];
  onAdd: (files: File[]) => void;
  onRemove: (index: number) => void;
  note?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 mb-1.5">{label}</label>
      {note && <p className="text-xs text-neutral-400 mb-1.5 -mt-1">{note}</p>}
      <label className="flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-neutral-300 bg-neutral-50 px-4 py-6 text-center text-sm transition hover:border-brand-400 hover:bg-brand-50/40">
        <Upload size={22} className="text-brand-400" />
        <span className="font-medium text-neutral-500">Click to upload documents</span>
        <span className="text-xs text-neutral-400">PDF, JPG, PNG (Max 10MB each)</span>
        <input
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
          className="hidden"
          onChange={(e) => {
            const list = e.target.files ? Array.from(e.target.files) : [];
            if (list.length > 0) onAdd(list);
            e.target.value = "";
          }}
        />
      </label>

      {existingFiles && existingFiles.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {existingFiles.map((doc, i) => (
            <li
              key={doc.publicId ?? i}
              className="flex items-center justify-between gap-2 rounded-lg bg-brand-50 px-3 py-2 text-xs font-medium text-brand-700"
            >
              <a href={doc.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 truncate hover:underline">
                <CheckCircle2 size={14} className="shrink-0" /> {doc.originalName}
              </a>
              <span className="shrink-0 text-[10px] uppercase tracking-wide text-brand-500">Uploaded previously</span>
            </li>
          ))}
        </ul>
      )}

      {files.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {files.map((file, i) => (
            <li
              key={`${file.name}-${i}`}
              className="flex items-center justify-between gap-2 rounded-lg bg-success-50 px-3 py-2 text-xs font-medium text-success-700"
            >
              <span className="flex items-center gap-1.5 truncate">
                <CheckCircle2 size={14} className="shrink-0" /> {file.name}
              </span>
              <button
                type="button"
                onClick={() => onRemove(i)}
                className="shrink-0 text-success-600 hover:text-danger-600"
              >
                <X size={14} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
