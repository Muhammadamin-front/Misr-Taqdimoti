import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { AUTHOR } from "@/data";

/** Titul jumlasi — urgʻu oʻzgaradigan joylardan boʻlingan. */
const SEGMENTS: { text: string; className?: string }[] = [
  { text: `${AUTHOR.student}ning`, className: "font-semibold text-sand-100" },
  { text: " " },
  { text: `«${AUTHOR.subject}»`, className: "text-sand-300" },
  { text: " fanidan " },
  { text: "Misr davlati", className: "text-lapis-300" },
  { text: " uchun tayyorlagan animatsiyali taqdimoti" },
];
const TOTAL = SEGMENTS.reduce((n, s) => n + s.text.length, 0);

/** Har safar slayd ochilganda matnni harfma-harf yozadi; harflar oldindan joy egallaydi, matn siljimaydi. */
function useTypewriter() {
  const [typed, setTyped] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(TOTAL);
      return;
    }
    let n = 0;
    let tick = 0;
    const start = window.setTimeout(() => {
      tick = window.setInterval(() => {
        n += 1;
        setTyped(n);
        if (n >= TOTAL) window.clearInterval(tick);
      }, 34);
    }, 1200);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(tick);
    };
  }, []);
  return { typed, done: typed >= TOTAL };
}

/** Choʻl ufqida chiziladigan piramidalar va koʻtariladigan quyosh gardishi. */
function Pyramids({ className }: { className?: string }) {
  const draw = (delay: number) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { pathLength: { duration: 1.8, delay, ease: [0.22, 1, 0.36, 1] as const }, opacity: { duration: 0.3, delay } },
  });
  return (
    <svg viewBox="0 0 400 240" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="title-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#f6e3b4" />
          <stop offset="0.6" stopColor="#d6b679" />
          <stop offset="1" stopColor="#bb8522" stopOpacity="0" />
        </radialGradient>
      </defs>
      <motion.circle
        cx="250"
        r="46"
        fill="url(#title-sun)"
        initial={{ cy: 230, opacity: 0 }}
        animate={{ cy: 92, opacity: 0.9 }}
        transition={{ duration: 2.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.path d="M20 210 H380" stroke="#9a6b18" strokeWidth="1.5" fill="none" {...draw(0.2)} />
      <motion.path d="M70 210 L170 70 L270 210" stroke="#d6b679" strokeWidth="2" fill="none" strokeLinejoin="round" {...draw(0.6)} />
      <motion.path d="M170 70 L196 210" stroke="#9a6b18" strokeWidth="1.2" fill="none" {...draw(1.2)} />
      <motion.path d="M230 210 L300 112 L370 210" stroke="#d6b679" strokeWidth="2" fill="none" strokeLinejoin="round" {...draw(1)} />
      <motion.path d="M300 112 L318 210" stroke="#9a6b18" strokeWidth="1.2" fill="none" {...draw(1.6)} />
      <motion.path d="M10 210 L52 152 L94 210" stroke="#c9a15a" strokeWidth="1.6" fill="none" strokeLinejoin="round" {...draw(1.4)} />
    </svg>
  );
}

export function TitleSlide() {
  const { typed, done } = useTypewriter();
  let left = typed;

  return (
    <section className="grain relative h-full w-full overflow-hidden bg-night">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_70%_40%,rgba(187,133,34,0.18),transparent_70%),radial-gradient(ellipse_50%_40%_at_15%_85%,rgba(58,143,207,0.12),transparent_70%)]" />
      <Pyramids className="pointer-events-none absolute right-[4%] bottom-[16%] w-[min(46vw,620px)] max-lg:right-[-10%] max-lg:bottom-[8%] max-lg:w-[90vw] max-lg:opacity-30" />

      <div className="relative z-10 h-full w-full overflow-y-auto px-6 pb-24 pt-10 md:px-14 md:pt-14">
        <div className="flex min-h-full flex-col">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-start gap-4"
          >
            <span className="mt-1 h-12 w-[3px] shrink-0 rounded-full bg-gradient-to-b from-sand-300 to-sand-700" />
            <div>
              <p className="font-display text-lg font-bold uppercase tracking-[0.12em] text-sand-100 md:text-2xl">{AUTHOR.university}</p>
              <p className="mt-1 text-base text-zinc-400 md:text-xl">{AUTHOR.faculty}</p>
            </div>
          </motion.div>

          <div className="my-auto w-full py-10 lg:max-w-[62%]">
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex items-center gap-3 text-base uppercase tracking-[0.25em] text-sand-300 md:text-lg"
            >
              <span className="h-px w-10 bg-sand-400" />
              {AUTHOR.group} talabasi
            </motion.p>

            <h1
              className="mt-5 text-[clamp(1.9rem,4.2vw,4.4rem)] font-light leading-[1.1] tracking-tight text-zinc-300"
              aria-label={SEGMENTS.map((s) => s.text).join("")}
            >
              <span aria-hidden="true">
                {SEGMENTS.map((s, i) => {
                  const shown = Math.max(0, Math.min(s.text.length, left));
                  // Kursor hali yozilayotgan boʻlakda turadi
                  const caretHere = !done && left >= 0 && left < s.text.length;
                  left -= s.text.length;
                  return (
                    <span key={i} className={s.className}>
                      {s.text.slice(0, shown)}
                      {caretHere && <span className="title-caret" />}
                      <span className="text-transparent">{s.text.slice(shown)}</span>
                    </span>
                  );
                })}
                {done && <span className="title-caret title-caret--idle" />}
              </span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: done ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="flex flex-wrap items-end justify-between gap-4"
          >
            <p className="font-display text-sm uppercase tracking-[0.3em] text-zinc-500 md:text-base">Fargʻona · {AUTHOR.year}</p>
            <p className="text-sm text-zinc-500">→ tugmasi yoki pult bilan keyingi sahifa</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
