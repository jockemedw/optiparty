"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { dataset, dimensionIds } from "@/data/dataset";
import { rankParties } from "@/lib/model/calc";
import { defaultState, queryToState, stateToQuery, type WeightState } from "@/lib/model/url";
import RankingList from "@/components/RankingList";
import WeightPanel from "@/components/WeightPanel";

export default function VerdictBoard() {
  const searchParams = useSearchParams();
  const initial = useMemo(() => queryToState(new URLSearchParams(searchParams.toString()), dimensionIds), [searchParams]);
  const [state, setState] = useState<WeightState>(initial);
  const [unlocked, setUnlocked] = useState(false);
  const [shareLabel, setShareLabel] = useState("Kopiera länk till dina vikter");

  const ranked = useMemo(() => rankParties(dataset, state.rawWeights, state.g), [state]);
  const winner = ranked[0];

  async function share() {
    const url = `${window.location.origin}${window.location.pathname}?${stateToQuery(state, dimensionIds)}`;
    window.history.replaceState(null, "", url);
    try {
      await navigator.clipboard.writeText(url);
      setShareLabel("Kopierad!");
    } catch {
      setShareLabel("Länken ligger i adressfältet");
    }
    setTimeout(() => setShareLabel("Kopiera länk till dina vikter"), 2000);
  }

  return (
    <div className="px-4 py-16 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        Enligt modellen, bedömning per {dataset.assessmentDate}
      </p>
      <h1 className="mt-6 text-lg uppercase tracking-widest text-zinc-400">Sveriges optimala parti är</h1>
      <p className="mt-4 text-5xl font-black sm:text-7xl" style={{ color: winner.party.color }}>
        {winner.party.name}
      </p>
      <p className="mt-3 font-mono text-zinc-400">
        slutpoäng {winner.finalScore.toFixed(1)} av 100
      </p>

      {!unlocked && (
        <button
          type="button"
          onClick={() => setUnlocked(true)}
          className="mt-10 rounded-full border border-zinc-600 px-6 py-3 text-sm hover:bg-zinc-800"
        >
          🔒 Håller du inte med? Lås upp värderingarna
        </button>
      )}

      {unlocked && (
        <WeightPanel
          dimensions={dataset.dimensions}
          state={state}
          onChange={setState}
          onReset={() => setState(defaultState(dimensionIds))}
          onShare={share}
          shareLabel={shareLabel}
        />
      )}

      <RankingList ranked={ranked} />
    </div>
  );
}
