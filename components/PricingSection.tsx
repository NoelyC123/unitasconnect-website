import AnimateIn from "./AnimateIn";

const CALENDLY_URL = "https://calendly.com/unitasconnect/30min";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-24 px-6"
      style={{ backgroundColor: "#f7f4ef" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <AnimateIn>
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#c9923a" }}
          >
            Transparent Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "#1a1f2e" }}>
            Every project is different.
          </h2>
          <p className="text-lg mb-5" style={{ color: "#1a1f2e" }}>
            We scope each piece of work individually and agree a clear fee upfront
            — no surprises, no hidden costs.
          </p>
          <p className="text-lg mb-10" style={{ color: "#4a5568" }}>
            Start with a free discovery call. We&apos;ll talk through your
            situation, give you an honest view of what support would look like,
            and tell you exactly what it would cost — before any commitment.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold rounded-lg transition-all hover:opacity-90 shadow-md"
            style={{ backgroundColor: "#1a1f2e", color: "#f7f4ef" }}
          >
            Book a Free Call
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
