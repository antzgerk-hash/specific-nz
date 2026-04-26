/*
 * Special Projects — Category Project Gallery
 * Te Kaha, West Footscray Hospital, Walkinshaw, Skyline Gondola
 */
import ProjectCategoryPage, { ProjectItem } from "@/components/ProjectCategoryPage";

const projects: ProjectItem[] = [
  {
    id: "tekaha",
    name: "One NZ Stadium — Te Kaha",
    client: "Statement iD / BESIX Watpac",
    location: "Christchurch, New Zealand",
    year: "2025–2026",
    scope: "FF&E Delivery & Installation — $683M Stadium",
    description:
      "Specific NZ was engaged by Statement iD and BESIX Watpac to deliver and install the full FF&E scope across the $683 million One NZ Stadium (Te Kaha) in Christchurch — New Zealand's most significant new public venue in a generation. The project required the coordination of over 2,740 individual items across corporate suites, operational areas, and public spaces, delivered across 55+ truckloads over more than 20 site days. Items included workstations, electricals, refrigeration units, televisions, and specialist joinery. Specific NZ managed the full logistics chain from receipt and QC through to floor-by-floor installation, working to a hard opening deadline for the Super Rugby Pacific Super Round.",
    hero: "/manus-storage/Screenshot2026-04-01020026_5a3c5297.png",
    images: [
      "/manus-storage/Screenshot2026-04-01020026_5a3c5297.png",
      "/manus-storage/Screenshot2026-04-01015901_ccc7dbd2.png",
      "/manus-storage/Screenshot2026-04-01020119_15a48cbb.png",
      "/manus-storage/stadium_seats_completed_4cbc7ed4.png",
      "/manus-storage/tekaha_bikeracks_ab337b6d.webp",
      "/manus-storage/tekaha_whiteboard_6a6f9301.webp",
    ],
    stats: [
      { value: "2,740", label: "Items Delivered & Installed" },
      { value: "55+", label: "Truckloads Coordinated" },
      { value: "20+", label: "Site Days On Programme" },
      { value: "60+", label: "Suppliers Managed" },
    ],
  },
  {
    id: "footscray-hospital",
    name: "West Footscray Hospital",
    client: "Specific Relocations / Health Infrastructure Victoria",
    location: "West Footscray, Victoria, Australia",
    year: "2026",
    scope: "Commercial Relocation & Equipment Handling — Live Clinical Environment",
    description:
      "Specific managed the full relocation scope for the West Footscray Hospital — a major healthcare facility transition requiring precision logistics, branded crate systems, and coordinated truck movements through the hospital's loading dock. The team operated in a live clinical environment, managing equipment handling, floor-by-floor movement, and staged delivery to minimise disruption to hospital operations. Multiple Specific branded trucks and the proprietary Specific Relocations crate system were deployed across the project.",
    hero: "/manus-storage/footscrayhospitalwithspecificlogo_62498176.png",
    images: [
      "/manus-storage/footscrayhospitalwithspecificlogo_62498176.png",
      "/manus-storage/WhatsAppImage2026-02-19at11.58.21AM_72eb2835.jpeg",
      "/manus-storage/WhatsAppImage2026-02-19at11.58.16AM_aa1b941c.jpeg",
      "/manus-storage/WhatsAppImage2026-02-19at11.58.20AM_373e4271.jpeg",
    ],
    stats: [
      { value: "Large", label: "Scale Hospital Relocation" },
      { value: "Feb 2026", label: "Relocation Date" },
      { value: "Zero", label: "Disruption to Operations" },
    ],
  },
  {
    id: "walkinshaw",
    name: "Walkinshaw Relocation",
    client: "Walkinshaw Automotive Group",
    location: "Victoria, Australia",
    year: "2025",
    scope: "Major Commercial Relocation — Full Team Deployment",
    description:
      "Specific managed the full commercial relocation for Walkinshaw Automotive Group — one of Australia's most recognised automotive brands. The project required the coordinated movement of an entire operational facility, including specialist equipment, office infrastructure, and high-value assets. The Specific Victoria team was deployed in full, operating with branded crates, cage trolleys, and fleet vehicles to deliver the relocation on programme and without operational disruption.",
    hero: "/manus-storage/VicTeamLoadingequimentatWalkinshawrelocation2025_13007dd4.png",
    images: [
      "/manus-storage/VicTeamLoadingequimentatWalkinshawrelocation2025_13007dd4.png",
      "/manus-storage/Screenshot2026-04-08014112_2df50744.png",
      "/manus-storage/Screenshot2026-04-08014047_7b0f1897.png",
    ],
    stats: [
      { value: "Full", label: "Team Deployment" },
      { value: "2025", label: "Completion Year" },
      { value: "Zero", label: "Operational Disruption" },
    ],
  },
  {
    id: "skyline",
    name: "Skyline Gondola Queenstown",
    client: "Skyline Enterprises",
    location: "Queenstown, New Zealand",
    year: "2025–2026",
    scope: "FF&E Delivery & Installation — High-Altitude Crane Access",
    description:
      "The Skyline Gondola redevelopment in Queenstown presented one of the most logistically complex FF&E challenges in New Zealand — a high-altitude site accessible only via gondola or crane, with no conventional truck access to the installation floors. Specific NZ coordinated the full FF&E delivery and installation scope including dining chairs, tables, booth seating, bar joinery, and all loose items across the new restaurant and hospitality spaces. Items were delivered by container to the base site and crane-lifted to the installation level, with Specific NZ teams managing the full sequence from ground to completion.",
    hero: "/manus-storage/20260314_150857_2793dba8.webp",
    images: [
      "/manus-storage/20260314_150857_2793dba8.webp",
      "/manus-storage/skyline_booths_3d68b935.webp",
      "/manus-storage/skyline_joinery_c9e3e4f1.webp",
      "/manus-storage/skyline_terrace_crane_e82076ee.webp",
      "/manus-storage/skyline_container_delivery_e9fb98e7.webp",
      "/manus-storage/skyline_crane_site_da39dfa3.webp",
    ],
    stats: [
      { value: "High", label: "Altitude Specialist" },
      { value: "Crane", label: "Assisted Access" },
      { value: "Full", label: "Restaurant & Bar FF&E" },
    ],
  },
];

export default function SpecialPage() {
  return (
    <ProjectCategoryPage
      categoryNum="04"
      categoryTitle="Special Projects"
      categorySubtitle="Complex · High-Profile · Landmark"
      intro="New Zealand and Australia's most complex and high-profile installation projects — requiring specialist logistics, landmark-scale coordination, and teams that perform under pressure. From a $683M stadium to a high-altitude gondola restaurant."
      projects={projects}
    />
  );
}
