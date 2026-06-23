/*
 * Home Page — Dark Authority Design (ELEVATED)
 * Philosophy: Depth through layering. Asymmetric grids. Typography at scale.
 * Edge-to-edge photo sections that bleed into content. Authority signals as design elements.
 * Colours: oklch(0.16 0.035 240) navy | oklch(0.63 0.18 38) orange | oklch(0.60 0.12 185) teal
 * Type: Barlow Condensed 800 headings | DM Sans body
 */
import { useAuth } from "@/_core/hooks/useAuth";
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
  { value: "4,000+", label: "Hotel Rooms Per Year", sub: "Across The Group" },
  { value: "4", label: "NZ Locations", sub: "AKL · CHC · Otago · Southland" },
  { value: "100+", label: "Years Experience", sub: "Specific Group" },
];

const projects = [
  {
    name: "One NZ Stadium",
    sub: "Te Kaha, Christchurch",
    tag: "FF&E · Stadium",
    stat: "2,740+ items",
    img: "/manus-storage/20250814_115732_9039f12e.webp",
    imgPosition: "center 40%",
    href: "/projects",
    accent: "oklch(0.63 0.18 38)",
  },
  {
    name: "Hotel Indigo Auckland",
    sub: "51 Albert Street, CBD",
    tag: "FF&E · Hospitality",
    stat: "225 rooms",
    img: "/manus-storage/20260305_151235_8e08e8db.webp",
    href: "/projects",
    accent: "oklch(0.60 0.12 185)",
  },
  {
    name: "Skyline Gondola",
    sub: "Queenstown",
    tag: "Logistics · High-Altitude",
    stat: "Crane-lift install",
    img: "/manus-storage/skyline_restaurant_a670c0e7.webp",
    imgPosition: "center center",
    href: "/projects",
    accent: "oklch(0.63 0.18 38)",
  },
];

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

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
        {/* Southern Cross constellation — subtle top-right watermark */}
        <svg
          viewBox="0 0 200 200"
          className="absolute top-8 right-8 opacity-[0.08] pointer-events-none z-10"
          style={{ width: "180px", height: "180px" }}
          aria-hidden="true"
        >
          {/* Southern Cross — 4 red stars in correct relative positions */}
          {/* Gacrux — top */}
          <polygon points="100,18 103,28 114,28 105,34 108,44 100,38 92,44 95,34 86,28 97,28" fill="#cc2222" />
          {/* Acrux — bottom */}
          <polygon points="100,148 103,158 114,158 105,164 108,174 100,168 92,174 95,164 86,158 97,158" fill="#cc2222" />
          {/* Mimosa — right */}
          <polygon points="162,78 165,88 176,88 167,94 170,104 162,98 154,104 157,94 148,88 159,88" fill="#cc2222" />
          {/* Delta Crucis — left */}
          <polygon points="38,88 41,98 52,98 43,104 46,114 38,108 30,114 33,104 24,98 35,98" fill="#cc2222" />
        </svg>

        {/* Background photo — full bleed right side */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/manus-storage/20250814_115732_9039f12e.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            opacity: 0.28,
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

        <div className="container relative z-10 pb-20 pt-48 lg:pb-28 lg:pt-56">
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
                fontSize: "clamp(2.8rem, 7.5vw, 6.5rem)",
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
                      objectPosition: (p as any).imgPosition || "center center",
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
              FIVE DISTINCT
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
                {
                  num: "03",
                  title: "Detailed Joinery & FF&E Installations",
                  body: "Precision installation of bespoke joinery and high-specification FF&E packages. Delivered to exacting tolerances on programme-critical timelines.",
                  color: "oklch(0.72 0.14 145)",
                },
                {
                  num: "04",
                  title: "AV Installations & OS&E Installations",
                  body: "End-to-end installation of audio visual systems and operating supplies & equipment. Coordinated delivery, placement, and commissioning across all project types.",
                  color: "oklch(0.65 0.15 280)",
                },
                {
                  num: "05",
                  title: "Warehousing, Storage & Handling",
                  body: "Secure warehousing and professional handling for FF&E, joinery, and high-value equipment. Specialist sensitive storage for fine art, premium AV, and bespoke items requiring climate-controlled or white-glove care.",
                  color: "oklch(0.75 0.10 55)",
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
              src="/manus-storage/fleet_trucks_87f4acd9.png"
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
          src="/manus-storage/one_nz_stadium_logo_92ab318d.jpg"
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

      {/* ─── TRUSTED BY — client logo grid ─── */}
      <section
        className="py-20 lg:py-28"
        style={{ background: "oklch(0.11 0.03 240)", borderTop: "1px solid oklch(1 0 0 / 0.06)" }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Trusted By</p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "white",
                lineHeight: 0.95,
              }}
            >
              AUSTRALIA &amp; NEW ZEALAND'S
              <br />
              <span style={{ color: "oklch(0.63 0.18 38)" }}>LEADING BUILDERS &amp; OPERATORS.</span>
            </h2>
            <p
              className="mt-4 mx-auto max-w-xl"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9375rem",
                color: "oklch(0.62 0.025 240)",
                lineHeight: 1.7,
              }}
            >
              From Tier One builders to international hotel brands — Specific Group is the trusted delivery partner for projects that cannot afford to fail.
            </p>
          </div>

          {/* Client accreditations image */}
          <div
            className="relative mx-auto"
            style={{
              maxWidth: "780px",
              background: "oklch(0.18 0.035 185)",
              padding: "2.5rem",
            }}
          >
            <img
              src="/manus-storage/clients_logos_clean_91ca1df3.png"
              alt="Specific Group — Builder, Accommodation and General Clients"
              className="w-full h-auto"
              style={{ display: "block" }}
            />
          </div>

          <div className="mt-8 text-center">
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.75rem",
                color: "oklch(0.45 0.02 240)",
                letterSpacing: "0.06em",
              }}
            >
              Builder Clients &nbsp;·&nbsp; Accommodation Clients &nbsp;·&nbsp; Corporate &amp; Commercial Clients
            </p>
          </div>
        </div>
      </section>

      {/* ─── NZ CULTURAL IDENTITY ─── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, oklch(0.12 0.04 185) 0%, oklch(0.14 0.035 220) 60%, oklch(0.11 0.03 240) 100%)" }}
      >
        {/* Silver fern silhouette — All Blacks style, large background watermark */}
        <svg
          viewBox="0 0 300 420"
          className="absolute right-[-30px] top-[5%] opacity-[0.07] pointer-events-none"
          style={{ height: "90%", width: "auto" }}
          aria-hidden="true"
        >
          {/* Main curved stem — sweeps from bottom-left to top-right */}
          <path
            d="M60 410 C70 370 82 320 95 270 C108 220 118 170 128 125 C138 80 148 45 158 15"
            fill="none" stroke="white" strokeWidth="5" strokeLinecap="round"
          />
          {/* Right-side leaflets — larger, angled upward-right, paired with left */}
          {[
            { t: 0.95, len: 22, a: 52 },
            { t: 0.90, len: 30, a: 55 },
            { t: 0.84, len: 40, a: 58 },
            { t: 0.78, len: 50, a: 60 },
            { t: 0.72, len: 60, a: 62 },
            { t: 0.66, len: 68, a: 63 },
            { t: 0.60, len: 74, a: 64 },
            { t: 0.54, len: 78, a: 65 },
            { t: 0.48, len: 80, a: 65 },
            { t: 0.42, len: 78, a: 65 },
            { t: 0.36, len: 72, a: 64 },
            { t: 0.30, len: 64, a: 63 },
            { t: 0.24, len: 54, a: 62 },
            { t: 0.18, len: 42, a: 60 },
            { t: 0.12, len: 30, a: 57 },
            { t: 0.06, len: 18, a: 53 },
            { t: 0.02, len: 8,  a: 48 },
          ].map((f, i) => {
            const sx = 60 + f.t * 98;
            const sy = 410 - f.t * 395;
            const rad = (f.a * Math.PI) / 180;
            const ex = sx + f.len * Math.cos(rad);
            const ey = sy - f.len * Math.sin(rad);
            return (
              <g key={`r${i}`}>
                <line x1={sx} y1={sy} x2={ex} y2={ey} stroke="white" strokeWidth="3.5" strokeLinecap="round" />
                {/* Leaflet tip notch — characteristic All Blacks angled cut */}
                <line x1={ex} y1={ey} x2={ex - 4} y2={ey - 7} stroke="white" strokeWidth="2" strokeLinecap="round" />
              </g>
            );
          })}
          {/* Left-side leaflets — shorter, angled upward-left */}
          {[
            { t: 0.92, len: 12, a: 52 },
            { t: 0.86, len: 18, a: 55 },
            { t: 0.80, len: 26, a: 58 },
            { t: 0.74, len: 34, a: 60 },
            { t: 0.68, len: 40, a: 62 },
            { t: 0.62, len: 44, a: 63 },
            { t: 0.56, len: 46, a: 64 },
            { t: 0.50, len: 46, a: 65 },
            { t: 0.44, len: 44, a: 65 },
            { t: 0.38, len: 40, a: 64 },
            { t: 0.32, len: 34, a: 63 },
            { t: 0.26, len: 26, a: 62 },
            { t: 0.20, len: 18, a: 60 },
            { t: 0.14, len: 10, a: 57 },
          ].map((f, i) => {
            const sx = 60 + f.t * 98;
            const sy = 410 - f.t * 395;
            const rad = (f.a * Math.PI) / 180;
            const ex = sx - f.len * Math.cos(rad);
            const ey = sy - f.len * Math.sin(rad);
            return (
              <line key={`l${i}`} x1={sx} y1={sy} x2={ex} y2={ey} stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            );
          })}
        </svg>

        <div className="container py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">

            {/* Left — text content */}
            <div className="flex flex-col justify-center pr-0 lg:pr-16 py-8">
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  color: "oklch(0.63 0.18 38)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                — Tūhono ki Aotearoa
              </p>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
                  color: "white",
                  lineHeight: 0.95,
                  marginBottom: "1.5rem",
                }}
              >
                ROOTED IN
                <br />
                <span style={{ color: "oklch(0.63 0.18 38)" }}>AOTEAROA.</span>
                <br />
                BUILT FOR
                <br />
                <span style={{ color: "oklch(0.60 0.12 185)" }}>THE BEST.</span>
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9375rem",
                  color: "oklch(0.62 0.025 240)",
                  lineHeight: 1.8,
                  maxWidth: "480px",
                  marginBottom: "2rem",
                }}
              >
                Specific NZ is proudly embedded in the fabric of Aotearoa. From Auckland to Southland, our team brings the precision of a Tier One operation with the values of a New Zealand company — manaakitanga, kotahitanga, and a commitment to doing the job right, every time.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { label: "Auckland", sub: "Head of Operations" },
                  { label: "Christchurch", sub: "South Island" },
                  { label: "Queenstown", sub: "Otago / Southland" },
                  { label: "Invercargill", sub: "Southland Base" },
                ].map((loc) => (
                  <div key={loc.label}>
                    <p
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "white",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {loc.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.75rem",
                        color: "oklch(0.50 0.02 240)",
                      }}
                    >
                      {loc.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — brand-colour design panel: silver fern + NZ values */}
            <div className="flex flex-col gap-4 py-8">
              {/* Main graphic panel — Aotearoa NZ values — PREMIUM REDESIGN */}
              <div
                className="relative overflow-hidden flex-1"
                style={{
                  background: "linear-gradient(135deg, oklch(0.10 0.06 155) 0%, oklch(0.13 0.08 160) 40%, oklch(0.09 0.04 200) 100%)",
                  borderLeft: "4px solid oklch(0.55 0.18 145)",
                  borderTop: "1px solid oklch(0.25 0.08 155)",
                  borderRight: "1px solid oklch(0.18 0.04 200)",
                  borderBottom: "1px solid oklch(0.18 0.04 200)",
                  minHeight: "280px",
                  boxShadow: "inset 0 0 60px oklch(0.08 0.05 155 / 0.6)",
                }}
              >
                {/* Radial glow — top-left */}
                <div style={{ position: "absolute", top: "-40px", left: "-20px", width: "220px", height: "220px", borderRadius: "50%", background: "radial-gradient(circle, oklch(0.40 0.18 145 / 0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
                {/* Silver fern — bold, high-contrast, large */}
                <svg
                  viewBox="0 0 200 340"
                  style={{ position: "absolute", right: "-8px", top: "50%", transform: "translateY(-50%)", height: "92%", width: "auto", opacity: 0.38, pointerEvents: "none" }}
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="fernGrad" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="oklch(0.65 0.22 145)" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="white" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>
                  <path d="M50 330 C58 295 68 255 80 215 C92 175 103 138 114 104 C125 70 136 40 146 12" fill="none" stroke="url(#fernGrad)" strokeWidth="5" strokeLinecap="round" />
                  {[
                    { t:0.95,r:20,l:11,a:52 }, { t:0.89,r:30,l:17,a:55 }, { t:0.83,r:42,l:23,a:58 },
                    { t:0.77,r:54,l:30,a:60 }, { t:0.71,r:64,l:36,a:62 }, { t:0.65,r:72,l:40,a:63 },
                    { t:0.59,r:78,l:44,a:64 }, { t:0.53,r:82,l:46,a:65 }, { t:0.47,r:84,l:46,a:65 },
                    { t:0.41,r:82,l:44,a:65 }, { t:0.35,r:76,l:40,a:64 }, { t:0.29,r:68,l:34,a:63 },
                    { t:0.23,r:56,l:27,a:62 }, { t:0.17,r:42,l:18,a:60 }, { t:0.11,r:28,l:11,a:57 },
                    { t:0.05,r:15,l:6, a:53 },
                  ].map((f,i) => {
                    const sx = 50 + f.t * 96;
                    const sy = 330 - f.t * 318;
                    const rad = (f.a * Math.PI) / 180;
                    return (
                      <g key={i}>
                        <line x1={sx} y1={sy} x2={sx + f.r * Math.cos(rad)} y2={sy - f.r * Math.sin(rad)} stroke="url(#fernGrad)" strokeWidth="3.5" strokeLinecap="round" />
                        <line x1={sx} y1={sy} x2={sx - f.l * Math.cos(rad)} y2={sy - f.l * Math.sin(rad)} stroke="url(#fernGrad)" strokeWidth="2.5" strokeLinecap="round" />
                      </g>
                    );
                  })}
                </svg>
                {/* Content */}
                <div style={{ position: "relative", zIndex: 10, padding: "2rem", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.6rem" }}>
                      <div style={{ width: "24px", height: "2px", background: "oklch(0.65 0.22 145)" }} />
                      <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.22em", color: "oklch(0.65 0.22 145)" }}>PROUDLY</span>
                    </div>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "white", lineHeight: 0.9, marginBottom: "0.35rem", letterSpacing: "-0.01em", textShadow: "0 2px 20px oklch(0.30 0.12 155 / 0.8)" }}>AOTEAROA</p>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "oklch(0.65 0.22 145)", letterSpacing: "0.18em" }}>NEW ZEALAND</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginTop: "1.75rem" }}>
                    {[
                      { nz: "Manaakitanga", en: "Care & Respect" },
                      { nz: "Kotahitanga", en: "Unity & Purpose" },
                      { nz: "Tūhono", en: "Connection" },
                    ].map((v) => (
                      <div key={v.nz} style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                        <div style={{ width: "3px", height: "32px", background: "linear-gradient(to bottom, oklch(0.65 0.22 145), oklch(0.45 0.15 145))", flexShrink: 0, borderRadius: "2px" }} />
                        <div>
                          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "white", letterSpacing: "0.04em", lineHeight: 1.1 }}>{v.nz}</p>
                          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.60 0.10 155)", letterSpacing: "0.06em", marginTop: "0.1rem" }}>{v.en}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom two stat cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div
                  style={{
                    background: "oklch(0.63 0.18 38)",
                    padding: "1.25rem 1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2rem", color: "white", lineHeight: 1 }}>ISO</p>
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", color: "rgba(255,255,255,0.75)", letterSpacing: "0.08em" }}>9001 · 14001 · 45001</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.6)", marginTop: "0.25rem" }}>Certified · Active 2026</p>
                </div>
                <div
                  style={{
                    background: "oklch(0.20 0.04 240)",
                    border: "1px solid oklch(0.28 0.04 240)",
                    padding: "1.25rem 1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "white", lineHeight: 1 }}>SITE</p>
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "oklch(0.63 0.18 38)", lineHeight: 1 }}>SAFE</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", color: "oklch(0.55 0.025 240)", marginTop: "0.25rem" }}>Certified · All Crew</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-20 lg:py-28"
        style={{ background: "oklch(0.16 0.035 240)", position: "relative", overflow: "hidden" }}
      >
        {/* Auckland skyline background */}
        <img
          src="/manus-storage/nz_auckland_skyline_dusk_5577fc0d.jpg"
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 55%", filter: "brightness(0.22) saturate(0.9)", zIndex: 0 }}
        />
        {/* Gradient overlay — stronger on left for text legibility, fades right */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, oklch(0.08 0.02 240 / 0.95) 0%, oklch(0.08 0.02 240 / 0.7) 50%, oklch(0.08 0.02 240 / 0.4) 100%)", zIndex: 1 }} />
        {/* Orange accent line at top */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "oklch(0.63 0.18 38)", zIndex: 2 }} />
        <div className="container" style={{ position: "relative", zIndex: 3 }}>
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
                  href="mailto:info@specificgroup.com.au"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: "oklch(0.60 0.12 185)",
                  }}
                >
                  info@specificgroup.com.au
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
