import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { StickyFooter } from "../_home/StickyFooter";
import { FloatingWidget } from "../_home/FloatingWidget";
import { SectionTitle } from "../_home/SectionTitle";

const POSTS = [
  {
    tag: "Home Nursing",
    title: "How to Choose the Right Home Nurse for Your Parents",
    desc: "Key factors to consider — qualifications, experience, reviews, and questions to ask before hiring.",
    date: "12 Jan 2026",
  },
  {
    tag: "Elderly Care",
    title: "10 Tips for Caring for Elderly Parents at Home",
    desc: "Practical advice to support your parents and reduce caregiver stress.",
    date: "08 Jan 2026",
  },
  {
    tag: "Post-Surgery",
    title: "Post-Surgery Recovery at Home: What to Expect",
    desc: "Week-by-week guidance for wound care, mobility, diet, and rehabilitation.",
    date: "02 Jan 2026",
  },
  {
    tag: "Physiotherapy",
    title: "Knee Replacement Rehab: Your 12-Week Plan",
    desc: "Milestones, exercises, and physiotherapy schedule after knee replacement surgery.",
    date: "28 Dec 2025",
  },
  {
    tag: "Home Doctor",
    title: "When Should You Call a Doctor to Your Home?",
    desc: "Signs that a home visit is needed vs. when to visit a hospital or emergency room.",
    date: "20 Dec 2025",
  },
  {
    tag: "Lab Tests",
    title: "Which Blood Tests Should You Do Annually?",
    desc: "A simple checklist for tracking your health year over year.",
    date: "15 Dec 2025",
  },
];

export default function BlogsPage() {
  return (
    <div className="bg-white text-htext">
      <section className="bg-gradient-to-br from-hblue-light to-[#dbeafe] py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <span className="inline-block text-hgreen font-semibold text-[0.8rem] uppercase tracking-wide mb-1.5">
            Resources
          </span>
          <h1 className="text-[1.9rem] sm:text-[2.6rem] font-extrabold text-htext tracking-tight mb-3">
            Health &amp; Care <span className="text-hblue">Blog</span>
          </h1>
          <p className="text-htext-muted text-[1rem] sm:text-[1.1rem] max-w-[640px] mx-auto">
            Practical guides, recovery tips, and health advice from our team of doctors, nurses, and
            physiotherapists.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-15 bg-white">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {POSTS.map((post) => (
              <Link
                key={post.title}
                href="#"
                className="bg-white border border-hgrey-border rounded-2xl p-5 sm:p-6 transition-all hover:-translate-y-1 hover:[box-shadow:0_12px_40px_rgba(15,76,129,0.14)] flex flex-col"
              >
                <span className="inline-block bg-hblue-light text-hblue font-semibold text-[0.7rem] px-3 py-1 rounded-full mb-3 self-start">
                  {post.tag}
                </span>
                <h4 className="font-bold text-[1rem] text-htext mb-2 leading-snug">{post.title}</h4>
                <p className="text-[0.85rem] text-htext-muted mb-3 flex-grow">{post.desc}</p>
                <div className="flex items-center justify-between text-[0.75rem] text-htext-muted pt-3 border-t border-hgrey-border">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-hblue">
                    Read More <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FloatingWidget />
      <StickyFooter />
    </div>
  );
}