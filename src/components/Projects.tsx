"use client";
import { useRef, useState, useEffect } from "react";
import ShopSphere from "../assets/ShopSphereHome.png";
import LandingPage from "../assets/LandingPage.png";
import ShopMart from "../assets/E-commerce.png";
/* ─── Types ──────────────────────────────────────────────── */
interface Project {
  title: string;
  tagline: string;
  desc: string;
  img: string;
  tags: string[];
  github?: string;
  live: string;
  accent: string;
  featured?: boolean;
  roles?: string[];
}
/* ─── Data ───────────────────────────────────────────────── */
const PROJECTS: Project[] = [
  {
    title: "ShopSphere",
    tagline: "Full-Stack E-Commerce Platform",
    desc: "Multi-role e-commerce system built with Next.js & Java Spring Boot. Features three distinct portals for Customers, Sellers, and Admins — with Stripe payment integration, NextAuth + JWT authentication, server actions, paginated search, and dynamic routing architected end-to-end.",
    img: ShopSphere,
    tags: ["Next.js", "TypeScript", "Spring Boot", "Stripe", "NextAuth", "JWT"],
    github: "https://github.com/mvchnccc-oss/shopsphere-E-commerce-weدb-Application",
    live: "https://e-commerce-gamma-wine-32.vercel.app/",
    accent: "16,185,129", // تم التغيير إلى الأخضر الزمردي (Emerald) ليتناسق مع خلفية الموقع الخضراء
    featured: true,
    roles: ["Customer Portal", "Seller Dashboard", "Admin Panel"],
  },
  {
    title: "SaaS Landing Page",
    tagline: "High-Conversion Company Portfolio",
    desc: "Performance-focused landing page designed for maximum conversion. Built with modern React patterns, optimized for Core Web Vitals, and crafted with meticulous attention to UX details, responsive layouts, and smooth micro-interactions.",
    img: LandingPage,
    tags: ["React", "Tailwind CSS", "HTML5", "Performance"],
    live: "https://company-portfolio-first-progect.vercel.app/",
    accent: "249,115,22", // تم التغيير إلى البرتقالي الدافئ (Amber/Orange) ليطابق ثيم موقع Horuvision
    featured: false,
  },
  {
    title: "ShopMart",
    tagline: "Next-Gen E-Commerce Ecosystem",
    desc: "A comprehensive web application designed for seamless online shopping. Features dynamic product catalogs, optimized cart management, and secure checkout workflows, fully deployed and optimized for fast loading and modern user experience.",
    img: ShopMart, 
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "E-Commerce"],
    github: "https://github.com/mvchnccc-oss/ShopMart-E-commerce-web-application",
    live: "https://e-commerce-gamma-wine-32.vercel.app/",
    accent: "34,197,94", // تم التغيير إلى الأخضر الحيوي (Green) ليتناسق مع الهوية البصرية وشعار التطبيق
    featured: false,
  },
];

/* ─── Tilt Card Wrapper ──────────────────────────────────── */
function TiltWrapper({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / rect.height) * -12;
    const ry = ((x - rect.width / 2) / rect.width) * 12;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
  };

  const handleLeave = () => {
    if (ref.current)
      ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)", ...style }}
    >
      {children}
    </div>
  );
}

