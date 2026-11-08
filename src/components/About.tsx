import { motion } from 'framer-motion';
import { translations } from '../data/translations';
import { skills } from '../data/skills';
interface AboutProps { language: 'fr' | 'en'; darkMode: boolean; }
export default function About({ language }: AboutProps) {
  const t = translations[language].about;
  return <div className="editorial-section relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
    <div className="about-intro grid gap-12 lg:grid-cols-2">
      <div><p className="section-index">01 / {t.subtitle}</p><h2 className="section-title mt-5 font-bold">{t.title}</h2></div>
      <div className="space-y-6">
        {Object.entries(t).filter(([key]) => key.startsWith('description')).sort().map(([key, value]) => <motion.p key={key} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="text-base leading-relaxed text-muted-foreground sm:text-lg">{String(value)}</motion.p>)}
      </div>
    </div>
    <div className="mt-20 grid gap-10 border-y border-border py-10 sm:grid-cols-2 lg:grid-cols-3">
      <div><p className="font-display text-7xl font-bold">{t.stats.total}<span className="text-muted-foreground">+</span></p><p className="mt-3 text-sm text-muted-foreground">{t.stats.total_label}</p><p className="mt-2 text-xs text-muted-foreground">{t.stats.details}</p></div>
      <div><h3 className="mb-5 text-xl font-bold">{t.formation}</h3><p className="text-sm">Bachelor d'expertise informatique</p><p className="mt-1 text-sm text-muted-foreground">EPITECH Benin 6th semester (in progress) · Feb 2024</p><p className="mt-5 text-sm">BAC D</p><p className="mt-1 text-sm text-muted-foreground">Cardinal Bernandin Gantin (CBG) · Jun 2023</p></div>
      <div><h3 className="mb-5 text-xl font-bold">{t.languages}</h3><p className="text-sm text-muted-foreground">{t.lang_fr} — {t.lang_native}</p><p className="mt-3 text-sm text-muted-foreground">{t.lang_en} — {t.lang_intermediate}</p></div>
    </div>
    <div className="mt-16"><h3 className="mb-8 text-2xl font-bold">{t.skills_title}</h3>
      {Object.entries(skills).map(([category, items], index) => <motion.div key={category} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-4 border-t border-border py-6 md:grid-cols-[240px_1fr]">
        <p className="text-sm text-muted-foreground"><span className="mr-5 opacity-50">0{index + 1}</span>{t.skill_cats[category as keyof typeof t.skill_cats]}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-3">{items.map(skill => <span key={skill.name} className="text-base font-medium">{skill.name}</span>)}</div>
      </motion.div>)}
    </div>
  </div>;
}
