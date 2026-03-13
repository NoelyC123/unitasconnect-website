import AnimateIn from "./AnimateIn";

const credentials = [
  "IEMA Qualified",
  "Health & Safety Certified",
  "CDM Coordinator",
  "Utilities & Infrastructure",
  "Grant Writing Specialist",
  "Project Management",
  "Strategic Planning",
  "Bid Writing",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <AnimateIn>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#c9923a" }}>
                About
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8" style={{ color: "#1a1f2e" }}>
                Real expertise.
                <br />
                No waffle.
              </h2>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: "#4a5568" }}>
                <p>
                  With a background spanning utilities infrastructure, Health &amp;
                  Safety, and community development, I founded UnitasConnect to
                  give smaller organisations access to the same quality of
                  expertise that large companies take for granted.
                </p>
                <p>
                  I hold IEMA qualifications, extensive Health &amp; Safety
                  credentials, and CDM coordination experience. I&apos;ve managed
                  complex multi-site projects, written successful funding bids
                  worth hundreds of thousands of pounds, and helped organisations
                  navigate everything from compliance to strategic transformation.
                </p>
                <p>
                  What I&apos;ve seen, again and again, is that charities, VCSEs,
                  and community organisations are doing critical work — but they
                  don&apos;t have access to expert support when they need it most.
                </p>
                <p style={{ color: "#1a1f2e", fontWeight: 500 }}>
                  That&apos;s why I built UnitasConnect. Expert knowledge, real
                  experience, straight-talking approach — available to the
                  organisations that need it most.
                </p>
              </div>
            </AnimateIn>

            {/* Credentials */}
            <AnimateIn delay={200} className="mt-10">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#c9923a" }}>
                Qualifications & Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {credentials.map((cred) => (
                  <span
                    key={cred}
                    className="text-sm font-medium px-4 py-1.5 rounded-full"
                    style={{
                      backgroundColor: "#f8f4ee",
                      color: "#1a1f2e",
                      border: "1px solid #ece6dd",
                    }}
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Photo / visual block */}
          <AnimateIn delay={150} className="flex justify-center">
            <div className="relative">
              {/* Photo placeholder — replace src with your actual photo */}
              <div
                className="w-80 h-96 rounded-2xl flex items-center justify-center overflow-hidden"
                style={{
                  backgroundColor: "#1a1f2e",
                  border: "4px solid #ece6dd",
                }}
              >
                {/* Replace this div with <img src="/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover" /> */}
                <div className="text-center px-8">
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(201,146,58,0.2)" }}
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c9923a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <p className="text-sm" style={{ color: "#6b7f95" }}>
                    Add your photo here
                  </p>
                  <p className="text-xs mt-1" style={{ color: "#4a5568" }}>
                    Replace this block in
                    <br />
                    AboutSection.tsx
                  </p>
                </div>
              </div>

              {/* Decorative badge */}
              <div
                className="absolute -bottom-4 -right-4 px-5 py-3 rounded-xl shadow-lg"
                style={{ backgroundColor: "#c9923a" }}
              >
                <p className="text-xs font-bold" style={{ color: "#1a1f2e" }}>
                  IEMA Qualified
                </p>
                <p className="text-xs" style={{ color: "#1a1f2e", opacity: 0.8 }}>
                  Health & Safety Expert
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