/* ─── Featured Project Card ──────────────────────────────── */
function FeaturedCard({ project, visible }: { project: Project; visible: boolean }) {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <TiltWrapper style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(30px)",
      transition: "all 0.7s cubic-bezier(0.22,1,0.36,1)",
    }}>
      <div style={{
        position: "relative",
        background: "rgba(8, 8, 22, 0.8)",
        border: `1px solid rgba(${project.accent}, 0.25)`,
        borderRadius: 20,
        overflow: "hidden",
        backdropFilter: "blur(12px)",
        boxShadow: `0 0 40px rgba(${project.accent}, 0.08), 0 20px 60px rgba(0,0,0,0.4)`,
      }}>
        {/* Glow border top */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, transparent, rgba(${project.accent},0.8), transparent)`,
        }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 360 }}>
          {/* Image side */}
          <div
            style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}
            onMouseEnter={() => setImgHovered(true)}
            onMouseLeave={() => setImgHovered(false)}
          >
            <img
              src={project.img}
              alt={project.title}
              style={{
                width: "100%", height: "100%", objectFit: "cover",
                transform: imgHovered ? "scale(1.06)" : "scale(1)",
                transition: "transform 0.5s ease",
              }}
            />
            {/* Overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: `linear-gradient(135deg, rgba(${project.accent},0.15) 0%, transparent 60%, rgba(0,0,0,0.4) 100%)`,
              transition: "opacity 0.3s",
              opacity: imgHovered ? 1 : 0.6,
            }} />

            {/* Featured badge */}
            <div style={{
              position: "absolute", top: 16, left: 16,
              padding: "0.25rem 0.75rem", borderRadius: 999,
              background: `rgba(${project.accent}, 0.2)`,
              border: `1px solid rgba(${project.accent}, 0.5)`,
              color: `rgb(${project.accent})`,
              fontSize: "0.7rem", fontWeight: 700,
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.08em", textTransform: "uppercase",
            }}>
              ⭐ Featured
            </div>
          </div>

          {/* Content side */}
          <div style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{
                fontSize: "0.75rem", fontWeight: 600, color: `rgba(${project.accent}, 0.8)`,
                fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em",
                textTransform: "uppercase", marginBottom: "0.75rem",
              }}>
                {project.tagline}
              </div>
              <h3 style={{
                fontSize: "1.75rem", fontWeight: 900, color: "#f1f5f9",
                fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em",
                marginBottom: "1rem",
              }}>
                {project.title}
              </h3>
              <p style={{
                color: "#64748b", fontSize: "0.875rem", lineHeight: 1.7,
                fontFamily: "'Space Grotesk', sans-serif", marginBottom: "1.25rem",
              }}>
                {project.desc}
              </p>

              {/* Roles */}
              {project.roles && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                  {project.roles.map((r) => (
                    <span key={r} style={{
                      padding: "0.2rem 0.65rem", borderRadius: 6,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontSize: "0.72rem", color: "#94a3b8",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}>
                      {r}
                    </span>
                  ))}
                </div>
              )}

              {/* Tech tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {project.tags.map((t) => (
                  <span key={t} style={{
                    padding: "0.2rem 0.65rem", borderRadius: 999,
                    background: `rgba(${project.accent}, 0.1)`,
                    border: `1px solid rgba(${project.accent}, 0.2)`,
                    color: `rgba(${project.accent}, 0.9)`,
                    fontSize: "0.72rem", fontWeight: 600,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.6rem 1.25rem", borderRadius: 999,
                  background: `linear-gradient(135deg, rgba(${project.accent},0.7), rgba(${project.accent},0.9))`,
                  color: "#fff", fontWeight: 700, fontSize: "0.82rem",
                  textDecoration: "none", fontFamily: "'Space Grotesk', sans-serif",
                  boxShadow: `0 0 20px rgba(${project.accent},0.3)`,
                  transition: "all 0.2s",
                }}
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Live Demo
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    padding: "0.6rem 1.25rem", borderRadius: 999,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#94a3b8", fontWeight: 600, fontSize: "0.82rem",
                    textDecoration: "none", fontFamily: "'Space Grotesk', sans-serif",
                    transition: "all 0.2s",
                  }}
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.484 0-.236-.009-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  Source
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </TiltWrapper>
  );
}

/* ─── Regular Project Card ───────────────────────────────── */
function ProjectCard({ project, visible, delay }: { project: Project; visible: boolean; delay: number }) {
  const [hov, setHov] = useState(false);

  return (
    <TiltWrapper style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(30px)",
      transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }}>
      <div
        style={{
          position: "relative",
          background: hov ? `rgba(${project.accent}, 0.05)` : "rgba(8, 8, 22, 0.7)",
          border: `1px solid ${hov ? `rgba(${project.accent}, 0.4)` : "rgba(255,255,255,0.06)"}`,
          borderRadius: 18,
          overflow: "hidden",
          height: "100%",
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
          boxShadow: hov ? `0 0 40px rgba(${project.accent}, 0.12), 0 20px 50px rgba(0,0,0,0.3)` : "0 4px 30px rgba(0,0,0,0.3)",
        }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        {/* Glow top */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 1,
          background: `linear-gradient(90deg, transparent, rgba(${project.accent},${hov ? "0.8" : "0.3"}), transparent)`,
          transition: "opacity 0.3s",
        }} />

        {/* Image */}
        <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
          <img
            src={project.img}
            alt={project.title}
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              transform: hov ? "scale(1.08)" : "scale(1)",
              transition: "transform 0.5s ease",
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to bottom, transparent 40%, rgba(8,8,22,0.9) 100%)`,
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: `rgba(${project.accent}, 0.08)`,
            opacity: hov ? 1 : 0,
            transition: "opacity 0.3s",
          }} />
        </div>

        {/* Body */}
        <div style={{ padding: "1.5rem" }}>
          <div style={{
            fontSize: "0.7rem", color: `rgba(${project.accent}, 0.8)`,
            fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em",
            textTransform: "uppercase", fontWeight: 600, marginBottom: "0.5rem",
          }}>
            {project.tagline}
          </div>
          <h3 style={{
            fontSize: "1.2rem", fontWeight: 800, color: "#f1f5f9",
            fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em",
            marginBottom: "0.75rem",
          }}>
            {project.title}
          </h3>
          <p style={{
            color: "#64748b", fontSize: "0.85rem", lineHeight: 1.7,
            fontFamily: "'Space Grotesk', sans-serif", marginBottom: "1.25rem",
          }}>
            {project.desc}
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
            {project.tags.map((t) => (
              <span key={t} style={{
                padding: "0.15rem 0.6rem", borderRadius: 999,
                background: `rgba(${project.accent}, 0.08)`,
                border: `1px solid rgba(${project.accent}, 0.2)`,
                color: `rgba(${project.accent}, 0.85)`,
                fontSize: "0.7rem", fontWeight: 600,
                fontFamily: "'Space Grotesk', sans-serif",
              }}>
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                fontSize: "0.8rem", fontWeight: 700, color: `rgb(${project.accent})`,
                textDecoration: "none", fontFamily: "'Space Grotesk', sans-serif",
                transition: "opacity 0.2s",
              }}
            >
              Live Demo →
            </a>
          </div>
        </div>
      </div>
    </TiltWrapper>
  );
}

