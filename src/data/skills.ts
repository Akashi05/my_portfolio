// Skills are grouped by how autonomously they are used, not by technology type.
// Group labels live in translations.ts (about.skill_cats).
export type Skill = string | { fr: string; en: string };

export const skills: Record<"autonomy" | "practiced", readonly Skill[]> = {
  autonomy: [
    "C",
    "C++",
    "Python",
    "JavaScript/TypeScript",
    "API REST",
    { fr: "Sites et applications web", en: "Websites & web apps" },
    "Django/DRF",
    "Linux (Fedora)",
    "Git/GitHub",
  ],
  practiced: [
    "PostgreSQL",
    "Docker",
    "React",
    "Kubernetes",
    "Jenkins",
    "Ansible",
    "Haskell",
    "Rust",
    "x86-64 assembly",
    "SQLite",
    "HTML/CSS",
    "Tailwind",
  ],
};
