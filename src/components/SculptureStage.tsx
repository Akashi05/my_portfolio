import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
const HeroScene = lazy(() => import("./HeroScene"));

/**
 * The ribbon belongs to the hero only: it is anchored to the hero stage, drifts
 * as the first viewport scrolls away, and is fully gone before the editorial
 * sections start so it never crosses body copy.
 */
export default function SculptureStage({ darkMode }: { darkMode: boolean }) {
  const target = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target, offset: ["start start", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-6%", "-2%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-28%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 82]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.86, 0.82]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  useEffect(() => setMounted(true), []);
  return (
    <div ref={target} className="sculpture-stage" aria-hidden="true">
      <div className="sculpture-sticky">
        <motion.div
          className="sculpture-canvas"
          style={reduced ? {} : { x, y, rotate, scale, opacity }}
        >
          {mounted && (
            <Suspense fallback={null}>
              <HeroScene darkMode={darkMode} />
            </Suspense>
          )}
        </motion.div>
      </div>
    </div>
  );
}
