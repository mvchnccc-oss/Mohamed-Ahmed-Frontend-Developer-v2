import { useState, useEffect } from "react";
import "./styles/global.css";

import Navbar   from "./Componenets/Navbar";
import Hero     from "./Componenets/Hero";
import About    from "./Componenets/About";
import Skills   from "./Componenets/Skills";
import Projects from "./Componenets/Projects";
import Contact  from "./Componenets/Contact";
import Footer   from "./Componenets/Footer";

export default function App() {
  const [dark, setDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("color-theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("color-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--ink)" }}>
      <Navbar dark={dark} toggleTheme={() => setDark(d => !d)} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
