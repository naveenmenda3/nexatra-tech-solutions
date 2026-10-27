import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Nexastra Tech Solutions.",
};

export default function PrivacyPolicyPage() {
  const year = 2026;

  return (
    <>
      <section
        style={{
          padding: "100px 0 60px",
          background: "linear-gradient(180deg, #030710 0%, #05080f 100%)",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="section-label" style={{ marginBottom: "20px" }}>Legal</div>
          <h1
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              color: "#e8eaf0",
              letterSpacing: "-0.02em",
              marginBottom: "12px",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: "rgba(232,234,240,0.4)", fontSize: "0.875rem" }}>
            Last updated: October 2026 &nbsp;·&nbsp;{" "}
            <span style={{ color: "rgba(251,191,36,0.8)", fontWeight: 600 }}>
              ⚠️ Review before publishing
            </span>
          </p>
        </div>
      </section>

      <section style={{ padding: "48px 0 96px", background: "#05080f" }}>
        <div
          className="container"
          style={{
            maxWidth: "800px",
          }}
        >
          <div
            style={{
              background: "rgba(251,191,36,0.06)",
              border: "1px solid rgba(251,191,36,0.2)",
              borderRadius: "12px",
              padding: "16px 20px",
              marginBottom: "40px",
            }}
          >
            <p style={{ fontSize: "0.85rem", color: "rgba(251,191,36,0.9)", fontWeight: 600, marginBottom: "4px" }}>
              Document Notice
            </p>
            <p style={{ fontSize: "0.82rem", color: "rgba(232,234,240,0.55)", lineHeight: 1.6 }}>
              This privacy policy is a template with placeholder values. Replace{" "}
              <code style={{ color: "#22d3ee", background: "rgba(34,211,238,0.1)", padding: "1px 6px", borderRadius: "4px" }}>
                [Your Company Name]
              </code>
              ,{" "}
              <code style={{ color: "#22d3ee", background: "rgba(34,211,238,0.1)", padding: "1px 6px", borderRadius: "4px" }}>
                [contact@yourdomain.com]
              </code>
              , and other placeholders before publishing.
            </p>
          </div>

          <LegalSection title="1. Introduction">
            <p>
              Nexastra Tech Solutions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website at nexastratech.com
              (the &quot;Service&quot;). This Privacy Policy explains how we collect, use, and protect your
              information when you use our website. By using the Service, you agree to the collection
              and use of information in accordance with this policy.
            </p>
          </LegalSection>

          <LegalSection title="2. Information We Collect">
            <p>We collect the following types of information:</p>
            <ul>
              <li><strong>Contact Form Data:</strong> When you submit our contact form, we collect your name, email address, and the message you send. This information is used solely to respond to your enquiry.</li>
              <li><strong>Usage Data:</strong> We may collect information about how the Service is accessed and used, including your browser type, pages visited, and time spent on pages. This data is anonymous and used only for improving the website.</li>
              <li><strong>Cookies:</strong> We may use essential cookies to ensure the website functions correctly. We do not use advertising or tracking cookies at this time.</li>
            </ul>
          </LegalSection>

          <LegalSection title="3. How We Use Your Information">
            <p>We use collected information to:</p>
            <ul>
              <li>Respond to enquiries and messages submitted through the contact form</li>
              <li>Improve the content and functionality of the website</li>
              <li>Understand how users interact with the site</li>
            </ul>
            <p>We do not sell, trade, or rent your personal information to third parties.</p>
          </LegalSection>

          <LegalSection title="4. Data Storage and Security">
            <p>
              We implement reasonable technical and organisational measures to protect your personal
              information against unauthorised access, alteration, disclosure, or destruction. However,
              no method of transmission over the internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>
            <p>
              Contact form submissions are currently handled through a frontend-only interface. When a
              backend email service is connected, data will be processed according to that service&#39;s
              privacy terms. We will update this policy accordingly.
            </p>
          </LegalSection>

          <LegalSection title="5. Third-Party Services">
            <p>
              The website may be hosted on third-party infrastructure (such as Vercel). These providers
              have their own privacy policies and may collect server logs and usage data as part of normal
              hosting operations. We recommend reviewing their respective privacy policies.
            </p>
          </LegalSection>

          <LegalSection title="6. Your Rights">
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <span style={{ color: "#22d3ee" }}>[contact@yourdomain.com]</span>.
            </p>
          </LegalSection>

          <LegalSection title="7. Children's Privacy">
            <p>
              Our Service is not directed at children under the age of 13. We do not knowingly collect
              personal information from children under 13. If you believe we have inadvertently collected
              such information, please contact us and we will remove it promptly.
            </p>
          </LegalSection>

          <LegalSection title="8. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant
              changes by updating the date at the top of this page. We encourage you to review this
              policy periodically.
            </p>
          </LegalSection>

          <LegalSection title="9. Contact">
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <span style={{ color: "#22d3ee" }}>[contact@yourdomain.com]</span>
            </p>
          </LegalSection>

          <p
            style={{
              marginTop: "48px",
              color: "rgba(232,234,240,0.3)",
              fontSize: "0.82rem",
              borderTop: "1px solid rgba(34,211,238,0.08)",
              paddingTop: "24px",
            }}
          >
            © {year} Nexastra Tech Solutions. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "36px" }}>
      <h2
        style={{
          fontSize: "1.1rem",
          color: "#e8eaf0",
          fontWeight: 700,
          marginBottom: "14px",
          paddingBottom: "10px",
          borderBottom: "1px solid rgba(34,211,238,0.1)",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          color: "rgba(232,234,240,0.65)",
          fontSize: "0.9rem",
          lineHeight: 1.85,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
