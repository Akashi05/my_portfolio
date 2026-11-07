import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, MapPin, Download } from 'lucide-react';
import { translations } from '../data/translations';
import { Button } from '@/components/ui/button';

const HeroScene = lazy(() => import('./HeroScene'));

interface HeroProps {
  language: 'fr' | 'en';
  setCurrentPage: (page: 'home' | 'about' | 'projects' | 'experience' | 'contact') => void;
  darkMode: boolean;
}

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden pb-2">
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero({ language, setCurrentPage, darkMode }: HeroProps) {
  const t = translations[language].hero;
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const muted = 'text-muted-foreground';
  const line = 'border-border';

  return (
    <section className="relative min-h-[calc(100svh-3rem)] overflow-hidden pt-28">
      {/* 3D scene */}
      <motion.div
        className="absolute inset-0 lg:left-[25%] [mask-image:linear-gradient(to_right,transparent,black_25%)]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.3, ease }}
      >
        {mounted && (
          <Suspense fallback={null}>
            <HeroScene darkMode={darkMode} />
          </Suspense>
        )}
      </motion.div>

      {/* Grain/vignette */}
      <div className="hero-vignette pointer-events-none absolute inset-0" />

      <div className="pointer-events-none relative z-10 mx-auto flex min-h-[calc(100svh-10rem)] max-w-7xl flex-col justify-between px-6 pb-10 lg:px-12">
        <div className="pt-6 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className={`mb-8 inline-flex items-center gap-2 rounded-full border ${line} px-4 py-1.5 font-mono text-xs uppercase tracking-widest ${muted} backdrop-blur-md`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
            </span>
            {t.role}
          </motion.div>

          <h1 className="hero-name font-display font-black leading-[0.95]">
            <Reveal delay={0.1}>B<span className="font-sans">é</span>renger</Reveal>
            <Reveal delay={0.25}>
              <span className="text-foreground">Sessou.</span>
            </Reveal>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease }}
            className={`mt-8 max-w-xl text-lg leading-relaxed ${muted}`}
          >
            {t.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease }}
            className="pointer-events-auto mt-10 flex flex-wrap gap-4"
          >
            <Button
              onClick={() => setCurrentPage('projects')}
              className="group flex items-center gap-2 h-auto rounded-lg bg-primary px-7 py-4 font-bold text-primary-foreground transition-all hover:scale-105  "
            >
              {t.cta_projects}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline"
              onClick={() => setCurrentPage('contact')}
              className={`h-auto rounded-lg border ${line} px-7 py-4 font-bold backdrop-blur-md transition-all hover:scale-105 hover:border-border/60`}
            >
              {t.cta_contact}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className={`pointer-events-auto mt-16 flex flex-wrap items-center justify-between gap-6 border-t ${line} pt-6 font-mono text-xs uppercase tracking-widest ${muted}`}
        >
          <div className="flex items-center gap-2"><MapPin size={14} /> Cotonou, Benin · EPITECH 2023–2026</div>
          <div className="flex items-center gap-5">
            <a href="/CV_Bérenger_Sessou_FR.pdf" download="CV_Berenger_Sessou_FR.pdf" className="flex items-center gap-1.5 hover:text-muted-foreground"><Download size={14} /> {t.cv_fr}</a>
            <a href="/CV_Berenger_Sessou_EN.pdf" download="CV_Berenger_Sessou_EN.pdf" className="flex items-center gap-1.5 hover:text-muted-foreground"><Download size={14} /> {t.cv_en}</a>
            <a href="https://github.com/Akashi05" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/b%C3%A9renger-sessou-b36ab1314/" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground"><Linkedin size={18} /></a>
            <a href="mailto:sessouberenger@gmail.com" className="hover:text-muted-foreground"><Mail size={18} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
