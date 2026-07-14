"use client";

import { useEffect, useRef, useState } from "react";
import { Bone, HandHeart, Headset, Hospital, HouseHeart, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const OPTIONS = [
  { icon: HouseHeart, label: "Doctor Visit", href: "#", className: "text-htext" },
  { icon: HandHeart, label: "Home Nursing", href: "#", className: "text-htext" },
  { icon: Hospital, label: "Surgery", href: "#", className: "text-htext" },
  { icon: Bone, label: "Physiotherapy", href: "#", className: "text-htext" },
];

export function FloatingWidget() {
  const [open, setOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <div ref={widgetRef} className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-[998] flex flex-col items-end gap-2.5">
      {open && (
        <div className="flex flex-col gap-1 bg-white rounded-2xl p-3 [box-shadow:0_12px_40px_rgba(15,76,129,0.14)] border border-hgrey-border min-w-[200px]">
          {OPTIONS.map((opt) => (
            <a
              key={opt.label}
              href={opt.href}
              className={"flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg font-medium text-[0.85rem] transition-colors hover:bg-hblue-light hover:text-hblue " + opt.className}
            >
              <opt.icon size={19} className="w-6 text-center shrink-0" /> {opt.label}
            </a>
          ))}
          <a
            href="tel:7676266247"
            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg font-medium text-[0.85rem] text-hgreen transition-colors hover:bg-hgreen-light"
          >
            <Phone size={19} className="w-6 text-center shrink-0" /> Call Now
          </a>
          <a
            href="#"
            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg font-medium text-[0.85rem] text-[#25D366] transition-colors hover:bg-[#e8f5e9]"
          >
            <FaWhatsapp size={19} /> WhatsApp
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 bg-hgreen text-white rounded-full px-5 py-3 font-bold text-[0.9rem] shadow-[0_4px_20px_rgba(0,168,107,0.35)] transition-all hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,168,107,0.45)]"
      >
        <Headset size={19} /> Need Healthcare Today?
      </button>
    </div>
  );
}
