import { motion } from 'framer-motion';
import { translations } from '../data/translations';
interface ExperienceProps { language: 'fr' | 'en'; darkMode: boolean; }
export default function Experience({ language }: ExperienceProps) {
  const t = translations[language];
  return <div className="editorial-section mx-auto max-w-7xl px-6 lg:px-12">
    <div className="mb-14"><p className="section-index">03 / {t.experience.subtitle}</p><h2 className="section-title mt-5 font-bold">{t.experience.title}</h2></div>
    {t.experience_data.map((exp, index) => <motion.article key={exp.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7 }} className="grid gap-6 border-t border-border py-10 md:grid-cols-[240px_1fr]">
      <div className="text-sm text-muted-foreground"><p className="mb-5 text-xs">0{index + 1}</p><p>{exp.period}</p><p className="mt-2">{exp.location}</p></div>
      <div><h3 className="text-2xl font-bold">{exp.title}</h3><p className="mt-2 text-base">{exp.company}</p><ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">{exp.achievements.map(achievement => <li key={achievement} className="flex gap-3"><span aria-hidden="true">—</span><span>{achievement}</span></li>)}</ul></div>
    </motion.article>)}
  </div>;
}
