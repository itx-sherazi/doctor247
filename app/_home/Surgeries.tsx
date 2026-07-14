import { Eye } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const SURGERIES: { name: string; price: string; isConsultation?: boolean }[] = [
  { name: "Hernioplasty – Inguinal / Femoral (Bilateral)", price: "₹1,20,000" },
  { name: "Laparoscopic Hernioplasty – Inguinal (Unilateral)", price: "₹80,000" },
  { name: "Pilonidal Sinus (With/Without Flap)", price: "₹40,000" },
  { name: "Perianal Abscess (I&D)", price: "₹45,000" },
  { name: "Varicose Veins (Saphenofemoral ligation)", price: "₹70,000" },
  { name: "Hydrocelectomy (Unilateral)", price: "₹70,000" },
  { name: "PCNL (Kidney Stone – Percutaneous)", price: "₹90,000" },
  { name: "RIRS (Kidney Stone – Retrograde)", price: "₹1,10,000" },
  { name: "Total Knee Replacement (Unilateral)", price: "₹1,80,000" },
  { name: "Total Hip Replacement (Unilateral)", price: "₹1,50,000" },
  { name: "Hysterectomy (Abdominal)", price: "₹75,000" },
  { name: "LSCS (Caesarean Section)", price: "₹60,000" },
  { name: "Cataract Surgery (with Lens)", price: "Book Consultation", isConsultation: true },
  { name: "Coronary Angiogram", price: "Book Consultation", isConsultation: true },
];

export function Surgeries() {
  return (
    <section className="py-18 pb-20 bg-hgrey">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle subtitle="Transparent pricing – no hidden charges. General Ward rates shown.">
          Featured <span className="text-hgreen">Surgeries</span>
        </SectionTitle>
        <div className="bg-white rounded-[20px] overflow-hidden border border-hgrey-border [box-shadow:0_8px_40px_rgba(15,76,129,0.08)]">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[0.85rem] sm:text-base">
              <thead className="bg-hblue text-white">
                <tr>
                  <th className="px-3.5 sm:px-6 py-3 sm:py-4 text-left font-semibold text-[0.95rem]">Surgery</th>
                  <th className="px-3.5 sm:px-6 py-3 sm:py-4 text-right font-semibold text-[0.95rem]">Starting From</th>
                </tr>
              </thead>
              <tbody>
                {SURGERIES.map((s) => (
                  <tr key={s.name} className="border-b border-hgrey-border last:border-0 hover:[&>td]:bg-hblue-light">
                    <td className="px-3.5 sm:px-6 py-2.5 sm:py-3.5 font-medium">{s.name}</td>
                    <td
                      className={
                        "px-3.5 sm:px-6 py-2.5 sm:py-3.5 text-right font-bold " +
                        (s.isConsultation ? "text-hblue font-semibold" : "text-hgreen")
                      }
                    >
                      {s.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-hblue text-white font-semibold px-8.5 py-3.5 rounded-full transition-all hover:bg-hblue-dark hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(15,76,129,0.25)] hover:shadow-[0_8px_28px_rgba(15,76,129,0.35)]"
          >
            <Eye size={17} /> View All 115 Surgeries →
          </a>
        </div>
      </div>
    </section>
  );
}
