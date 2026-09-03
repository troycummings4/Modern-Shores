import { FormEvent, useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Wire this up to a form backend (Formspree, Resend, a serverless function, etc.)
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-semibold text-shore-navy sm:text-4xl">
        Get in touch
      </h1>
      <p className="mt-3 text-shore-navy/60">
        Found something we should feature? Got a partnership idea? Just want
        to say hi? Send it over.
      </p>

      {sent ? (
        <div className="mt-8 rounded-2xl bg-shore-teal/10 p-6 text-shore-teal">
          Thanks for reaching out — we'll get back to you soon. 🌊
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-shore-navy">
              Name
            </label>
            <input
              required
              type="text"
              className="w-full rounded-xl border border-shore-navy/10 bg-white px-4 py-3 text-sm focus:border-shore-teal focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-shore-navy">
              Email
            </label>
            <input
              required
              type="email"
              className="w-full rounded-xl border border-shore-navy/10 bg-white px-4 py-3 text-sm focus:border-shore-teal focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-shore-navy">
              Message
            </label>
            <textarea
              required
              rows={5}
              className="w-full rounded-xl border border-shore-navy/10 bg-white px-4 py-3 text-sm focus:border-shore-teal focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-shore-navy px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-shore-teal"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
