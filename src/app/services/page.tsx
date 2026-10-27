import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Nexastra Tech Solutions offers mobile app development, web development, AI-powered software, UI/UX design, backend integration, and software optimization.",
};

const services = [
  {
    id: "mobile",
    icon: "📱",
    title: "Mobile App Development",
    color: "#22d3ee",
    description:
      "We build cross-platform mobile applications using Flutter and Dart that run natively on iOS and Android. From initial concept to App Store submission, we handle the full mobile development lifecycle.",
    details: [
      "Cross-platform iOS & Android development with Flutter",
      "Native performance with Dart and optimized rendering",
      "Offline-first architecture using local databases (SQLite, Hive, Isar)",
      "Push notifications, background services, and device integrations",
      "Clean state management patterns for maintainable code",
      "App Store and Google Play submission support",
    ],
  },
  {
    id: "web",
    icon: "🌐",
    title: "Web Application Development",
    color: "#a78bfa",
    description:
      "We build performant, SEO-friendly web applications with React and Next.js. Whether you need a marketing site, a SaaS product, or a complex web platform, we apply modern architecture and clear component design.",
    details: [
      "React and Next.js applications with TypeScript",
      "Server-side rendering and static generation for performance",
      "Responsive design that works on all screen sizes",
      "Component-based architecture for maintainability",
      "SEO best practices baked in from the start",
      "Deployment on Vercel, Netlify, or custom infrastructure",
    ],
  },
  {
    id: "ai",
    icon: "🤖",
    title: "AI-Powered Applications",
    color: "#34d399",
    description:
      "We integrate AI capabilities into practical software products. From LLM-based text analysis to voice-driven data entry, we apply AI where it genuinely improves the user experience rather than as a marketing feature.",
    details: [
      "LLM API integration (OpenAI, Anthropic, and others)",
      "Intelligent text processing and content analysis",
      "Voice input and speech-to-data workflows",
      "AI-powered search and recommendation features",
      "Prompt engineering and response quality tuning",
      "Responsible AI patterns with human review and override",
    ],
  },
  {
    id: "design",
    icon: "🎨",
    title: "UI/UX Design",
    color: "#f59e0b",
    description:
      "We design interfaces that are clear, usable, and visually well-crafted. Our design process starts with user goals, not aesthetics — and produces interfaces that feel intuitive rather than impressive.",
    details: [
      "User research and problem definition",
      "Information architecture and user flow mapping",
      "Wireframes and interactive prototypes",
      "Component-level UI design with design systems",
      "Accessibility reviews (contrast, touch targets, screen reader support)",
      "Handoff-ready design specifications for developers",
    ],
  },
  {
    id: "backend",
    icon: "⚙️",
    title: "Backend & API Integration",
    color: "#06b6d4",
    description:
      "We build and integrate backend services that are reliable, well-structured, and easy to maintain. From simple REST APIs to complex service integrations, we apply patterns that keep the server layer understandable.",
    details: [
      "RESTful APIs with Node.js, NestJS, or Express.js",
      "Java/Spring Boot for enterprise-grade backend services",
      "Authentication and role-based access control",
      "Third-party API integrations (payment, maps, analytics, etc.)",
      "Webhook handling and background job processing",
      "API documentation with OpenAPI/Swagger",
    ],
  },
  {
    id: "database",
    icon: "🗄️",
    title: "Database & Cloud Integration",
    color: "#ec4899",
    description:
      "We set up and integrate databases and cloud services that fit your product's needs. From local SQLite for offline apps to PostgreSQL and MongoDB for scalable web services, we apply the right tool to each problem.",
    details: [
      "PostgreSQL and MongoDB database design and integration",
      "Supabase for real-time and auth-ready backends",
      "Firebase for mobile and real-time web apps",
      "AWS services (S3, Lambda, RDS, and others)",
      "Docker containerization for consistent environments",
      "Environment configuration for dev, staging, and production",
    ],
  },
  {
    id: "optimization",
    icon: "🔧",
    title: "Maintenance & Optimization",
    color: "#34d399",
    description:
      "Existing software accumulates technical debt, performance issues, and usability problems over time. We offer targeted reviews and improvements to help you get more value from what you have already built.",
    details: [
      "Performance audits and load time improvements",
      "Code quality reviews and refactoring",
      "Dependency updates and security patching",
      "Database query optimization",
      "Mobile app size reduction and startup improvements",
      "Usability reviews and targeted UX improvements",
    ],
  },
];

export default function ServicesPage() {
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
            right: "15%",
            transform: "translateY(-50%)",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="section-label" style={{ margin: "0 auto 24px" }}>Services</div>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
            className="gradient-text-hero"
          >
            What We Build
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
            We work across the full stack — from mobile apps and web platforms to AI integrations and backend services.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section" style={{ background: "#05080f" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="glass-card glass-card-hover"
                style={{
                  borderRadius: "20px",
                  padding: "40px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "48px",
                  alignItems: "start",
                  borderLeft: `3px solid ${service.color}`,
                }}
              >
                {/* Left side */}
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "56px",
                      height: "56px",
                      borderRadius: "16px",
                      background: `${service.color}15`,
                      border: `1px solid ${service.color}35`,
                      fontSize: "1.8rem",
                      marginBottom: "20px",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h2
                    style={{
                      fontSize: "1.4rem",
                      color: "#e8eaf0",
                      fontWeight: 700,
                      marginBottom: "16px",
                      lineHeight: 1.25,
                    }}
                  >
                    {service.title}
                  </h2>
                  <p style={{ color: "rgba(232,234,240,0.65)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                    {service.description}
                  </p>
                </div>

                {/* Right side — details */}
                <div>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: service.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "16px",
                    }}
                  >
                    What&apos;s Included
                  </p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          color: "rgba(232,234,240,0.65)",
                          fontSize: "0.88rem",
                          lineHeight: 1.6,
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
                          <circle cx="8" cy="8" r="7" fill={`${service.color}20`} stroke={`${service.color}50`} strokeWidth="1"/>
                          <path d="M5 8l2 2 4-4" stroke={service.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <style>{`
                  @media (max-width: 768px) {
                    #${service.id} { grid-template-columns: 1fr !important; gap: 24px !important; }
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
            Have a Project in Mind?
          </h2>
          <p
            style={{
              color: "rgba(232,234,240,0.55)",
              marginBottom: "32px",
              maxWidth: "480px",
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            Tell us what you are building and we will let you know how we can help.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
