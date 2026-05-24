"use client";
import { useState } from "react";
// استيراد الأيقونات المضمونة والمتاحة فقط من لوكيد
import { Mail, Phone, MapPin, HeartIcon } from "lucide-react";

/* ─── مكون أيقونة جيتهاب المدمج ────────────────────────────── */
function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24" style={{ display: "inline-block", verticalAlign: "middle" }}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

/* ─── مكون أيقونة لينكد إن المدمج ──────────────────────────── */
function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24" style={{ display: "inline-block", verticalAlign: "middle" }}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

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
      icon: <GithubIcon size={18} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohamed-ahmed-423364368",
      icon: <LinkedinIcon size={18} />,
    },
    {
      label: "Email",
      href: "mailto:mvchnccc@gmail.com",
      icon: <Mail size={18} strokeWidth={2} />,
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
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {[
                { icon: <Mail size={16} />, value: "mvchnccc@gmail.com" },
                { icon: <Phone size={16} />, value: "+20 112 903 3610" },
                { icon: <MapPin size={16} />, value: "Cairo, Egypt" },
              ].map(({ icon, value }, idx) => (
                <div key={idx} style={{
                  display: "flex", alignItems: "center", gap: "0.6rem",
                  color: "#475569", fontSize: "0.875rem",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}>
                  <span style={{ color: "#6366f1", display: "flex", alignItems: "center" }}>{icon}</span>
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
            © {year} Mohamed Ahmed Shehata. Built with <HeartIcon size={15}/> using Next.js & TypeScript.
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