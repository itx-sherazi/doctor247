import { Heart, ShieldCheck, Stethoscope, Users } from "lucide-react";
import { StickyFooter } from "../_home/StickyFooter";
import { FloatingWidget } from "../_home/FloatingWidget";
import { SectionTitle } from "../_home/SectionTitle";

const STATS = [
  { value: "500+", label: "Healthcare Professionals", color: "text-hblue" },
  { value: "125+", label: "Service Locations", color: "text-hgreen" },
  { value: "25+", label: "Hospital Partners", color: "text-amber-500" },
  { value: "50,000+", label: "Families Served", color: "text-hblue" },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Trust Above All",
    desc: "Every professional on our platform is background-verified, licensed, and continuously evaluated.",
  },
  {
    icon: Heart,
    title: "Compassion First",
    desc: "We treat every patient like family — with empathy, patience, and dignity.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Excellence",
    desc: "We partner only with credentialed doctors, nurses, and physiotherapists from top institutions.",
  },
  {
    icon: Users,
    title: "Accessible to All",
    desc: "Transparent pricing, cashless insurance, and healthcare that reaches your doorstep.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-htext">
      {/* Hero */}
      <section className="bg-gradient-to-br from-hblue-light to-[#dbeafe] py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <span className="inline-block text-hgreen font-semibold text-[0.8rem] uppercase tracking-wide mb-1.5">
            About Doctor247
          </span>
          <h1 className="text-[1.9rem] sm:text-[2.6rem] font-extrabold text-htext tracking-tight mb-3">
            Healthcare at Your <span className="text-hblue">Doorstep</span>
          </h1>
          <p className="text-htext-muted text-[1rem] sm:text-[1.1rem] max-w-[720px] mx-auto">
            Doctor247 is Bangalore&apos;s trusted home healthcare platform — connecting families with verified
            doctors, nurses, physiotherapists, and affordable surgical care, all from the comfort of home.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 sm:py-15 bg-white">
        <div className="mx-auto max-w-[1000px] px-5">
          <SectionTitle>
            Our <span className="text-hgreen">Story</span>
          </SectionTitle>
          <div className="space-y-4 text-htext-muted text-[0.95rem] sm:text-[1rem] leading-relaxed max-w-[800px] mx-auto">
            <p>
              Doctor247 started with a simple observation: families in Bangalore were struggling to find
              reliable, affordable, and compassionate healthcare that came to them. Hospital visits were
              exhausting for the elderly, post-surgery patients needed consistent care at home, and finding a
              trustworthy nurse or doctor felt like guesswork.
            </p>
            <p>
              We built Doctor247 to fix that. Today, we connect families with a network of credentialed
              doctors, nurses, physiotherapists, and partner hospitals — all vetted, insured, and available
              24×7 across Bangalore.
            </p>
            <p>
              Our mission is simple: <strong>make quality healthcare accessible, affordable, and
              human</strong> — whether it&apos;s a doctor visit for a fever, home nursing after surgery, a
              physiotherapy session, or an affordable procedure at a top hospital.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-15 bg-hgrey">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionTitle>
            By the <span className="text-hgreen">Numbers</span>
          </SectionTitle>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-[900px] mx-auto">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl p-5 sm:p-6 text-center border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)]"
              >
                <div className={"text-[1.6rem] sm:text-[2.2rem] font-black leading-tight " + s.color}>
                  {s.value}
                </div>
                <div className="text-[0.75rem] sm:text-[0.85rem] text-htext-muted font-medium mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-15 bg-white">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionTitle>
            What We <span className="text-hgreen">Stand For</span>
          </SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-[900px] mx-auto">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-hgrey rounded-2xl p-5 sm:p-6 border border-hgrey-border transition-all hover:-translate-y-1 hover:[box-shadow:0_12px_40px_rgba(15,76,129,0.14)]"
              >
                <v.icon size={28} className="text-hgreen mb-2" />
                <h4 className="font-semibold text-[1rem] text-htext mb-1">{v.title}</h4>
                <p className="text-[0.85rem] text-htext-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-15 bg-gradient-to-br from-hblue to-hgreen">
        <div className="mx-auto max-w-[800px] px-5 text-center text-white">
          <h2 className="text-[1.5rem] sm:text-[2rem] font-extrabold mb-2">
            Ready to Experience Healthcare at Home?
          </h2>
          <p className="text-white/90 mb-6">
            Talk to our care coordinator and get matched with the right professional in minutes.
          </p>
          <a
            href="tel:7676266247"
            className="inline-flex items-center gap-2 bg-white text-hblue font-bold px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-all"
          >
            Call Now: +91 76762 66247
          </a>
        </div>
      </section>

      <FloatingWidget />
      <StickyFooter />
    </div>
  );
}