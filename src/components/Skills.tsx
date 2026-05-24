"use client";
import { useRef, useState, useEffect } from "react";
// استيراد أيقونات لوسيد المتوافقة مع المهارات والبار السفلي
import { 
  Atom, 
  Triangle, 
  Layers, 
  Code2, 
  Palette, 
  GitBranch, 
  Zap, 
  Search, 
  Coffee, 
  Leaf, 
  Link2, 
  RefreshCw, 
  Compass, 
  Workflow, 
  Terminal,
  Cpu,
  Gauge,
  Eye,
  Smartphone,
  LucideIcon
} from "lucide-react";

/* ─── Types ──────────────────────────────────────────────── */
interface Skill {
  label: string;
  icon: LucideIcon; // تغيير النوع لاستقبال الـ Component الخاص بلوسيد مباشرة
  color: string;
  category: string;
  level: number;
}

/* ─── Data ───────────────────────────────────────────────── */
const SKILLS: Skill[] = [
  { label: "React.js",       icon: Atom,          color: "61,182,255",   category: "Frontend",  level: 95 },
  { label: "Next.js",        icon: Triangle,      color: "255,255,255",  category: "Frontend",  level: 93 },
  { label: "TypeScript",     icon: Layers,        color: "49,120,198",   category: "Language",  level: 88 },
  { label: "JavaScript",     icon: Code2,         color: "247,223,30",   category: "Language",  level: 92 },
  { label: "Tailwind CSS",   icon: Palette,       color: "56,189,248",   category: "Styling",   level: 95 },
  { label: "Git & GitHub",   icon: GitBranch,     color: "240,81,51",    category: "Tools",     level: 88 },
  { label: "Vite",           icon: Zap,           color: "189,52,254",   category: "Tools",     level: 85 },
  { label: "SonarQube",      icon: Search,        color: "84,180,37",    category: "Tools",     level: 75 },
  { label: "Java",           icon: Coffee,        color: "244,128,36",   category: "Backend",   level: 70 },
  { label: "Spring Boot",    icon: Leaf,          color: "109,179,63",   category: "Backend",   level: 68 },
  { label: "REST APIs",      icon: Link2,         color: "99,102,241",   category: "Backend",   level: 78 },
  { label: "Agile / Scrum",  icon: RefreshCw,     color: "52,211,153",   category: "Methodology", level: 82 },
  { label: "UML & ERD",      icon: Compass,       color: "251,146,60",   category: "Methodology", level: 80 },
  { label: "SDLC",           icon: Workflow,      color: "167,139,250",  category: "Methodology", level: 80 },
  { label: "LeetCode",       icon: Terminal,      color: "255,161,22",   category: "Problem Solving", level: 75 },
];

const CATEGORIES = ["All", "Frontend", "Language", "Styling", "Tools", "Backend", "Methodology", "Problem Solving"];

/* ─── Animated Number ────────────────────────────────────── */
function AnimatedNumber({ value, visible }: { value: number; visible: boolean }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = () => {
      start += 2;
      setCurrent(Math.min(start, value));
      if (start < value) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, value]);
  return <>{current}</>;
}

