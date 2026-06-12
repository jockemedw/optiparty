import { describe, it, expect } from "vitest";
import { explainParty, normalizeWeights, rankParties } from "@/lib/model/calc";
import type { Party } from "@/lib/model/types";

function fakeParty(): Party {
  const entry = (score: number) => ({
    score,
    motivation: "Motivering som är tillräckligt lång.",
    sources: [{ title: "Källa", url: "https://example.com" }],
  });
  return {
    id: "p",
    name: "Parti",
    abbreviation: "P",
    color: "#000000",
    scores: { a: entry(80), b: entry(40) },
    feasibility: {
      factor: 0.5,
      motivation: "Motivering som är tillräckligt lång.",
      sources: [{ title: "Källa", url: "https://example.com" }],
    },
  };
}

describe("explainParty", () => {
  it("redovisar bidrag per dimension som vikt × poäng", () => {
    const b = explainParty(fakeParty(), { a: 0.75, b: 0.25 }, 1);
    expect(b.contributions).toEqual([
      { dimensionId: "a", weight: 0.75, score: 80, contribution: 60 },
      { dimensionId: "b", weight: 0.25, score: 40, contribution: 10 },
    ]);
  });

  it("bidragen summerar till politikpoängen", () => {
    const b = explainParty(fakeParty(), { a: 0.75, b: 0.25 }, 1);
    const sum = b.contributions.reduce((acc, c) => acc + c.contribution, 0);
    expect(b.policyScore).toBeCloseTo(sum);
  });

  it("redovisar multiplikatorn 1 − g + g·f", () => {
    const b = explainParty(fakeParty(), { a: 0.5, b: 0.5 }, 0.5);
    expect(b.feasibilityFactor).toBe(0.5);
    expect(b.multiplier).toBeCloseTo(0.75);
    expect(b.finalScore).toBeCloseTo(b.policyScore * 0.75);
  });

  it("g=0 ger multiplikator 1 oavsett faktor", () => {
    const b = explainParty(fakeParty(), { a: 0.5, b: 0.5 }, 0);
    expect(b.multiplier).toBe(1);
    expect(b.finalScore).toBeCloseTo(b.policyScore);
  });

  it("matchar rankParties slutpoäng exakt", () => {
    const party = fakeParty();
    const dataset = {
      assessmentDate: "2026-06-11",
      dimensions: [
        { id: "a", name: "A", shortDescription: "x", grounding: "x", measures: "x" },
        { id: "b", name: "B", shortDescription: "x", grounding: "x", measures: "x" },
      ],
      parties: [party],
    };
    const raw = { a: 30, b: 70 };
    const ranked = rankParties(dataset, raw, 0.8);
    const b = explainParty(party, normalizeWeights(raw), 0.8);
    expect(b.finalScore).toBeCloseTo(ranked[0].finalScore);
    expect(b.policyScore).toBeCloseTo(ranked[0].policyScore);
  });
});
