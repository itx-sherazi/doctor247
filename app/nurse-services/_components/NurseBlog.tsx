import { ArrowRight } from "lucide-react";

const POSTS = [
  {
    tag: "Guide",
    title: "How to Choose the Right Home Nurse",
    desc: "Key factors to consider when hiring a nurse for your loved one.",
  },
  {
    tag: "Elderly Care",
    title: "Tips for Caring for Dementia Patients at Home",
    desc: "Practical advice to support patients and reduce caregiver stress.",
  },
  {
    tag: "Post-Surgery",
    title: "Recovery at Home: What to Expect",
    desc: "Guidance for post-surgical care, wound management, and rehabilitation.",
  },
];

export function NurseBlog() {
  return (
    <section id="blog" className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-8">
          <span className="inline-block text-hgreen font-semibold text-[0.8rem] uppercase tracking-wide mb-1.5">
            Resources
          </span>
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-extrabold text-htext tracking-tight">
            Health &amp; Care <span className="text-hblue">Blog</span>
          </h2>
          <p className="text-htext-muted max-w-[560px] mx-auto mt-2">Tips and guides for home nursing and elderly care.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {POSTS.map((post) => (
            <div
              key={post.title}
              className="bg-hgrey rounded-2xl p-5 sm:p-6 border border-hgrey-border transition-all hover:-translate-y-1 hover:[box-shadow:0_12px_40px_rgba(15,76,129,0.14)]"
            >
              <span className="inline-block bg-hblue-light text-hblue font-semibold text-[0.7rem] px-3 py-1 rounded-full mb-2">
                {post.tag}
              </span>
              <h4 className="font-bold text-[1rem] mb-1.5">{post.title}</h4>
              <p className="text-[0.85rem] text-htext-muted mb-3">{post.desc}</p>
              <a href="#" className="inline-flex items-center gap-1.5 font-semibold text-[0.85rem] text-hblue hover:text-hgreen transition-colors">
                Read More <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
