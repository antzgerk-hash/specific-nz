/*
 * AV & OS&E — Category Project Gallery
 * Invocare Aged Care, Holiday Inn Express, Voco Auckland, Tryp Wellington
 */
import ProjectCategoryPage, { ProjectItem } from "@/components/ProjectCategoryPage";

const projects: ProjectItem[] = [
  {
    id: "invocare",
    name: "Invocare Aged Care — National AV Rollout",
    client: "Invocare / White Lady Funerals Group",
    location: "National — New Zealand Wide",
    year: "2023–2024",
    scope: "National AV Installation — 1,600 Television Units",
    description:
      "Specific NZ was engaged to deliver a national AV installation programme for Invocare Aged Care — one of Australasia's largest aged care and funeral services operators. The scope involved the supply, delivery, and installation of 1,600 television units across multiple aged care facilities throughout New Zealand. The programme required precise scheduling, site-by-site coordination, and installation teams operating across the country simultaneously. Every unit was commissioned and tested on-site, with full handover documentation provided for each facility.",
    hero: "/manus-storage/Details_1580_d524259d.webp",
    images: [
      "/manus-storage/Details_1580_d524259d.webp",
      "/manus-storage/d98c97af-4f3f-4da0-ab61-b882f89e5eac_186d275a.jpg",
      "/manus-storage/09e77881-06bf-42a8-9ace-e73cdb4d4f38_161ba70d.jpg",
      "/manus-storage/920ead3c-0641-4caf-bc61-606284ff7251_1899784d.jpg",
    ],
    stats: [
      { value: "1,600", label: "TVs Installed" },
      { value: "National", label: "NZ-Wide Rollout" },
      { value: "Full", label: "Commissioning & Testing" },
      { value: "Multi-Site", label: "Simultaneous Delivery" },
    ],
  },
  {
    id: "holiday-inn-av",
    name: "Holiday Inn Express Auckland — AV & OS&E",
    client: "Pro-invest Hotels / IHG Hotels & Resorts",
    location: "58 Albert Street, Auckland CBD",
    year: "2022",
    scope: "In-Room AV Installation & OS&E Programme",
    description:
      "Alongside the FF&E installation scope, Specific NZ delivered the full in-room AV installation and operating supplies and equipment (OS&E) programme for Holiday Inn Express Auckland City Centre. The scope included television mounting and commissioning, in-room technology setup, and the placement and inventory of all OS&E items across 294 guest rooms to IHG brand standards.",
    hero: "/manus-storage/indigo_room4_4adcf44b.jpg",
    images: [
      "/manus-storage/indigo_room4_4adcf44b.jpg",
      "/manus-storage/indigo_room3_18ec82f6.jpg",
    ],
    stats: [
      { value: "294", label: "Rooms Commissioned" },
      { value: "Full", label: "AV & OS&E Scope" },
      { value: "IHG", label: "Brand Standard" },
    ],
  },
  {
    id: "voco-av",
    name: "Voco Auckland — AV & OS&E",
    client: "Pro-invest Hotels / IHG Hotels & Resorts",
    location: "Corner of Albert & Wyndham Streets, Auckland CBD",
    year: "2022",
    scope: "In-Room AV Installation & OS&E Programme",
    description:
      "Specific NZ delivered the in-room AV installation and OS&E programme for Voco Auckland City Centre alongside the full FF&E scope. The 201-room hotel required smart in-room technology setup, television commissioning, and complete OS&E placement across all guest rooms and suites to IHG's Voco brand standards.",
    hero: "/manus-storage/voco_auckland_room2_c4befad9.jpg",
    images: [
      "/manus-storage/voco_auckland_room2_c4befad9.jpg",
      "/manus-storage/voco_auckland_room3_e055a136.jpg",
      "/manus-storage/voco_auckland_room1_b885e8e0.jpg",
    ],
    stats: [
      { value: "201", label: "Rooms Commissioned" },
      { value: "Smart", label: "In-Room Technology" },
      { value: "Voco", label: "Brand Standard" },
    ],
  },
  {
    id: "tryp-av",
    name: "Tryp Wellington — AV & OS&E",
    client: "Safari Group / Wyndham Hotels & Resorts",
    location: "15 Tory Street, Te Aro, Wellington",
    year: "2023",
    scope: "In-Room AV Installation & OS&E Programme",
    description:
      "Specific NZ delivered the in-room AV installation and OS&E programme for Tryp by Wyndham Wellington. The heritage building environment required careful cable management and installation methodology to protect the listed building fabric while delivering full AV commissioning and OS&E placement across all 71 hotel rooms to Wyndham brand standards.",
    hero: "/manus-storage/tryp_wgtn_room2_5b61e7d9.jpg",
    images: [
      "/manus-storage/tryp_wgtn_room2_5b61e7d9.jpg",
      "/manus-storage/tryp_wgtn_room1_26e49abd.jpg",
      "/manus-storage/tryp_wgtn_lobby_9bf42152.jpg",
    ],
    stats: [
      { value: "71", label: "Rooms Commissioned" },
      { value: "Heritage", label: "Building Constraints" },
      { value: "Wyndham", label: "Brand Standard" },
    ],
  },
];

export default function AVPage() {
  return (
    <ProjectCategoryPage
      categoryNum="05"
      categoryTitle="AV & OS&E"
      categorySubtitle="Audio Visual · Operating Supplies & Equipment"
      intro="Large-scale AV installation and operating supplies and equipment programmes — from a 1,600-unit national aged care rollout to hotel in-room AV commissioning across New Zealand's leading hospitality brands."
      projects={projects}
    />
  );
}
