/*
 * Office Relocations — Category Project Gallery
 * Redirects to the dedicated /relocations service page
 * which already has full masonry gallery + content
 */
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function RelocationsProjectPage() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    setLocation("/relocations");
  }, [setLocation]);

  return (
    <div
      style={{
        background: "oklch(0.08 0.01 240)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Barlow Condensed', sans-serif",
        color: "oklch(0.63 0.18 38)",
        fontSize: "1rem",
        letterSpacing: "0.15em",
      }}
    >
      LOADING RELOCATIONS...
    </div>
  );
}
