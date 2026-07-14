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
    <section className="py-12 sm:py-15 bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionTitle
          subtitle={
            <>
              Bangalore &amp; surrounding regions – <strong>home care services in Bangalore</strong> at your doorstep
            </>
          }
        >
          Areas We <span className="text-hgreen">Serve</span>
        </SectionTitle>
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
