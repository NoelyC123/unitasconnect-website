import LogoMark from "./LogoMark";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a1f2e" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <LogoMark size={32} variant="light" />
              <span>
                <span
                  className="font-bold text-lg tracking-tight"
                  style={{ color: "#f8f4ee", fontFamily: "Georgia, serif" }}
                >
                  Unitas
                </span>
                <span
                  className="font-normal text-lg tracking-tight"
                  style={{ color: "#c9923a", fontFamily: "Georgia, serif" }}
                >
                  Connect
                </span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#6b7f95" }}>
              Funding · Strategy · Growth
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#6b7f95" }}>
              Practical, hands-on consultancy for VCSEs, SMEs, CICs and
              community organisations across the UK.
            </p>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/noel-collins-1231002b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{ color: "#a8b4c4" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#c9923a" }}>
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ color: "#a8b4c4" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#c9923a" }}>
              Get In Touch
            </p>
            <a
              href="mailto:unitasconnect@hotmail.com"
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: "#a8b4c4" }}
            >
              unitasconnect@hotmail.com
            </a>
            <a
              href="#contact"
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "#c9923a" }}
            >
              Request a Funding Review →
            </a>
            <p className="text-xs mt-2" style={{ color: "#4a5a6a" }}>
              Based in Cumbria
              <br />
              Serving organisations across the UK
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
          style={{ borderTop: "1px solid #252c3f", color: "#4a5a6a" }}
        >
          <p>© {new Date().getFullYear()} UnitasConnect. All rights reserved.</p>
          <p>Sole trader registered with HMRC · England</p>
        </div>
      </div>
    </footer>
  );
}
