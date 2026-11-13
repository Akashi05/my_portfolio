import { motion } from "framer-motion";
import { translations } from "../data/translations";
import Reveal from "./Reveal";

interface ExperienceProps {
  language: "fr" | "en";
  darkMode: boolean;
}

export default function Experience({ language }: ExperienceProps) {
  const t = translations[language];

  return (
    <div className="editorial-section mx-auto max-w-7xl px-6 lg:px-12">
      <header className="section-head">
        <p className="section-index">
          03 <span className="opacity-40">/</span> {t.experience.subtitle}
        </p>
        <h2 className="section-title mt-6">
          <Reveal>{t.experience.title}</Reveal>
        </h2>
      </header>

      <div>
        {t.experience_data.map((exp, index) => (
          <motion.article
            key={exp.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="exp-row relative grid gap-5 py-10 md:grid-cols-[240px_1fr] md:gap-10 md:py-12"
          >
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ amount: 0.15 }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-0 h-px origin-left bg-border"
            />
            <div className="flex items-start justify-between gap-6 text-sm text-muted-foreground md:block">
              <p className="text-xs tabular-nums opacity-60">0{index + 1}</p>
              <p className="md:mt-5">{exp.period}</p>
              <p className="md:mt-2">{exp.location}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">{exp.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{exp.company}</p>
              <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-muted-foreground">
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={achievement}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.4 }}
                    transition={{ duration: 0.7, delay: 0.25 + i * 0.15 }}
                    className="flex gap-4"
                  >
                    <span aria-hidden="true" className="text-foreground/40">
                      —
                    </span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
