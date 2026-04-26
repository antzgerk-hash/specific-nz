/*
 * Warehousing & Storage — Category Project Gallery
 * Tara ITI + Commercial FF&E Storage
 */
import ProjectCategoryPage, { ProjectItem } from "@/components/ProjectCategoryPage";

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
    hero: "/manus-storage/Screenshot2026-04-08013641_37253495.png",
    images: [
      "/manus-storage/Screenshot2026-04-08013641_37253495.png",
      "/manus-storage/Screenshot2026-04-08014112_2df50744.png",
      "/manus-storage/Screenshot2026-04-08014047_7b0f1897.png",
    ],
    stats: [
      { value: "White", label: "Glove Standard" },
      { value: "Secure", label: "Climate-Controlled Storage" },
      { value: "Full", label: "Inventory Management" },
      { value: "Long-Term", label: "Storage Programme" },
    ],
  },
  {
    id: "commercial-ffe-storage",
    name: "Commercial FF&E Warehousing",
    client: "Multiple Hotel & Commercial Clients",
    location: "Auckland, New Zealand",
    year: "Ongoing",
    scope: "Secure FF&E Storage, Receiving, QC & Staged Release",
    description:
      "Specific NZ operates purpose-built secure warehousing facilities for the receipt, quality control, and staged storage of FF&E and joinery prior to installation. Our warehouse capability supports the full project lifecycle — from container receipt and QC inspection through to floor-by-floor staged release to active construction sites. The facility includes dedicated vault storage for high-value items, cage trolley systems for efficient movement, and full inventory tracking. This warehousing capability is integral to Specific NZ's ability to manage complex hotel FF&E programmes where phased delivery and on-site storage are not feasible.",
    hero: "/manus-storage/ffe_installation_d22ff496.jpg",
    images: [
      "/manus-storage/ffe_installation_d22ff496.jpg",
      "/manus-storage/Screenshot2026-04-08013641_37253495.png",
    ],
    stats: [
      { value: "Secure", label: "Purpose-Built Facility" },
      { value: "Full", label: "QC & Inventory Tracking" },
      { value: "Staged", label: "Release to Site" },
      { value: "NZ Wide", label: "Coverage" },
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
    />
  );
}
