"use client";

import { fmt } from "@/lib/format";

interface Props {
  on: boolean;
  g: number;
  onActivate: () => void;
  onDeactivate: () => void;
  onChangeG: (g: number) => void;
}

/** Genomförbarheten är av som default. Knappen slår på den (g → fullt) och fäller
 *  fram styrke-reglaget, som är redigerbart direkt — den mest subjektiva faktorn
 *  ligger inte bakom upplåsningen av värderingarna. */
export default function FeasibilityControl({ on, g, onActivate, onDeactivate, onChangeG }: Props) {
  if (!on) {
    return (
      <button
        type="button"
        onClick={onActivate}
        className="group w-full cursor-pointer border border-dashed border-rule-strong bg-card px-6 py-4 text-left transition-all hover:border-ink hover:border-solid hover:shadow-[4px_4px_0_0_#1c1914] hover:-translate-y-0.5"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-ink-faint uppercase">
          Av · slutpoäng = ren politikpoäng
        </span>
        <span className="mt-1 block text-lg font-medium">
          Räkna in genomförbarheten? →
        </span>
        <span className="mt-1 block text-sm font-light text-ink-faint italic">
          Hur troligt det är att ett parti får igenom sin politik. Den mest subjektiva
          faktorn — därför avstängd tills du själv väljer in den.
        </span>
      </button>
    );
  }

  return (
    <section
      aria-label="Genomförbarhetens genomslag"
      className="border border-ink bg-card p-6 shadow-[4px_4px_0_0_#1c1914] sm:p-8"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-rule pb-4">
        <h2 className="font-mono text-[11px] tracking-[0.35em] text-stamp uppercase">
          Genomförbarhet — inräknad
        </h2>
        <button
          type="button"
          onClick={onDeactivate}
          className="cursor-pointer font-mono text-[11px] tracking-[0.15em] text-ink-faint uppercase underline decoration-rule-strong underline-offset-2 hover:text-stamp"
        >
          Räkna inte in
        </button>
      </div>

      <label className="mt-6 flex flex-col gap-1.5">
        <span className="flex items-baseline justify-between gap-4">
          <span
            className="font-medium"
            title="Hur mycket partiets förmåga att faktiskt genomföra sin politik ska påverka."
          >
            Genomförbarhetens genomslag <span className="font-mono text-xs text-ink-faint">(g)</span>
          </span>
          <span className="font-mono text-xs text-ink-soft tabular-nums">{fmt(g, 2)}</span>
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(g * 100)}
          style={{ "--fill": `${Math.round(g * 100)}%` } as React.CSSProperties}
          onChange={(e) => onChangeG(Number(e.target.value) / 100)}
        />
        <span className="font-mono text-[11px] text-ink-faint">
          g = 0: ren politikpoäng · g = 1: full multiplikation med genomförbarhetsfaktorn
        </span>
      </label>
    </section>
  );
}
