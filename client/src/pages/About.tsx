/*
 * About Page — Dark Authority Design (ELEVATED)
 * Depth through layering. Full-bleed imagery. Certifications as authority signals.
 * Team presented with weight. Story told through contrast and typography.
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import { trpc } from "@/lib/trpc";
import { SEOHead, SEO_CONFIGS } from "@/components/SEOHead";

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const team = [
  { name: "Dwyane Hitchens", role: "NZ Branch Manager", highlight: true },
  { name: "John Hitchens", role: "Warehouse Manager / Truck Driver", highlight: false },
  { name: "Jaxon Amadea", role: "Site Supervisor", highlight: false },
  { name: "Elliott Talagi", role: "North Island Senior Installer", highlight: false },
  { name: "Kyle Sinclair", role: "South Island Senior Installer", highlight: false },
  { name: "Jayden Tupou", role: "Warehouse / Offsider", highlight: false },
  { name: "Michael Solomona", role: "Offsider", highlight: false },
  { name: "Jack Johnston", role: "Offsider", highlight: false },
];

const isos = [
  { code: "ISO 45001:2018", label: "WHS / Safety", desc: "Work Health & Safety Management", audit: "Feb 2026", review: "Aug 2026", color: "oklch(0.63 0.18 38)" },
  { code: "ISO 9001:2015", label: "Quality", desc: "Quality Management System", audit: "Feb 2026", review: "Aug 2026", color: "oklch(0.60 0.12 185)" },
  { code: "ISO 14001:2015", label: "Environment", desc: "Environmental Management", audit: "Jan 2026", review: "Jul 2026", color: "oklch(0.55 0.14 155)" },
];

export default function About() {
  const storySection = useInView();
  const teamSection = useInView(0.08);
  const certSection = useInView(0.1);
  const groupSection = useInView(0.1);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.16 0.035 240)", overflowX: "hidden" }}>
      <SEOHead {...SEO_CONFIGS.about} />
      <Navigation />

      {/* ─── PAGE HEADER — full-bleed dark with photo overlay ─── */}
      <section
        className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 overflow-hidden"
        style={{ background: "oklch(0.11 0.03 240)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/manus-storage/specific_nz_truck_c874acf8.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
          }}
        />
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: "oklch(0.63 0.18 38)" }}
        />
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px" style={{ background: "oklch(0.63 0.18 38)" }} />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "oklch(0.63 0.18 38)",
              }}
            >
              Who We Are
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(4rem, 10vw, 9rem)",
              color: "white",
              lineHeight: 0.88,
            }}
          >
            ABOUT
            <br />
            <span style={{ color: "oklch(0.60 0.12 185)" }}>SPECIFIC NZ</span>
          </h1>
        </div>
      </section>

      {/* ─── STORY — asymmetric, photo right ─── */}
      <section
        ref={storySection.ref}
        className="relative overflow-hidden"
        style={{ background: "oklch(0.16 0.035 240)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5" style={{ minHeight: "600px" }}>
          {/* Text — 3 cols */}
          <div
            className="lg:col-span-3 flex flex-col justify-center px-8 py-20 lg:px-16"
            style={{
              opacity: storySection.inView ? 1 : 0,
              transform: storySection.inView ? "translateX(0)" : "translateX(-20px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <p className="section-label mb-4">Our Story</p>
            <h2
              className="mb-8"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 4vw, 4rem)",
                color: "white",
                lineHeight: 0.9,
              }}
            >
              BUILT FOR THE PROJECTS
              <br />
              <span style={{ color: "oklch(0.63 0.18 38)" }}>OTHERS WON'T TAKE ON.</span>
            </h2>
            <div
              className="space-y-5"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9375rem",
                color: "oklch(0.65 0.025 240)",
                lineHeight: 1.8,
                maxWidth: "560px",
              }}
            >
              <p>
                Specific NZ is the New Zealand arm of the Specific Group — a specialist logistics, FF&amp;E, and commercial installation business operating across Australia and New Zealand. We exist because general freight carriers are not equipped for the complexity of modern construction and hospitality projects.
              </p>
              <p>
                When a hotel developer needs 2,740 items delivered and installed across a $683 million stadium before opening weekend, or a restaurant needs its FF&amp;E crane-lifted to a high-altitude gondola site in Queenstown, the logistics cannot be left to chance. That is the work Specific NZ is built for.
              </p>
              <p>
                Our New Zealand team is based in Auckland with national project reach. We work alongside New Zealand's leading construction firms, fit-out managers, procurement specialists, and hotel operators to deliver the full FF&amp;E chain — from receipt and QC through to installation and close-out.
              </p>
            </div>
          </div>
          {/* Photo — 2 cols, edge-to-edge */}
          <div
            className="lg:col-span-2 relative hidden lg:block"
            style={{
              opacity: storySection.inView ? 1 : 0,
              transition: "opacity 1s ease 0.3s",
            }}
          >
            <img
              src="/manus-storage/skyline_terrace_crane_9c818d4f.webp"
              alt="Specific NZ on site — Skyline Gondola Queenstown"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, oklch(0.16 0.035 240) 0%, transparent 25%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ─── PRINCIPLES — tight grid, no padding waste ─── */}
      <section
        className="py-16 lg:py-20"
        style={{ background: "oklch(0.13 0.032 240)", borderTop: "1px solid oklch(1 0 0 / 0.07)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <div className="lg:col-span-1">
              <p className="section-label mb-3">How We Work</p>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: "white",
                  lineHeight: 0.9,
                }}
              >
                OUR
                <br />
                PRINCIPLES
              </h2>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "oklch(1 0 0 / 0.06)" }}>
              {[
                { title: "Programme First", body: "The opening date is not negotiable. We build logistics plans around your programme." },
                { title: "Specialist Handling", body: "High-value, damage-sensitive assets require specialist teams — not general freight." },
                { title: "Full Chain Accountability", body: "One point of contact from receipt to installation. No gaps, no handoffs." },
                { title: "Site Discipline", body: "Our teams operate to site induction standards and the expectations of the firms we work alongside." },
                { title: "Transparent Reporting", body: "Clear status updates and close-out documentation on every project, every time." },
                { title: "National Reach", body: "Based in Auckland, delivering across New Zealand — Queenstown to Christchurch to the CBD." },
              ].map((v) => (
                <div key={v.title} className="p-6" style={{ background: "oklch(0.13 0.032 240)" }}>
                  <div className="w-6 h-0.5 mb-4" style={{ background: "oklch(0.63 0.18 38)" }} />
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "white",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.825rem", color: "oklch(0.60 0.025 240)", lineHeight: 1.65 }}>
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEAM — dark, weighted ─── */}
      <section
        ref={teamSection.ref}
        className="py-16 lg:py-24"
        style={{ background: "oklch(0.16 0.035 240)" }}
      >
        <div className="container">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="section-label mb-3">The Team</p>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  color: "white",
                  lineHeight: 0.9,
                }}
              >
                SPECIFIC NZ
                <br />
                <span style={{ color: "oklch(0.60 0.12 185)" }}>ON THE GROUND.</span>
              </h2>
            </div>
          </div>

          {/* Dwyane — featured card */}
          <div
            className="mb-4"
            style={{
              background: "oklch(0.20 0.04 240)",
              borderLeft: "4px solid oklch(0.63 0.18 38)",
              padding: "1.5rem 2rem",
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              gap: "1.5rem",
              alignItems: "center",
              opacity: teamSection.inView ? 1 : 0,
              transform: teamSection.inView ? "translateX(0)" : "translateX(-20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div
              className="w-14 h-14 flex items-center justify-center flex-shrink-0"
              style={{ background: "oklch(0.63 0.18 38)" }}
            >
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  color: "white",
                }}
              >
                DH
              </span>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  color: "white",
                  lineHeight: 1,
                }}
              >
                Dwyane Hitchens
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.8rem",
                  color: "oklch(0.63 0.18 38)",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginTop: "0.2rem",
                }}
              >
                NZ Branch Manager
              </p>
            </div>
            <div className="hidden sm:flex flex-col gap-1 text-right">
              <a
                href="tel:+64204243242"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.8rem",
                  color: "oklch(0.60 0.12 185)",
                  fontWeight: 600,
                }}
              >
                +64 204 243 242
              </a>
              <a
                href="mailto:dwyane.h@specificgroup.co.nz"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.75rem",
                  color: "oklch(0.55 0.025 240)",
                }}
              >
                dwyane.h@specificgroup.co.nz
              </a>
            </div>
          </div>

          {/* Rest of team — compact grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: "oklch(1 0 0 / 0.05)" }}
          >
            {team.slice(1).map((member, i) => (
              <div
                key={member.name}
                className="px-5 py-4 flex items-center gap-4"
                style={{
                  background: "oklch(0.18 0.038 240)",
                  opacity: teamSection.inView ? 1 : 0,
                  transform: teamSection.inView ? "translateY(0)" : "translateY(15px)",
                  transition: `opacity 0.5s ease ${(i + 1) * 0.08}s, transform 0.5s ease ${(i + 1) * 0.08}s`,
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(0.63 0.18 38 / 0.12)" }}
                >
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "0.9rem",
                      color: "oklch(0.63 0.18 38)",
                    }}
                  >
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "white",
                      lineHeight: 1.1,
                    }}
                  >
                    {member.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.7rem",
                      color: "oklch(0.60 0.12 185)",
                      marginTop: "0.15rem",
                    }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS — authority signals, full weight ─── */}
      <section
        ref={certSection.ref}
        className="py-16 lg:py-20"
        style={{ background: "oklch(0.12 0.03 240)", borderTop: "1px solid oklch(1 0 0 / 0.07)" }}
      >
        <div className="container">
          <p className="section-label mb-4">Accreditations</p>
          <h2
            className="mb-12"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "white",
              lineHeight: 0.9,
            }}
          >
            CERTIFIED.
            <br />
            <span style={{ color: "oklch(0.60 0.12 185)" }}>COMPLIANT. ACTIVE.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px" style={{ background: "oklch(1 0 0 / 0.06)" }}>
            {isos.map((iso, i) => (
              <div
                key={iso.code}
                className="p-8"
                style={{
                  background: "oklch(0.12 0.03 240)",
                  borderTop: `3px solid ${iso.color}`,
                  opacity: certSection.inView ? 1 : 0,
                  transform: certSection.inView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    color: iso.color,
                    letterSpacing: "0.02em",
                    lineHeight: 1,
                  }}
                >
                  {iso.code}
                </p>
                <p
                  className="mt-1 mb-3"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "white",
                  }}
                >
                  {iso.label}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.825rem",
                    color: "oklch(0.60 0.025 240)",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                  }}
                >
                  {iso.desc}
                </p>
                <div className="flex gap-4">
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "oklch(0.50 0.02 240)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Last Audit</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "white", fontWeight: 600 }}>{iso.audit}</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "oklch(0.50 0.02 240)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Next Review</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "white", fontWeight: 600 }}>{iso.review}</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "oklch(0.50 0.02 240)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Status</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "oklch(0.55 0.14 155)", fontWeight: 700 }}>Active</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SiteSafe + NZBN row */}
          <div className="mt-px grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background: "oklch(1 0 0 / 0.06)" }}>
            <div className="px-8 py-5 flex items-center gap-4" style={{ background: "oklch(0.12 0.03 240)" }}>
              <div className="w-1 h-10 flex-shrink-0" style={{ background: "oklch(0.63 0.18 38)" }} />
              <div>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "white" }}>SiteSafe New Zealand</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.58 0.025 240)" }}>Certified site safety programme — all site personnel inducted</p>
              </div>
            </div>
            <div className="px-8 py-5 flex items-center gap-4" style={{ background: "oklch(0.12 0.03 240)" }}>
              <div className="w-1 h-10 flex-shrink-0" style={{ background: "oklch(0.60 0.12 185)" }} />
              <div>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "white" }}>NZBN 94 29048495585</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.58 0.025 240)" }}>Specific NZ Ltd — registered New Zealand business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PART OF SPECIFIC GROUP ─── */}
      <section
        ref={groupSection.ref}
        className="py-16 lg:py-20"
        style={{ background: "oklch(0.16 0.035 240)", borderTop: "1px solid oklch(1 0 0 / 0.07)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              style={{
                opacity: groupSection.inView ? 1 : 0,
                transform: groupSection.inView ? "translateX(0)" : "translateX(-20px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              <p className="section-label mb-4">Part of a Larger Group</p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "white",
                  lineHeight: 0.9,
                }}
              >
                SPECIFIC GROUP —
                <br />
                <span style={{ color: "oklch(0.60 0.12 185)" }}>AUSTRALIA & NZ</span>
              </h2>
              <p
                className="mb-6"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9375rem",
                  color: "oklch(0.65 0.025 240)",
                  lineHeight: 1.75,
                }}
              >
                Specific NZ operates as part of the Specific Group, with operations across Australia and New Zealand. The Group delivers FF&amp;E, commercial installations, relocations, warehousing, and logistics management for some of the most complex construction and hospitality projects in the region.
              </p>
              <a
                href="https://specificgroup.com.au"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "oklch(0.63 0.18 38)",
                }}
              >
                Visit specificgroup.com.au →
              </a>
            </div>
            <div
              className="relative"
              style={{
                opacity: groupSection.inView ? 1 : 0,
                transition: "opacity 1s ease 0.2s",
              }}
            >
              <img
                src="/manus-storage/fleet_trucks_87f4acd9.png"
                alt="Specific NZ — Auckland warehouse and fleet"
                className="w-full object-cover"
                style={{ aspectRatio: "16/9" }}
              />
              <div
                className="absolute -bottom-4 -left-4 px-5 py-4"
                style={{ background: "oklch(0.63 0.18 38)" }}
              >
                <p
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.75rem",
                    color: "white",
                    lineHeight: 1,
                  }}
                >
                  AUS + NZ
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.65rem",
                    color: "oklch(1 0 0 / 0.75)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  National Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-16 lg:py-20"
        style={{ background: "oklch(0.63 0.18 38)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                color: "white",
                lineHeight: 0.9,
              }}
            >
              LET'S WORK
              <br />
              TOGETHER.
            </h2>
            <div>
              <p
                className="mb-6"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  color: "oklch(1 0 0 / 0.8)",
                  lineHeight: 1.7,
                }}
              >
                Tell us about your project and we'll tell you how Specific NZ can deliver it.
              </p>
              <Link
                href="/contact"
                style={{
                  background: "white",
                  color: "oklch(0.63 0.18 38)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "1rem 2.5rem",
                  display: "inline-block",
                }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PUBLIC DOCUMENTS ─── */}
      <PublicDocuments />

      <Footer />
    </div>
  );
}

