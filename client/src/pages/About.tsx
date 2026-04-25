/*
 * About Page — Dark Authority Design
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const team = [
  { name: "Dwyane Hitchens", role: "NZ Branch Manager" },
  { name: "John Hitchens", role: "Warehouse Manager / Truck Driver" },
  { name: "Jaxon Amadea", role: "Site Supervisor" },
  { name: "Elliott Talagi", role: "North Island Senior Installer" },
  { name: "Kyle Sinclair", role: "South Island Senior Installer" },
  { name: "Jayden Tupou", role: "Warehouse / Offsider" },
  { name: "Michael Solomona", role: "Offsider" },
  { name: "Jack Johnston", role: "Offsider" },
];

export default function About() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.16 0.035 240)" }}>
      <Navigation />

      {/* Page header */}
      <section
        className="pt-32 pb-16 lg:pt-40 lg:pb-20"
        style={{ background: "oklch(0.12 0.03 240)", borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}
      >
        <div className="container">
          <p className="section-label mb-4">Who We Are</p>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              color: "white",
              lineHeight: 0.95,
            }}
          >
            ABOUT SPECIFIC NZ
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-4">Our Story</p>
              <h2
                className="heading-accent mb-8"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "white",
                }}
              >
                BUILT FOR THE PROJECTS<br />OTHERS WON'T TAKE ON
              </h2>
              <div className="space-y-5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "oklch(0.65 0.025 240)", lineHeight: 1.75 }}>
                <p>
                  Specific NZ is the New Zealand arm of the Specific Group — a specialist logistics, FF&E, and commercial installation business operating across Australia and New Zealand. We exist because general freight carriers are not equipped for the complexity of modern construction and hospitality projects.
                </p>
                <p>
                  When a hotel developer needs 2,740 items delivered and installed across a $683 million stadium before opening weekend, or a restaurant needs its FF&E crane-lifted to a high-altitude gondola site in Queenstown, the logistics cannot be left to chance. That is the work Specific NZ is built for.
                </p>
                <p>
                  Our New Zealand team is based in Auckland with national project reach. We work alongside New Zealand's leading construction firms, fit-out managers, procurement specialists, and hotel operators to deliver the full FF&E chain — from receipt and QC through to installation and close-out.
                </p>
                <p>
                  Part of the Specific Group, we bring the systems, equipment, and experience of a national operation to every New Zealand project we take on.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <img
                src="/manus-storage/skyline_terrace_crane_e82076ee.webp"
                alt="Specific NZ team on site — Skyline Gondola Queenstown"
                className="w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <img
                src="/manus-storage/fleet_trucks_e875af64.png"
                alt="Specific NZ fleet"
                className="w-full object-cover"
                style={{ aspectRatio: "16/9" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-16 lg:py-20"
        style={{ background: "oklch(0.13 0.032 240)", borderTop: "1px solid oklch(1 0 0 / 0.08)" }}
      >
        <div className="container">
          <p className="section-label mb-4">How We Work</p>
          <h2
            className="mb-12"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "white",
            }}
          >
            OUR PRINCIPLES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "oklch(1 0 0 / 0.06)" }}>
            {[
              { title: "Programme First", body: "The opening date is not negotiable. We build our logistics plans around your programme, not the other way around." },
              { title: "Specialist Handling", body: "High-value, damage-sensitive, and awkward assets require specialist teams. We do not send general freight carriers to do specialist work." },
              { title: "Full Chain Accountability", body: "We own the chain from receipt to installation. One point of contact, one point of accountability, no gaps." },
              { title: "Site Discipline", body: "Our teams operate to site induction standards, H&S protocols, and the professional expectations of the construction firms we work alongside." },
              { title: "Transparent Reporting", body: "You know where your assets are at every stage. We provide clear status updates and close-out documentation on every project." },
              { title: "National Reach", body: "Based in Auckland, we deliver across New Zealand — from Queenstown to Christchurch to the CBD." },
            ].map((v) => (
              <div key={v.title} className="p-8" style={{ background: "oklch(0.13 0.032 240)" }}>
                <div
                  className="w-8 h-0.5 mb-5"
                  style={{ background: "oklch(0.63 0.18 38)" }}
                />
                <h3
                  className="mb-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "white" }}
                >
                  {v.title}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "oklch(0.62 0.025 240)", lineHeight: 1.65 }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <p className="section-label mb-4">The Team</p>
          <h2
            className="mb-12"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "white",
            }}
          >
            SPECIFIC NZ TEAM
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-5 text-center"
                style={{ background: "oklch(0.20 0.04 240)", borderTop: "2px solid oklch(0.63 0.18 38)" }}
              >
                <div
                  className="w-12 h-12 mx-auto mb-3 flex items-center justify-center"
                  style={{ background: "oklch(0.63 0.18 38 / 0.15)" }}
                >
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.25rem",
                      color: "oklch(0.63 0.18 38)",
                    }}
                  >
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: "white",
                    lineHeight: 1.2,
                  }}
                >
                  {member.name}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.7rem",
                    color: "oklch(0.60 0.12 185)",
                    marginTop: "0.25rem",
                  }}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part of Specific Group */}
      <section
        className="py-16 lg:py-20"
        style={{ background: "oklch(0.12 0.03 240)", borderTop: "1px solid oklch(1 0 0 / 0.08)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">Part of a Larger Group</p>
              <h2
                className="heading-accent mb-6"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "white",
                }}
              >
                SPECIFIC GROUP —<br />AUSTRALIA & NEW ZEALAND
              </h2>
              <p
                className="mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "oklch(0.65 0.025 240)", lineHeight: 1.75 }}
              >
                Specific NZ operates as part of the Specific Group, with operations across Australia and New Zealand. The Group delivers FF&E, commercial installations, relocations, warehousing, and logistics management for some of the most complex construction and hospitality projects in the region.
              </p>
              <a
                href="https://specificgroup.com.au"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "oklch(0.63 0.18 38)",
                }}
              >
                Visit specificgroup.com.au →
              </a>
            </div>
            <div>
              <img
                src="/manus-storage/specific_nz_truck_775e2899.webp"
                alt="Specific NZ — Auckland warehouse and fleet"
                className="w-full object-cover"
                style={{ aspectRatio: "16/9" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20" style={{ background: "oklch(0.63 0.18 38)" }}>
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
            LET'S WORK TOGETHER
          </h2>
          <p className="mt-4 mb-8 max-w-lg mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(1 0 0 / 0.8)", fontSize: "1rem" }}>
            Tell us about your project and we'll tell you how Specific NZ can deliver it.
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
