/*
 * Group Structure Page — Specific NZ
 * Design: Dark Authority — NZ is the primary entity for NZ visitors.
 * Australia is presented as a sister operation with a live cross-link.
 * Colours: oklch(0.16 0.035 240) navy | oklch(0.63 0.18 38) orange | oklch(0.60 0.12 185) teal
 */
import { Link } from "wouter";

const NZ_TEAM = [
  { initials: "DH", name: "Dwyane Hitchens", role: "NZ Branch Manager", phone: "+64 204 243 242", email: "dwyane.h@specificgroup.co.nz" },
  { initials: "JH", name: "John Hitchens", role: "Warehouse Manager / Truck Driver", phone: null, email: null },
  { initials: "JA", name: "Jaxon Amadea", role: "Site Supervisor", phone: null, email: null },
  { initials: "ET", name: "Elliott Talagi", role: "North Island Senior Installer", phone: null, email: null },
  { initials: "KS", name: "Kyle Sinclair", role: "South Island Senior Installer", phone: null, email: null },
  { initials: "JT", name: "Jayden Tupou", role: "Warehouse / Offsider", phone: null, email: null },
  { initials: "MS", name: "Michael Solomona", role: "Offsider", phone: null, email: null },
  { initials: "JJ", name: "Jack Johnston", role: "Offsider", phone: null, email: null },
];

const GROUP_LEADERSHIP = [
  { initials: "AG", name: "Antoni Gerken", role: "Group CEO / Director", phone: "0436 026 300", email: "info@specificgroup.com.au" },
  { initials: "NL", name: "Nathan Lenton", role: "National Projects Manager", phone: "0406 224 177", email: "nathan.l@specificgroup.com.au" },
  { initials: "LT", name: "Luke Turnbull", role: "National Sales Director", phone: "0406 596 205", email: "luke.t@specificgroup.com.au" },
  { initials: "CK", name: "Courtney Knaggs", role: "Special Projects & Marketing", phone: null, email: "courtney.k@specificgroup.com.au" },
  { initials: "MT", name: "Melissa Turoczy", role: "Administration Manager", phone: null, email: "melissa.t@specificgroup.com.au" },
];

const ISO_CERTS = [
  {
    code: "ISO 45001:2018",
    name: "WHS / Safety",
    desc: "Work Health & Safety Management System",
    lastAudit: "Feb 2026",
    nextReview: "Aug 2026",
    accent: "oklch(0.63 0.18 38)",
  },
  {
    code: "ISO 9001:2015",
    name: "Quality",
    desc: "Quality Management System",
    lastAudit: "Feb 2026",
    nextReview: "Aug 2026",
    accent: "oklch(0.60 0.12 185)",
  },
  {
    code: "ISO 14001:2015",
    name: "Environment",
    desc: "Environmental Management System",
    lastAudit: "Jan 2026",
    nextReview: "Jul 2026",
    accent: "oklch(0.72 0.14 145)",
  },
];

const INSURANCE = [
  { type: "General Liability", insurer: "QBE (PURPL)", value: "$2,000,000 NZD" },
  { type: "Statutory Liability", insurer: "QBE (PURPL)", value: "$1,000,000 NZD" },
  { type: "Employers Liability", insurer: "QBE (PURPL)", value: "$1,000,000 NZD" },
  { type: "Management Liability", insurer: "QBE (PURPL)", value: "$500,000 NZD" },
  { type: "Material Damage", insurer: "IAG / NZI", value: "$850,000 NZD" },
  { type: "Business Interruption", insurer: "IAG / NZI", value: "$250,000 NZD" },
  { type: "Commercial Vehicle", insurer: "IAG / NZI", value: "$40,000 NZD" },
];

const AU_URL = "https://specific.australia.specgroup.ai";

