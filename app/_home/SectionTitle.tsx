import { ReactNode } from "react";

export function SectionTitle({ children, subtitle }: { children: ReactNode; subtitle?: ReactNode }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-hblue tracking-tight">{children}</h2>
      {subtitle && <p className="text-htext-muted text-[0.95rem] sm:text-[1.05rem] max-w-[600px] mx-auto mt-1">{subtitle}</p>}
    </div>
  );
}
