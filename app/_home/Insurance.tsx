import { SectionTitle } from "./SectionTitle";

const HOSPITALS = [
  "Star Health",
  "Niva Bupa",
  "ICICI Lombard",
  "HDFC ERGO",
  "Care Health",
  "Aditya Birla",
  "ACKO",
  "Tata AIG",
  "Manipal Hospitals",
  "Apollo Hospitals",
  "Fortis",
  "Columbia Asia",
  "Shanthi Nursing Home Bangalore",
  "Bangalore Nursing Home",
];

export function Insurance() {
  return (
    <section className="py-12 sm:py-15 bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionTitle
          subtitle={
            <>
              We partner with the <strong>best hospitals in Bangalore</strong> including{" "}
              <strong>best cancer hospital in Bangalore</strong>, <strong>best maternity hospital in Bangalore</strong>,
              and more
            </>
          }
        >
          Trusted <span className="text-hgreen">Hospitals</span>
        </SectionTitle>
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4">
          {HOSPITALS.map((name) => (
            <span
              key={name}
              className="bg-white font-medium text-[0.8rem] sm:text-[0.85rem] px-5 py-2 rounded-full border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)] transition-all hover:border-hblue hover:text-hblue hover:-translate-y-0.5"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
