import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

const title = "Bérenger Sessou | Portfolio";
const description =
  "Portfolio de Bérenger Sessou, étudiant en Ingénierie Logicielle à EPITECH. Développeur Fullstack, DevOps et Passionné par les systèmes bas-niveau.";

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
