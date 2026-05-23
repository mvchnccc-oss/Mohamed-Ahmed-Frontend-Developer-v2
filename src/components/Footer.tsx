"use client";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year] = useState(new Date().getFullYear());
  const [hovered, setHovered] = useState<string | null>(null);

  const links = [
    { label: "Home",     href: "#home" },
    { label: "About",    href: "#about" },
    { label: "Skills",   href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact",  href: "#contact" },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/mvchnccc-oss",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.484 0-.236-.009-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohamed-ahmed-423364368",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:mvchnccc@gmail.com",
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <footer style={{
      background: "#020209",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      padding: "3rem 2rem 2rem",
      color: "#e2e8f0",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @keyframes footer-glow { 0%,100%{opacity:.3} 50%{opacity:.6} }
      `}</style>

      {/* Subtle top glow */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: 600, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)",
        animation: "footer-glow 4s ease-in-out infinite",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Top row */}
        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "space-between",
          alignItems: "flex-start", gap: "2rem", marginBottom: "2.5rem",
        }}>

          {/* Brand */}
          <div style={{ flex: "1 1 260px" }}>
            <div style={{
              fontSize: "1.5rem", fontWeight: 900,
              background: "linear-gradient(135deg, #818cf8, #38bdf8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "-0.04em",
              marginBottom: "0.75rem",
            }}>
              Mohamed Ahmed
            </div>
            <p style={{
              color: "#475569", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: 280,
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              Frontend Engineer crafting high-performance web experiences with Next.js, React & TypeScript.
            </p>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              marginTop: "1rem", fontSize: "0.78rem", color: "#334155",
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px #4ade80", display: "inline-block" }} />
              Available for opportunities
            </div>
          </div>

          {/* Nav links */}
          <div style={{ flex: "1 1 160px" }}>
            <div style={{
              fontSize: "0.72rem", fontWeight: 700, color: "#475569",
              textTransform: "uppercase", letterSpacing: "0.1em",
              fontFamily: "'Space Grotesk', sans-serif", marginBottom: "1rem",
            }}>
              Navigation
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    color: hovered === label ? "#c7d2fe" : "#475569",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 500,
                    transition: "color 0.2s",
                    display: "flex", alignItems: "center", gap: "0.4rem",
                  }}
                  onMouseEnter={() => setHovered(label)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {hovered === label && (
                    <span style={{ color: "#6366f1", fontSize: "0.6rem" }}>▶</span>
                  )}
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div style={{ flex: "1 1 200px" }}>
            <div style={{
              fontSize: "0.72rem", fontWeight: 700, color: "#475569",
              textTransform: "uppercase", letterSpacing: "0.1em",
              fontFamily: "'Space Grotesk', sans-serif", marginBottom: "1rem",
            }}>
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { icon: "✉️", value: "mvchnccc@gmail.com" },
                { icon: "📱", value: "+20 112 903 3610" },
                { icon: "📍", value: "Cairo, Egypt" },
              ].map(({ icon, value }) => (
                <div key={value} style={{
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  color: "#475569", fontSize: "0.875rem",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}>
                  <span>{icon}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)", marginBottom: "1.5rem" }} />

        {/* Bottom row */}
        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "space-between",
          alignItems: "center", gap: "1rem",
        }}>
          <p style={{
            color: "#334155", fontSize: "0.8rem",
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            © {year} Mohamed Ahmed Shehata. Built with ❤️ using Next.js & TypeScript.
          </p>

          {/* Socials */}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={s.label}
                style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "#475569", display: "flex", alignItems: "center",
                  justifyContent: "center", textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                  e.currentTarget.style.color = "#818cf8";
                  e.currentTarget.style.background = "rgba(99,102,241,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.color = "#475569";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
