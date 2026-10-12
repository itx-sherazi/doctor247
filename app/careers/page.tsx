import { Briefcase, Clock, MapPin, Phone } from "lucide-react";
import { StickyFooter } from "../_home/StickyFooter";
import { FloatingWidget } from "../_home/FloatingWidget";
import { SectionTitle } from "../_home/SectionTitle";

const OPENINGS = [
  {
    title: "Field Nurse (Full-Time)",
    location: "Bangalore",
    type: "Full-Time",
    desc: "Provide home nursing care for post-surgery, elderly, and ICU patients.",
  },
  {
    title: "Physiotherapist (Home Visits)",
    location: "Bangalore",
    type: "Full-Time / Part-Time",
    desc: "Deliver in-home physiotherapy for ortho, neuro, and geriatric patients.",
  },
  {
    title: "Care Coordinator",
    location: "Bangalore (Office)",
    type: "Full-Time",
    desc: "Coordinate bookings, match patients with professionals, and manage support.",
  },
  {
    title: "Medical Sales Executive",
    location: "Bangalore",
    type: "Full-Time",
    desc: "Build hospital partnerships and grow our referral network.",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote / Bangalore",
    type: "Full-Time",
    desc: "Work on our Next.js + Node.js platform to scale home healthcare.",
  },
];

export default function CareersPage() {
  return (
    <div className="bg-white text-htext">
      <section className="bg-gradient-to-br from-hblue-light to-[#dbeafe] py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <span className="inline-block text-hgreen font-semibold text-[0.8rem] uppercase tracking-wide mb-1.5">
            Join the Team
          </span>
          <h1 className="text-[1.9rem] sm:text-[2.6rem] font-extrabold text-htext tracking-tight mb-3">
            Careers at <span className="text-hblue">Doctor247</span>
          </h1>
          <p className="text-htext-muted text-[1rem] sm:text-[1.1rem] max-w-[640px] mx-auto">
            We&apos;re building the future of home healthcare in Bangalore. If you care deeply about
            people and want to make an impact, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-15 bg-white">
        <div className="mx-auto max-w-[1000px] px-5">
          <SectionTitle>
            Current <span className="text-hgreen">Openings</span>
          </SectionTitle>

          <div className="space-y-4">
            {OPENINGS.map((job) => (
              <div
                key={job.title}
                className="bg-white border border-hgrey-border rounded-2xl p-5 sm:p-6 transition-all hover:-translate-y-0.5 hover:[box-shadow:0_12px_40px_rgba(15,76,129,0.12)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h4 className="font-semibold text-[1.05rem] text-htext mb-1">{job.title}</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[0.8rem] text-htext-muted">
                      <span className="flex items-center gap-1">
                        <MapPin size={13} className="text-hblue" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} className="text-hblue" /> {job.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href="mailto:careers@doctor247.in"
                    className="inline-flex items-center gap-1.5 bg-hblue text-white text-[0.85rem] font-semibold px-4 py-2 rounded-full transition-all hover:bg-hblue-dark whitespace-nowrap self-start"
                  >
                    <Briefcase size={14} /> Apply
                  </a>
                </div>
                <p className="text-[0.9rem] text-htext-muted">{job.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-hgrey rounded-2xl p-6 sm:p-8 border border-hgrey-border text-center">
            <h3 className="font-bold text-[1.1rem] text-htext mb-2">Didn&apos;t find a fit?</h3>
            <p className="text-[0.9rem] text-htext-muted mb-4">
              Send us your resume anyway — we&apos;re always looking for good people.
            </p>
            <a
              href="mailto:careers@doctor247.in"
              className="inline-flex items-center gap-2 bg-hblue text-white font-semibold px-6 py-3 rounded-full hover:bg-hblue-dark transition-colors"
            >
              <Phone size={15} /> careers@doctor247.in
            </a>
          </div>
        </div>
      </section>

      <FloatingWidget />
      <StickyFooter />
    </div>
  );
}