/*
 * Warehousing & Storage — Category Project Gallery
 * Tara ITI + Commercial FF&E Storage
 */
import ProjectCategoryPage, { ProjectItem } from "@/components/ProjectCategoryPage";
import { SEO_CONFIGS } from "@/components/SEOHead";

const projects: ProjectItem[] = [
  {
    id: "tara-iti",
    name: "Tara Iti — High-End Residential Relocation & Specialised Storage",
    client: "Confidential / Private Client",
    location: "New Zealand",
    year: "2024–2025",
    scope: "White-Glove Residential Relocation & Long-Term Specialised Storage",
    description:
      "Specific NZ was engaged to manage the full relocation and specialised storage programme for Tara Iti — a high-end private residential project requiring the highest standard of care, discretion, and handling. The scope encompassed the careful packing, transportation, and secure storage of significant personal property, bespoke furniture, artwork, and high-value assets. Specific NZ's white-glove team operated with full inventory management, climate-controlled storage, and photographic condition reporting at every stage. The project required long-term secure storage with scheduled access and retrieval, coordinated around the client's programme. This project exemplifies Specific's capability to manage sensitive, high-value residential relocations with the same rigour applied to our largest commercial programmes.",
    hero: "/manus-storage/20250929_122352_bd7687d3.webp",
    images: [
      "/manus-storage/20250929_122352_bd7687d3.webp",
      "/manus-storage/20250929_122406_1d905b4a.webp",
      "/manus-storage/Screenshot2026-04-08014112_3fe21c4c.png",
    ],
    stats: [
      { value: "White", label: "Glove Standard" },
      { value: "Secure", label: "Climate-Controlled Storage" },
      { value: "Full", label: "Inventory Management" },
      { value: "Long-Term", label: "Storage Programme" },
    ],
  },
  {
    id: "auckland-warehouse",
    name: "Specific NZ — Auckland Warehouse & Distribution Hub",
    client: "Specific New Zealand",
    location: "1/31 Ha Crescent, Māngere, Auckland",
    year: "Ongoing",
    scope: "FF&E Storage, Receiving, QC, Staged Release & Distribution",
    description:
      "Specific NZ operates its Auckland warehouse and distribution hub at 1/31 Ha Crescent, Māngere — a purpose-built facility supporting the full FF&E project lifecycle across New Zealand. The facility handles container receipt, quality control inspection, secure storage, and staged floor-by-floor release to active construction sites across the country. The warehouse supports Specific NZ's hotel FF&E programmes, commercial installations, and joinery storage — providing the logistics backbone that enables complex multi-floor hotel projects to be delivered on programme. The Specific NZ branded facility is the operational hub for all Auckland-based project logistics.",
    hero: "/manus-storage/Screenshot2023-10-16093627_9d11d56e.png",
    images: [
      "/manus-storage/Screenshot2023-10-16093627_9d11d56e.png",
      "/manus-storage/Screenshot2023-09-07085551_45791b16.png",
      "/manus-storage/Screenshot2023-09-07085659_0af6cb54.png",
    ],
    stats: [
      { value: "Māngere", label: "Auckland Hub" },
      { value: "Secure", label: "Purpose-Built Facility" },
      { value: "Full", label: "QC & Inventory Tracking" },
      { value: "NZ Wide", label: "Distribution Coverage" },
    ],
  },
];

export default function WarehousingPage() {
  return (
    <ProjectCategoryPage
      categoryNum="06"
      categoryTitle="Warehousing & Storage"
      categorySubtitle="Secure Storage · Specialist Handling · White Glove"
      intro="Purpose-built secure warehousing for FF&E, joinery, and high-value assets — including specialised white-glove storage and handling for New Zealand's most discerning residential and commercial clients."
      projects={projects}
      seoConfig={SEO_CONFIGS.projectsWarehousing}
    />
  );
}
