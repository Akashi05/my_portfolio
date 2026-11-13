import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/** Slides its text up from behind a mask when it scrolls into view. */
export default function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  // Observe the (unclipped) wrapper: the moving child is hidden by the mask and
  // would never count as visible.
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.6 });
  return (
    <span ref={ref} className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
      <motion.span
        className="block"
        initial={{ y: "115%" }}
        animate={{ y: inView ? 0 : "115%" }}
        transition={{ duration: 1.1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}
