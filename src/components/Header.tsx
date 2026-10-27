"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(5, 8, 15, 0.92)"
          : "rgba(5, 8, 15, 0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(34, 211, 238, 0.08)"
          : "1px solid transparent",
      }}
    >
      <div className="container" style={{ maxWidth: "1200px" }}>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0",
            height: "68px",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10L10 4L16 10L10 16L4 10Z" fill="white" opacity="0.9"/>
                <path d="M7 10L10 7L13 10L10 13L7 10Z" fill="white"/>
              </svg>
            </div>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "1.15rem",
                color: "#e8eaf0",
                letterSpacing: "-0.02em",
              }}
            >
              Nexastra
              <span
                style={{
                  background: "linear-gradient(135deg, #22d3ee, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}Tech
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
                style={{
                  padding: "8px 14px",
                  borderRadius: "6px",
                  display: "block",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary"
              style={{ marginLeft: "12px", padding: "9px 20px", fontSize: "0.875rem" }}
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            style={{
              background: "transparent",
              border: "1px solid rgba(34, 211, 238, 0.2)",
              borderRadius: "8px",
              padding: "8px",
              cursor: "pointer",
              display: "none",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: isOpen ? "#22d3ee" : "#e8eaf0",
                  borderRadius: "2px",
                  transition: "all 0.25s ease",
                  transform: isOpen ? "rotate(45deg) translateY(7px)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: isOpen ? "#22d3ee" : "#e8eaf0",
                  borderRadius: "2px",
                  transition: "all 0.25s ease",
                  opacity: isOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: isOpen ? "#22d3ee" : "#e8eaf0",
                  borderRadius: "2px",
                  transition: "all 0.25s ease",
                  transform: isOpen ? "rotate(-45deg) translateY(-7px)" : "none",
                }}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="mobile-menu"
            style={{
              padding: "16px 0 24px",
              borderTop: "1px solid rgba(34, 211, 238, 0.1)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 16px",
                  color: pathname === link.href ? "#22d3ee" : "rgba(232,234,240,0.8)",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  borderRadius: "8px",
                  background: pathname === link.href ? "rgba(34,211,238,0.06)" : "transparent",
                  marginBottom: "4px",
                  transition: "all 0.2s ease",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ marginTop: "12px", paddingLeft: "16px", paddingRight: "16px" }}>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
