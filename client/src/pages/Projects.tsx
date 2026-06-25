/*
 * Projects Page — 6 Service Category Gateway Tiles
 * Design: Barlow Condensed 900, dark authority, orange accents
 * Each tile links to a dedicated category project gallery page
 */
import { Link } from "wouter";
import SiteNav from "@/components/SiteNav";
import { SEOHead, SEO_CONFIGS } from "@/components/SEOHead";

const CATEGORIES = [
  {
    id: "ffe",
    num: "01",
    title: "FF&E Installations",
    subtitle: "Hotels · Stadiums · Commercial",
    description:
      "Full FF&E delivery, placement, and installation across New Zealand's most demanding hotel and commercial developments. From 27-storey towers to high-altitude gondola restaurants.",
    projectCount: 12,
    hero: "/manus-storage/Screenshot2026-04-02224143_0f085291.png",
    href: "/projects/ffe",
    clients:
      "Hotel Indigo Auckland · Grand Millennium · Voco Auckland · Holiday Inn Express · Tryp Wellington · Drifter Christchurch · Ramada Newmarket · Ramada Victoria St · La Quinta Ellerslie · Queenstown Hotel · Mercure Melbourne",
    stats: [
      { v: "12+", l: "Projects" },
      { v: "2,500+", l: "Rooms Fitted" },
      { v: "NZ & AU", l: "Coverage" },
    ],
  },
  {
    id: "joinery",
    num: "02",
    title: "Joinery & Fitout",
    subtitle: "Precision Installation · Millimetre Tolerances",
    description:
      "Bespoke joinery installation, high-specification fitout, and detailed furniture placement for New Zealand's premier hotel and commercial refurbishment programmes.",
    projectCount: 2,
    hero: "/manus-storage/grand_millennium_room2_49cc013f.jpg",
    href: "/projects/joinery",
    clients: "Millennium Auckland · QT Queenstown",
    stats: [
      { v: "2", l: "Flagship Projects" },
      { v: "5-Star", l: "Standard" },
      { v: "Zero", l: "Defects at Handover" },
    ],
  },
  {
    id: "relocations",
    num: "03",
    title: "Office Relocations",
    subtitle: "Corporate · Healthcare · Education",
    description:
      "End-to-end commercial relocations with zero operational disruption. Full project management from site survey through to post-move defect rectification.",
    projectCount: 8,
    hero: "/manus-storage/465152782_1461365497858195_4545629930176207314_n_0bc73ee5.jpg",
    href: "/projects/relocations",
    clients:
      "Corporate offices · Healthcare facilities · Educational institutions · Government tenancies",
    stats: [
      { v: "500+", l: "Moves Completed" },
      { v: "50,000+", l: "m² Relocated" },
      { v: "Zero", l: "Operational Disruption" },
    ],
  },
  {
    id: "special",
    num: "04",
    title: "Special Projects",
    subtitle: "Complex · High-Profile · Landmark",
    description:
      "New Zealand and Australia's most complex and high-profile installation projects — requiring specialist logistics, landmark-scale coordination, and teams that perform under pressure.",
    projectCount: 4,
    hero: "/manus-storage/Screenshot2026-04-01020026_a53bc165.png",
    href: "/projects/special",
    clients:
      "One NZ Stadium (Te Kaha) · West Footscray Hospital · Walkinshaw Relocation · Skyline Gondola Queenstown",
    stats: [
      { v: "50,000+", l: "Seat Stadium" },
      { v: "Crane", l: "Assisted Access" },
      { v: "Tier 1", l: "Contractors" },
    ],
  },
  {
    id: "av",
    num: "05",
    title: "AV & OS&E",
    subtitle: "Audio Visual · Operating Supplies",
    description:
      "Large-scale AV installation and operating supplies and equipment programmes — from 1,600-unit national aged care rollouts to hotel in-room AV commissioning.",
    projectCount: 4,
    hero: "/manus-storage/voco_auckland_room1_b885e8e0.jpg",
    href: "/projects/av",
    clients:
      "Invocare Aged Care (1,600 TVs) · Holiday Inn Express · Voco Auckland · Tryp Wellington",
    stats: [
      { v: "1,600", l: "TVs Installed" },
      { v: "National", l: "Rollout" },
      { v: "Full", l: "Commissioning" },
    ],
  },
  {
    id: "warehousing",
    num: "06",
    title: "Warehousing & Storage",
    subtitle: "Secure Storage · Specialist Handling",
    description:
      "Purpose-built secure warehousing for FF&E, joinery, and high-value assets — including specialised storage and white-glove handling for high-end residential and commercial relocations.",
    projectCount: 2,
    hero: "/manus-storage/Screenshot2026-04-08013641_5a20557d.png",
    href: "/projects/warehousing",
    clients: "Tara ITI (High-End House Relocation and Specialised Storage) · Commercial FF&E Storage",
    stats: [
      { v: "Secure", l: "Climate-Controlled" },
      { v: "White", l: "Glove Handling" },
      { v: "NZ Wide", l: "Coverage" },
    ],
  },
];

