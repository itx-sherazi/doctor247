import { Ambulance, Clock } from "lucide-react";

export function EmergencyBanner() {
  return (
    <div className="bg-amber-500 text-white text-center text-[0.75rem] sm:text-[0.85rem] font-medium py-2 px-4">
      <span className="inline-flex items-center gap-1.5">
        <Ambulance size={14} /> 24/7 Emergency Service
      </span>
      <span className="hidden sm:inline"> &nbsp;|&nbsp; </span>
      <span className="hidden sm:inline-flex items-center gap-1.5">
        <Clock size={14} /> Same-day booking
      </span>
      <span className="hidden sm:inline"> &nbsp;|&nbsp; </span>
      <span className="block sm:inline font-bold mt-0.5 sm:mt-0">Call Now: +91 78923 00247</span>
    </div>
  );
}
