import Image from "next/image";
import { Heart, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "./SocialIcons";

const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: ["Surgeries", "Home Doctor", "Home Nursing", "Physiotherapy", "Lab Tests"],
  },
  {
    title: "Specialities",
    links: ["General Surgery", "Orthopaedics", "Urology", "ENT", "Gynaecology"],
  },
  {
    title: "Company",
    links: ["About Us", "Doctors", "Careers", "Blogs", "Contact"],
  },
];

export function MainFooter() {
  return (
    <footer className="bg-hblue text-white/85 pt-14 pb-8 mb-18 lg:mb-0">
      <div className="mx-auto max-w-[1200px] px-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="inline-block mb-3">
            <Image src="/logo-nav.png" alt="Doctor247" width={140} height={40} className="h-20 sm:h-30 lg:h-20 w-auto object-contain" />
          </div>
          <p className="text-[0.9rem] mb-3 opacity-80">
            Healthcare at your doorstep. Affordable surgeries, home doctor visits, and professional nursing across
            Bangalore.
          </p>
          <div className="flex gap-3 text-[1.2rem]">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <FacebookIcon size={20} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <InstagramIcon size={20} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <YoutubeIcon size={20} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="text-white font-bold mb-3.5 text-base">{col.title}</h4>
            {col.links.map((link) => (
              <a key={link} href="#" className="block text-white/75 text-[0.9rem] mb-1.5 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        ))}

        <div>
          <h4 className="text-white font-bold mb-3.5 text-base">Support</h4>
          <a href="#" className="block text-white/75 text-[0.9rem] mb-1.5 hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="block text-white/75 text-[0.9rem] mb-1.5 hover:text-white transition-colors">
            Terms &amp; Conditions
          </a>
          <a href="#" className="block text-white/75 text-[0.9rem] mb-1.5 hover:text-white transition-colors">
            Insurance
          </a>
          <a href="#" className="block text-white/75 text-[0.9rem] mb-1.5 hover:text-white transition-colors">
            FAQs
          </a>
          <a href="tel:7676266247" className="flex items-center gap-1.5 text-white/75 text-[0.9rem] mb-1.5 hover:text-white transition-colors">
            <Phone size={13} /> Surgeries/Doctor: +91 7676266247
          </a>
          <a href="tel:7892300247" className="flex items-center gap-1.5 text-white/75 text-[0.9rem] mb-1.5 hover:text-white transition-colors">
            <Phone size={13} /> Home Nursing: +91 7892300247
          </a>
        </div>

        <div className="col-span-full border-t border-white/10 pt-5 mt-3 text-center text-[0.85rem] opacity-70">
          © 2026 Doctor247. All rights reserved. Made with <Heart size={13} className="inline text-red-500" fill="currentColor" /> in
          Bangalore.
        </div>
      </div>
    </footer>
  );
}
