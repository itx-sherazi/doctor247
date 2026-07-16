"use client";

import { ReactNode } from "react";
import { Check, CheckCircle2, Upload } from "lucide-react";

export function FieldLabel({ children, required }: { children: ReactNode; required?: boolean }) {
  return (
    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
      {children}
      {required && <span className="text-danger-500 ml-0.5">*</span>}
    </label>
  );
}

export function TextInput(
  props: React.InputHTMLAttributes<HTMLInputElement> & { label?: string; required?: boolean }
) {
  const { label, required, className, ...rest } = props;
  return (
    <div>
      {label && <FieldLabel required={required}>{label}</FieldLabel>}
      <input
        {...rest}
        className={
          "w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-[16px] sm:text-sm text-neutral-900 placeholder:text-neutral-400 shadow-sm transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 " +
          (className ?? "")
        }
      />
    </div>
  );
}

export function TextArea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; required?: boolean }
) {
  const { label, required, className, ...rest } = props;
  return (
    <div>
      {label && <FieldLabel required={required}>{label}</FieldLabel>}
      <textarea
        {...rest}
        className={
          "w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-[16px] sm:text-sm text-neutral-900 placeholder:text-neutral-400 shadow-sm transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 " +
          (className ?? "")
        }
      />
    </div>
  );
}

export function Select(
  props: React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string; required?: boolean; children: ReactNode }
) {
  const { label, required, className, children, ...rest } = props;
  return (
    <div>
      {label && <FieldLabel required={required}>{label}</FieldLabel>}
      <select
        {...rest}
        className={
          "w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-[16px] sm:text-sm text-neutral-900 shadow-sm transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 " +
          (className ?? "")
        }
      >
        {children}
      </select>
    </div>
  );
}

export function Checkbox({
  label,
  checked,
  onChange,
  description,
}: {
  label: ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
}) {
  return (
    <label className="flex items-start gap-2.5 cursor-pointer group">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="sr-only peer" />
      <span
        className={
          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition " +
          (checked ? "border-brand-600 bg-brand-600" : "border-neutral-300 bg-white group-hover:border-brand-300")
        }
      >
        {checked && <Check size={13} strokeWidth={3} className="text-white" />}
      </span>
      <span className="text-sm text-neutral-700 leading-snug">
        {label}
        {description && <span className="block text-xs text-neutral-400 mt-0.5">{description}</span>}
      </span>
    </label>
  );
}

export function ChipToggle({
  label,
  selected,
  onToggle,
}: {
  label: string;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={
        "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition " +
        (selected
          ? "border-brand-500 bg-brand-500 text-white shadow-sm"
          : "border-neutral-200 bg-white text-neutral-600 hover:border-brand-300 hover:text-brand-600")
      }
    >
      {selected && <Check size={14} strokeWidth={3} />}
      {label}
    </button>
  );
}

export function RadioCard({
  label,
  description,
  selected,
  onSelect,
  icon,
}: {
  label: string;
  description?: string;
  selected: boolean;
  onSelect: () => void;
  icon?: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={
        "flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left transition " +
        (selected
          ? "border-brand-500 bg-brand-50 ring-1 ring-brand-200"
          : "border-neutral-200 bg-white hover:border-brand-200")
      }
    >
      {icon && (
        <span className={"mt-0.5 shrink-0 " + (selected ? "text-brand-600" : "text-neutral-400")}>{icon}</span>
      )}
      <span
        className={
          "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 " +
          (selected ? "border-brand-600" : "border-neutral-300")
        }
      >
        {selected && <span className="h-2 w-2 rounded-full bg-brand-600" />}
      </span>
      <span>
        <span className="block text-sm font-medium text-neutral-800">{label}</span>
        {description && <span className="block text-xs text-neutral-400 mt-0.5">{description}</span>}
      </span>
    </button>
  );
}

export function SectionCard({
  title,
  subtitle,
  children,
  icon,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-neutral-100 bg-white p-4 sm:p-6 shadow-sm">
      <div className="mb-4 flex items-start gap-3">
        {icon && (
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
            {icon}
          </span>
        )}
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-neutral-800">{title}</h3>
          {subtitle && <p className="text-sm text-neutral-400 mt-0.5">{subtitle}</p>}
        </div>
      </div>
      {children}
    </div>
  );
}

interface ExistingFileLike {
  url: string;
  originalName: string;
}

function isExistingFile(value: unknown): value is ExistingFileLike {
  return Boolean(value) && typeof value === "object" && "url" in (value as object);
}

export function FileDrop({
  label,
  required,
  file,
  onFile,
  note,
}: {
  label: string;
  required?: boolean;
  file?: File | ExistingFileLike | null;
  onFile: (file: File) => void;
  note?: string;
}) {
  const existing = isExistingFile(file) ? file : null;
  const fileName = existing ? existing.originalName : (file as File | null | undefined)?.name;
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      {note && <p className="text-xs text-neutral-400 mb-1.5 -mt-1">{note}</p>}
      <label className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-dashed border-neutral-300 bg-neutral-50 px-3.5 py-3 text-sm transition hover:border-brand-400 hover:bg-brand-50/40">
        <span className="flex items-center gap-2 min-w-0">
          {fileName ? (
            <CheckCircle2 size={16} className="shrink-0 text-success-500" />
          ) : (
            <Upload size={16} className="shrink-0 text-neutral-400" />
          )}
          <span className={"truncate " + (fileName ? "text-neutral-700 font-medium" : "text-neutral-400")}>
            {fileName ?? "Click to upload or drag file here"}
          </span>
        </span>
        {fileName ? (
          <span className="hidden sm:inline-block shrink-0 rounded-full bg-success-50 px-2.5 py-0.5 text-xs font-medium text-success-600">
            {existing ? "Uploaded previously" : "Uploaded"}
          </span>
        ) : (
          <span className="hidden sm:inline-block shrink-0 rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-600">
            Browse
          </span>
        )}
        <input
          type="file"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) onFile(f);
          }}
        />
      </label>
    </div>
  );
}
