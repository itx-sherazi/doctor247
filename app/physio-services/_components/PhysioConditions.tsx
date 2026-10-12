import { CircleCheck } from "lucide-react";

const CONDITIONS = [
  "Post-surgery recovery (knee, hip, spine)",
  "Fracture and joint replacement rehab",
  "Back, neck, and shoulder pain",
  "Stroke and neurological rehabilitation",
  "Sports injuries and muscle strains",
  "Frozen shoulder and knee rehabilitation",
  "Balance and gait training for elderly",
  "Chest physiotherapy and breathing exercises",
  "Postnatal physiotherapy and core recovery",
  "Chronic pain management (TENS, IFT)",
];

export function PhysioConditions() {
  return (
    <section className="py-12 sm:py-15 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-hblue tracking-tight">
            Conditions We <span className="text-hgreen">Treat</span>
          </h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 max-w-[800px] mx-auto">
          {CONDITIONS.map((c) => (
            <li key={c} className="flex items-start gap-2 text-[0.9rem] text-htext">
              <CircleCheck size={15} className="text-hgreen shrink-0 mt-0.5" /> {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}