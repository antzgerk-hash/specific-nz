/*
 * Navigation — Dark Authority Design (ELEVATED)
 * Centred logo layout: nav links left | specific. logo centre | CTA right
 * Logo is the hero of the nav — prominent, breathing room, commands presence
 * specific. gradient wordmark — ONLY approved logo asset
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const leftLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
  ];

  const rightLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const linkStyle = (href: string) => ({
    color: location === href ? "oklch(0.63 0.18 38)" : "oklch(0.82 0 0)",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    fontSize: "0.8rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    transition: "color 0.2s",
  });

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(0.13 0.03 240 / 0.97)"
          : "linear-gradient(to bottom, oklch(0 0 0 / 0.55), transparent)",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(1 0 0 / 0.07)" : "none",
      }}
    >
      <div
        className="hidden lg:grid items-center px-8 xl:px-14"
        style={{
          gridTemplateColumns: "1fr auto 1fr",
          height: "72px",
        }}
      >
        {/* Left nav links */}
        <nav className="flex items-center gap-8">
          {leftLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={linkStyle(link.href)}
              onMouseEnter={(e) => {
                if (location !== link.href)
                  (e.target as HTMLElement).style.color = "oklch(0.63 0.18 38)";
              }}
              onMouseLeave={(e) => {
                if (location !== link.href)
                  (e.target as HTMLElement).style.color = "oklch(0.82 0 0)";
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Centre — approved specific. gradient wordmark */}
        <Link href="/" className="flex items-center justify-center px-8">
          <img
            src="/manus-storage/specific_gradient_logo_9dabe950.webp"
            alt="specific."
            style={{
              height: "46px",
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Link>

        {/* Right nav links + CTA */}
        <nav className="flex items-center justify-end gap-8">
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={linkStyle(link.href)}
              onMouseEnter={(e) => {
                if (location !== link.href)
                  (e.target as HTMLElement).style.color = "oklch(0.63 0.18 38)";
              }}
              onMouseLeave={(e) => {
                if (location !== link.href)
                  (e.target as HTMLElement).style.color = "oklch(0.82 0 0)";
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              background: "oklch(0.63 0.18 38)",
              color: "white",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.55rem 1.5rem",
              transition: "background 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = "oklch(0.55 0.18 38)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = "oklch(0.63 0.18 38)";
            }}
          >
            Get in Touch
          </Link>
        </nav>
      </div>

      {/* Mobile nav — logo left, hamburger right */}
      <div className="lg:hidden flex items-center justify-between px-5 h-16">
        <Link href="/">
          <img
            src="/manus-storage/specific_gradient_logo_9dabe950.webp"
            alt="specific."
            style={{ height: "34px", width: "auto", objectFit: "contain" }}
          />
        </Link>
        <button
          className="flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 bg-white transition-all duration-200"
            style={{ transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }}
          />
          <span
            className="block w-6 h-0.5 bg-white transition-all duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-0.5 bg-white transition-all duration-200"
            style={{ transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            background: "oklch(0.13 0.03 240 / 0.98)",
            borderColor: "oklch(1 0 0 / 0.08)",
          }}
        >
          <nav className="px-5 py-6 flex flex-col gap-4">
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium py-1"
                style={{
                  color: location === link.href ? "oklch(0.63 0.18 38)" : "white",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 text-center py-3"
              style={{
                background: "oklch(0.63 0.18 38)",
                color: "white",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
