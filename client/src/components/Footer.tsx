/*
 * Footer — Dark Authority Design
 * Full-width deep navy, specific. logo in orange, clean columns
 */
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer
      style={{ background: "oklch(0.12 0.03 240)", borderTop: "1px solid oklch(1 0 0 / 0.08)" }}
    >
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/manus-storage/specific_logo_d8713c63.jpg"
              alt="specific."
              className="h-8 w-auto mb-6"
            />
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "oklch(0.62 0.025 240)", fontFamily: "'DM Sans', sans-serif" }}>
              Specialist FF&E delivery, installation, and commercial logistics across New Zealand. Trusted by leading hotel developers, construction firms, and fit-out managers.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com/company/specific-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest transition-colors"
                style={{ color: "oklch(0.60 0.12 185)", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/specificgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest transition-colors"
                style={{ color: "oklch(0.60 0.12 185)", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="section-label mb-5">Services</p>
            <ul className="space-y-3">
              {["FF&E Delivery & Installation", "Commercial Installations", "Relocations", "Logistics Management", "Warehousing & Storage"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm transition-colors" style={{ color: "oklch(0.75 0.02 240)", fontFamily: "'DM Sans', sans-serif" }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-5">New Zealand</p>
            <ul className="space-y-3 text-sm" style={{ color: "oklch(0.75 0.02 240)", fontFamily: "'DM Sans', sans-serif" }}>
              <li>Auckland, New Zealand</li>
              <li>
                <a href="mailto:nz@specificgroup.com" className="transition-colors" style={{ color: "oklch(0.75 0.02 240)" }}>
                  nz@specificgroup.com
                </a>
              </li>
              <li>
                <a href="https://specificgroup.com.au" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: "oklch(0.60 0.12 185)" }}>
                  specificgroup.com.au →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          style={{ borderTop: "1px solid oklch(1 0 0 / 0.07)" }}
        >
          <p className="text-xs" style={{ color: "oklch(0.45 0.02 240)", fontFamily: "'DM Sans', sans-serif" }}>
            © {new Date().getFullYear()} Specific Group. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "oklch(0.45 0.02 240)", fontFamily: "'DM Sans', sans-serif" }}>
            Part of the Specific Group — Australia & New Zealand
          </p>
        </div>
      </div>
    </footer>
  );
}
