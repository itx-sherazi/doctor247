const AREAS = [
  "Indiranagar",
  "Whitefield",
  "Koramangala",
  "Jayanagar",
  "MG Road",
  "Ulsoor",
  "Bellandur",
  "HSR Layout",
  "Marathahalli",
  "Electronic City",
  "Bannerghatta",
  "Yelahanka",
  "Hebbal",
  "Malleshwaram",
  "Rajajinagar",
  "Vijayanagar",
  "Basavanagudi",
  "Frazer Town",
];

export function NurseAreas() {
  return (
    <section id="areas" className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <span className="inline-block text-hgreen font-semibold text-[0.8rem] uppercase tracking-wide mb-1.5">
            Areas We Serve
          </span>
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-htext tracking-tight">
            Pan-<span className="text-hblue">Bangalore</span> Coverage
          </h2>
          <p className="text-htext-muted max-w-[560px] mx-auto mt-2">
            We provide home nursing services across all major localities in Bangalore.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {AREAS.map((area) => (
            <span
              key={area}
              className="bg-hgrey px-4 py-2 rounded-full text-[0.85rem] font-medium border border-hgrey-border transition-all hover:border-hblue hover:text-hblue hover:-translate-y-0.5"
            >
              {area}
            </span>
          ))}
        </div>
        <div className="rounded-2xl overflow-hidden border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)] aspect-[16/9] sm:aspect-[21/9]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155524.4254610671!2d77.51750950000001!3d12.9558846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158f6d8c6b7d%3A0xbd5d8e8e7f4f8b5!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Doctor247 service area map"
          />
        </div>
      </div>
    </section>
  );
}
