import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Nexastra Tech Solutions — Digital Products, Apps & AI Software",
    template: "%s | Nexastra Tech Solutions",
  },
  description:
    "Nexastra Tech Solutions builds digital products, mobile apps, web platforms, and AI-powered software designed around real user needs. Turning ideas into useful digital products.",
  keywords: [
    "mobile app development",
    "web development",
    "AI software",
    "Flutter",
    "React",
    "Next.js",
    "software company",
    "digital products",
  ],
  authors: [{ name: "Nexastra Tech Solutions" }],
  creator: "Nexastra Tech Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexastratech.com",
    siteName: "Nexastra Tech Solutions",
    title: "Nexastra Tech Solutions — Digital Products, Apps & AI Software",
    description:
      "We design and develop mobile apps, web platforms, and AI-powered solutions that solve real-world problems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexastra Tech Solutions",
    description:
      "We design and develop mobile apps, web platforms, and AI-powered solutions that solve real-world problems.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body>
        <Header />
        <main style={{ paddingTop: "68px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
