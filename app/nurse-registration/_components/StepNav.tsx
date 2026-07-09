"use client";

import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

export function StepNav({
  onBack,
  onNext,
  nextLabel = "Continue",
  backDisabled,
  nextDisabled,
  loading,
}: {
  onBack: () => void;
  onNext: () => void;
  nextLabel?: string;
  backDisabled?: boolean;
  nextDisabled?: boolean;
  loading?: boolean;
}) {
  return (
    <div className="sticky bottom-0 -mx-4 sm:mx-0 mt-6 flex items-center justify-between gap-3 border-t border-neutral-100 bg-neutral-50/95 backdrop-blur px-4 sm:border-0 sm:bg-transparent sm:px-0 py-3 sm:py-0">
      <button
        type="button"
        onClick={onBack}
        disabled={backDisabled}
        className="flex items-center gap-1.5 rounded-lg px-3 sm:px-4 py-2.5 text-sm font-medium text-neutral-500 transition hover:bg-neutral-100 disabled:opacity-0"
      >
        <ArrowLeft size={16} /> Back
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        className="flex flex-1 sm:flex-none items-center justify-center gap-1.5 rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-400"
      >
        {loading ? <Loader2 size={16} className="animate-spin" /> : null}
        {nextLabel} {!loading && <ArrowRight size={16} />}
      </button>
    </div>
  );
}
