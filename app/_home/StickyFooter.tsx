import { CalendarCheck, MessageCircle, Phone } from "lucide-react";

export function StickyFooter() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-hgrey-border py-3 z-[999] shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="mx-auto max-w-[1200px] px-6 flex justify-around items-center">
        <a href="tel:7676266247" className="flex flex-col items-center text-[0.75rem] font-medium text-htext-muted gap-0.5 hover:text-hblue transition-colors">
          <Phone size={22} className="text-hblue" /> <span>Call</span>
        </a>
        <a href="#" className="flex flex-col items-center text-[0.75rem] font-medium text-htext-muted gap-0.5 hover:text-hblue transition-colors">
          <MessageCircle size={22} className="text-hblue" /> <span>WhatsApp</span>
        </a>
        <a href="#" className="flex items-center gap-1.5 bg-hgreen text-white px-7 py-2 rounded-full font-semibold text-[0.9rem] hover:bg-hgreen-dark transition-colors">
          <CalendarCheck size={15} /> Book Appointment
        </a>
      </div>
    </div>
  );
}
