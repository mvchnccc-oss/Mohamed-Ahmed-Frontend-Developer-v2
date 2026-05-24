"use client";
import { useState, useEffect } from "react";
// استيراد الأيقونات المحدثة بدلاً من الـ SVG
import { Mail, Phone } from "lucide-react";

type FormState = { name: string; email: string; message: string };
type Status = "idle" | "sending" | "sent" | "error";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx1jv42QcD0yBNaCUSRzv9A6AsMIkgrKroj3zp07vZTh1pGKrVF1kNX93QY9P-NlYDWbw/exec";
const contactItems = [
  {
    label: "Email",
    value: "mvchnccc@gmail.com",
    displayValue: "mvchnccc@gmail.com", // سيبناه زي ما هو لأنه واضح ومباشر
    href: "mailto:mvchnccc@gmail.com",
    glowColor: "rgba(56, 189, 248, 0.4)",
    icon: <Mail size={20} strokeWidth={2} />,
  },
  {
    label: "Phone No.",
    value: "01129033610",
    displayValue: "01129033610",
    href: "tel:01129033610",
    glowColor: "rgba(34, 197, 94, 0.4)",
    icon: <Phone size={20} strokeWidth={2} />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mohamed-ahmed-423364368",
    displayValue: "in/mohamed-ahmed", // <--- هنا التغيير! مظهر شيك ومكتوب بأسلوب المطورين المحترفين
    href: "https://www.linkedin.com/in/mohamed-ahmed-423364368", // الرابط الأصلي شغال بالخلفية بدون مشاكل
    glowColor: "rgba(99, 102, 241, 0.4)",
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];
export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch(`${SCRIPT_URL}?${new URLSearchParams(form)}`, { method: "POST", mode: "no-cors" });
      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.85rem 1.1rem",
    background: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: 12,
    color: "#f1f5f9",
    fontSize: "0.95rem",
    outline: "none",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    fontFamily: "'Space Grotesk', sans-serif",
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(99, 102, 241, 0.5)";
    e.target.style.background = "rgba(99, 102, 241, 0.02)";
    e.target.style.boxShadow = "0 0 0 4px rgba(99, 102, 241, 0.15), inset 0 0 8px rgba(99, 102, 241, 0.1)";
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(255, 255, 255, 0.08)";
    e.target.style.background = "rgba(255, 255, 255, 0.03)";
    e.target.style.boxShadow = "none";
  };

  return (
    <section id="contact" style={{
      padding: "7rem 2rem 6rem",
      background: "#020209",
      position: "relative",
      overflow: "hidden"
    }}>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        .info-card-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .info-card-item:hover {
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.05);
          transform: translateX(5px);
        }

        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .contact-form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* خلفية إضاءة النيون الجانبية للـ Form */}
      <div style={{
        position: "absolute", bottom: "-10%", right: "-5%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "rgba(99, 102, 241, 0.08)", filter: "blur(140px)",
        pointerEvents: "none"
      }} />

      <div className="contact-grid" style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.6s ease"
      }}>

        {/* الكروت ومعلومات التواصل */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 900,
            color: "#f1f5f9",
            fontFamily: "'Syne', sans-serif",
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem"
          }}>
            Let's <span style={{ background: "linear-gradient(135deg, #818cf8, #38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Connect</span>
          </h2>
          <p style={{
            color: "#94a3b8",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            maxWidth: "520px",
            marginBottom: "2.5rem",
            fontFamily: "'Space Grotesk', sans-serif"
          }}>
            Have an exciting full-stack project in mind, or just want to discuss software engineering opportunities?
            Drop me a line, I'm always ready to build something remarkable.
          </p>

          <div>
            {contactItems.map(c => (
              <div key={c.label} className="info-card-item">
                <div style={{
                  width: 50, height: 50, borderRadius: "12px",
                  background: "rgba(6, 6, 16, 0.8)",
                  border: `1px solid rgba(255, 255, 255, 0.08)`,
                  color: c.label === "Email" ? "#38bdf8" : c.label === "Phone No." ? "#4ade80" : "#818cf8",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  boxShadow: `0 4px 15px rgba(0,0,0,0.4), 0 0 10px ${c.glowColor}`,
                  aspectRatio: "1/1"
                }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.2rem" }}>
                    {c.label}
                  </div>
                  <a href={c.href} target="_blank" rel="noreferrer"
                    style={{
                      color: "#cbd5e1",
                      fontSize: "1rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      wordBreak: "break-all",
                      transition: "color 0.2s",
                      fontFamily: "'Space Grotesk', sans-serif"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#818cf8"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#cbd5e1"}
                  >
                    {c.displayValue} {/* هنا بنعرض النص المختصر الفخم */}
                  </a>
                </div>
              </div>
            ))}        </div>
        </div>

        {/* الفورم الزجاجي الفخم */}
        <form onSubmit={handleSubmit} style={{
          background: "rgba(6, 6, 16, 0.6)",
          padding: "1.75rem", // تقليل الـ padding عشان نلم الحواف
          borderRadius: "20px",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem", // مسافات أصغر ومحكومة بين العناصر
          height: "fit-content" // إجبار الفورم تاخد طول محتواها بالظبط
        }}>
          <div className="contact-form-row">
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#94a3b8", marginBottom: "0.4rem", fontFamily: "'Space Grotesk', sans-serif" }}>Name</label>
              <input
                style={inputStyle} placeholder="John Doe" required
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                onFocus={onFocus} onBlur={onBlur}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#94a3b8", marginBottom: "0.4rem", fontFamily: "'Space Grotesk', sans-serif" }}>Email</label>
              <input
                type="email" style={inputStyle} placeholder="john@example.com" required
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                onFocus={onFocus} onBlur={onBlur}
              />
            </div>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#94a3b8", marginBottom: "0.4rem", fontFamily: "'Space Grotesk', sans-serif" }}>Message</label>
            <textarea
              rows={3} // تقليل عدد السطور الافتراضية من 4 لـ 3 عشان نلم الطول
              style={{ ...inputStyle, padding: "0.7rem 1.1rem", resize: "none" }}
              placeholder="Tell me about your project..." required
              value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              onFocus={onFocus} onBlur={onBlur}
            />
          </div>

          <button type="submit" disabled={status === "sending"} style={{
            width: "100%", padding: "0.85rem", // تقليل الـ padding للزرار بشكل بسيط ومتناسق
            background: status === "sent" ? "#22c55e" : "linear-gradient(135deg, #6366f1, #4f46e5)",
            color: "#fff", border: "none", borderRadius: 12,
            fontWeight: 700, fontSize: "0.95rem", cursor: status === "sending" ? "not-allowed" : "pointer",
            boxShadow: status === "sent" ? "0 4px 20px rgba(34,197,94,.3)" : "0 4px 25px rgba(99,102,241,.3)",
            transition: "all 0.3s ease",
            fontFamily: "'Space Grotesk', sans-serif",
            marginTop: "0.25rem"
          }}
            onMouseEnter={(e) => {
              if (status !== "sending" && status !== "sent") e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {status === "sending" ? "Sending Details..." : status === "sent" ? "Success! ✓" : status === "error" ? "Something went wrong ✗" : "Send Message"}
          </button>

          {status === "sent" && (
            <p style={{ color: "#22c55e", fontWeight: 600, fontSize: "0.85rem", marginTop: "0.25rem", textAlign: "center", fontFamily: "'Space Grotesk', sans-serif" }}>
              Thank you! I will reply to your email as soon as possible.
            </p>
          )}
          {status === "error" && (
            <p style={{ color: "#ef4444", fontWeight: 600, fontSize: "0.85rem", marginTop: "0.25rem", textAlign: "center", fontFamily: "'Space Grotesk', sans-serif" }}>
              Failed to send. Please try again or use direct email.
            </p>
          )}
        </form>   </div>
    </section>
  );
}