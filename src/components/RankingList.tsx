"use client";

import { motion } from "motion/react";
import type { RankedParty } from "@/lib/model/calc";

export default function RankingList({ ranked }: { ranked: RankedParty[] }) {
  return (
    <ol className="mx-auto mt-10 flex max-w-xl flex-col gap-2">
      {ranked.map((r, i) => (
        <motion.li
          layout
          key={r.party.id}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex items-center gap-4 rounded border border-zinc-800 bg-zinc-900 px-4 py-3"
        >
          <span className="w-6 text-right font-mono text-zinc-500">{i + 1}</span>
          <span aria-hidden className="h-3 w-3 rounded-full" style={{ backgroundColor: r.party.color }} />
          <span className="flex-1 font-medium">{r.party.name}</span>
          <span className="font-mono tabular-nums text-zinc-300">{r.finalScore.toFixed(1)}</span>
        </motion.li>
      ))}
    </ol>
  );
}
