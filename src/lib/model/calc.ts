import type { Dataset, Party } from "./types";

export type Weights = Record<string, number>;

export interface RankedParty {
  party: Party;
  policyScore: number;
  finalScore: number;
}

export function normalizeWeights(raw: Weights): Weights {
  const keys = Object.keys(raw);
  const sum = keys.reduce((acc, k) => acc + raw[k], 0);
  if (sum <= 0) {
    const equal = 1 / keys.length;
    return Object.fromEntries(keys.map((k) => [k, equal]));
  }
  return Object.fromEntries(keys.map((k) => [k, raw[k] / sum]));
}

export function policyScore(scores: Record<string, { score: number }>, normalized: Weights): number {
  return Object.entries(normalized).reduce((sum, [id, w]) => sum + w * scores[id].score, 0);
}

export function finalScore(policy: number, feasibilityFactor: number, g: number): number {
  return policy * (1 - g + g * feasibilityFactor);
}

export function rankParties(dataset: Dataset, rawWeights: Weights, g: number): RankedParty[] {
  const normalized = normalizeWeights(rawWeights);
  return dataset.parties
    .map((party) => {
      const policy = policyScore(party.scores, normalized);
      return { party, policyScore: policy, finalScore: finalScore(policy, party.feasibility.factor, g) };
    })
    .sort((a, b) => b.finalScore - a.finalScore || a.party.name.localeCompare(b.party.name, "sv"));
}
