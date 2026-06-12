"use client";

import { useState } from "react";
import type { Breakdown } from "@/lib/model/calc";
import type { Dimension, Party, PartyComponent, QuestionBankEntry, ScoreEntry } from "@/lib/model/types";
import { fmt, pct } from "@/lib/format";

interface Props {
  breakdown: Breakdown;
  dimensions: Dimension[];
  party: Party;
  g: number;
  color: string;
}

function SourceLinks({ entry }: { entry: Pick<ScoreEntry, "sources"> }) {
  return (
    <p className="mt-2 font-mono text-[11px]">
      {entry.sources.map((s) => (
        <a
          key={s.url}
          href={s.url}
          className="mr-4 text-ink-faint underline decoration-rule-strong underline-offset-2 hover:text-stamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          {s.title} ↗
        </a>
      ))}
    </p>
  );
}

/** Kalkylremsan: redovisar varje räknesteg från råpoäng till slutpoäng,
 *  med utfällbart resonemang (motivering + källor) bakom varje siffra. */
export default function CalculationSheet({ breakdown, dimensions, party, g, color }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);
  const dims = new Map(dimensions.map((d) => [d.id, d]));
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
          {breakdown.contributions.map((c) => {
            const dim = dims.get(c.dimensionId);
            const entry = party.scores[c.dimensionId];
            const isOpen = openId === c.dimensionId;
            return (
              <FragmentRow
                key={c.dimensionId}
                isOpen={isOpen}
                onToggle={() => setOpenId(isOpen ? null : c.dimensionId)}
                row={
                  <>
                    <td className="py-1.5 pr-2">
                      <span className="underline decoration-rule-strong decoration-dotted underline-offset-4">
                        {dim?.name ?? c.dimensionId}
                      </span>
                      <span aria-hidden className="ml-2 text-ink-faint">
                        {isOpen ? "▾" : "▸"}
                      </span>
                    </td>
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
                  </>
                }
                detail={
                  <div className="border-l-2 py-3 pl-4" style={{ borderColor: color }}>
                    {dim && (
                      <p className="text-[11px] text-ink-faint">
                        MÄTER: <span className="normal-case">{dim.measures}</span>
                      </p>
                    )}
                    <p className="mt-2 font-serif text-sm leading-relaxed text-ink-soft">
                      {entry.motivation}
                    </p>
                    <SourceLinks entry={entry} />
                    {entry.components && dim?.questionBank && (
                      <ComponentTable bank={dim.questionBank} components={entry.components} />
                    )}
                  </div>
                }
              />
            );
          })}
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
        <button
          type="button"
          aria-expanded={openId === "feasibility"}
          onClick={() => setOpenId(openId === "feasibility" ? null : "feasibility")}
          className="cursor-pointer text-left text-ink-soft hover:text-ink"
        >
          genomförbarhetsfaktor f ={" "}
          <span className="underline decoration-rule-strong decoration-dotted underline-offset-4">
            {fmt(breakdown.feasibilityFactor, 2)}
          </span>{" "}
          · genomslag g = {fmt(g, 2)}{" "}
          <span aria-hidden className="text-ink-faint">
            {openId === "feasibility" ? "▾" : "▸"}
          </span>
        </button>
        {openId === "feasibility" && (
          <div className="my-1 border-l-2 border-stamp py-3 pl-4">
            <p className="text-[11px] text-ink-faint">
              RUBRIK: raw = 0.45·E + 0.25·P + 0.30·T · faktor = 0.3 + 0.7·raw
            </p>
            <p className="mt-2 font-serif text-sm leading-relaxed text-ink-soft">
              {party.feasibility.motivation}
            </p>
            <SourceLinks entry={party.feasibility} />
          </div>
        )}
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

/** Frågenivån: dimensionspoängen uppbyggd ur frågebanken — en rad per
 *  bankfråga med partiets validerade position, poäng och vikt. */
function ComponentTable({ bank, components }: { bank: QuestionBankEntry[]; components: PartyComponent[] }) {
  const totalWeight = bank.reduce((sum, q) => sum + q.weight, 0);
  const byId = new Map(components.map((c) => [c.componentId, c]));
  return (
    <div className="mt-4">
      <p className="text-[10px] tracking-[0.3em] text-ink-faint uppercase">
        Delkomponenter · dimensionspoäng = Σ(vikt × frågepoäng)
      </p>
      <ul className="mt-2 flex flex-col">
        {bank.map((q) => {
          const c = byId.get(q.id);
          if (!c) return null;
          const w = q.weight / totalWeight;
          return (
            <li key={q.id} className="border-b border-rule/60 py-2.5 last:border-b-0">
              <p className="font-serif text-sm leading-snug">{q.question}</p>
              <p className="mt-1 font-serif text-sm leading-relaxed text-ink-soft">{c.position}</p>
              <p className="mt-1.5 text-[11px] text-ink-faint tabular-nums">
                {q.origin} · vikt {pct(w)} × poäng {c.score} ={" "}
                <span className="font-medium text-ink">{fmt(w * c.score, 2)}</span>
                {c.sources.map((s) => (
                  <a key={s.url} href={s.url} className="ml-3 underline decoration-rule-strong underline-offset-2 hover:text-stamp" target="_blank" rel="noopener noreferrer">
                    {s.title} ↗
                  </a>
                ))}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function FragmentRow({
  row,
  detail,
  isOpen,
  onToggle,
}: {
  row: React.ReactNode;
  detail: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <>
      <tr
        className="cursor-pointer border-b border-rule/60 tabular-nums hover:bg-card"
        onClick={onToggle}
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        {row}
      </tr>
      {isOpen && (
        <tr className="border-b border-rule/60">
          <td colSpan={5} className="pb-1">
            {detail}
          </td>
        </tr>
      )}
    </>
  );
}
