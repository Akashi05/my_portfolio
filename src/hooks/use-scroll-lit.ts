import { useEffect, useRef } from "react";

/**
 * Touch devices have no hover, so the highlight of a list row follows the scroll:
 * the row crossing the middle band of the screen gets the `is-lit` class.
 * Fine pointers are left to the CSS hover effect.
 */
export function useScrollLit<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const list = ref.current;
    if (!list || !window.matchMedia("(hover: none)").matches) return;
    const rows = Array.from(list.querySelectorAll<HTMLElement>(".hover-row"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle("is-lit", entry.isIntersecting);
        }
      },
      { rootMargin: "-38% 0px -38% 0px" },
    );
    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return ref;
}