/* ─── Projects Section ───────────────────────────────────── */
export default function Projects() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" style={{ padding: "7rem 2rem", background: "#020209", color: "#e2e8f0" }}>
      <style>{`
        .featured-card-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .featured-card-inner {
            grid-template-columns: 1fr !important;
          }
          .featured-card-inner > div:first-child {
            aspect-ratio: 16/9;
            max-height: 220px;
          }
        }
        .section-label-pill {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.3rem 0.9rem; border-radius: 999px;
          background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.25);
          color: #818cf8; font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          font-family: 'Space Grotesk', sans-serif; margin-bottom: 1rem;
        }
      `}</style>

      <div ref={ref} style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: "4rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s ease",
        }}>
          <div className="section-label-pill">Portfolio</div>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900,
            fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em",
            color: "#f1f5f9", marginBottom: "1rem",
          }}>
            Featured Projects
          </h2>
          <p style={{
            color: "#475569", maxWidth: 500, margin: "0 auto",
            fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.7, fontSize: "0.95rem",
          }}>
            A curated selection of real-world projects that demonstrate end-to-end engineering capability.
          </p>
        </div>

        {/* Featured */}
        {featured.map((p) => (
          <div key={p.title} style={{ marginBottom: "2rem" }}>
            <FeaturedCard project={p} visible={visible} />
          </div>
        ))}

        {/* Rest */}
        {rest.length > 0 && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}>
            {rest.map((p, i) => (
              <ProjectCard key={p.title} project={p} visible={visible} delay={(i + 1) * 100} />
            ))}
          </div>
        )}

        {/* GitHub CTA */}
        <div style={{
          textAlign: "center", marginTop: "3.5rem",
          opacity: visible ? 1 : 0,
          transition: "all 0.6s ease 0.6s",
        }}>
          <a
            href="https://github.com/mvchnccc-oss"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              padding: "0.8rem 2rem", borderRadius: 999,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#94a3b8", fontWeight: 600, fontSize: "0.9rem",
              textDecoration: "none", fontFamily: "'Space Grotesk', sans-serif",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
              e.currentTarget.style.color = "#c7d2fe";
              e.currentTarget.style.background = "rgba(99,102,241,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "#94a3b8";
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            }}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.484 0-.236-.009-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            View All on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
