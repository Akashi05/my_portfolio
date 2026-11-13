import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

// If a custom domain is bought later, change SITE_URL here and in public/robots.txt and
// public/sitemap.xml.
const SITE_URL = "https://berenger-sessou.vercel.app";
const title = "Bérenger SESSOU | Développeur backend et systèmes, DevOps à Cotonou, Bénin";
const description =
  "Portfolio de Bérenger SESSOU, développeur backend et systèmes à Cotonou (Bénin). DevOps, prototypage de produit, création de sites et d'applications web. Disponible en freelance, temps partiel et collaborations.";
const image = `${SITE_URL}/og-image.jpg`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Bérenger SESSOU",
      alternateName: ["Bérenger Sessou", "Berenger Sessou"],
      url: SITE_URL,
      image: `${SITE_URL}/profil.jpeg`,
      jobTitle: "Développeur backend et systèmes",
      description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cotonou",
        addressCountry: "BJ",
      },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Epitech Bénin" },
      knowsAbout: [
        "Développement backend",
        "DevOps",
        "Programmation système",
        "Création de sites web",
        "Applications web",
        "Python",
        "TypeScript",
        "Django",
        "C",
        "C++",
      ],
      sameAs: [
        "https://github.com/Akashi05",
        "https://www.linkedin.com/in/b%C3%A9renger-sessou-b36ab1314/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Bérenger SESSOU | Portfolio",
      inLanguage: ["fr", "en"],
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      url: SITE_URL,
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Bérenger SESSOU" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Bérenger SESSOU, développeur backend et systèmes" },
      { property: "profile:first_name", content: "Bérenger" },
      { property: "profile:last_name", content: "SESSOU" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Portfolio,
});
