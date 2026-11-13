import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ribbonInput } from "@/lib/ribbonInput";
const HeroScene = lazy(() => import("./HeroScene"));

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (t: number) => t * t * (3 - 2 * t);

/**
 * The ribbon lives on its own fixed layer behind the page content. It starts at
 * the centre of the hero, then glides down and left as the visitor scrolls and
 * settles under the "About" title, where it stays pinned with the sticky rail
 * before fading out once that block has scrolled away.
 */
export default function SculptureStage({ darkMode }: { darkMode: boolean }) {
  const box = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const reduced = useReducedMotion();
  const hit = useRef({ x: 0, y: 0, r: 0, visible: false });
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const y = window.scrollY;
      const wide = vw >= 1024;
      // Width of the ribbon on screen at scale 1 (it is sized by the viewport height).
      // The canvas is a fixed square (scaled with CSS), large enough that the ribbon is
      // never cropped and independent of the viewport size.
      const side = 640;
      const natural = 0.666 * side;

      const hero = {
        x: wide ? vw * 0.47 : vw / 2,
        y: wide ? vh * 0.45 : 21 * 16,
        w: wide ? Math.min(0.43 * vh, 0.26 * vw) : Math.min(vw * 0.44, 190),
      };

      const about = document.getElementById("about");
      const anchor = document.getElementById("ribbon-anchor");
      let progress = 0;
      let opacity = 1;
      let cx = hero.x;
      let cy = hero.y;
      let width = hero.w;

      if (about && anchor) {
        const aboutTop = about.getBoundingClientRect().top + y;
        const end = Math.max(1, aboutTop - vh * 0.3);
        progress = smooth(clamp(y / end));
        const r = anchor.getBoundingClientRect();
        const target = {
          x: r.left + r.width / 2,
          y: r.top + r.height / 2,
          w: wide ? 210 : Math.min(vw * 0.5, 200),
        };
        cx = lerp(hero.x, target.x, progress);
        cy = lerp(hero.y, target.y, progress);
        width = lerp(hero.w, target.w, progress);
        if (progress >= 1) opacity = clamp((r.bottom + 40) / 240);
      }

      const scale = width / natural;
      const rotate = reduced ? 0 : y * 0.035;
      // The ribbon is not centred inside its canvas: pivot on its visual centre so it
      // lands exactly on the target point and spins in place.
      const left = (vw - side) / 2;
      const top = (vh - side) / 2;
      const px = side / 2 + 0.044 * side;
      const py = side / 2 - 0.024 * side;
      el.style.width = `${side}px`;
      el.style.height = `${side}px`;
      el.style.left = `${left}px`;
      el.style.top = `${top}px`;
      el.style.transformOrigin = `${px}px ${py}px`;
      el.style.transform = `translate3d(${cx - (left + px)}px, ${cy - (top + py)}px, 0) rotate(${rotate}deg) scale(${scale})`;
      el.style.opacity = String(opacity);
      el.style.visibility = opacity <= 0.01 ? "hidden" : "visible";
      hit.current = { x: cx, y: cy, r: width * 0.62, visible: opacity > 0.3 };
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced, mounted]);

  // Interaction: drag the ribbon to spin it (momentum on release), click or tap to
  // give it a kick. Pointer events are read on the window because the ribbon sits
  // behind the page content.
  useEffect(() => {
    if (reduced) return;
    const interactive = "a,button,input,textarea,select,label,summary,[role='button']";
    const onRibbon = (e: PointerEvent) => {
      const h = hit.current;
      if (!h.visible) return false;
      const t = e.target as Element | null;
      if (t?.closest(interactive)) return false;
      return Math.hypot(e.clientX - h.x, e.clientY - h.y) < h.r;
    };
    let drag: { id: number; x: number; y: number; t: number; moved: number } | null = null;

    const kick = () => {
      ribbonInput.velY += (Math.random() < 0.5 ? -1 : 1) * 7;
      ribbonInput.velX += (Math.random() - 0.5) * 3;
    };
    const onDown = (e: PointerEvent) => {
      if (e.button !== 0 || !onRibbon(e)) return;
      if (e.pointerType === "touch") {
        drag = { id: e.pointerId, x: e.clientX, y: e.clientY, t: e.timeStamp, moved: 0 };
        return;
      }
      e.preventDefault();
      ribbonInput.dragging = true;
      ribbonInput.velX = 0;
      ribbonInput.velY = 0;
      drag = { id: e.pointerId, x: e.clientX, y: e.clientY, t: e.timeStamp, moved: 0 };
      document.body.style.cursor = "grabbing";
    };
    const onMove = (e: PointerEvent) => {
      if (drag && ribbonInput.dragging && e.pointerId === drag.id) {
        const dx = e.clientX - drag.x;
        const dy = e.clientY - drag.y;
        const dt = Math.max(0.008, (e.timeStamp - drag.t) / 1000);
        drag.moved += Math.abs(dx) + Math.abs(dy);
        ribbonInput.dragY += dx * 0.012;
        ribbonInput.dragX += dy * 0.012;
        const clampV = (v: number) => Math.max(-14, Math.min(14, v));
        ribbonInput.velY = clampV(ribbonInput.velY * 0.6 + ((dx * 0.012) / dt) * 0.4);
        ribbonInput.velX = clampV(ribbonInput.velX * 0.6 + ((dy * 0.012) / dt) * 0.4);
        drag.x = e.clientX;
        drag.y = e.clientY;
        drag.t = e.timeStamp;
        return;
      }
      if (e.pointerType === "mouse" && !drag) {
        document.body.style.cursor = onRibbon(e) ? "grab" : "";
      }
    };
    const onUp = (e: PointerEvent) => {
      if (!drag || e.pointerId !== drag.id) return;
      const wasDragging = ribbonInput.dragging;
      if (wasDragging) {
        ribbonInput.dragging = false;
        document.body.style.cursor = onRibbon(e) ? "grab" : "";
        if (drag.moved < 4) kick();
      } else if (
        e.pointerType === "touch" &&
        Math.hypot(e.clientX - drag.x, e.clientY - drag.y) < 8
      ) {
        kick();
      }
      drag = null;
    };
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      ribbonInput.dragging = false;
      document.body.style.cursor = "";
    };
  }, [reduced]);

  return (
    <div className="ribbon-layer" aria-hidden="true">
      <div ref={box} className="ribbon-box">
        {mounted && (
          <Suspense fallback={null}>
            <HeroScene darkMode={darkMode} />
          </Suspense>
        )}
      </div>
    </div>
  );
}
