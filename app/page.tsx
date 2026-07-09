import Link from "next/link";
import { Stethoscope, UserPlus } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-neutral-50 px-4 sm:px-6 py-10">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white mb-6">
        <Stethoscope size={26} />
      </div>
      <h1 className="text-xl sm:text-2xl font-semibold text-neutral-800 mb-2 text-center">Doctor247</h1>
      <p className="text-sm text-neutral-400 mb-8 text-center max-w-sm">
        Home healthcare nurse credentialing platform
      </p>
      <Link
        href="/nurse-registration"
        className="flex w-full max-w-xs items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
      >
        <UserPlus size={16} /> Register as a Nurse
      </Link>
    </div>
  );
}
