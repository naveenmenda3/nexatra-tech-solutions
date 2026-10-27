import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.summary,
  };
}

const categoryColors: Record<string, string> = {
  "Mobile Development": "#22d3ee",
  "Software Architecture": "#a78bfa",
  "AI & Technology": "#34d399",
  "Product Development": "#f59e0b",
};

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          style={{
            fontSize: "1.4rem",
            color: "#e8eaf0",
            fontWeight: 700,
            marginTop: "40px",
            marginBottom: "16px",
            letterSpacing: "-0.02em",
          }}
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          style={{
            fontSize: "1.15rem",
            color: "#e8eaf0",
            fontWeight: 700,
            marginTop: "28px",
            marginBottom: "12px",
          }}
        >
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      // Collect consecutive list items
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul
          key={`ul-${i}`}
          style={{
            margin: "12px 0 20px",
            paddingLeft: "0",
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {items.map((item, j) => (
            <li
              key={j}
              style={{
                color: "rgba(232,234,240,0.7)",
                fontSize: "0.975rem",
                lineHeight: 1.7,
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <span style={{ color: "#22d3ee", marginTop: "6px", flexShrink: 0 }}>▸</span>
              <span dangerouslySetInnerHTML={{ __html: renderInline(item) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      elements.push(
        <p
          key={i}
          style={{
            color: "rgba(232,234,240,0.7)",
            fontSize: "0.975rem",
            lineHeight: 1.85,
            marginBottom: "16px",
          }}
          dangerouslySetInnerHTML={{ __html: renderInline(line) }}
        />
      );
    }
    i++;
  }

  return elements;
}

function renderInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#e8eaf0;font-weight:700">$1</strong>')
    .replace(/`(.+?)`/g, '<code style="background:rgba(34,211,238,0.1);color:#22d3ee;padding:2px 6px;border-radius:4px;font-family:monospace;font-size:0.9em">$1</code>');
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const color = categoryColors[post.category] || "#22d3ee";
  const otherPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      {/* Article Header */}
      <section
        style={{
          padding: "100px 0 60px",
          background: "linear-gradient(180deg, #030710 0%, #05080f 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "300px",
            background: `radial-gradient(ellipse, ${color}12 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
          <Link href="/blog" className="back-link">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to Blog
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: color,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                padding: "4px 12px",
                background: `${color}12`,
                border: `1px solid ${color}30`,
                borderRadius: "6px",
              }}
            >
              {post.category}
            </span>
            <span style={{ fontSize: "0.82rem", color: "rgba(232,234,240,0.4)" }}>{post.date}</span>
            <span style={{ fontSize: "0.82rem", color: "rgba(232,234,240,0.3)" }}>·</span>
            <span style={{ fontSize: "0.82rem", color: "rgba(232,234,240,0.4)" }}>{post.readTime}</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              color: "#e8eaf0",
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(232,234,240,0.6)",
              lineHeight: 1.7,
            }}
          >
            {post.summary}
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section style={{ padding: "60px 0 80px", background: "#05080f" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div
            style={{
              background: "rgba(14,20,37,0.5)",
              border: "1px solid rgba(34,211,238,0.08)",
              borderRadius: "20px",
              padding: "48px",
            }}
            className="article-body"
          >
            {renderMarkdown(post.content)}
          </div>
          <style>{`
            @media (max-width: 768px) { .article-body { padding: 28px 20px !important; } }
          `}</style>
        </div>
      </section>

      {/* More articles */}
      <section className="section" style={{ background: "#030710" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.4rem", color: "#e8eaf0", fontWeight: 700, marginBottom: "32px" }}>
            More Articles
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="more-grid">
            {otherPosts.map((p) => (
              <Link key={p.id} href={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                <div className="glass-card glass-card-hover" style={{ borderRadius: "14px", padding: "24px", cursor: "pointer" }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: categoryColors[p.category] || "#22d3ee",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      padding: "3px 10px",
                      background: `${categoryColors[p.category] || "#22d3ee"}10`,
                      border: `1px solid ${categoryColors[p.category] || "#22d3ee"}25`,
                      borderRadius: "4px",
                      marginBottom: "12px",
                    }}
                  >
                    {p.category}
                  </span>
                  <h3 style={{ fontSize: "0.95rem", color: "#e8eaf0", fontWeight: 700, lineHeight: 1.4, marginBottom: "8px" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: "rgba(232,234,240,0.4)" }}>{p.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
          <style>{`
            @media (max-width: 768px) { .more-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>
    </>
  );
}
