import AnimateIn from "./AnimateIn";

const pricingGroups = [
  {
    label: "Funding",
    items: [
      { service: "Discovery & Funding Audit", price: "£150 – £250", note: "We map out what you could realistically apply for" },
      { service: "Grant Research (funder longlist)", price: "£200 – £400", note: "Targeted list of relevant funders for your organisation" },
      { service: "Small Grant Application (up to £10k)", price: "£350 – £600", note: "" },
      { service: "Medium Grant Application (£10k – £50k)", price: "£600 – £1,200", note: "" },
      { service: "Large Grant Application (£50k+)", price: "£1,200 – £2,500", note: "" },
      { service: "Bid Writing & Tender Support", price: "£800 – £2,000", note: "Public sector contracts, framework bids, procurement" },
    ],
  },
  {
    label: "Strategy & Development",
    items: [
      { service: "Strategic Plan", price: "£1,500 – £3,000", note: "Full organisational strategy with roadmap" },
      { service: "Governance Review & Development", price: "£800 – £1,800", note: "Board structures, constitutions, trustee development" },
      { service: "Leadership Mentoring", price: "£75 – £150 / hr", note: "One-to-one sessions for founders, CEOs, managers" },
      { service: "Training Workshop (half day)", price: "£400 – £800", note: "Grant writing, bid writing, governance, strategy" },
    ],
  },
  {
    label: "Ongoing Support",
    items: [
      { service: "Monthly Retainer", price: "£500 – £1,500 / mo", note: "Regular, flexible support — funding, strategy, or both" },
      { service: "Project Management", price: "Day rate on request", note: "Programme delivery, stakeholder management, reporting" },
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-24 px-6"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">
        <AnimateIn className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#c9923a" }}>
            Transparent Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5" style={{ color: "#1a1f2e" }}>
            No surprises. No hidden costs.
          </h2>
          <p className="text-lg max-w-2xl" style={{ color: "#4a5568" }}>
            Every project is different, so all figures below are guides rather
            than fixed prices. We agree a clear scope and fee upfront — so you
            always know exactly what you&apos;re getting and what it costs.
          </p>
        </AnimateIn>

        <div className="flex flex-col gap-10">
          {pricingGroups.map((group, gi) => (
            <AnimateIn key={group.label} delay={gi * 100}>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#c9923a" }}>
                  {group.label}
                </p>
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ border: "1px solid #ece6dd" }}
                >
                  {group.items.map((item, ii) => (
                    <div
                      key={item.service}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-4"
                      style={{
                        borderBottom: ii < group.items.length - 1 ? "1px solid #f0ebe3" : "none",
                        backgroundColor: ii % 2 === 0 ? "#ffffff" : "#fdfaf6",
                      }}
                    >
                      <div className="flex-1">
                        <p className="text-base font-medium" style={{ color: "#1a1f2e" }}>
                          {item.service}
                        </p>
                        {item.note && (
                          <p className="text-sm mt-0.5" style={{ color: "#9aa8b4" }}>
                            {item.note}
                          </p>
                        )}
                      </div>
                      <p
                        className="text-base font-semibold shrink-0"
                        style={{ color: "#c9923a" }}
                      >
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Note + CTA */}
        <AnimateIn className="mt-12">
          <div
            className="rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between"
            style={{ backgroundColor: "#f8f4ee", border: "1px solid #ece6dd" }}
          >
            <div className="flex-1">
              <p className="text-base font-semibold mb-1" style={{ color: "#1a1f2e" }}>
                Not sure what you need?
              </p>
              <p className="text-sm" style={{ color: "#4a5568" }}>
                Start with a free discovery call. We&apos;ll talk through your
                situation and give you an honest view of what would help — before
                any commitment.
              </p>
            </div>
            <a
              href="https://calendly.com/unitasconnect/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded transition-all hover:opacity-90"
              style={{ backgroundColor: "#1a1f2e", color: "#f8f4ee" }}
            >
              Book a Free Call
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
