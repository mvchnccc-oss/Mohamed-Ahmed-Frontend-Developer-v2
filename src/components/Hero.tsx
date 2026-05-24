"use client";
import { useState, useEffect } from "react";
// استيراد الأيقونات المضمونة من لوكيد لتوزيعها على المدارات المنفصلة
import { Atom, Code2, Cpu, Terminal } from "lucide-react";
import MohamedAhmed from "../assets/Mohamed ahmed.png"
export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" style={{
      background: "#020209",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "6rem 2rem 4rem",
      overflow: "hidden",
      position: "relative"
    }}>

      <style>{`
        /* أنيميشن الدوران للمدارات المختلفة */
        @keyframes orbit-clockwise {
          0% { transform: rotateZ(0deg); }
          100% { transform: rotateZ(360deg); }
        }
        @keyframes orbit-counter {
          0% { transform: rotateZ(360deg); }
          100% { transform: rotateZ(0deg); }
        }
        
        /* أنيميشن الحفاظ على اعتدال الأيقونة وضبط توازن الأبعاد 3D */
        @keyframes keep-upright-1 {
          0% { transform: rotateZ(0deg) rotateX(-65deg) rotateY(-10deg); }
          100% { transform: rotateZ(-360deg) rotateX(-65deg) rotateY(-10deg); }
        }
        @keyframes keep-upright-2 {
          0% { transform: rotateZ(-360deg) rotateX(-55deg) rotateY(20deg); }
          100% { transform: rotateZ(0deg) rotateX(-55deg) rotateY(20deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); filter: drop-shadow(0 0 10px rgba(99,102,241,0.2)); }
          50% { transform: translateY(-10px); filter: drop-shadow(0 0 20px rgba(56,189,248,0.4)); }
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          max-width: 1280px;
          width: 100%;
          align-items: center;
          z-index: 5;
        }

        /* مسرح الـ 3D للأيقونات */
        .universe-stage {
          position: relative;
          width: 450px;
          height: 450px;
          display: flex;
          justifyContent: center;
          align-items: center;
          perspective: 1200px;
        }

        /* المدار الأول: داخلي وصغير */
        .orbit-inner {
          position: absolute;
          width: 240px;
          height: 240px;
          border: 1px dashed rgba(56, 189, 248, 0.15);
          border-radius: 50%;
          transform-style: preserve-3d;
          transform: rotateX(65deg) rotateY(10deg);
          animation: orbit-clockwise 14s linear infinite;
        }

        /* المدار الثاني: أوسط ومايل باتجاه عكسي */
        .orbit-mid {
          position: absolute;
          width: 340px;
          height: 340px;
          border: 1px dashed rgba(99, 102, 241, 0.2);
          border-radius: 50%;
          transform-style: preserve-3d;
          transform: rotateX(55deg) rotateY(-20deg);
          animation: orbit-counter 18s linear infinite;
        }

        /* المدار الثالث: خارجي كبير وعريض */
        .orbit-outer {
          position: absolute;
          width: 440px;
          height: 440px;
          border: 1px dashed rgba(129, 140, 248, 0.1);
          border-radius: 50%;
          transform-style: preserve-3d;
          transform: rotateX(70deg) rotateY(5deg);
          animation: orbit-clockwise 25s linear infinite;
        }

        /* قاعدة تثبيت الحاوية على حافة المدار */
        .satellite-node {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 48px; /* تكبير بسيط جداً لراحة العين */
          height: 48px;
          margin: -24px;
        }

        @media (max-width: 968px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 4rem;
          }
          .right-side-universe {
            order: -1;
          }
          .universe-stage {
            width: 320px;
            height: 320px;
          }
          .orbit-inner { width: 180px; height: 180px; }
          .orbit-mid { width: 250px; height: 250px; }
          .orbit-outer { width: 320px; height: 320px; }
        }
      `}</style>

      {/* توهج خلفي ديناميكي */}
      <div style={{
        position: "absolute", top: "20%", left: "5%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "rgba(99, 102, 241, 0.1)", filter: "blur(120px)",
        pointerEvents: "none"
      }} />

      // ابحث عن الحاوية دي وعدلها بالشكل ده:
      <div className="hero-container" style={{
        opacity: mounted ? "1" : "0", // تحويلها إلى string
        transform: mounted ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
      }}>

        {/* نصوص الـ Hero */}
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.4rem 1rem", borderRadius: "999px",
            background: "rgba(99, 102, 241, 0.08)", border: "1px solid rgba(99, 102, 241, 0.15)",
            color: "#818cf8", fontSize: "0.78rem", fontWeight: 700,
            letterSpacing: "0.05em", fontFamily: "'Space Grotesk', sans-serif",
            textTransform: "uppercase", marginBottom: "1.5rem"
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" }} />
            Available For Opportunities
          </div>

          <h1 style={{
            fontSize: "clamp(2.3rem, 4.5vw, 4rem)", fontWeight: 900,
            lineHeight: 1.15, color: "#f1f5f9", fontFamily: "'Syne', sans-serif",
            letterSpacing: "-0.03em", marginBottom: "1.5rem"
          }}>
            Building High-Performance <span style={{ background: "linear-gradient(135deg, #818cf8, #38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Full-Stack</span> Web Apps
          </h1>

          <p style={{
            color: "#94a3b8", fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
            lineHeight: 1.7, maxWidth: "560px", marginBottom: "2.5rem",
            fontFamily: "'Space Grotesk', sans-serif"
          }}>
            I am <span style={{ color: "#f1f5f9", fontWeight: 600 }}>Mohamed Ahmed Shehata</span>.
            A Software Engineer specialized in creating fast responsive frontends with <span style={{ color: "#818cf8" }}>Next.js & React</span>,
            backed by robust enterprise backend services using <span style={{ color: "#38bdf8" }}>Java Spring Boot</span>.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "inherit" }}>
            <a href="#projects" style={{
              display: "inline-flex", alignItems: "center", padding: "0.85rem 1.8rem",
              borderRadius: "999px", background: "linear-gradient(135deg, #6366f1, #4f46e5)",
              color: "#fff", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none",
              fontFamily: "'Space Grotesk', sans-serif", boxShadow: "0 4px 20px rgba(99, 102, 241, 0.25)",
              transition: "transform 0.2s"
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              View My Work
            </a>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", padding: "0.85rem 1.8rem",
              borderRadius: "999px", background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)", color: "#94a3b8",
              fontWeight: 600, fontSize: "0.9rem", textDecoration: "none",
              fontFamily: "'Space Grotesk', sans-serif", transition: "all 0.2s"
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.color = "#f1f5f9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.color = "#94a3b8";
              }}
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* الجانب الأيمن: الكون المداري مع إضافة النيون شادوز وإجبار الأبعاد الهندسية المربعة */}
        <div className="right-side-universe" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="universe-stage">

            {/* 1. المدار الداخلي (يحمل أيقونة React) */}
            <div className="orbit-inner">
              <div className="satellite-node" style={{ transform: `translate(120px)` }}>
                <div style={{
                  width: "100%", height: "100%", borderRadius: "12px",
                  background: "rgba(6, 6, 16, 0.95)", border: "1px solid rgba(56, 189, 248, 0.4)",
                  color: "#61DAFB", display: "flex", alignItems: "center", justifyContent: "center",
                  aspectRatio: "1/1", // حماية الـ Aspect Ratio من الانضغاط الرأسي
                  animation: "keep-upright-1 14s linear infinite",
                  // إضافة التوهج النيون بلون الـ React
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.6), 0 0 15px rgba(97, 218, 251, 0.35)",
                  filter: "drop-shadow(0 0 8px rgba(97, 218, 251, 0.2))"
                }}>
                  <Atom size={22} className="animate-pulse" />
                </div>
              </div>
            </div>

            {/* 2. المدار الأوسط (يحمل أيقونة ترمز لـ Next.js / Frontend) */}
            <div className="orbit-mid">
              <div className="satellite-node" style={{ transform: `translate(-170px)` }}>
                <div style={{
                  width: "100%", height: "100%", borderRadius: "12px",
                  background: "rgba(6, 6, 16, 0.95)", border: "1px solid rgba(255, 255, 255, 0.25)",
                  color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center",
                  aspectRatio: "1/1",
                  animation: "keep-upright-2 18s linear infinite",
                  // إضافة توهج أبيض ثلجي رائع لـ Next.js
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.6), 0 0 15px rgba(255, 255, 255, 0.2)",
                  filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.15))"
                }}>
                  <Terminal size={20} />
                </div>
              </div>

              {/* أيقونة ثانية في نفس المدار الأوسط (TypeScript) */}
              <div className="satellite-node" style={{ transform: `translate(170px)` }}>
                <div style={{
                  width: "100%", height: "100%", borderRadius: "12px",
                  background: "rgba(6, 6, 16, 0.95)", border: "1px solid rgba(49, 120, 198, 0.4)",
                  color: "#3178C6", display: "flex", alignItems: "center", justifyContent: "center",
                  aspectRatio: "1/1",
                  animation: "keep-upright-2 18s linear infinite",
                  // توهج أزرق داكن لـ TypeScript
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.6), 0 0 15px rgba(49, 120, 198, 0.35)",
                  filter: "drop-shadow(0 0 8px rgba(49, 120, 198, 0.2))"
                }}>
                  <Code2 size={20} />
                </div>
              </div>
            </div>

            {/* 3. المدار الخارجي (يحمل أيقونة ترمز للـ Java / Backend) */}
            <div className="orbit-outer">
              <div className="satellite-node" style={{ transform: `translate(220px)` }}>
                <div style={{
                  width: "100%", height: "100%", borderRadius: "12px",
                  background: "rgba(6, 6, 16, 0.95)", border: "1px solid rgba(231, 111, 81, 0.4)",
                  color: "#E76F51", display: "flex", alignItems: "center", justifyContent: "center",
                  aspectRatio: "1/1",
                  animation: "keep-upright-1 25s linear infinite",
                  // توهج برتقالي ناري دافئ لـ Java
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.6), 0 0 15px rgba(231, 111, 81, 0.35)",
                  filter: "drop-shadow(0 0 8px rgba(231, 111, 81, 0.2))"
                }}>
                  <Cpu size={20} />
                </div>
              </div>
            </div>

            {/* صورة البروفايل المركزية */}
            <div style={{
              position: "relative", width: "190px", height: "190px",
              borderRadius: "50%", padding: "6px", zIndex: 10,
              background: "linear-gradient(135deg, rgba(129, 140, 248, 0.3), rgba(56, 189, 248, 0.15))",
              boxShadow: "0 15px 45px rgba(0,0,0,0.6)",
              animation: "float-slow 5s ease-in-out infinite"
            }}>
              <div style={{
                width: "100%", height: "100%", borderRadius: "50%",
                overflow: "hidden", background: "#060612", position: "relative"
              }}>
                <img
                  src={MohamedAhmed}
                  alt="Mohamed Ahmed"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, transparent 70%, rgba(2, 2, 9, 0.5) 100%)"
                }} />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}