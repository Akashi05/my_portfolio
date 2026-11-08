import { motion } from 'framer-motion';
import { translations } from '../data/translations';
import { skills } from '../data/skills';

interface AboutProps {
  language: 'fr' | 'en';
  darkMode: boolean;
}

export default function About({ language }: AboutProps) {
  const t = translations[language].about;
  const paragraphs = Object.entries(t)
    .filter(([key]) => key.startsWith('description'))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }));

  return (
    <div className="editorial-section mx-auto max-w-7xl px-6 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="about-rail">
          <p className="section-index">01 <span className="opacity-40">/</span> {t.subtitle}</p>
          <h2 className="section-title mt-6">{t.title}</h2>
        </div>
        <div className="about-copy space-y-7">
          {paragraphs.map(([key, value], index) => (
            <motion.p
              key={key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.04 }}
            >
              {String(value)}
            </motion.p>
          ))}
        </div>
      </div>

      <div className="mt-20 grid gap-10 border-y border-border py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
        <div>
          <p className="font-display text-[clamp(3.5rem,7vw,6rem)] font-bold leading-[0.9]">
            {t.stats.total}<span className="text-muted-foreground">+</span>
          </p>
          <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">{t.stats.total_label}</p>
          <p className="mt-2 text-xs text-muted-foreground">{t.stats.details}</p>
        </div>
        <div>
          <h3 className="mb-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">{t.formation}</h3>
          <p className="text-base">Bachelor d'expertise informatique</p>
          <p className="mt-1 text-sm text-muted-foreground">EPITECH Benin 6th semester (in progress) · Feb 2024</p>
          <p className="mt-6 text-base">BAC D</p>
          <p className="mt-1 text-sm text-muted-foreground">Cardinal Bernandin Gantin (CBG) · Jun 2023</p>
        </div>
        <div>
          <h3 className="mb-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">{t.languages}</h3>
          <p className="text-base">{t.lang_fr}<span className="text-muted-foreground"> — {t.lang_native}</span></p>
          <p className="mt-3 text-base">{t.lang_en}<span className="text-muted-foreground"> — {t.lang_intermediate}</span></p>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="section-title text-[clamp(1.75rem,3.2vw,2.75rem)]">{t.skills_title}</h3>
        <div className="mt-10">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid gap-3 border-t border-border py-7 md:grid-cols-[240px_1fr] md:gap-8"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                <span className="mr-4 opacity-50">0{index + 1}</span>
                {t.skill_cats[category as keyof typeof t.skill_cats]}
              </p>
              <div className="flex flex-wrap gap-x-7 gap-y-3">
                {items.map(skill => (
                  <span key={skill.name} className="text-base font-medium">{skill.name}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
