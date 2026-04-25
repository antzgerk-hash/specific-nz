/*
 * Home Page — Dark Authority Design
 * Sections: Hero, Stats Bar, Services, Featured Projects, Clients/Partners, CTA
 * Palette: Navy #0B1829 / Orange #E8652A / Teal #0D9488
 * Typography: Barlow Condensed (headings) + DM Sans (body)
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Animated counter hook
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// Intersection observer hook
function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const services = [
  {
    number: "01",
    title: "FF&E Delivery & Installation",
    desc: "Full-scope furniture, fixtures and equipment delivery, QC, staging, and precision installation across hospitality, commercial, and public venues.",
  },
  {
    number: "02",
    title: "Commercial Installations",
    desc: "Workstations, AV, joinery, whitegoods, and specialist fit-out items installed by dedicated teams with programme accountability.",
  },
  {
    number: "03",
    title: "Relocations",
    desc: "Corporate and commercial relocations managed end-to-end — from pre-move planning through to post-move stabilisation and close-out.",
  },
  {
    number: "04",
    title: "Logistics Management",
    desc: "Warehousing, receipt, QC, sequencing, and delivery coordination across multiple suppliers and sites — one point of accountability.",
  },
];

const projects = [
  {
    name: "One NZ Stadium — Te Kaha",
    location: "Christchurch",
    sector: "Stadium / Public Venue",
    scope: "FF&E delivery & installation",
    stats: "2,740 items · 55+ truckloads · 20+ site days",
    image: "/manus-storage/stadium_seats_completed_4cbc7ed4.png",
    href: "/projects",
  },
  {
    name: "Indigo Auckland",
    location: "Auckland CBD",
    sector: "Hospitality / Hotel",
    scope: "Full FF&E installation",
    stats: "Multi-floor hotel room FF&E",
    image: "/manus-storage/indigo_room2_9aeecf11.jpg",
    href: "/projects",
  },
  {
    name: "Skyline Gondola",
    location: "Queenstown",
    sector: "Tourism / Hospitality",
    scope: "FF&E delivery & installation",
    stats: "High-altitude specialist delivery",
    image: "/manus-storage/skyline_restaurant_d6985091.webp",
    href: "/projects",
  },
];

export default function Home() {
  const statsRef = useInView(0.2);
  const c1 = useCounter(2740, 2200, statsRef.inView);
  const c2 = useCounter(55, 1800, statsRef.inView);
  const c3 = useCounter(20, 1600, statsRef.inView);
  const c4 = useCounter(60, 2000, statsRef.inView);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.16 0.035 240)" }}>
      <Navigation />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-end pb-20 lg:pb-28 overflow-hidden"
        style={{ background: "oklch(0.10 0.03 240)" }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/manus-storage/stadium_interior_completed_2b57613a.png"
            alt="One NZ Stadium — Te Kaha"
            className="w-full h-full object-cover"
            style={{ opacity: 0.35 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, oklch(0.10 0.03 240) 30%, oklch(0.10 0.03 240 / 0.6) 60%, oklch(0.10 0.03 240 / 0.3) 100%)",
            }}
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <p className="section-label mb-5 fade-up">Specific New Zealand</p>
            <h1
              className="fade-up-1 mb-6"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
                lineHeight: 0.95,
                color: "white",
                letterSpacing: "-0.02em",
              }}
            >
              WHEN THE DEADLINE<br />
              <span style={{ color: "oklch(0.63 0.18 38)" }}>IS IMMOVABLE.</span>
            </h1>
            <p
              className="fade-up-2 mb-10 max-w-xl"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.125rem",
                color: "oklch(0.75 0.02 240)",
                lineHeight: 1.65,
              }}
            >
              Specialist FF&E delivery, installation, and commercial logistics across New Zealand. Trusted by leading hotel developers, construction firms, and fit-out managers.
            </p>
            <div className="fade-up-3 flex flex-wrap gap-4">
              <Link
                href="/projects"
                style={{
                  background: "oklch(0.63 0.18 38)",
                  color: "white",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "0.85rem 2rem",
                  display: "inline-block",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "oklch(0.55 0.18 38)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "oklch(0.63 0.18 38)"; }}
              >
                View Our Projects
              </Link>
              <Link
                href="/contact"
                style={{
                  background: "transparent",
                  color: "white",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "0.85rem 2rem",
                  display: "inline-block",
                  border: "1.5px solid oklch(1 0 0 / 0.3)",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "oklch(0.63 0.18 38)";
                  el.style.background = "oklch(0.63 0.18 38 / 0.1)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "oklch(1 0 0 / 0.3)";
                  el.style.background = "transparent";
                }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 lg:right-12 hidden lg:flex flex-col items-center gap-2">
          <div
            style={{
              width: "1px",
              height: "60px",
              background: "linear-gradient(to bottom, transparent, oklch(0.63 0.18 38))",
            }}
          />
          <p className="section-label" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
            Scroll
          </p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section
        ref={statsRef.ref}
        style={{ background: "oklch(0.12 0.03 240)", borderTop: "1px solid oklch(1 0 0 / 0.08)", borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}
      >
        <div className="container py-14 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/10">
            {[
              { value: c1, suffix: "+", label: "Items Delivered & Installed" },
              { value: c2, suffix: "+", label: "Truckloads Coordinated" },
              { value: c3, suffix: "+", label: "Site Days on Te Kaha" },
              { value: c4, suffix: "+", label: "Suppliers Managed" },
            ].map((stat, i) => (
              <div key={i} className="lg:px-10 text-center lg:text-left">
                <div className="stat-number">{stat.value.toLocaleString()}{stat.suffix}</div>
                <p
                  className="mt-2 text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.62 0.025 240)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="mb-14">
            <p className="section-label mb-4">What We Do</p>
            <h2
              className="heading-accent"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "white",
              }}
            >
              SPECIALIST LOGISTICS<br />FOR COMPLEX PROJECTS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "oklch(1 0 0 / 0.06)" }}>
            {services.map((s) => (
              <div
                key={s.number}
                className="group p-8 lg:p-10 transition-colors duration-200"
                style={{ background: "oklch(0.16 0.035 240)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "oklch(0.20 0.04 240)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "oklch(0.16 0.035 240)"; }}
              >
                <p
                  className="mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", color: "oklch(0.63 0.18 38)" }}
                >
                  {s.number}
                </p>
                <h3
                  className="mb-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.6rem", color: "white" }}
                >
                  {s.title}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "oklch(0.65 0.025 240)", lineHeight: 1.65 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-right">
            <Link
              href="/services"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "oklch(0.63 0.18 38)",
              }}
            >
              All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section
        className="py-20 lg:py-28"
        style={{ background: "oklch(0.13 0.032 240)" }}
      >
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="section-label mb-4">Recent Work</p>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: "white",
                }}
              >
                FEATURED PROJECTS
              </h2>
            </div>
            <Link
              href="/projects"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "oklch(0.63 0.18 38)",
                whiteSpace: "nowrap",
              }}
            >
              All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <Link key={i} href={p.href}>
                <div
                  className="group relative overflow-hidden"
                  style={{ aspectRatio: "4/3", cursor: "pointer" }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{ transform: "scale(1)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                  />
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-6"
                    style={{
                      background: "linear-gradient(to top, oklch(0.10 0.03 240 / 0.95) 0%, oklch(0.10 0.03 240 / 0.5) 50%, transparent 100%)",
                    }}
                  >
                    <p className="section-label mb-1">{p.sector}</p>
                    <h3
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.5rem",
                        color: "white",
                        lineHeight: 1.1,
                      }}
                    >
                      {p.name}
                    </h3>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8125rem", color: "oklch(0.65 0.025 240)", marginTop: "0.25rem" }}>
                      {p.location} · {p.scope}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.75rem",
                        color: "oklch(0.63 0.18 38)",
                        marginTop: "0.5rem",
                        fontWeight: 600,
                      }}
                    >
                      {p.stats}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SPECIFIC ── */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Why Specific NZ</p>
              <h2
                className="heading-accent mb-8"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                  color: "white",
                }}
              >
                THE LOGISTICS PARTNER<br />FOR DIFFICULT PROJECTS
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Programme Accountability", body: "We understand that your opening date is not negotiable. Our teams are built around programme delivery, not just task completion." },
                  { title: "Specialist Handling", body: "High-value, damage-sensitive, and awkward FF&E requires specialist teams. We do not send general freight carriers to do specialist work." },
                  { title: "Full Chain Visibility", body: "From receipt and QC through to floor-by-floor installation and close-out documentation, we manage the complete chain." },
                  { title: "New Zealand Capability", body: "Based in Auckland with national reach. We understand the NZ construction and hospitality market and the suppliers who operate in it." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div
                      className="flex-shrink-0 mt-1"
                      style={{ width: "3px", background: "oklch(0.63 0.18 38)", alignSelf: "stretch", minHeight: "100%" }}
                    />
                    <div>
                      <h4
                        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.125rem", color: "white", marginBottom: "0.25rem" }}
                      >
                        {item.title}
                      </h4>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "oklch(0.65 0.025 240)", lineHeight: 1.65 }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/manus-storage/skyline_restaurant_d6985091.webp"
                alt="Skyline Gondola Queenstown — completed installation"
                className="w-full object-cover"
                style={{ aspectRatio: "4/5" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: "linear-gradient(to top, oklch(0.10 0.03 240) 0%, transparent 100%)" }}
              >
                <p className="section-label">Skyline Gondola, Queenstown</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "oklch(0.75 0.02 240)", marginTop: "0.25rem" }}>
                  FF&E delivery & installation — high-altitude specialist project
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section
        className="py-20 lg:py-24"
        style={{ background: "oklch(0.63 0.18 38)" }}
      >
        <div className="container text-center">
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "white",
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
            }}
          >
            READY TO TALK<br />ABOUT YOUR PROJECT?
          </h2>
          <p
            className="mt-6 mb-10 max-w-lg mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "oklch(1 0 0 / 0.8)", lineHeight: 1.65 }}
          >
            Whether you're planning a hotel fit-out, a stadium installation, or a complex commercial relocation — let's discuss what Specific NZ can deliver.
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
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "oklch(0.16 0.035 240)";
              el.style.color = "white";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "white";
              el.style.color = "oklch(0.63 0.18 38)";
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
