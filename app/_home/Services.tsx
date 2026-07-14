import { FlaskConical, HandHeart, Hospital, HouseHeart, PersonStanding, Pill } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const SERVICES = [
  { icon: Hospital, title: "Affordable Surgery", desc: "Transparent pricing, top surgeons" },
  { icon: HouseHeart, title: "Doctor at Home", desc: "Visit in 60 minutes" },
  { icon: HandHeart, title: "Home Nursing", desc: "Verified, trained nurses" },
  { icon: PersonStanding, title: "Physiotherapy", desc: "Recovery & rehabilitation" },
  { icon: FlaskConical, title: "Lab Tests", desc: "Sample collection at home" },
  { icon: Pill, title: "Pharmacy", desc: "Medicines delivered" },
];

export function Services() {
  return (
    <section className="py-18 pb-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle subtitle="Comprehensive healthcare delivered to your home or hospital">
          Our <span className="text-hgreen">Services</span>
        </SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-hgrey rounded-[20px] p-4.5 sm:p-7 pt-7 text-center transition-all border border-transparent hover:-translate-y-1.5 hover:bg-white hover:border-hgrey-border hover:[box-shadow:0_12px_56px_rgba(15,76,129,0.14)]"
            >
              <service.icon size={32} className="text-hblue mx-auto mb-3" />
              <h4 className="text-[1.05rem] font-semibold mb-1">{service.title}</h4>
              <p className="text-[0.85rem] text-htext-muted mb-3">{service.desc}</p>
              <div className="flex justify-center gap-3.5 text-[0.85rem] font-medium">
                <a href="#" className="text-hblue hover:text-hgreen transition-colors">
                  Learn More →
                </a>
                <a href="#" className="text-hblue hover:text-hgreen transition-colors">
                  Book
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
