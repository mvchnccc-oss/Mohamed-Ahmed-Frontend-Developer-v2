import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark] = useState(true); // always dark — theme is fixed to dark

  return (
    <div style={{
      minHeight: "100vh",
      background: "#020209",
      color: "#e2e8f0",
      overflowX: "hidden",
    }}>
      <Navbar dark={dark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
