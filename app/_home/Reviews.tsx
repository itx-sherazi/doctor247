import { CirclePlay } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const REVIEWS = [
  {
    text: "“Doctor247 made my piles surgery so easy. Transparent pricing and great care. Highly recommend!”",
    author: "– Ramesh K.",
  },
  {
    text: "“The home nursing service was a lifesaver for my mother's post-surgery recovery. Professional and caring.”",
    author: "– Priya S.",
  },
  {
    text: "“I booked a home doctor for my father's fever. He arrived in 45 minutes. So convenient!”",
    author: "– Ananya R.",
  },
];

export function Reviews() {
  return (
    <section className="py-18 pb-20 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle subtitle="★★★★★ 4.9/5 from 500+ reviews">
          What Our <span className="text-hgreen">Patients Say</span>
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.author}
              className="bg-white rounded-[20px] p-6 border border-hgrey-border [box-shadow:0_8px_40px_rgba(15,76,129,0.08)]"
            >
              <div className="text-amber-500 text-[1.1rem] mb-1.5">★★★★★</div>
              <div className="text-[0.95rem] text-htext mb-2.5">{review.text}</div>
              <div className="font-semibold text-hblue">{review.author}</div>
              <div className="inline-flex items-center gap-1.5 bg-red-100 text-red-600 text-[0.75rem] font-semibold px-3 py-0.5 rounded-full mt-1.5">
                <CirclePlay size={13} /> Video Testimonial
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
