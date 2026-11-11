import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { translations } from "../data/translations";

type Project = (typeof translations.fr.projects_data)[number];

interface ProjectsProps {
  language: "fr" | "en";
  darkMode: boolean;
  setSelectedProject: (project: Project) => void;
}

const AUTOPLAY_DELAY = 3200;
const END_PAUSE = 2200;

interface CarouselProps {
  children: ReactNode;
  autoplay?: boolean;
  label: string;
  prevLabel: string;
  nextLabel: string;
}

function Carousel({ children, autoplay = false, label, prevLabel, nextLabel }: CarouselProps) {
  const ref = useRef<HTMLUListElement>(null);
  const paused = useRef(false);
  const reduced = useReducedMotion();
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  const step = useCallback((direction: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const width = (first?.offsetWidth ?? el.clientWidth * 0.8) + gap;
    el.scrollBy({ left: direction * width, behavior: "smooth" });
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  useEffect(() => {
    if (!autoplay || reduced) return;
    let timer: number;
    const tick = () => {
      const el = ref.current;
      let delay = AUTOPLAY_DELAY;
      if (el && !paused.current) {
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
        if (atEnd) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          step(1);
          // Dwell a bit longer once the last card ("see more") is reached.
          delay = AUTOPLAY_DELAY;
        }
      }
      const atEndNow = el ? el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 : false;
      timer = window.setTimeout(tick, atEndNow ? END_PAUSE : delay);
    };
    timer = window.setTimeout(tick, AUTOPLAY_DELAY);
    return () => window.clearTimeout(timer);
  }, [autoplay, reduced, step]);

  const pause = () => {
    paused.current = true;
  };
  const resume = () => {
    paused.current = false;
  };

  const arrowBase =
    "pointer-events-none absolute inset-y-0 z-10 hidden w-20 items-center opacity-0 transition-opacity duration-300 sm:flex lg:w-28";

  return (
    <div
      className="group/carousel relative"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
      onTouchStart={pause}
    >
      <ul
        ref={ref}
        onScroll={updateEdges}
        aria-label={label}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-8"
      >
        {children}
      </ul>

      <div
        className={`${arrowBase} left-0 justify-start bg-gradient-to-r from-background via-background/70 to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_right,black_40%,transparent)] ${edges.start ? "" : "group-hover/carousel:opacity-100 group-focus-within/carousel:opacity-100"}`}
      >
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => step(-1)}
          aria-label={prevLabel}
          tabIndex={edges.start ? -1 : 0}
          className="pointer-events-auto ml-2 size-11 rounded-full bg-background/80"
        >
          <ChevronLeft />
        </Button>
      </div>
      <div
        className={`${arrowBase} right-0 justify-end bg-gradient-to-l from-background via-background/70 to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_left,black_40%,transparent)] ${edges.end ? "" : "group-hover/carousel:opacity-100 group-focus-within/carousel:opacity-100"}`}
      >
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => step(1)}
          aria-label={nextLabel}
          tabIndex={edges.end ? -1 : 0}
          className="pointer-events-auto mr-2 size-11 rounded-full bg-background/80"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

const cardClass = "w-[82%] shrink-0 snap-start sm:w-[420px] lg:w-[460px]";

export default function Projects({ language, setSelectedProject }: ProjectsProps) {
  const t = translations[language];
  const [showOthers, setShowOthers] = useState(false);
  const projects = [...t.projects_data].sort((a, b) => b.date.localeCompare(a.date));
  const nav = {
    prevLabel: language === "fr" ? "Projets précédents" : "Previous projects",
    nextLabel: language === "fr" ? "Projets suivants" : "Next projects",
  };

  return (
    <div className="editorial-section mx-auto max-w-7xl px-6 lg:px-12">
      <header className="section-head flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="section-index">
            02 <span className="opacity-40">/</span> {t.projects.subtitle}
          </p>
          <h2 className="section-title mt-6">{t.projects.title}</h2>
        </div>
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground md:mb-2">
          {t.projects.timeline} · {String(projects.length).padStart(2, "0")}
        </p>
      </header>

      <Carousel autoplay label={t.projects.title} {...nav}>
        {projects.map((project, i) => (
          <li key={project.title} className={cardClass}>
            <Button
              variant="ghost"
              onClick={() => setSelectedProject(project)}
              aria-label={`${t.projects.view_details} : ${project.title}`}
              className="project-image group relative flex aspect-[16/10] h-auto w-full overflow-hidden rounded-xl border border-border bg-secondary p-0"
            >
              {project.media ? (
                <img
                  src={project.media}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.035]"
                />
              ) : (
                <span className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-black tracking-tight text-foreground/80">
                  {project.title}
                </span>
              )}
              <span className="absolute right-4 bottom-4 flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 group-hover:-rotate-45">
                <ArrowUpRight size={20} />
              </span>
            </Button>

            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} <span className="opacity-40">/</span>{" "}
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold">
                  <Button
                    variant="link"
                    onClick={() => setSelectedProject(project)}
                    className="h-auto whitespace-normal p-0 text-left font-display text-inherit"
                  >
                    {project.title}
                  </Button>
                </h3>
              </div>
              <p className="shrink-0 pt-1 text-xs text-muted-foreground">
                {project.date.split("-")[0]}
              </p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <p className="mt-4 border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground">
              {project.tech.join(" · ")}
            </p>
          </li>
        ))}

        <li className={cardClass}>
          <button
            type="button"
            onClick={() => setShowOthers((v) => !v)}
            aria-expanded={showOthers}
            aria-controls="other-projects"
            className="group flex aspect-[16/10] w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-foreground/40 text-center transition-colors hover:bg-secondary"
          >
            <span className="font-display text-2xl font-bold">
              {showOthers ? t.projects.others_less : t.projects.others_more}
            </span>
            <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 group-hover:translate-x-1">
              <ArrowRight size={20} className={showOthers ? "-rotate-90" : "rotate-90"} />
            </span>
          </button>
        </li>
      </Carousel>

      <AnimatePresence initial={false}>
        {showOthers && (
          <motion.div
            id="other-projects"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden"
          >
            <h3 className="section-title mt-16 mb-8 text-[clamp(1.75rem,3.2vw,2.75rem)]">
              {t.projects.others_title}
              <span className="ml-3 text-base font-normal text-muted-foreground">
                {String(t.other_projects.length).padStart(2, "0")}
              </span>
            </h3>
            <Carousel label={t.projects.others_title} {...nav}>
              {t.other_projects.map((item) => (
                <li key={item.title} className={cardClass}>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl border border-border bg-secondary"
                  >
                    <img
                      src={item.media}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </a>
                  <p className="mt-5 text-xs text-muted-foreground">{item.period}</p>
                  <h4 className="mt-1 text-xl font-bold">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.projects.others_link} : ${item.title}`}
                    className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] transition-colors hover:text-muted-foreground"
                  >
                    {t.projects.others_link}
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}
            </Carousel>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
