"use client";

import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// SETUP: Create a second Formspree form at formspree.io for newsletter signups
// (separate from your contact form), get the ID, and replace below.
// Or connect Mailchimp later for full list management.
// ─────────────────────────────────────────────────────────────────────────────
const BULLETIN_ENDPOINT = "https://formspree.io/f/YOUR_BULLETIN_FORM_ID";

const perks = [
  "Top funding opportunities open right now — relevant to your sector and area",
  "New grants, trusts, and lottery programmes as they launch",
  "Bid and tender alerts for VCSEs and SMEs across the UK",
  "Practical tips on making your applications stronger",
];

export default function BulletinSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(BULLETIN_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({ email, _subject: "New Funding Bulletin Signup" }),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "#c9923a" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(26,31,46,0.6)" }}>
              Free Weekly Resource
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-5 leading-tight"
              style={{ color: "#1a1f2e" }}
            >
              Get this week&apos;s top
              <br />
              funding opportunities.
              <br />
              Free. Every Monday.
            </h2>
            <p className="text-base mb-8" style={{ color: "rgba(26,31,46,0.75)" }}>
              We scan hundreds of sources every week so you don&apos;t have to.
              Relevant grants, contracts, and funding news — straight to your inbox.
            </p>
            <ul className="flex flex-col gap-3">
              {perks.map((perk, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(26,31,46,0.15)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#1a1f2e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm" style={{ color: "rgba(26,31,46,0.8)" }}>
                    {perk}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div>
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "rgba(26,31,46,0.12)" }}
            >
              {status === "success" ? (
                <div className="text-center py-8 flex flex-col items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(26,31,46,0.15)" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1f2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold mb-1" style={{ color: "#1a1f2e" }}>
                      You&apos;re on the list.
                    </p>
                    <p className="text-sm" style={{ color: "rgba(26,31,46,0.7)" }}>
                      First bulletin lands this Monday morning.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <p className="text-lg font-bold mb-1" style={{ color: "#1a1f2e" }}>
                      Join organisations already signed up
                    </p>
                    <p className="text-sm" style={{ color: "rgba(26,31,46,0.65)" }}>
                      No spam. Unsubscribe any time.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@organisation.co.uk"
                      className="w-full px-4 py-3.5 rounded-lg text-base outline-none"
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#1a1f2e",
                        border: "none",
                        fontFamily: "inherit",
                      }}
                    />
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-3.5 text-base font-bold rounded-lg transition-all hover:opacity-90 disabled:opacity-60"
                      style={{ backgroundColor: "#1a1f2e", color: "#f8f4ee" }}
                    >
                      {status === "sending" ? "Signing you up..." : "Send Me the Bulletin →"}
                    </button>
                  </div>

                  {status === "error" && (
                    <p className="text-sm" style={{ color: "#7a1a1a" }}>
                      Something went wrong — email us directly at unitasconnect@hotmail.com
                    </p>
                  )}

                  <p className="text-xs text-center" style={{ color: "rgba(26,31,46,0.5)" }}>
                    Weekly. Free. Relevant to UK VCSEs, SMEs &amp; community organisations.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
