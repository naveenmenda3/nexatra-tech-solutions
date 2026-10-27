// Projects data - update descriptions here easily
export type ProjectStatus = "active" | "in-development" | "concept";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  tags: string[];
  status: ProjectStatus;
  statusLabel: string;
  color: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: "huecart",
    name: "HueCart",
    tagline: "Product discovery & shopping experiences",
    description:
      "An e-commerce project focused on building intuitive product discovery and seamless shopping experiences. Designed with a user-first approach to make browsing and purchasing feel effortless.",
    longDescription:
      "HueCart is an e-commerce platform built around the idea that shopping should be simple and enjoyable. The project focuses on clean product presentation, fast search, and a checkout flow that removes friction at every step.",
    tags: ["E-Commerce", "React", "Next.js", "TypeScript", "Node.js"],
    status: "in-development",
    statusLabel: "In Development",
    color: "#f59e0b",
    icon: "🛒",
  },
  {
    id: "voiceledger",
    name: "VoiceLedger AI",
    tagline: "AI-powered personal finance tracking",
    description:
      "An AI-powered personal finance app that helps users track income and expenses, record transactions using voice input, understand spending patterns, and manage financial goals with clarity.",
    longDescription:
      "VoiceLedger AI makes personal finance management accessible by combining voice-driven data entry with intelligent spending analysis. Users can log transactions naturally by speaking, and the app surfaces insights to help them make better financial decisions.",
    tags: ["Flutter", "Dart", "AI", "LLM", "Firebase", "Voice"],
    status: "in-development",
    statusLabel: "In Development",
    color: "#22d3ee",
    icon: "🎙️",
  },
  {
    id: "jobwing",
    name: "JobWing AI",
    tagline: "AI-powered career development tool",
    description:
      "An AI-powered career product concept focused on resume analysis, job-description matching, resume improvement suggestions, and interview preparation. Helping job seekers present their best selves.",
    longDescription:
      "JobWing AI is a concept product designed to close the gap between job seekers and the roles they want. The tool analyzes resumes against job descriptions, suggests targeted improvements, and provides interview preparation guidance powered by AI.",
    tags: ["Concept", "AI", "LLM", "React", "Next.js", "NestJS"],
    status: "concept",
    statusLabel: "Concept / In Design",
    color: "#a78bfa",
    icon: "🚀",
  },
  {
    id: "scansell",
    name: "ScanSell POS",
    tagline: "Offline-first POS for small businesses",
    description:
      "An offline-first point-of-sale app being developed for small businesses, with a focus on simple, fast, user-friendly retail workflows that work reliably even without a constant internet connection.",
    longDescription:
      "ScanSell POS is built for the realities of small retail businesses — unreliable connectivity, limited technical staff, and the need for speed at the counter. The app prioritizes offline reliability, barcode scanning, and a clean interface that any staff member can learn quickly.",
    tags: ["Flutter", "Dart", "SQLite", "Offline-First", "POS"],
    status: "in-development",
    statusLabel: "In Development",
    color: "#34d399",
    icon: "🔖",
  },
];
