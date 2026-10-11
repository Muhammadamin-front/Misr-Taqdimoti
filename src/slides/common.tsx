import type { ReactNode } from "react";
import { motion } from "motion/react";
import { TextRoll } from "@/components/ui/text-roll";
import { cn } from "@/lib/utils";

/** Har bir slayd uchun toʻliq ekranli qobiq. */
export function Slide({
  children,
  className,
  bg,
  bgOpacity = 0.25,
}: {
  children: ReactNode;
  className?: string;
  /** Fon rasmi (xira, qorongʻi qatlam bilan). */
  bg?: string;
  bgOpacity?: number;
}) {
  return (
    <section className={cn("grain relative h-full w-full overflow-hidden bg-night", className)}>
      {bg ? (
        <>
          <img
            src={bg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: bgOpacity }}
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/60 to-night" />
        </>
      ) : null}
      <div className="relative z-10 h-full w-full overflow-y-auto px-6 pb-24 pt-10 md:px-14 md:pt-14">
        <div className="flex min-h-full flex-col">{children}</div>
      </div>
    </section>
  );
}

/** Sarlavhadan keyingi qolgan joyda kontentni vertikal markazlaydi. */
export function Body({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("flex flex-1 flex-col justify-center", className)}>{children}</div>;
}

/** Slayd sarlavhasi: kichik “qosh” + TextRoll bilan aylanuvchi sarlavha. */
export function SlideTitle({
  eyebrow,
  title,
  className,
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <header className={cn("mb-8", className)}>
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-sand-400" />
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sand-300">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-wide text-sand-100 md:text-5xl">
        <TextRoll getEnterDelay={(i) => i * 0.03} getExitDelay={(i) => i * 0.03 + 0.15} duration={0.35}>
          {title}
        </TextRoll>
      </h2>
    </header>
  );
}

/** Pastdan chiqib keluvchi blok — roʻyxat elementlari uchun. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StatTile({
  label,
  value,
  note,
  delay = 0,
}: {
  label: string;
  value: string;
  note?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="h-full rounded-2xl border border-sand-800/50 bg-black/40 p-5 backdrop-blur-sm transition-colors hover:border-sand-500/60 xl:p-6">
        <div className="text-xs font-medium uppercase tracking-widest text-zinc-400">{label}</div>
        <div className="mt-2 font-display text-2xl font-bold text-sand-200 md:text-3xl xl:text-4xl">{value}</div>
        {note ? <div className="mt-2 text-sm text-zinc-400">{note}</div> : null}
      </div>
    </Reveal>
  );
}

/** Mamlakat belgisi — rang yolgʻiz identifikator boʻlmasin, nom ham yoziladi. */
export function CountryKey({ country }: { country: "egypt" | "uzbekistan" }) {
  const isEgypt = country === "egypt";
  return (
    <span className="inline-flex items-center gap-2 text-sm text-zinc-300">
      <span
        className="inline-block h-2.5 w-2.5 rounded-full"
        style={{ background: isEgypt ? EGYPT_COLOR : UZB_COLOR }}
      />
      {isEgypt ? "Misr" : "Oʻzbekiston"}
    </span>
  );
}

// Validatsiyadan oʻtgan juftlik (dataviz validator, qorongʻi fon #14100c).
export const EGYPT_COLOR = "#bb8522";
export const UZB_COLOR = "#3a8fcf";
