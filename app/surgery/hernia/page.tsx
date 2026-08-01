"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  Banknote,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  ClipboardList,
  HeartHandshake,
  Phone,
  ShieldCheck,
  Star,
  Stethoscope,
  Users,
  XCircle,
} from "lucide-react";
import { StickyFooter } from "../../_home/StickyFooter";

const BOOKING_FIELDS_INITIAL = { name: "", mobile: "" };

const STATS = [
  { icon: Star, value: "4.8", label: "Patient Rating" },
  { icon: Users, value: "10,000+", label: "Hernia Surgeries Done" },
  { icon: ShieldCheck, value: "25+", label: "Partner Hospitals" },
  { icon: HeartHandshake, value: "15+", label: "Insurance Partners" },
];

const OVERVIEW_CARDS = [
  {
    title: "When You Need Surgery",
    icon: Stethoscope,
    items: [
      "A visible bulge that grows larger over time",
      "Pain or discomfort while lifting, coughing, or standing",
      "Bulge that cannot be pushed back in (may need urgent care)",
      "Nausea or vomiting along with the bulge (emergency sign)",
    ],
  },
  {
    title: "Prevention Tips",
    icon: ShieldCheck,
    items: [
      "Avoid heavy lifting, or use proper lifting technique",
      "Maintain a healthy body weight",
      "Treat chronic cough and constipation early",
      "Strengthen core and abdominal muscles regularly",
    ],
  },
  {
    title: "Possible Complications",
    icon: Activity,
    items: [
      "Incarceration  hernia gets stuck outside the abdomen",
      "Strangulation  blood supply to tissue is cut off (emergency)",
      "Increasing pain and swelling if left untreated",
      "Higher surgical risk the longer surgery is delayed",
    ],
  },
];

const WHY_CHOOSE = [
  {
    icon: Banknote,
    title: "Cashless Insurance",
    description: "We handle paperwork with 15+ insurance partners so you don't pay out of pocket.",
  },
  {
    icon: HeartHandshake,
    title: "Free Follow-ups",
    description: "Post-surgery consultations included for 90 days at no extra cost.",
  },
  {
    icon: Banknote,
    title: "No-Cost EMI",
    description: "Split your surgery cost into easy monthly instalments with zero interest.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Surgeons",
    description: "Every surgeon is credential-checked with a minimum of 8 years' experience.",
  },
];

const OVERVIEW_TABS = [
  { label: "When to choose Hernia surgery?", items: OVERVIEW_CARDS[0].items },
  { label: "Preventing Hernia", items: OVERVIEW_CARDS[1].items },
  { label: "Complications of Hernia", items: OVERVIEW_CARDS[2].items },
  { label: "Why Doctor247?", items: WHY_CHOOSE.map((w) => `${w.title} — ${w.description}`) },
];

const WHY_CHOOSE_NUMBERED = [
  {
    number: "01",
    title: "Advanced Laparoscopic Technique",
    description:
      "We use minimally invasive keyhole surgery for hernia repair, resulting in less pain, smaller scars, and a quicker return to daily activities.",
    bg: "bg-hblue-light",
  },
  {
    number: "02",
    title: "Experienced General Surgeons",
    description:
      "Every Doctor247 surgeon has a minimum of 8 years of experience performing hernia repairs with consistently high success rates.",
    bg: "bg-amber-50",
  },
  {
    number: "03",
    title: "Over 95% Success Rate",
    description:
      "Our mesh-repair technique and post-operative care protocol keep hernia recurrence rates well under the national average.",
    bg: "bg-hgreen-light",
  },
  {
    number: "04",
    title: "Cashless Insurance & Free Follow-ups",
    description:
      "We handle your insurance paperwork end-to-end and include 90 days of free follow-up consultations after your surgery.",
    bg: "bg-[#eef2ff]",
  },
];

const DIAGNOSTIC_TESTS = [
  "Physical examination of the bulge",
  "Ultrasound of the abdomen/groin",
  "CT scan (for complex or recurrent hernias)",
  "Blood tests to assess fitness for surgery",
];

