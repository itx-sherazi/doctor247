"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, ChevronDown, Menu, UserPlus, UserRoundPlus, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Surgeries", href: "#" },
  { label: "Home Doctor", href: "#" },
  { label: "Home Nursing", href: "/nurse-services" },
  // { label: "Specialities", href: "#" },
  // { label: "Insurance", href: "#" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const registerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!registerOpen) return;

    function handleClickOutside(e: MouseEvent) {
      if (registerRef.current && !registerRef.current.contains(e.target as Node)) {
        setRegisterOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [registerOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="sticky top-0 z-[1000] bg-white border-b border-hgrey-border py-2.5 sm:py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-visible">
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center shrink-0 lg:absolute lg:left-6 lg:top-full lg:-translate-y-[55px] lg:z-10 lg:bg-white lg:rounded-xl lg:shadow-[0_4px_16px_rgba(0,0,0,0.08)] lg:p-2"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo-nav.png"
            alt="Doctor247"
            width={180}
            height={52}
            className="h-10 sm:h-11 lg:h-24 w-auto object-contain"
            priority
          />
        </Link>
        <div className="hidden lg:block w-32 shrink-0" aria-hidden="true" />

        <button
          className="lg:hidden text-hblue shrink-0"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={
            "lg:flex lg:static lg:flex-row lg:gap-6 xl:gap-7 lg:p-0 lg:border-0 lg:shadow-none lg:items-center lg:max-h-none lg:overflow-visible font-medium text-[0.9rem] xl:text-[0.95rem] " +
            (menuOpen
              ? "flex flex-col gap-4 absolute top-full left-0 right-0 bg-white p-6 border-b border-hgrey-border shadow-lg text-center items-stretch max-h-[calc(100vh-64px)] overflow-y-auto"
              : "hidden")
          }
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => {
                setMenuOpen(false);
                setRegisterOpen(false);
              }}
              className="text-htext hover:text-hblue transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="relative inline-block" ref={registerRef}>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setRegisterOpen((v) => !v);
              }}
              className="flex items-center justify-center gap-2 w-full lg:w-auto bg-white text-htext border-2 border-hblue px-4 sm:px-5.5 py-2 rounded-full font-semibold text-[0.9rem] xl:text-[0.95rem] transition-all hover:bg-hblue hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(15,76,129,0.25)]"
            >
              <UserPlus size={15} /> Register <ChevronDown size={12} />
            </button>

            {registerOpen && (
              <div className="lg:absolute lg:top-[calc(100%+12px)] lg:right-0 lg:min-w-[220px] lg:rounded-xl lg:shadow-[var(--tw-shadow)] lg:border lg:border-hgrey-border lg:bg-white lg:py-2 lg:z-[100] mt-1 lg:mt-0 [box-shadow:0_12px_56px_rgba(15,76,129,0.14)]">
                <a
                  href="#"
                  className="flex items-center gap-3 px-5.5 py-3 text-htext font-medium text-[0.95rem] hover:bg-hblue-light hover:text-hblue transition-colors justify-center lg:justify-start"
                >
                  <Building2 size={17} className="text-hblue w-[22px] text-center" /> Register as Hospital
                </a>
                <Link
                  href="/nurse-registration"
                  onClick={() => {
                    setMenuOpen(false);
                    setRegisterOpen(false);
                  }}
                  className="flex items-center gap-3 px-5.5 py-3 text-htext font-medium text-[0.95rem] hover:bg-hblue-light hover:text-hblue transition-colors justify-center lg:justify-start"
                >
                  <UserRoundPlus size={17} className="text-hblue w-[22px] text-center" /> Register as Nurse
                </Link>
              </div>
            )}
          </div>

          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="bg-hgreen text-white px-5 sm:px-6 py-2.5 rounded-full font-semibold transition-all hover:bg-hgreen-dark hover:-translate-y-0.5 text-center"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
