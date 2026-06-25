/*
 * FF&E Installations — Category Project Gallery
 * 12 hotel and commercial FF&E projects across NZ and AU
 */
import ProjectCategoryPage, { ProjectItem } from "@/components/ProjectCategoryPage";
import { SEO_CONFIGS } from "@/components/SEOHead";

const projects: ProjectItem[] = [
  {
    id: "indigo",
    name: "Hotel Indigo Auckland",
    client: "Ninety-Four Feet / IHG Hotels & Resorts",
    location: "51 Albert Street, Auckland CBD",
    year: "2024–2025",
    scope: "Full FF&E Delivery & Installation — 225 rooms, 27 floors",
    description:
      "Specific NZ delivered the full FF&E installation scope for Hotel Indigo Auckland — IHG's luxury boutique lifestyle brand making its New Zealand debut at 51 Albert Street, Midtown Auckland. The 225-room hotel spans 27 floors of a 41-storey tower, with the design concept rooted in the site's 1912 motor house heritage. Specific NZ managed the precision installation of complete room packages across all accommodation floors — beds, soft furnishings, joinery, desks, automotive-inspired lighting fixtures, pegboard shelving, and all loose FF&E — to IHG's exacting brand standards. Delivered for the official opening on 7 April 2025.",
    hero: "/manus-storage/Screenshot2026-04-26004756_08326719.png",
    images: [
      "/manus-storage/Screenshot2026-04-26004756_08326719.png",
      "/manus-storage/Room_1810_0562_c8661c58.webp",
      "/manus-storage/09e77881-06bf-42a8-9ace-e73cdb4d4f38_161ba70d.jpg",
      "/manus-storage/920ead3c-0641-4caf-bc61-606284ff7251_1899784d.jpg",
      "/manus-storage/d98c97af-4f3f-4da0-ab61-b882f89e5eac_186d275a.jpg",
      "/manus-storage/2702bb06-56a7-4cb5-81f8-48e81114a91d_f01f658f.jpg",
      "/manus-storage/Details_1580_d524259d.webp",
      "/manus-storage/indigo_room3_18ec82f6.jpg",
      "/manus-storage/indigo_room4_4adcf44b.jpg",
    ],
    stats: [
      { value: "225", label: "Guest Rooms Fitted" },
      { value: "27", label: "Hotel Floors" },
      { value: "41", label: "Storey Tower" },
      { value: "Apr 2025", label: "Opening Date" },
    ],
  },
  {
    id: "queenstown-hotel",
    name: "Queenstown Hotel FF&E",
    client: "Confidential / Queenstown Hotel Developer",
    location: "Queenstown, New Zealand",
    year: "2026",
    scope: "Full FF&E Delivery, Assembly & Installation",
    description:
      "Specific NZ delivered the complete FF&E installation programme for a luxury hotel development in Queenstown, with Lake Wakatipu views across all guest floors. The scope included full room fit-out — high-end leather bench seating, marble-top side tables with brushed bronze bases, custom oak joinery, floating bedside units with integrated power, and designer corridor carpet installation under protective wrap. The Specific team assembled and installed all furniture on-site, working across active construction floors with crane-assisted access where required. Delivered to programme with zero defects at handover.",
    hero: "/manus-storage/20260305_151235_6d28f6bf.webp",
    images: [
      "/manus-storage/20260305_151235_6d28f6bf.webp",
      "/manus-storage/20260309_075804_3edde8bb.webp",
      "/manus-storage/20260309_090234_072837a5.webp",
      "/manus-storage/20260130_091440_a8cf5a50.webp",
      "/manus-storage/20260126_081242_22845511.webp",
      "/manus-storage/20260129_104520_6d10746d.webp",
      "/manus-storage/20260126_121334_5e9358e9.webp",
    ],
    stats: [
      { value: "7+", label: "Floors Installed" },
      { value: "Lake", label: "Wakatipu Views" },
      { value: "Full", label: "Room FF&E Package" },
      { value: "Zero", label: "Defects at Handover" },
    ],
  },
  {
    id: "grand-millennium",
    name: "Grand Millennium Auckland",
    client: "Millennium Hotels & Resorts / CDLHT",
    location: "71 Mayoral Drive, Auckland CBD",
    year: "2024",
    scope: "FF&E Delivery & Installation — 453 rooms",
    description:
      "Specific NZ delivered FF&E installation services for Grand Millennium Auckland — one of Auckland's premier 5-star hotel properties. The 453-room, 12-storey atrium-styled hotel at 71 Mayoral Drive is a Qualmark 5-star graded establishment and one of the city's landmark hospitality venues. Specific NZ coordinated the delivery and precision installation of room and public area FF&E to programme, working within the operational constraints of a live hotel environment.",
    hero: "/manus-storage/grand_millennium_exterior_b262ed44.png",
    images: [
      "/manus-storage/grand_millennium_exterior_b262ed44.png",
      "/manus-storage/grand_millennium_room1_68ec7725.jpg",
      "/manus-storage/grand_millennium_room2_49cc013f.jpg",
    ],
    stats: [
      { value: "453", label: "Guest Rooms" },
      { value: "5-Star", label: "Qualmark Graded" },
      { value: "12", label: "Storey Atrium Hotel" },
    ],
  },
  {
    id: "voco-auckland",
    name: "Voco Auckland City Centre",
    client: "Pro-invest Hotels / IHG Hotels & Resorts",
    location: "Corner of Albert & Wyndham Streets, Auckland CBD",
    year: "2022",
    scope: "Full FF&E Delivery & Installation — 201 rooms",
    description:
      "Specific NZ delivered the full FF&E installation scope for Voco Auckland City Centre — New Zealand's first Voco branded property and part of the country's first dual-brand hotel development alongside Holiday Inn Express. The 201-room hotel features sustainable bedding, smart in-room technology, curated artworks, and stylish marble bathrooms. Specific NZ managed precision installation of complete room packages across all floors to IHG's exacting brand standards.",
    hero: "/manus-storage/voco_auckland_room1_b885e8e0.jpg",
    images: [
      "/manus-storage/voco_auckland_room1_b885e8e0.jpg",
      "/manus-storage/voco_auckland_room2_c4befad9.jpg",
      "/manus-storage/voco_auckland_room3_e055a136.jpg",
    ],
    stats: [
      { value: "201", label: "Rooms & Suites" },
      { value: "May 2022", label: "Opening Date" },
      { value: "NZ First", label: "Voco Branded Property" },
    ],
  },
  {
    id: "holiday-inn",
    name: "Holiday Inn Express Auckland City Centre",
    client: "Pro-invest Hotels / IHG Hotels & Resorts",
    location: "58 Albert Street, Auckland CBD",
    year: "2022",
    scope: "FF&E Delivery & Installation — 294 rooms",
    description:
      "Specific NZ delivered the full FF&E installation scope for Holiday Inn Express Auckland City Centre — New Zealand's first dual-branded hotel development. The 294-room hotel is part of the same development as Voco Auckland City Centre, forming New Zealand's first dual-brand hotel tower. Specific NZ managed the delivery and precision installation of complete room packages across all floors to IHG brand standards. The hotel opened 26 May 2022.",
    hero: "/manus-storage/indigo_room3_18ec82f6.jpg",
    images: [
      "/manus-storage/indigo_room3_18ec82f6.jpg",
      "/manus-storage/indigo_room4_4adcf44b.jpg",
    ],
    stats: [
      { value: "294", label: "Guest Rooms Fitted" },
      { value: "May 2022", label: "Opening Date" },
      { value: "NZ First", label: "Dual-Brand Development" },
    ],
  },
  {
    id: "tryp-wellington",
    name: "Tryp by Wyndham Wellington",
    client: "Safari Group / Wyndham Hotels & Resorts",
    location: "15 Tory Street, Te Aro, Wellington",
    year: "2023",
    scope: "FF&E Delivery & Installation — 71 rooms",
    description:
      "Specific NZ delivered the FF&E installation scope for Tryp by Wyndham Wellington — a fully renovated heritage-listed art deco building on Tory Street in Wellington's Te Aro precinct. The 71-room hotel features city-influenced design, premium suites with kitchenettes, and a 24/7 fitness centre. Specific NZ managed the delivery and installation of all room FF&E packages within the constraints of a heritage building environment.",
    hero: "/manus-storage/tryp_wgtn_room1_26e49abd.jpg",
    images: [
      "/manus-storage/tryp_wgtn_room1_26e49abd.jpg",
      "/manus-storage/tryp_wgtn_room2_5b61e7d9.jpg",
      "/manus-storage/tryp_wgtn_lobby_9bf42152.jpg",
    ],
    stats: [
      { value: "71", label: "Hotel Rooms" },
      { value: "Early 2023", label: "Opening Date" },
      { value: "Heritage", label: "Listed Building" },
    ],
  },
  {
    id: "laquinta-ellerslie",
    name: "La Quinta by Wyndham Ellerslie Auckland",
    client: "Safari Group / Wyndham Hotels & Resorts",
    location: "20 Park Avenue, Ellerslie, Auckland",
    year: "2023",
    scope: "Full FF&E Delivery & Installation — 246 rooms",
    description:
      "Specific NZ delivered the full FF&E installation scope for La Quinta by Wyndham Ellerslie Auckland — a purpose-built 12-level, 246-room hotel in Ellerslie, Auckland. Specific NZ managed the coordinated delivery and precision installation of complete room packages across all 12 levels, including beds, soft furnishings, joinery, desks, and all loose FF&E to Wyndham brand standards.",
    hero: "/manus-storage/laquinta_room1_0c2db79f.jpg",
    images: [
      "/manus-storage/laquinta_room1_0c2db79f.jpg",
      "/manus-storage/laquinta_room2_40d69e50.jpg",
      "/manus-storage/laquinta_exterior_6b70a50e.jpg",
    ],
    stats: [
      { value: "246", label: "Guest Rooms" },
      { value: "12", label: "Levels" },
      { value: "Oct 2023", label: "Opening Date" },
    ],
  },
  {
    id: "drifter-christchurch",
    name: "Drifter Christchurch",
    client: "Leisure Accommodation Collective / Dovetail and Co.",
    location: "96 Lichfield Street, Christchurch",
    year: "2024",
    scope: "FF&E Delivery & Installation — 95 rooms",
    description:
      "Specific NZ delivered the FF&E installation scope for Drifter Christchurch — a design-led hybrid hotel in a heritage building on Lichfield Street. The 95-room property by Leisure Accommodation Collective features architecture by Urbanfunction and interior design by CTRL Space. Specific NZ managed delivery and installation of all FF&E packages within the heritage building environment for the October 2024 official opening.",
    hero: "/manus-storage/drifter_chch_exterior_ee76e1e5.jpg",
    images: [
      "/manus-storage/drifter_chch_exterior_ee76e1e5.jpg",
      "/manus-storage/drifter_chch_room1_75885f15.jpg",
      "/manus-storage/drifter_chch_bar_b92b68fe.jpg",
    ],
    stats: [
      { value: "95", label: "Rooms" },
      { value: "Oct 2024", label: "Official Opening" },
      { value: "Heritage", label: "Building" },
    ],
  },
  {
    id: "ramada-newmarket",
    name: "Ramada by Wyndham Newmarket Auckland",
    client: "Safari Group / Wyndham Hotels & Resorts",
    location: "41 Gillies Avenue, Newmarket, Auckland",
    year: "2021",
    scope: "FF&E Delivery & Installation — 93 rooms",
    description:
      "Specific NZ delivered the FF&E installation scope for Ramada by Wyndham Newmarket Auckland — a 93-room serviced apartment hotel forming part of a $100 million mixed-use development in Newmarket. The property features rooms and apartments designed to maximise sun, views, and living space, along with a high-tech purpose-built meeting room. Specific NZ coordinated delivery and installation of all room FF&E packages to Wyndham brand standards.",
    hero: "/manus-storage/ramada_newmarket_room1_a3c71b8b.jpg",
    images: [
      "/manus-storage/ramada_newmarket_room1_a3c71b8b.jpg",
      "/manus-storage/ramada_newmarket_room2_1acd9e30.jpg",
      "/manus-storage/ramada_newmarket_exterior_f40df10c.jpg",
    ],
    stats: [
      { value: "93", label: "Rooms & Apartments" },
      { value: "June 2021", label: "Opening Date" },
      { value: "$100M", label: "Mixed-Use Development" },
    ],
  },
  {
    id: "ramada-victoria",
    name: "Ramada Suites Victoria Street West",
    client: "Safari Group Ltd / Wyndham Hotels & Resorts",
    location: "147 Victoria Street West, Auckland CBD",
    year: "2018",
    scope: "FF&E Delivery & Installation — 48 suites + 55 apartments",
    description:
      "Specific NZ delivered the FF&E installation scope for Ramada Suites by Wyndham Victoria Street West — a mixed-use development in the heart of Auckland CBD comprising 48 serviced apartment suites, 55 residential apartments, and retail/office units. The project required coordinated delivery and installation of FF&E packages across both the hotel and residential components.",
    hero: "/manus-storage/ramada_victoria_room1_57fe6018.jpg",
    images: [
      "/manus-storage/ramada_victoria_room1_57fe6018.jpg",
      "/manus-storage/ramada_victoria_room2_13e4a2c6.jpg",
      "/manus-storage/ramada_victoria_exterior_f49bdd1a.jpg",
    ],
    stats: [
      { value: "48", label: "Serviced Apartment Suites" },
      { value: "55", label: "Residential Apartments" },
      { value: "Late 2018", label: "Completion Date" },
    ],
  },
  {
    id: "mercure-melbourne",
    name: "Mercure Melbourne",
    client: "Accor Hotels",
    location: "Melbourne, Victoria, Australia",
    year: "2026",
    scope: "Joinery & FF&E Installation — Full Bathroom Package",
    description:
      "Specific delivered the full joinery and FF&E installation scope for Mercure Melbourne — an Accor Hotels property. The scope included precision bathroom joinery installation across all guest rooms, including custom vanity cabinetry, backlit mirror installation, and complete OS&E placement. Every room was installed to Accor brand standards with photographic handover documentation.",
    hero: "/manus-storage/mecuremelbourne2026bathrooms_d412ea97.jpeg",
    images: ["/manus-storage/mecuremelbourne2026bathrooms_d412ea97.jpeg"],
    stats: [
      { value: "2026", label: "Completion Year" },
      { value: "Accor", label: "Hotel Brand" },
      { value: "Full", label: "Bathroom Joinery Package" },
    ],
  },
  {
    id: "skyline",
    name: "Skyline Gondola Queenstown",
    client: "Skyline Enterprises",
    location: "Queenstown, New Zealand",
    year: "2025–2026",
    scope: "FF&E Delivery & Installation — High-Altitude Specialist",
    description:
      "The Skyline Gondola redevelopment in Queenstown presented one of the most logistically complex FF&E challenges in New Zealand — a high-altitude site accessible only via gondola or crane, with no conventional truck access to the installation floors. Specific NZ coordinated the full FF&E delivery and installation scope including dining chairs, tables, booth seating, bar joinery, and all loose items across the new restaurant and hospitality spaces.",
    hero: "/manus-storage/20260314_150857_2793dba8.webp",
    images: [
      "/manus-storage/20260314_150857_2793dba8.webp",
      "/manus-storage/skyline_booths_f24eb5c5.webp",
      "/manus-storage/skyline_joinery_ecfa11c5.webp",
      "/manus-storage/skyline_terrace_crane_9c818d4f.webp",
      "/manus-storage/skyline_container_delivery_5d88c352.webp",
      "/manus-storage/skyline_crane_site_6b624941.webp",
    ],
    stats: [
      { value: "High", label: "Altitude Specialist" },
      { value: "Crane", label: "Assisted Access" },
      { value: "Full", label: "Restaurant FF&E" },
    ],
  },
];

export default function FFEPage() {
  return (
    <ProjectCategoryPage
      categoryNum="01"
      categoryTitle="FF&E Installations"
      categorySubtitle="Hotels · Stadiums · Commercial"
      intro="Full FF&E delivery, placement, and installation across New Zealand's most demanding hotel and commercial developments. From 27-storey towers to high-altitude gondola restaurants — every project delivered by our own trained teams."
      projects={projects}
      seoConfig={SEO_CONFIGS.projectsFfe}
    />
  );
}
