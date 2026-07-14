import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917892300247?text=Hi%20Doctor247%2C%20I%20need%20a%20home%20nurse"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 lg:bottom-6 left-4 sm:left-6 z-[900] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-105 transition-transform"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}
