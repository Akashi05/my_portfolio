import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { translations } from "../data/translations";
import { Button } from "@/components/ui/button";
interface HeroProps {
  language: "fr" | "en";
  setCurrentPage: (page: "home" | "about" | "projects" | "experience" | "contact") => void;
  darkMode: boolean;
}
const ease = [0.22, 1, 0.36, 1] as const;

const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 1700;
const GAP_MS = 350;

function Typewriter({ words, fixed }: { words: string[]; fixed: string }) {
  const reduced = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const word = words[wordIndex] ?? "";
    let delay = deleting ? DELETE_MS : TYPE_MS;
    if (!deleting && length === word.length) delay = HOLD_MS;
    if (deleting && length === 0) delay = GAP_MS;
    const id = window.setTimeout(() => {
      if (!deleting && length === word.length) {
        setDeleting(true);
      } else if (deleting && length === 0) {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setLength((l) => l + (deleting ? -1 : 1));
      }
    }, delay);
    return () => window.clearTimeout(id);
  }, [reduced, words, wordIndex, length, deleting]);

  if (reduced) {
    return <p className="text-lg font-medium md:text-xl">{fixed}</p>;
  }

  return (
    <p className="min-h-[1.75rem] text-lg font-medium md:text-xl">
      <span className="sr-only">{fixed}</span>
      <span aria-hidden="true">
        {(words[wordIndex] ?? "").slice(0, length)}
        <span className="typewriter-cursor" />
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
  const linkClass = "flex items-center gap-1 transition-colors hover:text-foreground";
  return (
    <div ref={ref} className="hero-editorial relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
        className="hero-top"
      >
        <p className="font-display hero-greeting font-bold">{t.greeting}</p>
        <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[0.6875rem] uppercase tracking-[0.14em] text-muted-foreground">
          <span
            aria-hidden="true"
            className="inline-block size-1.5 rounded-full bg-foreground/60"
          />
          {t.status.replace(/^[^\p{L}\p{N}]+/u, "")}
        </p>
      </motion.div>

      <motion.div
        className="hero-content"
        style={reduced ? {} : { y: contentY, opacity: contentOpacity }}
      >
        <h1 className="hero-name font-display font-black leading-[1.02]">
          <span className="block overflow-hidden pb-2">
            <motion.span
              className="block text-[0.45em] font-bold text-muted-foreground"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease }}
            >
              {t.intro_pre}
            </motion.span>
          </span>
          {["Bérenger", "SESSOU"].map((name, i) => (
            <span className="block overflow-hidden pb-2" key={name}>
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: (i + 1) * 0.15, ease }}
              >
                {name}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease }}
          className="hero-caption"
        >
          <Typewriter words={t.domains} fixed={t.domains_static} />
          <div className="mt-6 flex flex-wrap items-center gap-3 md:justify-end">
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
          <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
            <a
              href="/CV_Bérenger_Sessou_FR.pdf"
              download="CV_Berenger_Sessou_FR.pdf"
              className={linkClass}
              title={t.cv_fr}
            >
              <Download size={14} />
              CV FR
            </a>
            <a
              href="/CV_Berenger_Sessou_EN.pdf"
              download="CV_Berenger_Sessou_EN.pdf"
              className={linkClass}
              title={t.cv_en}
            >
              CV EN
            </a>
            <a
              href="https://github.com/Akashi05"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={linkClass}
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/b%C3%A9renger-sessou-b36ab1314/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={linkClass}
            >
              <Linkedin size={17} />
            </a>
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
      </div>
    </div>
  );
}
