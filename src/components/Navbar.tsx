"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

interface NavbarProps {
  dark?: boolean;
  toggleTheme?: () => void;
}

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({
  dark = true,
  toggleTheme,
}: NavbarProps) {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active Section Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    NAV_LINKS.forEach((link) => {
      const section = document.querySelector(link.href);

      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        *{
          box-sizing:border-box;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 999;
          transition: all .35s ease;
          padding: 1rem 0;
        }

        .navbar.scrolled {
          padding: .7rem 0;
        }

        .navbar-container {
          width: min(1200px, calc(100% - 32px));
          margin: auto;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: .9rem 1.2rem;

          border-radius: 22px;

          background: rgba(15, 23, 42, 0.55);

          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);

          border: 1px solid rgba(255,255,255,.08);

          box-shadow:
            0 10px 40px rgba(0,0,0,.35),
            inset 0 1px 0 rgba(255,255,255,.04);
        }

        .navbar.scrolled .navbar-container {
          background: rgba(2, 6, 23, 0.72);
          border-color: rgba(99,102,241,.22);
        }

        /* Logo */

        .logo {
          font-size: 1.2rem;
          font-weight: 800;
          letter-spacing: -.04em;

          background: linear-gradient(
            135deg,
            #818cf8,
            #38bdf8
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          cursor: pointer;
          user-select: none;
          flex-shrink: 0;
        }

        /* Desktop Nav */

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: .35rem;

          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .nav-link {
          position: relative;

          padding: .7rem 1rem;

          border-radius: 999px;

          color: rgba(226,232,240,.75);

          text-decoration: none;

          font-size: .92rem;
          font-weight: 500;

          transition: .25s ease;
        }

        .nav-link:hover {
          color: white;
          background: rgba(255,255,255,.05);
        }

        .nav-link.active {
          color: white;

          background:
            linear-gradient(
              135deg,
              rgba(99,102,241,.22),
              rgba(56,189,248,.18)
            );

          border: 1px solid rgba(129,140,248,.22);

          box-shadow:
            0 0 20px rgba(99,102,241,.18);
        }

        .nav-link.active::after {
          content: "";

          position: absolute;
          bottom: 8px;
          left: 50%;

          transform: translateX(-50%);

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #818cf8;

          box-shadow: 0 0 12px #818cf8;
        }

        /* Actions */

        .actions {
          display: flex;
          align-items: center;
          gap: .65rem;
        }

        .theme-btn,
        .menu-btn {
          width: 42px;
          height: 42px;

          border-radius: 50%;

          border: 1px solid rgba(255,255,255,.08);

          background: rgba(255,255,255,.04);

          color: #cbd5e1;

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;

          transition: .25s ease;
        }

        .theme-btn:hover,
        .menu-btn:hover {
          transform: translateY(-2px);

          color: white;

          background: rgba(99,102,241,.15);

          border-color: rgba(129,140,248,.28);

          box-shadow:
            0 8px 25px rgba(99,102,241,.18);
        }

        .menu-btn {
          display: none;
        }

        /* Mobile Menu */

        .mobile-menu {
          position: fixed;

          top: 88px;
          left: 50%;

          transform:
            translateX(-50%)
            translateY(-10px);

          width: min(92%, 420px);

          opacity: 0;
          visibility: hidden;

          transition: .3s ease;

          background: rgba(2, 6, 23, 0.94);

          backdrop-filter: blur(22px);

          border: 1px solid rgba(255,255,255,.08);

          border-radius: 24px;

          padding: 1rem;

          z-index: 998;

          box-shadow:
            0 20px 60px rgba(0,0,0,.5);
        }

        .mobile-menu.open {
          opacity: 1;
          visibility: visible;

          transform:
            translateX(-50%)
            translateY(0);
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: .4rem;
        }

        .mobile-links .nav-link {
          width: 100%;
          text-align: center;
          padding: .95rem 1rem;
        }

        /* Responsive */

        @media (max-width: 900px) {

          .desktop-nav {
            display: none;
          }

          .menu-btn {
            display: flex;
          }

          .navbar-container {
            padding: .9rem 1rem;
          }
        }

      `}</style>

      {/* NAVBAR */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">

          {/* Logo */}
          <div
            className="logo"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            MA.
          </div>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${
                  active === link.href.slice(1)
                    ? "active"
                    : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="actions">

            {toggleTheme && (
              <button
                className="theme-btn"
                onClick={toggleTheme}
                aria-label="Toggle Theme"
              >
                {dark ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>
            )}

            <button
              className="menu-btn"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              aria-label="Menu"
            >
              {menuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >
        <div className="mobile-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${
                active === link.href.slice(1)
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                setMenuOpen(false);
                setActive(link.href.slice(1));
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}