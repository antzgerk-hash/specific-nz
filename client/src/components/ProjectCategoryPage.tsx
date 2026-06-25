/*
 * ProjectCategoryPage — Shared layout for all 6 project category gallery pages
 * Design: Barlow Condensed 900, dark authority, orange accents, real photos only
 */
import { useState } from "react";
import { Link } from "wouter";
import SiteNav from "@/components/SiteNav";
import { trpc } from "@/lib/trpc";
import { SEOHead, SEOProps } from "@/components/SEOHead";

export interface ProjectItem {
  id: string;
  name: string;
  client: string;
  location: string;
  year: string;
  scope: string;
  description: string;
  hero: string;
  images: string[];
  stats?: { value: string; label: string }[];
  comingSoon?: boolean;
}

interface Props {
  categoryNum: string;
  categoryTitle: string;
  categorySubtitle: string;
  intro: string;
  projects: ProjectItem[];
  backHref?: string;
  seoConfig?: SEOProps;
}

export default function ProjectCategoryPage({
  categoryNum,
  categoryTitle,
  categorySubtitle,
  intro,
  projects,
  backHref = "/projects",
  seoConfig,
}: Props) {
  const [active, setActive] = useState<ProjectItem>(projects[0]);
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div
      style={{
        background: "oklch(0.08 0.01 240)",
        minHeight: "100vh",
        fontFamily: "'Barlow', sans-serif",
      }}
    >
      {seoConfig && <SEOHead {...seoConfig} />}
      <SiteNav />

      {/* ─── CATEGORY HERO ─── */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "64px",
          paddingLeft: "clamp(1.5rem, 6vw, 6rem)",
          paddingRight: "clamp(1.5rem, 6vw, 6rem)",
          borderBottom: "1px solid oklch(0.16 0.02 240)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Hero background — blurred hero of first project */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('${active.hero}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(24px) brightness(0.12) saturate(0.5)",
            transform: "scale(1.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, oklch(0.08 0.01 240) 40%, transparent 100%)",
          }}
        />
        <div style={{ position: "relative" }}>
          <Link
            href={backHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: "0.68rem",
              letterSpacing: "0.18em",
              color: "oklch(0.50 0.02 240)",
              textDecoration: "none",
              marginBottom: "1.5rem",
              transition: "color 0.2s",
            }}
          >
            ← BACK TO PROJECTS
          </Link>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              color: "oklch(0.63 0.18 38)",
              marginBottom: "0.75rem",
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
            {categoryNum} — {categorySubtitle.toUpperCase()}
          </p>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              lineHeight: 0.9,
              color: "white",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            {categoryTitle.toUpperCase()}
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "oklch(0.58 0.02 240)",
              maxWidth: "560px",
              lineHeight: 1.7,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {intro}
          </p>
        </div>
      </section>

      {/* ─── PROJECT GRID + DETAIL ─── */}
      <section
        style={{
          padding: "clamp(2rem, 4vw, 4rem) clamp(1.5rem, 6vw, 6rem)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            gap: "2.5rem",
            alignItems: "start",
          }}
          className="cat-grid"
        >
          {/* ── Sidebar project list ── */}
          <div style={{ position: "sticky", top: "100px" }}>
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "oklch(0.40 0.02 240)",
                marginBottom: "0.75rem",
              }}
            >
              {projects.length} PROJECT{projects.length !== 1 ? "S" : ""}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setActive(p);
                    setActiveImg(0);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.75rem 1rem",
                    background:
                      active.id === p.id
                        ? "oklch(0.14 0.025 240)"
                        : "transparent",
                    border: "none",
                    borderLeft: `3px solid ${
                      active.id === p.id
                        ? "oklch(0.63 0.18 38)"
                        : "oklch(0.18 0.02 240)"
                    }`,
                    cursor: "pointer",
                    textAlign: "left",
                    width: "100%",
                    transition: "all 0.2s",
                  }}
                >
                  {/* Thumbnail */}
                  <div
                    style={{
                      width: "44px",
                      height: "36px",
                      flexShrink: 0,
                      overflow: "hidden",
                      borderRadius: "2px",
                    }}
                  >
                    <img
                      src={p.hero}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter:
                          active.id === p.id
                            ? "brightness(1)"
                            : "brightness(0.6) saturate(0.5)",
                      }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: active.id === p.id ? 700 : 500,
                        fontSize: "0.82rem",
                        color:
                          active.id === p.id
                            ? "white"
                            : "oklch(0.55 0.02 240)",
                        lineHeight: 1.2,
                      }}
                    >
                      {p.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.65rem",
                        color: "oklch(0.40 0.02 240)",
                        marginTop: "0.2rem",
                      }}
                    >
                      {p.year}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ── Project detail panel ── */}
          <div>
            {/* Main image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
                overflow: "hidden",
                marginBottom: "1rem",
                background: "oklch(0.12 0.02 240)",
              }}
            >
              <img
                src={active.images[activeImg] || active.hero}
                alt={active.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              {active.comingSoon && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "oklch(0.08 0.01 240 / 0.75)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      letterSpacing: "0.2em",
                      color: "oklch(0.63 0.18 38)",
                    }}
                  >
                    PHOTOS COMING SOON
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail strip */}
            {active.images.length > 1 && (
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  marginBottom: "2rem",
                  overflowX: "auto",
                  paddingBottom: "0.25rem",
                }}
              >
                {active.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(idx)}
                    style={{
                      flexShrink: 0,
                      width: "72px",
                      height: "52px",
                      overflow: "hidden",
                      border: `2px solid ${
                        activeImg === idx
                          ? "oklch(0.63 0.18 38)"
                          : "transparent"
                      }`,
                      cursor: "pointer",
                      padding: 0,
                      background: "none",
                    }}
                  >
                    <img
                      src={img}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter:
                          activeImg === idx
                            ? "brightness(1)"
                            : "brightness(0.55)",
                      }}
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Project metadata */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "1px",
                background: "oklch(0.14 0.02 240)",
                marginBottom: "2rem",
              }}
            >
              {[
                { label: "CLIENT", value: active.client },
                { label: "LOCATION", value: active.location },
                { label: "YEAR", value: active.year },
                { label: "SCOPE", value: active.scope },
              ].map((m) => (
                <div
                  key={m.label}
                  style={{
                    padding: "1rem 1.25rem",
                    background: "oklch(0.10 0.015 240)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.6rem",
                      letterSpacing: "0.18em",
                      color: "oklch(0.63 0.18 38)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {m.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.82rem",
                      color: "oklch(0.75 0.02 240)",
                      lineHeight: 1.4,
                    }}
                  >
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats strip */}
            {active.stats && active.stats.length > 0 && (
              <div
                style={{
                  display: "flex",
                  gap: "0",
                  marginBottom: "2rem",
                  background: "oklch(0.12 0.02 240)",
                  borderLeft: "4px solid oklch(0.63 0.18 38)",
                  flexWrap: "wrap",
                }}
              >
                {active.stats.map((s) => (
                  <div
                    key={s.label}
                    style={{
                      padding: "1.25rem 2rem",
                      borderRight: "1px solid oklch(0.16 0.02 240)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 900,
                        fontSize: "1.75rem",
                        color: "white",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "0.62rem",
                        letterSpacing: "0.14em",
                        color: "oklch(0.50 0.02 240)",
                        fontWeight: 600,
                        marginTop: "0.25rem",
                      }}
                    >
                      {s.label.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Description */}
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                color: "white",
                lineHeight: 0.95,
                marginBottom: "1rem",
                letterSpacing: "-0.01em",
              }}
            >
              {active.name.toUpperCase()}
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                color: "oklch(0.60 0.02 240)",
                lineHeight: 1.75,
                maxWidth: "680px",
              }}
            >
              {active.description}
            </p>
          </div>
        </div>
      </section>

      {/* ─── FOOTER CTA ─── */}
      <section
        style={{
          padding: "4rem clamp(1.5rem, 6vw, 6rem)",
          background: "oklch(0.07 0.01 240)",
          borderTop: "1px solid oklch(0.14 0.02 240)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              color: "oklch(0.63 0.18 38)",
              marginBottom: "0.5rem",
            }}
          >
            DISCUSS A SIMILAR PROJECT
          </p>
          <h3
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              color: "white",
              lineHeight: 0.95,
            }}
          >
            LET'S TALK SCOPE.
          </h3>
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="mailto:info@specificgroup.com.au"
            style={{
              display: "inline-block",
              background: "oklch(0.63 0.18 38)",
              color: "white",
              textDecoration: "none",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "0.78rem",
              letterSpacing: "0.15em",
              padding: "0.85rem 2rem",
            }}
          >
            EMAIL THE TEAM →
          </a>
          <Link
            href="/projects"
            style={{
              display: "inline-block",
              border: "1px solid oklch(0.30 0.02 240)",
              color: "oklch(0.65 0.02 240)",
              textDecoration: "none",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "0.78rem",
              letterSpacing: "0.15em",
              padding: "0.85rem 2rem",
            }}
          >
            ← ALL CATEGORIES
          </Link>
        </div>
      </section>

      {/* ─── UPLOADED GALLERY PHOTOS ─── */}
      <UploadedGallery categoryKey={categoryNum === "01" ? "ffe" : categoryNum === "02" ? "joinery" : categoryNum === "03" ? "relocations" : categoryNum === "04" ? "special" : categoryNum === "05" ? "av" : "warehousing"} />

      <style>{`
        @media (max-width: 900px) {
          .cat-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

// ─── Uploaded Gallery Section ──────────────────────────────────────────────
function UploadedGallery({ categoryKey }: { categoryKey: string }) {
  const { data: media, isLoading } = trpc.projectMedia.listByCategory.useQuery({ category: categoryKey });
  const [lightbox, setLightbox] = useState<string | null>(null);

  if (isLoading || !media || media.length === 0) return null;

  return (
    <section
      style={{
        padding: "clamp(2rem, 4vw, 4rem) clamp(1.5rem, 6vw, 6rem)",
        borderTop: "1px solid oklch(0.16 0.02 240)",
      }}
    >
      <p
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          color: "oklch(0.63 0.18 38)",
          marginBottom: "1.25rem",
          textTransform: "uppercase",
        }}
      >
        Project Gallery — {media.length} Photo{media.length !== 1 ? "s" : ""}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "0.75rem",
        }}
      >
        {media.map((item) => (
          <div
            key={item.id}
            onClick={() => setLightbox(item.url)}
            style={{ cursor: "pointer", position: "relative", overflow: "hidden", background: "oklch(0.12 0.02 240)" }}
          >
            <img
              src={item.url}
              alt={item.caption ?? item.projectName ?? "Project photo"}
              style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            {(item.caption || item.projectName) && (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "0.5rem 0.75rem",
                  background: "linear-gradient(to top, oklch(0.08 0.01 240 / 0.9) 0%, transparent 100%)",
                }}
              >
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "white", fontWeight: 600 }}>
                  {item.caption ?? item.projectName}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "oklch(0.05 0.01 240 / 0.95)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
          }}
        >
          <img
            src={lightbox}
            alt="Full size"
            style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain" }}
          />
        </div>
      )}
    </section>
  );
}
