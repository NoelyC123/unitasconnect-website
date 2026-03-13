"use client";

import { useState } from "react";
import AnimateIn from "./AnimateIn";

// ──────────────────────────────────────────────────────────────────────────────
// FORMSPREE SETUP:
// 1. Go to https://formspree.io and create a free account
// 2. Create a new form and copy your Form ID (looks like: xrgvqnrp)
// 3. Replace YOUR_FORM_ID below with your actual ID
// ──────────────────────────────────────────────────────────────────────────────
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzwrdjy";

type Status = "idle" | "sending" | "success" | "error";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "8px",
  border: "1px solid #ece6dd",
  backgroundColor: "#ffffff",
  color: "#1a1f2e",
  fontSize: "15px",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "inherit",
};

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ backgroundColor: "#f8f4ee" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — copy */}
          <AnimateIn>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#c9923a" }}>
              Get In Touch
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: "#1a1f2e" }}>
              Let&apos;s talk about
              <br />
              your goals.
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#4a5568" }}>
              Whether you&apos;ve got a specific project in mind or you&apos;re
              just exploring your options — get in touch and we&apos;ll have an
              honest conversation about what&apos;s possible.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: "rgba(201,146,58,0.12)", color: "#c9923a" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#c9923a" }}>Email</p>
                  <a
                    href="mailto:UnitasConnect@hotmail.com"
                    className="text-base transition-opacity hover:opacity-70"
                    style={{ color: "#1a1f2e" }}
                  >
                    UnitasConnect@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: "rgba(201,146,58,0.12)", color: "#c9923a" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#c9923a" }}>Book a Call</p>
                  <a
                    href="https://calendly.com/unitasconnect/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base transition-opacity hover:opacity-70"
                    style={{ color: "#1a1f2e" }}
                  >
                    Book a free 30-minute discovery call
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: "rgba(201,146,58,0.12)", color: "#c9923a" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#c9923a" }}>Location</p>
                  <p className="text-base" style={{ color: "#1a1f2e" }}>
                    Serving organisations across the UK
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Right — form */}
          <AnimateIn delay={150}>
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#ffffff", border: "1px solid #ece6dd" }}
            >
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center gap-5 h-full min-h-64 py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(201,146,58,0.12)" }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9923a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: "#1a1f2e" }}>
                      Message sent!
                    </h3>
                    <p className="text-sm" style={{ color: "#4a5568" }}>
                      Thanks for getting in touch. We&apos;ll come back to you within one business day.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#c9923a" }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Jane Smith"
                        style={inputStyle}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#c9923a" }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="jane@yourorg.co.uk"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#c9923a" }}>
                      Organisation
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      placeholder="Your charity, CIC, or business name"
                      style={inputStyle}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#c9923a" }}>
                      How Can We Help? *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us a bit about your organisation and what you're looking for..."
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>

                  {/* Hidden Formspree fields */}
                  <input type="hidden" name="_subject" value="New enquiry from UnitasConnect website" />

                  {status === "error" && (
                    <p className="text-sm" style={{ color: "#e53e3e" }}>
                      Something went wrong. Please email us directly at hello@unitasconnect.co.uk
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 text-base font-semibold rounded transition-all hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: "#c9923a", color: "#1a1f2e" }}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-xs text-center" style={{ color: "#9aa8b4" }}>
                    We typically respond within one business day.
                  </p>
                </form>
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
