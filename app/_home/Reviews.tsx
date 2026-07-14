import { SectionTitle } from "./SectionTitle";

const REVIEWS = [
  {
    text: (
      <>
        &quot;Doctor247 made my piles surgery so easy. Transparent pricing and great care. Highly recommend! Best{" "}
        <strong>piles doctor in Bangalore</strong>.&quot;
      </>
    ),
    author: "– Ramesh K.",
  },
  {
    text: (
      <>
        &quot;The <strong>home nursing services near me</strong> were a lifesaver for my mother&apos;s post-surgery
        recovery. Professional and caring <strong>home nurse near me</strong>.&quot;
      </>
    ),
    author: "– Priya S.",
  },
  {
    text: (
      <>
        &quot;I booked a <strong>home visit doctor in Bangalore</strong> for my father&apos;s fever. He arrived in 45
        minutes. So convenient!&quot;
      </>
    ),
    author: "– Ananya R.",
  },
];

export function Reviews() {
  return (
    <section className="py-12 sm:py-15 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionTitle subtitle="★★★★★ 4.9/5 from 500+ reviews – trusted by families across Bangalore">
          What Our <span className="text-hgreen">Patients Say</span>
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {REVIEWS.map((review) => (
            <div
              key={review.author}
              className="bg-white rounded-2xl p-5 border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)] transition-all hover:-translate-y-1 hover:[box-shadow:0_12px_40px_rgba(15,76,129,0.14)]"
            >
              <div className="text-amber-500 text-[0.95rem] mb-1">★★★★★</div>
              <div className="text-[0.9rem] text-htext mb-2">{review.text}</div>
              <div className="font-semibold text-hblue text-[0.85rem]">{review.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
