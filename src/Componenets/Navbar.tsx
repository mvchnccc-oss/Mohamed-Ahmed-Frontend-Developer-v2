import { useState } from "react";
import ThemeIcon from "./ThemeIcon";

interface NavbarProps {
  dark: boolean;
  toggleTheme: () => void;
}

const links = ["home", "about", "skills", "projects", "contact"];

export default function Navbar({ dark, toggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const themeBtn: React.CSSProperties = {
    width: 36, height: 36, borderRadius: "50%",
    background: "var(--card)", border: "1px solid var(--border)",
    cursor: "pointer", color: "var(--ink)",
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0, transition: "background .2s",
    overflow: "hidden",
  };

  return (
    <header style={{
      position: "fixed", top: 0, width: "100%", zIndex: 50,
      background: "var(--nav-bg)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem",
        height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* Logo */}
        <span style={{
          fontSize: "1.5rem", fontWeight: 700,
          background: "linear-gradient(to right, #2563eb, #6366f1)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>MA.</span>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {links.map(l => (
            <a key={l} href={`#${l}`}
              style={{ fontWeight: 500, fontSize: "0.95rem", color: "var(--ink)", transition: "color .2s" }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = "#3b82f6")}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = "var(--ink)")}>
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          ))}
          <button style={themeBtn} onClick={toggleTheme} aria-label="Toggle theme">
            <ThemeIcon dark={dark} />
          </button>
        </div>

        {/* Mobile buttons */}
        <div className="mobile-btns" style={{ display: "none", gap: "0.5rem", alignItems: "center" }}>
          <button style={themeBtn} onClick={toggleTheme} aria-label="Toggle theme">
            <ThemeIcon dark={dark} />
          </button>
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ ...themeBtn, borderRadius: 8 }}
            aria-label="Menu">
            {menuOpen
              ? <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              : <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            }
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu mobile-menu-open" style={{
          display: "flex",
          flexDirection: "column",
          padding: "0.5rem 1.5rem 1rem",
          background: "var(--nav-bg)", backdropFilter: "blur(12px)",
        }}>
          {links.map(l => (
            <a key={l} href={`#${l}`}
              style={{ padding: "0.40rem 0", color: "var(--ink)", fontWeight: 500, fontSize: "1rem"}}
              onClick={() => setMenuOpen(false)}>
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}