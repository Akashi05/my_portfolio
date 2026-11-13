import { motion } from "framer-motion";
import { translations } from "../data/translations";
import { skills, type Skill } from "../data/skills";
import Reveal from "./Reveal";
import ScrollWords from "./ScrollWords";

interface AboutProps {
  language: "fr" | "en";
  darkMode: boolean;
}

export default function About({ language }: AboutProps) {
  const t = translations[language].about;
  const paragraphs = Object.entries(t)
    .filter(([key]) => key.startsWith("description"))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }));
  const skillGroups: [keyof typeof t.skill_cats, readonly Skill[]][] = [
    ["autonomy", skills.autonomy],
    ["practiced", skills.practiced],
    ["ai", [t.ai_item]],
  ];

  return (
    <div className="editorial-section mx-auto max-w-7xl px-6 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="about-rail">
          <p className="section-index">
            01 <span className="opacity-40">/</span> {t.subtitle}
          </p>
          <h2 className="section-title mt-6">
            <Reveal>{t.title}</Reveal>
          </h2>
          <div id="ribbon-anchor" aria-hidden="true" className="mt-10 h-60 w-full max-w-72" />
        </div>
        <div className="about-copy space-y-7">
          {paragraphs.map(([key, value]) => (
            <ScrollWords key={key} text={String(value)} />
          ))}
        </div>
      </div>

      <div className="mt-20 grid gap-10 border-y border-border py-12 sm:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="mb-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {t.formation}
          </h3>
          {t.education.map((item, index) => (
            <div key={item.degree} className={index > 0 ? "mt-6" : ""}>
              <p className="text-base">{item.degree}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.school} · {item.period}
              </p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="mb-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {t.languages}
          </h3>
          <p className="text-base">
            {t.lang_fr}
            <span className="text-muted-foreground"> · {t.lang_native}</span>
          </p>
          <p className="mt-3 text-base">
            {t.lang_en}
            <span className="text-muted-foreground"> · {t.lang_intermediate}</span>
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="section-title text-[clamp(1.75rem,3.2vw,2.75rem)]">
          <Reveal>{t.skills_title}</Reveal>
        </h3>
        <div className="hover-list mt-10">
          {skillGroups.map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="hover-row grid gap-3 border-t border-border py-7 md:grid-cols-[240px_1fr] md:gap-8"
            >
              <p className="hover-dim text-xs uppercase tracking-[0.14em] text-muted-foreground">
                <span className="hover-glow mr-4 opacity-50">0{index + 1}</span>
                {t.skill_cats[category]}
              </p>
              <div className="hover-dim hover-strong flex flex-wrap gap-x-7 gap-y-3 text-base font-medium">
                {items.map((skill, i) => (
                  <motion.span
                    key={typeof skill === "string" ? skill : skill.en}
                    initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.05 }}
                    whileHover={{ y: -3 }}
                  >
                    {typeof skill === "string" ? skill : skill[language]}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
          {t.skills_note}
        </p>
      </div>
    </div>
  );
}
