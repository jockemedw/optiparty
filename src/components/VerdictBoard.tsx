"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { dataset, dimensionIds } from "@/data/dataset";
import { normalizeWeights, rankParties } from "@/lib/model/calc";
import { ACTIVE_G, defaultState, queryToState, stateToQuery, type WeightState } from "@/lib/model/url";
import { fmt } from "@/lib/format";
import { displayColor } from "@/lib/color";
import RankingList from "@/components/RankingList";
import WeightPanel from "@/components/WeightPanel";
import FeasibilityControl from "@/components/FeasibilityControl";

export default function VerdictBoard() {
  const searchParams = useSearchParams();
  const initial = useMemo(() => queryToState(new URLSearchParams(searchParams.toString()), dimensionIds), [searchParams]);
  const [state, setState] = useState<WeightState>(initial);
  const [unlocked, setUnlocked] = useState(false);
  const [feasibilityOn, setFeasibilityOn] = useState(initial.g > 0);
  const [shareLabel, setShareLabel] = useState("Kopiera länk till dina vikter");

  const normalized = useMemo(() => normalizeWeights(state.rawWeights), [state.rawWeights]);
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
    <div className="mx-auto max-w-5xl px-5 pt-16 pb-24 sm:pt-24">
      <section className="relative">
        <p className="rise rise-1 font-mono text-[11px] tracking-[0.35em] text-ink-faint uppercase">
          Utlåtande · bedömning per {dataset.assessmentDate}
        </p>
        <h1 className="rise rise-2 mt-8 max-w-xl text-2xl leading-snug font-light text-ink-soft italic sm:text-3xl">
          Härmed kungörs att av riksdagens {dataset.parties.length} tillgängliga kandidater,
          efter viktad sammanvägning av sex etiska dimensioner, den högsta framräknade poängen
          tillfaller
        </h1>
        <p
          lang="sv"
          className="rise rise-3 mt-6 text-[clamp(2.6rem,9.5vw,5.6rem)] leading-[0.98] font-black tracking-tight hyphens-auto"
          style={{ color: displayColor(winner.party.color) }}
        >
          {winner.party.name}
        </p>
        <div className="rise rise-4 mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-2 border-y border-ink py-4 font-mono text-sm">
          <span>
            SLUTPOÄNG <strong className="text-2xl font-semibold">{fmt(winner.finalScore)}</strong>
            <span className="text-ink-faint"> / 100</span>
          </span>
          {state.g > 0 ? (
            <span className="text-ink-soft">
              = politikpoäng {fmt(winner.policyScore)} × genomförbarhet{" "}
              {fmt(1 - state.g + state.g * winner.party.feasibility.factor, 2)}
            </span>
          ) : (
            <span className="text-ink-soft">= ren politikpoäng · genomförbarhet ej inräknad</span>
          )}
        </div>
        <p className="rise rise-4 mt-3 text-sm font-light text-ink-faint italic">
          Ett optimum bland befintliga alternativ — inte ett ideal. Det perfekta partiet ställer
          inte upp i val.
        </p>
        <span
          aria-hidden
          className="stamp-in absolute -top-6 right-0 hidden rotate-[-8deg] rounded border-[3px] border-stamp px-3 py-1.5 font-mono text-xs font-semibold tracking-[0.3em] text-stamp uppercase opacity-80 sm:block"
        >
          Enligt modellen
        </span>
      </section>

      <section className="rise rise-5 mt-12">
        <FeasibilityControl
          on={feasibilityOn}
          g={state.g}
          onActivate={() => {
            setFeasibilityOn(true);
            setState((s) => ({ ...s, g: ACTIVE_G }));
          }}
          onDeactivate={() => {
            setFeasibilityOn(false);
            setState((s) => ({ ...s, g: 0 }));
          }}
          onChangeG={(g) => setState((s) => ({ ...s, g }))}
        />
      </section>

      <section className="rise rise-5 mt-6">
        {!unlocked ? (
          <button
            type="button"
            onClick={() => setUnlocked(true)}
            className="group cursor-pointer border border-ink bg-card px-6 py-4 text-left shadow-[4px_4px_0_0_#1c1914] transition-all hover:shadow-[2px_2px_0_0_#1c1914] hover:translate-x-0.5 hover:translate-y-0.5"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-stamp uppercase">
              Förseglat · bryt vid oenighet
            </span>
            <span className="mt-1 block text-lg font-medium">
              Håller du inte med? Lås upp värderingarna →
            </span>
          </button>
        ) : (
          <WeightPanel
            dimensions={dataset.dimensions}
            state={state}
            normalized={normalized}
            onChange={setState}
            onReset={() => {
              setState(defaultState(dimensionIds));
              setFeasibilityOn(false);
            }}
            onShare={share}
            shareLabel={shareLabel}
          />
        )}
      </section>

      <section className="mt-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-mono text-[11px] tracking-[0.35em] text-ink-faint uppercase">
            Fullständig rangordning
          </h2>
          <p className="font-mono text-[11px] text-ink-faint">
            slutpoäng = Σ(vikt × poäng) × (1 − g + g·f)
          </p>
        </div>
        <RankingList ranked={ranked} dimensions={dataset.dimensions} normalized={normalized} g={state.g} />
        <p className="mt-6 text-sm text-ink-soft">
          Varje rad går att veckla ut till sin fullständiga beräkning. Poängens motiveringar och
          källor, skalankarna och genomförbarhetsrubriken redovisas på{" "}
          <Link href="/metodik/" className="underline decoration-rule-strong underline-offset-2 hover:text-stamp">
            metodiksidan
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
