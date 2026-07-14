"use client";

export function NurseNewsletter() {
  return (
    <section className="bg-white py-10 sm:py-12 border-t border-hgrey-border">
      <div className="mx-auto max-w-[560px] px-5 text-center">
        <h3 className="text-[1.2rem] sm:text-[1.4rem] font-extrabold text-htext mb-1">📧 Get Health Tips &amp; Offers</h3>
        <p className="text-htext-muted text-[0.9rem] mb-4">
          Subscribe to our newsletter for care guides, discounts, and updates.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-2.5"
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 border-[1.5px] border-hgrey-border rounded-full text-[0.95rem] bg-hgrey focus:outline-none focus:border-hblue focus:bg-white transition-colors text-htext placeholder:text-htext-muted"
          />
          <button
            type="submit"
            className="bg-hblue text-white font-semibold px-7 py-3 rounded-full hover:bg-hblue-dark transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
