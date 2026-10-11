import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import CardFlip from "@/components/ui/card-flip";
import { EGYPT_KPI, IMG, SUEZ_REVENUE } from "@/data";
import { ChartTooltip } from "./charts";
import { Body, EGYPT_COLOR, Reveal, Slide, SlideTitle, StatTile } from "./common";

const FEATURES = [
  "Aralash iqtisodiyot: davlat va harbiy korxonalar ulushi katta",
  "Bugʻdoyning dunyodagi eng yirik importchilaridan biri",
  "Valyuta tushumi tashqi omillarga — turizm, kanal, migrantlarga bogʻliq",
  "Yirik mega-loyihalar: Yangi maʼmuriy poytaxt, yoʻllar, energetika",
];

export function KpiSlide() {
  return (
    <Slide bg={IMG("cairo")} bgOpacity={0.3}>
      <SlideTitle eyebrow="3 · Makroiqtisodiyot, 2024" title="Asosiy koʻrsatkichlar" />
      <Body>
      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {EGYPT_KPI.map((k, i) => (
            <StatTile key={k.label} {...k} delay={0.1 + i * 0.07} />
          ))}
        </div>
        <Reveal delay={0.5}>
          <div className="h-full rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-sm">
            <h3 className="mb-4 font-display text-lg font-bold uppercase tracking-wide text-sand-200">
              Iqtisodiyot xususiyatlari
            </h3>
            <ul className="space-y-4 text-zinc-300 xl:text-lg">
              {FEATURES.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-sand-400" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
      <p className="mt-6 text-xs text-zinc-500">Manba: IMF World Economic Outlook (2024 bahosi), Misr Markaziy banki.</p>
      </Body>
    </Slide>
  );
}

const PILLARS = [
  {
    title: "Pul oʻtkazmalari",
    subtitle: "Chet eldagi ~10 mln misrlik",
    metric: "$29,5 mlrd",
    image: IMG("bazaar"),
    description: "Valyuta tushumining eng katta manbai (2024).",
    features: [
      "2024/25 moliya yili: rekord $36,5 mlrd (+55%)",
      "Asosan Saudiya Arabistoni va Fors koʻrfazi davlatlaridan",
      "Kurs erkinlashgach rasmiy kanallarga qaytdi",
    ],
    footnote: "Manba: Misr Markaziy banki",
  },
  {
    title: "Turizm",
    subtitle: "Piramidalar, Luksor, Qizil dengiz",
    metric: "15,7 mln",
    image: IMG("pyramids-boat"),
    description: "2024-yilda kelgan sayyohlar soni — tarixiy rekord.",
    features: [
      "Daromad: ≈ $14,4 mlrd (2023/24 m.y.)",
      "2025: ≈19 mln sayyoh, +21%",
      "Katta Misr muzeyi (GEM) — yangi magnit",
    ],
    footnote: "Manba: Misr Markaziy banki, Turizm vazirligi",
  },
  {
    title: "Suvaysh kanali",
    subtitle: "Yevropa ↔ Osiyo yoʻlagi",
    metric: "$10,25 mlrd",
    image: IMG("suez-iss"),
    description: "2023-yildagi rekord daromad — keyin keskin pasayish.",
    features: [
      "2024: ≈ $4 mlrd (−61%) — Qizil dengiz inqirozi",
      "Kemalar Afrika atrofidan aylanib oʻta boshladi",
      "Toʻgʻridan-toʻgʻri davlat byudjetiga tushadi",
    ],
    footnote: "Manba: Suvaysh kanali boshqarmasi",
  },
  {
    title: "Energetika",
    subtitle: "Gaz, neft va quyosh",
    metric: "Zohr koni",
    image: IMG("delta-night"),
    description: "2015-yilda topilgan Oʻrta yer dengizidagi eng yirik gaz koni.",
    features: [
      "Neft mahsulotlari va SPG — eksportning katta qismi",
      "Benban — dunyodagi yirik quyosh parklaridan biri",
      "Soʻnggi yillarda gaz qazib olish kamayib, import oshdi",
    ],
    footnote: "Foto: Nil deltasi kechasi, XKS (NASA)",
  },
  {
    title: "Qishloq xoʻjaligi",
    subtitle: "Nil vodiysi va deltasi",
    metric: "№1 apelsin",
    image: IMG("wheat"),
    description: "Misr — dunyodagi eng yirik apelsin eksportchisi.",
    features: [
      "Bandlikning ~20% i qishloq xoʻjaligida",
      "Mashhur uzun tolali “Misr paxtasi”",
      "Ammo bugʻdoyning katta qismi import qilinadi",
    ],
    footnote: "Foto: Doaa Adel, CC BY-SA 4.0",
  },
];

export function PillarsSlide() {
  return (
    <Slide>
      <SlideTitle eyebrow="4 · Valyuta qayerdan keladi?" title="Daromad ustunlari" />
      <p className="-mt-4 mb-6 text-zinc-400">Kartochka ustiga olib boring yoki bosing — orqa tomonida tafsilotlar.</p>
      <Body>
      <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {PILLARS.map((p, i) => (
          <Reveal key={p.title} delay={0.1 + i * 0.08} className="w-full max-w-[280px]">
            <CardFlip {...p} className="h-[380px] max-w-none" />
          </Reveal>
        ))}
      </div>
      </Body>
    </Slide>
  );
}

export function SuezSlide() {
  return (
    <Slide>
      <SlideTitle eyebrow="5 · Geografik renta" title="Suvaysh kanali" />
      <Body>
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <Reveal className="relative min-h-[240px] overflow-hidden rounded-3xl border border-sand-800/50 lg:min-h-[440px]">
          <img src={IMG("suez-iss")} alt="Suvaysh kanalini toʻsib qoʻygan Ever Given kemasi, kosmosdan" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-sm text-zinc-200">
            <p>
              <b className="text-sand-300">193 km</b> · 1869-yilda ochilgan · jahon dengiz savdosining{" "}
              <b className="text-sand-300">~12%</b> i shu yerdan oʻtardi.
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              2021-yil mart: “Ever Given” kemasi kanalni 6 kun toʻsdi. Foto: NASA, XKS.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
            <div className="mb-1 font-medium text-zinc-100">Kanal daromadi, mlrd AQSh dollari</div>
            <div className="mb-4 text-sm text-zinc-400">Kalendar yil boʻyicha</div>
            <div className="h-[300px] xl:h-[340px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SUEZ_REVENUE} margin={{ top: 24, right: 8, left: -12, bottom: 0 }}>
                  <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="year" tickLine={false} axisLine={{ stroke: "rgba(255,255,255,0.2)" }} tick={{ fill: "#a1a1aa", fontSize: 13 }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fill: "#a1a1aa", fontSize: 12 }} domain={[0, 12]} />
                  <Tooltip cursor={{ fill: "rgba(255,255,255,0.05)" }} content={<ChartTooltip unit=" mlrd $" />} />
                  <Bar dataKey="value" name="Daromad" fill={EGYPT_COLOR} radius={[4, 4, 0, 0]} maxBarSize={44}>
                    <LabelList dataKey="value" position="top" fill="#e4e4e7" fontSize={12} formatter={(v: unknown) => String(v).replace(".", ",")} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-red-900/50 bg-red-950/30 p-4 text-sm text-zinc-200">
            <b className="text-red-300">Qizil dengiz inqirozi (2023-yil oxiridan):</b> Yamandagi husiylarning kemalarga
            hujumlari tufayli tashuvchilar Umid burni orqali aylanib oʻta boshladi — 2024-yilda daromad{" "}
            <b>−61%</b> ga qisqardi.
          </div>
        </Reveal>
      </div>
      </Body>
    </Slide>
  );
}

