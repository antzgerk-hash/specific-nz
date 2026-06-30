/**
 * SEOHead — Per-page SEO meta tag manager
 * Injects title, meta description, keywords, Open Graph, Twitter Card,
 * canonical URL, and JSON-LD structured data into the document head.
 *
 * Usage: <SEOHead page="home" /> or <SEOHead {...customProps} />
 */

import { useEffect } from "react";

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

const BASE_URL = "https://specificnz.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

export function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set or create a meta tag
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrValue] = selector
          .replace("meta[", "")
          .replace("]", "")
          .split("=");
        el.setAttribute(attrName, attrValue.replace(/"/g, ""));
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // Standard meta
    setMeta('meta[name="description"]', "content", description);
    if (keywords) setMeta('meta[name="keywords"]', "content", keywords);

    // Canonical
    const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonicalUrl);

    // Open Graph
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", ogImage);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:site_name"]', "content", "Specific NZ");

    // Twitter Card
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", ogImage);

    // JSON-LD structured data
    const existingScripts = document.querySelectorAll('script[data-seo="jsonld"]');
    existingScripts.forEach((s) => s.remove());

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schema) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo", "jsonld");
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }
  }, [title, description, keywords, canonical, ogImage, jsonLd]);

  return null;
}

// ─── Pre-built page SEO configs ──────────────────────────────────────────────

