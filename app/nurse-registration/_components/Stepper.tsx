"use client";

import { Check } from "lucide-react";
import { STEP_TITLES } from "../_lib/types";

export function Stepper({
  current,
  maxStepReached,
  onStepClick,
}: {
  current: number;
  maxStepReached: number;
  onStepClick: (step: number) => void;
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          Step {current + 1} of {STEP_TITLES.length}
        </span>
        <span className="text-xs text-neutral-400 truncate ml-2">{STEP_TITLES[current]}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-neutral-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600 transition-all duration-300"
          style={{ width: `${((current + 1) / STEP_TITLES.length) * 100}%` }}
        />
      </div>

      {/* Mobile: compact dots */}
      <div className="flex md:hidden justify-center gap-1.5 mt-3">
        {STEP_TITLES.map((title, i) => (
          <button
            key={title}
            type="button"
            disabled={i > maxStepReached}
            onClick={() => onStepClick(i)}
            aria-label={`Go to step ${i + 1}: ${title}`}
            className={
              "h-1.5 rounded-full transition-all " +
              (i === current ? "w-5 bg-brand-600" : i < current ? "w-1.5 bg-brand-300" : "w-1.5 bg-neutral-200") +
              (i <= maxStepReached ? " cursor-pointer" : " cursor-not-allowed")
            }
          />
        ))}
      </div>

      {/* Desktop: numbered steps */}
      <div className="hidden md:flex justify-between mt-3">
        {STEP_TITLES.map((title, i) => (
          <div key={title} className="flex flex-col items-center flex-1">
            <button
              type="button"
              disabled={i > maxStepReached}
              onClick={() => onStepClick(i)}
              aria-label={`Go to step ${i + 1}: ${title}`}
              title={title}
              className={
                "flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold transition disabled:cursor-not-allowed " +
                (i < current
                  ? "bg-brand-500 text-white hover:bg-brand-600"
                  : i === current
                  ? "bg-brand-600 text-white ring-4 ring-brand-100"
                  : i <= maxStepReached
                  ? "bg-neutral-200 text-neutral-600 hover:bg-brand-100 hover:text-brand-700"
                  : "bg-neutral-100 text-neutral-400")
              }
            >
              {i < current ? <Check size={13} strokeWidth={3} /> : i + 1}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
