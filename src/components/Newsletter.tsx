import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Wire this up to your email provider (Mailchimp, Klaviyo, ConvertKit, etc.)
    setSubmitted(true);
  }

  return (
    <section className="bg-shore-navy">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-shore-aqua">
          Stay in the loop
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-shore-shell sm:text-4xl">
          Get first dibs on new drops &amp; flash sales
        </h2>
        <p className="mx-auto mt-3 max-w-md text-shore-shell/60">
          One email a week. No spam, just the coolest stuff we found.
        </p>

        {submitted ? (
          <p className="mt-8 font-semibold text-shore-aqua">
            You're in! Keep an eye on your inbox. 🌊
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-shore-aqua focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-shore-coral px-6 py-3 text-sm font-semibold text-white transition hover:bg-shore-coral/90"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