export default function Group() {
  return (
    <div style={{ background: "oklch(0.10 0.01 240)", minHeight: "100vh", fontFamily: "'Barlow', sans-serif" }}>

      {/* ─── NAV ─── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "oklch(0.07 0.01 240 / 0.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid oklch(0.16 0.02 240)", padding: "0 clamp(1.5rem, 5vw, 4rem)", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <img src="/manus-storage/specific_gradient_logo_1889c37b.webp" alt="specific." style={{ height: "30px", width: "auto", objectFit: "contain" }} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; (e.target as HTMLImageElement).nextElementSibling!.setAttribute("style", "display:flex;align-items:center;gap:0.5rem"); }} />
          <span style={{ display: "none", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "oklch(0.63 0.18 38)", flexShrink: 0, display: "inline-block" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.5rem", color: "white", letterSpacing: "-0.02em", lineHeight: 1 }}>specific.</span>
          </span>
        </Link>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <Link href="/" style={{ color: "oklch(0.55 0.02 240)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.1em", fontWeight: 600, fontFamily: "'Barlow Condensed', sans-serif" }}>HOME</Link>
          <Link href="/services" style={{ color: "oklch(0.55 0.02 240)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.1em", fontWeight: 600, fontFamily: "'Barlow Condensed', sans-serif" }}>SERVICES</Link>
          <Link href="/projects" style={{ color: "oklch(0.55 0.02 240)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.1em", fontWeight: 600, fontFamily: "'Barlow Condensed', sans-serif" }}>PROJECTS</Link>
          <Link href="/group" style={{ color: "oklch(0.63 0.18 38)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.1em", fontWeight: 700, fontFamily: "'Barlow Condensed', sans-serif", borderBottom: "2px solid oklch(0.63 0.18 38)", paddingBottom: "2px" }}>THE GROUP</Link>
          <Link href="/about" style={{ color: "oklch(0.55 0.02 240)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.1em", fontWeight: 600, fontFamily: "'Barlow Condensed', sans-serif" }}>ABOUT</Link>
          <a href={AU_URL} target="_blank" rel="noopener noreferrer" style={{ color: "oklch(0.60 0.12 185)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.1em", fontWeight: 600, fontFamily: "'Barlow Condensed', sans-serif", border: "1px solid oklch(0.60 0.12 185)", padding: "0.35rem 0.875rem" }}>SPECIFIC AU ↗</a>
          <Link href="/contact" style={{ background: "oklch(0.63 0.18 38)", color: "white", textDecoration: "none", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", padding: "0.5rem 1.25rem", fontFamily: "'Barlow Condensed', sans-serif" }}>GET IN TOUCH</Link>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "clamp(1.5rem, 6vw, 6rem)", paddingRight: "clamp(1.5rem, 6vw, 6rem)", borderBottom: "1px solid oklch(0.20 0.02 240)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 70% 50%, oklch(0.15 0.04 240) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "900px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "oklch(0.63 0.18 38)" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.75rem", color: "white", letterSpacing: "-0.02em", lineHeight: 1 }}>specific.</span>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 400, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.45 0.02 240)", marginLeft: "0.5rem", borderLeft: "1px solid oklch(0.25 0.02 240)", paddingLeft: "0.75rem" }}>GROUP OF COMPANIES</span>
          </div>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.63 0.18 38)", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
            SPECIFIC NEW ZEALAND — HEAD OFFICE
          </p>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.9, color: "white", marginBottom: "1.5rem" }}>
            NEW ZEALAND<br />
            <span style={{ color: "oklch(0.63 0.18 38)" }}>FIRST. ALWAYS.</span>
          </h1>
          <p style={{ fontSize: "1.125rem", color: "oklch(0.65 0.02 240)", maxWidth: "680px", lineHeight: 1.7, marginBottom: "2rem" }}>
            Specific NZ is the primary entity for all New Zealand clients — a dedicated Auckland-based team with its own management, warehouse, fleet, and project leadership. We are part of the Specific Group of Companies, which also operates across Australia, giving our NZ clients access to group-level resources, ISO certifications, and national procurement strength when it counts.
          </p>
          {/* Australia cross-link banner */}
          <a
            href={AU_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "1rem", background: "oklch(0.14 0.02 240)", border: "1px solid oklch(0.60 0.12 185)", padding: "1rem 1.75rem", textDecoration: "none", marginTop: "0.5rem" }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", color: "oklch(0.60 0.12 185)", marginBottom: "0.2rem" }}>SISTER OPERATION</span>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "white", letterSpacing: "0.02em" }}>Specific Australia</span>
              <span style={{ fontSize: "0.8rem", color: "oklch(0.50 0.02 240)", marginTop: "0.15rem" }}>NSW · VIC · QLD · WA — specific.australia.specgroup.ai</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="oklch(0.60 0.12 185)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </section>

      {/* ─── NZ TEAM ─── */}
      <section style={{ padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 6rem)", borderBottom: "1px solid oklch(0.16 0.02 240)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.63 0.18 38)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
            YOUR NZ TEAM
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "white", lineHeight: 0.95, marginBottom: "3rem" }}>
            BASED IN AUCKLAND.<br />
            <span style={{ color: "oklch(0.60 0.12 185)" }}>DEPLOYED NATIONWIDE.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {NZ_TEAM.map((member) => (
              <div key={member.initials} style={{ background: "oklch(0.13 0.015 240)", border: "1px solid oklch(0.20 0.02 240)", padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "oklch(0.63 0.18 38)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", color: "white" }}>{member.initials}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", marginBottom: "0.2rem" }}>{member.name}</p>
                    <p style={{ fontSize: "0.8rem", color: "oklch(0.55 0.02 240)" }}>{member.role}</p>
                  </div>
                </div>
                {member.phone && (
                  <a href={`tel:${member.phone.replace(/\s/g, "")}`} style={{ display: "block", fontSize: "0.8rem", color: "oklch(0.60 0.12 185)", textDecoration: "none", marginBottom: "0.25rem" }}>{member.phone}</a>
                )}
                {member.email && (
                  <a href={`mailto:${member.email}`} style={{ display: "block", fontSize: "0.8rem", color: "oklch(0.60 0.12 185)", textDecoration: "none", wordBreak: "break-all" }}>{member.email}</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NZ ENTITY DETAILS ─── */}
      <section style={{ padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 6rem)", borderBottom: "1px solid oklch(0.16 0.02 240)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.63 0.18 38)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
            SPECIFIC NZ — ENTITY DETAILS
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "white", lineHeight: 0.95, marginBottom: "3rem" }}>
            COMPLIANCE &amp;<br />
            <span style={{ color: "oklch(0.63 0.18 38)" }}>CREDENTIALS.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
            {[
              { label: "NZBN", value: "94 29048495585" },
              { label: "REGISTERED ADDRESS", value: "1/31 Ha Crescent, Wiri, Auckland 2104" },
              { label: "SITE SAFE", value: "Certified — All Site Personnel" },
              { label: "CONTACT", value: "dwyane.h@specificgroup.co.nz" },
              { label: "PHONE", value: "+64 204 243 242" },
              { label: "BANK", value: "068149600" },
            ].map((item) => (
              <div key={item.label} style={{ background: "oklch(0.13 0.015 240)", border: "1px solid oklch(0.20 0.02 240)", padding: "1.25rem 1.5rem" }}>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.15em", color: "oklch(0.45 0.02 240)", marginBottom: "0.4rem" }}>{item.label}</p>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", color: "white", wordBreak: "break-word" }}>{item.value}</p>
              </div>
            ))}
          </div>
          {/* ISO Certs */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {ISO_CERTS.map((cert) => (
              <div key={cert.code} style={{ background: "oklch(0.13 0.015 240)", border: `1px solid ${cert.accent}`, padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: cert.accent }}>{cert.code}</span>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.1em", color: "oklch(0.45 0.02 240)", background: "oklch(0.18 0.02 240)", padding: "0.25rem 0.6rem" }}>{cert.name}</span>
                </div>
                <p style={{ fontSize: "0.875rem", color: "oklch(0.65 0.02 240)", marginBottom: "0.75rem" }}>{cert.desc}</p>
                <div style={{ display: "flex", gap: "1.5rem" }}>
                  <div>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.1em", color: "oklch(0.40 0.02 240)", marginBottom: "0.2rem" }}>LAST AUDIT</p>
                    <p style={{ fontSize: "0.8rem", color: "white" }}>{cert.lastAudit}</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.1em", color: "oklch(0.40 0.02 240)", marginBottom: "0.2rem" }}>NEXT REVIEW</p>
                    <p style={{ fontSize: "0.8rem", color: "white" }}>{cert.nextReview}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INSURANCE ─── */}
      <section style={{ padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 6rem)", borderBottom: "1px solid oklch(0.16 0.02 240)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.63 0.18 38)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
            INSURANCE COVERAGE — NZ
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "white", lineHeight: 0.95, marginBottom: "3rem" }}>
            FULLY COVERED.<br />
            <span style={{ color: "oklch(0.60 0.12 185)" }}>EVERY PROJECT.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "oklch(0.18 0.02 240)", border: "1px solid oklch(0.18 0.02 240)" }}>
            {INSURANCE.map((ins) => (
              <div key={ins.type} style={{ background: "oklch(0.13 0.015 240)", padding: "1.25rem 1.5rem" }}>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.15em", color: "oklch(0.45 0.02 240)", marginBottom: "0.4rem" }}>{ins.insurer}</p>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", marginBottom: "0.4rem" }}>{ins.type}</p>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "oklch(0.63 0.18 38)" }}>{ins.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GROUP LEADERSHIP ─── */}
      <section style={{ padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 6rem)", borderBottom: "1px solid oklch(0.16 0.02 240)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.63 0.18 38)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
            GROUP LEADERSHIP — AUSTRALIA
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "white", lineHeight: 0.95, marginBottom: "1rem" }}>
            THE GROUP BEHIND<br />
            <span style={{ color: "oklch(0.63 0.18 38)" }}>SPECIFIC NZ.</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "oklch(0.55 0.02 240)", maxWidth: "640px", lineHeight: 1.7, marginBottom: "3rem" }}>
            Specific NZ is supported by the group executive team based in Norwest, NSW. For Australian projects or group-level enquiries, visit the Australian site directly.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
            {GROUP_LEADERSHIP.map((member) => (
              <div key={member.initials} style={{ background: "oklch(0.13 0.015 240)", border: "1px solid oklch(0.20 0.02 240)", padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "oklch(0.20 0.02 240)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.9rem", color: "oklch(0.63 0.18 38)" }}>{member.initials}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", marginBottom: "0.2rem" }}>{member.name}</p>
                    <p style={{ fontSize: "0.78rem", color: "oklch(0.50 0.02 240)" }}>{member.role}</p>
                  </div>
                </div>
                {member.email && (
                  <a href={`mailto:${member.email}`} style={{ display: "block", fontSize: "0.78rem", color: "oklch(0.60 0.12 185)", textDecoration: "none", wordBreak: "break-all" }}>{member.email}</a>
                )}
              </div>
            ))}
          </div>
          {/* Live link to AU site */}
          <a
            href={AU_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "1rem", background: "oklch(0.14 0.02 240)", border: "1px solid oklch(0.60 0.12 185)", padding: "1.25rem 2rem", textDecoration: "none" }}
          >
            <div>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", color: "oklch(0.60 0.12 185)", marginBottom: "0.3rem" }}>VISIT THE AUSTRALIAN SITE</p>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "white" }}>Specific Australia →</p>
              <p style={{ fontSize: "0.8rem", color: "oklch(0.45 0.02 240)", marginTop: "0.2rem" }}>specific.australia.specgroup.ai</p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="oklch(0.60 0.12 185)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "480px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src="/manus-storage/pasted_file_but1GE_image_2873955d.png" alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", filter: "brightness(0.30) saturate(0.8)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.75) 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "oklch(0.63 0.18 38)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 4rem)", maxWidth: "800px", width: "100%" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.25em", color: "oklch(0.63 0.18 38)", marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
            SPECIFIC NEW ZEALAND
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 7vw, 6rem)", color: "white", lineHeight: 0.88, marginBottom: "1.75rem" }}>
            TIER ONE PROJECTS.<br />
            <span style={{ color: "oklch(0.63 0.18 38)" }}>TIER ONE TEAMS.</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.70)", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "520px", margin: "0 auto 2.5rem" }}>
            Speak to the Specific NZ team about your next project. We respond within the business day.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact">
              <button style={{ background: "oklch(0.63 0.18 38)", color: "white", border: "none", padding: "1rem 2.75rem", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.12em", cursor: "pointer" }}>GET IN TOUCH</button>
            </Link>
            <Link href="/services">
              <button style={{ background: "transparent", color: "white", border: "2px solid rgba(255,255,255,0.5)", padding: "1rem 2.75rem", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.12em", cursor: "pointer" }}>OUR CAPABILITIES</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: "oklch(0.06 0.01 240)", borderTop: "1px solid oklch(0.14 0.02 240)", padding: "2rem clamp(1.5rem, 6vw, 6rem)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "oklch(0.63 0.18 38)" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.5rem", color: "white", letterSpacing: "-0.02em" }}>specific.</span>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.15em", color: "oklch(0.35 0.02 240)", marginLeft: "0.5rem", borderLeft: "1px solid oklch(0.20 0.02 240)", paddingLeft: "0.75rem" }}>NEW ZEALAND</span>
          </div>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <Link href="/" style={{ color: "oklch(0.40 0.02 240)", textDecoration: "none", fontSize: "0.7rem", letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>HOME</Link>
            <Link href="/services" style={{ color: "oklch(0.40 0.02 240)", textDecoration: "none", fontSize: "0.7rem", letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>SERVICES</Link>
            <Link href="/projects" style={{ color: "oklch(0.40 0.02 240)", textDecoration: "none", fontSize: "0.7rem", letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>PROJECTS</Link>
            <Link href="/contact" style={{ color: "oklch(0.40 0.02 240)", textDecoration: "none", fontSize: "0.7rem", letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>CONTACT</Link>
            <a href={AU_URL} target="_blank" rel="noopener noreferrer" style={{ color: "oklch(0.60 0.12 185)", textDecoration: "none", fontSize: "0.7rem", letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>SPECIFIC AU ↗</a>
          </div>
          <p style={{ fontSize: "0.7rem", color: "oklch(0.30 0.02 240)", fontFamily: "'Barlow Condensed', sans-serif" }}>© 2026 Specific NZ. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