const PROCEDURE_STEPS = [
  "Anaesthesia (local, spinal, or general depending on your case)",
  "Laparoscopic (keyhole) or open repair of the weakened muscle wall",
  "Placement of a surgical mesh to reinforce the area, if required",
  "Closure of incisions  typically 30-60 minutes total",
];

const POST_OP_DO = [
  "Take prescribed pain relief and antibiotics on schedule",
  "Walk short distances from day 1 to aid circulation",
  "Eat light, fibre-rich meals to avoid constipation",
  "Attend your follow-up visit within 7-10 days",
];

const POST_OP_DONT = [
  "Don't lift anything heavier than 5 kg for 4-6 weeks",
  "Don't drive until your surgeon clears you",
  "Don't skip your prescribed medication schedule",
  "Don't ignore fever, redness, or unusual swelling  call us",
];

const TESTIMONIALS = [
  {
    quote:
      "“I was scared of surgery but the laparoscopic procedure was quick and I was back home the same evening. Recovery was much easier than I expected.”",
    name: "R. Sharma",
    role: "Koramangala, Bangalore",
  },
  {
    quote:
      "“The team explained every step clearly and handled my insurance claim end-to-end. No hidden costs, exactly as quoted.”",
    name: "M. Iqbal",
    role: "HSR Layout, Bangalore",
  },
  {
    quote:
      "“Free follow-ups for 3 months gave me real peace of mind. My surgeon checked on my recovery personally every time.”",
    name: "A. Fernandes",
    role: "Whitefield, Bangalore",
  },
];

const RELATED_SURGERIES = [
  { name: "Piles Surgery", price: "₹45,000" },
  { name: "Gallbladder Surgery", price: "₹60,000" },
  { name: "Kidney Stone (PCNL)", price: "₹90,000" },
  { name: "Knee Replacement", price: "₹1,80,000" },
  { name: "Cataract Surgery", price: "Book Consultation" },
];

const FAQS = [
  {
    q: "Is hernia surgery painful?",
    a: "Most patients experience mild discomfort for a few days, well managed with prescribed pain medication. Laparoscopic surgery generally causes less post-operative pain than open surgery.",
  },
  {
    q: "How long does recovery take?",
    a: "Most patients return to light daily activities within a week and to normal activity, including exercise, within 4-6 weeks. Recovery time depends on the type of hernia and surgical technique used.",
  },
  {
    q: "Is hernia surgery covered by insurance?",
    a: "Yes, hernia repair is covered by most health insurance plans in India. Our team assists with cashless claims across 15+ insurance partners.",
  },
  {
    q: "Can a hernia come back after surgery?",
    a: "Recurrence rates are low (under 5%) when mesh repair is used by an experienced surgeon. Following post-operative guidelines significantly reduces the risk of recurrence.",
  },
  {
    q: "What is the difference between open and laparoscopic repair?",
    a: "Laparoscopic (keyhole) repair uses small incisions and typically means less pain and a faster return to activity, while open repair may be recommended for larger or complex hernias. Your surgeon will recommend the best option for your case.",
  },
];

