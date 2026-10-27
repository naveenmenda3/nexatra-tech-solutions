import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for Nexastra Tech Solutions.",
};

export default function TermsPage() {
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
            Terms and Conditions
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
        <div className="container" style={{ maxWidth: "800px" }}>
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
              This is a template Terms and Conditions document. Replace all placeholder values and
              review with a legal professional before publishing on a live website.
            </p>
          </div>

          <LegalSection title="1. Agreement to Terms">
            <p>
              By accessing and using the Nexastra Tech Solutions website at nexastratech.com (the
              &quot;Site&quot;), you accept and agree to be bound by these Terms and Conditions. If you do not
              agree to these terms, please do not use the Site.
            </p>
          </LegalSection>

          <LegalSection title="2. Use of the Site">
            <p>You agree to use this Site only for lawful purposes and in a manner that does not:</p>
            <ul>
              <li>Infringe the rights of others</li>
              <li>Restrict or inhibit anyone else&#39;s use and enjoyment of the Site</li>
              <li>Introduce viruses, malware, or any harmful or disruptive code</li>
              <li>Attempt to gain unauthorised access to any part of the Site or its related systems</li>
            </ul>
          </LegalSection>

          <LegalSection title="3. Intellectual Property">
            <p>
              All content on this Site — including text, graphics, logos, icons, and code — is the
              property of Nexastra Tech Solutions and is protected by applicable intellectual property
              laws. You may not reproduce, distribute, or use any content from this Site without our
              express written permission.
            </p>
          </LegalSection>

          <LegalSection title="4. Project and Service Descriptions">
            <p>
              Project descriptions, service offerings, and technology references on this Site are
              provided for informational purposes. They describe our areas of work and development focus.
              They do not constitute a guarantee of specific outcomes, timelines, or results.
            </p>
            <p>
              Some projects described on this Site are in active development or at a concept stage. We
              aim to represent their status accurately, but details may change as projects evolve.
            </p>
          </LegalSection>

          <LegalSection title="5. Contact Form">
            <p>
              The contact form on this Site collects your name, email address, and message. Submitting
              the form constitutes a request for communication, not a binding agreement or service
              contract. We will respond to enquiries at our discretion and as time permits.
            </p>
          </LegalSection>

          <LegalSection title="6. Disclaimer of Warranties">
            <p>
              This Site is provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind,
              either express or implied. We do not warrant that the Site will be uninterrupted,
              error-free, or free of harmful components. We make no warranties regarding the accuracy,
              completeness, or reliability of any content on the Site.
            </p>
          </LegalSection>

          <LegalSection title="7. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Nexastra Tech Solutions shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages arising out of or
              related to your use of, or inability to use, this Site or its content.
            </p>
          </LegalSection>

          <LegalSection title="8. Third-Party Links">
            <p>
              This Site may contain links to third-party websites or services. These links are provided
              for your convenience only. We have no control over and accept no responsibility for the
              content, privacy policies, or practices of any third-party sites.
            </p>
          </LegalSection>

          <LegalSection title="9. Changes to These Terms">
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Changes will be
              effective immediately upon posting to the Site. Your continued use of the Site after any
              changes constitutes your acceptance of the revised terms.
            </p>
          </LegalSection>

          <LegalSection title="10. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of{" "}
              <span style={{ color: "#22d3ee" }}>[Your Jurisdiction — e.g., India]</span>, without
              regard to its conflict of law provisions.
            </p>
          </LegalSection>

          <LegalSection title="11. Contact">
            <p>
              For questions about these Terms and Conditions, please contact us at:{" "}
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