const TIMELINE = [
  { year: "2016", title: "Funt erkin kursga oʻtkazildi", text: "IMF bilan $12 mlrdlik dastur; funt 2 barobar qadrsizlandi, subsidiyalar qisqartirildi." },
  { year: "2020", title: "COVID-19 zarbasi", text: "Turizm deyarli toʻxtadi, ammo iqtisodiyot musbat oʻsishni saqladi (+3,6%)." },
  { year: "2022–23", title: "Valyuta tanqisligi", text: "Ukrainadagi urush: bugʻdoy qimmatladi, xorijiy kapital chiqib ketdi. Inflyatsiya 2023-yil sentabrda 38% ga yetdi." },
  { year: "Fev 2024", title: "Ras al-Hikma bitimi", text: "BAA (ADQ) bilan $35 mlrdlik investitsiya — Misr tarixidagi eng katta toʻgʻridan-toʻgʻri investitsiya." },
  { year: "Mar 2024", title: "Katta devalvatsiya", text: "Funt ≈31 dan ≈49 EGP/$ ga tushdi, stavka +6 p.p., IMF dasturi $8 mlrd ga kengaytirildi." },
  { year: "2025", title: "Barqarorlashuv", text: "Inflyatsiya pasaydi, pul oʻtkazmalari rekord, Katta Misr muzeyi ochildi." },
];

export function ReformsSlide() {
  return (
    <Slide bg={IMG("sphinx-pyramid")} bgOpacity={0.35}>
      <SlideTitle eyebrow="6 · Inqirozlar va islohotlar" title="2016–2025 yillar" />
      <Body>
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-sand-500 via-sand-700 to-transparent md:left-0 md:right-0 md:top-[7px] md:bottom-auto md:h-px md:w-auto md:bg-gradient-to-r" />
        <ol className="grid gap-6 md:grid-cols-3 xl:grid-cols-6">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={0.15 + i * 0.1}>
              <li className="relative pl-8 md:pl-0 md:pt-8">
                <span className="absolute left-0 top-1 h-4 w-4 rotate-45 border-2 border-sand-400 bg-night md:top-0" />
                <div className="font-display text-2xl font-bold text-sand-300 xl:text-3xl">{t.year}</div>
                <div className="mt-1 font-semibold text-zinc-100 xl:text-lg">{t.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300 xl:text-base">{t.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
      </Body>
    </Slide>
  );
}
