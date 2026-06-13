"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { explainParty, type RankedParty, type Weights } from "@/lib/model/calc";
import type { Dimension } from "@/lib/model/types";
import { fmt } from "@/lib/format";
import { displayColor } from "@/lib/color";
import CalculationSheet from "@/components/CalculationSheet";

interface Props {
  ranked: RankedParty[];
  dimensions: Dimension[];
  normalized: Weights;
  g: number;
}

export default function RankingList({ ranked, dimensions, normalized, g }: Props) {
  const [open, setOpen] = useState<string | null>(null);
  const maxScore = Math.max(...ranked.map((r) => r.finalScore), 1);

  return (
    <ol className="mt-4 border-t border-ink">
      {ranked.map((r, i) => {
        const color = displayColor(r.party.color);
        const isOpen = open === r.party.id;
        return (
          <motion.li
            layout="position"
            key={r.party.id}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className="border-b border-rule bg-card/50"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : r.party.id)}
              className="group relative grid w-full cursor-pointer grid-cols-[2rem_1fr_auto] items-baseline gap-x-4 overflow-hidden px-4 py-4 text-left hover:bg-card sm:grid-cols-[2.5rem_1fr_auto_auto] sm:px-5"
            >
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-[3px]"
                style={{ width: `${(r.finalScore / maxScore) * 100}%`, backgroundColor: color }}
              />
              <span className="font-mono text-sm text-ink-faint tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-semibold tracking-tight sm:text-xl" style={{ color }}>
                {r.party.name}
                <span className="ml-2 font-mono text-xs font-normal text-ink-faint">
                  {r.party.abbreviation}
                </span>
              </span>
              {g > 0 && (
                <span className="hidden font-mono text-[11px] text-ink-faint tabular-nums sm:inline">
                  {fmt(r.policyScore)} × {fmt(1 - g + g * r.party.feasibility.factor, 2)} =
                </span>
              )}
              <span className="font-mono text-lg font-semibold tabular-nums">
                {fmt(r.finalScore)}
                <span
                  aria-hidden
                  className="ml-3 inline-block text-xs text-ink-faint transition-transform group-hover:text-stamp"
                  style={{ transform: isOpen ? "rotate(180deg)" : undefined }}
                >
                  ▼
                </span>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <CalculationSheet
                    breakdown={explainParty(r.party, normalized, g)}
                    dimensions={dimensions}
                    party={r.party}
                    g={g}
                    color={color}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        );
      })}
    </ol>
  );
}
