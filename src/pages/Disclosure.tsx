export default function Disclosure() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-semibold text-shore-navy sm:text-4xl">
        Affiliate Disclosure
      </h1>
      <p className="mt-2 text-sm text-shore-navy/50">Last updated September 2026</p>

      <div className="prose-shore mt-8 space-y-5 leading-relaxed text-shore-navy/75">
        <p>
          Modern Shores is a participant in various affiliate marketing
          programs, which means we may earn commissions on products
          purchased through our links to retailer sites. This is in
          accordance with the Federal Trade Commission's 16 CFR § 255,
          "Guides Concerning the Use of Endorsements and Testimonials in
          Advertising."
        </p>
        <p>
          When you click a "Shop Now" button or any outbound product link on
          this site, you'll be taken to a third-party retailer. If you make
          a purchase, Modern Shores may receive a small commission at{" "}
          <strong className="text-shore-navy">no additional cost to you</strong>.
          Prices, availability, and product details are set by the retailer
          and can change at any time — always confirm details on the
          retailer's site before purchasing.
        </p>
        <p>
          We only feature products we genuinely think are cool, useful, or
          worth a laugh. Our opinions and product selections are our own and
          are not influenced by whether a particular link earns us a
          commission.
        </p>
        <p>
          Modern Shores is not responsible for the content, policies,
          shipping, returns, or customer service of any third-party
          retailer linked from this site. Any transaction is solely between
          you and that retailer.
        </p>
        <p>
          Questions about this disclosure? Reach out anytime through our{" "}
          <a href="/contact" className="font-semibold text-shore-teal underline">
            contact page
          </a>
          .
        </p>
      </div>
    </div>
  );
}