export default function Projects() {
  return (
    <div
      style={{
        background: "oklch(0.08 0.01 240)",
        minHeight: "100vh",
        fontFamily: "'Barlow', sans-serif",
      }}
    >
      <SEOHead {...SEO_CONFIGS.projects} />
      <SiteNav />

      {/* PAGE HERO */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "72px",
          paddingLeft: "clamp(1.5rem, 6vw, 6rem)",
          paddingRight: "clamp(1.5rem, 6vw, 6rem)",
          borderBottom: "1px solid oklch(0.16 0.02 240)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 80% at 80% 50%, oklch(0.14 0.04 240) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: "900px" }}>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              color: "oklch(0.63 0.18 38)",
              marginBottom: "1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "2rem",
                height: "2px",
                background: "oklch(0.63 0.18 38)",
              }}
            />
            SPECIFIC GROUP — PROJECT PORTFOLIO
          </p>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              lineHeight: 0.9,
              color: "white",
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            SIX SERVICE
            <br />
            <span style={{ color: "oklch(0.63 0.18 38)" }}>CATEGORIES.</span>
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "oklch(0.58 0.02 240)",
              maxWidth: "580px",
              lineHeight: 1.7,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Select a service category to explore our project portfolio. Every
            project is delivered by our own trained teams — not subcontracted,
            not outsourced.
          </p>
        </div>
      </section>

      {/* 6 CATEGORY TILES */}
      <section>
        {CATEGORIES.map((cat, i) => {
          const isEven = i % 2 === 0;
          return (
            <Link
              key={cat.id}
              href={cat.href}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                className="cat-tile"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  minHeight: "460px",
                  borderBottom: "1px solid oklch(0.13 0.02 240)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Image side */}
                <div
                  style={{
                    order: isEven ? 1 : 0,
                    position: "relative",
                    overflow: "hidden",
                    minHeight: "320px",
                  }}
                >
                  <img
                    src={cat.hero}
                    alt={cat.title}
                    className="cat-img"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      filter: "brightness(0.52) saturate(0.75)",
                      transition: "transform 0.65s ease, filter 0.4s ease",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      [isEven ? "right" : "left"]: 0,
                      width: "4px",
                      height: "100%",
                      background: "oklch(0.63 0.18 38)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1.25rem",
                      [isEven ? "right" : "left"]: "1.5rem",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(5rem, 10vw, 9rem)",
                      lineHeight: 1,
                      color: "white",
                      opacity: 0.07,
                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                  >
                    {cat.num}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(to top, oklch(0.05 0.01 240 / 0.96) 0%, transparent 100%)",
                      padding: "2.5rem 2rem 1.5rem",
                      display: "flex",
                      gap: "2rem",
                      flexWrap: "wrap",
                    }}
                  >
                    {cat.stats.map((s) => (
                      <div key={s.l}>
                        <div
                          style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontWeight: 900,
                            fontSize: "1.5rem",
                            color: "oklch(0.63 0.18 38)",
                            lineHeight: 1,
                          }}
                        >
                          {s.v}
                        </div>
                        <div
                          style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontSize: "0.62rem",
                            letterSpacing: "0.13em",
                            color: "oklch(0.52 0.02 240)",
                            fontWeight: 600,
                            marginTop: "0.2rem",
                          }}
                        >
                          {s.l.toUpperCase()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content side */}
                <div
                  style={{
                    order: isEven ? 0 : 1,
                    padding: "clamp(2.5rem, 5vw, 5rem)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    background: isEven
                      ? "oklch(0.10 0.015 240)"
                      : "oklch(0.09 0.01 240)",
                    position: "relative",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.68rem",
                      letterSpacing: "0.22em",
                      color: "oklch(0.63 0.18 38)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {cat.num} — {cat.subtitle.toUpperCase()}
                  </p>
                  <h2
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
                      lineHeight: 0.95,
                      color: "white",
                      marginBottom: "1.25rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {cat.title.toUpperCase()}
                  </h2>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "oklch(0.58 0.02 240)",
                      lineHeight: 1.72,
                      marginBottom: "1.25rem",
                      maxWidth: "440px",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {cat.description}
                  </p>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "oklch(0.42 0.02 240)",
                      lineHeight: 1.65,
                      marginBottom: "2rem",
                      fontStyle: "italic",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {cat.clients}
                  </p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span
                      className="cat-cta"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        letterSpacing: "0.16em",
                        color: "oklch(0.63 0.18 38)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        transition: "gap 0.2s ease",
                      }}
                    >
                      VIEW {cat.projectCount} PROJECTS
                      <span style={{ fontSize: "1.1rem" }}>{"→"}</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      {/* FOOTER CTA */}
      <section
        style={{
          padding: "5rem clamp(1.5rem, 6vw, 6rem)",
          background: "oklch(0.07 0.01 240)",
          borderTop: "1px solid oklch(0.14 0.02 240)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "0.72rem",
            letterSpacing: "0.22em",
            color: "oklch(0.63 0.18 38)",
            marginBottom: "1rem",
          }}
        >
          READY TO DISCUSS YOUR PROJECT?
        </p>
        <h2
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            color: "white",
            marginBottom: "2rem",
            lineHeight: 0.95,
          }}
        >
          LET'S TALK SCOPE.
        </h2>
        <Link
          href="/contact"
          style={{
            display: "inline-block",
            background: "oklch(0.63 0.18 38)",
            color: "white",
            textDecoration: "none",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "0.82rem",
            letterSpacing: "0.16em",
            padding: "1rem 2.5rem",
          }}
        >
          GET IN TOUCH {"→"}
        </Link>
      </section>

      <style>{`
        .cat-tile:hover .cat-img {
          transform: scale(1.05);
          filter: brightness(0.65) saturate(0.9) !important;
        }
        .cat-tile:hover .cat-cta {
          gap: 0.85rem !important;
        }
        @media (max-width: 768px) {
          .cat-tile {
            grid-template-columns: 1fr !important;
          }
          .cat-tile > div {
            order: unset !important;
          }
          .cat-tile > div:first-child {
            min-height: 260px;
          }
        }
      `}</style>
    </div>
  );
}
