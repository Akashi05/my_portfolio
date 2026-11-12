import { motion, useScroll, useSpring } from "framer-motion";

/** Reading progress along the bottom edge of the nav bar (hides and shows with it). */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  return (
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] bg-foreground/15">
      <motion.div style={{ scaleX }} className="h-full origin-left bg-foreground" />
    </div>
  );
}
