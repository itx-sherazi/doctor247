import { Bone, HandHeart, Hospital, HouseHeart } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const SERVICES = [
  {
    icon: HouseHeart,
    color: "text-hblue",
    title: "Home Doctor",
    priceTag: "Starting ₹799",
    priceTagClass: "bg-hgreen-light text-hgreen-dark",
    desc: "Verified doctors visit your home in 60 minutes",
  },
  {
    icon: HandHeart,
    color: "text-hgreen",
    title: "Home Nursing",
    priceTag: "Starting ₹999",
    priceTagClass: "bg-hgreen-light text-hgreen-dark",
    desc: "Trained nurses for post-surgery & elderly care",
  },
  {
    icon: Hospital,
    color: "text-amber-500",
    title: "Affordable Surgeries",
    priceTag: "Save upto 30%",
    priceTagClass: "bg-amber-100 text-amber-700",
    desc: "Transparent pricing, top surgeons, cashless insurance",
  },
  {
    icon: Bone,
    color: "text-violet-500",
    title: "Physiotherapy",
    priceTag: "Starting ₹499",
    priceTagClass: "bg-hgreen-light text-hgreen-dark",
    desc: "Recovery & rehabilitation at home",
  },
];

export function Services() {
  return (
    <section className="py-12 sm:py-15 bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionTitle
          subtitle={
            <>
              Trusted healthcare delivered to your home – including <strong>home nursing services near me</strong> and{" "}
              <strong>home visit doctors in Bangalore</strong>
            </>
          }
        >
          Our <span className="text-hgreen">Services</span>
        </SectionTitle>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl border border-hgrey-border p-5 sm:p-7 pt-7 text-center transition-all [box-shadow:0_8px_24px_rgba(15,76,129,0.08)] hover:-translate-y-1.5 hover:border-hblue hover:[box-shadow:0_12px_40px_rgba(15,76,129,0.14)]"
            >
              <service.icon size={40} className={service.color + " mx-auto mb-2"} />
              <h4 className="text-[1rem] sm:text-[1.15rem] font-bold mb-0.5">{service.title}</h4>
              <span className={"inline-block font-bold text-[0.75rem] sm:text-[0.8rem] px-4 py-0.5 rounded-full mb-2 " + service.priceTagClass}>
                {service.priceTag}
              </span>
              <p className="text-[0.8rem] sm:text-[0.85rem] text-htext-muted mb-3">{service.desc}</p>
              <a href="#" className="inline-flex items-center gap-1.5 font-semibold text-[0.8rem] sm:text-[0.85rem] text-hgreen hover:text-hblue transition-colors">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
