import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { translations } from '../data/translations';

type Project = typeof translations.fr.projects_data[number];

interface ProjectsProps {
  language: 'fr' | 'en';
  darkMode: boolean;
  setSelectedProject: (project: Project) => void;
}

export default function Projects({ language, setSelectedProject }: ProjectsProps) {
  const t = translations[language];
  const projects = [...t.projects_data].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="editorial-section mx-auto max-w-7xl px-6 lg:px-12">
      <header className="section-head flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="section-index">02 <span className="opacity-40">/</span> {t.projects.subtitle}</p>
          <h2 className="section-title mt-6">{t.projects.title}</h2>
        </div>
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground md:mb-2">
          {t.projects.timeline} — {String(projects.length).padStart(2, '0')}
        </p>
      </header>

      <div className="grid gap-x-10 gap-y-20 md:grid-cols-2 lg:gap-x-14 lg:gap-y-24">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7 }}
            className={i === 0 ? 'md:col-span-2' : ''}
          >
            <Button
              variant="ghost"
              onClick={() => setSelectedProject(project)}
              aria-label={`${t.projects.view_details} — ${project.title}`}
              className={`project-image group relative flex h-auto w-full overflow-hidden rounded-xl border border-border bg-secondary p-0 ${i === 0 ? 'aspect-[16/8]' : 'aspect-[16/10]'}`}
            >
              <img
                src={project.media}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.035]"
              />
              <span className="absolute right-4 bottom-4 flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 group-hover:-rotate-45">
                <ArrowUpRight size={20} />
              </span>
            </Button>

            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {String(i + 1).padStart(2, '0')} <span className="opacity-40">/</span> {project.category}
                </p>
                <h3 className="text-2xl font-bold sm:text-3xl">
                  <Button
                    variant="link"
                    onClick={() => setSelectedProject(project)}
                    className="h-auto whitespace-normal p-0 text-left font-display text-inherit"
                  >
                    {project.title}
                  </Button>
                </h3>
              </div>
              <p className="shrink-0 pt-1 text-xs text-muted-foreground">{project.date.split('-')[0]}</p>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{project.description}</p>
            <p className="mt-5 border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground">
              {project.tech.join(' · ')}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
