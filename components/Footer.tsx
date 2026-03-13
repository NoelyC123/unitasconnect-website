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
          <div className="flex flex-col gap-4">
            <span className="font-bold text-xl tracking-tight" style={{ color: "#f8f4ee" }}>
              Unitas<span style={{ color: "#c9923a" }}>Connect</span>
            </span>
            <p className="text-sm leading-relaxed" style={{ color: "#6b7f95" }}>
              Funding. Strategy. Growth.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#6b7f95" }}>
              Expert consultancy for charities, VCSEs, SMEs and community
              organisations across the UK.
            </p>
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
              href="mailto:hello@unitasconnect.co.uk"
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: "#a8b4c4" }}
            >
              hello@unitasconnect.co.uk
            </a>
            <a
              href="#contact"
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "#c9923a" }}
            >
              Book a Free Discovery Call →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
          style={{ borderTop: "1px solid #252c3f", color: "#4a5a6a" }}
        >
          <p>© {new Date().getFullYear()} UnitasConnect. All rights reserved.</p>
          <p>Registered in England & Wales</p>
        </div>
      </div>
    </footer>
  );
}
