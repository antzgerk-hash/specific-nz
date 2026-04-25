/*
 * Home Page — Dark Authority Design (ELEVATED)
 * Philosophy: Depth through layering. Asymmetric grids. Typography at scale.
 * Edge-to-edge photo sections that bleed into content. Authority signals as design elements.
 * Colours: oklch(0.16 0.035 240) navy | oklch(0.63 0.18 38) orange | oklch(0.60 0.12 185) teal
 * Type: Barlow Condensed 800 headings | DM Sans body
 */
import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Scroll-reveal hook
function useInView(threshold = 0.15) {
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

const stats = [
  { value: "2,740+", label: "FF&E Items Installed", sub: "One NZ Stadium" },
  { value: "519", label: "Hotel Rooms Fitted", sub: "Auckland CBD alone" },
  { value: "4", label: "NZ Locations", sub: "AKL · CHC · Otago · Southland" },
  { value: "15+", label: "Years Experience", sub: "Specific Group" },
];

const projects = [
  {
    name: "One NZ Stadium",
    sub: "Te Kaha, Christchurch",
    tag: "FF&E · Stadium",
    stat: "2,740+ items",
    img: "/manus-storage/tekaha_joinery_suite_e199cc08.webp",
    href: "/projects",
    accent: "oklch(0.63 0.18 38)",
  },
  {
    name: "Hotel Indigo Auckland",
    sub: "51 Albert Street, CBD",
    tag: "FF&E · Hospitality",
    stat: "225 rooms",
    img: "/manus-storage/indigo_room2_9aeecf11.jpg",
    href: "/projects",
    accent: "oklch(0.60 0.12 185)",
  },
  {
    name: "Skyline Gondola",
    sub: "Queenstown",
    tag: "Logistics · High-Altitude",
    stat: "Crane-lift install",
    img: "/manus-storage/skyline_terrace_crane_e82076ee.webp",
    href: "/projects",
    accent: "oklch(0.63 0.18 38)",
  },
];

export default function Home() {
  const statsSection = useInView();
  const projectsSection = useInView(0.1);
  const servicesSection = useInView(0.1);
  const credSection = useInView(0.1);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.16 0.035 240)", overflowX: "hidden" }}>
      <Navigation />

      {/* ─── HERO ─── full-viewport, photo right, text left, diagonal cut */}
      <section
        className="relative min-h-screen flex items-end"
        style={{ background: "oklch(0.11 0.03 240)" }}
      >
        {/* Background photo — full bleed right side */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/manus-storage/tekaha_joinery_suite_e199cc08.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            opacity: 0.22,
          }}
        />
        {/* Left dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(105deg, oklch(0.10 0.03 240) 45%, transparent 75%)",
          }}
        />
        {/* Diagonal orange accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: "oklch(0.63 0.18 38)" }}
        />

        <div className="container relative z-10 pb-20 pt-40 lg:pb-28 lg:pt-48">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px" style={{ background: "oklch(0.63 0.18 38)" }} />
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
                Specific New Zealand
              </span>
            </div>

            {/* Main headline — authority-led, premium positioning */}
            <h1
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(4rem, 11vw, 9.5rem)",
                color: "white",
                lineHeight: 0.88,
                letterSpacing: "-0.01em",
              }}
            >
              NEW ZEALAND'S
              <br />
              <span style={{ color: "oklch(0.63 0.18 38)" }}>PREMIER</span>
              <br />
              FF&amp;E INSTALLATION
              <br />
              <span style={{ color: "oklch(0.75 0.04 240)" }}>SPECIALISTS.</span>
            </h1>

            {/* Taglines */}
            <div className="mt-8 max-w-xl space-y-3">
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  color: "white",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Tier One Projects.{" "}
                <span style={{ color: "oklch(0.63 0.18 38)" }}>Tier One Teams.</span>
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  color: "oklch(0.68 0.025 240)",
                  lineHeight: 1.7,
                }}
              >
                Installation teams that warehouse, deliver and install — across New Zealand's most demanding hotel, stadium, and commercial projects.
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "oklch(0.63 0.18 38)",
                }}
              >
                Specific Scope. Specific Results.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/projects"
                style={{
                  background: "oklch(0.63 0.18 38)",
                  color: "white",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "1rem 2.5rem",
                  display: "inline-block",
                }}
              >
                View Our Projects
              </Link>
              <Link
                href="/contact"
                style={{
                  border: "1px solid oklch(1 0 0 / 0.25)",
                  color: "white",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
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

          {/* Scroll indicator */}
          <div
            className="absolute bottom-10 right-8 hidden lg:flex flex-col items-center gap-2"
            style={{ opacity: 0.4 }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "white",
                writingMode: "vertical-rl",
              }}
            >
              Scroll
            </span>
            <div className="w-px h-12" style={{ background: "white" }} />
          </div>
        </div>
      </section>

      {/* ─── STATS TICKER — full-width orange band ─── */}
      <div
        ref={statsSection.ref}
        style={{
          background: "oklch(0.63 0.18 38)",
          borderTop: "none",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.value}
              className="py-8 px-6"
              style={{
                borderRight: i < 3 ? "1px solid oklch(1 0 0 / 0.2)" : "none",
                opacity: statsSection.inView ? 1 : 0,
                transform: statsSection.inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "white",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  color: "oklch(1 0 0 / 0.85)",
                  marginTop: "0.25rem",
                  letterSpacing: "0.04em",
                }}
              >
                {s.label}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.7rem",
                  color: "oklch(1 0 0 / 0.55)",
                  marginTop: "0.1rem",
                }}
              >
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── PROJECTS — asymmetric staggered grid ─── */}
      <section
        ref={projectsSection.ref}
        className="py-20 lg:py-28"
        style={{ background: "oklch(0.14 0.032 240)" }}
      >
        <div className="container">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="section-label mb-3">Selected Projects</p>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  color: "white",
                  lineHeight: 0.9,
                }}
              >
                DELIVERED
                <br />
                <span style={{ color: "oklch(0.60 0.12 185)" }}>ON PROGRAMME.</span>
              </h2>
            </div>
            <Link
              href="/projects"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "oklch(0.63 0.18 38)",
                flexShrink: 0,
              }}
            >
              All Projects →
            </Link>
          </div>

          {/* Asymmetric 3-column grid — first card tall, others shorter */}
          <div
            className="grid gap-px"
            style={{
              gridTemplateColumns: "repeat(3, 1fr)",
              background: "oklch(1 0 0 / 0.05)",
            }}
          >
            {projects.map((p, i) => (
              <Link
                key={p.name}
                href={p.href}
                style={{ display: "block", textDecoration: "none" }}
              >
                <div
                  className="relative overflow-hidden group"
                  style={{
                    aspectRatio: i === 0 ? "3/4" : "4/5",
                    opacity: projectsSection.inView ? 1 : 0,
                    transform: projectsSection.inView ? "translateY(0)" : "translateY(30px)",
                    transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover"
                    style={{
                      transition: "transform 0.7s ease",
                    }}
                  />
                  {/* Dark overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, oklch(0.08 0.025 240) 0%, transparent 55%)",
                    }}
                  />
                  {/* Top tag */}
                  <div className="absolute top-4 left-4">
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.65rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: p.accent,
                        background: "oklch(0.10 0.025 240 / 0.85)",
                        padding: "0.3rem 0.65rem",
                      }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.7rem",
                        color: "oklch(0.65 0.025 240)",
                        marginBottom: "0.25rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {p.sub}
                    </p>
                    <h3
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: "1.5rem",
                        color: "white",
                        lineHeight: 1,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {p.name}
                    </h3>
                    <div
                      className="flex items-center gap-2"
                    >
                      <div className="w-6 h-px" style={{ background: p.accent }} />
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: "0.75rem",
                          color: p.accent,
                        }}
                      >
                        {p.stat}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES — dark, two-column with edge photo ─── */}
      <section
        ref={servicesSection.ref}
        className="relative overflow-hidden"
        style={{ background: "oklch(0.11 0.03 240)" }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ minHeight: "600px" }}
        >
          {/* Left — text */}
          <div
            className="flex flex-col justify-center px-8 py-20 lg:px-16"
            style={{
              opacity: servicesSection.inView ? 1 : 0,
              transform: servicesSection.inView ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <p className="section-label mb-4">What We Do</p>
            <h2
              className="mb-8"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "white",
                lineHeight: 0.9,
              }}
            >
              TWO DISTINCT
              <br />
              <span style={{ color: "oklch(0.63 0.18 38)" }}>CAPABILITIES.</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "Specialist Project Logistics",
                  body: "FF&E delivery and installation for hotels, stadiums, and healthcare. High-value, programme-critical, damage-sensitive.",
                  color: "oklch(0.63 0.18 38)",
                },
                {
                  num: "02",
                  title: "Corporate & Office Relocations",
                  body: "End-to-end commercial moves for offices, schools, and institutions. Planned, managed, and executed with zero operational disruption.",
                  color: "oklch(0.60 0.12 185)",
                },
              ].map((s) => (
                <div
                  key={s.num}
                  className="flex gap-5 items-start"
                  style={{
                    borderLeft: `3px solid ${s.color}`,
                    paddingLeft: "1.25rem",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: "0.7rem",
                        color: s.color,
                        letterSpacing: "0.15em",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {s.num}
                    </p>
                    <h3
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.375rem",
                        color: "white",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.875rem",
                        color: "oklch(0.62 0.025 240)",
                        lineHeight: 1.65,
                      }}
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/services"
              className="mt-10 inline-block"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "oklch(0.63 0.18 38)",
              }}
            >
              Full Services →
            </Link>
          </div>

          {/* Right — edge-to-edge photo */}
          <div
            className="relative hidden lg:block"
            style={{
              opacity: servicesSection.inView ? 1 : 0,
              transition: "opacity 1s ease 0.2s",
            }}
          >
            <img
              src="/manus-storage/fleet_trucks_e875af64.png"
              alt="Specific NZ fleet"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, oklch(0.11 0.03 240) 0%, transparent 30%)",
              }}
            />
            {/* Floating stat card */}
            <div
              className="absolute bottom-10 right-10"
              style={{
                background: "oklch(0.63 0.18 38)",
                padding: "1.25rem 1.75rem",
              }}
            >
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "2.5rem",
                  color: "white",
                  lineHeight: 1,
                }}
              >
                4
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  color: "oklch(1 0 0 / 0.8)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginTop: "0.2rem",
                }}
              >
                NZ Locations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CREDENTIALS BAND — ISO, SiteSafe, NZBN ─── */}
      <section
        ref={credSection.ref}
        className="py-12"
        style={{ background: "oklch(0.13 0.032 240)", borderTop: "1px solid oklch(1 0 0 / 0.06)" }}
      >
        <div className="container">
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-px"
            style={{ background: "oklch(1 0 0 / 0.06)" }}
          >
            {[
              { code: "ISO 45001:2018", label: "WHS / Safety", color: "oklch(0.63 0.18 38)" },
              { code: "ISO 9001:2015", label: "Quality Management", color: "oklch(0.60 0.12 185)" },
              { code: "ISO 14001:2015", label: "Environmental", color: "oklch(0.55 0.14 155)" },
              { code: "SiteSafe NZ", label: "Site Safety Certified", color: "oklch(0.63 0.18 38)" },
            ].map((c, i) => (
              <div
                key={c.code}
                className="px-6 py-5"
                style={{
                  background: "oklch(0.13 0.032 240)",
                  opacity: credSection.inView ? 1 : 0,
                  transform: credSection.inView ? "translateY(0)" : "translateY(15px)",
                  transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
                }}
              >
                <div className="w-6 h-0.5 mb-3" style={{ background: c.color }} />
                <p
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "1rem",
                    color: "white",
                    letterSpacing: "0.02em",
                  }}
                >
                  {c.code}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.75rem",
                    color: "oklch(0.58 0.025 240)",
                    marginTop: "0.15rem",
                  }}
                >
                  {c.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-end gap-2">
            <div className="w-4 h-px" style={{ background: "oklch(0.45 0.02 240)" }} />
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                color: "oklch(0.45 0.02 240)",
                letterSpacing: "0.06em",
              }}
            >
              NZBN 94 29048495585 &nbsp;·&nbsp; Specific NZ Ltd &nbsp;·&nbsp; All certifications active 2026
            </p>
          </div>
        </div>
      </section>

      {/* ─── FULL-BLEED PHOTO BREAK — Te Kaha ─── */}
      <section className="relative" style={{ height: "55vh", minHeight: "380px" }}>
        <img
          src="/manus-storage/tekaha_joinery_suite_e199cc08.webp"
          alt="One NZ Stadium — Te Kaha FF&E installation"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, oklch(0.08 0.025 240 / 0.85) 0%, oklch(0.08 0.025 240 / 0.3) 60%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "oklch(0.63 0.18 38)",
                marginBottom: "0.75rem",
              }}
            >
              Featured Project
            </p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                color: "white",
                lineHeight: 0.9,
                maxWidth: "600px",
              }}
            >
              ONE NZ STADIUM
              <br />
              <span style={{ color: "oklch(0.63 0.18 38)" }}>TE KAHA</span>
            </h2>
            <p
              className="mt-4 max-w-sm"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9375rem",
                color: "oklch(0.72 0.025 240)",
                lineHeight: 1.65,
              }}
            >
              2,740+ FF&amp;E items delivered and installed across Christchurch's $683M stadium. Delivered on programme for opening weekend.
            </p>
            <Link
              href="/projects"
              className="mt-6 inline-block"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "oklch(0.63 0.18 38)",
              }}
            >
              View Project →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-20 lg:py-28"
        style={{ background: "oklch(0.16 0.035 240)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Work With Us</p>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(3rem, 6vw, 5.5rem)",
                  color: "white",
                  lineHeight: 0.9,
                }}
              >
                TELL US
                <br />
                ABOUT YOUR
                <br />
                <span style={{ color: "oklch(0.63 0.18 38)" }}>PROJECT.</span>
              </h2>
            </div>
            <div>
              <p
                className="mb-8"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  color: "oklch(0.65 0.025 240)",
                  lineHeight: 1.75,
                }}
              >
                Whether you're planning a hotel fit-out, a stadium installation, or a complex commercial relocation — we'd like to hear about it. Our NZ team is based in Auckland with national project reach.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="/contact"
                  style={{
                    background: "oklch(0.63 0.18 38)",
                    color: "white",
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
                <a
                  href="tel:+64204243242"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: "oklch(0.60 0.12 185)",
                  }}
                >
                  +64 204 243 242
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
