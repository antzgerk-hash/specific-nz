/*
 * Services Page — Dark Authority Design
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const services = [
  {
    number: "01",
    title: "FF&E Delivery & Installation",
    tagline: "From receipt to room-ready.",
    body: "Specific NZ manages the complete FF&E chain for hospitality, commercial, and public venue projects. We receive, QC, warehouse, stage, and install furniture, fixtures, and equipment to programme — across any scale, any floor count, any site complexity. Our teams are experienced in hotel room packages, corporate suite fit-outs, restaurant and bar FF&E, and specialist public venue installations.",
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
    title: "Commercial Installations",
    tagline: "Workstations to whitegoods — installed right.",
    body: "Specific NZ installs commercial fit-out items across corporate, healthcare, and public sector environments. Workstations, task seating, storage systems, AV equipment, whitegoods, and specialist joinery — all installed by dedicated teams who understand programme accountability and site protocols.",
    capabilities: [
      "Workstation and task seating installation",
      "Storage and shelving systems",
      "AV and technology fit-out",
      "Whitegoods and appliance installation",
      "Specialist joinery and cabinetry",
      "Site induction compliance and H&S management",
    ],
    image: "/manus-storage/tekaha_joinery_suite_e199cc08.webp",
  },
  {
    number: "03",
    title: "Relocations",
    tagline: "Planned, managed, and delivered.",
    body: "Corporate and commercial relocations require more than a truck and a team. Specific NZ plans and manages the full relocation programme — from pre-move audits and asset tagging through to transport, installation at the new location, and post-move stabilisation. We minimise downtime and protect your assets throughout.",
    capabilities: [
      "Pre-move planning and asset auditing",
      "Branded crates and specialist packing",
      "IT and technology disconnect/reconnect coordination",
      "Floor-plan-based reinstallation",
      "Post-move stabilisation and close-out",
      "Storage and interim warehousing",
    ],
    image: "/manus-storage/equipment_crates_22489160.png",
  },
  {
    number: "04",
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

const sectors = [
  { name: "Hospitality & Hotels", desc: "IHG, Marriott, and independent hotel brands across New Zealand." },
  { name: "Tourism & Attractions", desc: "High-complexity tourism venues including gondola and alpine environments." },
  { name: "Stadiums & Public Venues", desc: "Large-scale public venue FF&E with hard opening deadlines." },
  { name: "Corporate & Commercial", desc: "Office fit-out, workstation installation, and corporate relocation." },
  { name: "Student Accommodation", desc: "High-density room package delivery and installation." },
  { name: "Healthcare", desc: "Careful handling and documentation-led installation for healthcare environments." },
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
            Specific NZ delivers specialist logistics, FF&E installation, and commercial relocation services across New Zealand. Every service is built around programme accountability and specialist capability.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 lg:py-24">
        <div className="container space-y-24">
          {services.map((s, i) => (
            <div
              key={s.number}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
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
                <h2
                  className="heading-accent mb-3"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: "white",
                  }}
                >
                  {s.title}
                </h2>
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
      </section>

      {/* Sectors */}
      <section
        className="py-16 lg:py-20"
        style={{ background: "oklch(0.13 0.032 240)", borderTop: "1px solid oklch(1 0 0 / 0.08)" }}
      >
        <div className="container">
          <p className="section-label mb-4">Sectors We Serve</p>
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
            {sectors.map((sector) => (
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

      {/* Fleet & Equipment */}
      <section className="py-16 lg:py-20">
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
            FLEET & EQUIPMENT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "/manus-storage/fleet_trucks_e875af64.png", label: "Branded Fleet", desc: "Dedicated Specific NZ vehicles from vans to heavy rigid trucks." },
              { img: "/manus-storage/equipment_crates_22489160.png", label: "Specialist Crates", desc: "Branded relocation crates and dollies for safe asset transport." },
              { img: "/manus-storage/equipment_rollcages_e1af2686.png", label: "Roll Cages", desc: "Branded roll cages for warehouse staging and sequenced delivery." },
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
        style={{ background: "oklch(0.63 0.18 38)" }}
      >
        <div className="container text-center">
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: "white",
              lineHeight: 0.95,
            }}
          >
            DISCUSS YOUR PROJECT
          </h2>
          <p className="mt-4 mb-8 max-w-lg mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(1 0 0 / 0.8)", fontSize: "1rem" }}>
            Tell us what you're delivering and when. We'll tell you how Specific NZ can make it happen.
          </p>
          <Link
            href="/contact"
            style={{
              background: "white",
              color: "oklch(0.63 0.18 38)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0.9rem 2.5rem",
              display: "inline-block",
            }}
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
