import { motion } from 'framer-motion';
import { translations } from '../data/translations';

interface ExperienceProps {
  language: 'fr' | 'en';
  darkMode: boolean;
}

export default function Experience({ language }: ExperienceProps) {
  const t = translations[language];

  return (
    <div className="editorial-section mx-auto max-w-7xl px-6 lg:px-12">
      <header className="section-head">
        <p className="section-index">03 <span className="opacity-40">/</span> {t.experience.subtitle}</p>
        <h2 className="section-title mt-6">{t.experience.title}</h2>
      </header>

      <div>
        {t.experience_data.map((exp, index) => (
          <motion.article
            key={exp.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="exp-row grid gap-5 border-t border-border py-10 md:grid-cols-[240px_1fr] md:gap-10 md:py-12"
          >
            <div className="flex items-start justify-between gap-6 text-sm text-muted-foreground md:block">
              <p className="text-xs tabular-nums opacity-60">0{index + 1}</p>
              <p className="md:mt-5">{exp.period}</p>
              <p className="md:mt-2">{exp.location}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">{exp.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{exp.company}</p>
              <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-muted-foreground">
                {exp.achievements.map(achievement => (
                  <li key={achievement} className="flex gap-4">
                    <span aria-hidden="true" className="text-foreground/40">—</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
