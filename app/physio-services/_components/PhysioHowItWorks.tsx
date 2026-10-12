const STEPS = [
  { n: 1, title: "Tell Us Your Need", desc: "Call us or fill the form with the condition, goals, and preferred timings." },
  { n: 2, title: "We Match a Physio", desc: "We find a certified physiotherapist with the right expertise for your condition." },
  { n: 3, title: "Recovery Begins", desc: "Your physiotherapist arrives at your doorstep and starts the personalized plan." },
];

export function PhysioHowItWorks() {
  return (
    <section className="py-12 sm:py-15 bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-hblue tracking-tight">
            Get a Physio in <span className="text-hgreen">3 Simple Steps</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-5 max-w-[960px] mx-auto">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="bg-hgrey rounded-2xl p-6 text-center border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)]"
            >
              <div className="w-14 h-14 rounded-full bg-hblue text-white flex items-center justify-center text-[1.3rem] font-bold mx-auto mb-3">
                {s.n}
              </div>
              <h4 className="font-semibold text-[1rem] mb-1.5">{s.title}</h4>
              <p className="text-[0.85rem] text-htext-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}