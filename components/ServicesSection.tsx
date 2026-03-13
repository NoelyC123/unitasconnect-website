import AnimateIn from "./AnimateIn";

const services = [
  {
    title: "Grant Writing & Funding Applications",
    description:
      "We research the funding landscape — trusts, lottery, government, Innovate UK — identify the right opportunities, and write compelling applications that give you the best possible chance of success.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Bid Writing & Procurement",
    description:
      "From public sector tenders to commercial contract bids — we write the proposals so you can focus on delivery. We understand procurement from the inside and know what evaluators are looking for.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Strategic Planning & Organisational Development",
    description:
      "We build clear, actionable plans that give your organisation direction and purpose. Vision, mission, goals, and a realistic roadmap — with honest input, not a glossy document that sits on a shelf.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Health & Safety & Environmental Compliance",
    description:
      "IEMA qualified, with a strong grounding in Health & Safety. We help organisations meet their compliance obligations with confidence — particularly useful when scaling up, taking on contracts, or entering regulated environments for the first time.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Project Management & Programme Delivery",
    description:
      "We manage your projects from kickoff to delivery — on time, on budget, and with proper rigour. Whether it's a funded programme, a new initiative, or a complex multi-partner piece of work.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Leadership Mentoring & Capacity Building",
    description:
      "One-to-one mentoring, team development, and practical capacity building for leaders and managers. We work alongside your people — not just above them — to build the skills and confidence your organisation needs to grow.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Governance, Board Development & Organisational Health",
    description:
      "We help organisations build the governance structures and board capability they need to operate with confidence — from constitutions and compliance to trustee development, organisational health reviews, and preparing for growth.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5m0 0h4" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 px-6"
      style={{ backgroundColor: "#f8f4ee" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimateIn className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#c9923a" }}>
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5" style={{ color: "#1a1f2e" }}>
            How We Help You Grow
          </h2>
          <p className="text-lg max-w-xl" style={{ color: "#4a5568" }}>
            Whether you need funding, strategy, compliance, or someone to manage
            the work — we bring the expertise and do the heavy lifting alongside you.
          </p>
        </AnimateIn>

        {/* Cards grid — 7 cards: 3+3+1 centred on last row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimateIn
              key={service.title}
              delay={i * 70}
              className={
                // Centre the 7th card on large screens
                i === 6 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }
            >
              <div
                className="h-full p-8 rounded-xl flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #ece6dd",
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(201,146,58,0.1)",
                    color: "#c9923a",
                  }}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 flex-1">
                  <h3
                    className="text-lg font-semibold leading-snug"
                    style={{ color: "#1a1f2e" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>
                    {service.description}
                  </p>
                </div>

                {/* Gold accent line on hover */}
                <div
                  className="h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: "#c9923a" }}
                />
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateIn className="mt-14 text-center">
          <p className="text-base mb-6" style={{ color: "#4a5568" }}>
            Not sure which service fits your situation? Let&apos;s talk it through.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded transition-all hover:opacity-90"
            style={{ backgroundColor: "#1a1f2e", color: "#f8f4ee" }}
          >
            Book a Free Discovery Call
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
