import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Nexastra Tech Solutions — our mission, approach to software development, and commitment to building practical, user-friendly digital products.",
};

const values = [
  {
    icon: "🎯",
    title: "User-First Thinking",
    desc: "Every decision starts with the user. We ask what users need to accomplish before we think about how to build it.",
  },
  {
    icon: "🏗️",
    title: "Maintainable Architecture",
    desc: "We write code that the next developer can understand. Clean structure, sensible patterns, and clear documentation.",
  },
  {
    icon: "🔍",
    title: "Honest Scope",
    desc: "We do not over-promise. We define clear, achievable goals and build toward them incrementally.",
  },
  {
    icon: "🌱",
    title: "Continuous Improvement",
    desc: "Products are never finished. We build, test, learn, and improve in short cycles rather than betting on big launches.",
  },
  {
    icon: "🤝",
    title: "Open Collaboration",
    desc: "We work well with clients, partners, and communities. Sharing knowledge and collaborating openly makes everyone better.",
  },
  {
    icon: "⚡",
    title: "Practical Over Perfect",
    desc: "A working product with rough edges is worth more than a perfect design that never ships. We value momentum.",
  },
];

const approach = [
  {
    step: "01",
    title: "Understand the Problem",
    desc: "Before writing code, we spend time understanding the real problem — who has it, why current solutions fall short, and what a genuinely useful solution looks like.",
  },
  {
    step: "02",
    title: "Define a Focused Scope",
    desc: "We cut scope aggressively to identify the minimum valuable product. Features that do not serve the core use case wait for later iterations.",
  },
  {
    step: "03",
    title: "Design With Purpose",
    desc: "We design interfaces around user goals, not visual trends. Every screen has a clear purpose, and every interaction should feel obvious to use.",
  },
  {
    step: "04",
    title: "Build Incrementally",
    desc: "We ship working software early and often. Real-world feedback shapes the product far more effectively than internal assumptions.",
  },
  {
    step: "05",
    title: "Test and Refine",
    desc: "We treat testing as a discovery tool, not just a quality gate. Watching real users interact with a product reveals problems no review process finds.",
  },
  {
    step: "06",
    title: "Maintain and Evolve",
    desc: "Software needs maintenance. We write code that can be understood and changed, so products can evolve without being rewritten from scratch.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section
        style={{
          padding: "100px 0 80px",
          background: "linear-gradient(180deg, #030710 0%, #05080f 100%)",
          position: "relative",
          overflow: "hidden",
        }}
        className="grid-bg"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "30%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="section-label" style={{ margin: "0 auto 24px" }}>About Us</div>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
            className="gradient-text-hero"
          >
            Who We Are
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(232,234,240,0.6)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Nexastra Tech Solutions is a product-focused software company building practical, accessible digital tools.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: "#05080f" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }} className="mv-grid">
            <div
              className="glass-card"
              style={{
                borderRadius: "20px",
                padding: "40px",
                borderTop: "3px solid #22d3ee",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(34,211,238,0.1)",
                  border: "1px solid rgba(34,211,238,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                }}
              >
                🎯
              </div>
              <h2 style={{ fontSize: "1.4rem", color: "#e8eaf0", marginBottom: "16px", fontWeight: 700 }}>Our Mission</h2>
              <p style={{ color: "rgba(232,234,240,0.65)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                To build digital products that are genuinely useful — software that solves real problems for real people, built with care for quality, usability, and maintainability. We believe useful software does not have to be complicated, and that good engineering and thoughtful design are inseparable.
              </p>
            </div>

            <div
              className="glass-card"
              style={{
                borderRadius: "20px",
                padding: "40px",
                borderTop: "3px solid #a78bfa",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(167,139,250,0.1)",
                  border: "1px solid rgba(167,139,250,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                }}
              >
                🌟
              </div>
              <h2 style={{ fontSize: "1.4rem", color: "#e8eaf0", marginBottom: "16px", fontWeight: 700 }}>Our Vision</h2>
              <p style={{ color: "rgba(232,234,240,0.65)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                To be a company known for building software that works — not just technically, but for the people using it. We want to create products that remove friction from people&#39;s lives and give them better tools for the work they already do every day.
              </p>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .mv-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section" style={{ background: "#030710" }}>
        <div className="container">
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div className="section-label" style={{ marginBottom: "24px" }}>Our Story</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#e8eaf0", marginBottom: "28px" }}>
              An Independent, Product-Focused Software Company
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                "Nexastra Tech Solutions was founded on a simple premise: software should serve users, not impress engineers. We focus on building products that are practical, accessible, and maintainable over time.",
                "We work across mobile, web, and AI — building with Flutter, React, Next.js, Node.js, and the tools that best fit each problem. Our current projects include VoiceLedger AI (personal finance), HueCart (e-commerce), ScanSell POS (retail), and JobWing AI (career development).",
                "We are independent and product-driven. We do not claim credits we have not earned or inflate what we have built. We are at an early stage, building real things with care for quality and user experience.",
                "We are open to collaborations, freelance work, and partnerships with people who care about building software that actually works.",
              ].map((text, i) => (
                <p key={i} style={{ color: "rgba(232,234,240,0.65)", lineHeight: 1.85, fontSize: "0.975rem" }}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section" style={{ background: "#05080f" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-label">Our Values</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#e8eaf0" }}>
              What We Believe In
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="glass-card glass-card-hover" style={{ borderRadius: "16px", padding: "24px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "12px" }}>{v.icon}</div>
                <h3 style={{ fontSize: "1rem", color: "#e8eaf0", fontWeight: 700, marginBottom: "8px" }}>{v.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(232,234,240,0.55)", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 900px) { .values-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 560px) { .values-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section" style={{ background: "#030710" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-label">How We Work</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#e8eaf0" }}>
              Our Approach to Software Development
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }} className="approach-grid">
            {approach.map((step) => (
              <div key={step.step} className="glass-card glass-card-hover" style={{ borderRadius: "16px", padding: "28px", display: "flex", gap: "20px" }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(34,211,238,0.1)",
                    border: "1px solid rgba(34,211,238,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#22d3ee",
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {step.step}
                </div>
                <div>
                  <h3 style={{ fontSize: "1rem", color: "#e8eaf0", fontWeight: 700, marginBottom: "8px" }}>{step.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "rgba(232,234,240,0.55)", lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 768px) { .approach-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background: "#05080f" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: "#e8eaf0", marginBottom: "16px" }}>
            Want to Work With Us?
          </h2>
          <p style={{ color: "rgba(232,234,240,0.55)", marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px", lineHeight: 1.7 }}>
            We are open to freelance work, collaborations, and product partnerships. Get in touch and let&#39;s talk.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Contact Us</Link>
            <Link href="/services" className="btn-secondary">View Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
