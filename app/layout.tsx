import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "./_home/SiteChrome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doctor247 – Affordable Surgeries • Home Doctor • Home Nursing in Bangalore",
  description:
    "Doctor247 offers home doctor visits, home nursing, affordable surgeries, and physiotherapy in Bangalore. Book trusted healthcare services at your doorstep. Best hospital in Bangalore for piles treatment, knee replacement, and more.",
  keywords:
    "home nurse service near me, home nursing services near me, home nurse near me, home nursing care, nurse for home visit, home care services, home nursing services, nurse near me, caregiver, home care services in bangalore, home health care, home care nursing services, nursing services, bangalore nursing home, home nurse bangalore, nursing jobs in bangalore, skin doctor in bangalore, best orthopedic doctor in bangalore, best ent doctor in bangalore, spine doctor in bangalore, heart doctor in bangalore, piles doctor in bangalore, thyroid doctor in bangalore, best eye doctor in bangalore, home visit doctors in bangalore, best diabetes doctor in bangalore, best fertility doctor in bangalore, neurologist doctor in bangalore, best cancer hospital in bangalore, maternity hospital in bangalore, best hospital in bangalore, best orthopedic hospital in bangalore, best heart hospital in bangalore, best neuro hospital in bangalore, best dental hospital in bangalore, best gynecologist hospital in bangalore, best ivf hospital in bangalore, best cardiac hospital in bangalore, best urology hospital in bangalore, best kidney hospital in bangalore, best diabetes hospital in bangalore, best hospital for piles treatment in bangalore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
