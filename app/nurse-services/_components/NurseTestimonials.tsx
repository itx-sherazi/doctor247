import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "“Doctor247 provided an exceptional home nurse for my mother. The caregiver was kind and always on time. Booking was super easy!”",
    name: "S. Kumar",
    role: "Bengaluru",
  },
  {
    quote:
      "“After my surgery, I booked a nurse for home visit. The nurse arrived within 2 hours and made my recovery so much easier.”",
    name: "P. Rao",
    role: "Whitefield, Bangalore",
  },
  {
    quote:
      "“We needed a home nurse for my grandfather with dementia. Doctor247 matched us with a compassionate caregiver who became part of our family.”",
    name: "A. Menon",
    role: "Indiranagar, Bangalore",
  },
];

const VIDEOS = [
  "https://www.youtube.com/embed/6b7HNEzPLOQ?si=7tQXm9gHh8cY7yUZ",
  "https://www.youtube.com/embed/8o7n48CysXU?si=6w8w2f5Qg6jH8TdK",
];

export function NurseTestimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <span className="inline-block text-hgreen font-semibold text-[0.8rem] uppercase tracking-wide mb-1.5">
            Testimonials
          </span>
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-htext tracking-tight">
            What Families Say About <span className="text-hblue">Us</span>
          </h2>
          <p className="text-htext-muted max-w-[560px] mx-auto mt-2">
            Real stories from families who found the best <strong>home nursing services near me</strong>.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-5 border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)]">
              <div className="flex gap-0.5 text-amber-500 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-[0.9rem] text-htext mb-3">{t.quote}</blockquote>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-hblue-light text-hblue font-bold text-[0.85rem] shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[0.85rem]">{t.name}</div>
                  <div className="text-[0.75rem] text-htext-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
