"use client";

import { Suspense, useEffect, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";

/* ============================================================
   SHARED CONTENT PRIMITIVES
   ============================================================ */

function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-[1.5rem] sm:text-[1.8rem] font-extrabold text-hblue mb-2">{children}</h2>;
}
function LastUpdated({ date }: { date: string }) {
  return <p className="text-[0.8rem] text-htext-muted mb-5">Last Updated: {date}</p>;
}
function H3({ children }: { children: ReactNode }) {
  return <h3 className="text-[1.1rem] sm:text-[1.2rem] font-bold text-hblue mt-6 mb-2">{children}</h3>;
}
function H4({ children }: { children: ReactNode }) {
  return <h4 className="text-[1rem] font-semibold text-htext mt-4 mb-1">{children}</h4>;
}
function P({ children }: { children: ReactNode }) {
  return <p className="text-htext mb-3 leading-relaxed">{children}</p>;
}
function Ul({ children }: { children: ReactNode }) {
  return <ul className="list-disc ml-5 mb-4 space-y-1.5 text-htext marker:text-hblue">{children}</ul>;
}
function Ol({ children }: { children: ReactNode }) {
  return <ol className="list-decimal ml-5 mb-4 space-y-1.5 text-htext marker:text-hblue">{children}</ol>;
}

const HIGHLIGHT_COLORS = {
  green: "border-hgreen",
  blue: "border-hblue",
  orange: "border-amber-500",
  red: "border-red-500",
};

function Highlight({ children, color = "green" }: { children: ReactNode; color?: keyof typeof HIGHLIGHT_COLORS }) {
  return (
    <div className={"bg-hgrey border-l-4 rounded-lg px-5 py-4 my-4 " + HIGHLIGHT_COLORS[color]}>
      <p className="text-htext text-[0.95rem]">{children}</p>
    </div>
  );
}

function LegalTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse text-[0.85rem] sm:text-[0.9rem]">
        <thead className="bg-hblue text-white">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-3.5 py-2.5 text-left font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-hgrey-border last:border-0 hover:[&>td]:bg-hblue-light">
              {row.map((cell, j) => (
                <td key={j} className="px-3.5 py-2.5">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ContactLegal({ email, phone, address }: { email?: string; phone?: string; address?: string }) {
  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {email && (
        <div className="flex items-center gap-2.5 bg-hgrey border border-hgrey-border rounded-lg px-4 py-2.5">
          <Mail size={18} className="text-hgreen shrink-0" />
          <div>
            <p className="text-[0.7rem] text-htext-muted">Email</p>
            <p className="font-semibold text-[0.9rem]">{email}</p>
          </div>
        </div>
      )}
      {phone && (
        <div className="flex items-center gap-2.5 bg-hgrey border border-hgrey-border rounded-lg px-4 py-2.5">
          <Phone size={18} className="text-hgreen shrink-0" />
          <div>
            <p className="text-[0.7rem] text-htext-muted">Phone</p>
            <p className="font-semibold text-[0.9rem]">{phone}</p>
          </div>
        </div>
      )}
      {address && (
        <div className="flex items-center gap-2.5 bg-hgrey border border-hgrey-border rounded-lg px-4 py-2.5">
          <MapPin size={18} className="text-hgreen shrink-0" />
          <div>
            <p className="text-[0.7rem] text-htext-muted">Address</p>
            <p className="font-semibold text-[0.9rem]">{address}</p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   TAB DEFINITIONS
   ============================================================ */

const TABS = [
  { key: "privacy", label: "Privacy Policy" },
  { key: "terms", label: "Terms & Conditions" },
  { key: "refund", label: "Refund Policy" },
  { key: "cancellation", label: "Cancellation Policy" },
  { key: "disclaimer", label: "Medical Disclaimer" },
  { key: "patient-rights", label: "Patient Rights" },
  { key: "grievance", label: "Grievance Redressal" },
  { key: "cookie", label: "Cookie Policy" },
  { key: "data-protection", label: "Data Protection" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

const CANCELLATION_ROWS = [
  ["Home Doctor Visit", "2+ hours before", "₹0 (Full Refund)"],
  ["Home Doctor Visit", "Less than 2 hours", "₹250"],
  ["Home Nursing", "4+ hours before", "₹0 (Full Refund)"],
  ["Home Nursing", "Less than 4 hours", "₹500"],
  ["Surgery Booking", "48+ hours before", "₹0 (Full Refund)"],
  ["Surgery Booking", "24-48 hours before", "10% of package"],
  ["Surgery Booking", "Less than 24 hours", "25% of package"],
  ["Physiotherapy", "24+ hours before", "₹0 (Full Refund)"],
  ["Physiotherapy", "Less than 24 hours", "₹250"],
  ["Lab Tests", "24+ hours before", "₹0 (Full Refund)"],
  ["Lab Tests", "Less than 24 hours", "₹200"],
];

/* ============================================================
   PAGE
   ============================================================ */

function isTabKey(value: string | null): value is TabKey {
  return TABS.some((tab) => tab.key === value);
}

export default function LegalPage() {
  return (
    <Suspense fallback={null}>
      <LegalPageInner />
    </Suspense>
  );
}

function LegalPageInner() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState<TabKey>("privacy");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (isTabKey(tab)) setActive(tab);
  }, [searchParams]);

  return (
    <div className="bg-white text-htext">
      <section className="bg-gradient-to-br from-[#f0f7ff] to-white to-70% border-b border-hgrey-border py-8 sm:py-10">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="text-[0.85rem] text-htext-muted mb-1">
            <span className="text-hblue font-medium">Home</span> / Legal
          </p>
          <h1 className="text-[1.8rem] sm:text-[2.4rem] font-black text-hblue tracking-tight">
            Legal <span className="text-hgreen">Policies</span>
          </h1>
          <p className="text-htext-muted">Transparent policies for your trust and safety</p>
        </div>
      </section>

      <div
        className="legal-tab-scroll bg-white border-b border-hgrey-border py-3 overflow-x-auto sticky top-0 z-[90]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="mx-auto max-w-[1200px] px-5 flex gap-1.5 flex-nowrap">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActive(tab.key);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={
                "px-4 py-1.5 rounded-full font-medium text-[0.8rem] whitespace-nowrap transition-colors border " +
                (active === tab.key
                  ? "bg-hblue text-white border-hblue"
                  : "bg-white text-htext-muted border-transparent hover:text-hblue hover:bg-hblue-light")
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="bg-white rounded-2xl border border-hgrey-border [box-shadow:0_8px_24px_rgba(15,76,129,0.08)] p-6 sm:p-10">
            {active === "privacy" && (
              <div>
                <H2>Privacy Policy</H2>
                <LastUpdated date="January 15, 2026" />
                <P>
                  At Doctor247, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your personal information when you use our healthcare services, website,
                  and mobile applications.
                </P>

                <H3>Information We Collect</H3>
                <P>We may collect the following types of information:</P>
                <Ul>
                  <li>
                    <strong>Personal Identification Information:</strong> Name, date of birth, gender, address, email
                    address, phone number, and government-issued ID.
                  </li>
                  <li>
                    <strong>Health Information:</strong> Medical history, health conditions, treatment records,
                    prescriptions, and any other health-related data you provide.
                  </li>
                  <li>
                    <strong>Payment Information:</strong> Insurance details, payment card information, and billing
                    address.
                  </li>
                  <li>
                    <strong>Technical Information:</strong> IP address, browser type, device information, and usage
                    data collected through cookies.
                  </li>
                </Ul>

                <H3>How We Use Your Information</H3>
                <P>We use your information to:</P>
                <Ul>
                  <li>Provide, maintain, and improve our healthcare services.</li>
                  <li>Facilitate appointments, consultations, and treatment coordination.</li>
                  <li>Process payments and insurance claims.</li>
                  <li>Communicate with you about your health and our services.</li>
                  <li>Comply with legal and regulatory requirements.</li>
                  <li>Improve patient care and safety.</li>
                </Ul>

                <Highlight color="blue">
                  <strong>🔒 Your Health Data is Protected:</strong> We comply with the Digital Personal Data
                  Protection Act (DPDPA) 2023 and all applicable Indian healthcare data protection laws. Your health
                  information is never shared without your explicit consent.
                </Highlight>

                <H3>Information Sharing</H3>
                <P>We may share your information with:</P>
                <Ul>
                  <li>
                    <strong>Healthcare Providers:</strong> Hospitals, doctors, nurses, and specialists involved in
                    your care.
                  </li>
                  <li>
                    <strong>Insurance Companies:</strong> For processing claims and verifying coverage.
                  </li>
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who assist with our operations (e.g.,
                    payment processing, IT services).
                  </li>
                  <li>
                    <strong>Legal Authorities:</strong> When required by law or to protect our rights.
                  </li>
                </Ul>

                <H3>Data Security</H3>
                <P>We implement robust security measures to protect your information, including:</P>
                <Ul>
                  <li>End-to-end encryption for data transmission.</li>
                  <li>Secure servers with firewalls and access controls.</li>
                  <li>Regular security audits and vulnerability assessments.</li>
                  <li>Staff training on data protection and privacy.</li>
                </Ul>

                <H3>Your Rights</H3>
                <P>You have the right to:</P>
                <Ul>
                  <li>Access, correct, or delete your personal information.</li>
                  <li>Withdraw consent for data processing at any time.</li>
                  <li>Receive a copy of your health records.</li>
                  <li>Lodge a complaint with the data protection authority.</li>
                </Ul>

                <H3>Contact Us</H3>
                <P>If you have questions about this Privacy Policy, please contact us:</P>
                <ContactLegal email="privacy@doctor247.in" phone="+91 7676266247" address="Bangalore, India" />
              </div>
            )}

            {active === "terms" && (
              <div>
                <H2>Terms &amp; Conditions</H2>
                <LastUpdated date="January 15, 2026" />
                <P>
                  Welcome to Doctor247. By using our healthcare platform, website, and services, you agree to comply
                  with and be bound by these Terms &amp; Conditions. Please read them carefully.
                </P>

                <H3>1. Definitions</H3>
                <Ul>
                  <li>
                    <strong>&quot;Doctor247&quot;</strong> refers to the healthcare platform, its owners, employees,
                    and affiliates.
                  </li>
                  <li>
                    <strong>&quot;User&quot;</strong> refers to any individual using our services, including
                    patients, caregivers, and healthcare providers.
                  </li>
                  <li>
                    <strong>&quot;Services&quot;</strong> include home doctor visits, home nursing, surgeries,
                    physiotherapy, lab tests, and other healthcare offerings.
                  </li>
                </Ul>

                <H3>2. Use of Services</H3>
                <P>By using Doctor247 services, you agree to:</P>
                <Ul>
                  <li>Provide accurate and complete information about yourself and your health.</li>
                  <li>Use the services for legitimate healthcare purposes only.</li>
                  <li>Not misuse or attempt to manipulate our platform or services.</li>
                  <li>Comply with all applicable laws and regulations.</li>
                </Ul>

                <H3>3. Medical Disclaimer</H3>
                <Highlight color="red">
                  <strong>⚠️ Emergency Disclaimer:</strong> Doctor247 is not an emergency service. If you are
                  experiencing a medical emergency, please call <strong>102</strong> (ambulance) or visit your
                  nearest emergency room immediately.
                </Highlight>

                <H3>4. Booking and Appointments</H3>
                <Ul>
                  <li>Appointments are subject to availability and confirmation.</li>
                  <li>You may cancel or reschedule appointments according to our cancellation policy.</li>
                  <li>Doctor247 reserves the right to cancel or reschedule appointments in case of emergencies.</li>
                </Ul>

                <H3>5. Payments and Fees</H3>
                <Ul>
                  <li>All prices are transparent and displayed clearly before booking.</li>
                  <li>Payment is required at the time of service or as per the payment schedule.</li>
                  <li>Insurance claims are processed as per insurance provider policies.</li>
                  <li>Refunds are processed according to our refund policy.</li>
                </Ul>

                <H3>6. User Responsibilities</H3>
                <Ul>
                  <li>Provide accurate and truthful information.</li>
                  <li>Follow the advice and treatment plans provided by healthcare professionals.</li>
                  <li>Notify us of any changes in your health condition.</li>
                  <li>Ensure a safe and accessible environment for home visits.</li>
                </Ul>

                <H3>7. Limitation of Liability</H3>
                <P>
                  Doctor247 acts as a facilitator connecting patients with healthcare providers. While we ensure all
                  providers are verified and qualified, we are not liable for:
                </P>
                <Ul>
                  <li>Medical outcomes or treatment results.</li>
                  <li>Services provided by third-party healthcare providers.</li>
                  <li>Any indirect, incidental, or consequential damages.</li>
                </Ul>

                <H3>8. Intellectual Property</H3>
                <P>
                  All content on the Doctor247 platform, including text, graphics, logos, and software, is the
                  property of Doctor247 and protected by copyright and intellectual property laws.
                </P>

                <H3>9. Governing Law</H3>
                <P>
                  These Terms &amp; Conditions are governed by the laws of India. Any disputes shall be subject to
                  the exclusive jurisdiction of courts in Bangalore, Karnataka.
                </P>

                <H3>10. Changes to Terms</H3>
                <P>
                  We reserve the right to update these Terms &amp; Conditions at any time. Changes will be posted on
                  this page with the updated date.
                </P>

                <H3>Contact Us</H3>
                <ContactLegal email="legal@doctor247.in" phone="+91 7676266247" />
              </div>
            )}

            {active === "refund" && (
              <div>
                <H2>Refund Policy</H2>
                <LastUpdated date="January 15, 2026" />
                <P>
                  At Doctor247, we strive to provide transparent and fair refund policies. This Refund Policy
                  explains the circumstances under which refunds are issued.
                </P>

                <H3>1. Consultation Fees</H3>
                <Ul>
                  <li>
                    <strong>Before Consultation:</strong> Full refund if cancelled at least 2 hours before the
                    scheduled time.
                  </li>
                  <li>
                    <strong>After Consultation:</strong> No refund for completed consultations.
                  </li>
                  <li>
                    <strong>No-Show:</strong> No refund for missed appointments without prior cancellation.
                  </li>
                </Ul>

                <H3>2. Home Nursing Services</H3>
                <Ul>
                  <li>
                    <strong>Before Service Commencement:</strong> Full refund if cancelled 4+ hours before.
                  </li>
                  <li>
                    <strong>After Service Start:</strong> Refund for unused hours only (pro-rated).
                  </li>
                  <li>
                    <strong>Minimum Charge:</strong> 1-hour minimum charge applies.
                  </li>
                </Ul>

                <H3>3. Surgery Packages</H3>
                <Ul>
                  <li>
                    <strong>Before Admission:</strong> Full refund of package amount.
                  </li>
                  <li>
                    <strong>After Admission (Pre-Surgery):</strong> Refund minus administrative fees and tests
                    already conducted.
                  </li>
                  <li>
                    <strong>After Surgery:</strong> No refund for completed surgeries.
                  </li>
                </Ul>

                <H3>4. Physiotherapy &amp; Lab Tests</H3>
                <Ul>
                  <li>
                    <strong>Cancellation 24+ hours before:</strong> Full refund.
                  </li>
                  <li>
                    <strong>Cancellation within 24 hours:</strong> 50% refund.
                  </li>
                  <li>
                    <strong>No-Show:</strong> No refund.
                  </li>
                </Ul>

                <H3>5. Processing Time</H3>
                <Ul>
                  <li>Refunds are processed within 5-7 business days.</li>
                  <li>Refunds are issued via the original payment method.</li>
                  <li>Insurance claims are subject to insurance provider policies.</li>
                </Ul>

                <H3>6. Special Circumstances</H3>
                <Ul>
                  <li>
                    <strong>Medical Emergencies:</strong> Full refund may be considered on a case-by-case basis.
                  </li>
                  <li>
                    <strong>Service Cancellation by Doctor247:</strong> Full refund will be processed immediately.
                  </li>
                  <li>
                    <strong>Dissatisfaction:</strong> We will make reasonable efforts to address concerns before
                    considering refunds.
                  </li>
                </Ul>

                <Highlight color="blue">
                  <strong>📞 Need Help?</strong> If you have any questions about refunds, please contact our support
                  team at <strong>+91 7676266247</strong> or email <strong>support@doctor247.in</strong>.
                </Highlight>

                <H3>How to Request a Refund</H3>
                <Ol>
                  <li>Contact our support team via phone or email.</li>
                  <li>Provide your booking ID and reason for refund.</li>
                  <li>Our team will review your request and process it within 2-3 business days.</li>
                </Ol>
              </div>
            )}

            {active === "cancellation" && (
              <div>
                <H2>Cancellation Policy</H2>
                <LastUpdated date="January 15, 2026" />
                <P>
                  This Cancellation Policy outlines the rules and fees for canceling appointments and services booked
                  through Doctor247.
                </P>

                <H3>1. General Policy</H3>
                <Ul>
                  <li>Cancellations must be made through our official channels (phone, WhatsApp, or app).</li>
                  <li>Cancellation fees may apply based on timing and service type.</li>
                  <li>No-shows will be charged the full service fee.</li>
                </Ul>

                <H3>2. Cancellation Timeframes</H3>
                <LegalTable headers={["Service Type", "Cancellation Window", "Cancellation Fee"]} rows={CANCELLATION_ROWS} />

                <H3>3. Rescheduling</H3>
                <Ul>
                  <li>Rescheduling is free of charge if done 24+ hours in advance.</li>
                  <li>Rescheduling within 24 hours may incur a fee of ₹200-₹500.</li>
                  <li>Rescheduling a surgery may require re-booking based on availability.</li>
                </Ul>

                <H3>4. Emergency Cancellations</H3>
                <Ul>
                  <li>In case of medical emergencies, cancellation fees may be waived.</li>
                  <li>Documentation may be required for waiver consideration.</li>
                  <li>Contact our support team immediately for assistance.</li>
                </Ul>

                <H3>5. Cancellation by Doctor247</H3>
                <Ul>
                  <li>If we need to cancel due to unforeseen circumstances, you will be notified immediately.</li>
                  <li>You will receive a full refund and priority rebooking.</li>
                  <li>Inconvenience compensation may be offered at our discretion.</li>
                </Ul>

                <Highlight color="orange">
                  <strong>⚠️ Same-Day Cancellations:</strong> Same-day cancellations for home services are subject to
                  a cancellation fee as we have already allocated resources. We encourage you to notify us as early
                  as possible.
                </Highlight>

                <H3>How to Cancel</H3>
                <Ul>
                  <li>
                    <strong>Phone:</strong> +91 7676266247
                  </li>
                  <li>
                    <strong>WhatsApp:</strong> +91 7676266247
                  </li>
                  <li>
                    <strong>Email:</strong> support@doctor247.in
                  </li>
                  <li>
                    <strong>App:</strong> Via your booking dashboard
                  </li>
                </Ul>
              </div>
            )}

            {active === "disclaimer" && (
              <div>
                <H2>Medical Disclaimer</H2>
                <LastUpdated date="January 15, 2026" />
                <Highlight color="red">
                  <strong>⚠️ IMPORTANT:</strong> This is a Medical Disclaimer. Please read it carefully before using
                  Doctor247 services.
                </Highlight>

                <H3>1. No Doctor-Patient Relationship</H3>
                <P>
                  Using Doctor247&apos;s platform does not create a doctor-patient relationship between you and
                  Doctor247. The doctor-patient relationship is established directly between you and the healthcare
                  provider you choose to consult.
                </P>

                <H3>2. Not an Emergency Service</H3>
                <Highlight color="red">
                  <strong>🚨 EMERGENCY WARNING:</strong> Doctor247 is not an emergency medical service. If you are
                  experiencing a medical emergency, please call <strong>102</strong> (ambulance services) or visit
                  your nearest emergency room immediately. Do not rely on Doctor247 for emergency care.
                </Highlight>

                <H3>3. Information Accuracy</H3>
                <P>
                  The information provided on the Doctor247 platform is for informational purposes only and is not a
                  substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of
                  your physician or other qualified health provider with any questions you may have regarding a
                  medical condition.
                </P>

                <H3>4. No Guarantees</H3>
                <P>Doctor247 makes no representations or warranties about:</P>
                <Ul>
                  <li>The accuracy, completeness, or reliability of any medical information provided.</li>
                  <li>The effectiveness or outcomes of any treatment or consultation.</li>
                  <li>The qualifications or performance of any healthcare provider on our platform.</li>
                </Ul>

                <H3>5. Assumption of Risk</H3>
                <P>
                  By using Doctor247 services, you assume all risks associated with the use of our platform and the
                  services provided. You acknowledge that healthcare decisions involve inherent risks and that you
                  are making informed decisions voluntarily.
                </P>

                <H3>6. Provider Verification</H3>
                <P>
                  While we verify the credentials and qualifications of healthcare providers on our platform, we do
                  not guarantee their performance or the quality of care they provide. You are responsible for
                  verifying the credentials of any healthcare provider you choose.
                </P>

                <H3>7. No Liability for Treatment Outcomes</H3>
                <P>
                  Doctor247 is not liable for any treatment outcomes, adverse events, or complications that may
                  arise from the services provided by healthcare professionals on our platform. All medical
                  decisions and treatments are ultimately the responsibility of the patient and their chosen
                  healthcare provider.
                </P>

                <H3>8. Telemedicine Limitations</H3>
                <P>
                  Telemedicine consultations have limitations and may not be suitable for all conditions. Some
                  conditions require in-person examinations, diagnostic tests, or hospital visits. You should follow
                  your doctor&apos;s advice regarding in-person care.
                </P>

                <H3>9. Your Responsibility</H3>
                <Ul>
                  <li>Provide accurate and complete medical information.</li>
                  <li>Follow the treatment plans and advice provided.</li>
                  <li>Inform your healthcare provider of any changes in your condition.</li>
                  <li>Seek emergency care when necessary.</li>
                </Ul>

                <H3>10. Third-Party Content</H3>
                <P>
                  Our platform may contain links to third-party websites or content. We do not endorse or take
                  responsibility for the accuracy or reliability of any third-party content.
                </P>

                <H3>Contact Us</H3>
                <P>
                  If you have questions about this Medical Disclaimer, please contact us at{" "}
                  <strong>legal@doctor247.in</strong>.
                </P>
              </div>
            )}

            {active === "patient-rights" && (
              <div>
                <H2>Patient Rights &amp; Responsibilities</H2>
                <LastUpdated date="January 15, 2026" />
                <P>
                  At Doctor247, we are committed to protecting and respecting the rights of every patient. This
                  policy outlines your rights and responsibilities when using our services.
                </P>

                <H3>Your Rights</H3>

                <H4>1. Right to Information</H4>
                <Ul>
                  <li>Access clear and transparent information about services, costs, and providers.</li>
                  <li>Receive information in a language you understand.</li>
                  <li>Know the qualifications and experience of your healthcare provider.</li>
                </Ul>

                <H4>2. Right to Informed Consent</H4>
                <Ul>
                  <li>Give or withhold consent for any procedure or treatment.</li>
                  <li>Receive a clear explanation of risks, benefits, and alternatives.</li>
                  <li>Change your mind about consent at any time.</li>
                </Ul>

                <H4>3. Right to Privacy and Confidentiality</H4>
                <Ul>
                  <li>Have your medical records and personal information kept confidential.</li>
                  <li>Expect providers to discuss your care discreetly, especially during home visits.</li>
                  <li>Control who has access to your health information, subject to legal requirements.</li>
                </Ul>

                <H4>4. Right to Quality Care</H4>
                <Ul>
                  <li>Receive care from qualified, verified, and licensed healthcare professionals.</li>
                  <li>Be treated with dignity, respect, and without discrimination.</li>
                  <li>Receive care consistent with accepted medical standards and practices.</li>
                </Ul>

                <H4>5. Right to Refuse Treatment</H4>
                <Ul>
                  <li>Refuse any recommended treatment or procedure.</li>
                  <li>Be informed of the likely consequences of refusing care.</li>
                  <li>Request a second opinion before proceeding with treatment.</li>
                </Ul>

                <H4>6. Right to Voice Concerns</H4>
                <Ul>
                  <li>Raise concerns or complaints about the care or service received without fear of reprisal.</li>
                  <li>Have complaints addressed through our Grievance Redressal process.</li>
                  <li>Receive a timely response to any concern raised.</li>
                </Ul>

                <H3>Your Responsibilities</H3>
                <Ul>
                  <li>Provide accurate and complete information about your health and history.</li>
                  <li>Ask questions if you do not understand your care, treatment, or instructions.</li>
                  <li>Follow the care plan agreed upon with your healthcare provider.</li>
                  <li>Treat healthcare providers and staff with courtesy and respect.</li>
                  <li>Inform us promptly of any changes to your condition, address, or contact details.</li>
                  <li>Make payments for services as per the agreed terms.</li>
                </Ul>

                <Highlight color="blue">
                  <strong>💬 Questions or Concerns?</strong> If you feel any of your rights as a patient have not
                  been honoured, please reach out to our Grievance Redressal team so we can address it promptly.
                </Highlight>

                <H3>Contact Us</H3>
                <ContactLegal email="care@doctor247.in" phone="+91 7676266247" />
              </div>
            )}

            {active === "grievance" && (
              <div>
                <H2>Grievance Redressal</H2>
                <LastUpdated date="January 15, 2026" />
                <P>
                  Doctor247 is committed to resolving patient and partner concerns fairly and promptly. This policy
                  explains how to raise a grievance and what you can expect from our resolution process.
                </P>

                <H3>1. What Counts as a Grievance</H3>
                <Ul>
                  <li>Dissatisfaction with the quality of care or service received.</li>
                  <li>Concerns about the conduct of a doctor, nurse, or partner hospital.</li>
                  <li>Billing, payment, or refund disputes.</li>
                  <li>Delays, missed appointments, or communication issues.</li>
                  <li>Concerns regarding privacy or handling of personal/health information.</li>
                </Ul>

                <H3>2. How to Raise a Grievance</H3>
                <Ol>
                  <li>Contact our support team via phone, email, or the in-app support option.</li>
                  <li>Share your booking ID or application ID along with details of your concern.</li>
                  <li>Our team will acknowledge receipt within 24 hours.</li>
                </Ol>

                <H3>3. Resolution Timeline</H3>
                <LegalTable
                  headers={["Grievance Type", "Acknowledgement", "Resolution Target"]}
                  rows={[
                    ["Service Quality / Conduct", "Within 24 hours", "Within 7 business days"],
                    ["Billing / Payment / Refund", "Within 24 hours", "Within 5 business days"],
                    ["Privacy / Data Concerns", "Within 24 hours", "Within 10 business days"],
                    ["Urgent Safety Concerns", "Immediate", "Escalated same day"],
                  ]}
                />

                <H3>4. Escalation</H3>
                <P>
                  If you are not satisfied with the resolution provided, you may escalate the matter to our
                  Grievance Officer for a further review.
                </P>

                <Highlight color="blue">
                  <strong>Grievance Officer:</strong> Available for escalations that remain unresolved after initial
                  review. Contact details are listed below.
                </Highlight>

                <H3>5. Our Commitment</H3>
                <Ul>
                  <li>Every grievance is treated confidentially and without bias.</li>
                  <li>Raising a grievance will never affect the quality of care or service you receive.</li>
                  <li>We use grievance data to continuously improve our services and provider standards.</li>
                </Ul>

                <H3>Contact Us</H3>
                <ContactLegal email="grievance@doctor247.in" phone="+91 7676266247" address="Bangalore, India" />
              </div>
            )}

            {active === "cookie" && (
              <div>
                <H2>Cookie Policy</H2>
                <LastUpdated date="January 15, 2026" />
                <P>
                  This Cookie Policy explains how Doctor247 uses cookies and similar tracking technologies on our
                  website and applications, and the choices available to you regarding these technologies.
                </P>

                <H3>1. What Are Cookies</H3>
                <P>
                  Cookies are small text files placed on your device when you visit a website. They help the website
                  remember your preferences, keep you signed in, and understand how you use our services.
                </P>

                <H3>2. Types of Cookies We Use</H3>
                <Ul>
                  <li>
                    <strong>Essential Cookies:</strong> Required for core functionality such as login sessions and
                    security  these cannot be disabled.
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings, such as language or location.
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how users interact with our platform so we
                    can improve it.
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Used to show you relevant offers and measure campaign
                    performance, where applicable.
                  </li>
                </Ul>

                <H3>3. How We Use Cookies</H3>
                <Ul>
                  <li>To keep you securely logged into your nurse, hospital, or patient account.</li>
                  <li>To remember your booking preferences and service area.</li>
                  <li>To analyze site traffic and improve website performance.</li>
                </Ul>

                <H3>4. Managing Cookies</H3>
                <P>
                  Most browsers allow you to control cookies through their settings. You can choose to block or
                  delete cookies, though this may affect the functionality of certain features, such as staying
                  logged in.
                </P>

                <Highlight color="green">
                  <strong>Tip:</strong> Disabling essential cookies may prevent you from logging into your nurse or
                  hospital profile, since these cookies are used to keep your session secure.
                </Highlight>

                <H3>5. Third-Party Cookies</H3>
                <P>
                  We may use trusted third-party services (such as analytics or map providers) that place their own
                  cookies. These third parties have their own privacy and cookie policies, which we encourage you to
                  review.
                </P>

                <H3>6. Changes to This Policy</H3>
                <P>
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with
                  a revised &quot;Last Updated&quot; date.
                </P>

                <H3>Contact Us</H3>
                <ContactLegal email="privacy@doctor247.in" phone="+91 7676266247" />
              </div>
            )}

            {active === "data-protection" && (
              <div>
                <H2>Data Protection</H2>
                <LastUpdated date="January 15, 2026" />
                <P>
                  Doctor247 handles sensitive personal and health data every day. This Data Protection policy
                  describes the technical and organizational measures we use to keep that data safe, in line with
                  the Digital Personal Data Protection Act (DPDPA) 2023 and applicable healthcare regulations in
                  India.
                </P>

                <H3>1. Data We Protect</H3>
                <Ul>
                  <li>Identity and contact information for patients, nurses, and hospital partners.</li>
                  <li>Health records, treatment history, and clinical documents.</li>
                  <li>Government ID, licensing, and credentialing documents.</li>
                  <li>Banking and payment details.</li>
                </Ul>

                <H3>2. Security Measures</H3>
                <Ul>
                  <li>Encrypted storage and transmission of sensitive documents and records.</li>
                  <li>Role-based access controls  staff only access the data required for their role.</li>
                  <li>Secure authentication for nurse, hospital, and admin accounts.</li>
                  <li>Regular monitoring and review of access to sensitive systems.</li>
                </Ul>

                <H3>3. Data Retention</H3>
                <P>
                  We retain personal and health data only for as long as necessary to provide our services, meet
                  legal and regulatory obligations, and resolve disputes. Data that is no longer required is securely
                  deleted or anonymized.
                </P>

                <H3>4. Data Minimization</H3>
                <Ul>
                  <li>We only collect data that is necessary for providing and improving our services.</li>
                  <li>Documents uploaded for verification are used solely for credentialing purposes.</li>
                  <li>We do not sell personal or health data to third parties.</li>
                </Ul>

                <H3>5. Cross-Border Data</H3>
                <P>
                  Where data is processed or stored using infrastructure located outside India (such as cloud
                  storage providers), we ensure appropriate safeguards are in place consistent with applicable data
                  protection laws.
                </P>

                <Highlight color="blue">
                  <strong>🔐 Your Data, Your Control:</strong> You can request access to, correction of, or deletion
                  of your personal data at any time by contacting our data protection team below.
                </Highlight>

                <H3>6. Breach Notification</H3>
                <P>
                  In the unlikely event of a data breach affecting your personal information, we will notify
                  affected users and relevant authorities in accordance with applicable law.
                </P>

                <H3>Contact Us</H3>
                <ContactLegal email="dataprotection@doctor247.in" phone="+91 7676266247" address="Bangalore, India" />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
