import { BriefcaseMedical, Headset, HeartPulse, Stethoscope } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden sm:block bg-hblue text-white text-[0.85rem] py-2">
      <div className="mx-auto max-w-[1200px] px-6 flex justify-between items-center flex-wrap gap-2">
        <span className="flex items-center gap-4 flex-wrap">
          <a
            href="tel:7676266247"
            className="flex items-center gap-1.5 text-white/85 hover:text-white transition-colors"
          >
            <Stethoscope size={14} className="shrink-0" />
            Surgeries/Doctor: <span className="font-medium text-white">+91 7676266247</span>
          </a>
          <span className="hidden md:inline text-white/30">|</span>
          <a
            href="tel:7892300247"
            className="flex items-center gap-1.5 text-white/85 hover:text-white transition-colors"
          >
            <HeartPulse size={14} className="shrink-0" />
            Home Nursing: <span className="font-medium text-white">+91 7892300247</span>
          </a>
        </span>
        <div className="flex gap-5 items-center">
          <a href="#" className="flex items-center gap-1.5 text-white/85 hover:text-white transition-colors">
            <Headset size={14} className="shrink-0" /> 24×7 Support
          </a>
          <a href="#" className="flex items-center gap-1.5 text-white/85 hover:text-white transition-colors">
            <BriefcaseMedical size={14} className="shrink-0" /> For Doctors
          </a>
        </div>
      </div>
    </div>
  );
}
