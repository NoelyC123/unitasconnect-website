import AnimateIn from "./AnimateIn";

const bullets = [
  "We write the funding bids — you keep the mission.",
  "We build the strategy — you lead with confidence.",
  "We manage the complexity — you get the results.",
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
          {/* Label */}
          <AnimateIn delay={0}>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: "#c9923a" }}
            >
              UnitasConnect — Consultancy
            </p>
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
              We help charities, VCSEs, SMEs, and community organisations across
              the UK access funding, build strategy, and deliver real results —
              without the jargon.
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
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
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
                Book a Free Discovery Call
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded transition-all hover:opacity-80"
                style={{
                  border: "1px solid #252c3f",
                  color: "#a8b4c4",
                }}
              >
                See How We Help →
              </a>
            </div>
          </AnimateIn>
        </div>

        {/* Decorative element */}
        <div
          className="absolute bottom-0 right-0 w-1/2 h-px opacity-20 hidden lg:block"
          style={{ background: "linear-gradient(to right, transparent, #c9923a)" }}
        />
      </div>
    </section>
  );
}