export const SEO_CONFIGS = {
  home: {
    title: "FF&E Installation New Zealand | Specific NZ",
    description:
      "New Zealand's specialist FF&E installation team. Hotels, stadiums and commercial projects delivered on programme. Auckland · Christchurch · Queenstown.",
    keywords:
      "FF&E installation New Zealand, furniture fixtures equipment NZ, hotel FF&E installer NZ, commercial installation Auckland, Specific NZ",
    canonical: "/",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Specific NZ",
        alternateName: "Specific Group New Zealand",
        url: "https://specificnz.com",
        logo: "https://specificnz.com/logo.png",
        description:
          "New Zealand's premier FF&E installation, logistics, and commercial relocation specialists. Trusted by Tier One construction companies, hotel developers, and fit-out managers.",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+64-9-000-0000",
          contactType: "customer service",
          areaServed: "NZ",
          availableLanguage: "English",
        },
        areaServed: ["New Zealand", "Australia"],
        sameAs: [
          "https://www.linkedin.com/company/specific-group-pty-ltd/",
          "https://www.instagram.com/specificgroupltd/",
          "https://www.facebook.com/specificgroupltd",
          "https://specificgroup.com.au",
          "https://specificgroup.co.nz",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Specific NZ",
        description:
          "FF&E installation, commercial relocations, warehousing, and logistics management across New Zealand.",
        url: "https://specificnz.com",
        telephone: "+64-9-000-0000",
        email: "info@specificnz.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Auckland",
          addressRegion: "Auckland",
          addressCountry: "NZ",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -36.8485,
          longitude: 174.7633,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "18:00",
        },
        priceRange: "$$$$",
        areaServed: ["Auckland", "Christchurch", "Queenstown", "New Zealand"],
      },
    ],
  },

  services: {
    title: "FF&E & Commercial Installation Services | Specific NZ",
    description:
      "Specialist FF&E delivery, joinery, AV, relocations and warehousing services across New Zealand. Tier One project capability for hotels, stadiums and commercial fit-outs.",
    keywords:
      "FF&E services NZ, commercial installation services New Zealand, joinery installation NZ, AV installation NZ, commercial relocation NZ",
    canonical: "/services",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "FF&E Installation & Commercial Logistics",
      provider: {
        "@type": "Organization",
        name: "Specific NZ",
        url: "https://specificnz.com",
      },
      areaServed: "New Zealand",
      description:
        "Specific NZ provides end-to-end FF&E installation, joinery, AV systems, commercial relocations, and warehousing services for hotels, stadiums, and commercial developments across New Zealand.",
      serviceType: [
        "FF&E Installation",
        "Joinery Installation",
        "AV Installation",
        "Commercial Relocation",
        "Warehousing & Storage",
        "OS&E Installation",
      ],
    },
  },

  projects: {
    title: "FF&E Project Portfolio New Zealand | Specific NZ",
    description:
      "Landmark FF&E and installation projects across New Zealand — One NZ Stadium, Hotel Indigo Auckland, Skyline Gondola Queenstown and more.",
    keywords:
      "FF&E projects New Zealand, hotel installation NZ, One NZ Stadium FF&E, Hotel Indigo Auckland installation, Specific NZ projects",
    canonical: "/projects",
  },

  about: {
    title: "About Specific NZ — FF&E Installation Specialists",
    description:
      "Specific NZ is New Zealand's leading FF&E installation and logistics group. Tier One teams delivering complex hotel, stadium and commercial projects on programme.",
    keywords:
      "about Specific NZ, FF&E installation company New Zealand, Specific Group NZ, commercial installation specialists Auckland",
    canonical: "/about",
  },

  contact: {
    title: "Contact Specific NZ — FF&E & Installation Enquiries",
    description:
      "Get in touch with Specific NZ for FF&E installation, commercial relocations, warehousing or logistics enquiries. Auckland · Christchurch · Queenstown.",
    keywords:
      "contact Specific NZ, FF&E installation enquiry NZ, commercial installation Auckland contact",
    canonical: "/contact",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Specific NZ",
      url: "https://specificnz.com/contact",
      description:
        "Contact Specific NZ for FF&E installation, commercial relocation, warehousing and logistics enquiries across New Zealand.",
    },
  },

  group: {
    title: "The Specific Group — NZ & Australia | Specific NZ",
    description:
      "Specific Group operates across New Zealand and Australia, delivering FF&E installation, relocations and logistics for Tier One construction and hospitality projects.",
    keywords:
      "Specific Group, Specific NZ, Specific Australia, FF&E installation group, commercial installation company NZ AU",
    canonical: "/group",
  },

  relocations: {
    title: "Commercial Relocation New Zealand | Specific NZ",
    description:
      "Specialist commercial and corporate relocation services across New Zealand. Office, hospital, and high-value asset relocations managed by Specific NZ.",
    keywords:
      "commercial relocation New Zealand, office relocation Auckland, corporate relocation NZ, hospital relocation NZ, Specific NZ relocations",
    canonical: "/relocations",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Commercial Relocation New Zealand",
      provider: { "@type": "Organization", name: "Specific NZ", url: "https://specificnz.com" },
      areaServed: "New Zealand",
      description:
        "Specific NZ manages complex commercial, corporate, and healthcare relocations across New Zealand — from single-floor office moves to full hospital infrastructure relocations.",
      serviceType: "Commercial Relocation",
    },
  },

  projectsFfe: {
    title: "FF&E Installation Projects New Zealand | Specific NZ",
    description:
      "Hotel Indigo Auckland, Grand Millennium, Queenstown Hotel and more — Specific NZ's FF&E installation project portfolio across New Zealand.",
    keywords:
      "FF&E installation projects NZ, hotel FF&E Auckland, Hotel Indigo Auckland FF&E, Grand Millennium FF&E, Specific NZ FF&E",
    canonical: "/projects/ffe",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "FF&E Installation Projects — Specific NZ",
      url: "https://specificnz.com/projects/ffe",
      description:
        "Specific NZ's portfolio of FF&E installation projects across New Zealand, including Hotel Indigo Auckland, Grand Millennium Auckland, and luxury Queenstown hotel developments.",
    },
  },

  projectsJoinery: {
    title: "Joinery Installation Projects New Zealand | Specific NZ",
    description:
      "Bespoke joinery installation for hotels, commercial fit-outs and residential developments across New Zealand. Delivered by Specific NZ.",
    keywords:
      "joinery installation NZ, bespoke joinery fitout New Zealand, commercial joinery install, Specific NZ joinery",
    canonical: "/projects/joinery",
  },

  projectsSpecial: {
    title: "Special Projects — Stadium & Large Venue FF&E | Specific NZ",
    description:
      "One NZ Stadium Te Kaha, Skyline Gondola Queenstown — Specific NZ's landmark special projects portfolio for large-scale and complex FF&E installations.",
    keywords:
      "stadium FF&E installation, One NZ Stadium FF&E, Te Kaha FF&E, Skyline Gondola Queenstown, large venue fitout NZ",
    canonical: "/projects/special",
  },

  projectsAv: {
    title: "AV Installation & OS&E Projects New Zealand | Specific NZ",
    description:
      "Commercial AV installation and OS&E delivery across New Zealand. Invocare national rollout — 1,600 TVs installed. Managed by Specific NZ.",
    keywords:
      "AV installation commercial NZ, OS&E installation hotel NZ, audio visual fitout New Zealand, Specific NZ AV",
    canonical: "/projects/av",
  },

  projectsWarehousing: {
    title: "Warehousing & Storage Projects New Zealand | Specific NZ",
    description:
      "Specialist FF&E warehousing, staging and storage across New Zealand. High-value item management for hotel and commercial projects by Specific NZ.",
    keywords:
      "specialist warehousing NZ, FF&E storage Auckland, high-value item storage New Zealand, Specific NZ warehousing",
    canonical: "/projects/warehousing",
  },

  projectsRelocations: {
    title: "Relocation Projects New Zealand | Specific NZ",
    description:
      "Corporate, office and healthcare relocation projects across New Zealand. Walkinshaw and more — delivered on programme by Specific NZ.",
    keywords:
      "relocation projects NZ, corporate relocation Auckland, office relocation NZ, Specific NZ relocation projects",
    canonical: "/projects/relocations",
  },
};
