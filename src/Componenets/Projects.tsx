import { useState } from "react";
import Ecommerce from "../assets/E-commerce.png"
import LandingPage from "../assets/LandingPage.png"
interface Project {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  href: string;
}

const PROJECTS: Project[] = [
  {
    title: "Modern E-commerce",
    desc: "Built with Next.js, Stripe integration, and complex cart state management.",
    img: Ecommerce,
    tags: ["Next.js", "NextAuth", "TypeScript", "Tailwind"],
    href: "https://e-commerce-gamma-wine-32.vercel.app/",
  },
  {
    title: "SaaS Landing Page",
    desc: "Optimized landing page focusing on conversion rate and mobile responsiveness.",
    img: LandingPage,
    tags: ["React", "HTML/CSS", "Tailwind"],
    href: "https://company-portfolio-first-progect.vercel.app/",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "var(--card)", border: "1px solid var(--border)",
        borderRadius: 16, overflow: "hidden",
        transition: "transform .3s, box-shadow .3s",
        transform: hov ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hov ? "0 20px 60px rgba(0,0,0,.15)" : "none",
      }}
    >
      {/* Image */}
      <a href={project.href} target="_blank" rel="noreferrer">
        <div style={{ overflow: "hidden", aspectRatio: "16/9", position: "relative" }}>
          <img
            src={project.img}
            alt={project.title}
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              transition: "transform .5s",
              transform: hov ? "scale(1.1)" : "scale(1)",
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(59,130,246,.2)",
            opacity: hov ? 1 : 0, transition: "opacity .3s",
          }} />
        </div>
      </a>
      {/* Body */}
      <div style={{ padding: "1.5rem" }}>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--ink)" }}>
          {project.title}
        </h3>
        <p style={{ color: "var(--ink2)", fontSize: "0.875rem", marginBottom: "1rem", lineHeight: 1.6 }}>
          {project.desc}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
          {project.tags.map(t => (
            <span key={t} style={{
              padding: "0.2rem 0.75rem", borderRadius: 99,
              background: "rgba(59,130,246,.1)", color: "#2563eb",
              fontSize: "0.75rem", fontWeight: 600,
            }}>{t}</span>
          ))}
        </div>

        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", fontWeight: 700, fontSize: "0.875rem", color: "var(--ink)" }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#2563eb")}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--ink)")}>
          Explore Project
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "5rem 1.5rem", background: "var(--bg2)", color: "var(--ink)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem",
        }}>
          <div>
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2rem)", fontWeight: 700, marginBottom: "0.75rem" }}>
              Featured Projects
            </h2>
            <p style={{ color: "var(--ink2)", maxWidth: 480 }}>
              A selection of my recent works across different industries and technologies.
            </p>
          </div>
          <a href="#" style={{ color: "#2563eb", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.25rem", whiteSpace: "nowrap" }}>
            View All Projects
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {PROJECTS.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      </div>
    </section>
  );
}