// ─── Public Document Download Section ──────────────────────────────────────
function PublicDocuments() {
  const { data: docs, isLoading } = trpc.documents.listPublic.useQuery();

  if (isLoading || !docs || docs.length === 0) return null;

  // Group by tag
  const grouped = docs.reduce<Record<string, typeof docs>>((acc, doc) => {
    const tag = doc.tag ?? "General";
    if (!acc[tag]) acc[tag] = [];
    acc[tag].push(doc);
    return acc;
  }, {});

  return (
    <section
      style={{
        background: "oklch(0.11 0.03 240)",
        borderTop: "1px solid oklch(0.16 0.02 240)",
        padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 6rem)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            color: "oklch(0.63 0.18 38)",
            fontWeight: 600,
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          Resources
        </p>
        <h2
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "white",
            lineHeight: 0.95,
            marginBottom: "2.5rem",
          }}
        >
          COMPANY
          <br />
          <span style={{ color: "oklch(0.60 0.12 185)" }}>DOCUMENTS.</span>
        </h2>

        {Object.entries(grouped).map(([tag, items]) => (
          <div key={tag} style={{ marginBottom: "2rem" }}>
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "oklch(0.55 0.025 240)",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
                borderBottom: "1px solid oklch(0.16 0.02 240)",
                paddingBottom: "0.4rem",
              }}
            >
              {tag}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {items.map((doc) => (
                <a
                  key={doc.id}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "0.85rem 1.25rem",
                    background: "oklch(0.14 0.025 240)",
                    border: "1px solid oklch(0.18 0.02 240)",
                    textDecoration: "none",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "oklch(0.63 0.18 38)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.16 0.03 240)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "oklch(0.18 0.02 240)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.14 0.025 240)";
                  }}
                >
                  {/* File icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="oklch(0.63 0.18 38)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "white",
                      flex: 1,
                    }}
                  >
                    {doc.title}
                  </span>
                  {/* Download arrow */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="oklch(0.50 0.02 240)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
