const TESTIMONIALS = [
  {
    text: "“After my knee replacement, the physiotherapist helped me walk again in 6 weeks. Truly professional and caring.”",
    author: "– R. Sharma, Bengaluru",
  },
  {
    text: "“My father had a stroke and we needed daily physio at home. The therapist was patient, skilled, and always on time.”",
    author: "– M. Iyer, Whitefield",
  },
  {
    text: "“I had chronic back pain for years. Six sessions with their physio and I finally feel relief. Highly recommend.”",
    author: "– A. Fernandes, Indiranagar",
  },
];

export function PhysioTestimonials() {
  return (
    <section className="py-12 sm:py-15 bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-hblue tracking-tight">
            What Patients <span className="text-hgreen">Say</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="bg-hgrey rounded-2xl p-5 border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)]"
            >
              <div className="text-amber-500 text-[0.95rem] mb-2">★★★★★</div>
              <p className="text-[0.9rem] text-htext mb-3">{t.text}</p>
              <p className="font-semibold text-hblue text-[0.85rem]">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}