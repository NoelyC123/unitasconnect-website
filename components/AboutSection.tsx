import AnimateIn from "./AnimateIn";

const credentials = [
  "IEMA Qualified",
  "Health & Safety (NEBOSH/IOSH)",
  "Funding Acquisition",
  "Procurement & Bid Writing",
  "Strategic Development",
  "Project Management",
  "Governance Support",
  "Capacity Building",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
                  I work with VCSEs, SMEs, CICs, and community organisations
                  across the UK to help them access the funding, contracts, and
                  strategic support they need to grow — and to build the
                  organisational foundations that make growth sustainable.
                </p>
                <p>
                  My background spans funding acquisition, strategic development,
                  project management, procurement, and organisational support. I
                  hold IEMA qualifications and have a strong grounding in Health
                  &amp; Safety, which means I bring a level of compliance
                  awareness and operational rigour that goes beyond typical
                  consultancy support — particularly useful for organisations
                  scaling up, taking on contracts, or entering regulated
                  environments for the first time.
                </p>
                <p>
                  I&apos;ve worked across the voluntary, community, and small
                  business sectors, and I understand the real pressures these
                  organisations face — limited capacity, complex funding
                  landscapes, and the constant challenge of balancing day-to-day
                  operations with longer-term ambitions.
                </p>
                <p>
                  What I offer is practical, tailored support. Not generic
                  advice, but hands-on work alongside leaders and teams to secure
                  funding, develop strategy, navigate procurement, and strengthen
                  governance.
                </p>
                <p style={{ color: "#1a1f2e", fontWeight: 500 }}>
                  I&apos;m particularly passionate about helping smaller
                  organisations compete for opportunities that can feel out of
                  reach — whether that&apos;s a major grant, a public sector
                  contract, or a step-change in how they operate.
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

            {/* CTA quote */}
            <AnimateIn delay={280} className="mt-10">
              <div
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: "#f8f4ee",
                  borderLeft: "3px solid #c9923a",
                }}
              >
                <p className="text-base italic leading-relaxed" style={{ color: "#4a5568" }}>
                  &ldquo;If your organisation is ready to grow, or simply needs
                  experienced hands-on support to get there — let&apos;s talk.
                  Discovery calls are always free.&rdquo;
                </p>
                <p className="text-sm font-semibold mt-3" style={{ color: "#1a1f2e" }}>
                  Noel Collins, Founder — UnitasConnect
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#9aa8b4" }}>
                  Based in Cumbria · Serving organisations across the UK
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* Photo / visual block — add your image to /public/ and use <img src="/yourphoto.jpg" alt="Noel Collins, UnitasConnect" className="w-full h-full object-cover" /> */}
          <AnimateIn delay={150} className="flex justify-center lg:sticky lg:top-24">
            <div className="relative">
              <div
                className="w-80 h-96 rounded-2xl flex items-center justify-center overflow-hidden"
                style={{
                  backgroundColor: "#1a1f2e",
                  border: "4px solid #ece6dd",
                }}
              >
                <div className="text-center px-8">
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(201,146,58,0.15)" }}
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c9923a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <p className="text-base font-semibold mb-1" style={{ color: "#f8f4ee" }}>
                    Noel Collins
                  </p>
                  <p className="text-sm" style={{ color: "#6b7f95" }}>
                    Founder, UnitasConnect
                  </p>
                </div>
              </div>

              {/* Credential badge */}
              <div
                className="absolute -bottom-4 -right-4 px-5 py-3 rounded-xl shadow-lg"
                style={{ backgroundColor: "#c9923a" }}
              >
                <p className="text-xs font-bold" style={{ color: "#1a1f2e" }}>
                  IEMA Qualified
                </p>
                <p className="text-xs" style={{ color: "rgba(26,31,46,0.75)" }}>
                  H&S · CDM · Procurement
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
