import { describe, it, expect } from "vitest";
import { componentScore } from "@/lib/model/calc";
import { DatasetSchema } from "@/lib/model/types";

describe("componentScore", () => {
  it("är likaviktat medelvärde när vikterna är lika", () => {
    expect(componentScore([
      { score: 100, weight: 1 },
      { score: 0, weight: 1 },
    ])).toBeCloseTo(50);
  });

  it("normaliserar vikterna oavsett skala", () => {
    expect(componentScore([
      { score: 100, weight: 3 },
      { score: 0, weight: 1 },
    ])).toBeCloseTo(75);
    expect(componentScore([
      { score: 100, weight: 0.75 },
      { score: 0, weight: 0.25 },
    ])).toBeCloseTo(75);
  });
});

const source = { title: "Källa", url: "https://example.com" };

function bankedDataset(opts: {
  bankIds?: string[];
  componentIds?: string[];
  componentScores?: number[];
  storedScore?: number;
  includeBank?: boolean;
}) {
  const bankIds = opts.bankIds ?? ["q1", "q2", "q3", "q4", "q5"];
  const componentIds = opts.componentIds ?? bankIds;
  const componentScores = opts.componentScores ?? [50, 50, 50, 50, 50];
  return {
    assessmentDate: "2026-06-12",
    dimensions: [
      {
        id: "a",
        name: "A",
        shortDescription: "x",
        grounding: "x",
        measures: "x",
        boundary: "En gränsdragningstext som är tillräckligt lång.",
        exclusions: [],
        ...(opts.includeBank === false
          ? {}
          : {
              questionBank: bankIds.map((id) => ({
                id,
                question: "En valkompassfråga som är tillräckligt lång?",
                polarity: "Ja främjar målet",
                origin: "SVT:s valkompass 2022",
                weight: 1,
              })),
            }),
      },
    ],
    parties: [
      {
        id: "p",
        name: "Parti",
        abbreviation: "P",
        color: "#000000",
        scores: {
          a: {
            score: opts.storedScore ?? 50,
            motivation: "Sammanfattande motivering som är tillräckligt lång.",
            sources: [source],
            components: componentIds.map((componentId, i) => ({
              componentId,
              score: componentScores[i] ?? 50,
              position: "Partiets dokumenterade inriktning i frågan.",
              sources: [source],
            })),
          },
        },
        feasibility: { factor: 1, motivation: "Motivering som är tillräckligt lång.", sources: [source] },
      },
    ],
  };
}

describe("DatasetSchema med frågebank", () => {
  it("accepterar när komponenterna matchar banken och poängen stämmer", () => {
    const data = bankedDataset({ componentScores: [100, 75, 50, 25, 0], storedScore: 50 });
    expect(() => DatasetSchema.parse(data)).not.toThrow();
  });

  it("avvisar lagrad poäng som avviker från bankberäknad", () => {
    const data = bankedDataset({ componentScores: [100, 75, 50, 25, 0], storedScore: 60 });
    expect(() => DatasetSchema.parse(data)).toThrow(/avviker/);
  });

  it("avvisar parti som saknar komponent för en bankfråga", () => {
    const data = bankedDataset({ componentIds: ["q1", "q2", "q3", "q4"], componentScores: [50, 50, 50, 50], storedScore: 50 });
    expect(() => DatasetSchema.parse(data)).toThrow(/saknar komponent/);
  });

  it("avvisar komponent som inte finns i banken", () => {
    const data = bankedDataset({ componentIds: ["q1", "q2", "q3", "q4", "q6"], storedScore: 50 });
    expect(() => DatasetSchema.parse(data)).toThrow(/finns inte i frågebanken/);
  });

  it("avvisar komponenter på dimension utan frågebank", () => {
    const data = bankedDataset({ includeBank: false, storedScore: 50 });
    expect(() => DatasetSchema.parse(data)).toThrow(/utan frågebank/);
  });

  it("avvisar frågebank med färre än 5 frågor (K5)", () => {
    const data = bankedDataset({ bankIds: ["q1", "q2", "q3", "q4"], componentScores: [50, 50, 50, 50], storedScore: 50 });
    expect(() => DatasetSchema.parse(data)).toThrow();
  });

  it("avvisar frågepoäng utanför ankarna 0/25/50/75/100", () => {
    const data = bankedDataset({ componentScores: [50, 50, 50, 50, 47], storedScore: 49 });
    expect(() => DatasetSchema.parse(data)).toThrow();
  });

  it("accepterar kurerad dimension utan bank och utan komponenter (migreringsläge)", () => {
    const data = bankedDataset({ includeBank: false, storedScore: 50 });
    delete (data.parties[0].scores.a as { components?: unknown }).components;
    expect(() => DatasetSchema.parse(data)).not.toThrow();
  });
});
