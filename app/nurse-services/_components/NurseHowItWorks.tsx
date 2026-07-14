const STEPS = [
  { n: 1, title: "Tell Us Your Need", desc: "Call us or fill the booking form with patient details and required hours." },
  { n: 2, title: "We Match a Nurse", desc: "We find a verified nurse with the right skills and experience for you." },
  { n: 3, title: "Care Begins", desc: "Your nurse arrives at your doorstep within 2 hours. Simple, fast, and reliable." },
];

export function NurseHowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <span className="inline-block text-hgreen font-semibold text-[0.8rem] uppercase tracking-wide mb-1.5">
            How It Works
          </span>
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-htext tracking-tight">
            Get a Nurse in <span className="text-hblue">3 Simple Steps</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {STEPS.map((step) => (
            <div key={step.n} className="bg-white rounded-2xl p-6 text-center border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)]">
              <div className="w-14 h-14 rounded-full bg-hblue text-white flex items-center justify-center text-[1.3rem] font-bold mx-auto mb-3">
                {step.n}
              </div>
              <h4 className="font-semibold text-[1rem] mb-1.5">{step.title}</h4>
              <p className="text-[0.85rem] text-htext-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
