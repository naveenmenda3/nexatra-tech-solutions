import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on mobile development, software architecture, AI in software, and product development from Nexastra Tech Solutions.",
};

const categoryColors: Record<string, string> = {
  "Mobile Development": "#22d3ee",
  "Software Architecture": "#a78bfa",
  "AI & Technology": "#34d399",
  "Product Development": "#f59e0b",
};

export default function BlogPage() {
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
            left: "20%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="section-label" style={{ margin: "0 auto 24px" }}>Blog</div>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
            className="gradient-text-hero"
          >
            Thoughts & Articles
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
            Practical writing on mobile development, software architecture, AI, and product thinking.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="section-sm" style={{ background: "#05080f" }}>
        <div className="container">
          <Link href={`/blog/${blogPosts[0].slug}`} style={{ textDecoration: "none" }}>
            <div
              className="glass-card glass-card-hover featured-grid"
              style={{
                borderRadius: "24px",
                padding: "48px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "48px",
                alignItems: "center",
                borderTop: "3px solid #22d3ee",
                cursor: "pointer",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: categoryColors[blogPosts[0].category] || "#22d3ee",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      padding: "4px 12px",
                      background: `${categoryColors[blogPosts[0].category] || "#22d3ee"}15`,
                      border: `1px solid ${categoryColors[blogPosts[0].category] || "#22d3ee"}30`,
                      borderRadius: "6px",
                    }}
                  >
                    {blogPosts[0].category}
                  </span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "#22d3ee",
                      padding: "4px 12px",
                      background: "rgba(34,211,238,0.08)",
                      border: "1px solid rgba(34,211,238,0.2)",
                      borderRadius: "6px",
                    }}
                  >
                    Featured
                  </span>
                </div>
                <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", color: "#e8eaf0", fontWeight: 700, lineHeight: 1.3, marginBottom: "16px" }}>
                  {blogPosts[0].title}
                </h2>
                <p style={{ color: "rgba(232,234,240,0.6)", lineHeight: 1.8, marginBottom: "24px", fontSize: "0.95rem" }}>
                  {blogPosts[0].summary}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <span style={{ fontSize: "0.82rem", color: "rgba(232,234,240,0.4)" }}>{blogPosts[0].date}</span>
                  <span style={{ fontSize: "0.82rem", color: "rgba(232,234,240,0.4)" }}>·</span>
                  <span style={{ fontSize: "0.82rem", color: "rgba(232,234,240,0.4)" }}>{blogPosts[0].readTime}</span>
                </div>
              </div>
              <div
                style={{
                  background: "rgba(34,211,238,0.04)",
                  borderRadius: "16px",
                  border: "1px solid rgba(34,211,238,0.12)",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {/* Article preview lines */}
                {[80, 100, 65, 90, 75, 100, 55, 85].map((w, i) => (
                  <div
                    key={i}
                    style={{
                      height: "8px",
                      borderRadius: "4px",
                      background: i === 0 ? "rgba(34,211,238,0.5)" : "rgba(232,234,240,0.1)",
                      width: `${w}%`,
                    }}
                  />
                ))}
              </div>
              <style>{`
                @media (max-width: 768px) {
                  .featured-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
                  .featured-grid > div:last-child { display: none !important; }
                }
              `}</style>
            </div>
          </Link>
        </div>
      </section>

      {/* All posts */}
      <section className="section" style={{ background: "#030710" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.4rem", color: "#e8eaf0", fontWeight: 700, marginBottom: "32px" }}>
            All Articles
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="posts-grid">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <div
                  className="glass-card glass-card-hover"
                  style={{
                    borderRadius: "16px",
                    padding: "28px",
                    cursor: "pointer",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ marginBottom: "16px" }}>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: categoryColors[post.category] || "#22d3ee",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        padding: "3px 10px",
                        background: `${categoryColors[post.category] || "#22d3ee"}12`,
                        border: `1px solid ${categoryColors[post.category] || "#22d3ee"}25`,
                        borderRadius: "4px",
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.02rem", color: "#e8eaf0", fontWeight: 700, lineHeight: 1.4, marginBottom: "12px", flex: 1 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "rgba(232,234,240,0.5)", lineHeight: 1.7, marginBottom: "20px" }}>
                    {post.summary}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.78rem", color: "rgba(232,234,240,0.35)" }}>{post.date}</span>
                    <span style={{ fontSize: "0.78rem", color: "rgba(232,234,240,0.35)" }}>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <style>{`
            @media (max-width: 900px) { .posts-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 560px) { .posts-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>
    </>
  );
}
