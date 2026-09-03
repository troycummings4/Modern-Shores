import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import CategoryStrip from "../components/CategoryStrip";
import ProductGrid from "../components/ProductGrid";
import SectionHeading from "../components/SectionHeading";
import Newsletter from "../components/Newsletter";
import { products } from "../data/products";
import { categories } from "../data/categories";

const trending = products.filter((p) => p.badges?.includes("Trending"));
const fresh = products.filter((p) => p.badges?.includes("New"));
const staffPicks = products.filter((p) => p.badges?.includes("Staff Pick"));

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Browse" title="Shop by category" />
        <div className="mt-8">
          <CategoryStrip />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hot right now"
          title="Trending this week"
          subtitle="The products everyone's tagging their friends in."
          cta={{ label: "See all deals", to: "/category/just-for-fun" }}
        />
        <div className="mt-8">
          <ProductGrid products={trending} />
        </div>
      </section>

      <section className="bg-shore-sand/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Just dropped"
            title="New arrivals"
            subtitle="Fresh finds, added this week."
          />
          <div className="mt-8">
            <ProductGrid products={fresh} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Editor's choice"
          title="Staff picks"
          subtitle="The finds our team can't stop talking about."
        />
        <div className="mt-8">
          <ProductGrid products={staffPicks} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {categories.slice(0, 3).map((c) => (
            <Link
              key={c.slug}
              to={`/category/${c.slug}`}
              className="group flex flex-col justify-between rounded-2xl bg-shore-gradient p-6 text-shore-shell shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="text-3xl">{c.emoji}</span>
              <div className="mt-8">
                <p className="font-display text-xl font-semibold">{c.name}</p>
                <p className="mt-1 text-sm text-shore-shell/70">{c.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-shore-aqua">
                  Shop now
                  <span className="transition group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
