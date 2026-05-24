"use client";
import { useState, useEffect } from "react";
// استيراد الأيقونات الحديثة لتطابق نمط التصميم
import { Sun, Moon, Menu, X } from "lucide-react";

interface NavbarProps {
  dark?: boolean;
  toggleTheme?: () => void;
}

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ dark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .navbar-dock {
          position: fixed;
          top: 1.25rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          background: rgba(10, 10, 20, 0.55);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(99, 102, 241, 0.25);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07);
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .navbar-dock.scrolled {
          background: rgba(6, 6, 15, 0.8);
          border-color: rgba(99, 102, 241, 0.4);
          box-shadow: 0 8px 40px rgba(99,102,241,0.15), 0 0 0 1px rgba(99,102,241,0.1);
        }
        .nav-logo {
          font-size: 1.1rem;
          font-weight: 800;
          background: linear-gradient(135deg, #818cf8, #38bdf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-right: 0.5rem;
          font-family: 'Space Grotesk', 'Syne', sans-serif;
          letter-spacing: -0.03em;
          cursor: pointer;
        }
        .nav-divider {
          width: 1px;
          height: 20px;
          background: rgba(255,255,255,0.1);
          margin: 0 0.5rem;
        }
        .nav-link {
          position: relative;
          padding: 0.4rem 0.85rem;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(200,210,230,0.7);
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          font-family: 'Space Grotesk', sans-serif;
          letter-spacing: 0.01em;
          border: none;
          background: transparent;
        }
        .nav-link:hover {
          color: #e2e8f0;
          background: rgba(255,255,255,0.06);
        }
        .nav-link.active {
          color: #fff;
          background: rgba(99, 102, 241, 0.25);
          box-shadow: 0 0 12px rgba(99,102,241,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .nav-link.active::before {
          content: '';
          position: absolute;
          bottom: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #818cf8;
          box-shadow: 0 0 6px #818cf8;
        }
        .nav-theme-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          color: #94a3b8;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          margin-left: 0.25rem;
          flex-shrink: 0;
        }
        .nav-theme-btn:hover {
          background: rgba(99,102,241,0.2);
          color: #818cf8;
          border-color: rgba(99,102,241,0.4);
        }
        .nav-hamburger {
          display: none;
        }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 998;
          background: rgba(6, 6, 15, 0.92);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(99, 102, 241, 0.25);
          border-radius: 1rem;
          padding: 1rem;
          flex-direction: column;
          gap: 0.25rem;
          min-width: 200px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu .nav-link { width: 100%; text-align: center; padding: 0.6rem 1rem; }
        @media (max-width: 640px) {
          .navbar-dock .desktop-links { display: none; }
          .navbar-dock .nav-divider { display: none; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>

      <nav className={`navbar-dock${scrolled ? " scrolled" : ""}`}>
        <span className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          MA.
        </span>
        <div className="nav-divider" />
        <div className="desktop-links" style={{ display: "flex", gap: "0.1rem" }}>
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`nav-link${active === href.slice(1) ? " active" : ""}`}
              onClick={() => setActive(href.slice(1))}
            >
              {label}
            </a>
          ))}
        </div>
        {toggleTheme && (
          <button className="nav-theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {dark ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
          </button>
        )}
        <button
          className="nav-hamburger"
          style={{ width: 32, height: 32, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", borderRadius: 8, color: "#94a3b8", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "0.25rem" }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={16} strokeWidth={2} /> : <Menu size={16} strokeWidth={2} />}
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`nav-link${active === href.slice(1) ? " active" : ""}`}
            onClick={() => { setActive(href.slice(1)); setMenuOpen(false); }}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}