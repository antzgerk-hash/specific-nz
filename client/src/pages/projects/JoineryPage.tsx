/*
 * Joinery & Fitout — Category Project Gallery
 * Millennium Auckland + QT Queenstown
 */
import ProjectCategoryPage, { ProjectItem } from "@/components/ProjectCategoryPage";

const projects: ProjectItem[] = [
  {
    id: "millennium-auckland",
    name: "Millennium Auckland",
    client: "Millennium Hotels & Resorts / CDL Hospitality Trusts",
    location: "71 Mayoral Drive, Auckland CBD",
    year: "2024",
    scope: "Bespoke Joinery Installation & Fitout",
    description:
      "Specific NZ delivered bespoke joinery installation and high-specification fitout services for Millennium Auckland — one of Auckland's most recognised hotel properties. The project required precision installation of custom cabinetry, millwork, and built-in furniture elements to the exacting standards of a 5-star hospitality environment. Specific NZ's joinery team worked alongside the principal contractor to deliver zero-defect handover across all installed elements.",
    hero: "/manus-storage/grand_millennium_room1_68ec7725.jpg",
    images: [
      "/manus-storage/grand_millennium_room1_68ec7725.jpg",
      "/manus-storage/grand_millennium_room2_49cc013f.jpg",
      "/manus-storage/grand_millennium_exterior_b262ed44.png",
    ],
    stats: [
      { value: "5-Star", label: "Hotel Standard" },
      { value: "Zero", label: "Defects at Handover" },
      { value: "CBD", label: "Auckland Location" },
    ],
  },
  {
    id: "qt-queenstown",
    name: "QT Queenstown",
    client: "Event Hospitality & Entertainment",
    location: "Queenstown, New Zealand",
    year: "2024",
    scope: "Joinery Installation & Rebrand Fitout",
    description:
      "Specific NZ managed the joinery installation and fitout scope for QT Queenstown — the rebrand of the former Rydges Queenstown property to the QT Hotels brand. The project required the removal, storage, and reinstallation of FF&E alongside new bespoke joinery elements to meet QT's distinctive design language. Specific NZ coordinated the full sequence from strip-out through to final joinery installation, working to a tight rebrand timeline. The completed rooms feature custom cabinetry with marble benchtops, brushed metal handles, and integrated bar fridges with crystal glassware — all installed to millimetre tolerances.",
    hero: "/manus-storage/qt_queenstown_room_e3c88223.png",
    images: [
      "/manus-storage/qt_queenstown_room_e3c88223.png",
      "/manus-storage/tekaha_joinery_suite_03922705.webp",
    ],
    stats: [
      { value: "QT", label: "Brand Standard" },
      { value: "Rebrand", label: "Fitout Scope" },
      { value: "Queenstown", label: "Location" },
    ],
  },
];

export default function JoineryPage() {
  return (
    <ProjectCategoryPage
      categoryNum="02"
      categoryTitle="Joinery & Fitout"
      categorySubtitle="Precision Installation · Millimetre Tolerances"
      intro="Bespoke joinery installation and high-specification fitout for New Zealand's premier hotel properties. Specific NZ's joinery teams deliver to millimetre tolerances, with zero-defect handover as the standard — not the aspiration."
      projects={projects}
    />
  );
}
