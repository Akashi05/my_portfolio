// Skills are grouped by how autonomously they are used, not by technology type.
// Group labels live in translations.ts (about.skill_cats).
export const skills = {
  autonomy: [
    "C",
    "C++",
    "Python",
    "JavaScript/TypeScript",
    "API REST",
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
} as const;
