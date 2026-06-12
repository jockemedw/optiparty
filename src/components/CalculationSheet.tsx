"use client";

import type { Breakdown } from "@/lib/model/calc";
import type { Dimension } from "@/lib/model/types";
import { fmt, pct } from "@/lib/format";

interface Props {
  breakdown: Breakdown;
  dimensions: Dimension[];
  g: number;
  color: string;
}

/** Kalkylremsan: redovisar varje räknesteg från råpoäng till slutpoäng. */
export default function CalculationSheet({ breakdown, dimensions, g, color }: Props) {
  const names = new Map(dimensions.map((d) => [d.id, d.name]));
  const maxContribution = Math.max(...breakdown.contributions.map((c) => c.contribution), 1);

  return (
    <div className="border-t border-dashed border-rule-strong bg-paper/60 px-5 py-5 font-mono text-xs sm:px-14">
      <p className="mb-3 text-[10px] tracking-[0.3em] text-ink-faint uppercase">
        Beräkningsredovisning · steg 1: politikpoäng = Σ(vikt × poäng)
      </p>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-rule text-left text-[10px] tracking-[0.15em] text-ink-faint uppercase">
            <th className="py-1.5 pr-2 font-normal">Dimension</th>
            <th className="py-1.5 pr-2 text-right font-normal">Vikt</th>
            <th className="py-1.5 pr-2 text-right font-normal">Poäng</th>
            <th className="py-1.5 pr-2 text-right font-normal">Bidrag</th>
            <th className="hidden w-1/4 py-1.5 font-normal sm:table-cell" aria-hidden />
          </tr>
        </thead>
        <tbody>
          {breakdown.contributions.map((c) => (
            <tr key={c.dimensionId} className="border-b border-rule/60 tabular-nums">
              <td className="py-1.5 pr-2">{names.get(c.dimensionId) ?? c.dimensionId}</td>
              <td className="py-1.5 pr-2 text-right text-ink-soft">{pct(c.weight)}</td>
              <td className="py-1.5 pr-2 text-right text-ink-soft">× {c.score}</td>
              <td className="py-1.5 pr-2 text-right font-medium">= {fmt(c.contribution, 2)}</td>
              <td className="hidden py-1.5 sm:table-cell" aria-hidden>
                <div
                  className="h-2"
                  style={{
                    width: `${(c.contribution / maxContribution) * 100}%`,
                    backgroundColor: color,
                    opacity: 0.85,
                  }}
                />
              </td>
            </tr>
          ))}
          <tr className="tabular-nums">
            <td className="py-2 pr-2 font-medium">Politikpoäng</td>
            <td className="py-2 pr-2 text-right text-ink-faint" colSpan={2}>
              Σ
            </td>
            <td className="border-t-2 border-ink py-2 pr-2 text-right font-semibold">
              {fmt(breakdown.policyScore, 2)}
            </td>
            <td className="hidden sm:table-cell" aria-hidden />
          </tr>
        </tbody>
      </table>

      <p className="mt-4 mb-2 text-[10px] tracking-[0.3em] text-ink-faint uppercase">
        Steg 2: slutpoäng = politikpoäng × (1 − g + g × f)
      </p>
      <div className="flex flex-col gap-1 tabular-nums">
        <p className="text-ink-soft">
          genomförbarhetsfaktor f = {fmt(breakdown.feasibilityFactor, 2)} · genomslag g ={" "}
          {fmt(g, 2)}
        </p>
        <p className="text-ink-soft">
          multiplikator = 1 − {fmt(g, 2)} + {fmt(g, 2)} × {fmt(breakdown.feasibilityFactor, 2)} ={" "}
          <span className="font-medium text-ink">{fmt(breakdown.multiplier, 2)}</span>
        </p>
        <p>
          slutpoäng = {fmt(breakdown.policyScore, 2)} × {fmt(breakdown.multiplier, 2)} ={" "}
          <strong className="text-sm font-semibold">{fmt(breakdown.finalScore, 2)}</strong>
        </p>
      </div>
    </div>
  );
}
