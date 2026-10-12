import { CircleCheck } from "lucide-react";

const CONDITIONS = [
  "Fever, cold, cough, and flu",
  "Body aches, fatigue, and weakness",
  "Blood pressure and diabetes checks",
  "Wound cleaning and dressing",
  "Injection and IV drip administration",
  "Post-surgery and post-hospital follow-up",
  "Elderly health assessments at home",
  "Minor injuries and first aid",
  "Stomach issues, vomiting, and dehydration",
  "General health checkups and prescriptions",
];

export function DoctorConditions() {
  return (
    <section className="py-12 sm:py-15 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-hblue tracking-tight">
            We Treat <span className="text-hgreen">Everyday Health Issues</span>
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