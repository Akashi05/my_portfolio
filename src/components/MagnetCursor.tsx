import { useEffect, useRef } from "react";

const TARGETS = 'a[href], button:not([disabled]), [role="button"], [data-cursor]';
const NATIVE = 'input, textarea, select, [contenteditable="true"]';

/**
 * Mouse cursor for fine pointers: a small gold dot at the pointer and a ring that
 * snaps onto links, buttons and cards and takes their shape. Touch devices and
 * text fields keep the native cursor.
 */
export default function MagnetCursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ringEl = ring.current;
    const dotEl = dot.current;
    if (!ringEl || !dotEl) return;

    const root = document.documentElement;
    root.classList.add("magnet-cursor");

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let target: HTMLElement | null = null;
    let visible = false;
    let down = false;
    let raf = 0;

    const setVisible = (v: boolean) => {
      visible = v;
      ringEl.style.opacity = v ? "1" : "0";
      dotEl.style.opacity = v ? "1" : "0";
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mx = e.clientX;
      my = e.clientY;
      const el = e.target as Element | null;
      if (el?.closest(NATIVE)) {
        target = null;
        setVisible(false);
        return;
      }
      target = (el?.closest(TARGETS) as HTMLElement | null) ?? null;
      if (!visible) {
        rx = mx;
        ry = my;
        setVisible(true);
      }
    };
    const onLeave = () => setVisible(false);
    const onDown = () => {
      down = true;
    };
    const onUp = () => {
      down = false;
    };

    const frame = () => {
      let tx = mx;
      let ty = my;
      let w = 22;
      let h = 22;
      let radius = "999px";
      if (target && target.isConnected) {
        const b = target.getBoundingClientRect();
        tx = b.left + b.width / 2;
        ty = b.top + b.height / 2;
        w = b.width + 14;
        h = b.height + 10;
        const r = parseFloat(getComputedStyle(target).borderTopLeftRadius) || 0;
        radius = r >= Math.min(b.height, b.width) / 2 ? "999px" : `${r + 6}px`;
      }
      const k = reduced ? 1 : 0.28;
      rx += (tx - rx) * k;
      ry += (ty - ry) * k;
      const s = down ? 0.94 : 1;
      ringEl.style.width = `${w}px`;
      ringEl.style.height = `${h}px`;
      ringEl.style.borderRadius = radius;
      ringEl.style.transform = `translate(${rx - w / 2}px, ${ry - h / 2}px) scale(${s})`;
      ringEl.setAttribute("data-locked", target ? "1" : "0");
      dotEl.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
      raf = requestAnimationFrame(frame);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", onLeave);
      root.classList.remove("magnet-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ring} aria-hidden="true" className="magnet-ring" />
      <div ref={dot} aria-hidden="true" className="magnet-dot" />
    </>
  );
}
