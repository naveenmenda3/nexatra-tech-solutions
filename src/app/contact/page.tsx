"use client";

import { useState } from "react";

const projectTypes = [
  "Mobile App Development",
  "Web Application",
  "AI-Powered Software",
  "UI/UX Design",
  "Backend / API",
  "Freelance / Contract Work",
  "Collaboration / Partnership",
  "Internship",
  "Other",
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

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
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="section-label" style={{ margin: "0 auto 24px" }}>Contact</div>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
            className="gradient-text-hero"
          >
            Let&#39;s Talk
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
            Tell us what you are working on, and we will get back to you.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="section" style={{ background: "#05080f" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "48px",
              alignItems: "start",
            }}
            className="contact-grid"
          >
            {/* Left — info */}
            <div>
              <h2 style={{ fontSize: "1.4rem", color: "#e8eaf0", fontWeight: 700, marginBottom: "16px" }}>
                Get In Touch
              </h2>
              <p style={{ color: "rgba(232,234,240,0.6)", lineHeight: 1.8, marginBottom: "36px", fontSize: "0.95rem" }}>
                We are open to freelance projects, collaborations, product partnerships, and general conversations about software and technology. Send us a message and we will respond as soon as we can.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
                {[
                  { icon: "💌", label: "Email", value: "hello@nexastratech.com", note: "(Update with your actual email)" },
                  { icon: "🐙", label: "GitHub", value: "github.com/nexastratech", note: "(Update with your GitHub)" },
                  { icon: "🔗", label: "LinkedIn", value: "linkedin.com/company/nexastra", note: "(Update with your LinkedIn)" },
                ].map((contact) => (
                  <div
                    key={contact.label}
                    className="glass-card"
                    style={{ borderRadius: "12px", padding: "16px 20px", display: "flex", alignItems: "center", gap: "16px" }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: "rgba(34,211,238,0.08)",
                        border: "1px solid rgba(34,211,238,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        flexShrink: 0,
                      }}
                    >
                      {contact.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: "0.75rem", color: "rgba(232,234,240,0.4)", marginBottom: "2px" }}>{contact.label}</p>
                      <p style={{ fontSize: "0.88rem", color: "#e8eaf0", fontWeight: 500 }}>{contact.value}</p>
                      <p style={{ fontSize: "0.72rem", color: "rgba(232,234,240,0.3)", fontStyle: "italic" }}>{contact.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  background: "rgba(251,191,36,0.06)",
                  border: "1px solid rgba(251,191,36,0.2)",
                  borderRadius: "12px",
                  padding: "16px 20px",
                }}
              >
                <p style={{ fontSize: "0.82rem", color: "rgba(251,191,36,0.9)", fontWeight: 600, marginBottom: "6px" }}>
                  ⚠️ Frontend-Only Notice
                </p>
                <p style={{ fontSize: "0.8rem", color: "rgba(232,234,240,0.5)", lineHeight: 1.6 }}>
                  This form does not currently send emails — it requires connecting a backend service (like Resend, Formspree, or a custom API). The submission flow is demonstrated in the UI only.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <div
                  className="glass-card"
                  style={{
                    borderRadius: "20px",
                    padding: "48px",
                    textAlign: "center",
                    borderTop: "3px solid #34d399",
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "20px" }}>✅</div>
                  <h3 style={{ fontSize: "1.4rem", color: "#e8eaf0", fontWeight: 700, marginBottom: "12px" }}>
                    Message Received!
                  </h3>
                  <p style={{ color: "rgba(232,234,240,0.6)", lineHeight: 1.7, marginBottom: "24px" }}>
                    Thanks for reaching out. Your message has been recorded. We will get back to you shortly.
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "rgba(232,234,240,0.4)", marginBottom: "28px", fontStyle: "italic" }}>
                    Note: Connect a real email backend to actually send this message.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", projectType: "", message: "" }); }}
                    className="btn-outline-teal"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-card"
                  style={{ borderRadius: "20px", padding: "40px", borderTop: "3px solid #22d3ee" }}
                  noValidate
                >
                  <h2 style={{ fontSize: "1.2rem", color: "#e8eaf0", fontWeight: 700, marginBottom: "28px" }}>
                    Send a Message
                  </h2>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }} className="form-row">
                    <div>
                      <label htmlFor="name" className="form-label">Your Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-input"
                        placeholder="Jane Smith"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="jane@example.com"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                      />
                    </div>
                    <style>{`
                      @media (max-width: 560px) { .form-row { grid-template-columns: 1fr !important; } }
                    `}</style>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <label htmlFor="projectType" className="form-label">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="form-input"
                      value={formState.projectType}
                      onChange={handleChange}
                    >
                      <option value="">Select a type (optional)</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: "28px" }}>
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-input"
                      rows={6}
                      placeholder="Tell us about your project or what you need..."
                      value={formState.message}
                      onChange={handleChange}
                      required
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  {error && (
                    <div
                      style={{
                        background: "rgba(239,68,68,0.08)",
                        border: "1px solid rgba(239,68,68,0.2)",
                        borderRadius: "8px",
                        padding: "12px 16px",
                        color: "#f87171",
                        fontSize: "0.875rem",
                        marginBottom: "20px",
                      }}
                    >
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "center", padding: "14px" }}
                    id="contact-submit-btn"
                  >
                    Send Message
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M2 9h14M9 2l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>
    </>
  );
}
