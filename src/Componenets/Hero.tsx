import MohamedAhmed from "../assets/Mohamed ahmed.png"
export default function Hero() {
  return (
    <section id="home" style={{
      paddingTop: 100, paddingBottom: 80,
      paddingLeft: 16, paddingRight: 16,
      background: "var(--bg)",
    }}>
      <div className="hero-inner" style={{
        maxWidth: 1280, margin: "0 auto",
        display: "flex", flexWrap: "wrap",
        alignItems: "center", justifyContent: "space-between", gap: "2.5rem",
      }}>

        {/* Text */}
        <div style={{ flex: "1 1 320px", minWidth: 0 }} className="animate-reveal">
          <h2 style={{
            color: "#2563eb", fontWeight: 600, fontSize: "0.75rem",
            letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem",
          }}>
            Welcome to my world
          </h2>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 4.5rem)", fontWeight: 700,
            lineHeight: 1.1, color: "var(--ink)", marginBottom: "1.25rem",
          }}>
            Hi, I'm <span style={{ color: "#2563eb" }}>Mohamed Ahmed</span>
          </h1>
          <p style={{
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--ink2)",
            lineHeight: 1.7, maxWidth: 480, marginBottom: "2rem",
          }}>
            A dedicated{" "}
            <strong style={{ color: "var(--ink)", fontWeight: 700 }}>Frontend Developer</strong>{" "}
            specializing in building high-performance, responsive, and visually stunning
            web applications with modern tech stacks.
          </p>

          <div className="hero-btns" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a href="#contact">
              <button
                style={{
                  background: "#2563eb", color: "#fff", padding: "0.75rem 2rem",
                  borderRadius: 8, fontWeight: 600, fontSize: "0.95rem",
                  border: "none", cursor: "pointer",
                  boxShadow: "0 8px 20px rgba(59,130,246,.3)",
                }}
                onMouseEnter={e => ((e.target as HTMLElement).style.background = "#1d4ed8")}
                onMouseLeave={e => ((e.target as HTMLElement).style.background = "#2563eb")}>
                Hire Me
              </button>
            </a>

            <a href="/Mohamed_Ahmed_CV_Updated (2).pdf" download>
              <button
                style={{
                  background: "transparent", color: "var(--ink)", padding: "0.75rem 2rem",
                  borderRadius: 8, fontWeight: 600, fontSize: "0.95rem",
                  border: "1px solid var(--border)", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: "0.5rem",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "#2563eb")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}>
                Download CV
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="hero-img-wrap" style={{ flex: "1 1 240px", display: "flex", justifyContent: "center" }}>
          <div style={{
            position: "relative",
            width: "clamp(220px, 40vw, 340px)",
            height: "clamp(220px, 40vw, 340px)",
          }}>
            <div className="glow-pulse" style={{
              position: "absolute", inset: 0,
              background: "#2563eb", borderRadius: "50%", filter: "blur(60px)",
            }} />
            <img
              src={MohamedAhmed}
              alt="Mohamed Ahmed"
              style={{
                position: "relative", width: "100%", height: "100%",
                objectFit: "cover", borderRadius: 16,
                border: "4px solid var(--bg2)",
                boxShadow: "0 24px 60px rgba(0,0,0,.15)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
