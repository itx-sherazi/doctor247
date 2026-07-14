import { SectionTitle } from "./SectionTitle";

const STATS = [
  { number: "500+", label: "Healthcare Professionals", color: "text-hblue" },
  { number: "125+", label: "Service Locations", color: "text-hgreen" },
  { number: "25+", label: "Hospital Partners", color: "text-amber-500" },
  { number: "24×7", label: "Support", color: "text-hblue" },
  { number: "Same Day", label: "Bookings", color: "text-hgreen" },
  { number: "Verified", label: "Doctors & Nurses", color: "text-amber-500" },
];

export function WhyChoose() {
  return (
    <section className="py-12 sm:py-15 bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionTitle
          subtitle={
            <>
              Trusted by Bangalore families for quality healthcare – <strong>best hospital in Bangalore</strong> for
              affordable care
            </>
          }
        >
          Why Choose <span className="text-hgreen">Doctor247</span>
        </SectionTitle>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-4 sm:p-6 text-center border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)] transition-all hover:-translate-y-1 hover:[box-shadow:0_12px_40px_rgba(15,76,129,0.14)]"
            >
              <div className={"text-[1.3rem] sm:text-[2.2rem] font-black leading-tight " + stat.color}>{stat.number}</div>
              <div className="text-[0.7rem] sm:text-[0.8rem] text-htext-muted font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
