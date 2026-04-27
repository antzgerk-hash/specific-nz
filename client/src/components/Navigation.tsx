/*
 * Navigation — Dark Authority Design (BRAND-FORWARD)
 * Taller nav bar — logo is the dominant brand element, large and commanding
 * specific. gradient wordmark — ONLY approved logo asset
 * Layout: nav links left | LARGE specific. logo centre | CTA right
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
    { href: "/group", label: "The Group" },
  ];

  const rightLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const linkStyle = (href: string) => ({
    color: location === href ? "oklch(0.63 0.18 38)" : "oklch(0.82 0 0)",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    fontSize: "0.82rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    transition: "color 0.2s",
  });

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(0.10 0.03 240 / 0.97)"
          : "linear-gradient(to bottom, oklch(0 0 0 / 0.70) 0%, oklch(0 0 0 / 0.30) 70%, transparent 100%)",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(1 0 0 / 0.08)" : "none",
      }}
    >
      {/* Desktop nav */}
      <div
        className="hidden lg:grid items-center px-10 xl:px-16"
        style={{
          gridTemplateColumns: "1fr auto 1fr",
          height: "100px",
        }}
      >
        {/* Left nav links */}
        <nav className="flex items-center gap-10">
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

        {/* Centre — large specific. gradient wordmark — brand hero */}
        <Link href="/" className="flex items-center justify-center px-10">
          <img
            src="/manus-storage/specific_gradient_logo_85c53376.webp"
            alt="specific."
            style={{
              height: "72px",
              width: "auto",
              objectFit: "contain",
              display: "block",
              filter: "drop-shadow(0 2px 16px oklch(0.63 0.18 38 / 0.25))",
              transition: "filter 0.3s, transform 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLImageElement).style.filter =
                "drop-shadow(0 4px 24px oklch(0.63 0.18 38 / 0.45))";
              (e.target as HTMLImageElement).style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLImageElement).style.filter =
                "drop-shadow(0 2px 16px oklch(0.63 0.18 38 / 0.25))";
              (e.target as HTMLImageElement).style.transform = "scale(1)";
            }}
          />
        </Link>

        {/* Right nav links + CTA */}
        <nav className="flex items-center justify-end gap-10">
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
              fontSize: "0.75rem",
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              padding: "0.65rem 1.75rem",
              transition: "background 0.2s, transform 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement;
              el.style.background = "oklch(0.55 0.18 38)";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement;
              el.style.background = "oklch(0.63 0.18 38)";
              el.style.transform = "translateY(0)";
            }}
          >
            Get in Touch
          </Link>
        </nav>
      </div>

      {/* Mobile nav */}
      <div className="lg:hidden flex items-center justify-between px-5" style={{ height: "72px" }}>
        <Link href="/">
          <img
            src="/manus-storage/specific_gradient_logo_85c53376.webp"
            alt="specific."
            style={{ height: "44px", width: "auto", objectFit: "contain" }}
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
            background: "oklch(0.10 0.03 240 / 0.98)",
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
