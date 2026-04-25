/*
 * Projects Page — Dark Authority Design
 * Full project portfolio with photo galleries per project
 */
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const projects = [
  {
    id: "tekaha",
    name: "One NZ Stadium — Te Kaha",
    client: "Statement iD / BESIX Watpac",
    location: "Christchurch, New Zealand",
    sector: "Stadium / Public Venue",
    year: "2025–2026",
    scope: "FF&E Delivery & Installation",
    stats: [
      { value: "2,740", label: "Items Delivered & Installed" },
      { value: "55+", label: "Truckloads Coordinated" },
      { value: "20+", label: "Site Days On Programme" },
      { value: "60+", label: "Suppliers Managed" },
    ],
    description: "Specific NZ was engaged by Statement iD and BESIX Watpac to deliver and install the full FF&E scope across the $683 million One NZ Stadium (Te Kaha) in Christchurch — New Zealand's most significant new public venue in a generation. The project required the coordination of over 2,740 individual items across corporate suites, operational areas, and public spaces, delivered across 55+ truckloads over more than 20 site days. Items included workstations, electricals, refrigeration units, televisions, and specialist joinery. Specific NZ managed the full logistics chain from receipt and QC through to floor-by-floor installation, working to a hard opening deadline for the Super Rugby Pacific Super Round.",
    images: [
      "/manus-storage/stadium_seats_completed_4cbc7ed4.png",
      "/manus-storage/stadium_interior_completed_2b57613a.png",
      "/manus-storage/one_nz_stadium_logo_67bf316d.jpg",
      "/manus-storage/tekaha_bikeracks_ab337b6d.webp",
      "/manus-storage/tekaha_whiteboard_6a6f9301.webp",
    ],
    hero: "/manus-storage/stadium_interior_completed_2b57613a.png",
  },
  {
    id: "indigo",
    name: "Hotel Indigo Auckland",
    client: "Ninety-Four Feet / IHG Hotels & Resorts",
    location: "51 Albert Street, Auckland CBD",
    sector: "Hospitality / Luxury Boutique Hotel",
    year: "2024–2025",
    scope: "Full FF&E Delivery & Installation",
    stats: [
      { value: "225", label: "Guest Rooms Fitted" },
      { value: "27", label: "Hotel Floors" },
      { value: "41", label: "Storey Tower" },
      { value: "Apr 2025", label: "Opening Date" },
    ],
    description: "Specific NZ delivered the full FF&E installation scope for Hotel Indigo Auckland — IHG's luxury boutique lifestyle brand making its New Zealand debut at 51 Albert Street, Midtown Auckland. The 225-room hotel spans 27 floors of a 41-storey tower, with the design concept rooted in the site's 1912 motor house heritage. Specific NZ managed the precision installation of complete room packages across all accommodation floors — beds, soft furnishings, joinery, desks, automotive-inspired lighting fixtures, pegboard shelving, and all loose FF&E — to IHG's exacting brand standards. The project was delivered for the official opening on 7 April 2025. Developer: Ninety-Four Feet. Operator: IHG Hotels & Resorts.",
    images: [
      "/manus-storage/indigo_exterior_05d26789.png",
      "/manus-storage/indigo_room1_4837c19d.jpg",
      "/manus-storage/indigo_room2_9aeecf11.jpg",
      "/manus-storage/indigo_room3_26cf3ca0.jpg",
      "/manus-storage/indigo_room4_962c1606.jpg",
      "/manus-storage/indigo_room5_1e1cb1ed.jpg",
    ],
    hero: "/manus-storage/indigo_room2_9aeecf11.jpg",
  },
  {
    id: "skyline",
    name: "Skyline Gondola Queenstown",
    client: "Skyline Enterprises",
    location: "Queenstown, New Zealand",
    sector: "Tourism / Hospitality",
    year: "2025–2026",
    scope: "FF&E Delivery & Installation",
    stats: [
      { value: "High", label: "Altitude Specialist Delivery" },
      { value: "Crane", label: "Assisted Access Required" },
      { value: "Full", label: "Restaurant & Bar FF&E" },
      { value: "QTown", label: "Queenstown Location" },
    ],
    description: "The Skyline Gondola redevelopment in Queenstown presented one of the most logistically complex FF&E challenges in New Zealand — a high-altitude site accessible only via gondola or crane, with no conventional truck access to the installation floors. Specific NZ coordinated the full FF&E delivery and installation scope including dining chairs, tables, booth seating, bar joinery, and all loose items across the new restaurant and hospitality spaces. Items were delivered by container to the base site and crane-lifted to the installation level, with Specific NZ teams managing the full sequence from ground to completion.",
    images: [
      "/manus-storage/skyline_restaurant_d6985091.webp",
      "/manus-storage/skyline_dining_complete_81c38c70.webp",
      "/manus-storage/skyline_booths_3d68b935.webp",
      "/manus-storage/skyline_joinery_c9e3e4f1.webp",
      "/manus-storage/skyline_terrace_crane_e82076ee.webp",
      "/manus-storage/skyline_container_delivery_e9fb98e7.webp",
      "/manus-storage/skyline_crane_site_da39dfa3.webp",
      "/manus-storage/skyline_gondola_cabin_2340fbd3.webp",
    ],
    hero: "/manus-storage/skyline_restaurant_d6985091.webp",
  },
  {
    id: "millennium",
    name: "Millennium Auckland",
    client: "Millennium Hotels & Resorts",
    location: "Auckland CBD, New Zealand",
    sector: "Hospitality / Hotel",
    year: "2024",
    scope: "FF&E Delivery & Installation",
    stats: [],
    description: "Specific NZ delivered FF&E installation services for Millennium Auckland, one of the city's landmark hotel properties. The project involved coordinated delivery and installation of room and public area FF&E to programme.",
    images: [],
    hero: "/manus-storage/indigo_room1_4837c19d.jpg",
    comingSoon: true,
  },
  {
    id: "holiday-inn",
    name: "Holiday Inn Express Auckland City Centre",
    client: "Pro-invest Hotels / IHG Hotels & Resorts",
    location: "58 Albert Street, Auckland CBD",
    sector: "Hospitality / Hotel",
    year: "2022",
    scope: "FF&E Delivery & Installation",
    stats: [
      { value: "294", label: "Guest Rooms Fitted" },
      { value: "May 2022", label: "Opening Date" },
      { value: "NZ First", label: "Dual-Brand Development" },
      { value: "CBD", label: "Auckland Location" },
    ],
    description: "Specific NZ delivered the full FF&E installation scope for Holiday Inn Express Auckland City Centre — New Zealand's first dual-branded hotel development, located at 58 Albert Street (corner of Albert & Wyndham Streets) in the Auckland CBD. The 294-room hotel is part of the same development as voco Auckland City Centre, forming New Zealand's first dual-brand hotel tower. Specific NZ managed the delivery and precision installation of complete room packages across all floors — walk-in shower fittings, blackout blinds, work stations, high-quality bedding, and all loose FF&E — to IHG brand standards. The hotel opened 26 May 2022. Developer: Pro-invest Hotels. Operator: IHG Hotels & Resorts.",
    images: [
      "/manus-storage/indigo_room3_26cf3ca0.jpg",
      "/manus-storage/indigo_room4_962c1606.jpg",
    ],
    hero: "/manus-storage/indigo_room3_26cf3ca0.jpg",
  },
  {
    id: "rydges-qt",
    name: "Rydges Queenstown → QT Hotels",
    client: "Event Hospitality",
    location: "Queenstown, New Zealand",
    sector: "Hospitality / Hotel Rebrand",
    year: "2024",
    scope: "FF&E & Relocation",
    stats: [],
    description: "Specific NZ managed the FF&E and relocation scope for the transition of Rydges Queenstown to the QT Hotels brand, coordinating the removal, storage, and installation of FF&E across the rebrand programme.",
    images: [
      "/manus-storage/rydges_qt_truck_9da4a85e.jpg",
    ],
    hero: "/manus-storage/rydges_qt_truck_9da4a85e.jpg",
  },
  {
    id: "voco-auckland",
    name: "Voco Auckland City Centre",
    client: "Pro-invest Hotels / IHG Hotels & Resorts",
    location: "Corner of Albert & Wyndham Streets, Auckland CBD",
    sector: "Hospitality / Luxury Hotel",
    year: "2022",
    scope: "Full FF&E Delivery & Installation",
    stats: [
      { value: "201", label: "Rooms & Suites" },
      { value: "May 2022", label: "Opening Date" },
      { value: "NZ First", label: "Voco Branded Property" },
      { value: "IHG", label: "Brand Operator" },
    ],
    description: "Specific NZ delivered the full FF&E installation scope for Voco Auckland City Centre — New Zealand's first Voco branded property and part of the country's first dual-brand hotel development alongside Holiday Inn Express. The 201-room hotel features sustainable bedding, smart in-room technology, curated artworks, and stylish marble bathrooms. Specific NZ managed precision installation of complete room packages across all floors to IHG's exacting brand standards. Developer: Pro-invest Hotels. Operator: IHG Hotels & Resorts.",
    images: [
      "/manus-storage/voco_auckland_room1_3f0b217f.jpg",
      "/manus-storage/voco_auckland_room2_3fe8a966.jpg",
      "/manus-storage/voco_auckland_room3_9108bf0d.jpg",
    ],
    hero: "/manus-storage/voco_auckland_room1_3f0b217f.jpg",
  },
  {
    id: "ramada-newmarket",
    name: "Ramada by Wyndham Newmarket Auckland",
    client: "Safari Group / Wyndham Hotels & Resorts",
    location: "41 Gillies Avenue, Newmarket, Auckland",
    sector: "Hospitality / Serviced Apartments",
    year: "2021",
    scope: "FF&E Delivery & Installation",
    stats: [
      { value: "93", label: "Rooms & Apartments" },
      { value: "June 2021", label: "Opening Date" },
      { value: "$100M", label: "Mixed-Use Development" },
      { value: "Newmarket", label: "Auckland Location" },
    ],
    description: "Specific NZ delivered the FF&E installation scope for Ramada by Wyndham Newmarket Auckland — a 93-room serviced apartment hotel forming part of a $100 million mixed-use development in Newmarket. The property features rooms and apartments designed to maximise sun, views, and living space, along with a high-tech purpose-built meeting room. Specific NZ coordinated delivery and installation of all room FF&E packages to Wyndham brand standards. Developer: Safari Group.",
    images: [
      "/manus-storage/ramada_newmarket_room1_cf18e843.jpg",
      "/manus-storage/ramada_newmarket_room2_1cb6b22d.jpg",
      "/manus-storage/ramada_newmarket_exterior_ecba2dbe.jpg",
    ],
    hero: "/manus-storage/ramada_newmarket_room1_cf18e843.jpg",
  },
  {
    id: "ramada-victoria",
    name: "Ramada Suites Victoria Street West",
    client: "Safari Group Ltd / Wyndham Hotels & Resorts",
    location: "147 Victoria Street West, Auckland CBD",
    sector: "Hospitality / Serviced Apartments",
    year: "2018",
    scope: "FF&E Delivery & Installation",
    stats: [
      { value: "48", label: "Serviced Apartment Suites" },
      { value: "55", label: "Residential Apartments" },
      { value: "Late 2018", label: "Completion Date" },
      { value: "CBD", label: "Auckland Location" },
    ],
    description: "Specific NZ delivered the FF&E installation scope for Ramada Suites by Wyndham Victoria Street West — a mixed-use development in the heart of Auckland CBD comprising 48 serviced apartment suites, 55 residential apartments, and retail/office units. The project required coordinated delivery and installation of FF&E packages across both the hotel and residential components. Developer: Safari Group Ltd.",
    images: [
      "/manus-storage/ramada_victoria_room1_d91dba0f.jpg",
      "/manus-storage/ramada_victoria_room2_640b832c.jpg",
      "/manus-storage/ramada_victoria_exterior_8804a7b0.jpg",
    ],
    hero: "/manus-storage/ramada_victoria_room1_d91dba0f.jpg",
  },
  {
    id: "tryp-wellington",
    name: "Tryp by Wyndham Wellington",
    client: "Safari Group / Wyndham Hotels & Resorts",
    location: "15 Tory Street, Te Aro, Wellington",
    sector: "Hospitality / Heritage Hotel",
    year: "2023",
    scope: "FF&E Delivery & Installation",
    stats: [
      { value: "71", label: "Hotel Rooms" },
      { value: "6", label: "Residential Apartments" },
      { value: "Early 2023", label: "Opening Date" },
      { value: "Heritage", label: "Listed Building" },
    ],
    description: "Specific NZ delivered the FF&E installation scope for Tryp by Wyndham Wellington — a fully renovated heritage-listed art deco building on Tory Street in Wellington's Te Aro precinct. The 71-room hotel features city-influenced design, premium suites with kitchenettes, and a 24/7 fitness centre. Specific NZ managed the delivery and installation of all room FF&E packages within the constraints of a heritage building environment. Developer: Safari Group.",
    images: [
      "/manus-storage/tryp_wgtn_room1_33c5c412.jpg",
      "/manus-storage/tryp_wgtn_room2_95ca3f76.jpg",
      "/manus-storage/tryp_wgtn_lobby_73e353bf.jpg",
    ],
    hero: "/manus-storage/tryp_wgtn_room1_33c5c412.jpg",
  },
  {
    id: "laquinta-ellerslie",
    name: "La Quinta by Wyndham Ellerslie Auckland",
    client: "Safari Group / Wyndham Hotels & Resorts",
    location: "20 Park Avenue, Ellerslie, Auckland",
    sector: "Hospitality / Hotel",
    year: "2023",
    scope: "Full FF&E Delivery & Installation",
    stats: [
      { value: "246", label: "Guest Rooms" },
      { value: "12", label: "Levels" },
      { value: "Oct 2023", label: "Opening Date" },
      { value: "Ellerslie", label: "Auckland Location" },
    ],
    description: "Specific NZ delivered the full FF&E installation scope for La Quinta by Wyndham Ellerslie Auckland — a purpose-built 12-level, 246-room hotel in Ellerslie, Auckland. Specific NZ managed the coordinated delivery and precision installation of complete room packages across all 12 levels, including beds, soft furnishings, joinery, desks, and all loose FF&E to Wyndham brand standards. Developer: Safari Group.",
    images: [
      "/manus-storage/laquinta_room1_c13140e2.jpg",
      "/manus-storage/laquinta_room2_9c5125e0.jpg",
      "/manus-storage/laquinta_exterior_2843c938.jpg",
    ],
    hero: "/manus-storage/laquinta_room1_c13140e2.jpg",
  },
  {
    id: "drifter-christchurch",
    name: "Drifter Christchurch",
    client: "Leisure Accommodation Collective (LA Co) / Dovetail and Co.",
    location: "96 Lichfield Street, Christchurch",
    sector: "Hospitality / Design Hotel",
    year: "2024",
    scope: "FF&E Delivery & Installation",
    stats: [
      { value: "95", label: "Rooms" },
      { value: "Oct 2024", label: "Official Opening" },
      { value: "Heritage", label: "Building" },
      { value: "Christchurch", label: "Location" },
    ],
    description: "Specific NZ delivered the FF&E installation scope for Drifter Christchurch — a design-led hybrid hotel in a heritage building on Lichfield Street. The 95-room property by Leisure Accommodation Collective features architecture by Urbanfunction and interior design by CTRL Space, offering both private rooms and shared accommodations. Specific NZ managed delivery and installation of all FF&E packages within the heritage building environment for the October 2024 official opening.",
    images: [
      "/manus-storage/drifter_chch_room1_dce6ba1f.jpg",
      "/manus-storage/drifter_chch_exterior_c96897b6.jpg",
      "/manus-storage/drifter_chch_bar_5843fe17.jpg",
    ],
    hero: "/manus-storage/drifter_chch_exterior_c96897b6.jpg",
  },
  {
    id: "grand-millennium",
    name: "Grand Millennium Auckland",
    client: "Millennium Hotels & Resorts / CDLHT",
    location: "71 Mayoral Drive, Auckland CBD",
    sector: "Hospitality / 5-Star Hotel",
    year: "2024",
    scope: "FF&E Delivery & Installation",
    stats: [
      { value: "453", label: "Guest Rooms" },
      { value: "5-Star", label: "Qualmark Graded" },
      { value: "12", label: "Storey Atrium Hotel" },
      { value: "CBD", label: "Auckland Location" },
    ],
    description: "Specific NZ delivered FF&E installation services for Grand Millennium Auckland — one of Auckland's premier 5-star hotel properties. The 453-room, 12-storey atrium-styled hotel at 71 Mayoral Drive is a Qualmark 5-star graded establishment and one of the city's landmark hospitality venues. Specific NZ coordinated the delivery and precision installation of room and public area FF&E to programme, working within the operational constraints of a live hotel environment.",
    images: [
      "/manus-storage/grand_millennium_exterior_9787ede3.png",
      "/manus-storage/grand_millennium_room1_7fc8a5f2.jpg",
      "/manus-storage/grand_millennium_room2_89ea3763.jpg",
    ],
    hero: "/manus-storage/grand_millennium_exterior_9787ede3.png",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.16 0.035 240)" }}>
      <Navigation />

      {/* Page header */}
      <section
        className="pt-32 pb-16 lg:pt-40 lg:pb-20"
        style={{ background: "oklch(0.12 0.03 240)", borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}
      >
        <div className="container">
          <p className="section-label mb-4">Our Work</p>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              color: "white",
              lineHeight: 0.95,
            }}
          >
            PROJECTS
          </h1>
          <p
            className="mt-6 max-w-2xl"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "oklch(0.65 0.025 240)", lineHeight: 1.65 }}
          >
            A selection of completed FF&E, installation, and logistics projects across New Zealand's hospitality, tourism, and public venue sectors.
          </p>
        </div>
      </section>

      {/* Project selector + detail */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar list */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-1">
                {projects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => { setActiveProject(p); setActiveImage(0); }}
                    className="w-full text-left px-5 py-4 transition-all duration-200 border-l-2"
                    style={{
                      background: activeProject.id === p.id ? "oklch(0.20 0.04 240)" : "transparent",
                      borderLeftColor: activeProject.id === p.id ? "oklch(0.63 0.18 38)" : "transparent",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: activeProject.id === p.id ? "white" : "oklch(0.65 0.025 240)",
                        lineHeight: 1.2,
                      }}
                    >
                      {p.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.75rem",
                        color: activeProject.id === p.id ? "oklch(0.63 0.18 38)" : "oklch(0.50 0.02 240)",
                        marginTop: "0.2rem",
                      }}
                    >
                      {p.location} · {p.year}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Project detail */}
            <div className="lg:col-span-2">
              {/* Hero image */}
              <div className="relative overflow-hidden mb-6" style={{ aspectRatio: "16/9" }}>
                <img
                  src={activeProject.images.length > 0 ? activeProject.images[activeImage] : activeProject.hero}
                  alt={activeProject.name}
                  className="w-full h-full object-cover"
                />
                {activeProject.comingSoon && (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: "oklch(0.10 0.03 240 / 0.7)" }}
                  >
                    <p
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.5rem",
                        color: "oklch(0.63 0.18 38)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      PROJECT PHOTOS COMING SOON
                    </p>
                  </div>
                )}
              </div>

              {/* Thumbnail strip */}
              {activeProject.images.length > 1 && !activeProject.comingSoon && (
                <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                  {activeProject.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className="flex-shrink-0 overflow-hidden"
                      style={{
                        width: "80px",
                        height: "56px",
                        border: activeImage === i ? "2px solid oklch(0.63 0.18 38)" : "2px solid transparent",
                        opacity: activeImage === i ? 1 : 0.6,
                        transition: "opacity 0.2s, border-color 0.2s",
                      }}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Project info */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span
                    className="px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                    style={{ background: "oklch(0.63 0.18 38 / 0.15)", color: "oklch(0.63 0.18 38)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {activeProject.sector}
                  </span>
                  <span
                    className="px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                    style={{ background: "oklch(0.60 0.12 185 / 0.15)", color: "oklch(0.60 0.12 185)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {activeProject.scope}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: "white",
                    lineHeight: 1,
                  }}
                >
                  {activeProject.name}
                </h2>
                <p
                  className="mt-2"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "oklch(0.62 0.025 240)" }}
                >
                  {activeProject.client} · {activeProject.location} · {activeProject.year}
                </p>
              </div>

              {/* Stats */}
              {activeProject.stats.length > 0 && (
                <div
                  className="grid grid-cols-2 sm:grid-cols-4 gap-px mb-8"
                  style={{ background: "oklch(1 0 0 / 0.06)" }}
                >
                  {activeProject.stats.map((s, i) => (
                    <div key={i} className="p-5" style={{ background: "oklch(0.16 0.035 240)" }}>
                      <div
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 800,
                          fontSize: "2rem",
                          color: "oklch(0.63 0.18 38)",
                          lineHeight: 1,
                        }}
                      >
                        {s.value}
                      </div>
                      <p
                        style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.62 0.025 240)", marginTop: "0.25rem" }}
                      >
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9375rem",
                  color: "oklch(0.72 0.025 240)",
                  lineHeight: 1.75,
                }}
              >
                {activeProject.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
