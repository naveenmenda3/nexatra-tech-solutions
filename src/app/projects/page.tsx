import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the projects built by Nexastra Tech Solutions: HueCart, VoiceLedger AI, JobWing AI, and ScanSell POS.",
};

function StatusBadge({ status, label }: { status: string; label: string }) {
  const cls =
    status === "active" ? "badge-active" : status === "concept" ? "badge-concept" : "badge-dev";
  return <span className={cls}>{label}</span>;
}

function ProjectIllustration({ project }: { project: (typeof projects)[0] }) {
  const color = project.color;

  if (project.id === "huecart") {
    return (
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
        <rect width="320" height="200" rx="12" fill="#0a1020"/>
        {/* Product grid */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const x = 20 + col * 100;
          const y = 20 + row * 90;
          const colors = ["#f59e0b", "#22d3ee", "#a78bfa", "#34d399", "#ec4899", "#06b6d4"];
          return (
            <g key={i}>
              <rect x={x} y={y} width="84" height="72" rx="8" fill={`${colors[i]}12`} stroke={`${colors[i]}30`} strokeWidth="1"/>
              <rect x={x + 10} y={y + 10} width="64" height="36" rx="6" fill={`${colors[i]}20`}/>
              <rect x={x + 8} y={y + 54} width="40" height="6" rx="3" fill={`${colors[i]}60`}/>
              <rect x={x + 8} y={y + 63} width="24" height="4" rx="2" fill="rgba(232,234,240,0.2)"/>
            </g>
          );
        })}
        {/* Cart badge */}
        <circle cx="296" cy="20" r="14" fill={color} opacity="0.9"/>
        <text x="296" y="25" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">2</text>
      </svg>
    );
  }

  if (project.id === "voiceledger") {
    return (
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
        <rect width="320" height="200" rx="12" fill="#0a1020"/>
        {/* Waveform */}
        {[6,14,22,10,30,18,26,12,8,24,16,28,10,20,14].map((h, i) => (
          <rect key={i} x={20 + i * 20} y={100 - h} width="10" height={h * 2} rx="5" fill={`${color}${i === 7 ? "ff" : "60"}`}/>
        ))}
        {/* Mic icon */}
        <circle cx="160" cy="155" r="22" fill={`${color}20`} stroke={`${color}50`} strokeWidth="1.5"/>
        <rect x="153" y="143" width="14" height="20" rx="7" fill={color} opacity="0.9"/>
        <path d="M148 161c0 6.6 5.4 12 12 12s12-5.4 12-12" stroke={color} strokeWidth="1.5" fill="none"/>
        <line x1="160" y1="173" x2="160" y2="177" stroke={color} strokeWidth="1.5"/>
        {/* Stats */}
        <rect x="20" y="170" width="80" height="22" rx="6" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.2)" strokeWidth="1"/>
        <text x="60" y="185" textAnchor="middle" fill="#22d3ee" fontSize="9" fontWeight="600">Income: ₹24k</text>
        <rect x="110" y="170" width="80" height="22" rx="6" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.2)" strokeWidth="1"/>
        <text x="150" y="185" textAnchor="middle" fill="#f87171" fontSize="9" fontWeight="600">Expense: ₹18k</text>
        <rect x="200" y="170" width="100" height="22" rx="6" fill="rgba(52,211,153,0.08)" stroke="rgba(52,211,153,0.2)" strokeWidth="1"/>
        <text x="250" y="185" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="600">Savings: ₹6k</text>
      </svg>
    );
  }

  if (project.id === "jobwing") {
    return (
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
        <rect width="320" height="200" rx="12" fill="#0a1020"/>
        {/* Resume card */}
        <rect x="20" y="20" width="130" height="160" rx="10" fill="rgba(167,139,250,0.06)" stroke="rgba(167,139,250,0.2)" strokeWidth="1"/>
        <rect x="32" y="32" width="50" height="6" rx="3" fill={`${color}80`}/>
        <rect x="32" y="44" width="80" height="4" rx="2" fill="rgba(232,234,240,0.2)"/>
        {[60,68,76,84,92,100,108,116,124,132,140].map((y, i) => (
          <rect key={y} x="32" y={y} width={[70,90,55,85,70,60,80,45,75,90,50][i]} height="4" rx="2" fill="rgba(232,234,240,0.15)"/>
        ))}
        {/* Score circle */}
        <circle cx="230" cy="80" r="45" fill="none" stroke="rgba(167,139,250,0.15)" strokeWidth="8"/>
        <circle cx="230" cy="80" r="45" fill="none" stroke={color} strokeWidth="8" strokeDasharray="220" strokeDashoffset="60" strokeLinecap="round" transform="rotate(-90 230 80)"/>
        <text x="230" y="76" textAnchor="middle" fill={color} fontSize="22" fontWeight="800">82</text>
        <text x="230" y="90" textAnchor="middle" fill="rgba(232,234,240,0.5)" fontSize="9">Match Score</text>
        {/* Tags */}
        {["Resume", "JD Match", "Interview"].map((tag, i) => (
          <rect key={tag} x={170 + i * 0} y={150 + i * 0} width="0" height="0" rx="0" fill="transparent"/>
        ))}
        <rect x="172" y="148" width="52" height="18" rx="6" fill={`${color}15`} stroke={`${color}30`} strokeWidth="1"/>
        <text x="198" y="161" textAnchor="middle" fill={color} fontSize="8" fontWeight="600">AI Analysis</text>
        <rect x="232" y="148" width="58" height="18" rx="6" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.25)" strokeWidth="1"/>
        <text x="261" y="161" textAnchor="middle" fill="#22d3ee" fontSize="8" fontWeight="600">Job Matching</text>
      </svg>
    );
  }

  // ScanSell POS
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
      <rect width="320" height="200" rx="12" fill="#0a1020"/>
      {/* POS screen */}
      <rect x="20" y="15" width="160" height="120" rx="10" fill="rgba(52,211,153,0.05)" stroke="rgba(52,211,153,0.2)" strokeWidth="1"/>
      {/* Cart items */}
      {["Milk 500ml", "Bread", "Coffee"].map((item, i) => (
        <g key={item}>
          <rect x="28" y={30 + i * 30} width="144" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
          <rect x="36" y={37 + i * 30} width="60" height="5" rx="2.5" fill="rgba(232,234,240,0.35)"/>
          <rect x="130" y={37 + i * 30} width="30" height="5" rx="2.5" fill={`${color}80`}/>
        </g>
      ))}
      {/* Total */}
      <rect x="28" y="126" width="144" height="1" fill="rgba(52,211,153,0.2)"/>
      <text x="36" y="142" fill="rgba(232,234,240,0.5)" fontSize="9">Total</text>
      <text x="156" y="142" textAnchor="end" fill={color} fontSize="14" fontWeight="800">₹ 247</text>

      {/* Barcode scanner */}
      <rect x="196" y="15" width="104" height="80" rx="10" fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.2)" strokeWidth="1"/>
      {[0,1,2,3,4,5,6,7,8,9].map((i) => (
        <rect key={i} x={206 + i * 9} y="28" width={i % 3 === 0 ? 4 : 2} height="50" rx="1" fill={`${color}${i % 2 === 0 ? "80" : "40"}`}/>
      ))}
      <rect x="196" y="55" width="104" height="2" fill={`${color}60`}/>
      <text x="248" y="85" textAnchor="middle" fill="rgba(232,234,240,0.4)" fontSize="8">SCAN BARCODE</text>

      {/* Pay button */}
      <rect x="196" y="108" width="104" height="28" rx="8" fill={color} opacity="0.9"/>
      <text x="248" y="126" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">Pay Now</text>

      {/* Status */}
      <rect x="20" y="155" width="280" height="32" rx="8" fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.15)" strokeWidth="1"/>
      <circle cx="36" cy="171" r="5" fill={color} opacity="0.8"/>
      <text x="48" y="175" fill="rgba(232,234,240,0.5)" fontSize="9">Offline mode active — data syncs when connected</text>
    </svg>
  );
}

