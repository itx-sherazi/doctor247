"use client";

import { useState } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { StickyFooter } from "../_home/StickyFooter";
import { FloatingWidget } from "../_home/FloatingWidget";
import { SectionTitle } from "../_home/SectionTitle";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <div className="bg-white text-htext">
      <section className="bg-gradient-to-br from-hblue-light to-[#dbeafe] py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <span className="inline-block text-hgreen font-semibold text-[0.8rem] uppercase tracking-wide mb-1.5">
            Get In Touch
          </span>
          <h1 className="text-[1.9rem] sm:text-[2.6rem] font-extrabold text-htext tracking-tight mb-3">
            Contact <span className="text-hblue">Doctor247</span>
          </h1>
          <p className="text-htext-muted text-[1rem] sm:text-[1.1rem] max-w-[640px] mx-auto">
            Have a question, need a service, or want to partner with us? We&apos;re available 24×7.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-15 bg-white">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid lg:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            {/* Contact info */}
            <div>
              <SectionTitle>
                Reach <span className="text-hgreen">Us</span>
              </SectionTitle>
              <div className="space-y-4">
                <a
                  href="tel:7676266247"
                  className="flex items-start gap-4 bg-hgrey rounded-2xl p-5 border border-hgrey-border hover:border-hblue transition-colors"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-hblue-light text-hblue">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="font-semibold text-[0.95rem] text-htext mb-0.5">Surgeries / Doctor</p>
                    <p className="text-[0.9rem] text-htext-muted">+91 76762 66247</p>
                    <p className="text-[0.75rem] text-htext-muted mt-1">Available 24×7</p>
                  </div>
                </a>

                <a
                  href="tel:7892300247"
                  className="flex items-start gap-4 bg-hgrey rounded-2xl p-5 border border-hgrey-border hover:border-hblue transition-colors"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-hblue-light text-hblue">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="font-semibold text-[0.95rem] text-htext mb-0.5">
                      Home Nursing / Physio / Lab Tests
                    </p>
                    <p className="text-[0.9rem] text-htext-muted">+91 78923 00247</p>
                    <p className="text-[0.75rem] text-htext-muted mt-1">Available 24×7</p>
                  </div>
                </a>

                <a
                  href="mailto:support@doctor247.in"
                  className="flex items-start gap-4 bg-hgrey rounded-2xl p-5 border border-hgrey-border hover:border-hblue transition-colors"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-hblue-light text-hblue">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="font-semibold text-[0.95rem] text-htext mb-0.5">Email</p>
                    <p className="text-[0.9rem] text-htext-muted">support@doctor247.in</p>
                    <p className="text-[0.75rem] text-htext-muted mt-1">We reply within 24 hours</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 bg-hgrey rounded-2xl p-5 border border-hgrey-border">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-hblue-light text-hblue">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="font-semibold text-[0.95rem] text-htext mb-0.5">Service Area</p>
                    <p className="text-[0.9rem] text-htext-muted">Bangalore &amp; surrounding regions</p>
                    <p className="text-[0.75rem] text-htext-muted mt-1">125+ service locations</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-hgrey rounded-2xl p-5 border border-hgrey-border">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-hblue-light text-hblue">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="font-semibold text-[0.95rem] text-htext mb-0.5">Working Hours</p>
                    <p className="text-[0.9rem] text-htext-muted">24×7 — every day of the year</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <SectionTitle>
                Send a <span className="text-hgreen">Message</span>
              </SectionTitle>
              <form
                onSubmit={handleSubmit}
                className="bg-hgrey rounded-2xl p-6 sm:p-8 border border-hgrey-border"
              >
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 border-[1.5px] border-hgrey-border rounded-lg text-[0.95rem] bg-white focus:outline-none focus:border-hblue transition-colors text-htext placeholder:text-htext-muted"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    className="w-full px-4 py-3 border-[1.5px] border-hgrey-border rounded-lg text-[0.95rem] bg-white focus:outline-none focus:border-hblue transition-colors text-htext placeholder:text-htext-muted"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    className="w-full px-4 py-3 border-[1.5px] border-hgrey-border rounded-lg text-[0.95rem] bg-white focus:outline-none focus:border-hblue transition-colors text-htext placeholder:text-htext-muted"
                  />
                  <select
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 border-[1.5px] border-hgrey-border rounded-lg text-[0.95rem] bg-white focus:outline-none focus:border-hblue transition-colors text-htext"
                  >
                    <option value="" disabled>
                      What is this about? *
                    </option>
                    <option>Book a Service</option>
                    <option>Home Nursing</option>
                    <option>Physiotherapy</option>
                    <option>Lab Tests</option>
                    <option>Surgeries</option>
                    <option>Partnership / Hospital</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                  <textarea
                    rows={5}
                    required
                    placeholder="Your message *"
                    className="w-full px-4 py-3 border-[1.5px] border-hgrey-border rounded-lg text-[0.95rem] bg-white focus:outline-none focus:border-hblue transition-colors text-htext placeholder:text-htext-muted resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-hblue text-white font-semibold text-[1rem] py-4 rounded-full shadow-[0_4px_16px_rgba(15,76,129,0.25)] hover:bg-hblue-dark hover:-translate-y-0.5 transition-all"
                  >
                    <Send size={17} /> Send Message
                  </button>

                  {submitted && (
                    <p className="flex items-center justify-center gap-1.5 text-hgreen font-medium text-[0.9rem]">
                      <CheckCircle2 size={16} /> Thank you! We&apos;ll get back to you within 24 hours.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FloatingWidget />
      <StickyFooter />
    </div>
  );
}