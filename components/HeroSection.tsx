import AnimateIn from "./AnimateIn";

const bullets = [
  "Access the funding your organisation needs to deliver its mission.",
  "Build the strategy and governance foundations that make growth sustainable.",
  "Win the contracts and navigate procurement with confidence.",
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-20"
      style={{ backgroundColor: "#1a1f2e" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-2xl">
          {/* Location badge */}
          <AnimateIn delay={0}>
            <div className="inline-flex items-center gap-2 mb-8">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c9923a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span
                className="text-xs font-medium tracking-widest uppercase"
                style={{ color: "#6b7f95" }}
              >
                Cumbria · Lancashire · North West · UK-wide
              </span>
            </div>
          </AnimateIn>

          {/* Headline */}
          <AnimateIn delay={100}>
            <h1
              className="text-5xl sm:text-6xl font-bold leading-tight mb-6"
              style={{ color: "#f8f4ee" }}
            >
              Funding.
              <br />
              Strategy.
              <br />
              <span style={{ color: "#c9923a" }}>Growth.</span>
            </h1>
          </AnimateIn>

          {/* Subheadline */}
          <AnimateIn delay={200}>
            <p
              className="text-lg sm:text-xl leading-relaxed mb-10"
              style={{ color: "#a8b4c4" }}
            >
              Practical, hands-on consultancy for VCSEs, SMEs, CICs and
              community organisations. We help you access the funding, contracts,
              and strategic support you need to grow — and build the foundations
              that make growth sustainable.
            </p>
          </AnimateIn>

          {/* Bullets */}
          <AnimateIn delay={300}>
            <ul className="flex flex-col gap-4 mb-12">
              {bullets.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(201,146,58,0.15)" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="#c9923a"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-base" style={{ color: "#d0dae6" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </AnimateIn>

          {/* CTA buttons */}
          <AnimateIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded transition-all hover:opacity-90 hover:shadow-lg"
                style={{
                  backgroundColor: "#c9923a",
                  color: "#1a1f2e",
                }}
              >
                Request a Funding Review
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded transition-all hover:opacity-80"
                style={{
                  border: "1px solid #2d3a4a",
                  color: "#a8b4c4",
                }}
              >
                See How We Help →
              </a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
