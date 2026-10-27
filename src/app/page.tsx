import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Nexastra Tech Solutions — Turning Ideas Into Useful Digital Products",
  description:
    "We design and develop mobile apps, web platforms, and AI-powered solutions that solve real-world problems. Based on real user needs.",
};

const services = [
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps built with Flutter for iOS and Android. Fast, reliable, and designed for real users.",
  },
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Modern web applications built with React and Next.js. Clean architecture, great performance, and responsive on every screen.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Applications",
    desc: "Software that uses AI and LLM APIs to automate workflows, understand language, and surface intelligent insights.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "User interfaces that are clear, intuitive, and well-crafted. We design around user goals, not just visual trends.",
  },
  {
    icon: "⚙️",
    title: "Backend & API Integration",
    desc: "Scalable backend services with Node.js, NestJS, and Express. RESTful APIs and database integrations built to last.",
  },
  {
    icon: "🔧",
    title: "Software Optimization",
    desc: "Performance audits, refactoring, and improvements to existing software. Make what you have work faster and better.",
  },
];

const techStack = [
  { category: "Mobile", items: ["Flutter", "Dart"] },
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript"] },
  { category: "Backend", items: ["Node.js", "NestJS", "Express.js", "Java", "Spring Boot"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Supabase"] },
  { category: "AI", items: ["LLM APIs", "AI Workflows"] },
  { category: "Cloud & Tools", items: ["AWS", "Firebase", "Docker", "Git", "GitHub"] },
];

const opportunities = [
  { icon: "🤝", title: "Development Collaborations", desc: "Partner with us on software projects that need additional technical expertise." },
  { icon: "💼", title: "Freelance & Contract Work", desc: "Hire us for scoped projects — from MVPs to production-ready features." },
  { icon: "💡", title: "Product Ideas & Partnerships", desc: "Have an idea worth building? Let's explore it together." },
  { icon: "👩‍💻", title: "Internship Opportunities", desc: "Junior developers and interns who want to build real products are welcome." },
  { icon: "🌱", title: "Open-Source Collaboration", desc: "We're open to collaborating on open-source tools and shared developer resources." },
];

function StatusBadge({ status, label }: { status: string; label: string }) {
  const cls =
    status === "active"
      ? "badge-active"
      : status === "concept"
      ? "badge-concept"
      : "badge-dev";
  return <span className={cls}>{label}</span>;
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, #030710 0%, #05080f 60%, #08101e 100%)",
        }}
        className="grid-bg"
      >
        {/* Glow orbs */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1, padding: "80px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="hero-grid">
            {/* Left */}
            <div>
              <div className="section-label" style={{ marginBottom: "28px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22d3ee", display: "inline-block" }} />
                Software & Product Development
              </div>
              <h1
                style={{
                  fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  marginBottom: "24px",
                  letterSpacing: "-0.03em",
                }}
              >
                <span className="gradient-text-hero">We Build Digital Products</span>
                <br />
                <span style={{ color: "rgba(232,234,240,0.9)" }}>That Move Ideas Forward.</span>
              </h1>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "rgba(232,234,240,0.65)",
                  lineHeight: 1.7,
                  marginBottom: "40px",
                  maxWidth: "480px",
                }}
              >
                We design and develop mobile apps, web platforms, and AI-powered solutions that solve real-world problems.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/projects" className="btn-primary">
                  Explore Our Projects
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right — Product illustration */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <HeroIllustration />
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; }
            .hero-grid > div:last-child { order: -1; }
          }
        `}</style>
      </section>

      {/* ── WHAT WE DO ───────────────────────────────────── */}
      <section className="section" style={{ background: "#05080f" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-label">What We Do</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#e8eaf0", marginBottom: "16px" }}>
              Our Core Services
            </h2>
            <p style={{ color: "rgba(232,234,240,0.55)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              We work across the full stack — from idea and design to development and deployment.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
            className="services-grid"
          >
            {services.map((s) => (
              <div key={s.title} className="glass-card glass-card-hover" style={{ borderRadius: "16px", padding: "28px" }}>
                <div style={{ fontSize: "2rem", marginBottom: "16px" }}>{s.icon}</div>
                <h3 style={{ fontSize: "1.05rem", color: "#e8eaf0", marginBottom: "10px", fontWeight: 700 }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(232,234,240,0.55)", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 560px) { .services-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* ── OUR PROJECTS ─────────────────────────────────── */}
      <section className="section" style={{ background: "#030710" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-label">Our Projects</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#e8eaf0", marginBottom: "16px" }}>
              What We Are Building
            </h2>
            <p style={{ color: "rgba(232,234,240,0.55)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              A focused set of products, each solving a specific real-world problem.
            </p>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}
            className="projects-grid"
          >
            {projects.map((p) => (
              <div
                key={p.id}
                id={p.id}
                className="glass-card glass-card-hover"
                style={{ borderRadius: "20px", padding: "32px", position: "relative", overflow: "hidden" }}
              >
                {/* Color accent top line */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: p.color, borderRadius: "20px 20px 0 0" }} />
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "14px",
                        background: `${p.color}18`,
                        border: `1px solid ${p.color}35`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        flexShrink: 0,
                      }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1.15rem", color: "#e8eaf0", fontWeight: 700, marginBottom: "4px" }}>{p.name}</h3>
                      <p style={{ fontSize: "0.8rem", color: "rgba(232,234,240,0.45)" }}>{p.tagline}</p>
                    </div>
                  </div>
                  <StatusBadge status={p.status} label={p.statusLabel} />
                </div>
                <p style={{ fontSize: "0.875rem", color: "rgba(232,234,240,0.6)", lineHeight: 1.75, marginBottom: "20px" }}>
                  {p.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {p.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/projects" className="btn-outline-teal">
              View All Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
          <style>{`
            @media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* ── TECHNOLOGIES ─────────────────────────────────── */}
      <section className="section" style={{ background: "#05080f" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-label">Tech Stack</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#e8eaf0", marginBottom: "16px" }}>
              Technologies We Work With
            </h2>
            <p style={{ color: "rgba(232,234,240,0.55)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              Our toolkit spans mobile, web, backend, databases, AI, and cloud infrastructure.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="tech-grid">
            {techStack.map((cat) => (
              <div key={cat.category} className="glass-card" style={{ borderRadius: "14px", padding: "24px" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#22d3ee", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "14px" }}>
                  {cat.category}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        padding: "5px 12px",
                        background: "rgba(232,234,240,0.06)",
                        border: "1px solid rgba(232,234,240,0.1)",
                        borderRadius: "6px",
                        fontSize: "0.82rem",
                        color: "rgba(232,234,240,0.75)",
                        fontWeight: 500,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 900px) { .tech-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 560px) { .tech-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* ── ABOUT NEXASTRA ────────────────────────────────── */}
      <section className="section" style={{ background: "#030710" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
            }}
            className="about-grid"
          >
            {/* Visual side */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  maxWidth: "420px",
                  margin: "0 auto",
                  background: "linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(139,92,246,0.06) 100%)",
                  borderRadius: "24px",
                  border: "1px solid rgba(34,211,238,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "40px",
                }}
              >
                <AboutIllustration />
              </div>
            </div>

            {/* Text side */}
            <div>
              <div className="section-label">About Nexastra</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)", color: "#e8eaf0", marginBottom: "20px" }}>
                Practical Software, Thoughtful Design
              </h2>
              <p style={{ color: "rgba(232,234,240,0.65)", lineHeight: 1.8, marginBottom: "16px", fontSize: "0.95rem" }}>
                Nexastra Tech Solutions is a product-focused software company building digital tools that are useful, accessible, and maintainable. We care about getting the fundamentals right — clean architecture, honest UX, and reliable performance.
              </p>
              <p style={{ color: "rgba(232,234,240,0.55)", lineHeight: 1.8, marginBottom: "32px", fontSize: "0.9rem" }}>
                We build with modern stacks across mobile, web, and AI, always prioritizing user needs over technical complexity. Every product we work on starts with a clear understanding of the problem it is trying to solve.
              </p>
              <Link href="/about" className="btn-primary">
                Learn About Us
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
          `}</style>
        </div>
      </section>

      {/* ── WHAT WE ARE LOOKING FOR ───────────────────────── */}
      <section className="section" style={{ background: "#05080f" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-label">Opportunities</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#e8eaf0", marginBottom: "16px" }}>
              What We Are Looking For
            </h2>
            <p style={{ color: "rgba(232,234,240,0.55)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              We are open to a range of collaborations — from project partnerships to open-source work.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="opp-grid">
            {opportunities.map((opp) => (
              <div key={opp.title} className="glass-card glass-card-hover" style={{ borderRadius: "16px", padding: "24px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "12px" }}>{opp.icon}</div>
                <h3 style={{ fontSize: "1rem", color: "#e8eaf0", fontWeight: 700, marginBottom: "8px" }}>{opp.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(232,234,240,0.55)", lineHeight: 1.7 }}>{opp.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/contact" className="btn-primary">
              Let&#39;s Connect
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
          <style>{`
            @media (max-width: 900px) { .opp-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 560px) { .opp-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* ── LATEST BLOGS ─────────────────────────────────── */}
      <section className="section" style={{ background: "#030710" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <div className="section-label">Blog</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#e8eaf0" }}>Latest Articles</h2>
            </div>
            <Link href="/blog" className="btn-outline-teal" style={{ padding: "9px 20px", fontSize: "0.875rem" }}>
              View All Articles →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="blog-grid">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="glass-card glass-card-hover"
                  style={{ borderRadius: "16px", padding: "28px", height: "100%", cursor: "pointer" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "#22d3ee",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        padding: "3px 10px",
                        background: "rgba(34,211,238,0.08)",
                        border: "1px solid rgba(34,211,238,0.15)",
                        borderRadius: "4px",
                      }}
                    >
                      {post.category}
                    </span>
                    <span style={{ fontSize: "0.78rem", color: "rgba(232,234,240,0.4)" }}>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: "1rem", color: "#e8eaf0", fontWeight: 700, lineHeight: 1.4, marginBottom: "12px" }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "rgba(232,234,240,0.5)", lineHeight: 1.7, marginBottom: "20px" }}>
                    {post.summary}
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "rgba(232,234,240,0.35)" }}>{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
          <style>{`
            @media (max-width: 900px) { .blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 560px) { .blog-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section
        style={{
          padding: "120px 0",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, #05080f 0%, #030710 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(6,182,212,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="section-label" style={{ margin: "0 auto 28px" }}>Get In Touch</div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              marginBottom: "20px",
              letterSpacing: "-0.03em",
            }}
            className="gradient-text-hero"
          >
            Have an Idea Worth Building?
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(232,234,240,0.6)",
              maxWidth: "480px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Let&#39;s discuss your idea and explore how we can turn it into a useful digital product.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 36px" }}>
            Contact Us
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>
    </>
  );
}

/* ── Inline SVG Illustrations ────────────────────────── */

function HeroIllustration() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "460px",
        position: "relative",
      }}
      className="animate-float"
    >
      {/* Outer glow ring */}
      <div
        style={{
          position: "absolute",
          inset: "-20px",
          borderRadius: "28px",
          background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
        }}
      />
      {/* Main screen card */}
      <div
        style={{
          background: "linear-gradient(135deg, #0a1020 0%, #0f1730 100%)",
          borderRadius: "20px",
          border: "1px solid rgba(34,211,238,0.2)",
          padding: "28px",
          position: "relative",
          boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(6,182,212,0.08)",
        }}
      >
        {/* Window controls */}
        <div style={{ display: "flex", gap: "7px", marginBottom: "20px" }}>
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div key={c} style={{ width: "12px", height: "12px", borderRadius: "50%", background: c }} />
          ))}
        </div>
        {/* Code-like lines */}
        {[
          { w: "40%", color: "#22d3ee", indent: 0 },
          { w: "70%", color: "rgba(232,234,240,0.4)", indent: 16 },
          { w: "55%", color: "rgba(232,234,240,0.4)", indent: 16 },
          { w: "35%", color: "#a78bfa", indent: 32 },
          { w: "60%", color: "rgba(232,234,240,0.4)", indent: 32 },
          { w: "45%", color: "#34d399", indent: 16 },
          { w: "30%", color: "rgba(232,234,240,0.4)", indent: 0 },
        ].map((line, i) => (
          <div
            key={i}
            style={{
              height: "10px",
              borderRadius: "5px",
              background: line.color,
              width: line.w,
              marginLeft: line.indent,
              marginBottom: "10px",
              opacity: 0.8,
            }}
          />
        ))}
        {/* Mini cards row */}
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          {[
            { c: "#22d3ee", label: "Mobile" },
            { c: "#a78bfa", label: "Web" },
            { c: "#34d399", label: "AI" },
          ].map((card) => (
            <div
              key={card.label}
              style={{
                flex: 1,
                background: `${card.c}12`,
                border: `1px solid ${card.c}30`,
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: `${card.c}25`, margin: "0 auto 6px", border: `1px solid ${card.c}40` }} />
              <p style={{ fontSize: "0.7rem", color: card.c, fontWeight: 600 }}>{card.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge 1 */}
      <div
        style={{
          position: "absolute",
          top: "-16px",
          right: "-16px",
          background: "rgba(6,182,212,0.12)",
          border: "1px solid rgba(34,211,238,0.3)",
          borderRadius: "12px",
          padding: "10px 16px",
          backdropFilter: "blur(8px)",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "#22d3ee", fontWeight: 700 }}>✦ Product-First</p>
      </div>

      {/* Floating badge 2 */}
      <div
        style={{
          position: "absolute",
          bottom: "-12px",
          left: "-12px",
          background: "rgba(52,211,153,0.1)",
          border: "1px solid rgba(52,211,153,0.25)",
          borderRadius: "12px",
          padding: "10px 16px",
          backdropFilter: "blur(8px)",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "#34d399", fontWeight: 700 }}>⚡ Clean Code</p>
      </div>
    </div>
  );
}

function AboutIllustration() {
  return (
    <svg viewBox="0 0 300 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: "300px" }}>
      {/* Central hexagon */}
      <polygon points="150,40 210,75 210,145 150,180 90,145 90,75" fill="none" stroke="rgba(34,211,238,0.25)" strokeWidth="1.5" />
      <polygon points="150,60 195,85 195,135 150,160 105,135 105,85" fill="rgba(34,211,238,0.05)" stroke="rgba(34,211,238,0.15)" strokeWidth="1" />

      {/* Center icon */}
      <circle cx="150" cy="110" r="28" fill="rgba(6,182,212,0.1)" stroke="rgba(34,211,238,0.3)" strokeWidth="1.5" />
      <path d="M140 110L147 117L162 103" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

      {/* Orbit dots */}
      <circle cx="150" cy="40" r="6" fill="#22d3ee" opacity="0.9"/>
      <circle cx="210" cy="75" r="5" fill="#a78bfa" opacity="0.8"/>
      <circle cx="210" cy="145" r="5" fill="#34d399" opacity="0.8"/>
      <circle cx="150" cy="180" r="6" fill="#22d3ee" opacity="0.7"/>
      <circle cx="90" cy="145" r="5" fill="#f59e0b" opacity="0.8"/>
      <circle cx="90" cy="75" r="5" fill="#ec4899" opacity="0.7"/>

      {/* Labels */}
      <text x="150" y="30" textAnchor="middle" fill="#22d3ee" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">Mobile</text>
      <text x="228" y="78" textAnchor="start" fill="#a78bfa" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">Web</text>
      <text x="228" y="148" textAnchor="start" fill="#34d399" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">Backend</text>
      <text x="150" y="200" textAnchor="middle" fill="#22d3ee" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">Design</text>
      <text x="72" y="148" textAnchor="end" fill="#f59e0b" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">AI</text>
      <text x="72" y="78" textAnchor="end" fill="rgba(236,72,153,0.9)" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">Cloud</text>

      {/* Connecting lines */}
      <line x1="150" y1="46" x2="150" y2="82" stroke="rgba(34,211,238,0.2)" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="204" y1="80" x2="178" y2="95" stroke="rgba(167,139,250,0.2)" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="204" y1="140" x2="178" y2="125" stroke="rgba(52,211,153,0.2)" strokeWidth="1" strokeDasharray="3,3"/>

      {/* Bottom stats */}
      <rect x="40" y="220" width="65" height="40" rx="8" fill="rgba(34,211,238,0.06)" stroke="rgba(34,211,238,0.15)" strokeWidth="1"/>
      <text x="72" y="237" textAnchor="middle" fill="#22d3ee" fontSize="14" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">4+</text>
      <text x="72" y="252" textAnchor="middle" fill="rgba(232,234,240,0.4)" fontSize="8" fontFamily="Inter, sans-serif">Projects</text>

      <rect x="118" y="220" width="65" height="40" rx="8" fill="rgba(167,139,250,0.06)" stroke="rgba(167,139,250,0.15)" strokeWidth="1"/>
      <text x="150" y="237" textAnchor="middle" fill="#a78bfa" fontSize="14" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">6+</text>
      <text x="150" y="252" textAnchor="middle" fill="rgba(232,234,240,0.4)" fontSize="8" fontFamily="Inter, sans-serif">Services</text>

      <rect x="196" y="220" width="65" height="40" rx="8" fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.15)" strokeWidth="1"/>
      <text x="228" y="237" textAnchor="middle" fill="#34d399" fontSize="14" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">10+</text>
      <text x="228" y="252" textAnchor="middle" fill="rgba(232,234,240,0.4)" fontSize="8" fontFamily="Inter, sans-serif">Technologies</text>
    </svg>
  );
}