/* ─── Skill Card ─────────────────────────────────────────── */
function SkillCard({ skill, visible, delay }: { skill: Skill; visible: boolean; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // تفعيل أيقونة المهارة كـ Component
  const IconComponent = skill.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -8;
    const ry = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.04)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
    setHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        background: hovered
          ? `rgba(${skill.color}, 0.07)`
          : "rgba(10, 10, 25, 0.6)",
        border: `1px solid ${hovered ? `rgba(${skill.color}, 0.4)` : "rgba(255,255,255,0.06)"}`,
        borderRadius: 16,
        padding: "1.25rem",
        cursor: "default",
        transition: "transform 0.25s ease, background 0.3s, border-color 0.3s",
        backdropFilter: "blur(8px)",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Glow bg */}
      {hovered && (
        <div style={{
          position: "absolute", inset: 0, borderRadius: 16,
          background: `radial-gradient(circle at 50% 50%, rgba(${skill.color}, 0.1) 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
      )}

      {/* Icon Container */}
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: `rgba(${skill.color}, 0.12)`,
        border: `1px solid rgba(${skill.color}, 0.25)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: `rgb(${skill.color})`, marginBottom: "0.9rem",
        boxShadow: hovered ? `0 0 16px rgba(${skill.color}, 0.3)` : "none",
        transition: "box-shadow 0.3s",
      }}>
        <IconComponent size={20} strokeWidth={2} />
      </div>

      {/* Label */}
      <div style={{
        fontWeight: 700, fontSize: "0.9rem",
        color: hovered ? `rgb(${skill.color})` : "#c7d2fe",
        fontFamily: "'Space Grotesk', sans-serif",
        marginBottom: "0.5rem",
        transition: "color 0.3s",
      }}>
        {skill.label}
      </div>

      {/* Category tag */}
      <div style={{
        fontSize: "0.7rem", fontWeight: 600,
        color: "#475569",
        fontFamily: "'JetBrains Mono', monospace",
        textTransform: "uppercase", letterSpacing: "0.06em",
        marginBottom: "0.9rem",
      }}>
        {skill.category}
      </div>

      {/* Progress bar */}
      <div style={{ height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 99, overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: visible ? `${skill.level}%` : "0%",
          background: `linear-gradient(90deg, rgba(${skill.color}, 0.6), rgb(${skill.color}))`,
          borderRadius: 99,
          transition: `width 1s ease ${delay + 300}ms`,
          boxShadow: `0 0 8px rgba(${skill.color}, 0.5)`,
        }} />
      </div>

      {/* Percentage */}
      <div style={{
        display: "flex", justifyContent: "flex-end",
        marginTop: "0.4rem",
        fontSize: "0.72rem", fontWeight: 700,
        color: `rgba(${skill.color}, 0.7)`,
        fontFamily: "'JetBrains Mono', monospace",
      }}>
        <AnimatedNumber value={skill.level} visible={visible} />%
      </div>
    </div>
  );
}

/* ─── Skills Section ─────────────────────────────────────── */
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
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

  const filtered = activeCategory === "All"
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  // مصفوفة البار السفلي المحدثة بأيقونات لوسيد
  const highlightItems = [
    { icon: Cpu, label: "Architecture", desc: "Component-driven design" },
    { icon: Gauge, label: "Performance", desc: "Core Web Vitals focused" },
    { icon: Eye, label: "Accessibility", desc: "WCAG compliant output" },
    { icon: Smartphone, label: "Responsive", desc: "Mobile-first approach" },
  ];

  return (
    <section id="skills" style={{ padding: "7rem 2rem", background: "#030310", color: "#e2e8f0" }}>
      <style>{`
        .skills-filter-btn {
          padding: 0.35rem 1rem;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: #64748b;
          font-family: 'Space Grotesk', sans-serif;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .skills-filter-btn:hover {
          border-color: rgba(99,102,241,0.4);
          color: #a5b4fc;
          background: rgba(99,102,241,0.08);
        }
        .skills-filter-btn.active {
          background: rgba(99,102,241,0.2);
          border-color: rgba(99,102,241,0.5);
          color: #c7d2fe;
          box-shadow: 0 0 12px rgba(99,102,241,0.2);
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
          gap: 1rem;
        }
        @media (max-width: 480px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
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
          textAlign: "center", marginBottom: "3.5rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s ease",
        }}>
          <div className="section-label-pill">Technical Arsenal</div>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900,
            fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em",
            color: "#f1f5f9", marginBottom: "1rem",
          }}>
            Tools I build with
          </h2>
          <p style={{
            color: "#475569", maxWidth: 500, margin: "0 auto",
            fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.7, fontSize: "0.95rem",
          }}>
            From pixel-perfect frontends to scalable APIs — here's the stack I use to ship production-grade software.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "0.5rem",
          justifyContent: "center", marginBottom: "2.5rem",
          opacity: visible ? 1 : 0,
          transition: "all 0.6s ease 0.2s",
        }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`skills-filter-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="skills-grid">
          {filtered.map((skill, i) => (
            <SkillCard
              key={skill.label}
              skill={skill}
              visible={visible}
              delay={i * 50}
            />
          ))}
        </div>

        {/* Bottom highlight bar */}
        <div style={{
          marginTop: "4rem",
          padding: "1.5rem 2rem",
          borderRadius: 16,
          background: "rgba(99,102,241,0.06)",
          border: "1px solid rgba(99,102,241,0.15)",
          display: "flex", flexWrap: "wrap", gap: "1.5rem",
          alignItems: "center", justifyContent: "center",
          opacity: visible ? 1 : 0,
          transition: "all 0.6s ease 0.5s",
        }}>
          {highlightItems.map((item) => {
            const BottomIcon = item.icon;
            return (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ color: "#818cf8", display: "flex", alignItems: "center" }}>
                  <BottomIcon size={20} />
                </span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#c7d2fe", fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#475569", fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}