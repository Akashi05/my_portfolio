import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return <motion.span style={{ opacity }}>{word} </motion.span>;
}

/** Paragraph whose words light up one after another as it scrolls into view. */
export default function ScrollWords({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.92", "start 0.42"] });
  const words = text.split(" ");
  if (reduced) return <p>{text}</p>;
  return (
    <p ref={ref}>
      {words.map((word, i) => (
        <Word
          key={`${word}-${i}`}
          word={word}
          progress={scrollYProgress}
          range={[i / words.length, Math.min(1, (i + 1.5) / words.length)]}
        />
      ))}
    </p>
  );
}
