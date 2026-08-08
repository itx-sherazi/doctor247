"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  ClipboardList,
  Phone,
  Star,
  Stethoscope,
  XCircle,
} from "lucide-react";
import { StickyFooter } from "../../_home/StickyFooter";
import { SurgeryContent, SURGERY_LIST } from "../_data/surgeries";

const BOOKING_FIELDS_INITIAL = { name: "", mobile: "" };

export function SurgeryPageClient({ content }: { content: SurgeryContent }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(0);
  const [booking, setBooking] = useState(BOOKING_FIELDS_INITIAL);
  const [booked, setBooked] = useState(false);

  const relatedSurgeries = SURGERY_LIST.filter((s) => s.slug !== content.slug);

  function handleBookingSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBooked(true);
    setTimeout(() => setBooked(false), 4000);
    setBooking(BOOKING_FIELDS_INITIAL);
  }

  return (
    <div className="bg-white text-htext">
      {/* Hero */}
      <section className="bg-gradient-to-br from-hblue-light to-[#dbeafe] py-10 sm:py-14">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="text-[0.8rem] text-htext-muted mb-4">
            <Link href="/" className="hover:text-hblue">
              Home
            </Link>{" "}
            / Surgeries / {content.name}
          </p>
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-start">
            {/* Left: content */}
            <div>
              <h1 className="text-[1.9rem] sm:text-[2.5rem] lg:text-[2.7rem] font-bold leading-[1.25] text-htext mb-5 tracking-normal">
                Get Best <span className="text-hblue">{content.name}</span> in Bangalore
              </h1>
              <p className="text-htext-muted text-[1rem] sm:text-[1.05rem] leading-relaxed mb-6 max-w-[600px]">
                {content.heroDescription}
              </p>
              <a
                href="tel:7676266247"
                className="inline-flex items-center gap-2 bg-amber-500 text-white font-bold px-7 py-3.5 rounded-full shadow-[0_4px_20px_rgba(245,158,11,0.35)] hover:bg-amber-600 hover:-translate-y-0.5 transition-all mb-8"
              >
                <Phone size={17} /> Call Us 7676266247
              </a>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white rounded-2xl p-4 sm:p-5 [box-shadow:0_8px_24px_rgba(15,76,129,0.08)]">
                {content.stats.map((stat, i) => (
                  <div key={stat.label} className={"text-center px-2 " + (i > 0 ? "sm:border-l sm:border-hgrey-border" : "")}>
                    <p className="flex items-center justify-center gap-1 text-[1.3rem] sm:text-[1.5rem] font-extrabold text-hblue">
                      {stat.value}{" "}
                      {stat.label === "Patient Rating" && (
                        <Star size={16} className="text-amber-500" fill="currentColor" />
                      )}
                    </p>
                    <p className="text-[0.75rem] text-htext-muted mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: booking card */}
            <form
              onSubmit={handleBookingSubmit}
              className="bg-hblue-dark rounded-2xl p-6 sm:p-7 [box-shadow:0_16px_48px_rgba(15,76,129,0.25)]"
            >
              <h2 className="text-white font-extrabold text-[1.2rem] text-center mb-5">Book Doctor Appointment</h2>
              <input
                type="text"
                required
                placeholder="Patient Name"
                value={booking.name}
                onChange={(e) => setBooking((b) => ({ ...b, name: e.target.value }))}
                className="w-full mb-3 px-4 py-3 rounded-xl text-[0.95rem] bg-white text-htext placeholder:text-htext-muted focus:outline-none focus:ring-2 focus:ring-hgreen"
              />
              <input
                type="tel"
                required
                placeholder="Mobile Number"
                value={booking.mobile}
                onChange={(e) => setBooking((b) => ({ ...b, mobile: e.target.value.replace(/\D/g, "").slice(0, 10) }))}
                className="w-full mb-4 px-4 py-3 rounded-xl text-[0.95rem] bg-white text-htext placeholder:text-htext-muted focus:outline-none focus:ring-2 focus:ring-hgreen"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-amber-500 text-white font-bold py-3.5 rounded-xl hover:bg-amber-600 transition-colors"
              >
                <CalendarCheck size={17} /> Book Free Appointment
              </button>
              {booked && (
                <p className="text-hgreen bg-white/90 rounded-lg text-center text-[0.85rem] font-medium mt-3 py-2">
                  Thanks! Our team will call you shortly.
                </p>
              )}
              <div className="text-center mt-5">
                <p className="text-white/70 text-[0.8rem] font-medium mb-1.5">We are Rated</p>
                <div className="flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={17} className="text-amber-400" fill={i < 4 ? "currentColor" : "none"} />
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-12 sm:py-14 bg-white">
        <div className="mx-auto max-w-[1100px] px-5 grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div>
            <h2 className="text-[1.5rem] sm:text-[1.8rem] font-extrabold text-hblue mb-3">{content.aboutTitle}</h2>
            {content.aboutParagraphs.map((p) => (
              <p key={p} className="text-htext leading-relaxed mb-3 last:mb-0">
                {p}
              </p>
            ))}
          </div>
          <div className="relative rounded-2xl overflow-hidden [box-shadow:0_12px_40px_rgba(15,76,129,0.14)] aspect-[4/3]">
            <Image
              src={content.heroImage}
              alt={`Doctor consulting a patient about ${content.name.toLowerCase()}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Interactive Overview tabs */}
      <section className="py-12 sm:py-14 bg-white">
        <div className="mx-auto max-w-[1000px] px-5">
          <h2 className="text-[1.5rem] sm:text-[1.8rem] font-bold text-hblue text-center mb-8">Overview</h2>
          <div className="grid sm:grid-cols-[260px_1fr] gap-2 sm:gap-8 items-start">
            <div className="border-t border-hgrey-border sm:border-t-0 divide-y divide-hgrey-border">
              {content.overviewTabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={
                    "w-full flex items-center justify-between gap-2 py-3.5 px-1 text-left text-[0.9rem] sm:text-[0.95rem] transition-colors " +
                    (activeTab === i ? "text-hblue font-bold" : "text-htext font-medium hover:text-hblue")
                  }
                >
                  {tab.label}
                  <ChevronRight size={16} className="shrink-0" />
                </button>
              ))}
            </div>
            <div className="bg-hgrey sm:bg-transparent rounded-2xl p-5 sm:p-0">
              <ul className="space-y-3">
                {content.overviewTabs[activeTab].items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.9rem] sm:text-[0.95rem] text-htext leading-relaxed">
                    <CircleCheck size={16} className="text-hgreen shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose Doctor247 (numbered) */}
      <section className="py-12 sm:py-14 bg-white">
        <div className="mx-auto max-w-[1000px] px-5">
          <h2 className="text-[1.4rem] sm:text-[1.8rem] font-bold text-hblue text-center mb-1.5">
            Why Choose Doctor247 For {content.name}?
          </h2>
          <p className="text-center text-htext-muted text-[0.9rem] sm:text-[1rem] mb-8">
            Best General Surgery Clinics In Bangalore
          </p>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {content.whyChooseNumbered.map((item) => (
              <div key={item.number} className={"relative overflow-hidden rounded-2xl p-6 sm:p-7 " + item.bg}>
                <p className="text-[1.6rem] sm:text-[1.8rem] font-black text-htext mb-2">{item.number}</p>
                <h3 className="font-bold text-[1rem] sm:text-[1.05rem] text-htext mb-2">{item.title}</h3>
                <p className="text-[0.85rem] sm:text-[0.9rem] text-htext-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-hblue text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:bg-hblue-dark hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(15,76,129,0.25)]"
            >
              <CalendarCheck size={17} /> Book Free Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Diagnosis & Procedure */}
      <section className="py-12 sm:py-14 bg-hgrey">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-hgrey-border">
              <div className="flex items-center gap-2 mb-3">
                <ClipboardList size={20} className="text-hblue" />
                <h3 className="font-bold text-[1.1rem] text-htext">Diagnosis</h3>
              </div>
              <ul className="space-y-2">
                {content.diagnosticTests.map((test) => (
                  <li key={test} className="flex items-start gap-2 text-[0.9rem] text-htext-muted">
                    <CircleCheck size={14} className="text-hgreen shrink-0 mt-0.5" /> {test}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-hgrey-border">
              <div className="flex items-center gap-2 mb-3">
                <Stethoscope size={20} className="text-hblue" />
                <h3 className="font-bold text-[1.1rem] text-htext">Procedure</h3>
              </div>
              <ul className="space-y-2">
                {content.procedureSteps.map((step) => (
                  <li key={step} className="flex items-start gap-2 text-[0.9rem] text-htext-muted">
                    <CircleCheck size={14} className="text-hgreen shrink-0 mt-0.5" /> {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Post-op care */}
      <section className="py-12 sm:py-14 bg-white">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 className="text-[1.5rem] sm:text-[1.8rem] font-extrabold text-hblue text-center mb-8">Post-Operative Care</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            <div>
              <h3 className="flex items-center gap-2 font-bold text-[1rem] text-hgreen mb-3">
                <CheckCircle2 size={18} /> Do&apos;s
              </h3>
              <ul className="space-y-2">
                {content.postOpDo.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[0.9rem] text-htext">
                    <CircleCheck size={14} className="text-hgreen shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-bold text-[1rem] text-red-500 mb-3">
                <XCircle size={18} /> Don&apos;ts
              </h3>
              <ul className="space-y-2">
                {content.postOpDont.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[0.9rem] text-htext">
                    <XCircle size={14} className="text-red-400 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-14 bg-hgrey">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 className="text-[1.5rem] sm:text-[1.8rem] font-bold text-hblue text-center mb-8">What Our Patients Say</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {content.testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-5 border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)]">
                <div className="flex gap-0.5 text-amber-500 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-[0.9rem] text-htext mb-3 leading-relaxed">{t.quote}</blockquote>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-hblue-light text-hblue font-bold text-[0.85rem] shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[0.85rem]">{t.name}</div>
                    <div className="text-[0.75rem] text-htext-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related surgeries */}
      <section className="py-12 sm:py-14 bg-white">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 className="text-[1.5rem] sm:text-[1.8rem] font-bold text-hblue text-center mb-8">Other Surgeries We Offer</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
            {relatedSurgeries.map((s) => (
              <Link
                key={s.slug}
                href={`/surgery/${s.slug}`}
                className="bg-hgrey rounded-xl p-4 text-center border border-hgrey-border transition-all hover:-translate-y-0.5 hover:[box-shadow:0_8px_24px_rgba(15,76,129,0.1)]"
              >
                <p className="font-semibold text-[0.85rem] text-htext mb-1">{s.name}</p>
                <p className="font-bold text-[0.9rem] text-hgreen">{s.price}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/" className="inline-flex items-center gap-2 text-hblue font-semibold text-[0.9rem] hover:underline">
              View All Surgeries <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 sm:py-14 bg-hgrey">
        <div className="mx-auto max-w-[800px] px-5">
          <h2 className="text-[1.5rem] sm:text-[1.8rem] font-extrabold text-hblue text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {content.faqs.map((faq, i) => (
              <div key={faq.q} className="bg-white rounded-xl border border-hgrey-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left font-semibold text-[0.95rem] text-htext"
                >
                  {faq.q}
                  <ChevronDown size={18} className={"shrink-0 text-hblue transition-transform " + (openFaq === i ? "rotate-180" : "")} />
                </button>
                {openFaq === i && <p className="px-5 pb-4 text-[0.9rem] text-htext-muted leading-relaxed">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 sm:py-14 bg-hblue">
        <div className="mx-auto max-w-[700px] px-5 text-center">
          <h2 className="text-[1.4rem] sm:text-[1.7rem] font-extrabold text-white mb-2">
            Ready to consult a {content.shortName.toLowerCase()} specialist?
          </h2>
          <p className="text-white/80 mb-6">Book a free consultation and get a personalised treatment plan.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:7676266247"
              className="inline-flex items-center gap-2 bg-white text-hblue font-semibold px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-all"
            >
              <Phone size={17} /> Call Now
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-hgreen text-white font-semibold px-7 py-3.5 rounded-full hover:bg-hgreen-dark hover:-translate-y-0.5 transition-all"
            >
              <CalendarCheck size={17} /> Book Consultation
            </a>
          </div>
        </div>
      </section>

      <StickyFooter />
    </div>
  );
}
