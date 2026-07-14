import { CalendarCheck, CircleCheck, Headset } from "lucide-react";
import { HeroVideo } from "./HeroVideo";

const BADGES = [
  "Free Surgery Consultation",
  "Cashless Insurance Support",
  "Home Doctor in 60 Min",
  "Verified Nurses",
  "24×7 Patient Support",
];

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#f0f7ff] to-white to-70% py-[60px] pb-20 relative overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-[60px] items-center">
          <div>
            <p className="text-[1.2rem] text-htext-muted mb-2 font-medium">Healthcare at Your Doorstep</p>
            <h1 className="text-[1.7rem] sm:text-[2.6rem] lg:text-[3.2rem] font-extrabold leading-[1.15] text-hblue mb-3 tracking-tight">
              Affordable Surgeries <br />
              <span className="text-hgreen">&amp; Home Care</span>
            </h1>

            <div className="flex flex-wrap gap-x-7 gap-y-4 my-5 mb-7">
              {BADGES.map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-[0.95rem] font-medium text-htext">
                  <CircleCheck size={18} className="text-hgreen" /> {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3.5 mt-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-hgreen text-white font-semibold px-8.5 py-3.5 rounded-full shadow-[0_4px_16px_rgba(0,168,107,0.3)] transition-all hover:bg-hgreen-dark hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,168,107,0.4)]"
              >
                <CalendarCheck size={17} /> Book Appointment
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <HeroVideo />
          </div>
        </div>

        {/* Booking Card */}
        <div className="bg-white rounded-[20px] p-7 pt-8 mt-10 max-w-[720px] mx-auto border border-hgrey-border [box-shadow:0_12px_56px_rgba(15,76,129,0.14)]">
          <h3 className="text-[1.2rem] font-bold text-hblue mb-4.5 flex items-center gap-2 justify-center">
            <Headset size={20} className="text-hgreen" /> Book Free Consultation
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="font-medium text-[0.85rem] text-htext-muted block mb-1">Service</label>
              <select className="w-full px-4 py-3 border-[1.5px] border-hgrey-border rounded-xl text-[0.95rem] bg-hgrey focus:outline-none focus:border-hblue focus:bg-white transition-colors text-htext">
                <option>Affordable Surgery</option>
                <option>Home Doctor Visit</option>
                <option>Home Nursing</option>
                <option>Physiotherapy</option>
                <option>Lab Tests</option>
              </select>
            </div>
            <div>
              <label className="font-medium text-[0.85rem] text-htext-muted block mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 border-[1.5px] border-hgrey-border rounded-xl text-[0.95rem] bg-hgrey focus:outline-none focus:border-hblue focus:bg-white transition-colors text-htext placeholder:text-htext-muted"
              />
            </div>
            <div>
              <label className="font-medium text-[0.85rem] text-htext-muted block mb-1">Mobile Number</label>
              <input
                type="tel"
                placeholder="10-digit mobile"
                className="w-full px-4 py-3 border-[1.5px] border-hgrey-border rounded-xl text-[0.95rem] bg-hgrey focus:outline-none focus:border-hblue focus:bg-white transition-colors text-htext placeholder:text-htext-muted"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="font-medium text-[0.85rem] text-htext-muted block mb-1">Area / Locality</label>
              <input
                type="text"
                placeholder="e.g. Whitefield, Bangalore"
                className="w-full px-4 py-3 border-[1.5px] border-hgrey-border rounded-xl text-[0.95rem] bg-hgrey focus:outline-none focus:border-hblue focus:bg-white transition-colors text-htext placeholder:text-htext-muted"
              />
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 bg-hgreen text-white font-semibold text-[1.05rem] py-4 rounded-full mt-4 shadow-[0_4px_16px_rgba(0,168,107,0.3)] transition-all hover:bg-hgreen-dark hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,168,107,0.4)]">
            Book Free Consultation →
          </button>
        </div>
      </div>
    </section>
  );
}
