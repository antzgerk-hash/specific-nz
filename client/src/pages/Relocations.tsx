/**
 * Office Relocations — Dedicated Page
 * Design: Barlow Condensed display, deep navy base, orange accent
 * Layout: Full-bleed hero → stats strip → masonry gallery → sector capabilities → process → CTA
 */

import { Link } from "wouter";

// ─── Photo manifest ──────────────────────────────────────────────────────────
const GALLERY = [
  {
    src: "/manus-storage/465152782_1461365497858195_4545629930176207314_n_0bc73ee5.jpg",
    alt: "Premium open-plan office fitout — oak joinery workstation dividers with living green wall",
    caption: "Corporate Fitout & Installation",
    wide: true,
  },
  {
    src: "/manus-storage/468136393_1514242565950528_1720603828554255519_n_2f5b8c70.jpg",
    alt: "High-rise commercial office floor — dual-monitor workstations with city skyline views",
    caption: "High-Rise Commercial Relocation",
    wide: false,
  },
  {
    src: "/manus-storage/541927802_18095001934709834_4051062076397602548_n_9bb71aca.jpg",
    alt: "Office relocation in progress — workstations wrapped and ready for move",
    caption: "Workstation Decommission & Reinstall",
    wide: false,
  },
  {
    src: "/manus-storage/464250424_1696533097590040_1092001714958648476_n_48734ce3.jpg",
    alt: "Education sector fitout — collaborative workstations with blue acoustic screens",
    caption: "Education Sector Fitout",
    wide: false,
  },
  {
    src: "/manus-storage/523365730_18091120954709834_3828323367031268639_n_9e117ad6.jpg",
    alt: "Specific team in uniform restocking library shelving — school relocation",
    caption: "School Library Relocation",
    wide: false,
  },
  {
    src: "/manus-storage/550846151_18096284893709834_1046161911667688706_n_ebd0d906.jpg",
    alt: "Specific team member assembling office chair — furniture installation service",
    caption: "Furniture Assembly & Installation",
    wide: false,
  },
  {
    src: "/manus-storage/539962989_18094383262709834_6663385602487519926_n_56e8fbc1.jpg",
    alt: "Healthcare joinery installation — walnut cabinetry with glass-front overhead cupboards",
    caption: "Healthcare Joinery & OS&E",
    wide: true,
  },
  {
    src: "/manus-storage/515258049_18089207524709834_2841524399219625743_n_cf471aa4.jpg",
    alt: "Specific team member installing hospital bed — West Footscray Hospital project",
    caption: "Hospital Equipment Installation",
    wide: false,
  },
];

const SECTORS = [
  {
    icon: "🏢",
    title: "Corporate & Commercial",
    desc: "Full floor decommissions, workstation reinstalls, server room transitions, and day-one operational readiness for ASX-listed tenants and professional services firms.",
    stats: "50,000+ sqm relocated",
  },
  {
    icon: "🏥",
    title: "Healthcare & Medical",
    desc: "Clinical equipment placement, joinery installation, OS&E delivery and commissioning — compliant with infection control protocols and site access requirements.",
    stats: "Tier 1 hospital projects",
  },
  {
    icon: "🎓",
    title: "Education",
    desc: "School and university relocations managed around term dates — library restocking, classroom furniture, AV equipment, and IT infrastructure moves.",
    stats: "Zero disruption to learning",
  },
  {
    icon: "🏨",
    title: "Hospitality & FF&E",
    desc: "Hotel room fitouts, restaurant furniture installation, and OS&E delivery — coordinated with builders and project managers to meet handover milestones.",
    stats: "5-star project delivery",
  },
];

const PROCESS = [
  { num: "01", label: "Site Survey", desc: "We assess access, lift capacity, floor protection requirements, and IT/AV complexity before a single item moves." },
  { num: "02", label: "Move Plan", desc: "A detailed programme with sequenced floor plans, crate allocation, IT disconnect/reconnect schedule, and risk register." },
  { num: "03", label: "Crate Delivery", desc: "Branded Specific Relocations crates and dollies delivered to your premises — labelled, floor-coded, and tracked." },
  { num: "04", label: "Execution", desc: "Uniformed Specific team on-site. Every item tracked from origin to destination. No subcontractors. No surprises." },
  { num: "05", label: "Reinstatement", desc: "Furniture assembled, workstations connected, IT reinstated, and defects rectified — ready for day-one operations." },
  { num: "06", label: "Handover", desc: "Post-move walkthrough, defect sign-off, and a full photographic record of the completed installation." },
];

