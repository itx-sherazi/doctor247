"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Building2, Loader2, Lock, Mail, Stethoscope } from "lucide-react";

type Role = "nurse" | "hospital";

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!role) {
      setError("Please choose whether you're registering as a Nurse or a Hospital.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Signup failed");

      router.push(role === "nurse" ? "/nurse-registration" : "/hospital-registration");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-neutral-100 bg-white p-6 sm:p-8 shadow-sm">
        <h1 className="text-lg font-semibold text-neutral-800 mb-1">Create your Doctor247 account</h1>
        <p className="text-sm text-neutral-400 mb-6">Register as a nurse or partner hospital.</p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            type="button"
            onClick={() => setRole("nurse")}
            className={
              "flex flex-col items-center gap-2 rounded-xl border-2 px-4 py-5 transition-all " +
              (role === "nurse" ? "border-brand-500 bg-brand-50" : "border-neutral-200 hover:border-brand-200")
            }
          >
            <Stethoscope size={26} className={role === "nurse" ? "text-brand-600" : "text-neutral-400"} />
            <span className="text-sm font-semibold text-neutral-700">Nurse</span>
          </button>
          <button
            type="button"
            onClick={() => setRole("hospital")}
            className={
              "flex flex-col items-center gap-2 rounded-xl border-2 px-4 py-5 transition-all " +
              (role === "hospital" ? "border-brand-500 bg-brand-50" : "border-neutral-200 hover:border-brand-200")
            }
          >
            <Building2 size={26} className={role === "hospital" ? "text-brand-600" : "text-neutral-400"} />
            <span className="text-sm font-semibold text-neutral-700">Hospital</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-3.5 text-[16px] sm:text-sm text-neutral-900 placeholder:text-neutral-400 shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-3.5 text-[16px] sm:text-sm text-neutral-900 placeholder:text-neutral-400 shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Confirm Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="password"
                required
                minLength={8}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-3.5 text-[16px] sm:text-sm text-neutral-900 placeholder:text-neutral-400 shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
          </div>

          {error && <p className="text-sm font-medium text-danger-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:opacity-60"
          >
            {loading && <Loader2 size={16} className="animate-spin" />}
            {loading ? "Creating account…" : "Create Account"}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-neutral-500">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-brand-600 hover:text-brand-700">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
