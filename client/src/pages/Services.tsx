/*
 * Services Page — Dark Authority Design
 * Five distinct capabilities for Specific NZ
 * Design: Barlow Condensed headlines, navy/charcoal base, orange accents
 */
import { Link } from "wouter";

const SERVICES = [
  {
    num: "01",
    title: "Specialist Project Logistics",
    subtitle: "FF&E Delivery & Installation",
    accent: "oklch(0.63 0.18 38)",
    img: "/manus-storage/ffe_installation_8482ae72.jpg",
    imgAlt: "Hotel FF&E installation — furniture and fixtures being placed",
    summary:
      "New Zealand's most demanding hotel and commercial fit-out projects require a logistics partner who understands programme-critical timelines, damage-sensitive goods, and the complexity of multi-floor staged delivery. Specific NZ operates as a fully integrated logistics and installation team — not a subcontractor handed a manifest.",
    scope: [
      "Full FF&E delivery, placement, and installation across hotels, stadiums, and commercial developments",
      "Staged floor-by-floor installation coordinated against live construction programmes",
      "QC receipt, inventory management, and damage reporting from point of delivery",
      "Multi-truckload operations with driver assignment, manifest sign-off, and digital handover",
      "Daily client updates via WhatsApp, email, and Aroflo digital reporting",
      "Level-by-level sign-off with photographic installation reports",
    ],
    clients: "Hotel Indigo Auckland · One NZ Stadium · Holiday Inn Express · Rydges/QT Queenstown",
  },
  {
    num: "02",
    title: "Corporate & Office Relocations",
    subtitle: "End-to-End Commercial Moves",
    accent: "oklch(0.60 0.12 185)",
    img: "/manus-storage/465152782_1461365497858195_4545629930176207314_n_0bc73ee5.jpg",
    imgAlt: "Completed corporate office fitout — premium open-plan workspace with timber joinery island and hanging greenery",
    imgPosition: "center center",
    summary:
      "Commercial relocations require precision planning, zero operational disruption, and a team that understands the difference between moving boxes and managing a business transition. Specific NZ plans, manages, and executes corporate moves for offices, schools, and institutions — delivering continuity from day one.",
    scope: [
      "Full project management from site survey through to post-move defect rectification",
      "Office, school, hospital, and institutional relocations across New Zealand",
      "Make-good and reinstatement services for vacated tenancies",
      "IT and AV equipment disconnection, transport, and reconnection coordination",
      "Out-of-hours and weekend moves to minimise business disruption",
      "Dedicated project manager assigned from brief through to handover",
    ],
    clients: "Commercial offices · Educational institutions · Healthcare facilities · Government tenancies",
    link: "/relocations",
  },
  {
    num: "03",
    title: "Detailed Joinery & FF&E Installations",
    subtitle: "Precision Fit-Out to Exacting Tolerances",
    accent: "oklch(0.72 0.14 145)",
    img: "/manus-storage/mecuremelbourne2026bathrooms_d412ea97.jpeg",
    imgAlt: "Completed bathroom installation — Mercure Melbourne 2026, joinery and fixtures by Specific",
    summary:
      "Bespoke joinery and high-specification FF&E packages demand installation teams who read drawings, work to millimetre tolerances, and understand the relationship between joinery, services, and finishes. Specific NZ's installation crews are trained in detailed joinery placement, scribing, and level-critical fixing — not general labour.",
    scope: [
      "Bespoke joinery installation including wardrobes, vanities, cabinetry, and reception counters",
      "High-specification FF&E placement to approved floorplans and room data sheets",
      "Scribing, levelling, and fixing to manufacturer and architect specifications",
      "Artwork hanging and positioning to curator or designer specifications",
      "Coordination with trades for services integration (electrical, plumbing rough-in)",
      "Defect identification, rectification scheduling, and final sign-off documentation",
    ],
    clients: "Hotel Indigo Auckland · Grand Millennium Auckland · Ramada Newmarket · La Quinta Ellerslie",
  },
  {
    num: "04",
    title: "AV Installations & OS&E Installations",
    subtitle: "Audio Visual & Operating Supplies",
    accent: "oklch(0.65 0.15 280)",
    img: "/manus-storage/av_installation_6826eb6f.jpg",
    imgAlt: "Professional AV installation in a hotel conference facility",
    summary:
      "Audio visual systems and operating supplies & equipment require coordinated delivery, precise placement, and commissioning that integrates with the broader fit-out programme. Specific NZ manages the full AV and OS&E installation scope — from unboxing and placement through to system commissioning and handover documentation.",
    scope: [
      "In-room AV installation including televisions, mounting systems, and control panels",
      "Conference and event AV system installation and commissioning",
      "OS&E delivery, placement, and inventory reconciliation across all room types",
      "Minibar, safe, and in-room equipment installation to brand standards",
      "Coordination with AV suppliers and hotel operators for commissioning sign-off",
      "Full photographic OS&E placement records and room-by-room handover reports",
    ],
    clients: "Holiday Inn Express · Voco Auckland · Tryp Wellington · Drifter Christchurch",
  },
  {
    num: "05",
    title: "Warehousing, Storage & Handling",
    subtitle: "Secure Storage for High-Value & Sensitive Items",
    accent: "oklch(0.75 0.10 55)",
    img: "/manus-storage/Screenshot2026-04-08013641_5a20557d.png",
    imgAlt: "Specific warehouse — timber storage vaults and forklift operations in secure facility",
    summary:
      "Premium FF&E, commissioned artworks, and high-specification AV equipment require more than a rack in a warehouse. Specific NZ provides secure, professionally managed storage with white-glove handling protocols — purpose-built for the construction and hospitality sectors where the cost of damage is measured in programme delays, not just replacement value.",
    scope: [
      "Secure warehousing for FF&E, joinery, and high-value equipment pre-installation",
      "Specialist sensitive storage for fine art, commissioned pieces, and gallery-quality works",
      "Climate-aware storage protocols for temperature and humidity-sensitive items",
      "White-glove handling for premium AV, bespoke furniture, and fragile goods",
      "Inventory management, condition reporting, and photographic stock records",
      "Staged release and delivery to site coordinated with installation programme",
    ],
    clients: "Hotel Indigo Auckland (Stuart Robertson commissioned artworks) · One NZ Stadium · Grand Millennium Auckland",
  },
];

