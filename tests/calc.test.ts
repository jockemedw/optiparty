import { describe, it, expect } from "vitest";
import { normalizeWeights, policyScore, finalScore, rankParties, bankScore } from "@/lib/model/calc";
import type { Dataset } from "@/lib/model/types";

describe("normalizeWeights", () => {
  it("normaliserar så vikterna summerar till 1", () => {
    const w = normalizeWeights({ a: 50, b: 50, c: 100 });
    expect(w.a).toBeCloseTo(0.25);
    expect(w.b).toBeCloseTo(0.25);
    expect(w.c).toBeCloseTo(0.5);
  });

  it("ger likaviktning när alla råvikter är 0", () => {
    const w = normalizeWeights({ a: 0, b: 0 });
    expect(w.a).toBeCloseTo(0.5);
    expect(w.b).toBeCloseTo(0.5);
  });
});

describe("policyScore", () => {
  it("är viktat medelvärde av dimensionspoängen", () => {
    const scores = { a: { score: 100 }, b: { score: 0 } };
    expect(policyScore(scores, { a: 1, b: 0 })).toBe(100);
    expect(policyScore(scores, { a: 0.5, b: 0.5 })).toBe(50);
  });
});

describe("finalScore", () => {
  it("g=0 ger ren politikpoäng", () => {
    expect(finalScore(80, 0.5, 0)).toBe(80);
  });
  it("g=1 ger politikpoäng × genomförbarhetsfaktor", () => {
    expect(finalScore(80, 0.5, 1)).toBe(40);
  });
  it("g=0.5 interpolerar", () => {
    expect(finalScore(80, 0.8, 0.5)).toBeCloseTo(72);
  });
});

function fakeDataset(): Dataset {
  const entry = (score: number) => ({
    score,
    motivation: "Motivering som är tillräckligt lång.",
    sources: [{ title: "Källa", url: "https://example.com" }],
  });
  const feas = (factor: number) => ({
    factor,
    motivation: "Motivering som är tillräckligt lång.",
    sources: [{ title: "Källa", url: "https://example.com" }],
  });
  return {
    assessmentDate: "2026-06-11",
    dimensions: [
      { id: "a", name: "A", shortDescription: "x", grounding: "x", measures: "x" },
      { id: "b", name: "B", shortDescription: "x", grounding: "x", measures: "x" },
    ],
    parties: [
      { id: "p", name: "Beta", abbreviation: "B", color: "#000000", scores: { a: entry(80), b: entry(80) }, feasibility: feas(1) },
      { id: "q", name: "Alfa", abbreviation: "A", color: "#000000", scores: { a: entry(90), b: entry(90) }, feasibility: feas(0.5) },
      { id: "r", name: "Aaa", abbreviation: "C", color: "#000000", scores: { a: entry(80), b: entry(80) }, feasibility: feas(1) },
    ],
  };
}

describe("rankParties", () => {
  it("sorterar fallande på slutpoäng med genomförbarhet", () => {
    // g=1: Beta/Aaa 80×1=80, Alfa 90×0.5=45
    const ranked = rankParties(fakeDataset(), { a: 50, b: 50 }, 1);
    expect(ranked.map((r) => r.party.name)).toEqual(["Aaa", "Beta", "Alfa"]);
    expect(ranked[0].finalScore).toBeCloseTo(80);
  });

  it("utan genomförbarhetsgenomslag vinner högst politikpoäng", () => {
    const ranked = rankParties(fakeDataset(), { a: 50, b: 50 }, 0);
    expect(ranked[0].party.name).toBe("Alfa");
    expect(ranked[0].policyScore).toBeCloseTo(90);
  });

  it("bryter ties alfabetiskt på partinamn", () => {
    const ranked = rankParties(fakeDataset(), { a: 50, b: 50 }, 1);
    expect(ranked[0].party.name).toBe("Aaa");
    expect(ranked[1].party.name).toBe("Beta");
  });
});

describe("bankScore", () => {
  it("joinar bankvikter med partikomponenternas poäng", () => {
    const bank = [
      { id: "f1", weight: 1 },
      { id: "f2", weight: 1 },
    ];
    const components = [
      { componentId: "f2", score: 0 },
      { componentId: "f1", score: 100 },
    ];
    expect(bankScore(bank, components)).toBeCloseTo(50);
  });

  it("normaliserar bankvikterna", () => {
    const bank = [
      { id: "f1", weight: 3 },
      { id: "f2", weight: 1 },
    ];
    const components = [
      { componentId: "f1", score: 100 },
      { componentId: "f2", score: 0 },
    ];
    expect(bankScore(bank, components)).toBeCloseTo(75);
  });
});