export default function Relocations() {
  return (
    <div style={{ background: "oklch(0.09 0.01 240)", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>

      {/* ─── NAV ─── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "oklch(0.07 0.01 240 / 0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid oklch(0.16 0.02 240)", padding: "0 clamp(1.5rem, 5vw, 4rem)", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.5rem", color: "white", letterSpacing: "-0.02em" }}>specific.</span>
        </Link>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <Link href="/services" style={{ color: "oklch(0.60 0.02 240)", textDecoration: "none", fontSize: "0.8125rem", letterSpacing: "0.08em", fontWeight: 500 }}>SERVICES</Link>
          <Link href="/projects" style={{ color: "oklch(0.60 0.02 240)", textDecoration: "none", fontSize: "0.8125rem", letterSpacing: "0.08em", fontWeight: 500 }}>PROJECTS</Link>
          <Link href="/contact" style={{ background: "oklch(0.63 0.18 38)", color: "white", textDecoration: "none", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", padding: "0.5rem 1.25rem", fontFamily: "'Barlow Condensed', sans-serif" }}>GET IN TOUCH</Link>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section style={{ position: "relative", height: "85vh", minHeight: "600px", overflow: "hidden", marginTop: "64px" }}>
        <img
          src="/manus-storage/465152782_1461365497858195_4545629930176207314_n_0bc73ee5.jpg"
          alt="Premium open-plan office fitout by Specific"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", filter: "brightness(0.45) saturate(0.9)" }}
        />
        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, oklch(0.07 0.01 240 / 0.92) 0%, oklch(0.07 0.01 240 / 0.55) 55%, transparent 100%)" }} />

        {/* SVG fern accent — top right */}
        <svg style={{ position: "absolute", top: 0, right: 0, width: "420px", height: "420px", opacity: 0.06, pointerEvents: "none" }} viewBox="0 0 420 420" fill="none">
          <path d="M380 20 Q300 80 260 180 Q220 280 200 400" stroke="oklch(0.63 0.18 38)" strokeWidth="2" fill="none"/>
          <path d="M260 180 Q200 140 160 100" stroke="oklch(0.63 0.18 38)" strokeWidth="1.5" fill="none"/>
          <path d="M260 180 Q230 220 180 240" stroke="oklch(0.63 0.18 38)" strokeWidth="1.5" fill="none"/>
          <path d="M290 240 Q240 200 190 190" stroke="oklch(0.63 0.18 38)" strokeWidth="1.5" fill="none"/>
          <path d="M290 240 Q270 280 230 300" stroke="oklch(0.63 0.18 38)" strokeWidth="1.5" fill="none"/>
          <path d="M310 300 Q260 260 210 260" stroke="oklch(0.63 0.18 38)" strokeWidth="1.5" fill="none"/>
          <path d="M310 300 Q295 340 270 360" stroke="oklch(0.63 0.18 38)" strokeWidth="1.5" fill="none"/>
        </svg>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 clamp(1.5rem, 6vw, 6rem) clamp(3rem, 6vw, 5rem)" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.25em", color: "oklch(0.63 0.18 38)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2.5rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
            SPECIFIC GROUP — SERVICES
          </p>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 0.92, color: "white", marginBottom: "1.5rem", maxWidth: "900px" }}>
            CORPORATE &<br />
            <span style={{ color: "oklch(0.63 0.18 38)" }}>OFFICE</span><br />
            RELOCATIONS.
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", color: "oklch(0.72 0.02 240)", maxWidth: "560px", lineHeight: 1.7, marginBottom: "2rem" }}>
            End-to-end commercial moves for Tier 1 construction projects, corporate tenants, healthcare facilities, and educational institutions — delivered with zero operational disruption.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ display: "inline-block", background: "oklch(0.63 0.18 38)", color: "white", textDecoration: "none", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.12em", padding: "0.875rem 2rem" }}>
              REQUEST A MOVE PLAN
            </Link>
            <Link href="/projects" style={{ display: "inline-block", border: "1px solid oklch(0.35 0.02 240)", color: "oklch(0.72 0.02 240)", textDecoration: "none", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.12em", padding: "0.875rem 2rem" }}>
              VIEW PROJECTS
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section style={{ background: "oklch(0.63 0.18 38)", padding: "2rem clamp(1.5rem, 6vw, 6rem)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
          {[
            { num: "15+", label: "Years Experience" },
            { num: "500+", label: "Commercial Moves Completed" },
            { num: "50,000+", label: "Square Metres Relocated" },
            { num: "Zero", label: "Operational Disruptions" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", lineHeight: 1, marginBottom: "0.25rem" }}>{s.num}</p>
              <p style={{ fontSize: "0.75rem", color: "oklch(0.95 0.05 38)", letterSpacing: "0.1em", fontWeight: 600 }}>{s.label.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── MASONRY GALLERY ─── */}
      <section style={{ padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 6rem)", background: "oklch(0.09 0.01 240)" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.63 0.18 38)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
            OUR WORK
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, color: "white", marginBottom: "3rem" }}>
            EVERY MOVE.<br />
            <span style={{ color: "oklch(0.63 0.18 38)" }}>EVERY SECTOR.</span>
          </h2>

          {/* Gallery grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "260px", gap: "4px" }}>
            {GALLERY.map((item, i) => (
              <div
                key={i}
                style={{
                  gridColumn: item.wide ? "span 2" : "span 1",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    position: "absolute", inset: 0, width: "100%", height: "100%",
                    objectFit: "cover", objectPosition: "center",
                    filter: "brightness(0.65) saturate(0.85)",
                    transition: "transform 0.5s ease, filter 0.5s ease",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLImageElement).style.filter = "brightness(0.80) saturate(1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; (e.currentTarget as HTMLImageElement).style.filter = "brightness(0.65) saturate(0.85)"; }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, oklch(0.06 0.01 240 / 0.85) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem", right: "1.25rem" }}>
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.15em", color: "oklch(0.63 0.18 38)", margin: "0 0 0.25rem 0" }}>{item.caption.toUpperCase()}</p>
                </div>
                {/* Orange corner accent */}
                <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: "oklch(0.63 0.18 38 / 0.4)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTOR CAPABILITIES ─── */}
      <section style={{ padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 6rem)", background: "oklch(0.07 0.01 240)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.63 0.18 38)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
            SECTORS WE SERVE
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, color: "white", marginBottom: "3rem" }}>
            BUILT FOR<br />
            <span style={{ color: "oklch(0.63 0.18 38)" }}>COMPLEX ENVIRONMENTS.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2px" }}>
            {SECTORS.map((s, i) => (
              <div key={i} style={{ background: "oklch(0.11 0.015 240)", padding: "2.5rem 2rem", borderTop: "3px solid oklch(0.63 0.18 38)", position: "relative", overflow: "hidden" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.375rem", color: "white", marginBottom: "0.75rem", lineHeight: 1.1 }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "oklch(0.60 0.02 240)", lineHeight: 1.7, marginBottom: "1.5rem" }}>{s.desc}</p>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.15em", color: "oklch(0.63 0.18 38)" }}>{s.stats.toUpperCase()}</p>
                {/* Large ghost number */}
                <p style={{ position: "absolute", bottom: "-0.5rem", right: "1rem", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "5rem", color: "oklch(0.15 0.02 240)", lineHeight: 1, userSelect: "none" }}>0{i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section style={{ padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 6rem)", background: "oklch(0.09 0.01 240)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem, 6vw, 6rem)", alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.63 0.18 38)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
              WHAT'S INCLUDED
            </p>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1, color: "white", marginBottom: "2rem" }}>
              FULL SERVICE.<br />
              <span style={{ color: "oklch(0.63 0.18 38)" }}>NOTHING OUTSOURCED.</span>
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "oklch(0.60 0.02 240)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Specific manages every element of your relocation in-house — from the initial site survey through to post-move defect rectification. No subcontractors. No handoffs. One team, one point of contact, one standard.
            </p>
            <p style={{ fontSize: "0.9375rem", color: "oklch(0.60 0.02 240)", lineHeight: 1.8 }}>
              Our proprietary crate system, branded dollies, and floor protection equipment are deployed on every move — protecting your assets and your premises from day one.
            </p>
          </div>
          <div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Pre-move site survey and access assessment",
                "Detailed move programme with floor plans",
                "Branded Specific Relocations crate delivery",
                "Floor, door frame, and lift protection",
                "IT disconnect, labelling, and reconnect",
                "Furniture disassembly and reassembly",
                "Workstation and monitor reinstallation",
                "AV and technology equipment handling",
                "Post-move defect walkthrough and sign-off",
                "Photographic record of completed installation",
                "Waste removal and recycling management",
                "After-hours and weekend scheduling available",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "0.75rem 0", borderBottom: "1px solid oklch(0.14 0.02 240)", fontSize: "0.875rem", color: "oklch(0.68 0.02 240)", lineHeight: 1.5 }}>
                  <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "oklch(0.63 0.18 38)", marginTop: "0.4rem", flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section style={{ padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 6rem)", background: "oklch(0.07 0.01 240)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.63 0.18 38)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
            HOW WE WORK
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, color: "white", marginBottom: "3rem" }}>
            FROM BRIEF TO<br />
            <span style={{ color: "oklch(0.63 0.18 38)" }}>DAY-ONE OPERATIONS.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2px" }}>
            {PROCESS.map((s) => (
              <div key={s.num} style={{ background: "oklch(0.11 0.015 240)", padding: "2rem 1.75rem", borderTop: "3px solid oklch(0.63 0.18 38)" }}>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2.5rem", color: "oklch(0.20 0.02 240)", lineHeight: 1, marginBottom: "0.75rem" }}>{s.num}</p>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "white", marginBottom: "0.6rem" }}>{s.label}</h3>
                <p style={{ fontSize: "0.8125rem", color: "oklch(0.55 0.02 240)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "420px", display: "flex", alignItems: "center" }}>
        <img
          src="/manus-storage/468136393_1514242565950528_1720603828554255519_n_2f5b8c70.jpg"
          alt="High-rise office relocation"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", filter: "brightness(0.30) saturate(0.7)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, oklch(0.06 0.01 240 / 0.95) 0%, oklch(0.06 0.01 240 / 0.6) 60%, transparent 100%)" }} />

        {/* SVG fern right */}
        <svg style={{ position: "absolute", right: 0, bottom: 0, width: "360px", height: "360px", opacity: 0.07, pointerEvents: "none" }} viewBox="0 0 360 360" fill="none">
          <path d="M320 360 Q260 280 220 180 Q180 80 200 0" stroke="oklch(0.63 0.18 38)" strokeWidth="2" fill="none"/>
          <path d="M220 180 Q170 160 130 130" stroke="oklch(0.63 0.18 38)" strokeWidth="1.5" fill="none"/>
          <path d="M220 180 Q195 220 160 240" stroke="oklch(0.63 0.18 38)" strokeWidth="1.5" fill="none"/>
          <path d="M250 240 Q210 210 175 205" stroke="oklch(0.63 0.18 38)" strokeWidth="1.5" fill="none"/>
          <path d="M250 240 Q235 275 210 295" stroke="oklch(0.63 0.18 38)" strokeWidth="1.5" fill="none"/>
        </svg>

        <div style={{ position: "relative", zIndex: 2, padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 6rem)", maxWidth: "700px" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.63 0.18 38)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
            READY TO MOVE?
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 0.95, color: "white", marginBottom: "1.5rem" }}>
            TELL US ABOUT<br />
            <span style={{ color: "oklch(0.63 0.18 38)" }}>YOUR PROJECT.</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "oklch(0.65 0.02 240)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "480px" }}>
            Whether you're planning a full floor relocation or a staged fitout installation, the Specific team will assess your requirements and provide a detailed move plan — at no obligation.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            <Link href="/contact" style={{ display: "inline-block", background: "oklch(0.63 0.18 38)", color: "white", textDecoration: "none", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.12em", padding: "0.875rem 2rem" }}>
              REQUEST A QUOTE
            </Link>
            <a href="tel:1300524461" style={{ display: "inline-block", border: "1px solid oklch(0.35 0.02 240)", color: "oklch(0.72 0.02 240)", textDecoration: "none", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.12em", padding: "0.875rem 2rem" }}>
              1300 524 461
            </a>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "oklch(0.63 0.18 38)" }} />
            <a href="mailto:info@specificgroup.com.au" style={{ color: "oklch(0.55 0.02 240)", textDecoration: "none", fontSize: "0.875rem" }}>info@specificgroup.com.au</a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: "oklch(0.06 0.01 240)", borderTop: "1px solid oklch(0.14 0.02 240)", padding: "2rem clamp(1.5rem, 6vw, 6rem)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.25rem", color: "white" }}>specific.</span>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Link href="/" style={{ color: "oklch(0.45 0.02 240)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.08em" }}>HOME</Link>
          <Link href="/services" style={{ color: "oklch(0.45 0.02 240)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.08em" }}>SERVICES</Link>
          <Link href="/projects" style={{ color: "oklch(0.45 0.02 240)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.08em" }}>PROJECTS</Link>
          <Link href="/contact" style={{ color: "oklch(0.45 0.02 240)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.08em" }}>CONTACT</Link>
        </div>
        <p style={{ fontSize: "0.75rem", color: "oklch(0.35 0.02 240)" }}>© 2026 Specific Group. All rights reserved.</p>
      </footer>

    </div>
  );
}
