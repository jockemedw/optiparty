import type { Weights } from "./calc";

export const DEFAULT_RAW_WEIGHT = 50;
export const DEFAULT_G = 1;

export interface WeightState {
  rawWeights: Weights;
  g: number;
}

export function defaultState(dimensionIds: string[]): WeightState {
  return {
    rawWeights: Object.fromEntries(dimensionIds.map((id) => [id, DEFAULT_RAW_WEIGHT])),
    g: DEFAULT_G,
  };
}

export function stateToQuery(state: WeightState, dimensionIds: string[]): string {
  const w = dimensionIds.map((id) => state.rawWeights[id]).join("-");
  return `w=${w}&g=${Math.round(state.g * 100)}`;
}

export function queryToState(params: URLSearchParams, dimensionIds: string[]): WeightState {
  const fallback = defaultState(dimensionIds);
  const w = params.get("w");
  const g = params.get("g");

  const state: WeightState = { rawWeights: { ...fallback.rawWeights }, g: fallback.g };

  if (w !== null) {
    const parts = w.split("-").map(Number);
    const valid =
      parts.length === dimensionIds.length &&
      parts.every((n) => Number.isFinite(n) && n >= 0 && n <= 100);
    if (!valid) return fallback;
    dimensionIds.forEach((id, i) => {
      state.rawWeights[id] = parts[i];
    });
  }

  if (g !== null) {
    const n = Number(g);
    if (!Number.isFinite(n) || n < 0 || n > 100) return fallback;
    state.g = n / 100;
  }

  return state;
}
