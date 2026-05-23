import { useState } from "react";

type FormState = { name: string; email: string; message: string };
type Status = "idle" | "sending" | "sent" | "error";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx1jv42QcD0yBNaCUSRzv9A6AsMIkgrKroj3zp07vZTh1pGKrVF1kNX93QY9P-NlYDWbw/exec";

const contactItems = [
  {
    label: "Email",
    value: "mvchnccc@gmail.com",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Phone No.",
    value: "01129033610",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a12.035 12.035 0 01-7.143-7.143l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102A1.125 1.125 0 005.872 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mohamed-ahmed-423364368",
    href: "https://www.linkedin.com/in/mohamed-ahmed-423364368",
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch(`${SCRIPT_URL}?${new URLSearchParams(form)}`, { method: "POST", mode: "no-cors" });
      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "0.75rem 1rem",
    background: "var(--card)", border: "1px solid var(--border)",
    borderRadius: 8, color: "var(--ink)", fontSize: "0.95rem",
    outline: "none", transition: "box-shadow .2s",
    fontFamily: "'Inter', sans-serif",
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.target.style.boxShadow = "0 0 0 2px #3b82f6");
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.target.style.boxShadow = "none");

  return (
    <section id="contact" style={{ padding: "5rem 1.5rem", background: "var(--bg)", color: "var(--ink)" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3.5rem",
      }}>

        {/* Contact Info */}
        <div>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2rem)", fontWeight: 700, marginBottom: "1.5rem" }}>
            Let's Connect
          </h2>
          <p style={{ color: "var(--ink2)", lineHeight: 1.7, marginBottom: "2rem" }}>
            Have a project in mind or just want to say hi? Feel free to reach out.
            I'm always open to discussing new opportunities and creative ideas.
          </p>

          {contactItems.map(c => (
            <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{
                width: 48, height: 48, borderRadius: 8,
                background: "rgba(59,130,246,.1)", color: "#2563eb",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                {c.icon}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--ink)", marginBottom: "0.15rem" }}>
                  {c.label}
                </div>
                {c.href
                  ? <a href={c.href} target="_blank" rel="noreferrer"
                      style={{ color: "var(--ink2)", fontSize: "0.875rem", wordBreak: "break-all" }}>
                      {c.value}
                    </a>
                  : <div style={{ color: "var(--ink2)", fontSize: "0.875rem" }}>{c.value}</div>
                }
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{
          background: "var(--bg2)", padding: "2rem", borderRadius: 16,
          border: "1px solid var(--border)", boxShadow: "0 4px 30px rgba(0,0,0,.06)",
        }}>
          <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.4rem" }}>Name</label>
              <input
                style={inputStyle} placeholder="John Doe" required
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                onFocus={onFocus} onBlur={onBlur}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.4rem" }}>Email</label>
              <input
                type="email" style={inputStyle} placeholder="john@example.com" required
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                onFocus={onFocus} onBlur={onBlur}
              />
            </div>
          </div>

          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.4rem" }}>Message</label>
            <textarea
              rows={4} style={{ ...inputStyle, resize: "vertical" }}
              placeholder="How can I help you?" required
              value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              onFocus={onFocus} onBlur={onBlur}
            />
          </div>

          <button type="submit" disabled={status === "sending"} style={{
            width: "100%", padding: "1rem",
            background: status === "sent" ? "#22c55e" : "#2563eb",
            color: "#fff", border: "none", borderRadius: 8,
            fontWeight: 700, fontSize: "0.95rem", cursor: "pointer",
            boxShadow: "0 4px 20px rgba(59,130,246,.3)", transition: "background .2s",
          }}>
            {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent ✓" : "Send Message"}
          </button>

          {status === "sent" && (
            <p style={{ color: "#22c55e", fontWeight: 600, marginTop: "0.75rem", textAlign: "center" }}>
              Message sent successfully ✓
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
