import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { translations } from "../data/translations";
import { Button } from "@/components/ui/button";
interface HeroProps {
  language: "fr" | "en";
  setCurrentPage: (page: "home" | "about" | "projects" | "experience" | "contact") => void;
  darkMode: boolean;
}
const ease = [0.22, 1, 0.36, 1] as const;

function RotatingDomains({ domains, fixed }: { domains: string[]; fixed: string }) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % domains.length), 2600);
    return () => window.clearInterval(id);
  }, [reduced, domains.length]);

  if (reduced) {
    return <p className="text-sm font-medium text-muted-foreground">{fixed}</p>;
  }

  return (
    <p className="text-sm font-medium text-muted-foreground">
      <span className="sr-only">{fixed}</span>
      <span aria-hidden="true" className="relative block h-6 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={domains[index]}
            className="block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.45, ease }}
          >
            {domains[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </p>
  );
}
export default function Hero({ language, setCurrentPage }: HeroProps) {
  const t = translations[language].hero;
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -72]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.72, 1], [1, 1, 0.15]);
  return (
    <div ref={ref} className="hero-editorial relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
      <motion.div
        className="hero-content"
        style={reduced ? {} : { y: contentY, opacity: contentOpacity }}
      >
        <h1 className="hero-name font-display font-black leading-[1.02]">
          {["Bérenger", "Sessou."].map((name, i) => (
            <span className="block overflow-hidden pb-2" key={name}>
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: i * 0.15, ease }}
              >
                {name}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="hero-caption"
        >
          <RotatingDomains domains={t.domains} fixed={t.domains_static} />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button
              onClick={() => setCurrentPage("projects")}
              variant="outline"
              className="group h-12 rounded-full border-foreground/40 bg-background/60 px-6 backdrop-blur-sm"
            >
              {t.cta_projects}
              <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
            <Button variant="ghost" onClick={() => setCurrentPage("contact")} className="h-12 px-3">
              {t.cta_contact}
              <ArrowUpRight />
            </Button>
          </div>
        </motion.div>
      </motion.div>
      <div className="hero-bottom flex flex-wrap items-center justify-between gap-4 border-t border-border py-5 text-xs text-muted-foreground">
        <Button
          variant="ghost"
          onClick={() => setCurrentPage("about")}
          className="h-auto gap-3 p-0 text-xs text-muted-foreground"
        >
          <ArrowDown size={16} />
          {language === "fr" ? "Découvrir mon univers" : "Explore my world"}
        </Button>
        <span className="hidden sm:block">{t.location}</span>
        <div className="flex items-center gap-4">
          <a
            href="/CV_Bérenger_Sessou_FR.pdf"
            download="CV_Berenger_Sessou_FR.pdf"
            className="flex items-center gap-1"
            title={t.cv_fr}
          >
            <Download size={14} />
            CV FR
          </a>
          <a
            href="/CV_Berenger_Sessou_EN.pdf"
            download="CV_Berenger_Sessou_EN.pdf"
            className="flex items-center gap-1"
            title={t.cv_en}
          >
            CV EN
          </a>
          <a
            href="https://github.com/Akashi05"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/b%C3%A9renger-sessou-b36ab1314/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
        </div>
      </div>
    </div>
  );
}
