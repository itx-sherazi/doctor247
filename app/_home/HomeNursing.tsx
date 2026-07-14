import { ArrowRight, CircleCheck, HeartPulse, UserRound } from "lucide-react";

const PRICING = [
  { hours: "1 Hour", price: "₹299" },
  { hours: "2 Hours", price: "₹550" },
  { hours: "4 Hours", price: "₹799" },
  { hours: "8 Hours", price: "₹1,199" },
  { hours: "12 Hours", price: "₹1,499", tag: "Popular" },
  { hours: "24 Hours", price: "₹1,999", tag: "Best Value" },
];

const ITEMS = [
  "ICU Nurse",
  "Elder Care",
  "Wound Dressing",
  "Catheter Care",
  "Injection",
  "Post Surgery Care",
  "12 Hour Nurse",
  "24 Hour Nurse",
];

export function HomeNursing() {
  return (
    <section className="py-18 pb-20 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="lg:order-2 aspect-[4/3] bg-gradient-to-br from-hblue-light to-[#d4e4f7] rounded-[20px] flex flex-col items-center justify-center text-hblue [box-shadow:0_8px_40px_rgba(15,76,129,0.08)]">
          <UserRound size={64} />
          <span className="text-base mt-2">Professional nurse</span>
        </div>
        <div className="lg:order-1">
          <span className="inline-flex items-center gap-1.5 bg-hgreen-light text-hgreen font-semibold text-[0.8rem] px-4 py-1 rounded-full mb-3">
            <HeartPulse size={13} /> Verified nurses
          </span>
          <h2 className="text-[1.7rem] sm:text-[2.2rem] font-extrabold text-hblue mb-2">Home Nursing</h2>
          <p className="text-htext-muted">
            Skilled nurses for post-surgery care, elderly support, and chronic condition management. Transparent
            hourly pricing – no hidden charges.
          </p>

          <div className="my-5 bg-white rounded-xl overflow-hidden border border-hgrey-border [box-shadow:0_8px_40px_rgba(15,76,129,0.08)]">
            <table className="w-full border-collapse text-[0.8rem] sm:text-[0.9rem]">
              <thead className="bg-hblue text-white">
                <tr>
                  <th className="px-3 sm:px-4 py-2.5 text-left font-semibold text-[0.85rem]">Hours</th>
                  <th className="px-3 sm:px-4 py-2.5 text-right font-semibold text-[0.85rem]">Price</th>
                </tr>
              </thead>
              <tbody>
                {PRICING.map((row) => (
                  <tr key={row.hours} className="border-b border-hgrey-border last:border-0 hover:[&>td]:bg-hblue-light">
                    <td className="px-3 sm:px-4 py-2.5 font-semibold text-htext">
                      {row.hours}
                      {row.tag && (
                        <span className="inline-block bg-hgreen-light text-hgreen text-[0.7rem] font-semibold px-2.5 py-0.5 rounded-full ml-1.5">
                          {row.tag}
                        </span>
                      )}
                    </td>
                    <td className="px-3 sm:px-4 py-2.5 text-right font-bold text-hgreen">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="list-none grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
            {ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-[0.95rem]">
                <CircleCheck size={16} className="text-hgreen shrink-0" /> {item}
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-hgreen text-white font-semibold px-8.5 py-3.5 rounded-full transition-all hover:bg-hgreen-dark hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(0,168,107,0.3)] hover:shadow-[0_8px_28px_rgba(0,168,107,0.4)]"
          >
            <ArrowRight size={17} /> Book Nurse →
          </a>
        </div>
      </div>
    </section>
  );
}
