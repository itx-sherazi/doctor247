const TESTIMONIALS = [
  {
    text: "“The technician arrived within 30 minutes of my call. Sample collection was painless and the report came by email the next morning.”",
    author: "– S. Reddy, Bengaluru",
  },
  {
    text: "“Booked a full body checkup for my parents. Very professional team and reports were shared on WhatsApp — super convenient.”",
    author: "– K. Rao, Whitefield",
  },
  {
    text: "“Cheaper than the lab near my house and they came home. Accurate results, transparent pricing, zero hassle.”",
    author: "– A. Sharma, Indiranagar",
  },
];

export function LabTestimonials() {
  return (
    <section className="py-12 sm:py-15 bg-hgrey">
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
              className="bg-white rounded-2xl p-5 border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)]"
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