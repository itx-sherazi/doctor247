const TESTIMONIALS = [
  {
    text: "“My father had high fever at midnight. Doctor247 sent a doctor within 45 minutes and he gave an IV drip at home. Truly lifesaving.”",
    author: "– S. Kumar, Bengaluru",
  },
  {
    text: "“Booked a home visit for my mother's BP check. The doctor was patient, thorough, and gave a clear prescription.”",
    author: "– P. Rao, Whitefield",
  },
  {
    text: "“Very professional service. The doctor arrived on time, diagnosed my daughter's flu, and gave medicines.”",
    author: "– A. Sharma, Indiranagar",
  },
];

export function DoctorTestimonials() {
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