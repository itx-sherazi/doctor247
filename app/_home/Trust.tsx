import { Hospital, Newspaper, Star, Stethoscope } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

export function Trust() {
  return (
    <section className="py-10 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionTitle>
          Trusted By <span className="text-hgreen">Bangalore Families</span>
        </SectionTitle>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2.5">
            <Star size={26} className="text-amber-500" fill="currentColor" />
            <div>
              <div className="text-amber-500 text-[0.9rem] tracking-wide">★★★★★</div>
              <span className="font-extrabold text-htext">4.9</span> / 5
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Stethoscope size={26} className="text-hgreen" />
            <span className="font-semibold text-[0.95rem] text-htext-muted">500+ Patient Testimonials</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Hospital size={26} className="text-hblue" />
            <span className="font-semibold text-[0.95rem] text-htext-muted">25+ Hospital Partners</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Newspaper size={26} className="text-amber-500" />
            <span className="font-semibold text-[0.95rem] text-htext-muted">Featured in Media</span>
          </div>
        </div>
      </div>
    </section>
  );
}
