import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { TextRoll } from "@/components/ui/text-roll";
import { IMG, SOURCES } from "@/data";
import credits from "@/credits.json";
import { Body, Reveal, Slide, SlideTitle } from "./common";

const CONCLUSIONS = [
  { k: "Salohiyat", v: "Misr — 107 mln aholi, strategik joylashuv va jahon darajasidagi tarixiy merosga ega yirik bozor." },
  { k: "Zaiflik", v: "Valyuta tushumi tashqi omillarga bogʻliq: Qizil dengizdagi inqiroz bir yilda kanal daromadini 61% ga qisqartirdi." },
  { k: "Islohot", v: "2024-yildagi devalvatsiya, IMF dasturi va Ras al-Hikma investitsiyasi iqtisodiyotni barqarorlashtirmoqda." },
  { k: "Taqqoslash", v: "Oʻzbekiston iqtisodiyoti kichikroq, lekin tezroq oʻsmoqda va inflyatsiya pastroq — makrobarqarorlik ustunligi." },
  { k: "Hamkorlik", v: "Turizm, qishloq xoʻjaligi, farmatsevtika va taʼlim — ikki davlat oʻrtasida rivojlantirish mumkin boʻlgan yoʻnalishlar." },
];

export function ConclusionSlide() {
  return (
    <Slide bg={IMG("abu-simbel")} bgOpacity={0.2}>
      <SlideTitle eyebrow="Xulosa" title="Asosiy xulosalar" />
      <Body>
      <div className="space-y-3">
        {CONCLUSIONS.map((c, i) => (
          <Reveal key={c.k} delay={0.1 + i * 0.1}>
            <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-sm xl:p-5 md:flex-row md:items-center md:gap-6">
              <span className="w-36 shrink-0 font-display text-lg font-bold uppercase tracking-wide text-sand-300">{c.k}</span>
              <span className="text-zinc-200 xl:text-lg">{c.v}</span>
            </div>
          </Reveal>
        ))}
      </div>
      </Body>
    </Slide>
  );
}

export function ThanksSlide() {
  return (
    <Slide bg={IMG("sphinx")} bgOpacity={0.45}>
      <div className="flex flex-1 flex-col items-center justify-center gap-10 text-center">
        <div>
          <h2 className="gold-text font-display text-6xl font-black uppercase md:text-8xl">
            <TextRoll duration={0.55}>Rahmat!</TextRoll>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-4 text-xl text-zinc-200"
          >
            Eʼtiboringiz uchun tashakkur. Savollaringiz boʻlsa — marhamat.
          </motion.p>
        </div>
        <Reveal delay={1.1} className="w-full max-w-3xl">
          <div className="rounded-2xl border border-white/10 bg-black/60 p-5 text-left backdrop-blur-md">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-sand-300">Foydalanilgan manbalar</div>
            <ol className="list-decimal space-y-1.5 pl-5 text-sm text-zinc-300">
              {SOURCES.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-sand-200">
                    {s.name}
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </Slide>
  );
}

export function CreditsSlide() {
  return (
    <Slide>
      <SlideTitle eyebrow="Ilova" title="Rasm mualliflari" />
      <p className="-mt-4 mb-5 text-sm text-zinc-400">
        Barcha rasmlar Wikimedia Commons’dan olingan va erkin litsenziyalarda (Public domain, CC0, CC BY, CC BY-SA) tarqatiladi.
      </p>
      <div className="grid gap-x-8 gap-y-1.5 text-sm md:grid-cols-2 xl:grid-cols-3">
        {credits.map((c) => (
          <a
            key={c.key}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-lg p-1.5 transition-colors hover:bg-white/5"
          >
            <img src={IMG(c.key)} alt="" className="h-10 w-10 shrink-0 rounded-md object-cover" loading="lazy" />
            <span className="min-w-0">
              <span className="block truncate text-zinc-200 group-hover:text-sand-200">{c.file.replace(/\.(jpe?g|tif)$/i, "")}</span>
              <span className="block truncate text-xs text-zinc-500">
                {c.author} · {c.license}
              </span>
            </span>
          </a>
        ))}
      </div>
    </Slide>
  );
}
