"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Heart, Loader2, Lock, Mail, ShieldCheck, Stethoscope } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");

      const next = searchParams.get("next");
      const fallback = data.role === "nurse" ? "/nurse-profile" : "/hospital-profile";
      router.push(next || fallback);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
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
          alt="Doctor247 nurse caring for a patient at home"
          fill
          className="object-cover opacity-90 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hblue/90 via-hblue/40 to-transparent" />
        <div className="relative z-10 flex h-full flex-col justify-end p-10 xl:p-14 text-white">
          <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur text-white font-semibold text-[0.75rem] uppercase tracking-wide px-4 py-1 rounded-full mb-4 border border-white/20 w-fit">
            <Heart size={13} className="text-hgreen" /> Trusted Healthcare
          </span>
          <h2 className="text-[2rem] xl:text-[2.4rem] font-black leading-[1.1] mb-3 tracking-tight">
            Healthcare at your doorstep, powered by trusted professionals.
          </h2>
          <p className="text-white/85 text-[1rem] mb-6">
            Log in to manage your nurse or hospital profile with Doctor247.
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

      <div className="px-5 py-10 sm:py-14 lg:flex lg:items-center lg:justify-center lg:px-4 lg:py-16">
        <form onSubmit={handleSubmit} className="w-full max-w-[400px] mx-auto">
          
          <h1 className="text-[1.6rem] font-extrabold text-htext mb-1 tracking-tight">Welcome back</h1>
          <p className="text-[0.9rem] text-htext-muted mb-8">Log in to access your nurse or hospital profile.</p>

          <label className="block text-[0.85rem] font-semibold text-htext mb-1.5">Email</label>
          <div className="relative mb-4">
            <Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-htext-muted" />
            <input
              type="email"
              required
              autoFocus
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border-[1.5px] border-hgrey-border bg-hgrey py-3 pl-10 pr-3.5 text-[0.95rem] text-htext placeholder:text-htext-muted focus:outline-none focus:border-hblue focus:bg-white transition-colors"
            />
          </div>

          <label className="block text-[0.85rem] font-semibold text-htext mb-1.5">Password</label>
          <div className="relative mb-6">
            <Lock size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-htext-muted" />
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Your password"
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

          {error && (
            <div className="rounded-lg bg-red-50 border border-red-100 px-3.5 py-2.5 text-[0.85rem] font-medium text-red-600 mb-5">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-hblue px-4 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_4px_16px_rgba(15,76,129,0.25)] transition-all hover:bg-hblue-dark hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0"
          >
            {loading && <Loader2 size={17} className="animate-spin" />}
            {loading ? "Signing in…" : "Sign In"}
          </button>

          <p className="mt-6 text-center text-[0.9rem] text-htext-muted">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-semibold text-hblue hover:text-hblue-dark">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
