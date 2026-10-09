"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  Building2,
  Eye,
  EyeOff,
  Heart,
  Loader2,
  Lock,
  Mail,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

type Role = "nurse" | "physiotherapist" | "hospital";

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!role) {
      setError("Please choose whether you're registering as a Nurse, Physiotherapist, or Hospital.");
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

      router.push(
        role === "nurse"
          ? "/nurse-registration"
          : role === "physiotherapist"
          ? "/physio-registration"
          : "/hospital-registration"
      );
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white lg:bg-hgrey lg:grid lg:grid-cols-2 lg:min-h-[calc(100vh-72px)]">
      {/* Left: image panel */}
      <div className="hidden lg:block relative bg-gradient-to-br from-hblue to-hgreen overflow-hidden">
        <Image
          src="/nurse-hero.png"
          alt="Doctor247 healthcare professional caring for a patient at home"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover opacity-90 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hblue/90 via-hblue/40 to-transparent" />
        <div className="relative z-10 flex h-full flex-col justify-end p-10 xl:p-14 text-white">
          <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur text-white font-semibold text-[0.75rem] uppercase tracking-wide px-4 py-1 rounded-full mb-4 border border-white/20 w-fit">
            <Heart size={13} className="text-hgreen" /> Trusted Healthcare
          </span>
          <h2 className="text-[2rem] xl:text-[2.4rem] font-black leading-[1.1] mb-3 tracking-tight">
            Join Bangalore&apos;s most trusted home healthcare network.
          </h2>
          <p className="text-white/85 text-[1rem] mb-6">
            Register as a nurse, physiotherapist, or partner hospital and start growing with
            Doctor247.
          </p>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-hgreen" />
              <span className="text-[0.85rem] font-medium">Verified Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={18} className="text-hgreen" />
              <span className="text-[0.85rem] font-medium">500+ Happy Families</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: form */}
      <div className="px-5 py-10 sm:py-14 lg:flex lg:items-center lg:justify-center lg:px-4 lg:py-16">
        <div className="w-full max-w-[440px] mx-auto">
          <h1 className="text-[1.6rem] font-extrabold text-htext mb-1 tracking-tight">
            Join Doctor247
          </h1>
          <p className="text-[0.9rem] text-htext-muted mb-6">
            Register as a nurse, physiotherapist, or partner hospital.
          </p>

          <div className="grid grid-cols-3 gap-2.5 mb-7">
            <button
              type="button"
              onClick={() => setRole("nurse")}
              className={
                "flex flex-col items-center gap-2 rounded-xl border-2 px-3 py-4 transition-all " +
                (role === "nurse"
                  ? "border-red-600 bg-red-50"
                  : "border-hgrey-border bg-white hover:border-red-300")
              }
            >
              <Stethoscope
                size={24}
                className={role === "nurse" ? "text-red-600" : "text-htext-muted"}
              />
              <span
                className={
                  "text-[0.85rem] font-semibold " +
                  (role === "nurse" ? "text-red-600" : "text-htext")
                }
              >
                Nurse
              </span>
            </button>
            <button
              type="button"
              onClick={() => setRole("physiotherapist")}
              className={
                "flex flex-col items-center gap-2 rounded-xl border-2 px-3 py-4 transition-all " +
                (role === "physiotherapist"
                  ? "border-red-600 bg-red-50"
                  : "border-hgrey-border bg-white hover:border-red-300")
              }
            >
              <Activity
                size={24}
                className={role === "physiotherapist" ? "text-red-600" : "text-htext-muted"}
              />
              <span
                className={
                  "text-[0.85rem] font-semibold " +
                  (role === "physiotherapist" ? "text-red-600" : "text-htext")
                }
              >
                Physio
              </span>
            </button>
            <button
              type="button"
              onClick={() => setRole("hospital")}
              className={
                "flex flex-col items-center gap-2 rounded-xl border-2 px-3 py-4 transition-all " +
                (role === "hospital"
                  ? "border-red-600 bg-red-50"
                  : "border-hgrey-border bg-white hover:border-red-300")
              }
            >
              <Building2
                size={24}
                className={role === "hospital" ? "text-red-600" : "text-htext-muted"}
              />
              <span
                className={
                  "text-[0.85rem] font-semibold " +
                  (role === "hospital" ? "text-red-600" : "text-htext")
                }
              >
                Hospital
              </span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[0.85rem] font-semibold text-htext mb-1.5">Email</label>
              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-htext-muted"
                />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border-[1.5px] border-hgrey-border bg-hgrey py-3 pl-10 pr-3.5 text-[0.95rem] text-htext placeholder:text-htext-muted focus:outline-none focus:border-hblue focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[0.85rem] font-semibold text-htext mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-htext-muted"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border-[1.5px] border-hgrey-border bg-hgrey py-3 pl-10 pr-11 text-[0.95rem] text-htext placeholder:text-htext-muted focus:outline-none focus:border-hblue focus:bg-white transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-htext-muted hover:text-hblue transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[0.85rem] font-semibold text-htext mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <Lock
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-htext-muted"
                />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  minLength={8}
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-xl border-[1.5px] border-hgrey-border bg-hgrey py-3 pl-10 pr-11 text-[0.95rem] text-htext placeholder:text-htext-muted focus:outline-none focus:border-hblue focus:bg-white transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-htext-muted hover:text-hblue transition-colors"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 border border-red-100 px-3.5 py-2.5 text-[0.85rem] font-medium text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-hblue px-4 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_4px_16px_rgba(15,76,129,0.25)] transition-all hover:bg-hblue-dark hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0"
            >
              {loading && <Loader2 size={17} className="animate-spin" />}
              {loading ? "Creating account…" : "Create Account"}
            </button>
          </form>

          <p className="mt-6 text-center text-[0.9rem] text-htext-muted">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-hblue hover:text-hblue-dark">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}