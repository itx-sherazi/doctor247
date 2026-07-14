"use client";

import { useState } from "react";
import { Type } from "lucide-react";

export function AccessibilityToggle() {
  const [large, setLarge] = useState(false);

  function toggle() {
    const next = !large;
    setLarge(next);
    document.documentElement.style.fontSize = next ? "1.15rem" : "";
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle larger text"
      className="fixed bottom-24 lg:bottom-6 right-4 sm:right-6 z-[900] flex h-12 w-12 items-center justify-center rounded-full bg-white text-hblue border border-hgrey-border shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:bg-hgrey transition-colors"
    >
      <Type size={large ? 22 : 18} />
    </button>
  );
}
