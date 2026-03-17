import AnimateIn from "./AnimateIn";

// ─────────────────────────────────────────────────────────────
// REPLACE these placeholders with real client quotes as you
// collect them. Keep name, role, org type, and location.
// ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:
      "We'd been trying to secure funding for our community project for over a year with no success. UnitasConnect helped us reframe our application completely — we secured £28,000 from the National Lottery within six weeks. The difference was remarkable.",
    name: "Robert Pritchard",
    role: "Chair of Trustees",
    org: "Mountfield Community Foundation",
  },
  {
    quote:
      "Noel helped us put together our first ever public sector tender bid. It felt completely out of reach before — the language, the compliance requirements, the structure. We won the contract, and it's genuinely changed what our organisation can do.",
    name: "Sinead Toner",
    role: "Chief Executive",
    org: "Cookstown Community Centre",
  },
  {
    quote:
      "The strategic planning support was grounded and practical. We came out with a three-year plan we actually believe in and use every week — not a glossy document that sits on a shelf.",
    name: "Brendan Toner",
    role: "Director",
    org: "Share Uganda Charity",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "#1a1f2e" }}
    >
      <div className="max-w-6xl mx-auto">
        <AnimateIn className="mb-16 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#c9923a" }}>
            Client Stories
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5" style={{ color: "#f8f4ee" }}>
            Results that speak for themselves.
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#a8b4c4" }}>
            From first-time grant applications to complex procurement bids —
            here&apos;s what working with UnitasConnect looks like in practice.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 100}>
              <div
                className="h-full flex flex-col gap-6 p-8 rounded-xl"
                style={{
                  backgroundColor: "#252c3f",
                  border: "1px solid #2d3a50",
                }}
              >
                {/* Quote mark */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M9.333 20c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-6.627 5.373-12 12-12v4c-2.21 0-4 1.79-4 4zm14.667 0c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-6.627 5.373-12 12-12v4c-2.21 0-4 1.79-4 4z"
                    fill="#c9923a"
                    opacity="0.6"
                  />
                </svg>

                {/* Quote */}
                <p
                  className="text-base leading-relaxed flex-1 italic"
                  style={{ color: "#d0dae6" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-3 pt-2" style={{ borderTop: "1px solid #2d3a50" }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    style={{ backgroundColor: "rgba(201,146,58,0.15)", color: "#c9923a" }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#f8f4ee" }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: "#6b7f95" }}>
                      {t.role} · {t.org}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
