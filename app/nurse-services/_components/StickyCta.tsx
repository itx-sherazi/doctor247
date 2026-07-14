import { CalendarCheck, Phone } from "lucide-react";

export function StickyCta() {
  return (
    <div className="hidden sm:flex fixed top-1/2 -translate-y-1/2 right-4 z-[900] flex-col gap-2.5">
      <a
        href="tel:+917892300247"
        className="flex items-center gap-2 bg-hblue text-white font-semibold text-[0.85rem] px-4 py-2.5 rounded-full shadow-[0_4px_16px_rgba(15,76,129,0.3)] hover:bg-hblue-dark transition-colors"
      >
        <Phone size={15} /> Call Now
      </a>
      <a
        href="#booking"
        className="flex items-center gap-2 bg-hgreen text-white font-semibold text-[0.85rem] px-4 py-2.5 rounded-full shadow-[0_4px_16px_rgba(0,168,107,0.3)] hover:bg-hgreen-dark transition-colors"
      >
        <CalendarCheck size={15} /> Book Now
      </a>
    </div>
  );
}
