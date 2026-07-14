import { SectionTitle } from "./SectionTitle";

const AREAS = [
  "Whitefield",
  "HSR",
  "Koramangala",
  "JP Nagar",
  "Indiranagar",
  "Electronic City",
  "Marathahalli",
  "Bellandur",
  "Hebbal",
  "Yelahanka",
  "Bannerghatta",
  "Jayanagar",
  "Rajajinagar",
  "Malleshwaram",
];

export function Areas() {
  return (
    <section className="py-18 pb-20 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle subtitle="Bangalore & surrounding regions">
          Areas We <span className="text-hgreen">Serve</span>
        </SectionTitle>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-x-5 sm:gap-y-3 max-w-[800px] mx-auto">
          {AREAS.map((area) => (
            <span
              key={area}
              className="bg-white px-6 py-2 rounded-full font-medium border border-hgrey-border transition-all hover:border-hblue hover:text-hblue hover:-translate-y-0.5 [box-shadow:0_8px_40px_rgba(15,76,129,0.08)]"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
