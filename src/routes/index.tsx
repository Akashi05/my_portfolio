import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

const title = "Bérenger Sessou | Développeur backend et systèmes, DevOps";
const description =
  "Portfolio de Bérenger Sessou, développeur backend et systèmes à Cotonou, DevOps et prototypage de produit. Disponible pour missions freelance, temps partiel et collaborations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