export default function HerniaSurgeryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(0);
  const [booking, setBooking] = useState(BOOKING_FIELDS_INITIAL);
  const [booked, setBooked] = useState(false);

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
            / Surgeries / Hernia Surgery
          </p>
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-start">
            {/* Left: content */}
            <div>
              <h1 className="text-[1.9rem] sm:text-[2.5rem] lg:text-[2.7rem] font-bold leading-[1.25] text-htext mb-5 tracking-normal">
                Get Best <span className="text-hblue">Hernia Surgery</span> in Bangalore
              </h1>
              <p className="text-htext-muted text-[1rem] sm:text-[1.05rem] leading-relaxed mb-6 max-w-[600px]">
                Safe, minimally invasive hernia repair with cashless insurance, no-cost EMI, and free
                follow-ups. Contact us for expert hernia treatment by verified surgeons in Bangalore with a
                high success rate and affordable prices.
              </p>
              <a
                href="tel:7676266247"
                className="inline-flex items-center gap-2 bg-amber-500 text-white font-bold px-7 py-3.5 rounded-full shadow-[0_4px_20px_rgba(245,158,11,0.35)] hover:bg-amber-600 hover:-translate-y-0.5 transition-all mb-8"
              >
                <Phone size={17} /> Call Us 7676266247
              </a>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white rounded-2xl p-4 sm:p-5 [box-shadow:0_8px_24px_rgba(15,76,129,0.08)]">
                {STATS.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={
                      "text-center px-2 " + (i > 0 ? "sm:border-l sm:border-hgrey-border" : "")
                    }
                  >
                    <p className="flex items-center justify-center gap-1 text-[1.3rem] sm:text-[1.5rem] font-extrabold text-hblue">
                      {stat.value} {stat.label === "Patient Rating" && <Star size={16} className="text-amber-500" fill="currentColor" />}
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
            <h2 className="text-[1.5rem] sm:text-[1.8rem] font-extrabold text-hblue mb-3">What is a Hernia?</h2>
            <p className="text-htext leading-relaxed mb-3">
              A hernia occurs when an internal organ or tissue pushes through a weak spot in the surrounding
              muscle wall, most commonly in the abdomen or groin. It often appears as a visible bulge that may
              grow larger over time and cause discomfort, especially when lifting, coughing, or standing for
              long periods.
            </p>
            <p className="text-htext leading-relaxed">
              Hernias do not heal on their own and generally require surgical repair to prevent complications.
              Doctor247 connects you with verified general surgeons across Bangalore for safe, affordable hernia
              treatment.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden [box-shadow:0_12px_40px_rgba(15,76,129,0.14)] aspect-[4/3]">
            <img
              src="/surgery-harnia.png"
              alt="Doctor consulting a patient about hernia treatment"
              className="w-full h-full object-cover"
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
              {OVERVIEW_TABS.map((tab, i) => (
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
                {OVERVIEW_TABS[activeTab].items.map((item) => (
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
            Why Choose Doctor247 For Hernia Surgery?
          </h2>
          <p className="text-center text-htext-muted text-[0.9rem] sm:text-[1rem] mb-8">
            Best General Surgery Clinics In Bangalore
          </p>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {WHY_CHOOSE_NUMBERED.map((item) => (
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
              {DIAGNOSTIC_TESTS.map((test) => (
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
              {PROCEDURE_STEPS.map((step) => (
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
          <h2 className="text-[1.5rem] sm:text-[1.8rem] font-extrabold text-hblue text-center mb-8">
            Post-Operative Care
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            <div>
              <h3 className="flex items-center gap-2 font-bold text-[1rem] text-hgreen mb-3">
                <CheckCircle2 size={18} /> Do&apos;s
              </h3>
              <ul className="space-y-2">
                {POST_OP_DO.map((item) => (
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
                {POST_OP_DONT.map((item) => (
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
          <h2 className="text-[1.5rem] sm:text-[1.8rem] font-bold text-hblue text-center mb-8">
            What Our Patients Say
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-5 border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)]"
              >
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
          <h2 className="text-[1.5rem] sm:text-[1.8rem] font-bold text-hblue text-center mb-8">
            Other Surgeries We Offer
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
            {RELATED_SURGERIES.map((s) => (
              <div
                key={s.name}
                className="bg-hgrey rounded-xl p-4 text-center border border-hgrey-border transition-all hover:-translate-y-0.5 hover:[box-shadow:0_8px_24px_rgba(15,76,129,0.1)]"
              >
                <p className="font-semibold text-[0.85rem] text-htext mb-1">{s.name}</p>
                <p className="font-bold text-[0.9rem] text-hgreen">{s.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-hblue font-semibold text-[0.9rem] hover:underline"
            >
              View All Surgeries <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 sm:py-14 bg-hgrey">
        <div className="mx-auto max-w-[800px] px-5">
          <h2 className="text-[1.5rem] sm:text-[1.8rem] font-extrabold text-hblue text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={faq.q} className="bg-white rounded-xl border border-hgrey-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left font-semibold text-[0.95rem] text-htext"
                >
                  {faq.q}
                  <ChevronDown
                    size={18}
                    className={"shrink-0 text-hblue transition-transform " + (openFaq === i ? "rotate-180" : "")}
                  />
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
            Ready to consult a hernia specialist?
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
