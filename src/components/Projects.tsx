import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
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
  const byDate = (a: Project, b: Project) => b.date.localeCompare(a.date);
  const featured = [...t.projects_data].sort(byDate);
  const others = [...t.other_projects].sort(byDate);
  const nav = {
    prevLabel: language === "fr" ? "Projets précédents" : "Previous projects",
    nextLabel: language === "fr" ? "Projets suivants" : "Next projects",
  };

  const expand = () => {
    setShowOthers(true);
    window.setTimeout(() => {
      document
        .getElementById("other-projects-start")
        ?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }, 60);
  };

  const collapse = () => {
    setShowOthers(false);
    document
      .getElementById("projects-start")
      ?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  const renderCard = (project: Project, i: number, id?: string) => (
    <li key={project.title} id={id} className={cardClass}>
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
        <p className="shrink-0 pt-1 text-xs text-muted-foreground">{project.date.split("-")[0]}</p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      <p className="mt-4 border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground">
        {project.tech.join(" · ")}
      </p>
    </li>
  );

  const endCard = (label: string, onClick: () => void, back = false) => (
    <li className={cardClass}>
      <button
        type="button"
        onClick={onClick}
        aria-expanded={!back}
        className="group flex aspect-[16/10] w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-foreground/40 text-center transition-colors hover:bg-secondary"
      >
        <span className="font-display text-2xl font-bold">{label}</span>
        <span
          className={`flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 ${back ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"}`}
        >
          {back ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
        </span>
      </button>
    </li>
  );

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
          {t.projects.timeline} · {String(featured.length).padStart(2, "0")}
        </p>
      </header>

      <Carousel autoplay label={t.projects.title} {...nav}>
        {featured.map((project, i) =>
          renderCard(project, i, i === 0 ? "projects-start" : undefined),
        )}
        {showOthers
          ? others.map((project, i) =>
              renderCard(
                project,
                featured.length + i,
                i === 0 ? "other-projects-start" : undefined,
              ),
            )
          : null}
        {showOthers
          ? endCard(t.projects.others_less, collapse, true)
          : endCard(t.projects.others_more, expand)}
      </Carousel>
    </div>
  );
}
