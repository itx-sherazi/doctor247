"use client";

import { Check } from "lucide-react";
import { STEP_TITLES } from "../_lib/types";

export function Stepper({ current }: { current: number }) {
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

      <div className="flex md:hidden justify-center gap-1.5 mt-3">
        {STEP_TITLES.map((title, i) => (
          <span
            key={title}
            className={
              "h-1.5 rounded-full transition-all " +
              (i === current ? "w-5 bg-brand-600" : i < current ? "w-1.5 bg-brand-300" : "w-1.5 bg-neutral-200")
            }
          />
        ))}
      </div>

      <div className="hidden md:flex justify-between mt-3">
        {STEP_TITLES.map((title, i) => (
          <div key={title} className="flex flex-col items-center flex-1">
            <div
              className={
                "flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold " +
                (i < current
                  ? "bg-brand-500 text-white"
                  : i === current
                  ? "bg-brand-600 text-white ring-4 ring-brand-100"
                  : "bg-neutral-100 text-neutral-400")
              }
            >
              {i < current ? <Check size={13} strokeWidth={3} /> : i + 1}
            </div>
            <span className="mt-1 text-[10px] text-neutral-400 text-center">{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
