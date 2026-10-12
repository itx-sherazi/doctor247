const AREAS = [
  "Indiranagar", "Whitefield", "Koramangala", "Jayanagar", "MG Road", "Ulsoor",
  "Bellandur", "HSR", "Marathahalli", "Electronic City", "Bannerghatta",
  "Yelahanka", "Hebbal", "Malleshwaram", "Rajajinagar", "Vijayanagar",
  "Basavanagudi", "Frazer Town",
];

export function DoctorAreas() {
  return (
    <section className="py-12 sm:py-15 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-hblue tracking-tight">
            Pan-<span className="text-hgreen">Bangalore</span> Coverage
          </h2>
          <p className="text-htext-muted max-w-[560px] mx-auto mt-1">
            Doctors available for home visits across all major localities in Bangalore.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5">
          {AREAS.map((area) => (
            <span
              key={area}
              className="bg-white px-5 py-2 rounded-full font-medium text-[0.85rem] border border-hgrey-border transition-all hover:border-hblue hover:text-hblue hover:-translate-y-0.5 [box-shadow:0_8px_24px_rgba(15,76,129,0.08)]"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}