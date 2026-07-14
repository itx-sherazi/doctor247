const STATS = [
  { number: "5000+", label: "Patients" },
  { number: "100+", label: "Doctors" },
  { number: "250+", label: "Verified Nurses" },
  { number: "25+", label: "Partner Hospitals" },
  { number: "24×7", label: "Support" },
];

export function Trust() {
  return (
    <section className="bg-hgrey py-10 border-y border-hgrey-border">
      <div className="mx-auto max-w-[1200px] px-6 flex justify-around flex-wrap gap-6 sm:gap-10 text-center">
        <div className="flex flex-col items-center">
          <div className="text-amber-500 text-[1.1rem] tracking-[2px]">⭐⭐⭐⭐⭐</div>
          <span className="text-[0.9rem] text-htext-muted">Trusted by Bangalore Families</span>
        </div>
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <span className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-hblue leading-tight">{stat.number}</span>
            <span className="text-[0.95rem] text-htext-muted font-medium">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
