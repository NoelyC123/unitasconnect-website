import AnimateIn from "./AnimateIn";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "Book a free 30-minute call. Tell us about your organisation, your goals, and your challenges. No pressure, no sales pitch — just a real conversation about how we can help.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We Do The Work",
    description:
      "We take on the research, writing, planning, or compliance work — done properly, on time, and with your goals at the centre. You stay informed without being buried in the detail.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "You Get Results",
    description:
      "Funding secured. Strategies built. Projects delivered. You focus on your mission while we handle the complexity — and we celebrate the wins together.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-24 px-6"
      style={{ backgroundColor: "#1a1f2e" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimateIn className="mb-16 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#c9923a" }}>
            The Process
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5" style={{ color: "#f8f4ee" }}>
            Simple by design.
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#a8b4c4" }}>
            We know you&apos;re time-poor. So we&apos;ve made working with us as
            straightforward as possible.
          </p>
        </AnimateIn>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line — desktop only */}
          <div
            className="absolute top-16 left-1/6 right-1/6 h-px hidden md:block"
            style={{ backgroundColor: "rgba(201,146,58,0.2)" }}
          />

          {steps.map((step, i) => (
            <AnimateIn key={step.number} delay={i * 120}>
              <div className="flex flex-col items-center text-center gap-6 relative">
                {/* Number + icon */}
                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(201,146,58,0.12)",
                      border: "1px solid rgba(201,146,58,0.3)",
                      color: "#c9923a",
                    }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="absolute -top-2 -right-2 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#c9923a", color: "#1a1f2e" }}
                  >
                    {i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold" style={{ color: "#f8f4ee" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#a8b4c4" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* CTA */}
        <AnimateIn className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold rounded transition-all hover:opacity-90"
            style={{ backgroundColor: "#c9923a", color: "#1a1f2e" }}
          >
            Book Your Free Discovery Call
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
