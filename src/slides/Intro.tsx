import { motion } from "motion/react";
import { ImageStreamHero } from "@/components/ui/image-stream-hero";
import { TextRoll } from "@/components/ui/text-roll";
import { AUTHOR, EGYPT_FACTS, IMG } from "@/data";
import { Body, Reveal, Slide, SlideTitle, StatTile } from "./common";

const HERO_IMAGES = [
  "pyramids",
  "tut-mask",
  "sphinx",
  "nefertiti",
  "abu-simbel",
  "mummy-thebes",
  "karnak",
  "memnon",
  "anubis",
  "hatshepsut",
  "luxor-statues",
  "scribe",
].map((name) => ({ src: IMG(name) }));

export function CoverSlide() {
  return (
    <ImageStreamHero images={HERO_IMAGES} cards={10} speed={22} axis={52} className="h-full w-full bg-night">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,16,12,0.15)_0%,rgba(20,16,12,0.85)_70%)]" />
      <div className="relative z-10 flex h-full flex-col items-center justify-between px-6 pb-24 pt-12 text-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-sand-300"
          >
            {AUTHOR.subject} fanidan taqdimot
          </motion.div>
          <h1 className="gold-text font-display text-5xl font-black uppercase tracking-wider drop-shadow-2xl sm:text-7xl md:text-8xl">
            <TextRoll duration={0.6}>Misr</TextRoll>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-3 font-display text-lg uppercase tracking-[0.2em] text-sand-100 md:text-2xl"
          >
            Arab Respublikasi iqtisodiyoti
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="rounded-2xl border border-sand-700/50 bg-black/60 px-6 py-4 backdrop-blur-md"
        >
          <p className="text-balance text-base text-zinc-200 md:text-lg">
            Piramidalardan Suvaysh kanaligacha: iqtisodiy tahlil va{" "}
            <span className="font-semibold text-lapis-300">Oʻzbekiston</span> bilan taqqoslash
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            {[AUTHOR.student, AUTHOR.group, AUTHOR.teacher, AUTHOR.year].filter(Boolean).join(" · ")}
          </p>
        </motion.div>
      </div>
    </ImageStreamHero>
  );
}

const PLAN = [
  "Misr haqida umumiy maʼlumot",
  "Tarixiy meros — turizm kapitali",
  "Asosiy makroiqtisodiy koʻrsatkichlar",
  "Valyuta tushumining 4 ustuni",
  "Suvaysh kanali va Qizil dengiz inqirozi",
  "Inqirozlar va islohotlar (2016–2025)",
  "Oʻzbekiston bilan taqqoslash",
  "Xulosa va Oʻzbekiston uchun saboqlar",
];

export function PlanSlide() {
  return (
    <Slide bg={IMG("hatshepsut")} bgOpacity={0.3}>
      <SlideTitle eyebrow="Reja" title="Taqdimot rejasi" />
      <Body>
      <div className="grid gap-4 sm:grid-cols-2">
        {PLAN.map((item, i) => (
          <Reveal key={item} delay={0.1 + i * 0.06}>
            <div className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-black/40 p-4 xl:p-5 backdrop-blur-sm transition-all hover:translate-x-1 hover:border-sand-500/60">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-sand-600/60 bg-sand-900/60 font-display text-xl font-bold text-sand-300 transition-colors group-hover:bg-sand-500 group-hover:text-night">
                {i + 1}
              </span>
              <span className="text-lg text-zinc-100 xl:text-xl">{item}</span>
            </div>
          </Reveal>
        ))}
      </div>
      </Body>
    </Slide>
  );
}

export function OverviewSlide() {
  return (
    <Slide>
      <SlideTitle eyebrow="1 · Umumiy maʼlumot" title="Nil boʻyidagi davlat" />
      <Body>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <Reveal className="relative min-h-[260px] overflow-hidden rounded-3xl border border-sand-800/50 lg:min-h-[460px]">
          <img src={IMG("felucca")} alt="Asvondagi Nil daryosi va feluka qayiqlari" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="max-w-lg text-lg text-zinc-100">
              Misr hududining <b className="text-sand-300">~95%</b> i choʻl. Hayot va iqtisodiyot Nil vodiysi hamda
              deltasidagi tor yashil yoʻlakda jamlangan.
            </p>
            <p className="mt-2 text-xs text-zinc-400">Asvon, Nil daryosi · Foto: V. Argenberg, CC BY 4.0</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {EGYPT_FACTS.map((f, i) => (
            <StatTile key={f.label} {...f} delay={0.15 + i * 0.07} />
          ))}
        </div>
      </div>
      </Body>
    </Slide>
  );
}
