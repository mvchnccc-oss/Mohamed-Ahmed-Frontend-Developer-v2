"use client";
import { useRef, useState, useEffect } from "react";

/* ─── 3D Tilt Card ───────────────────────────────────────── */
function TiltCard({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -10;
    const ry = ((x - cx) / cx) * 10;
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ transition: "transform 0.3s ease", ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

/* ─── Section Label ──────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: "0.5rem",
      padding: "0.3rem 0.9rem", borderRadius: 999,
      background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.25)",
      color: "#818cf8", fontSize: "0.75rem", fontWeight: 700,
      letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem",
      fontFamily: "'Space Grotesk', sans-serif",
    }}>
      {children}
    </div>
  );
}

/* ─── Timeline Entry ─────────────────────────────────────── */
function TimelineEntry({
  icon, title, subtitle, period, description, color, delay,
}: {
  icon: string; title: string; subtitle: string;
  period: string; description: string; color: string; delay: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "flex", gap: "1.25rem", marginBottom: "2rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-20px)",
        transition: `all 0.6s ease ${delay}ms`,
      }}
    >
      {/* Icon */}
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12,
          background: `rgba(${color}, 0.12)`,
          border: `1px solid rgba(${color}, 0.3)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.3rem", flexShrink: 0,
        }}>
          {icon}
        </div>
        <div style={{ width: 1, flex: 1, background: "rgba(255,255,255,0.06)", marginTop: 8 }} />
      </div>
      {/* Content */}
      <div style={{ paddingBottom: "0.5rem" }}>
        <div style={{
          display: "flex", alignItems: "flex-start", justifyContent: "space-between",
          flexWrap: "wrap", gap: "0.25rem", marginBottom: "0.4rem",
        }}>
          <div>
            <div style={{ fontWeight: 700, color: "#e2e8f0", fontSize: "1rem", fontFamily: "'Syne', sans-serif" }}>{title}</div>
            <div style={{ color: "#818cf8", fontSize: "0.85rem", fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}>{subtitle}</div>
          </div>
          <span style={{
            padding: "0.2rem 0.7rem", borderRadius: 999,
            background: `rgba(${color}, 0.1)`, color: `rgb(${color})`,
            fontSize: "0.72rem", fontWeight: 600, whiteSpace: "nowrap",
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            {period}
          </span>
        </div>
        <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.7, fontFamily: "'Space Grotesk', sans-serif" }}>
          {description}
        </p>
      </div>
    </div>
  );
}

/* ─── About Section ──────────────────────────────────────── */
export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const bentoCardStyle: React.CSSProperties = {
    background: "rgba(10, 10, 25, 0.6)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 16,
    padding: "1.5rem",
    backdropFilter: "blur(8px)",
  };

  return (
    <section id="about" style={{ padding: "7rem 2rem", background: "#020209", color: "#e2e8f0" }}>
      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: auto;
          gap: 1rem;
        }
        .bento-col1 { grid-column: span 7; }
        .bento-col2 { grid-column: span 5; }
        .bento-full { grid-column: span 12; }
        .bento-half { grid-column: span 6; }
        @media (max-width: 900px) {
          .bento-col1, .bento-col2, .bento-half { grid-column: span 12 !important; }
        }
        .info-pill {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.4rem 0.9rem; border-radius: 999px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          font-size: 0.82rem; color: #94a3b8;
          font-family: 'Space Grotesk', sans-serif;
        }
        .glow-number {
          font-size: 3rem; font-weight: 900; line-height: 1;
          background: linear-gradient(135deg, #818cf8, #38bdf8);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; font-family: 'Syne', sans-serif;
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div
          ref={ref}
          style={{
            textAlign: "center", marginBottom: "4rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <SectionLabel>About Me</SectionLabel>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900,
            fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em",
            color: "#f1f5f9", marginBottom: "1rem",
          }}>
            Crafting digital experiences<br />
            <span style={{ background: "linear-gradient(135deg,#818cf8,#38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              with purpose & precision
            </span>
          </h2>
          <p style={{ color: "#475569", maxWidth: 560, margin: "0 auto", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.7 }}>
            Frontend Developer from Cairo, Egypt — passionate about building products that live at the intersection of beautiful design and robust engineering.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Bio card - large */}
          <TiltCard className="bento-col1" style={{ ...bentoCardStyle }}>
            <div style={{ marginBottom: "1rem" }}>
              <SectionLabel>Who I am</SectionLabel>
            </div>
            <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: "1rem", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.95rem" }}>
              I'm a <strong style={{ color: "#c7d2fe" }}>Frontend Engineer</strong> with a deep love for crafting seamless, performant web interfaces. I specialize in turning complex problems into elegant, intuitive user experiences using the modern JavaScript ecosystem.
            </p>
            <p style={{ color: "#64748b", lineHeight: 1.8, fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.9rem" }}>
              Whether it's architecting a full-stack e-commerce platform with <strong style={{ color: "#818cf8" }}>Next.js & Spring Boot</strong>, or pixel-perfecting a high-conversion landing page — I bring the same obsessive attention to detail to every project.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.5rem" }}>
              {["📍 Cairo, Egypt", "🎓 Cairo University '28", "💼 Frontend Trainee", "⚡ Open to Offers"].map((pill) => (
                <span key={pill} className="info-pill">{pill}</span>
              ))}
            </div>
          </TiltCard>

          {/* Stats mini cards */}
          <div className="bento-col2" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <TiltCard style={{ ...bentoCardStyle, textAlign: "center", flex: 1 }}>
              <div className="glow-number">8+</div>
              <div style={{ color: "#475569", fontSize: "0.8rem", fontWeight: 600, marginTop: "0.4rem", fontFamily: "'Space Grotesk', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Technologies Mastered
              </div>
            </TiltCard>
            <TiltCard style={{ ...bentoCardStyle, textAlign: "center", flex: 1 }}>
              <div className="glow-number">2+</div>
              <div style={{ color: "#475569", fontSize: "0.8rem", fontWeight: 600, marginTop: "0.4rem", fontFamily: "'Space Grotesk', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Production Projects
              </div>
            </TiltCard>
            <TiltCard style={{ ...bentoCardStyle, flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ fontSize: "1.8rem" }}>🧩</span>
                <div>
                  <div style={{ color: "#c7d2fe", fontWeight: 700, fontSize: "0.9rem", fontFamily: "'Space Grotesk', sans-serif" }}>LeetCode Solver</div>
                  <div style={{ color: "#475569", fontSize: "0.78rem", fontFamily: "'Space Grotesk', sans-serif" }}>Algorithms & DSA practice</div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Timeline - Education & Experience */}
          <TiltCard className="bento-half" style={{ ...bentoCardStyle }}>
            <SectionLabel>🎓 Education</SectionLabel>
            <TimelineEntry
              icon="🏛️"
              title="Cairo University"
              subtitle="Software Engineering"
              period="2024 – 2028"
              description="Pursuing a Software Engineering degree with a strong focus on software architecture, algorithms, data structures, UML, and Agile methodologies."
              color="99,102,241"
              delay={0}
            />
          </TiltCard>

          <TiltCard className="bento-half" style={{ ...bentoCardStyle }}>
            <SectionLabel>💼 Experience</SectionLabel>
            <TimelineEntry
              icon="🚀"
              title="Root Academy"
              subtitle="Frontend Trainee"
              period="07/2025 – 02/2026"
              description="Working on real-world frontend projects using React.js, Next.js, and TypeScript. Collaborating in Agile Scrum sprints with code quality maintained via SonarQube."
              color="56,189,248"
              delay={100}
            />
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
