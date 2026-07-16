import { Ambulance, Phone, UserRound } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden sm:block bg-hblue text-white text-[0.85rem] py-2">
      <div className="mx-auto max-w-[1200px] px-6 flex justify-between items-center flex-wrap gap-2">
        <span className="flex items-center gap-1.5 flex-wrap">
          <Phone size={14} />
          Surgeries/Doctor:{" "}
          <a href="tel:7676266247" className="text-white/85 hover:text-white transition-colors">
            +91 7676266247
          </a>{" "}
          &nbsp;|&nbsp; Home Nursing:{" "}
          <a href="tel:7892300247" className="text-white/85 hover:text-white transition-colors">
            +91 7892300247
          </a>
        </span>
        <div className="flex gap-5 items-center">
          <a href="#" className="flex items-center gap-1.5 text-white/85 hover:text-white transition-colors">
            <Ambulance size={14} /> 24×7 Support
          </a>
          <a href="#" className="flex items-center gap-1.5 text-white/85 hover:text-white transition-colors">
            <UserRound size={14} /> For Doctors
          </a>
        </div>
      </div>
    </div>
  );
}