export default function ProjectsPage() {
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
            left: "60%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="section-label" style={{ margin: "0 auto 24px" }}>Our Projects</div>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
            className="gradient-text-hero"
          >
            What We Are Building
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
            Four focused products, each solving a specific real-world problem. All at various stages of design and development.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="section" style={{ background: "#05080f" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {projects.map((project, idx) => (
              <div
                key={project.id}
                id={project.id}
                className="glass-card"
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid rgba(34,211,238,0.1)",
                }}
              >
                {/* Top accent */}
                <div style={{ height: "3px", background: project.color }} />

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: idx % 2 === 0 ? "1fr 1.2fr" : "1.2fr 1fr",
                    gap: "0",
                  }}
                  className="project-layout"
                >
                  {/* Info column */}
                  <div
                    style={{
                      padding: "40px",
                      order: idx % 2 === 0 ? 1 : 2,
                    }}
                    className="project-info"
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "12px",
                          background: `${project.color}18`,
                          border: `1px solid ${project.color}35`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.5rem",
                        }}
                      >
                        {project.icon}
                      </div>
                      <div>
                        <h2 style={{ fontSize: "1.4rem", color: "#e8eaf0", fontWeight: 700 }}>{project.name}</h2>
                        <StatusBadge status={project.status} label={project.statusLabel} />
                      </div>
                    </div>

                    <p style={{ color: "rgba(232,234,240,0.45)", fontSize: "0.82rem", marginBottom: "16px", fontStyle: "italic" }}>
                      {project.tagline}
                    </p>

                    <p style={{ color: "rgba(232,234,240,0.7)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "24px" }}>
                      {project.longDescription}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Visual column */}
                  <div
                    style={{
                      background: `${project.color}06`,
                      borderLeft: idx % 2 === 0 ? "none" : `1px solid ${project.color}15`,
                      borderRight: idx % 2 === 0 ? `1px solid ${project.color}15` : "none",
                      padding: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      order: idx % 2 === 0 ? 2 : 1,
                    }}
                    className="project-visual"
                  >
                    <div style={{ width: "100%", maxWidth: "360px" }}>
                      <ProjectIllustration project={project} />
                    </div>
                  </div>
                </div>

                <style>{`
                  @media (max-width: 768px) {
                    .project-layout { grid-template-columns: 1fr !important; }
                    .project-info, .project-visual { order: unset !important; padding: 28px !important; }
                    .project-visual { border-left: none !important; border-right: none !important; border-top: 1px solid rgba(255,255,255,0.06) !important; }
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background: "#030710" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: "#e8eaf0", marginBottom: "16px" }}>
            Interested in Collaborating?
          </h2>
          <p style={{ color: "rgba(232,234,240,0.55)", marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px", lineHeight: 1.7 }}>
            If you have feedback on our projects or want to explore a collaboration, we would love to hear from you.
          </p>
          <Link href="/contact" className="btn-primary">
            Get In Touch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
