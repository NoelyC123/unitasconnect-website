"use client";

import { useState, useEffect } from "react";
import LogoMark from "./LogoMark";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "#1a1f2e",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.35)" : "none",
        borderBottom: scrolled ? "1px solid #252c3f" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={close} className="flex items-center gap-3 group">
          <LogoMark size={34} variant="light" />
          <span className="transition-opacity group-hover:opacity-80">
            <span
              className="font-bold text-lg tracking-tight"
              style={{
                color: "#f8f4ee",
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              Unitas
            </span>
            <span
              className="font-normal text-lg tracking-tight"
              style={{
                color: "#c9923a",
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              Connect
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "#a8b4c4" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com/unitasconnect/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-5 py-2.5 rounded transition-all hover:opacity-90 hover:shadow-md"
            style={{
              backgroundColor: "#c9923a",
              color: "#1a1f2e",
            }}
          >
            Book a Free Call
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "#f8f4ee",
              transform: open ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "#f8f4ee",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "#f8f4ee",
              transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ backgroundColor: "#1a1f2e", borderTop: "1px solid #252c3f" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="text-base font-medium py-1 transition-opacity hover:opacity-70"
              style={{ color: "#f8f4ee" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com/unitasconnect/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="text-base font-semibold px-5 py-3 rounded text-center transition-all hover:opacity-90"
            style={{
              backgroundColor: "#c9923a",
              color: "#1a1f2e",
            }}
          >
            Book a Free Call
          </a>
        </div>
      )}
    </header>
  );
}
