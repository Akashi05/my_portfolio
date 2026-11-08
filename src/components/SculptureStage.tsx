import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
const HeroScene = lazy(() => import('./HeroScene'));

export default function SculptureStage({ darkMode }: { darkMode: boolean }) {
  const target = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target, offset: ['start start', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 0.28, 0.5], ['23%', '-25%', '-25%']);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, 55]);
  const opacity = useTransform(scrollYProgress, [0, 0.38, 0.55], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.8]);
  useEffect(() => setMounted(true), []);
  return <div ref={target} className="sculpture-stage" aria-hidden="true">
    <div className="sculpture-sticky">
      <motion.div className="sculpture-canvas" style={reduced ? {} : { x, rotate, opacity, scale }}>
        {mounted && <Suspense fallback={null}><HeroScene darkMode={darkMode} /></Suspense>}
      </motion.div>
    </div>
  </div>;
}
