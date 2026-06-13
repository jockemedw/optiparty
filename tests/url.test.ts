import { describe, it, expect } from "vitest";
import { defaultState, stateToQuery, queryToState, DEFAULT_G, DEFAULT_RAW_WEIGHT } from "@/lib/model/url";

const dims = ["a", "b", "c"];

describe("defaultState", () => {
  it("ger råvikt 50 per dimension och g=0 (genomförbarhet av som default)", () => {
    const s = defaultState(dims);
    expect(s.rawWeights).toEqual({ a: 50, b: 50, c: 50 });
    expect(s.g).toBe(0);
    expect(DEFAULT_RAW_WEIGHT).toBe(50);
    expect(DEFAULT_G).toBe(0);
  });
});

describe("roundtrip", () => {
  it("state → query → state är identiskt", () => {
    const s = { rawWeights: { a: 10, b: 90, c: 0 }, g: 0.25 };
    const query = stateToQuery(s, dims);
    expect(query).toBe("w=10-90-0&g=25");
    expect(queryToState(new URLSearchParams(query), dims)).toEqual(s);
  });
});

describe("queryToState fallbacks", () => {
  it("tom query ger defaults", () => {
    expect(queryToState(new URLSearchParams(""), dims)).toEqual(defaultState(dims));
  });
  it("fel antal vikter ger defaults", () => {
    expect(queryToState(new URLSearchParams("w=10-20"), dims)).toEqual(defaultState(dims));
  });
  it("icke-numeriska vikter ger defaults", () => {
    expect(queryToState(new URLSearchParams("w=10-xx-30"), dims)).toEqual(defaultState(dims));
  });
  it("vikt utanför 0–100 ger defaults", () => {
    expect(queryToState(new URLSearchParams("w=10-200-30"), dims)).toEqual(defaultState(dims));
  });
  it("ogiltigt g ger defaults", () => {
    expect(queryToState(new URLSearchParams("w=10-20-30&g=999"), dims)).toEqual(defaultState(dims));
  });
  it("giltigt w utan g behåller default-g", () => {
    const s = queryToState(new URLSearchParams("w=10-20-30"), dims);
    expect(s.rawWeights).toEqual({ a: 10, b: 20, c: 30 });
    expect(s.g).toBe(0);
  });
});
