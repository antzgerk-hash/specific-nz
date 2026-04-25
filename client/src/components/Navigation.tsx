/*
 * Navigation — Dark Authority Design
 * Sticky top bar: transparent on hero, solid navy on scroll
 * specific. logo in orange, nav links in white with orange hover
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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(0.16 0.035 240 / 0.97)"
          : "linear-gradient(to bottom, oklch(0 0 0 / 0.5), transparent)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(1 0 0 / 0.08)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* SG Monogram */}
          <div
            style={{
              width: "36px",
              height: "36px",
              background: "oklch(0.63 0.18 38)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "1rem",
                color: "white",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              SG
            </span>
          </div>
          {/* Wordmark */}
          <div className="flex flex-col leading-none">
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "1.15rem",
                color: "white",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              SPECIFIC
            </span>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: "0.55rem",
                color: "oklch(0.63 0.18 38)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                lineHeight: 1,
                marginTop: "2px",
              }}
            >
              NEW ZEALAND
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide transition-colors duration-200"
              style={{
                color: location === link.href
                  ? "oklch(0.63 0.18 38)"
                  : "oklch(0.85 0 0)",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={(e) => {
                if (location !== link.href)
                  (e.target as HTMLElement).style.color = "oklch(0.63 0.18 38)";
              }}
              onMouseLeave={(e) => {
                if (location !== link.href)
                  (e.target as HTMLElement).style.color = "oklch(0.85 0 0)";
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary text-sm px-5 py-2.5"
            style={{
              background: "oklch(0.63 0.18 38)",
              color: "white",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.8rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "0.55rem 1.4rem",
              transition: "background 0.2s",
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

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
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
            background: "oklch(0.16 0.035 240 / 0.98)",
            borderColor: "oklch(1 0 0 / 0.08)",
          }}
        >
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
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
          </nav>
        </div>
      )}
    </header>
  );
}
