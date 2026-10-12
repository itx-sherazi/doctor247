import Image from "next/image";
import Link from "next/link";
import { Heart, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const FOOTER_COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Home Doctor", href: "/doctor-services" },
      { label: "Home Nursing", href: "/nurse-services" },
      { label: "Physiotherapy", href: "/physio-services" },
      { label: "Lab Tests", href: "/lab-tests" },
      { label: "Surgeries", href: "/surgery" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Doctors", href: "/doctors" },
      // { label: "Careers", href: "/careers" },
      // { label: "Blogs", href: "/blogs" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function MainFooter() {
  return (
    <footer className="bg-hblue text-white/85 pt-14 pb-8 mb-18 lg:mb-0">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Top grid: brand + Services + Company + Support */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="inline-block mb-3">
              <Image
                src="/logo-nav.png"
                alt="Doctor247"
                width={140}
                height={40}
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-[0.9rem] mb-5 opacity-80 leading-relaxed">
              Healthcare at your doorstep. Affordable surgeries, home doctor visits, and professional
              nursing across Bangalore.
            </p>
            <div className="flex gap-3 text-[1.2rem]">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Services + Company (from FOOTER_COLUMNS) */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold mb-4 text-base">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/75 text-[0.9rem] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Support + Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base">Support</h4>
            <ul className="space-y-2.5 mb-5">
              <li>
                <Link
                  href="/legal"
                  className="text-white/75 text-[0.9rem] hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal?tab=terms"
                  className="text-white/75 text-[0.9rem] hover:text-white transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/75 text-[0.9rem] hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>

            <h4 className="text-white font-bold mb-3 text-base">Get in Touch</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:7676266247"
                  className="flex items-start gap-2 text-white/75 text-[0.85rem] hover:text-white transition-colors"
                >
                  <Phone size={13} className="shrink-0 mt-0.5" />
                  <span>
                    Surgeries/Doctor
                    <span className="block text-white/60 text-[0.8rem]">+91 76762 66247</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:7892300247"
                  className="flex items-start gap-2 text-white/75 text-[0.85rem] hover:text-white transition-colors"
                >
                  <Phone size={13} className="shrink-0 mt-0.5" />
                  <span>
                    Home Nursing / Physio / Lab
                    <span className="block text-white/60 text-[0.8rem]">+91 78923 00247</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 text-center text-[0.85rem] opacity-70">
          © 2026 Doctor247. All rights reserved. Made with{" "}
          <Heart size={13} className="inline text-red-500" fill="currentColor" /> in Bangalore.
        </div>
      </div>
    </footer>
  );
}