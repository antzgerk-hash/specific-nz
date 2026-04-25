/*
 * Services Page — Dark Authority Design
 * Two distinct service categories:
 *   1. Specialist Project Logistics — Hotels, Stadiums, Healthcare, Tourism
 *   2. Corporate & Office Relocations — Office moves, workstations, IT
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const specialistServices = [
  {
    number: "01",
    title: "FF&E Delivery & Installation",
    tagline: "From receipt to room-ready.",
    body: "Specific NZ manages the complete FF&E chain for hospitality, stadium, and public venue projects. We receive, QC, warehouse, stage, and install furniture, fixtures, and equipment to programme — across any scale, any floor count, any site complexity. Our teams are experienced in hotel room packages, corporate suite fit-outs, restaurant and bar FF&E, and specialist public venue installations.",
    capabilities: [
      "Receipt and QC at our Auckland warehouse",
      "Staged delivery sequenced to programme",
      "Floor-by-floor and room-by-room installation",
      "Joinery, loose furniture, soft furnishings",
      "Electricals, AV, refrigeration, whitegoods",
      "Close-out documentation and sign-off",
    ],
    image: "/manus-storage/indigo_room2_9aeecf11.jpg",
  },
  {
    number: "02",
    title: "Specialist Project Installations",
    tagline: "Complex environments. Immovable deadlines.",
    body: "Hotels, stadiums, healthcare facilities, and tourism venues share one thing: a hard opening date and zero tolerance for failure. Specific NZ installs FF&E and OS&E across New Zealand's most demanding project environments — from multi-level hotel fit-outs to alpine gondola restaurants and major public venues. We understand programme accountability, site protocols, and the consequences of getting it wrong.",
    capabilities: [
      "Hotel room and suite FF&E installation",
      "Stadium and public venue fit-out",
      "Healthcare and aged-care installations",
      "Tourism and hospitality venue FF&E",
      "OS&E placement and room dressing",
      "Site induction compliance and H&S management",
    ],
    image: "/manus-storage/tekaha_joinery_suite_e199cc08.webp",
  },
  {
    number: "03",
    title: "Logistics Management",
    tagline: "One point of accountability across the full chain.",
    body: "When a project involves multiple suppliers, multiple delivery windows, and a single hard opening date, you need one logistics partner who owns the full chain. Specific NZ provides warehousing, receipt, QC, sequencing, and coordinated delivery across complex multi-supplier programmes — giving you a single point of accountability from first delivery to final installation.",
    capabilities: [
      "Multi-supplier receipt and QC",
      "Secure warehousing and staging",
      "Delivery sequencing and programme management",
      "Damage management and claims coordination",
      "Real-time reporting and status updates",
      "National delivery capability",
    ],
    image: "/manus-storage/fleet_trucks_e875af64.png",
  },
];

const relocationServices = [
  {
    number: "01",
    title: "Corporate & Office Relocations",
    tagline: "Planned, managed, and delivered.",
    body: "Corporate relocations require more than a truck and a team. Specific NZ plans and manages the full relocation programme — from pre-move audits and asset tagging through to transport, installation at the new location, and post-move stabilisation. We minimise downtime and protect your assets throughout. Whether you are moving 20 workstations or 500, we deliver to floor plan.",
    capabilities: [
      "Pre-move planning and asset auditing",
      "Branded crates and specialist packing",
      "Workstation and task seating relocation",
      "Floor-plan-based reinstallation",
      "Post-move stabilisation and close-out",
      "Storage and interim warehousing",
    ],
    image: "/manus-storage/equipment_crates_22489160.png",
  },
  {
    number: "02",
    title: "IT & Technology Coordination",
    tagline: "Disconnect, transport, reconnect — on schedule.",
    body: "Technology assets require careful handling and coordination with your IT team. Specific NZ manages the physical disconnect, safe transport, and reinstallation of IT and AV equipment as part of a broader relocation programme. We work alongside your IT provider to ensure systems are back online to your required timeline.",
    capabilities: [
      "IT equipment disconnect and labelling",
      "Safe transport of servers, screens, and peripherals",
      "Reinstallation to IT team specification",
      "AV system relocation",
      "Cable management and tidy-up",
      "Coordination with client IT team",
    ],
    image: "/manus-storage/equipment_rollcages_e1af2686.png",
  },
  {
    number: "03",
    title: "Warehousing & Storage",
    tagline: "Secure, managed, and ready when you need it.",
    body: "Specific NZ provides secure warehousing and managed storage across our New Zealand facilities. Whether you need short-term staging for a project delivery or longer-term storage between tenancies, our facilities are managed, insured, and integrated with our delivery and installation capability.",
    capabilities: [
      "Short and long-term storage",
      "Secure, insured facilities",
      "Inventory management and reporting",
      "Staged release to project programme",
      "Integration with delivery and installation",
      "Auckland, Christchurch, and South Island coverage",
    ],
    image: "/manus-storage/rydges_qt_truck_9a7c8e21.jpeg",
  },
];

const specialistSectors = [
  { name: "Hotels & Hospitality", desc: "IHG, Marriott, QT Hotels, and independent brands across New Zealand." },
  { name: "Stadiums & Public Venues", desc: "Large-scale public venue FF&E with hard opening deadlines — including One NZ Stadium, Christchurch." },
  { name: "Tourism & Attractions", desc: "High-complexity tourism venues including gondola, alpine, and waterfront environments." },
  { name: "Healthcare & Aged Care", desc: "Careful handling, documentation, and compliance-led installation for healthcare environments." },
  { name: "Student Accommodation", desc: "High-density room package delivery and installation for PBSA operators." },
  { name: "Retail & Food & Beverage", desc: "Restaurant, bar, and retail fit-out FF&E delivery and installation." },
];

export default function Services() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.16 0.035 240)" }}>
      <Navigation />

      {/* Page header */}
      <section
        className="pt-32 pb-16 lg:pt-40 lg:pb-20"
        style={{ background: "oklch(0.12 0.03 240)", borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}
      >
        <div className="container">
          <p className="section-label mb-4">What We Do</p>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              color: "white",
              lineHeight: 0.95,
            }}
          >
            SERVICES
          </h1>
          <p
            className="mt-6 max-w-2xl"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "oklch(0.65 0.025 240)", lineHeight: 1.65 }}
          >
            Specific NZ operates across two distinct service lines — specialist project logistics for hotels, stadiums, and complex venues, and corporate relocation services for office and commercial environments. Each requires a different capability set. We deliver both.
          </p>
        </div>
      </section>

      {/* ── CATEGORY 1: SPECIALIST PROJECT LOGISTICS ── */}
      <section className="py-16 lg:py-24">
        <div className="container">
          {/* Category header */}
          <div
            className="mb-16 pb-8"
            style={{ borderBottom: "2px solid oklch(0.63 0.18 38)" }}
          >
            <p className="section-label mb-3">Category One</p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "white",
                lineHeight: 0.95,
              }}
            >
              SPECIALIST PROJECT
              <br />
              <span style={{ color: "oklch(0.63 0.18 38)" }}>LOGISTICS</span>
            </h2>
            <p
              className="mt-4 max-w-2xl"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "oklch(0.65 0.025 240)", lineHeight: 1.65 }}
            >
              For hotels, stadiums, healthcare facilities, tourism venues, and complex public environments where the opening date is fixed and the logistics cannot fail. We manage the full chain — from warehouse receipt through to final room sign-off.
            </p>
          </div>

          <div className="space-y-24">
            {specialistServices.map((s, i) => (
              <div
                key={s.number}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <p
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      letterSpacing: "0.15em",
                      color: "oklch(0.63 0.18 38)",
                      marginBottom: "1rem",
                    }}
                  >
                    {s.number}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      color: "white",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mb-5"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "oklch(0.60 0.12 185)", fontWeight: 500 }}
                  >
                    {s.tagline}
                  </p>
                  <p
                    className="mb-8"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "oklch(0.65 0.025 240)", lineHeight: 1.75 }}
                  >
                    {s.body}
                  </p>
                  <ul className="space-y-2">
                    {s.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-3">
                        <span style={{ color: "oklch(0.63 0.18 38)", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>—</span>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "oklch(0.72 0.025 240)" }}>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`} style={{ aspectRatio: "4/3" }}>
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(135deg, oklch(0.10 0.03 240 / 0.3) 0%, transparent 60%)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Sectors */}
      <section
        className="py-16 lg:py-20"
        style={{ background: "oklch(0.13 0.032 240)", borderTop: "1px solid oklch(1 0 0 / 0.08)" }}
      >
        <div className="container">
          <p className="section-label mb-4">Specialist Project Sectors</p>
          <h2
            className="mb-12"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "white",
            }}
          >
            INDUSTRY EXPERIENCE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "oklch(1 0 0 / 0.06)" }}>
            {specialistSectors.map((sector) => (
              <div key={sector.name} className="p-8" style={{ background: "oklch(0.13 0.032 240)" }}>
                <h3
                  className="mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "white" }}
                >
                  {sector.name}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "oklch(0.62 0.025 240)", lineHeight: 1.6 }}>
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div
        className="py-16 lg:py-20"
        style={{ background: "oklch(0.10 0.025 240)", borderTop: "1px solid oklch(1 0 0 / 0.08)", borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Category Two</p>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  color: "white",
                  lineHeight: 0.95,
                }}
              >
                CORPORATE &amp;
                <br />
                <span style={{ color: "oklch(0.60 0.12 185)" }}>OFFICE RELOCATIONS</span>
              </h2>
              <p
                className="mt-4"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "oklch(0.65 0.025 240)", lineHeight: 1.65 }}
              >
                For businesses moving offices, consolidating workplaces, or managing commercial fit-out installations. We plan, manage, and execute the full relocation programme — minimising downtime and protecting your assets.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { stat: "500+", label: "Workstations Relocated" },
                { stat: "Zero", label: "Missed Opening Dates" },
                { stat: "NZ-Wide", label: "Coverage" },
              ].map((item) => (
                <div key={item.label} className="text-center p-6" style={{ background: "oklch(0.16 0.035 240)", borderTop: "2px solid oklch(0.60 0.12 185)" }}>
                  <p
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "2rem",
                      color: "white",
                      lineHeight: 1,
                    }}
                  >
                    {item.stat}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.62 0.025 240)", marginTop: "0.5rem", lineHeight: 1.4 }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CATEGORY 2: CORPORATE RELOCATIONS ── */}
      <section className="py-16 lg:py-24">
        <div className="container space-y-24">
          {relocationServices.map((s, i) => (
            <div
              key={s.number}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <p
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    color: "oklch(0.60 0.12 185)",
                    marginBottom: "1rem",
                  }}
                >
                  {s.number}
                </p>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: "white",
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="mb-5"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "oklch(0.60 0.12 185)", fontWeight: 500 }}
                >
                  {s.tagline}
                </p>
                <p
                  className="mb-8"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "oklch(0.65 0.025 240)", lineHeight: 1.75 }}
                >
                  {s.body}
                </p>
                <ul className="space-y-2">
                  {s.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span style={{ color: "oklch(0.60 0.12 185)", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>—</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "oklch(0.72 0.025 240)" }}>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`} style={{ aspectRatio: "4/3" }}>
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, oklch(0.10 0.03 240 / 0.3) 0%, transparent 60%)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet & Equipment */}
      <section
        className="py-16 lg:py-20"
        style={{ background: "oklch(0.13 0.032 240)", borderTop: "1px solid oklch(1 0 0 / 0.08)" }}
      >
        <div className="container">
          <p className="section-label mb-4">Our Capability</p>
          <h2
            className="mb-12"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "white",
            }}
          >
            FLEET &amp; EQUIPMENT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "/manus-storage/fleet_trucks_e875af64.png", label: "Branded Fleet", desc: "Dedicated Specific NZ vehicles from vans to heavy rigid trucks — all liveried and purpose-fitted." },
              { img: "/manus-storage/equipment_crates_22489160.png", label: "Specialist Crates", desc: "Branded relocation crates and dollies for safe, trackable asset transport." },
              { img: "/manus-storage/equipment_rollcages_e1af2686.png", label: "Roll Cages", desc: "Branded roll cages for warehouse staging and sequenced delivery to floor." },
            ].map((item) => (
              <div key={item.label} className="overflow-hidden" style={{ background: "oklch(0.20 0.04 240)" }}>
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "white" }}>
                    {item.label}
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "oklch(0.62 0.025 240)", marginTop: "0.25rem" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 lg:py-20"
        style={{ background: "oklch(0.12 0.03 240)", borderTop: "1px solid oklch(1 0 0 / 0.08)" }}
      >
        <div className="container text-center">
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "white",
              lineHeight: 0.95,
            }}
          >
            TELL US ABOUT
            <br />
            <span style={{ color: "oklch(0.63 0.18 38)" }}>YOUR PROJECT</span>
          </h2>
          <p
            className="mb-8 max-w-xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "oklch(0.65 0.025 240)", lineHeight: 1.65 }}
          >
            Whether you're planning a hotel fit-out, a stadium installation, or an office relocation, we'd like to hear from you.
          </p>
          <Link href="/contact">
            <button
              style={{
                background: "oklch(0.63 0.18 38)",
                color: "white",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "1rem 2.5rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              Get In Touch →
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
