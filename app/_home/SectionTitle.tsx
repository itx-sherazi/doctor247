import { ReactNode } from "react";

export function SectionTitle({ children, subtitle }: { children: ReactNode; subtitle?: ReactNode }) {
  return (
    <div className="text-center mb-11">
      <h2 className="text-[1.8rem] sm:text-[2.4rem] font-extrabold text-hblue tracking-tight">{children}</h2>
      {subtitle && <p className="text-htext-muted text-[1.1rem] max-w-[640px] mx-auto mt-2">{subtitle}</p>}
    </div>
  );
}
