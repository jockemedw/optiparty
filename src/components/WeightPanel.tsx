"use client";

import type { Dimension } from "@/lib/model/types";
import type { Weights } from "@/lib/model/calc";
import type { WeightState } from "@/lib/model/url";
import { fmt, pct } from "@/lib/format";

interface Props {
  dimensions: Dimension[];
  state: WeightState;
  normalized: Weights;
  onChange: (next: WeightState) => void;
  onReset: () => void;
  onShare: () => void;
  shareLabel: string;
}

export default function WeightPanel({ dimensions, state, normalized, onChange, onReset, onShare, shareLabel }: Props) {
  return (
    <section aria-label="Justera värderingarna" className="border border-ink bg-card p-6 shadow-[4px_4px_0_0_#1c1914] sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-rule pb-4">
        <h2 className="font-mono text-[11px] tracking-[0.35em] text-stamp uppercase">
          Bilaga A — dina värderingar
        </h2>
        <p className="font-mono text-[11px] text-ink-faint">
          råvikt 0–100 → normaliseras till andel av 1
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-5">
        {dimensions.map((d) => (
          <label key={d.id} className="flex flex-col gap-1.5">
            <span className="flex items-baseline justify-between gap-4">
              <span className="font-medium" title={d.shortDescription}>
                {d.name}
              </span>
              <span className="font-mono text-xs text-ink-soft tabular-nums">
                {state.rawWeights[d.id]}
                <span className="text-ink-faint"> → {pct(normalized[d.id])}</span>
              </span>
            </span>
            <input
              type="range"
              min={0}
              max={100}
              value={state.rawWeights[d.id]}
              style={{ "--fill": `${state.rawWeights[d.id]}%` } as React.CSSProperties}
              onChange={(e) =>
                onChange({ ...state, rawWeights: { ...state.rawWeights, [d.id]: Number(e.target.value) } })
              }
            />
          </label>
        ))}

        <label className="mt-2 flex flex-col gap-1.5 border-t border-rule pt-5">
          <span className="flex items-baseline justify-between gap-4">
            <span
              className="font-medium"
              title="Hur mycket partiets förmåga att faktiskt genomföra sin politik ska påverka."
            >
              Genomförbarhetens genomslag <span className="font-mono text-xs text-ink-faint">(g)</span>
            </span>
            <span className="font-mono text-xs text-ink-soft tabular-nums">{fmt(state.g, 2)}</span>
          </span>
          <input
            type="range"
            min={0}
            max={100}
            value={Math.round(state.g * 100)}
            style={{ "--fill": `${Math.round(state.g * 100)}%` } as React.CSSProperties}
            onChange={(e) => onChange({ ...state, g: Number(e.target.value) / 100 })}
          />
          <span className="font-mono text-[11px] text-ink-faint">
            g = 0: ren politikpoäng · g = 1: full multiplikation med genomförbarhetsfaktorn
          </span>
        </label>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onReset}
          className="cursor-pointer border border-ink px-4 py-2 font-mono text-xs tracking-[0.15em] uppercase hover:bg-ink hover:text-paper"
        >
          Återställ
        </button>
        <button
          type="button"
          onClick={onShare}
          className="cursor-pointer border border-ink px-4 py-2 font-mono text-xs tracking-[0.15em] uppercase hover:bg-ink hover:text-paper"
        >
          {shareLabel}
        </button>
      </div>
    </section>
  );
}
