import { ArrowRight, CircleCheck, Heart } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import Image from "next/image";

const ITEMS = [
  "ICU Nurse",
  "Elder Care",
  "Post Surgery Care",
  "Wound Dressing",
  "Injection",
  "Catheter Care",
  "Stroke Care",
  "Palliative Care",
];

export function HomeNursing() {
  return (
    <section className="py-12 sm:py-15 bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="aspect-[4/3] min-h-[220px] rounded-2xl overflow-hidden ">
            <Image
              src="/home-nurse.webp"
              alt="Home nursing services near me"
              loading="lazy"
              width={600}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-1.5 bg-hgreen-light text-hgreen font-semibold text-[0.75rem] px-3.5 py-1 rounded-full mb-1.5">
              <Heart size={12} /> Home Nursing
            </span>
            <h2 className="text-[1.6rem] sm:text-[2rem] font-extrabold text-hblue mb-1">Home Nursing Services</h2>
            <p className="text-htext-muted mb-3">
              Professional nurses for post-surgery care, elderly support, and chronic condition management. Find the{" "}
              <strong>best home nurse near me</strong> with Doctor247. Starting from ₹999.
            </p>
            <ul className="list-none grid grid-cols-2 gap-x-4 gap-y-1 my-3 mb-5">
              {ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[0.9rem]">
                  <CircleCheck size={14} className="text-hgreen shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-hblue text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:bg-hblue-dark hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(15,76,129,0.25)] hover:shadow-[0_8px_28px_rgba(15,76,129,0.35)]"
            >
              <ArrowRight size={17} /> Get Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
