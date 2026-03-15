import { useRef } from "react";
import { useInView } from "../hooks/useInView";

interface Skill {
  label: string;
  pct: number;
}

const SKILLS: Skill[] = [
  { label: "React & Next.js",   pct: 95 },
  { label: "JavaScript (ES6+)", pct: 90 },
  { label: "Tailwind CSS",      pct: 95 },
  { label: "HTML5 & CSS3",      pct: 99 },
  { label: "UI/UX Design",      pct: 85 },
  { label: "TypeScript",        pct: 92 },
];

function SkillBar({ label, pct, animate }: Skill & { animate: boolean }) {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <div style={{
        display: "flex", justifyContent: "space-between",
        fontWeight: 500, marginBottom: "0.35rem", color: "var(--ink)",
      }}>
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div style={{ height: 8, background: "var(--border)", borderRadius: 99, overflow: "hidden" }}>
        <div
          className="skill-bar-fill"
          style={{
            height: "100%",
            width: animate ? `${pct}%` : "0%",
            background: "#2563eb",
            borderRadius: 99,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section id="skills" style={{ padding: "5rem 1.5rem", background: "var(--bg)", color: "var(--ink)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2rem)", fontWeight: 700, marginBottom: "0.75rem" }}>
            Technical Proficiency
          </h2>
          <p style={{ color: "var(--ink2)" }}>
            The tools and technologies I use to bring projects to life.
          </p>
        </div>

        <div
          ref={ref}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0.25rem 3rem" }}
        >
          {SKILLS.map(sk => (
            <SkillBar key={sk.label} {...sk} animate={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
