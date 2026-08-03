"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, LogOut, Menu, User, UserPlus, X } from "lucide-react";
import { BookNowModal } from "./BookNowModal";

type AuthUser = { role: "nurse" | "hospital" } | null;

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Surgeries", href: "/surgery/hernia" },
  { label: "Home Doctor", href: "#" },
  { label: "Home Nursing", href: "/nurse-services" },
  // { label: "Specialities", href: "#" },
  // { label: "Insurance", href: "#" },
];

export function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [authUser, setAuthUser] = useState<AuthUser>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [bookNowOpen, setBookNowOpen] = useState(false);
  const registerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then(async (res) => (res.ok ? res.json() : null))
      .then((data) => setAuthUser(data ? { role: data.role } : null))
      .finally(() => setAuthChecked(true));
  }, []);

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

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setAuthUser(null);
    setMenuOpen(false);
    router.push("/");
    router.refresh();
  }

  return (
    <nav className="sticky top-0 z-[1000] bg-white border-b border-hgrey-border py-2.5 sm:py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-visible">
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center shrink-0" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo-nav.png"
            alt="Doctor247"
            width={212}
            height={90}
            className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
            priority
          />
        </Link>

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

          {!authChecked ? null : authUser ? (
            <div className="relative inline-block" ref={registerRef}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setRegisterOpen((v) => !v);
                }}
                className="flex items-center justify-center gap-2 w-full lg:w-auto bg-white text-htext border-2 border-hblue px-4 sm:px-5.5 py-2 rounded-full font-semibold text-[0.9rem] xl:text-[0.95rem] transition-all hover:bg-hblue hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(15,76,129,0.25)]"
              >
                <User size={15} /> Account <ChevronDown size={12} />
              </button>

              {registerOpen && (
                <div className="lg:absolute lg:top-[calc(100%+12px)] lg:right-0 lg:min-w-[220px] lg:rounded-xl lg:shadow-[var(--tw-shadow)] lg:border lg:border-hgrey-border lg:bg-white lg:py-2 lg:z-[100] mt-1 lg:mt-0 [box-shadow:0_12px_56px_rgba(15,76,129,0.14)]">
                  <Link
                    href={authUser.role === "nurse" ? "/nurse-profile" : "/hospital-profile"}
                    onClick={() => {
                      setMenuOpen(false);
                      setRegisterOpen(false);
                    }}
                    className="flex items-center gap-3 px-5.5 py-3 text-htext font-medium text-[0.95rem] hover:bg-hblue-light hover:text-hblue transition-colors justify-center lg:justify-start"
                  >
                    <User size={17} className="text-hblue w-[22px] text-center" /> View Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 px-5.5 py-3 text-htext font-medium text-[0.95rem] hover:bg-hblue-light hover:text-hblue transition-colors justify-center lg:justify-start"
                  >
                    <LogOut size={17} className="text-hblue w-[22px] text-center" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2.5">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full lg:w-auto bg-white text-htext border-2 border-hblue px-4 sm:px-5.5 py-2 rounded-full font-semibold text-[0.9rem] xl:text-[0.95rem] transition-all hover:bg-hblue hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(15,76,129,0.25)]"
              >
                <User size={15} /> Login
              </Link>
              <Link
                href="/signup"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full lg:w-auto bg-hblue text-white px-4 sm:px-5.5 py-2 rounded-full font-semibold text-[0.9rem] xl:text-[0.95rem] transition-all hover:bg-hblue-dark hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(15,76,129,0.25)]"
              >
                <UserPlus size={15} /> Register
              </Link>
            </div>
          )}

          {/* <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              setBookNowOpen(true);
            }}
            className="bg-hgreen text-white px-5 sm:px-6 py-2.5 rounded-full font-semibold transition-all hover:bg-hgreen-dark hover:-translate-y-0.5 text-center"
          >
            Book Now
          </button> */}
        </div>
      </div>

      {/* <BookNowModal open={bookNowOpen} onClose={() => setBookNowOpen(false)} /> */}
    </nav>
  );
}
