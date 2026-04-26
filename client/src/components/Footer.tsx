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
              src="/manus-storage/specific_gradient_logo_9dabe950.webp"
              alt="specific."
              className="h-10 w-auto mb-6"
            />
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "oklch(0.62 0.025 240)", fontFamily: "'DM Sans', sans-serif" }}>
              Installation teams that warehouse, deliver and install — across New Zealand's most demanding hotel, stadium, and commercial projects.
            </p>
            <p className="mt-3 text-xs uppercase tracking-widest font-semibold" style={{ color: "oklch(0.63 0.18 38)", fontFamily: "'DM Sans', sans-serif" }}>
              Specific Scope. Specific Results.
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

          {/* Locations */}
          <div>
            <p className="section-label mb-5">NZ Locations</p>
            <ul className="space-y-3 text-sm" style={{ color: "oklch(0.75 0.02 240)", fontFamily: "'DM Sans', sans-serif" }}>
              <li style={{ fontWeight: 600, color: "white" }}>Auckland (Head Office)</li>
              <li style={{ color: "oklch(0.62 0.025 240)" }}>1/31 Ha Crescent, Wiri</li>
              <li style={{ fontWeight: 600, color: "white", paddingTop: "0.25rem" }}>Christchurch</li>
              <li style={{ color: "oklch(0.62 0.025 240)" }}>2/925 Halswell Junction Rd, Islington</li>
              <li style={{ fontWeight: 600, color: "white", paddingTop: "0.25rem" }}>Central Otago</li>
              <li style={{ color: "oklch(0.62 0.025 240)" }}>14 Venning Crescent, Cromwell 9310</li>
              <li style={{ fontWeight: 600, color: "white", paddingTop: "0.25rem" }}>Otago / Southland</li>
              <li style={{ color: "oklch(0.62 0.025 240)" }}>57 Ellis Street, Otautau</li>
              <li style={{ paddingTop: "0.5rem" }}>
                <a href="mailto:info@specificgroup.com.au" className="transition-colors" style={{ color: "oklch(0.63 0.18 38)" }}>
                  info@specificgroup.com.au
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
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <p className="text-xs" style={{ color: "oklch(0.45 0.02 240)", fontFamily: "'DM Sans', sans-serif" }}>
              Part of the Specific Group — Australia & New Zealand
            </p>
            <p className="text-xs" style={{ color: "oklch(0.45 0.02 240)", fontFamily: "'DM Sans', sans-serif" }}>
              NZBN: 94 29048495585
            </p>
            <p className="text-xs" style={{ color: "oklch(0.45 0.02 240)", fontFamily: "'DM Sans', sans-serif" }}>
              SiteSafe NZ &nbsp;·&nbsp; ISO 45001:2018 &nbsp;·&nbsp; ISO 9001:2015 &nbsp;·&nbsp; ISO 14001:2015
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
