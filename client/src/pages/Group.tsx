/*
 * Group Structure Page — Specific NZ
 * Design: Dark Authority — navy/charcoal base, Barlow Condensed headlines, orange accents
 * Shows: Specific Group parent entity, all branches, Head Office leadership, NZ team,
 *        ISO certifications, compliance, insurance coverage, ESG commitment
 */
import { Link } from "wouter";

const BRANCHES = [
  {
    code: "HO",
    name: "Head Office",
    location: "Norwest, NSW — Australia",
    manager: "Antoni Gerken",
    role: "Group CEO / Director",
    phone: "0436 026 300",
    email: "info@specificgroup.com.au",
    accent: "oklch(0.63 0.18 38)",
  },
  {
    code: "NSW",
    name: "Specific NSW",
    location: "Northmead, NSW — Australia",
    manager: "Duncan Wyatt",
    role: "Branch Manager",
    phone: "0459 415 440",
    email: "duncan.w@specificgroup.com.au",
    accent: "oklch(0.60 0.12 185)",
  },
  {
    code: "VIC",
    name: "Specific VIC",
    location: "West Footscray, VIC — Australia",
    manager: "Tom Green",
    role: "Branch Manager",
    phone: "0481 230 473",
    email: "tom.g@specificgroup.com.au",
    accent: "oklch(0.72 0.14 145)",
  },
  {
    code: "QLD",
    name: "Specific QLD",
    location: "Crestmead, QLD — Australia",
    manager: "Justin Chateau",
    role: "Branch Manager",
    phone: "0493 642 448",
    email: "justin.c@specificgroup.com.au",
    accent: "oklch(0.65 0.15 280)",
  },
  {
    code: "NZ",
    name: "Specific NZ",
    location: "Wiri, Auckland — New Zealand",
    manager: "Dwyane Hitchens",
    role: "NZ Branch Manager",
    phone: "+64 204 243 242",
    email: "dwyane.h@specificgroup.co.nz",
    accent: "oklch(0.63 0.18 38)",
    highlight: true,
  },
  {
    code: "REL",
    name: "Specific Relocations",
    location: "National — Australia",
    manager: "Steve Barnett",
    role: "Managing Director — Relocations",
    phone: "0410 522 562",
    email: "steve.b@specificgroup.com.au",
    accent: "oklch(0.75 0.10 55)",
  },
];

const HEAD_OFFICE_TEAM = [
  { initials: "AG", name: "Antoni Gerken", role: "Group CEO / Director", phone: "0436 026 300", email: "antoni.g@specificgroup.com.au" },
  { initials: "NL", name: "Nathan Lenton", role: "National Projects Manager", phone: "0406 224 177", email: "nathan.l@specificgroup.com.au" },
  { initials: "LT", name: "Luke Turnbull", role: "National Sales Director", phone: "0406 596 205", email: "luke.t@specificgroup.com.au" },
  { initials: "CK", name: "Courtney Knaggs", role: "Special Projects & Marketing", phone: null, email: "courtney.k@specificgroup.com.au" },
  { initials: "MT", name: "Melissa Turoczy", role: "Administration Manager", phone: null, email: "melissa.t@specificgroup.com.au" },
  { initials: "DW", name: "Duncan Wyatt", role: "OH&S & Compliance", phone: "0459 415 440", email: "duncan.w@specificgroup.com.au" },
  { initials: "YI", name: "Yoshi Ishinoda", role: "Executive Assistant", phone: "+63 921 525 2346", email: "Yoshi.i@specificgroup.com.au" },
];

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

