const paragraphs = [
  "I am a passionate Frontend Developer with a keen eye for detail and a strong foundation in modern web technologies. My goal is to bridge the gap between complex backend logic and intuitive, user-friendly interfaces.",
  "I specialize in turning creative ideas into functional, production-ready applications. Whether it's building a complex E-commerce platform or a sleek landing page, I focus on delivering clean code and optimal performance.",
  "When I'm not coding, you'll find me exploring the latest UI/UX trends or contributing to open-source projects.",
];

export default function About() {
  return (
    <section id="about" style={{ padding: "5rem 1.5rem", background: "var(--bg2)", color: "var(--ink)" }}>
      <div className="about-inner" style={{
        maxWidth: 1280, margin: "0 auto",
        display: "flex", flexWrap: "wrap", gap: "3.5rem", alignItems: "center",
      }}>

        {/* Image */}
        <div style={{ flex: "1 1 280px", minWidth: 0 }}>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc3smVfzl7GoeMKWUrsTnYfHSHYMMxQVx0R3rfjIVF16hITNAwzbcGdUeYTjto9PG_4sUz6U2ocAwh_32aZuxATLwYawTl9H800X2iSmq7yBoL8Fptu8pb4ZjtIu7qC8DvfBQ7RPj-4B_l0SdQnSHtCnOnfUpWljXdFqSEKQjTlmDedVR_FaULkBRa46WD3vN3GE6EgzlH7V0mKnnKdxfMQsuOLr7OWbeC_C5Xzhv83r3vaL0CYi3LbvPOsXXjvOrTduuGCROMmIL5"
            alt="Coding Workstation"
            style={{ borderRadius: 16, boxShadow: "0 20px 60px rgba(0,0,0,.12)", width: "100%" }}
          />
        </div>

        {/* Text */}
        <div style={{ flex: "1 1 280px", minWidth: 0 }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2rem)", fontWeight: 700, marginBottom: "1.5rem" }}>
            About Me
          </h2>
          {paragraphs.map((p, i) => (
            <p key={i} style={{ color: "var(--ink2)", lineHeight: 1.8, fontSize: "1rem", marginBottom: "1rem" }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
