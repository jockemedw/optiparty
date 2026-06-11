"use client";

import type { Dimension } from "@/lib/model/types";
import type { WeightState } from "@/lib/model/url";

interface Props {
  dimensions: Dimension[];
  state: WeightState;
  onChange: (next: WeightState) => void;
  onReset: () => void;
  onShare: () => void;
  shareLabel: string;
}

export default function WeightPanel({ dimensions, state, onChange, onReset, onShare, shareLabel }: Props) {
  return (
    <section aria-label="Justera värderingarna" className="mx-auto mt-10 max-w-xl rounded border border-zinc-700 bg-zinc-900 p-6">
      <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">Dina värderingar</h2>
      <div className="flex flex-col gap-4">
        {dimensions.map((d) => (
          <label key={d.id} className="flex flex-col gap-1">
            <span className="flex justify-between text-sm">
              <span title={d.shortDescription}>{d.name}</span>
              <span className="font-mono text-zinc-400">{state.rawWeights[d.id]}</span>
            </span>
            <input
              type="range"
              min={0}
              max={100}
              value={state.rawWeights[d.id]}
              onChange={(e) =>
                onChange({ ...state, rawWeights: { ...state.rawWeights, [d.id]: Number(e.target.value) } })
              }
            />
          </label>
        ))}
        <label className="mt-2 flex flex-col gap-1 border-t border-zinc-800 pt-4">
          <span className="flex justify-between text-sm">
            <span title="Hur mycket partiets förmåga att faktiskt genomföra sin politik ska påverka.">
              Genomförbarhetens genomslag
            </span>
            <span className="font-mono text-zinc-400">{Math.round(state.g * 100)}%</span>
          </span>
          <input
            type="range"
            min={0}
            max={100}
            value={Math.round(state.g * 100)}
            onChange={(e) => onChange({ ...state, g: Number(e.target.value) / 100 })}
          />
        </label>
      </div>
      <div className="mt-6 flex gap-3">
        <button onClick={onReset} className="rounded border border-zinc-600 px-3 py-1 text-sm hover:bg-zinc-800">
          Återställ
        </button>
        <button onClick={onShare} className="rounded border border-zinc-600 px-3 py-1 text-sm hover:bg-zinc-800">
          {shareLabel}
        </button>
      </div>
    </section>
  );
}
