import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#05080f",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <div>
        <p
          style={{
            fontSize: "6rem",
            fontWeight: 900,
            background: "linear-gradient(135deg, #22d3ee, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1,
            marginBottom: "16px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          404
        </p>
        <h1 style={{ fontSize: "1.6rem", color: "#e8eaf0", fontWeight: 700, marginBottom: "12px" }}>
          Page Not Found
        </h1>
        <p style={{ color: "rgba(232,234,240,0.5)", marginBottom: "36px", maxWidth: "400px", lineHeight: 1.7 }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Go Back Home
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}
