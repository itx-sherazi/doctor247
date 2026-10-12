"use client";

import { usePathname } from "next/navigation";
import { TopBar } from "./TopBar";
import { Navbar } from "./Navbar";
import { MainFooter } from "./MainFooter";

const PUBLIC_ROUTES = [
  "/",
  "/nurse-services",
  "/doctor-services",
  "/physio-services",
  "/lab-tests",
  "/about",
  "/doctors",
  "/careers",
  "/blogs",
  "/contact",
  "/legal",
  "/login",
  "/signup",
];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showChrome =
    PUBLIC_ROUTES.includes(pathname) ||
    pathname === "/surgery" ||
    pathname.startsWith("/surgery/");

  if (!showChrome) return <>{children}</>;

  return (
    <>
      <TopBar />
      <Navbar />
      {children}
      <MainFooter />
    </>
  );
}