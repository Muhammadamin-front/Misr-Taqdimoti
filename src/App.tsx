import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";
import { SLIDES } from "@/slides";

function readHash() {
  const n = Number(window.location.hash.replace("#", ""));
  return Number.isInteger(n) && n >= 1 && n <= SLIDES.length ? n - 1 : 0;
}

export default function App() {
  const [index, setIndex] = useState(readHash);
  const [direction, setDirection] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const go = useCallback((next: number) => {
    setIndex((current) => {
      const clamped = Math.max(0, Math.min(SLIDES.length - 1, next));
      setDirection(clamped >= current ? 1 : -1);
      return clamped;
    });
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void document.documentElement.requestFullscreen();
  }, []);

  useEffect(() => {
    window.history.replaceState(null, "", `#${index + 1}`);
    document.title = `${index + 1}. ${SLIDES[index].title} — Misr iqtisodiyoti`;
  }, [index]);

  useEffect(() => {
    const onFs = () => setIsFullscreen(Boolean(document.fullscreenElement));
    const onHash = () => go(readHash());
    document.addEventListener("fullscreenchange", onFs);
    window.addEventListener("hashchange", onHash);
    return () => {
      document.removeEventListener("fullscreenchange", onFs);
      window.removeEventListener("hashchange", onHash);
    };
  }, [go]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (["ArrowRight", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        go(index + 1);
      } else if (["ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "Home") go(0);
      else if (e.key === "End") go(SLIDES.length - 1);
      else if (e.key === "f" || e.key === "F") toggleFullscreen();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, toggleFullscreen]);

  const Current = SLIDES[index].Component;

  return (
    <div className="relative h-full w-full overflow-hidden bg-night">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          className="absolute inset-0"
          initial={{ opacity: 0, x: direction * 60, filter: "blur(6px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: direction * -60, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Current />
        </motion.div>
      </AnimatePresence>

      {/* Boshqaruv paneli */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3000] flex items-end justify-between gap-4 px-4 pb-4 md:px-8">
        <div className="pointer-events-auto hidden items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-2 backdrop-blur md:flex">
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => go(i)}
              title={`${i + 1}. ${s.title}`}
              aria-label={`${i + 1}-slayd: ${s.title}`}
              className="group flex h-4 items-center"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-sand-400" : "w-1.5 bg-white/30 group-hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="pointer-events-auto ml-auto flex items-center gap-2 rounded-full border border-white/10 bg-black/50 p-1.5 backdrop-blur">
          <button
            type="button"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            aria-label="Oldingi slayd"
            className="grid h-9 w-9 place-items-center rounded-full text-white transition hover:bg-white/10 disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="min-w-[4.5rem] text-center font-mono text-sm tabular-nums text-zinc-300">
            {index + 1} / {SLIDES.length}
          </span>
          <button
            type="button"
            onClick={() => go(index + 1)}
            disabled={index === SLIDES.length - 1}
            aria-label="Keyingi slayd"
            className="grid h-9 w-9 place-items-center rounded-full text-white transition hover:bg-white/10 disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label="Toʻliq ekran (F)"
            title="Toʻliq ekran (F)"
            className="grid h-9 w-9 place-items-center rounded-full text-white transition hover:bg-white/10"
          >
            {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Yuqoridagi progress chizigʻi */}
      <div className="absolute inset-x-0 top-0 z-[3000] h-0.5 bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-sand-600 via-sand-300 to-sand-500"
          animate={{ width: `${((index + 1) / SLIDES.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
