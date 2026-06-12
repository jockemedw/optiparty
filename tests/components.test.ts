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

function datasetWith(componentScores: { score: number; weight: number }[], storedScore: number) {
  const source = { title: "Källa", url: "https://example.com" };
  return {
    assessmentDate: "2026-06-12",
    dimensions: [{ id: "a", name: "A", shortDescription: "x", grounding: "x", measures: "x" }],
    parties: [
      {
        id: "p",
        name: "Parti",
        abbreviation: "P",
        color: "#000000",
        scores: {
          a: {
            score: storedScore,
            motivation: "Sammanfattande motivering som är tillräckligt lång.",
            sources: [source],
            components: componentScores.map((c, i) => ({
              id: `q${i}`,
              question: "En valkompassfråga som är tillräckligt lång?",
              origin: "SVT:s valkompass 2022",
              position: "Partiets dokumenterade inriktning i frågan.",
              score: c.score,
              weight: c.weight,
              sources: [source],
            })),
          },
        },
        feasibility: {
          factor: 1,
          motivation: "Motivering som är tillräckligt lång.",
          sources: [source],
        },
      },
    ],
  };
}

describe("DatasetSchema med delkomponenter", () => {
  it("accepterar när viktad komponentsumma matchar lagrad poäng", () => {
    const data = datasetWith([{ score: 80, weight: 1 }, { score: 40, weight: 1 }], 60);
    expect(() => DatasetSchema.parse(data)).not.toThrow();
  });

  it("avvisar när lagrad poäng avviker från beräknad", () => {
    const data = datasetWith([{ score: 80, weight: 1 }, { score: 40, weight: 1 }], 70);
    expect(() => DatasetSchema.parse(data)).toThrow(/avviker/);
  });

  it("accepterar poster utan komponenter (v1-läge)", () => {
    const data = datasetWith([{ score: 50, weight: 1 }], 50);
    delete (data.parties[0].scores.a as { components?: unknown }).components;
    expect(() => DatasetSchema.parse(data)).not.toThrow();
  });
});