const PROCESS_STEPS = [
  { step: "01", label: "Account Setup & Kickoff", desc: "Client onboarding, Aroflo project creation, compliance docs, SWMS, ISO certificates issued." },
  { step: "02", label: "Pre-Installation Planning", desc: "Site induction, toolbox talk, floorplan review, staged delivery schedule confirmed with PM." },
  { step: "03", label: "Delivery & QC Receipt", desc: "Goods received at warehouse, condition checked, photographed, and inventoried against manifest." },
  { step: "04", label: "Staged Installation", desc: "Level-by-level installation per approved floorplan. Daily updates to client via WhatsApp and email." },
  { step: "05", label: "Sign-Off & Defects", desc: "Level sign-off with client PM. Defects identified, rectification scheduled, and completed." },
  { step: "06", label: "Handover Report", desc: "Digital handover via Aroflo. Photographic installation report. Team debrief and lessons captured." },
];

export default function Services() {
  return (
    <div style={{ background: "oklch(0.10 0.01 240)", minHeight: "100vh", fontFamily: "'Barlow', sans-serif" }}>

      {/* ─── HERO ─── */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "80px",
          paddingLeft: "clamp(1.5rem, 6vw, 6rem)",
          paddingRight: "clamp(1.5rem, 6vw, 6rem)",
          borderBottom: "1px solid oklch(0.20 0.02 240)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 70% 50%, oklch(0.15 0.04 240) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "900px" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.63 0.18 38)", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
            SPECIFIC NEW ZEALAND — CAPABILITIES
          </p>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.9, color: "white", marginBottom: "1.5rem" }}>
            FIVE DISTINCT<br />
            <span style={{ color: "oklch(0.63 0.18 38)" }}>CAPABILITIES.</span>
          </h1>
          <p style={{ fontSize: "1.125rem", color: "oklch(0.65 0.02 240)", maxWidth: "600px", lineHeight: 1.7 }}>
            Specific NZ operates as a fully integrated installation and logistics company. From the warehouse to the wall, every capability is delivered by our own trained teams — not subcontracted, not outsourced.
          </p>
        </div>
      </section>

      {/* ─── FIVE CAPABILITIES ─── */}
      {SERVICES.map((svc, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={svc.num}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              minHeight: "560px",
              borderBottom: "1px solid oklch(0.16 0.02 240)",
            }}
          >
            {/* Image */}
            <div style={{ order: isEven ? 0 : 1, position: "relative", overflow: "hidden" }}>
              <img src={svc.img} alt={svc.imgAlt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: (svc as any).imgPosition || "center", filter: "brightness(0.70)" }} />
              <div style={{ position: "absolute", bottom: "2rem", left: isEven ? "2rem" : "auto", right: isEven ? "auto" : "2rem", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(4rem, 8vw, 7rem)", lineHeight: 1, color: "white", opacity: 0.12, userSelect: "none" }}>
                {svc.num}
              </div>
              <div style={{ position: "absolute", top: 0, left: isEven ? 0 : "auto", right: isEven ? "auto" : 0, width: "4px", height: "100%", background: svc.accent }} />
            </div>

            {/* Content */}
            <div style={{ order: isEven ? 1 : 0, padding: "clamp(2.5rem, 5vw, 4rem)", display: "flex", flexDirection: "column", justifyContent: "center", background: isEven ? "oklch(0.12 0.015 240)" : "oklch(0.10 0.01 240)" }}>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", color: svc.accent, marginBottom: "0.75rem" }}>
                {svc.num} — {svc.subtitle.toUpperCase()}
              </p>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.75rem)", lineHeight: 1, color: "white", marginBottom: "1.25rem" }}>
                {svc.title}
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "oklch(0.65 0.02 240)", lineHeight: 1.75, marginBottom: "1.75rem", maxWidth: "520px" }}>
                {svc.summary}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.75rem 0" }}>
                {svc.scope.map((item, j) => (
                  <li key={j} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.6rem", fontSize: "0.875rem", color: "oklch(0.68 0.02 240)", lineHeight: 1.5 }}>
                    <span style={{ display: "inline-block", width: "5px", height: "5px", borderRadius: "50%", background: svc.accent, marginTop: "0.45rem", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ borderTop: "1px solid oklch(0.20 0.02 240)", paddingTop: "1rem" }}>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.15em", color: "oklch(0.40 0.02 240)", marginBottom: "0.35rem" }}>
                  REPRESENTATIVE PROJECTS
                </p>
                <p style={{ fontSize: "0.8125rem", color: "oklch(0.52 0.02 240)", lineHeight: 1.5, marginBottom: (svc as any).link ? "1.25rem" : 0 }}>
                  {svc.clients}
                </p>
                {(svc as any).link && (
                  <Link href={(svc as any).link} style={{ display: "inline-block", background: "oklch(0.63 0.18 38)", color: "white", textDecoration: "none", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.12em", padding: "0.6rem 1.5rem" }}>
                    LEARN MORE →
                  </Link>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* ─── EQUIPMENT STRIP ─── branded assets gallery */}
      <section style={{ background: "oklch(0.08 0.01 240)", padding: "0", overflow: "hidden", borderBottom: "1px solid oklch(0.16 0.02 240)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", height: "280px" }}>
          {[
            { src: "/manus-storage/VicTeamLoadingequimentatWalkinshawrelocation2025_b694a8ae.png", pos: "center 30%", label: "WALKINSHAW RELOCATION" },
            { src: "/manus-storage/Screenshot2026-04-08014112_3fe21c4c.png", pos: "center center", label: "SPECIFIC RELOCATIONS CRATES" },
            { src: "/manus-storage/Screenshot2026-04-08014047_ca2ed929.png", pos: "center center", label: "BRANDED CAGE TROLLEYS" },
            { src: "/manus-storage/Screenshot2026-04-08013641_5a20557d.png", pos: "center center", label: "SECURE STORAGE FACILITY" },
          ].map((item, i) => (
            <div key={i} style={{ position: "relative", overflow: "hidden" }}>
              <img src={item.src} alt={item.label} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: item.pos, filter: "brightness(0.55) saturate(0.85)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, oklch(0.06 0.01 240) 0%, transparent 50%)" }} />
              <div style={{ position: "absolute", bottom: "1rem", left: "1rem", right: "1rem" }}>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.15em", color: "oklch(0.63 0.18 38)", margin: 0 }}>{item.label}</p>
              </div>
              {i < 3 && <div style={{ position: "absolute", top: 0, right: 0, width: "1px", height: "100%", background: "oklch(0.16 0.02 240)" }} />}
            </div>
          ))}
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section style={{ padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 6rem)", background: "oklch(0.08 0.01 240)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", color: "oklch(0.63 0.18 38)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ display: "inline-block", width: "2rem", height: "2px", background: "oklch(0.63 0.18 38)" }} />
            HOW WE WORK
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, color: "white", marginBottom: "3rem" }}>
            FROM BRIEF TO HANDOVER.<br />
            <span style={{ color: "oklch(0.63 0.18 38)" }}>EVERY STEP MANAGED.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2px" }}>
            {PROCESS_STEPS.map((s) => (
              <div key={s.step} style={{ background: "oklch(0.12 0.015 240)", padding: "2rem 1.75rem", borderTop: "3px solid oklch(0.63 0.18 38)" }}>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2.5rem", color: "oklch(0.20 0.02 240)", lineHeight: 1, marginBottom: "0.75rem" }}>{s.step}</p>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "white", marginBottom: "0.6rem" }}>{s.label}</h3>
                <p style={{ fontSize: "0.8125rem", color: "oklch(0.55 0.02 240)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA — REDESIGNED ─── */}
      <section style={{ position: "relative", overflow: "hidden", background: "oklch(0.08 0.01 240)" }}>

        {/* Large diagonal orange slab — top portion */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "oklch(0.63 0.18 38)",
          clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
        }} />

        {/* Subtle diagonal hatching texture over orange */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 30px, rgba(0,0,0,0.05) 30px, rgba(0,0,0,0.05) 60px)",
          clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
          pointerEvents: "none",
        }} />

        {/* Large ghost number watermark */}
        <div style={{
          position: "absolute", right: "4rem", top: "1rem",
          fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
          fontSize: "clamp(8rem, 18vw, 16rem)", lineHeight: 1,
          color: "rgba(0,0,0,0.08)", userSelect: "none", pointerEvents: "none",
          letterSpacing: "-0.04em",
        }}>NZ</div>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, padding: "clamp(4rem, 7vw, 6rem) clamp(1.5rem, 6vw, 6rem) clamp(5rem, 9vw, 7rem)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "center" }}>

            {/* Left — headline */}
            <div>
              <p style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                fontSize: "0.7rem", letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.60)", marginBottom: "1.25rem",
                display: "flex", alignItems: "center", gap: "0.6rem",
              }}>
                <span style={{ display: "inline-block", width: "1.5rem", height: "2px", background: "rgba(255,255,255,0.45)" }} />
                SPECIFIC NEW ZEALAND
              </p>
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
                fontSize: "clamp(2.8rem, 5vw, 4.5rem)", color: "white",
                lineHeight: 0.92, marginBottom: "1.5rem",
              }}>
                SPECIFIC SCOPE.<br />
                <span style={{ WebkitTextStroke: "2px white", color: "transparent" }}>SPECIFIC RESULTS.</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "400px" }}>
                Talk to the Specific team about your next project. We respond within the business day.
              </p>

              {/* Credential strip */}
              <div style={{ display: "flex", gap: "1.5rem", marginTop: "2rem", flexWrap: "wrap" }}>
                {["ISO 45001", "ISO 9001", "ISO 14001"].map((cert) => (
                  <div key={cert} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "rgba(255,255,255,0.5)" }} />
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.55)" }}>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — contact card */}
            <div style={{
              background: "oklch(0.13 0.022 240)",
              border: "1px solid oklch(0.22 0.03 240)",
              padding: "clamp(1.75rem, 3vw, 2.5rem)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
            }}>
              <p style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                fontSize: "0.65rem", letterSpacing: "0.22em",
                color: "oklch(0.63 0.18 38)", marginBottom: "1.75rem",
                borderBottom: "1px solid oklch(0.20 0.025 240)", paddingBottom: "1rem",
              }}>
                GET IN TOUCH — SPECIFIC TEAM
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>

                {/* Email */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: "38px", height: "38px", background: "oklch(0.63 0.18 38)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.18em", color: "oklch(0.42 0.02 240)", marginBottom: "0.2rem" }}>EMAIL</p>
                    <a href="mailto:info@specificgroup.com.au" style={{ color: "white", fontSize: "0.9375rem", fontWeight: 500, textDecoration: "none" }}>
                      info@specificgroup.com.au
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: "38px", height: "38px", background: "oklch(0.60 0.12 185)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.18em", color: "oklch(0.42 0.02 240)", marginBottom: "0.2rem" }}>NZ DIRECT</p>
                    <a href="tel:+64204243242" style={{ color: "white", fontSize: "0.9375rem", fontWeight: 500, textDecoration: "none" }}>
                      +64 204 243 242
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: "38px", height: "38px", background: "oklch(0.20 0.03 240)",
                    border: "1px solid oklch(0.28 0.03 240)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="oklch(0.63 0.18 38)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.18em", color: "oklch(0.42 0.02 240)", marginBottom: "0.2rem" }}>GROUP WEBSITE</p>
                    <a href="https://specificgroup.com.au" target="_blank" rel="noopener noreferrer" style={{ color: "oklch(0.63 0.18 38)", fontSize: "0.9375rem", fontWeight: 500, textDecoration: "none" }}>
                      specificgroup.com.au
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link href="/contact">
                  <button style={{
                    background: "oklch(0.63 0.18 38)", color: "white", border: "none",
                    padding: "0.9rem 2rem",
                    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                    fontSize: "0.8rem", letterSpacing: "0.12em", cursor: "pointer", textTransform: "uppercase",
                  }}>
                    SEND ENQUIRY
                  </button>
                </Link>
                <Link href="/projects">
                  <button style={{
                    background: "transparent", color: "oklch(0.65 0.025 240)",
                    border: "1px solid oklch(0.28 0.03 240)",
                    padding: "0.9rem 2rem",
                    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                    fontSize: "0.8rem", letterSpacing: "0.12em", cursor: "pointer", textTransform: "uppercase",
                  }}>
                    VIEW PROJECTS
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
