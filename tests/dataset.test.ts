import { describe, it, expect } from "vitest";
import { DatasetSchema } from "@/lib/model/types";

const validEntry = {
  score: 50,
  motivation: "En tillräckligt lång motivering för testet.",
  sources: [{ title: "Källa", url: "https://example.com" }],
};

function makeDataset(overrides: object = {}) {
  return {
    assessmentDate: "2026-06-11",
    dimensions: [
      { id: "a", name: "A", shortDescription: "Kort.", grounding: "Teori.", measures: "Mäter." },
      { id: "b", name: "B", shortDescription: "Kort.", grounding: "Teori.", measures: "Mäter." },
    ],
    parties: [
      {
        id: "x",
        name: "Xpartiet",
        abbreviation: "X",
        color: "#aa0000",
        scores: { a: validEntry, b: validEntry },
        feasibility: { factor: 0.8, motivation: "En tillräckligt lång motivering.", sources: validEntry.sources },
      },
    ],
    ...overrides,
  };
}

describe("DatasetSchema", () => {
  it("accepterar ett komplett dataset", () => {
    expect(() => DatasetSchema.parse(makeDataset())).not.toThrow();
  });

  it("avvisar poäng utan källa", () => {
    const bad = makeDataset();
    bad.parties[0].scores.a = { ...validEntry, sources: [] };
    expect(() => DatasetSchema.parse(bad)).toThrow();
  });

  it("avvisar poäng med för kort motivering", () => {
    const bad = makeDataset();
    bad.parties[0].scores.a = { ...validEntry, motivation: "kort" };
    expect(() => DatasetSchema.parse(bad)).toThrow();
  });

  it("avvisar parti som saknar poäng för en dimension", () => {
    const bad = makeDataset();
    delete (bad.parties[0].scores as Record<string, unknown>).b;
    expect(() => DatasetSchema.parse(bad)).toThrow(/saknar poäng/);
  });

  it("avvisar parti med poäng för okänd dimension", () => {
    const bad = makeDataset();
    (bad.parties[0].scores as Record<string, unknown>).c = validEntry;
    expect(() => DatasetSchema.parse(bad)).toThrow(/okänd dimension/);
  });

  it("avvisar poäng utanför 0–100", () => {
    const bad = makeDataset();
    bad.parties[0].scores.a = { ...validEntry, score: 101 };
    expect(() => DatasetSchema.parse(bad)).toThrow();
  });

  it("avvisar genomförbarhetsfaktor utanför 0–1", () => {
    const bad = makeDataset();
    bad.parties[0].feasibility.factor = 1.2;
    expect(() => DatasetSchema.parse(bad)).toThrow();
  });
});
