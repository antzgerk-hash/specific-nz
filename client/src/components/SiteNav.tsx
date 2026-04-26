/**
 * SiteNav — Shared navigation component for all Specific NZ pages
 * Design: Dark Authority — fixed, glassmorphic, Barlow Condensed, orange accent
 */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "SERVICES" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/group", label: "THE GROUP" },
  { href: "/about", label: "ABOUT" },
];

const SERVICE_LINKS = [
  { href: "/relocations", label: "Office Relocations" },
  { href: "/warehousing", label: "Warehousing & Storage" },
  { href: "/ffe-installations", label: "FF&E Installations" },
  { href: "/joinery", label: "Joinery & Fitout" },
  { href: "/transport", label: "Transport & Logistics" },
  { href: "/av-art", label: "AV & Art Installation" },
];

export default function SiteNav() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const isServiceActive = SERVICE_LINKS.some(s => location.startsWith(s.href));

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        background: "oklch(0.07 0.01 240 / 0.97)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid oklch(0.16 0.02 240)",
        height: "64px",
        display: "flex", alignItems: "center",
        padding: "0 clamp(1rem, 4vw, 3.5rem)",
        justifyContent: "space-between",
        fontFamily: "'Barlow Condensed', sans-serif",
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", flexShrink: 0 }}>
          <img
            src="/manus-storage/specific_gradient_logo_d001f3df.webp"
            alt="Specific."
            style={{ height: "30px", width: "auto", display: "block" }}
          />
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }} className="desktop-nav">
          {NAV_LINKS.map(link => {
            if (link.href === "/services") {
              return (
                <div key="/services" style={{ position: "relative" }}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link href="/services" style={{
                    color: isActive("/services") || isServiceActive ? "oklch(0.63 0.18 38)" : "oklch(0.58 0.02 240)",
                    textDecoration: "none",
                    fontSize: "0.72rem",
                    letterSpacing: "0.12em",
                    fontWeight: 700,
                    padding: "0.4rem 0.75rem",
                    display: "flex", alignItems: "center", gap: "0.3rem",
                    borderBottom: isActive("/services") || isServiceActive ? "2px solid oklch(0.63 0.18 38)" : "2px solid transparent",
                    transition: "color 0.2s, border-color 0.2s",
                  }}>
                    SERVICES
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6"/></svg>
                  </Link>
                  {servicesOpen && (
                    <div style={{
                      position: "absolute", top: "100%", left: 0,
                      background: "oklch(0.09 0.01 240)",
                      border: "1px solid oklch(0.16 0.02 240)",
                      minWidth: "220px",
                      boxShadow: "0 16px 40px oklch(0 0 0 / 0.5)",
                      zIndex: 300,
                    }}>
                      {SERVICE_LINKS.map(s => (
                        <Link key={s.href} href={s.href} style={{
                          display: "block",
                          padding: "0.7rem 1.25rem",
                          color: location === s.href ? "oklch(0.63 0.18 38)" : "oklch(0.65 0.02 240)",
                          textDecoration: "none",
                          fontSize: "0.78rem",
                          letterSpacing: "0.06em",
                          fontWeight: location === s.href ? 700 : 500,
                          borderLeft: location === s.href ? "3px solid oklch(0.63 0.18 38)" : "3px solid transparent",
                          background: location === s.href ? "oklch(0.12 0.02 240)" : "transparent",
                          transition: "all 0.15s",
                        }}>
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link key={link.href} href={link.href} style={{
                color: isActive(link.href) ? "oklch(0.63 0.18 38)" : "oklch(0.58 0.02 240)",
                textDecoration: "none",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                fontWeight: 700,
                padding: "0.4rem 0.75rem",
                borderBottom: isActive(link.href) ? "2px solid oklch(0.63 0.18 38)" : "2px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
              }}>
                {link.label}
              </Link>
            );
          })}
          {isAdmin && (
            <Link href="/admin/media" style={{
              color: "oklch(0.60 0.12 185)",
              textDecoration: "none",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              padding: "0.4rem 0.75rem",
              border: "1px solid oklch(0.60 0.12 185)",
              marginLeft: "0.25rem",
              transition: "all 0.2s",
              display: "inline-block",
            }}>
              ADMIN
            </Link>
          )}
          <Link href="/contact" style={{
            background: "oklch(0.63 0.18 38)",
            color: "white",
            textDecoration: "none",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            padding: "0.55rem 1.4rem",
            marginLeft: "0.5rem",
            transition: "background 0.2s",
            display: "inline-block",
          }}>
            GET IN TOUCH
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", display: "none", flexDirection: "column", gap: "5px" }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: "22px", height: "2px", background: "white", transition: "transform 0.2s", transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "white", opacity: mobileOpen ? 0 : 1, transition: "opacity 0.2s" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "white", transition: "transform 0.2s", transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{
          position: "fixed", top: "64px", left: 0, right: 0, bottom: 0,
          background: "oklch(0.07 0.01 240 / 0.98)",
          zIndex: 199,
          overflowY: "auto",
          padding: "1.5rem clamp(1rem, 5vw, 2rem)",
          fontFamily: "'Barlow Condensed', sans-serif",
        }}>
          {NAV_LINKS.map(link => (
            <div key={link.href}>
              <Link href={link.href} onClick={() => setMobileOpen(false)} style={{
                display: "block",
                color: isActive(link.href) ? "oklch(0.63 0.18 38)" : "white",
                textDecoration: "none",
                fontSize: "1.5rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                padding: "0.75rem 0",
                borderBottom: "1px solid oklch(0.14 0.02 240)",
              }}>
                {link.label}
              </Link>
              {link.href === "/services" && (
                <div style={{ paddingLeft: "1rem", paddingBottom: "0.5rem" }}>
                  {SERVICE_LINKS.map(s => (
                    <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} style={{
                      display: "block",
                      color: "oklch(0.55 0.02 240)",
                      textDecoration: "none",
                      fontSize: "1rem",
                      fontWeight: 600,
                      padding: "0.5rem 0",
                      letterSpacing: "0.05em",
                    }}>
                      → {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" onClick={() => setMobileOpen(false)} style={{
            display: "block",
            background: "oklch(0.63 0.18 38)",
            color: "white",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            padding: "1rem 1.5rem",
            marginTop: "1.5rem",
            textAlign: "center",
          }}>
            GET IN TOUCH
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
