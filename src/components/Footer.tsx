import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  projects: [
    { label: "HueCart", href: "/projects#huecart" },
    { label: "VoiceLedger AI", href: "/projects#voiceledger" },
    { label: "JobWing AI", href: "/projects#jobwing" },
    { label: "ScanSell POS", href: "/projects#scansell" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export default function Footer() {
  const year = 2026;

  return (
    <footer
      style={{
        background: "rgba(2, 5, 16, 0.98)",
        borderTop: "1px solid rgba(34, 211, 238, 0.08)",
        paddingTop: "64px",
        paddingBottom: "32px",
      }}
    >
      <div className="container">
        {/* Top section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "56px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10L10 4L16 10L10 16L4 10Z" fill="white" opacity="0.9"/>
                  <path d="M7 10L10 7L13 10L10 13L7 10Z" fill="white"/>
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "#e8eaf0",
                  letterSpacing: "-0.02em",
                }}
              >
                Nexastra{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #22d3ee, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Tech
                </span>
              </span>
            </Link>
            <p
              style={{
                color: "rgba(232,234,240,0.55)",
                fontSize: "0.88rem",
                lineHeight: 1.7,
                maxWidth: "280px",
                marginBottom: "24px",
              }}
            >
              Building digital products, mobile applications, web platforms, and AI-powered software designed around real user needs.
            </p>
            <p
              style={{
                color: "rgba(232,234,240,0.4)",
                fontSize: "0.82rem",
              }}
            >
              Turning Ideas Into Useful Digital Products.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4
              style={{
                color: "#e8eaf0",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                marginBottom: "20px",
                letterSpacing: "0.02em",
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Links */}
          <div>
            <h4
              style={{
                color: "#e8eaf0",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                marginBottom: "20px",
                letterSpacing: "0.02em",
              }}
            >
              Projects
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.projects.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              style={{
                color: "#e8eaf0",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                marginBottom: "20px",
                letterSpacing: "0.02em",
              }}
            >
              Legal
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" style={{ marginBottom: "28px" }} />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ color: "rgba(232,234,240,0.38)", fontSize: "0.82rem" }}>
            © {year} Nexastra Tech Solutions. All rights reserved.
          </p>
          <p style={{ color: "rgba(232,234,240,0.28)", fontSize: "0.78rem" }}>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </footer>
  );
}
