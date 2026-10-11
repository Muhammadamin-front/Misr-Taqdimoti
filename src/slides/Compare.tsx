import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { COMPARISON, COMPARISON_TEXT, GDP_GROWTH, IMG, INFLATION, SECTORS } from "@/data";
import { ChartTooltip } from "./charts";
import { Body, CountryKey, EGYPT_COLOR, Reveal, Slide, SlideTitle, UZB_COLOR } from "./common";

export function ComparisonSlide() {
  return (
    <AuroraBackground className="bg-night dark:bg-night items-stretch justify-start text-zinc-100">
      <div className="relative z-10 h-full w-full overflow-y-auto px-6 pb-24 pt-10 md:px-14 md:pt-14">
        <SlideTitle eyebrow="7 · Qiyosiy tahlil, 2024" title="Misr va Oʻzbekiston" />
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] gap-4 border-b border-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              <span>Koʻrsatkich</span>
              <span className="text-sand-300">🇪🇬 Misr</span>
              <span className="text-lapis-300">🇺🇿 Oʻzbekiston</span>
            </div>
            {COMPARISON.map((row, i) => {
              const max = Math.max(row.e, row.u);
              return (
                <Reveal key={row.label} delay={0.08 + i * 0.05}>
                  <div className="grid grid-cols-[1.1fr_1fr_1fr] items-center gap-4 border-b border-white/5 px-5 py-2.5 last:border-0">
                    <span className="text-zinc-300">{row.label}</span>
                    <Cell text={row.egypt} share={row.e / max} color={EGYPT_COLOR} />
                    <Cell text={row.uzbekistan} share={row.u / max} color={UZB_COLOR} />
                  </div>
                </Reveal>
              );
            })}
            {COMPARISON_TEXT.map((row) => (
              <div key={row.label} className="grid grid-cols-[1.1fr_1fr_1fr] gap-4 border-t border-white/5 px-5 py-2.5 text-sm">
                <span className="text-zinc-300">{row.label}</span>
                <span className="text-zinc-200">{row.egypt}</span>
                <span className="text-zinc-200">{row.uzbekistan}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <p className="mt-3 text-xs text-zinc-500">
          Manbalar: IMF WEO, Misr Markaziy banki, CAPMAS, Oʻzbekiston Statistika agentligi va Markaziy banki. Qiymatlar yaxlitlangan.
        </p>
      </div>
    </AuroraBackground>
  );
}

function Cell({ text, share, color }: { text: string; share: number; color: string }) {
  return (
    <div>
      <div className="font-mono text-sm tabular-nums text-zinc-100 md:text-base">{text}</div>
      <div className="mt-1 h-1.5 w-full rounded-full bg-white/5">
        <div className="h-full rounded-full" style={{ width: `${Math.max(share * 100, 3)}%`, background: color }} />
      </div>
    </div>
  );
}

const AXIS = {
  tickLine: false,
  tick: { fill: "#a1a1aa", fontSize: 12 },
};

function TrendChart({
  title,
  subtitle,
  data,
}: {
  title: string;
  subtitle: string;
  data: { year: string; egypt: number; uzbekistan: number }[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
      <div className="font-medium text-zinc-100">{title}</div>
      <div className="mb-3 text-sm text-zinc-400">{subtitle}</div>
      <div className="h-[280px] xl:h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 16, right: 44, left: -16, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
            <XAxis dataKey="year" {...AXIS} axisLine={{ stroke: "rgba(255,255,255,0.2)" }} />
            <YAxis {...AXIS} axisLine={false} unit="%" />
            <Tooltip content={<ChartTooltip unit="%" />} cursor={{ stroke: "rgba(255,255,255,0.25)" }} />
            <Legend iconType="circle" wrapperStyle={{ fontSize: 13, color: "#d4d4d8" }} />
            <Line type="monotone" dataKey="egypt" name="Misr" stroke={EGYPT_COLOR} strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: "#14100c" }} activeDot={{ r: 6 }}>
              <LabelList dataKey="egypt" content={<EndLabel last={data.length - 1} />} />
            </Line>
            <Line type="monotone" dataKey="uzbekistan" name="Oʻzbekiston" stroke={UZB_COLOR} strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: "#14100c" }} activeDot={{ r: 6 }}>
              <LabelList dataKey="uzbekistan" content={<EndLabel last={data.length - 1} />} />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/** Faqat oxirgi nuqtaga qiymat yoziladi — har bir nuqtaga emas. */
function EndLabel(props: { x?: number | string; y?: number | string; value?: number | string; index?: number; last: number }) {
  const { x, y, value, index, last } = props;
  if (index !== last || x == null || y == null) return null;
  return (
    <text x={Number(x) + 8} y={Number(y) + 4} fill="#e4e4e7" fontSize={12}>
      {String(value).replace(".", ",")}%
    </text>
  );
}

export function TrendsSlide() {
  return (
    <Slide>
      <SlideTitle eyebrow="8 · Dinamika, 2019–2024" title="Oʻsish va inflyatsiya" />
      <Body>
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <TrendChart title="Real YaIM oʻsishi, %" subtitle="Oʻzbekiston barqaror 5–7% atrofida oʻsmoqda" data={GDP_GROWTH} />
        </Reveal>
        <Reveal delay={0.25}>
          <TrendChart title="Inflyatsiya, %" subtitle="Misrda 2023–24 yillarda valyuta inqirozi narxlarni keskin oshirdi" data={INFLATION} />
        </Reveal>
      </div>
      <p className="mt-4 text-xs text-zinc-500">
        Misr: moliya yili (iyul–iyun), IMF; inflyatsiya — yillik oʻrtacha. Oʻzbekiston: Statistika agentligi; inflyatsiya — yil oxiri (Markaziy bank).
      </p>
      </Body>
    </Slide>
  );
}

const SIMILAR = [
  "Aholisi yosh va tez oʻsadi — ish oʻrinlariga talab katta",
  "Mehnat migrantlarining pul oʻtkazmalari — asosiy valyuta manbai",
  "Valyuta kursini erkinlashtirish: Misr 2016/2024, Oʻzbekiston 2017",
  "Paxta — ikkala mamlakat uchun tarixiy strategik ekin",
  "Boy tarixiy meros — turizm uchun katta salohiyat",
];

const DIFFERENT = [
  "Misr iqtisodiyoti ~3,3 barobar katta, ammo jon boshiga daromad yaqin",
  "Misrda xizmatlar ulushi yuqori, Oʻzbekistonda qishloq xoʻjaligi",
  "Misr — dengiz yoʻllari markazi; Oʻzbekiston — ikki marta dengizga chiqmagan",
  "Oʻzbekistonda oʻsish tezroq, inflyatsiya ancha past (2024)",
  "Misr tashqi qarzi va qarz xizmati yuki ancha ogʻir",
];

export function SectorsSlide() {
  return (
    <Slide>
      <SlideTitle eyebrow="9 · Tuzilma" title="Oʻxshash va farqli" />
      <Body>
      <div className="grid gap-6 xl:grid-cols-[1.1fr_1fr]">
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
            <div className="font-medium text-zinc-100">YaIM tarkibi, % (taxminiy)</div>
            <div className="mb-3 flex gap-4 text-sm">
              <CountryKey country="egypt" />
              <CountryKey country="uzbekistan" />
            </div>
            <div className="h-[300px] xl:h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SECTORS} margin={{ top: 24, right: 8, left: -16, bottom: 0 }} barGap={2}>
                  <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="sector" {...AXIS} axisLine={{ stroke: "rgba(255,255,255,0.2)" }} />
                  <YAxis {...AXIS} axisLine={false} unit="%" domain={[0, 60]} />
                  <Tooltip cursor={{ fill: "rgba(255,255,255,0.05)" }} content={<ChartTooltip unit="%" />} />
                  <Bar dataKey="egypt" name="Misr" fill={EGYPT_COLOR} radius={[4, 4, 0, 0]} maxBarSize={48}>
                    <LabelList dataKey="egypt" position="top" fill="#e4e4e7" fontSize={12} formatter={(v: unknown) => `${v}%`} />
                  </Bar>
                  <Bar dataKey="uzbekistan" name="Oʻzbekiston" fill={UZB_COLOR} radius={[4, 4, 0, 0]} maxBarSize={48}>
                    <LabelList dataKey="uzbekistan" position="top" fill="#e4e4e7" fontSize={12} formatter={(v: unknown) => `${v}%`} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          <ListCard title="Oʻxshashliklar" items={SIMILAR} accent="text-emerald-300" delay={0.2} />
          <ListCard title="Farqlar" items={DIFFERENT} accent="text-sand-300" delay={0.3} />
        </div>
      </div>
      </Body>
    </Slide>
  );
}

function ListCard({ title, items, accent, delay }: { title: string; items: string[]; accent: string; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="h-full rounded-2xl border border-white/10 bg-black/40 p-5">
        <h3 className={`mb-3 font-display text-lg font-bold uppercase tracking-wide ${accent}`}>{title}</h3>
        <ul className="space-y-2 text-sm text-zinc-300 xl:text-base">
          {items.map((it) => (
            <li key={it} className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-current opacity-60" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

const LESSONS = [
  {
    title: "Turizmni eksport sifatida koʻrish",
    text: "Misr 2024-yilda 15,7 mln sayyoh qabul qildi. Samarqand, Buxoro, Xiva ham shunday brendga aylanishi mumkin — muzey, aviaqatnov va servis sifati hal qiladi.",
  },
  {
    title: "Valyuta islohotini bosqichma-bosqich",
    text: "Misrdagi bir martalik keskin devalvatsiyalar 30%+ inflyatsiyaga olib keldi. Oʻzbekiston 2017-yildan beri kursni ancha silliq boshqarib kelmoqda.",
  },
  {
    title: "Qarz va mega-loyihalar xavfi",
    text: "Misr davlat qarzi YaIMning ~90% iga yaqin; foiz toʻlovlari byudjetning katta qismini yeydi. Har bir yirik loyiha qaytimi hisoblanishi shart.",
  },
  {
    title: "Pul oʻtkazmalarini investitsiyaga",
    text: "Ikkala davlatda ham migrantlar pullari asosan isteʼmolga ketadi. Ularni bank, obligatsiya va kichik biznesga yoʻnaltirish — umumiy vazifa.",
  },
];

export function LessonsSlide() {
  return (
    <Slide>
      <SlideTitle eyebrow="10 · Saboqlar" title="Oʻzbekiston uchun xulosalar" />
      <Body>
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="grid min-h-[260px] grid-rows-2 gap-3 xl:min-h-[520px]">
          <Photo src={IMG("pyramids")} caption="Giza, Misr" />
          <Photo src={IMG("registan")} caption="Registon, Samarqand" />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {LESSONS.map((l, i) => (
            <Reveal key={l.title} delay={0.15 + i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-black/40 p-5 transition-colors hover:border-lapis-500/60">
                <div className="mb-2 font-display text-3xl font-bold text-lapis-400/70">0{i + 1}</div>
                <h3 className="font-semibold text-zinc-100 xl:text-lg">{l.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300 xl:text-base">{l.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      </Body>
    </Slide>
  );
}

function Photo({ src, caption }: { src: string; caption: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10">
      <img src={src} alt={caption} className="absolute inset-0 h-full w-full object-cover" />
      <span className="absolute bottom-2 left-2 rounded-full bg-black/60 px-3 py-1 text-xs text-zinc-200 backdrop-blur">{caption}</span>
    </div>
  );
}
