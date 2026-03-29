export default function Footer() {
  return (
    <footer style={{
      padding: "2.5rem 1rem", textAlign: "center",
      borderTop: "1px solid var(--border)",
      background: "var(--bg2)", color: "var(--ink2)", fontSize: "0.875rem",
    }}>
      <p>© {new Date().getFullYear()} Mohamed Ahmed. All rights reserved.</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginTop: "1rem" }}>
        <a
          href="https://github.com/mvchnccc-oss"
          style={{ color: "var(--ink2)", transition: "color .2s" }}
          onMouseEnter={e => ((e.target as HTMLElement).style.color = "#2563eb")}
          onMouseLeave={e => ((e.target as HTMLElement).style.color = "var(--ink2)")}>
          GitHub
        </a>
      </div>
    </footer>
  );
}
