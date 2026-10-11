type TooltipEntry = { name?: string; value?: number | string; color?: string; dataKey?: string | number };

/** Recharts uchun umumiy tooltip: qiymat matn rangida, rang faqat belgida. */
export function ChartTooltip({
  active,
  payload,
  label,
  unit = "",
}: {
  active?: boolean;
  payload?: TooltipEntry[];
  label?: string | number;
  unit?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-white/10 bg-zinc-950/95 px-3 py-2 text-sm shadow-xl">
      <div className="mb-1 font-semibold text-zinc-100">{label}</div>
      {payload.map((p) => (
        <div key={String(p.dataKey)} className="flex items-center gap-2 text-zinc-300">
          <span className="h-2 w-2 rounded-full" style={{ background: p.color }} />
          <span>{p.name}</span>
          <span className="ml-auto pl-4 font-mono tabular-nums text-zinc-100">
            {String(p.value).replace(".", ",")}
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
}