const ISO_CERTS = [
  {
    code: "ISO 45001:2018",
    name: "WHS / Safety",
    desc: "Work Health & Safety Management System",
    lastAudit: "Feb 2026",
    nextReview: "Aug 2026",
    accent: "oklch(0.63 0.18 38)",
    scope: ["SWMS Templates", "Training Videos", "Competency Evidence", "Toolbox Talks"],
  },
  {
    code: "ISO 9001:2015",
    name: "Quality",
    desc: "Quality Management System",
    lastAudit: "Feb 2026",
    nextReview: "Aug 2026",
    accent: "oklch(0.60 0.12 185)",
    scope: ["Quality Checklists", "Non-Conformance", "Client Feedback", "Audit Log"],
  },
  {
    code: "ISO 14001:2015",
    name: "Environment",
    desc: "Environmental Management System",
    lastAudit: "Jan 2026",
    nextReview: "Jul 2026",
    accent: "oklch(0.72 0.14 145)",
    scope: ["ESG Reports", "Relove Partnership", "Recycling Data", "Carbon Tracking"],
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

export default function Group() {
  return (
    <div style={{ background: "oklch(0.10 0.01 240)", minHeight: "100vh", fontFamily: "'Barlow', sans-serif" }}>

      {/* ─── NAV ─── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "oklch(0.07 0.01 240 / 0.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid oklch(0.16 0.02 240)", padding: "0 clamp(1.5rem, 5vw, 4rem)", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* Orange dot brand mark */}
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "oklch(0.63 0.18 38)", flexShrink: 0 }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.5rem", color: "white", letterSpacing: "-0.02em", lineHeight: 1 }}>specific.</span>
          </div>
        </Link>
        {/* Nav links */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <Link href="/" style={{ color: "oklch(0.55 0.02 240)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.1em", fontWeight: 600, fontFamily: "'Barlow Condensed', sans-serif" }}>HOME</Link>
          <Link href="/services" style={{ color: "oklch(0.55 0.02 240)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.1em", fontWeight: 600, fontFamily: "'Barlow Condensed', sans-serif" }}>SERVICES</Link>
          <Link href="/projects" style={{ color: "oklch(0.55 0.02 240)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.1em", fontWeight: 600, fontFamily: "'Barlow Condensed', sans-serif" }}>PROJECTS</Link>
          <Link href="/group" style={{ color: "oklch(0.63 0.18 38)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.1em", fontWeight: 700, fontFamily: "'Barlow Condensed', sans-serif", borderBottom: "2px solid oklch(0.63 0.18 38)", paddingBottom: "2px" }}>THE GROUP</Link>
          <Link href="/about" style={{ color: "oklch(0.55 0.02 240)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.1em", fontWeight: 600, fontFamily: "'Barlow Condensed', sans-serif" }}>ABOUT</Link>
          <Link href="/contact" style={{ background: "oklch(0.63 0.18 38)", color: "white", textDecoration: "none", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", padding: "0.5rem 1.25rem", fontFamily: "'Barlow Condensed', sans-serif" }}>GET IN TOUCH</Link>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "clamp(1.5rem, 6vw, 6rem)", paddingRight: "clamp(1.5rem, 6vw, 6rem)", borderBottom: "1px solid oklch(0.20 0.02 240)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 70% 50%, oklch(0.15 0.04 240) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "900px" }}>
          {/* Specific brand mark in hero */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "oklch(0.63 0.18 38)" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.75rem", color: "white", letterSpacing: "-0.02em", lineHeight: 1 }}>specific.</span>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 400, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.45 0.02 240)", marginLeft: "0.5rem", borderLeft: "1px solid oklch(0.25 0.02 240)", paddingLeft: "0.75rem" }}>GROUP OF COMPANIES</span>
          </div>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.63 0.18 38)", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
            THE SPECIFIC GROUP
          </p>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.9, color: "white", marginBottom: "1.5rem" }}>
            ONE GROUP.<br />
            <span style={{ color: "oklch(0.63 0.18 38)" }}>NATIONAL DEPTH.</span>
          </h1>
          <p style={{ fontSize: "1.125rem", color: "oklch(0.65 0.02 240)", maxWidth: "640px", lineHeight: 1.7 }}>
            Specific NZ is part of the Specific Group of Companies — a national installation and logistics group operating across Australia and New Zealand. Our clients engage Specific NZ knowing they have the full weight of a multi-branch group behind every project.
          </p>
        </div>
      </section>

      {/* ─── GROUP NETWORK ─── */}
      <section style={{ padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 6rem)", borderBottom: "1px solid oklch(0.16 0.02 240)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.63 0.18 38)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
            GROUP STRUCTURE
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, color: "white", marginBottom: "3rem" }}>
            AUSTRALIA & NEW ZEALAND<br />
            <span style={{ color: "oklch(0.63 0.18 38)" }}>BRANCH NETWORK</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2px" }}>
            {BRANCHES.map((b) => (
              <div key={b.code} style={{ background: b.highlight ? "oklch(0.14 0.03 38)" : "oklch(0.12 0.015 240)", padding: "2rem", borderTop: `3px solid ${b.accent}`, position: "relative" }}>
                {b.highlight && (
                  <span style={{ position: "absolute", top: "1rem", right: "1rem", background: "oklch(0.63 0.18 38)", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.15em", padding: "0.2rem 0.6rem" }}>
                    THIS ENTITY
                  </span>
                )}
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2rem", color: b.accent, lineHeight: 1, marginBottom: "0.5rem" }}>{b.code}</p>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "white", marginBottom: "0.25rem" }}>{b.name}</h3>
                <p style={{ fontSize: "0.8rem", color: "oklch(0.55 0.02 240)", marginBottom: "1.25rem" }}>{b.location}</p>
                <div style={{ borderTop: "1px solid oklch(0.20 0.02 240)", paddingTop: "1rem" }}>
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "white", marginBottom: "0.15rem" }}>{b.manager}</p>
                  <p style={{ fontSize: "0.8rem", color: b.accent, marginBottom: "0.75rem" }}>{b.role}</p>
                  {b.phone && <p style={{ fontSize: "0.8rem", color: "oklch(0.60 0.02 240)" }}>{b.phone}</p>}
                  <p style={{ fontSize: "0.8rem", color: "oklch(0.55 0.02 240)" }}>{b.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HEAD OFFICE TEAM ─── */}
      <section style={{ padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 6rem)", borderBottom: "1px solid oklch(0.16 0.02 240)", background: "oklch(0.11 0.015 240)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.63 0.18 38)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
            LEADERSHIP
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, color: "white", marginBottom: "3rem" }}>
            HEAD OFFICE<br />
            <span style={{ color: "oklch(0.63 0.18 38)" }}>EXECUTIVE TEAM</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "2px" }}>
            {HEAD_OFFICE_TEAM.map((p) => (
              <div key={p.initials} style={{ background: "oklch(0.13 0.02 240)", padding: "1.75rem", borderLeft: "3px solid oklch(0.63 0.18 38)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "oklch(0.20 0.04 240)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "oklch(0.63 0.18 38)", flexShrink: 0 }}>
                    {p.initials}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "white", lineHeight: 1.1 }}>{p.name}</p>
                    <p style={{ fontSize: "0.78rem", color: "oklch(0.63 0.18 38)", marginTop: "0.15rem" }}>{p.role}</p>
                  </div>
                </div>
                {p.phone && <p style={{ fontSize: "0.8rem", color: "oklch(0.58 0.02 240)", marginBottom: "0.2rem" }}>{p.phone}</p>}
                {p.email && <p style={{ fontSize: "0.78rem", color: "oklch(0.50 0.02 240)" }}>{p.email}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NZ TEAM ─── */}
      <section style={{ padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 6rem)", borderBottom: "1px solid oklch(0.16 0.02 240)", position: "relative", overflow: "hidden" }}>
        {/* Auckland skyline — right-side bleed, heavily darkened */}
        <img
          src="/manus-storage/nz_auckland_skyline_dusk_ddb6b5d4.jpg"
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", right: 0, top: 0, width: "55%", height: "100%", objectFit: "cover", objectPosition: "center 40%", filter: "brightness(0.18) saturate(0.7)", zIndex: 0 }}
        />
        {/* Gradient — dark left, fades to photo right */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, oklch(0.09 0.02 240) 0%, oklch(0.09 0.02 240) 40%, transparent 75%)", zIndex: 1 }} />
        {/* SVG botanical fern pattern — brand colours, decorative right-side watermark */}
        <svg
          viewBox="0 0 600 400"
          aria-hidden="true"
          style={{ position: "absolute", right: "-40px", top: "-20px", width: "55%", maxWidth: "580px", height: "auto", opacity: 0.07, pointerEvents: "none", zIndex: 0 }}
        >
          {/* Large silver fern frond — right */}
          <g stroke="oklch(0.60 0.12 185)" strokeWidth="1.5" fill="none">
            {/* Main stem */}
            <path d="M 500 380 Q 420 280 340 160 Q 300 100 280 40" />
            {/* Pinnae pairs — right side */}
            {[{x:480,y:360,a:-35},{x:455,y:330,a:-40},{x:430,y:295,a:-45},{x:400,y:258,a:-50},{x:368,y:218,a:-55},{x:335,y:178,a:-58},{x:305,y:140,a:-60},{x:285,y:105,a:-62}].map((p,i)=>(
              <g key={`r${i}`} transform={`translate(${p.x},${p.y}) rotate(${p.a})`}>
                <path d={`M 0 0 Q ${18-i} -${10+i*1.5} ${30-i*2} -${6+i}`} />
                <path d={`M ${8} -${3+i*0.5} Q ${20-i} -${14+i} ${28-i*2} -${8+i}`} />
                <path d={`M ${15} -${5+i*0.7} Q ${24-i} -${16+i} ${26-i*2} -${10+i}`} />
              </g>
            ))}
            {/* Pinnae pairs — left side */}
            {[{x:480,y:360,a:145},{x:455,y:330,a:140},{x:430,y:295,a:135},{x:400,y:258,a:130},{x:368,y:218,a:125},{x:335,y:178,a:122},{x:305,y:140,a:120},{x:285,y:105,a:118}].map((p,i)=>(
              <g key={`l${i}`} transform={`translate(${p.x},${p.y}) rotate(${p.a})`}>
                <path d={`M 0 0 Q ${18-i} -${10+i*1.5} ${30-i*2} -${6+i}`} />
                <path d={`M ${8} -${3+i*0.5} Q ${20-i} -${14+i} ${28-i*2} -${8+i}`} />
              </g>
            ))}
          </g>
          {/* Second smaller frond — far right, offset */}
          <g stroke="oklch(0.63 0.18 38)" strokeWidth="1" fill="none" opacity="0.6">
            <path d="M 580 400 Q 530 320 490 220 Q 470 170 460 110" />
            {[{x:570,y:385,a:-30},{x:548,y:355,a:-38},{x:522,y:318,a:-44},{x:496,y:278,a:-50},{x:468,y:235,a:-54},{x:472,y:195,a:-57}].map((p,i)=>(
              <g key={`r2${i}`} transform={`translate(${p.x},${p.y}) rotate(${p.a})`}>
                <path d={`M 0 0 Q ${14-i} -${8+i} ${22-i*1.5} -${5+i}`} />
                <path d={`M ${7} -${3+i*0.4} Q ${16-i} -${11+i} ${20-i*1.5} -${7+i}`} />
              </g>
            ))}
            {[{x:570,y:385,a:150},{x:548,y:355,a:142},{x:522,y:318,a:136},{x:496,y:278,a:130},{x:468,y:235,a:126}].map((p,i)=>(
              <g key={`l2${i}`} transform={`translate(${p.x},${p.y}) rotate(${p.a})`}>
                <path d={`M 0 0 Q ${14-i} -${8+i} ${22-i*1.5} -${5+i}`} />
              </g>
            ))}
          </g>
          {/* Koru spiral — top right corner */}
          <g stroke="oklch(0.60 0.12 185)" strokeWidth="1.2" fill="none" opacity="0.5">
            <path d="M 540 50 Q 560 30 575 50 Q 590 70 570 85 Q 548 98 530 80 Q 515 62 530 48 Q 542 36 555 48" />
          </g>
        </svg>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.63 0.18 38)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
            SPECIFIC NZ — AUCKLAND
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, color: "white", marginBottom: "0.75rem" }}>
            NEW ZEALAND<br />
            <span style={{ color: "oklch(0.63 0.18 38)" }}>INSTALLATION TEAM</span>
          </h2>
          <p style={{ fontSize: "0.9375rem", color: "oklch(0.60 0.02 240)", maxWidth: "560px", lineHeight: 1.7, marginBottom: "3rem" }}>
            Based at 1/31 Ha Crescent, Wiri, Auckland. Our NZ team covers North and South Island installations with dedicated site supervisors and senior installers for each region.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "2px" }}>
            {NZ_TEAM.map((p) => (
              <div key={p.initials} style={{ background: "oklch(0.12 0.015 240)", padding: "1.5rem", borderLeft: "3px solid oklch(0.63 0.18 38)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "0.75rem" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "oklch(0.18 0.04 38)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "oklch(0.63 0.18 38)", flexShrink: 0 }}>
                    {p.initials}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", lineHeight: 1.1 }}>{p.name}</p>
                    <p style={{ fontSize: "0.75rem", color: "oklch(0.55 0.02 240)", marginTop: "0.15rem" }}>{p.role}</p>
                  </div>
                </div>
                {p.phone && <p style={{ fontSize: "0.78rem", color: "oklch(0.55 0.02 240)" }}>{p.phone}</p>}
                {p.email && <p style={{ fontSize: "0.75rem", color: "oklch(0.48 0.02 240)" }}>{p.email}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ISO CERTIFICATIONS ─── */}
      <section style={{ padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 6rem)", borderBottom: "1px solid oklch(0.16 0.02 240)", background: "oklch(0.08 0.01 240)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.63 0.18 38)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
            COMPLIANCE
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, color: "white", marginBottom: "0.75rem" }}>
            ISO MANAGEMENT<br />
            <span style={{ color: "oklch(0.63 0.18 38)" }}>CERTIFICATIONS</span>
          </h2>
          <p style={{ fontSize: "0.9375rem", color: "oklch(0.60 0.02 240)", maxWidth: "560px", lineHeight: 1.7, marginBottom: "3rem" }}>
            Specific Group holds three active ISO certifications across safety, quality, and environmental management — audited and renewed annually. All certifications apply to Specific NZ operations.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2px" }}>
            {ISO_CERTS.map((cert) => (
              <div key={cert.code} style={{ background: "oklch(0.12 0.015 240)", padding: "2rem", borderTop: `3px solid ${cert.accent}` }}>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", color: cert.accent, marginBottom: "0.5rem" }}>{cert.code}</p>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "white", lineHeight: 1, marginBottom: "0.25rem" }}>{cert.name}</h3>
                <p style={{ fontSize: "0.8rem", color: "oklch(0.55 0.02 240)", marginBottom: "1.25rem" }}>{cert.desc}</p>
                <div style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div style={{ background: "oklch(0.18 0.02 240)", padding: "0.4rem 0.75rem" }}>
                    <p style={{ fontSize: "0.65rem", color: "oklch(0.45 0.02 240)", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}>LAST AUDIT</p>
                    <p style={{ fontSize: "0.85rem", color: "white", fontWeight: 600 }}>{cert.lastAudit}</p>
                  </div>
                  <div style={{ background: "oklch(0.18 0.02 240)", padding: "0.4rem 0.75rem" }}>
                    <p style={{ fontSize: "0.65rem", color: "oklch(0.45 0.02 240)", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}>NEXT REVIEW</p>
                    <p style={{ fontSize: "0.85rem", color: "white", fontWeight: 600 }}>{cert.nextReview}</p>
                  </div>
                  <div style={{ background: cert.accent, padding: "0.4rem 0.75rem", display: "flex", alignItems: "center" }}>
                    <p style={{ fontSize: "0.75rem", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}>ACTIVE</p>
                  </div>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {cert.scope.map((item) => (
                    <li key={item} style={{ display: "flex", gap: "0.6rem", alignItems: "center", marginBottom: "0.4rem", fontSize: "0.8rem", color: "oklch(0.62 0.02 240)" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: cert.accent, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INSURANCE ─── */}
      <section style={{ padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 6rem)", borderBottom: "1px solid oklch(0.16 0.02 240)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.63 0.18 38)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
              INSURANCE
            </p>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1, color: "white", marginBottom: "1.25rem" }}>
              COMPREHENSIVE<br />
              <span style={{ color: "oklch(0.63 0.18 38)" }}>NZ COVERAGE</span>
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "oklch(0.60 0.02 240)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Specific NZ holds comprehensive commercial insurance through Arthur J. Gallagher (NZ) Limited, covering all operational activities across New Zealand. Certificates of Currency are available on request.
            </p>
            <div style={{ background: "oklch(0.13 0.02 240)", padding: "1.25rem 1.5rem", borderLeft: "3px solid oklch(0.63 0.18 38)" }}>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.15em", color: "oklch(0.45 0.02 240)", marginBottom: "0.35rem" }}>BROKER</p>
              <p style={{ fontSize: "0.9rem", color: "white", fontWeight: 600 }}>Arthur J. Gallagher (NZ) Limited</p>
              <p style={{ fontSize: "0.8rem", color: "oklch(0.55 0.02 240)", marginTop: "0.2rem" }}>Client Ref: 251-0QJF2</p>
            </div>
          </div>
          <div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid oklch(0.63 0.18 38)" }}>
                  <th style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.15em", color: "oklch(0.45 0.02 240)", textAlign: "left", paddingBottom: "0.75rem" }}>POLICY TYPE</th>
                  <th style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.15em", color: "oklch(0.45 0.02 240)", textAlign: "left", paddingBottom: "0.75rem" }}>INSURER</th>
                  <th style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.15em", color: "oklch(0.45 0.02 240)", textAlign: "right", paddingBottom: "0.75rem" }}>COVERAGE</th>
                </tr>
              </thead>
              <tbody>
                {INSURANCE.map((ins, i) => (
                  <tr key={ins.type} style={{ borderBottom: "1px solid oklch(0.16 0.02 240)", background: i % 2 === 0 ? "transparent" : "oklch(0.12 0.01 240)" }}>
                    <td style={{ padding: "0.75rem 0", fontSize: "0.875rem", color: "white" }}>{ins.type}</td>
                    <td style={{ padding: "0.75rem 0", fontSize: "0.8rem", color: "oklch(0.55 0.02 240)" }}>{ins.insurer}</td>
                    <td style={{ padding: "0.75rem 0", fontSize: "0.875rem", color: "oklch(0.63 0.18 38)", textAlign: "right", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>{ins.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── ESG ─── */}
      <section style={{ padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 6rem)", borderBottom: "1px solid oklch(0.16 0.02 240)", background: "oklch(0.08 0.01 240)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.72 0.14 145)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.72 0.14 145)" }} />
            SUSTAINABILITY
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, color: "white", marginBottom: "0.75rem" }}>
            ESG COMMITMENT
          </h2>
          <p style={{ fontSize: "0.9375rem", color: "oklch(0.60 0.02 240)", maxWidth: "560px", lineHeight: 1.7, marginBottom: "3rem" }}>
            Specific Group is committed to responsible operations across Environmental, Social, and Governance pillars — with measurable outcomes and active third-party partnerships.
          </p>

          {/* Three pillars */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2px", marginBottom: "3rem" }}>
            {[
              {
                label: "ENVIRONMENTAL",
                accent: "oklch(0.72 0.14 145)",
                items: ["Carbon neutral roadmap & NGER reporting", "Waste recycling: steel, plastics, timber, cardboard", "Fleet emissions & energy efficiency tracking", "Insignia Project: 80% landfill diversion"],
              },
              {
                label: "SOCIAL",
                accent: "oklch(0.60 0.12 185)",
                items: ["MATES in Construction & mental health support", "Company-assisted financial planning", "Staff awards & recognition programme", "Community activities & volunteer days"],
              },
              {
                label: "GOVERNANCE",
                accent: "oklch(0.63 0.18 38)",
                items: ["ISO 9001, 14001, 45001 — active certifications", "Annual third-party audit programme", "Continuous improvement framework", "Compliance & non-conformance management"],
              },
            ].map((pillar) => (
              <div key={pillar.label} style={{ background: "oklch(0.12 0.015 240)", padding: "2rem", borderTop: `3px solid ${pillar.accent}` }}>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: pillar.accent, marginBottom: "1rem" }}>{pillar.label}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {pillar.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", marginBottom: "0.6rem", fontSize: "0.875rem", color: "oklch(0.65 0.02 240)", lineHeight: 1.5 }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: pillar.accent, flexShrink: 0, marginTop: "0.45rem" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Insignia stats */}
          <div style={{ background: "oklch(0.12 0.015 240)", padding: "2.5rem", borderLeft: "4px solid oklch(0.72 0.14 145)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem", alignItems: "center" }}>
            <div>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.15em", color: "oklch(0.45 0.02 240)", marginBottom: "0.25rem" }}>SUSTAINABILITY IN ACTION</p>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "white" }}>Insignia Project</p>
              <p style={{ fontSize: "0.8rem", color: "oklch(0.55 0.02 240)" }}>Relove Partnership</p>
            </div>
            {[
              { value: "18,724 kg", label: "Total Waste Processed" },
              { value: "14,980 kg", label: "Materials Recycled" },
              { value: "80%", label: "Landfill Diversion Rate" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2.25rem", color: "oklch(0.72 0.14 145)", lineHeight: 1 }}>{stat.value}</p>
                <p style={{ fontSize: "0.78rem", color: "oklch(0.55 0.02 240)", marginTop: "0.25rem" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NZBN + CREDENTIALS ─── */}
      <section style={{ padding: "clamp(3rem, 6vw, 4rem) clamp(1.5rem, 6vw, 6rem)", background: "oklch(0.12 0.015 240)", borderBottom: "1px solid oklch(0.16 0.02 240)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.15em", color: "oklch(0.45 0.02 240)", marginBottom: "0.25rem" }}>NZBN</p>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "white" }}>94 29048495585</p>
          </div>
          <div>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.15em", color: "oklch(0.45 0.02 240)", marginBottom: "0.25rem" }}>REGISTERED ADDRESS</p>
            <p style={{ fontSize: "0.9rem", color: "white" }}>1/31 Ha Crescent, Wiri, Auckland 2104</p>
          </div>
          <div>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.15em", color: "oklch(0.45 0.02 240)", marginBottom: "0.25rem" }}>SITE SAFE</p>
            <p style={{ fontSize: "0.9rem", color: "white" }}>Certified — All Site Personnel</p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {["ISO 45001", "ISO 9001", "ISO 14001", "SiteSafe"].map((badge) => (
              <span key={badge} style={{ background: "oklch(0.18 0.02 240)", border: "1px solid oklch(0.25 0.02 240)", padding: "0.4rem 0.875rem", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", color: "oklch(0.63 0.18 38)" }}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA — Full-bleed silver fern photo with dark overlay ─── */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "560px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Background photo */}
        <img
          src="/manus-storage/pasted_file_but1GE_image_2873955d.png"
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", filter: "brightness(0.35) saturate(0.8)" }}
        />
        {/* Gradient overlay — dark at edges, slightly lifted in centre */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.75) 100%)" }} />
        {/* Orange accent bar at top */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "oklch(0.63 0.18 38)" }} />

        {/* Content — centred */}
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 4rem)", maxWidth: "860px", width: "100%" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.25em", color: "oklch(0.63 0.18 38)", marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
            SPECIFIC GROUP — AUSTRALIA &amp; NEW ZEALAND
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 7vw, 6.5rem)", color: "white", lineHeight: 0.88, marginBottom: "1.75rem", letterSpacing: "-0.01em" }}>
            TIER ONE PROJECTS.<br />
            <span style={{ color: "oklch(0.63 0.18 38)" }}>TIER ONE TEAMS.</span>
          </h2>

          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            Speak to the Specific team about your next project. We respond within the business day.
          </p>

          {/* Contact row */}
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <a href="mailto:info@specificgroup.com.au" style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "white", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", fontWeight: 600, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", padding: "0.6rem 1.25rem", backdropFilter: "blur(4px)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              info@specificgroup.com.au
            </a>
            <a href="tel:1300524461" style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "white", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", fontWeight: 600, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", padding: "0.6rem 1.25rem", backdropFilter: "blur(4px)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              1300 524 461
            </a>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact">
              <button style={{ background: "oklch(0.63 0.18 38)", color: "white", border: "none", padding: "1rem 2.75rem", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.12em", cursor: "pointer" }}>
                GET IN TOUCH
              </button>
            </Link>
            <Link href="/services">
              <button style={{ background: "transparent", color: "white", border: "2px solid rgba(255,255,255,0.5)", padding: "1rem 2.75rem", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.12em", cursor: "pointer" }}>
                OUR CAPABILITIES
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: "oklch(0.06 0.01 240)", borderTop: "1px solid oklch(0.14 0.02 240)", padding: "2rem clamp(1.5rem, 6vw, 6rem)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "oklch(0.63 0.18 38)" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.5rem", color: "white", letterSpacing: "-0.02em" }}>specific.</span>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.15em", color: "oklch(0.35 0.02 240)", marginLeft: "0.5rem", borderLeft: "1px solid oklch(0.20 0.02 240)", paddingLeft: "0.75rem" }}>GROUP OF COMPANIES</span>
          </div>
          {/* Nav */}
          <div style={{ display: "flex", gap: "2rem" }}>
            <Link href="/" style={{ color: "oklch(0.40 0.02 240)", textDecoration: "none", fontSize: "0.7rem", letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>HOME</Link>
            <Link href="/services" style={{ color: "oklch(0.40 0.02 240)", textDecoration: "none", fontSize: "0.7rem", letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>SERVICES</Link>
            <Link href="/projects" style={{ color: "oklch(0.40 0.02 240)", textDecoration: "none", fontSize: "0.7rem", letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>PROJECTS</Link>
            <Link href="/contact" style={{ color: "oklch(0.40 0.02 240)", textDecoration: "none", fontSize: "0.7rem", letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>CONTACT</Link>
          </div>
          {/* Copyright */}
          <p style={{ fontSize: "0.7rem", color: "oklch(0.30 0.02 240)", fontFamily: "'Barlow Condensed', sans-serif" }}>© 2026 Specific Group. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
