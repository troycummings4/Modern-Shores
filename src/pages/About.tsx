import { Link } from "react-router-dom";
import { productImage } from "../lib/affiliate";

export default function About() {
  return (
    <div>
      <section className="bg-shore-gradient">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center text-shore-shell sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-shore-aqua">
            Our story
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            We fell down the rabbit hole so you don't have to.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-shore-shell/75">
            Modern Shores started as a group chat full of "okay but I NEED
            this" links. Now it's a full-blown catalog of the internet's most
            covetable, most impractical, most delightful finds — vetted,
            curated, and delivered with a little coastal calm.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <img
            src={productImage("about-modern-shores", 700, 560)}
            alt="Modern Shores curation"
            className="rounded-2xl shadow-card"
          />
          <div>
            <h2 className="font-display text-2xl font-semibold text-shore-navy">
              What makes it a Modern Shores find?
            </h2>
            <ul className="mt-5 space-y-4 text-shore-navy/70">
              <li className="flex gap-3">
                <span className="mt-1 text-shore-teal">✓</span>
                <span>
                  <strong className="text-shore-navy">It has to be a little ridiculous.</strong>{" "}
                  If it doesn't make you laugh, gasp, or immediately text a
                  friend, it doesn't make the cut.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-shore-teal">✓</span>
                <span>
                  <strong className="text-shore-navy">It has to actually work.</strong>{" "}
                  We dig through reviews and ratings so you're not the beta
                  tester.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-shore-teal">✓</span>
                <span>
                  <strong className="text-shore-navy">It has to look good doing it.</strong>{" "}
                  Function first, but style always matters around here.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-shore-sand/60">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-shore-navy">
            How we make money
          </h2>
          <p className="mt-4 text-shore-navy/70">
            Modern Shores earns a small commission when you shop through
            links on our site — it's how we keep the lights on and the
            product hunting relentless. It never costs you a cent extra.
            Full details are in our{" "}
            <Link to="/disclosure" className="font-semibold text-shore-teal underline">
              affiliate disclosure
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
