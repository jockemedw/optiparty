# Optiparty Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** En statisk Next.js-sajt som förkunnar Sveriges "optimala parti" enligt den låsta sexdimensionsmodellen, med upplåsbar viktningspanel, metodik- och om-sidor.

**Architecture:** All data (dimensioner, partipoäng, källor) ligger i ett zod-validerat TS-dataset i repot; bygget failar vid datafel. All beräkning (viktnormalisering, genomförbarhetsmultiplikator, ranking) sker klientside i rena, enhetstestade funktioner. Sajten exporteras helt statiskt (`output: "export"`) och hostas på Vercel utan backend.

**Tech Stack:** Next.js (App Router, static export), TypeScript, Tailwind CSS v4, zod v4, vitest, motion (framer-motion) för animerad ranking, tsx för byggvalidering.

**Underlag:** Spec: `docs/superpowers/specs/2026-06-11-optiparty-design.md`. Modellhärledning (låst): `docs/research/2026-06-11-vardedimensioner-harledning.md`.

**Beslut tagna i denna plan** (bemyndigade av spec §6.2 m.m.):
- Displaynamn för dimension 1: **"Samlat välbefinnande"** (undviker "välfärdsstat"-misläsningen, härledningsdok §6.2).
- Default genomförbarhetsgenomslag `g = 1` (specens huvudformel `slutpoäng = politikpoäng × genomförbarhetsfaktor` är det låsta facit-läget).
- Defaultvikter: 50 rått per dimension (normaliseras till 1/6 — "indifferensprior").
- Ranking-ties bryts alfabetiskt på partinamn (svensk sortering).

## Filstruktur

```
optiparty/
├── next.config.ts              # output: "export"
├── vitest.config.ts
├── scripts/
│   └── validate-dataset.ts     # zod-validering, körs i prebuild
├── src/
│   ├── data/
│   │   └── dataset.ts          # dimensioner + partier + datum (ENDA datafilen)
│   ├── lib/model/
│   │   ├── types.ts            # zod-scheman + inferred types
│   │   ├── calc.ts             # normalisering, poäng, ranking (rena funktioner)
│   │   └── url.ts              # vikter ↔ query-param-serialisering
│   ├── components/
│   │   ├── VerdictBoard.tsx    # client: state (vikter, lås), komponerar nedan
│   │   ├── WeightPanel.tsx     # reglagen
│   │   └── RankingList.tsx     # animerad rankinglista
│   └── app/
│       ├── layout.tsx          # nav, footer med datering + konstprojektdisclaimer
│       ├── page.tsx            # förstasidan (domen)
│       ├── metodik/page.tsx    # modell, dimensioner, alla poäng + källor
│       └── om/page.tsx         # konstprojektramen
└── tests/
    ├── calc.test.ts
    ├── url.test.ts
    └── dataset.test.ts
```

Ansvar: `types.ts` definierar datakontraktet, `dataset.ts` är enda stället innehåll ändras, `calc.ts`/`url.ts` är rena funktioner utan React, komponenterna är dumma utom `VerdictBoard` som äger allt UI-state.

---

### Task 1: Scaffold + verktyg

**Files:**
- Create: hela Next.js-strukturen via create-next-app, `vitest.config.ts`
- Modify: `next.config.ts`, `package.json`

- [ ] **Step 1: Scaffolda Next.js i temp-katalog och flytta upp** (katalogen innehåller redan `docs/` så create-next-app vägrar köra direkt i roten)

```powershell
npx --yes create-next-app@latest tmp-scaffold --yes --ts --tailwind --eslint --app --src-dir --use-npm --turbopack --import-alias "@/*"
Get-ChildItem -Force tmp-scaffold | Move-Item -Destination .
Remove-Item tmp-scaffold
```

- [ ] **Step 2: Slå på statisk export** — ersätt innehållet i `next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
```

- [ ] **Step 3: Installera beroenden**

```powershell
npm install zod motion
npm install -D vitest tsx
```

- [ ] **Step 4: Skapa `vitest.config.ts`**

```ts
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  test: {
    include: ["tests/**/*.test.ts"],
  },
});
```

- [ ] **Step 5: Lägg till scripts i `package.json`** (behåll befintliga `dev`/`build`/`start`/`lint`):

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "prebuild": "npm run validate && npm test",
  "validate": "tsx scripts/validate-dataset.ts",
  "test": "vitest run",
  "start": "next start",
  "lint": "next lint"
}
```

- [ ] **Step 6: Verifiera att bygget går** (prebuild failar ännu inte — `scripts/validate-dataset.ts` finns inte förrän Task 5; kör därför `next build` direkt denna enda gång)

```powershell
npx next build
```

Expected: bygget lyckas, `out/` skapas.

- [ ] **Step 7: Commit**

```powershell
git add -A; git commit -m "Scaffold Next.js static site with vitest and zod"
```

---

### Task 2: Datakontraktet (zod-scheman)

**Files:**
- Create: `src/lib/model/types.ts`
- Test: `tests/dataset.test.ts` (delvis — schematester; datasettestet kompletteras i Task 5)

- [ ] **Step 1: Skriv failande test** — `tests/dataset.test.ts`:

```ts
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
```

- [ ] **Step 2: Kör testet, verifiera att det failar**

```powershell
npm test
```

Expected: FAIL — `Cannot find module '@/lib/model/types'` (eller motsvarande).

- [ ] **Step 3: Implementera `src/lib/model/types.ts`**

```ts
import { z } from "zod";

export const SourceSchema = z.object({
  title: z.string().min(1),
  url: z.url(),
});

export const DimensionSchema = z.object({
  id: z.string().regex(/^[a-z]+$/),
  name: z.string().min(1),
  shortDescription: z.string().min(1),
  grounding: z.string().min(1),
  measures: z.string().min(1),
});

export const ScoreEntrySchema = z.object({
  score: z.number().min(0).max(100),
  motivation: z.string().min(20),
  sources: z.array(SourceSchema).min(1),
});

export const PartySchema = z.object({
  id: z.string().regex(/^[a-z]+$/),
  name: z.string().min(1),
  abbreviation: z.string().min(1),
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  scores: z.record(z.string(), ScoreEntrySchema),
  feasibility: z.object({
    factor: z.number().min(0).max(1),
    motivation: z.string().min(20),
    sources: z.array(SourceSchema).min(1),
  }),
});

export const DatasetSchema = z
  .object({
    assessmentDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    dimensions: z.array(DimensionSchema).min(1),
    parties: z.array(PartySchema).min(1),
  })
  .superRefine((data, ctx) => {
    const dimIds = new Set(data.dimensions.map((d) => d.id));
    for (const party of data.parties) {
      const scoreIds = new Set(Object.keys(party.scores));
      for (const id of dimIds) {
        if (!scoreIds.has(id)) {
          ctx.addIssue({ code: "custom", message: `Partiet ${party.id} saknar poäng för dimensionen ${id}` });
        }
      }
      for (const id of scoreIds) {
        if (!dimIds.has(id)) {
          ctx.addIssue({ code: "custom", message: `Partiet ${party.id} har poäng för okänd dimension ${id}` });
        }
      }
    }
  });

export type Source = z.infer<typeof SourceSchema>;
export type Dimension = z.infer<typeof DimensionSchema>;
export type ScoreEntry = z.infer<typeof ScoreEntrySchema>;
export type Party = z.infer<typeof PartySchema>;
export type Dataset = z.infer<typeof DatasetSchema>;
```

- [ ] **Step 4: Kör testen, verifiera att de passerar**

```powershell
npm test
```

Expected: PASS, 7 tester gröna.

- [ ] **Step 5: Commit**

```powershell
git add tests/dataset.test.ts src/lib/model/types.ts; git commit -m "Add zod data contract for dimensions and party assessments"
```

---

### Task 3: Beräkningslogiken

**Files:**
- Create: `src/lib/model/calc.ts`
- Test: `tests/calc.test.ts`

- [ ] **Step 1: Skriv failande test** — `tests/calc.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { normalizeWeights, policyScore, finalScore, rankParties } from "@/lib/model/calc";
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
```

- [ ] **Step 2: Kör testet, verifiera att det failar**

```powershell
npm test
```

Expected: FAIL — `Cannot find module '@/lib/model/calc'`.

- [ ] **Step 3: Implementera `src/lib/model/calc.ts`**

```ts
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
```

- [ ] **Step 4: Kör testen, verifiera att de passerar**

```powershell
npm test
```

Expected: PASS (dataset- + calc-tester gröna).

- [ ] **Step 5: Commit**

```powershell
git add tests/calc.test.ts src/lib/model/calc.ts; git commit -m "Add weighting, feasibility multiplier and ranking logic"
```

---

### Task 4: URL-serialisering av vikter

**Files:**
- Create: `src/lib/model/url.ts`
- Test: `tests/url.test.ts`

Format: `?w=50-50-50-50-50-50&g=100` — råvikter 0–100 i dimensionsordning, `g` i procent. Allt ogiltigt → tysta defaults (spec: felhantering).

- [ ] **Step 1: Skriv failande test** — `tests/url.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { defaultState, stateToQuery, queryToState, DEFAULT_G, DEFAULT_RAW_WEIGHT } from "@/lib/model/url";

const dims = ["a", "b", "c"];

describe("defaultState", () => {
  it("ger råvikt 50 per dimension och g=1", () => {
    const s = defaultState(dims);
    expect(s.rawWeights).toEqual({ a: 50, b: 50, c: 50 });
    expect(s.g).toBe(1);
    expect(DEFAULT_RAW_WEIGHT).toBe(50);
    expect(DEFAULT_G).toBe(1);
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
    expect(s.g).toBe(1);
  });
});
```

- [ ] **Step 2: Kör testet, verifiera att det failar**

```powershell
npm test
```

Expected: FAIL — `Cannot find module '@/lib/model/url'`.

- [ ] **Step 3: Implementera `src/lib/model/url.ts`**

```ts
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
```

- [ ] **Step 4: Kör testen, verifiera att de passerar**

```powershell
npm test
```

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add tests/url.test.ts src/lib/model/url.ts; git commit -m "Add URL serialization for shareable weight states"
```

---

### Task 5: Datasetet — dimensioner, två partier, byggvalidering

**Files:**
- Create: `src/data/dataset.ts`, `scripts/validate-dataset.ts`
- Modify: `tests/dataset.test.ts` (lägg till test att riktiga datasetet validerar)

**OBS:** Poängen i detta steg är **preliminära utkast** för granskning (spec: kurerat AI-assisterat dataset som itereras med projektägaren). Motiveringar och källor är riktiga; siffrorna kalibreras i Task 6:s granskningsgrind. Käll-URL:er ska verifieras (öppnas) vid exekvering — byt till fungerande sida på samma domän om en länk dött.

- [ ] **Step 1: Skapa `src/data/dataset.ts`** med dimensionerna (exakt enligt låst härledning) och de två första partierna:

```ts
import { DatasetSchema, type Dataset } from "@/lib/model/types";

export const dataset: Dataset = DatasetSchema.parse({
  assessmentDate: "2026-06-11",
  dimensions: [
    {
      id: "valbefinnande",
      name: "Samlat välbefinnande",
      shortDescription: "Politikens förväntade effekt på befolkningens samlade välbefinnande och välstånd.",
      grounding: "Klassisk utilitarism (Bentham 1789, Mill 1863); operationaliserad i SWB/WELLBY-forskningen (Layard; HM Treasury Green Book 2021) och OECD Better Life Index.",
      measures: "Aggregerat välbefinnande för flest människor: ekonomi, hälsa, utbildning, socialt stöd.",
    },
    {
      id: "lidande",
      name: "Lidandeminimering",
      shortDescription: "Hur mycket politiken lindrar situationen för dem som har det sämst, i absoluta termer.",
      grounding: "Negativ utilitarism (Popper 1945) och prioritarianism (Parfit 1991): förbättringar väger tyngre ju sämre ställd mottagaren är.",
      measures: "Fattigdom, psykisk ohälsa, vårdköer, missbruk, hemlöshet, brottsoffer.",
    },
    {
      id: "fordelning",
      name: "Fördelningsrättvisa",
      shortDescription: "Hur jämlikt resurser, möjligheter och risker fördelas i samhället.",
      grounding: "Rawls rättviseteori (1971): differensprincipen och lika grundläggande friheter; empiriskt stödd ojämlikhetsforskning (Wilkinson & Pickett 2009).",
      measures: "Relativa gap, jämlika livschanser, social rörlighet.",
    },
    {
      id: "insats",
      name: "Insatsrättvisa",
      shortDescription: "Att arbete, ansträngning och bidrag till samhället lönar sig.",
      grounding: "Förtjänstteori (Miller 1999); empiriskt robust proportionalitetsintuition (Starmans, Sheskin & Bloom 2017).",
      measures: "Drivkrafter för arbete och företagande, skydd mot friåkning, proportion mellan insats och utfall.",
    },
    {
      id: "frihet",
      name: "Frihet & autonomi",
      shortDescription: "Individens självbestämmande och reella förmåga att forma sitt liv.",
      grounding: "Liberal frihetstradition (Mill 1859, Berlin 1958) och capability approach (Sen 1999, Nussbaum 2011); rättsstaten som frihetens institution.",
      measures: "Självbestämmande, rättssäkerhet, maktdelning, reella valmöjligheter.",
    },
    {
      id: "framtid",
      name: "Framtidsansvar",
      shortDescription: "Politikens effekter bortom en generation.",
      grounding: "Parfit (1984) om framtida personers moraliska vikt; Brundtland (1987); Stern Review (2006) om intergenerationella avvägningar.",
      measures: "Klimat och miljö, statsfinanser, infrastruktur, forskning, beredskap.",
    },
  ],
  parties: [
    {
      id: "s",
      name: "Socialdemokraterna",
      abbreviation: "S",
      color: "#E8112d",
      scores: {
        valbefinnande: {
          score: 62,
          motivation: "Bred välfärdsagenda med generell sjukvård, skola och trygghetssystem som täcker hela befolkningen; svagare på tillväxt- och produktivitetsreformer som lyfter välståndet på sikt.",
          sources: [{ title: "Socialdemokraternas partiprogram", url: "https://www.socialdemokraterna.se/vart-parti/om-partiet/vart-partiprogram" }],
        },
        lidande: {
          score: 68,
          motivation: "Tydlig prioritering av utsatta grupper via a-kassa, sjukförsäkring och riktade välfärdssatsningar; psykiatri- och vårdköfrågan adresseras men med begränsad reformhöjd.",
          sources: [{ title: "Socialdemokraternas politik A–Ö", url: "https://www.socialdemokraterna.se/var-politik" }],
        },
        fordelning: {
          score: 72,
          motivation: "Utjämning är kärnideologi: progressiv beskattning, generell välfärd och uttalat mål om minskade klyftor; social rörlighet via avgiftsfri utbildning.",
          sources: [{ title: "Socialdemokraternas partiprogram", url: "https://www.socialdemokraterna.se/vart-parti/om-partiet/vart-partiprogram" }],
        },
        insats: {
          score: 45,
          motivation: "Arbetslinjen finns retoriskt, men höga marginaleffekter och bidragssystemens utformning försvagar proportionen mellan insats och utfall för breda grupper.",
          sources: [{ title: "Socialdemokraternas politik A–Ö", url: "https://www.socialdemokraterna.se/var-politik" }],
        },
        frihet: {
          score: 55,
          motivation: "Stark på reella förmågor (utbildning, vård som frihetsförutsättning) i capability-mening; svagare på negativ frihet med benägenhet för reglering och paternalism.",
          sources: [{ title: "Socialdemokraternas partiprogram", url: "https://www.socialdemokraterna.se/vart-parti/om-partiet/vart-partiprogram" }],
        },
        framtid: {
          score: 58,
          motivation: "Klimatomställning bejakas med statligt investeringsfokus; statsfinansiell långsiktighet historiskt god, men framtida pensions- och demografiutmaningar adresseras svagt.",
          sources: [{ title: "Socialdemokraternas politik A–Ö", url: "https://www.socialdemokraterna.se/var-politik" }],
        },
      },
      feasibility: {
        factor: 0.85,
        motivation: "Längst regeringserfarenhet av alla partier, etablerad förvaltningstradition och stabil partiorganisation; minuspoäng för beroende av komplexa koalitionsunderlag.",
        sources: [{ title: "Regeringar i Sverige (Riksdagen)", url: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/" }],
      },
    },
    {
      id: "m",
      name: "Moderaterna",
      abbreviation: "M",
      color: "#52BDEC",
      scores: {
        valbefinnande: {
          score: 60,
          motivation: "Tillväxt-, jobb- och företagsfokus med god förväntad effekt på aggregerat välstånd; mindre vikt vid välbefinnandefaktorer som socialt stöd och arbetsliv/balans.",
          sources: [{ title: "Moderaternas idéprogram", url: "https://moderaterna.se/var-politik/" }],
        },
        lidande: {
          score: 50,
          motivation: "Brottsofferperspektiv och vårdköfokus väger upp; samtidigt innebär stramare ersättningssystem ökad risk för de ekonomiskt mest utsatta.",
          sources: [{ title: "Moderaternas politik", url: "https://moderaterna.se/var-politik/" }],
        },
        fordelning: {
          score: 45,
          motivation: "Lika chanser betonas via skola och arbetslinje snarare än utjämnade utfall; skattesänkningar gynnar i första hand arbetande medel- och höginkomsttagare.",
          sources: [{ title: "Moderaternas idéprogram", url: "https://moderaterna.se/var-politik/" }],
        },
        insats: {
          score: 72,
          motivation: "Proportionalitet mellan insats och utfall är kärnbudskap: det ska löna sig att arbeta, bidragstak, sänkt skatt på arbete och hårdare krav på motprestation.",
          sources: [{ title: "Moderaternas politik", url: "https://moderaterna.se/var-politik/" }],
        },
        frihet: {
          score: 65,
          motivation: "Stark på negativ frihet: äganderätt, valfrihet i välfärden, näringsfrihet; repressiva inslag i kriminalpolitiken drar ned rättssäkerhetsdelen något.",
          sources: [{ title: "Moderaternas idéprogram", url: "https://moderaterna.se/var-politik/" }],
        },
        framtid: {
          score: 55,
          motivation: "Kärnkraftssatsning och statsfinansiell återhållsamhet är långsiktiga plus; lägre ambition i närtida utsläppsminskningar och naturskydd drar ned.",
          sources: [{ title: "Moderaternas politik", url: "https://moderaterna.se/var-politik/" }],
        },
      },
      feasibility: {
        factor: 0.8,
        motivation: "Omfattande och aktuell regeringserfarenhet, professionaliserad organisation; samordningskostnader i blockpolitiken drar ned något.",
        sources: [{ title: "Regeringar i Sverige (Riksdagen)", url: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/" }],
      },
    },
  ],
});

export const dimensionIds = dataset.dimensions.map((d) => d.id);
```

- [ ] **Step 2: Skapa `scripts/validate-dataset.ts`**

```ts
import { DatasetSchema } from "../src/lib/model/types";

async function main() {
  const { dataset } = await import("../src/data/dataset");
  const result = DatasetSchema.safeParse(dataset);
  if (!result.success) {
    console.error("DATASETVALIDERING MISSLYCKADES:");
    for (const issue of result.error.issues) {
      console.error(`  ${issue.path.join(".")}: ${issue.message}`);
    }
    process.exit(1);
  }
  console.log(
    `Dataset OK: ${result.data.parties.length} partier × ${result.data.dimensions.length} dimensioner, daterat ${result.data.assessmentDate}.`
  );
}

main();
```

Obs: `dataset.ts` anropar redan `DatasetSchema.parse` vid import (failar tidigt även i `next build`); skriptet ger dessutom läsbara felmeddelanden. Relativa importer används i skriptet för säkerhets skull, men tsx läser tsconfig-paths så `@/`-aliaset inne i `dataset.ts` fungerar.

- [ ] **Step 3: Lägg till test i `tests/dataset.test.ts`** (i slutet av filen):

```ts
describe("riktiga datasetet", () => {
  it("validerar mot schemat", async () => {
    const { dataset } = await import("@/data/dataset");
    expect(() => DatasetSchema.parse(dataset)).not.toThrow();
  });

  it("har exakt sex dimensioner enligt låst härledning", async () => {
    const { dataset } = await import("@/data/dataset");
    expect(dataset.dimensions.map((d) => d.id)).toEqual([
      "valbefinnande", "lidande", "fordelning", "insats", "frihet", "framtid",
    ]);
  });
});
```

- [ ] **Step 4: Kör test + validering**

```powershell
npm test; npm run validate
```

Expected: alla tester PASS; valideringen skriver `Dataset OK: 2 partier × 6 dimensioner, daterat 2026-06-11.`

- [ ] **Step 5: Commit**

```powershell
git add src/data/dataset.ts scripts/validate-dataset.ts tests/dataset.test.ts; git commit -m "Add dataset with locked dimensions, first two parties and build validation"
```

---

### Task 6: Kurera resterande sex partier + granskningsgrind

**Files:**
- Modify: `src/data/dataset.ts`

Detta är innehållsarbete (research), inte kod. Schemat och formen är exakt den som S och M i Task 5 etablerar — samma fält, samma krav (motivering ≥ 20 tecken som refererar partiets faktiska program, ≥ 1 verifierad käll-URL per poäng).

- [ ] **Step 1: Lägg till Sverigedemokraterna** (`id: "sd"`, färg `#DDDD00`) — utgå från partiets aktuella program på sverigedemokraterna.se; poängsätt alla sex dimensioner + genomförbarhet (notera: ingen regeringserfarenhet, men samarbetsavtalserfarenhet).
- [ ] **Step 2: Lägg till Vänsterpartiet** (`id: "v"`, färg `#DA291C`) — vansterpartiet.se.
- [ ] **Step 3: Lägg till Centerpartiet** (`id: "c"`, färg `#009933`) — centerpartiet.se.
- [ ] **Step 4: Lägg till Kristdemokraterna** (`id: "kd"`, färg `#000077`) — kristdemokraterna.se.
- [ ] **Step 5: Lägg till Liberalerna** (`id: "l"`, färg `#006AB3`) — liberalerna.se.
- [ ] **Step 6: Lägg till Miljöpartiet** (`id: "mp"`, färg `#83CF39`) — mp.se.
- [ ] **Step 7: Verifiera** — alla käll-URL:er öppnade och fungerande; kör:

```powershell
npm test; npm run validate
```

Expected: PASS; `Dataset OK: 8 partier × 6 dimensioner, daterat 2026-06-11.`

- [ ] **Step 8: GRANSKNINGSGRIND — STOPPA OCH INVÄNTA PROJEKTÄGAREN.** Presentera en tabell (8 partier × 6 dimensioner + genomförbarhet) med alla poäng och be projektägaren granska siffrorna och stickprova motiveringarna. Iterera tills godkänt. Gå INTE vidare till Task 7 utan godkännande.

- [ ] **Step 9: Commit (efter godkännande)**

```powershell
git add src/data/dataset.ts; git commit -m "Curate assessments for all eight parliament parties"
```

---

### Task 7: Layout, nav och global stil

**Files:**
- Modify: `src/app/layout.tsx`, `src/app/globals.css`

- [ ] **Step 1: Ersätt `src/app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { dataset } from "@/data/dataset";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optiparty — Sveriges optimala parti",
  description:
    "Ett konst- och metodprojekt som räknar fram Sveriges matematiskt optimala parti utifrån en öppet redovisad värdemodell.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased flex flex-col">
        <header className="border-b border-zinc-800">
          <nav className="mx-auto flex max-w-4xl items-baseline gap-6 px-4 py-4">
            <Link href="/" className="font-bold tracking-widest uppercase">Optiparty</Link>
            <Link href="/metodik/" className="text-sm text-zinc-400 hover:text-zinc-100">Metodik</Link>
            <Link href="/om/" className="text-sm text-zinc-400 hover:text-zinc-100">Om</Link>
          </nav>
        </header>
        <div className="flex-1">{children}</div>
        <footer className="border-t border-zinc-800 px-4 py-6 text-center text-xs text-zinc-500">
          Bedömning per {dataset.assessmentDate}. Optiparty är ett konst- och metodprojekt —
          läs <Link href="/metodik/" className="underline">metodiken</Link> innan du blir arg.
        </footer>
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Trimma `src/app/globals.css`** till (behåll Tailwind-importen från scaffolden):

```css
@import "tailwindcss";
```

- [ ] **Step 3: Ta bort scaffold-grafik som inte används**

```powershell
Remove-Item src/app/favicon.ico -ErrorAction SilentlyContinue
Remove-Item public/next.svg, public/vercel.svg, public/file.svg, public/globe.svg, public/window.svg -ErrorAction SilentlyContinue
```

(Behåll favicon om du hellre gör en egen senare; den får inte refereras brutet.)

- [ ] **Step 4: Verifiera**

```powershell
npm run build
```

Expected: bygget grönt (validate + test körs via prebuild).

- [ ] **Step 5: Commit**

```powershell
git add -A; git commit -m "Add layout with nav, footer disclaimer and dark theme"
```

---

### Task 8: Förstasidan — domen, låset, reglagen

**Files:**
- Create: `src/components/VerdictBoard.tsx`, `src/components/WeightPanel.tsx`, `src/components/RankingList.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Skapa `src/components/RankingList.tsx`**

```tsx
"use client";

import { motion } from "motion/react";
import type { RankedParty } from "@/lib/model/calc";

export default function RankingList({ ranked }: { ranked: RankedParty[] }) {
  return (
    <ol className="mx-auto mt-10 flex max-w-xl flex-col gap-2">
      {ranked.map((r, i) => (
        <motion.li
          layout
          key={r.party.id}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex items-center gap-4 rounded border border-zinc-800 bg-zinc-900 px-4 py-3"
        >
          <span className="w-6 text-right font-mono text-zinc-500">{i + 1}</span>
          <span aria-hidden className="h-3 w-3 rounded-full" style={{ backgroundColor: r.party.color }} />
          <span className="flex-1 font-medium">{r.party.name}</span>
          <span className="font-mono tabular-nums text-zinc-300">{r.finalScore.toFixed(1)}</span>
        </motion.li>
      ))}
    </ol>
  );
}
```

- [ ] **Step 2: Skapa `src/components/WeightPanel.tsx`**

```tsx
"use client";

import type { Dimension } from "@/lib/model/types";
import type { WeightState } from "@/lib/model/url";

interface Props {
  dimensions: Dimension[];
  state: WeightState;
  onChange: (next: WeightState) => void;
  onReset: () => void;
  onShare: () => void;
  shareLabel: string;
}

export default function WeightPanel({ dimensions, state, onChange, onReset, onShare, shareLabel }: Props) {
  return (
    <section aria-label="Justera värderingarna" className="mx-auto mt-10 max-w-xl rounded border border-zinc-700 bg-zinc-900 p-6">
      <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">Dina värderingar</h2>
      <div className="flex flex-col gap-4">
        {dimensions.map((d) => (
          <label key={d.id} className="flex flex-col gap-1">
            <span className="flex justify-between text-sm">
              <span title={d.shortDescription}>{d.name}</span>
              <span className="font-mono text-zinc-400">{state.rawWeights[d.id]}</span>
            </span>
            <input
              type="range"
              min={0}
              max={100}
              value={state.rawWeights[d.id]}
              onChange={(e) =>
                onChange({ ...state, rawWeights: { ...state.rawWeights, [d.id]: Number(e.target.value) } })
              }
            />
          </label>
        ))}
        <label className="mt-2 flex flex-col gap-1 border-t border-zinc-800 pt-4">
          <span className="flex justify-between text-sm">
            <span title="Hur mycket partiets förmåga att faktiskt genomföra sin politik ska påverka.">
              Genomförbarhetens genomslag
            </span>
            <span className="font-mono text-zinc-400">{Math.round(state.g * 100)}%</span>
          </span>
          <input
            type="range"
            min={0}
            max={100}
            value={Math.round(state.g * 100)}
            onChange={(e) => onChange({ ...state, g: Number(e.target.value) / 100 })}
          />
        </label>
      </div>
      <div className="mt-6 flex gap-3">
        <button onClick={onReset} className="rounded border border-zinc-600 px-3 py-1 text-sm hover:bg-zinc-800">
          Återställ
        </button>
        <button onClick={onShare} className="rounded border border-zinc-600 px-3 py-1 text-sm hover:bg-zinc-800">
          {shareLabel}
        </button>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Skapa `src/components/VerdictBoard.tsx`**

```tsx
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
    await navigator.clipboard.writeText(url);
    setShareLabel("Kopierad!");
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
```

- [ ] **Step 4: Ersätt `src/app/page.tsx`** (Suspense krävs för `useSearchParams` vid statisk export)

```tsx
import { Suspense } from "react";
import VerdictBoard from "@/components/VerdictBoard";

export default function Home() {
  return (
    <main>
      <Suspense>
        <VerdictBoard />
      </Suspense>
    </main>
  );
}
```

- [ ] **Step 5: Verifiera i dev-läge**

```powershell
npm run dev
```

Manuell kontroll (öppna http://localhost:3000): domen visas med vinnare; låsknappen visar panelen; reglage räknar om rankingen med animation; `?w=100-0-0-0-0-0&g=0` ger annan vinnare än default; ogiltig query (`?w=banan`) ger default-domen; "Kopiera länk" lägger vikterna i URL:en. Stoppa servern efteråt.

- [ ] **Step 6: Verifiera bygget**

```powershell
npm run build
```

Expected: grönt, `out/index.html` finns.

- [ ] **Step 7: Commit**

```powershell
git add src/components src/app/page.tsx; git commit -m "Add verdict board with lock, weight sliders and animated ranking"
```

---

### Task 9: Metodik-sidan

**Files:**
- Create: `src/app/metodik/page.tsx`

Allt innehåll renderas från datasetet + statisk prosa. Prosan ska täcka (spec-krav): moralisk osäkerhet som metaram, formeln, Arrow-förbehållet, det redovisade utelämnandet av tillitsdimensionen, likaviktad default, genomförbarhet på partinivå utan individbedömningar.

- [ ] **Step 1: Skapa `src/app/metodik/page.tsx`**

```tsx
import type { Metadata } from "next";
import { dataset } from "@/data/dataset";

export const metadata: Metadata = { title: "Metodik — Optiparty" };

export default function Metodik() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-black">Metodik</h1>

      <section className="mt-8 space-y-4 text-zinc-300">
        <h2 className="text-xl font-bold text-zinc-100">Varför en viktad modell?</h2>
        <p>
          Ingen etisk teori är bevisad, och rimliga människor är varaktigt oeniga om vilken som är
          rätt. Forskningen om moralisk osäkerhet (MacAskill, Bykvist &amp; Ord, <i>Moral
          Uncertainty</i>, 2020) visar att en rationell aktör då bör behandla teorierna som en
          viktad portfölj i stället för att satsa allt på en. Varje dimension nedan representerar
          en seriöst försvarad etisk position; vikterna representerar hur mycket du litar på den.
          Därför är reglagen inte en gimmick — de är metodens ärligaste del.
        </p>
        <h2 className="text-xl font-bold text-zinc-100">Formeln</h2>
        <p className="font-mono text-sm">
          politikpoäng = Σ (vikt × dimensionspoäng) · slutpoäng = politikpoäng × (1 − g + g × genomförbarhet)
        </p>
        <p>
          Vikterna normaliseras att summera till 1. Default är likaviktning (1/6 per dimension) —
          en &quot;indifferensprior&quot; som inte tar ställning mellan teorierna — och fullt
          genomförbarhetsgenomslag (g&nbsp;=&nbsp;1). Genomförbarheten är en multiplikator, inte en
          dimension: den är ingen värdering utan en sannolikhet, och sannolikheter multipliceras.
          Den bedöms på partinivå (regeringserfarenhet, stabilitet, historik) — inga betyg sätts på
          namngivna personer.
        </p>
        <h2 className="text-xl font-bold text-zinc-100">Kända begränsningar</h2>
        <p>
          Arrows omöjlighetsteorem (1951) visar att ingen aggregeringsmetod uppfyller alla rimliga
          rättvisekrav samtidigt; valet av viktad summa är ett värdeval i sig. Vi har också medvetet
          utelämnat en dimension för social sammanhållning/tillit i v1 — tillit kan ses som mekanism
          för välbefinnande snarare än egenvärde, men det är ett vägval som går att ifrågasätta.
          Poängen är kurerade bedömningar av partiernas offentliga material, inte mätningar; varje
          siffra redovisas nedan med motivering och källa så att du kan göra en annan bedömning.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-black">Dimensionerna</h2>
        {dataset.dimensions.map((d) => (
          <article key={d.id} className="mt-6 rounded border border-zinc-800 bg-zinc-900 p-5">
            <h3 className="font-bold">{d.name}</h3>
            <p className="mt-1 text-sm text-zinc-300">{d.shortDescription}</p>
            <p className="mt-2 text-xs text-zinc-500"><b>Förankring:</b> {d.grounding}</p>
            <p className="mt-1 text-xs text-zinc-500"><b>Mäter:</b> {d.measures}</p>
          </article>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-black">Alla poäng, motiveringar och källor</h2>
        {dataset.parties.map((p) => (
          <article key={p.id} className="mt-8">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <span aria-hidden className="h-3 w-3 rounded-full" style={{ backgroundColor: p.color }} />
              {p.name}
            </h3>
            <dl className="mt-3 space-y-3">
              {dataset.dimensions.map((d) => {
                const entry = p.scores[d.id];
                return (
                  <div key={d.id} className="rounded border border-zinc-800 p-4">
                    <dt className="flex justify-between text-sm font-bold">
                      <span>{d.name}</span>
                      <span className="font-mono">{entry.score}/100</span>
                    </dt>
                    <dd className="mt-1 text-sm text-zinc-300">{entry.motivation}</dd>
                    <dd className="mt-1 text-xs">
                      {entry.sources.map((s) => (
                        <a key={s.url} href={s.url} className="mr-3 text-zinc-500 underline hover:text-zinc-300">
                          {s.title}
                        </a>
                      ))}
                    </dd>
                  </div>
                );
              })}
              <div className="rounded border border-zinc-700 bg-zinc-900 p-4">
                <dt className="flex justify-between text-sm font-bold">
                  <span>Genomförbarhet</span>
                  <span className="font-mono">{p.feasibility.factor.toFixed(2)}</span>
                </dt>
                <dd className="mt-1 text-sm text-zinc-300">{p.feasibility.motivation}</dd>
                <dd className="mt-1 text-xs">
                  {p.feasibility.sources.map((s) => (
                    <a key={s.url} href={s.url} className="mr-3 text-zinc-500 underline hover:text-zinc-300">
                      {s.title}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Verifiera bygget**

```powershell
npm run build
```

Expected: grönt; `out/metodik/index.html` finns.

- [ ] **Step 3: Commit**

```powershell
git add src/app/metodik; git commit -m "Add methodology page rendering model, scores and sources from dataset"
```

---

### Task 10: Om-sidan

**Files:**
- Create: `src/app/om/page.tsx`

- [ ] **Step 1: Skapa `src/app/om/page.tsx`** (texten stäms av med projektägaren vid granskning; detta är utgångsversionen)

```tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Om — Optiparty" };

export default function Om() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12 space-y-4 text-zinc-300">
      <h1 className="text-3xl font-black text-zinc-100">Om Optiparty</h1>
      <p>
        Optiparty är ett konst- och metodprojekt. Sajten förkunnar med största självsäkerhet vilket
        svenskt riksdagsparti som är &quot;matematiskt optimalt&quot; — och menar det, så långt en
        öppet redovisad modell någonsin kan mena något.
      </p>
      <p>
        Tvärsäkerheten är en del av verket. Bakom låset på förstasidan finns poängen: det optimala
        partiet beror på vad du värderar. Modellen är byggd på etablerad etisk teori och
        välbefinnandeforskning, varje siffra har motivering och källa, och varje vikt går att dra
        i. Den som låser upp reglagen upptäcker att domen är en funktion av ens egna värderingar —
        vilket är exakt vad politik är.
      </p>
      <p>
        Allt underlag finns på <Link href="/metodik/" className="underline">metodiksidan</Link>.
        Projektet är byggt av Joakim Weimar med AI-assistans. Det är inte en valkompass, inte
        partipolitisk reklam och inte en sanningsmaskin — det är en spegel med matematik i.
      </p>
    </main>
  );
}
```

- [ ] **Step 2: Verifiera bygget**

```powershell
npm run build
```

Expected: grönt; `out/om/index.html` finns.

- [ ] **Step 3: Commit**

```powershell
git add src/app/om; git commit -m "Add about page framing the art project"
```

---

### Task 11: Slutverifiering + deploy

**Files:** inga nya.

- [ ] **Step 1: Full verifiering**

```powershell
npm test; npm run build
```

Expected: alla tester PASS; bygget grönt; `out/` innehåller `index.html`, `metodik/index.html`, `om/index.html`.

- [ ] **Step 2: Manuell rök-test av statiska exporten**

```powershell
npx serve out
```

Öppna http://localhost:3000 — kontrollera: domen, lås/reglage, delningslänk (ladda om sidan med kopierad URL och se att vikterna återställs ur URL:en), metodik- och om-sidorna, footer-disclaimern.

- [ ] **Step 3: Deploy till Vercel** (kräver inloggning — be projektägaren köra `! npx vercel login` om CLI:t inte är inloggat)

```powershell
npx vercel --yes
```

Expected: preview-URL skrivs ut. Verifiera preview-URL:en i webbläsare, visa projektägaren, och låt hen avgöra om/när produktion: `npx vercel --prod`.

- [ ] **Step 4: Commit eventuella vercel-artefakter och pusha** (om projektägaren vill ha repo på GitHub — fråga först)

```powershell
git add -A; git commit -m "Final verification before deploy" --allow-empty
```

---

## Anti-krav (YAGNI — bygg INTE)

Historikgrafer, fler länder, användarkonton, individbedömningar av politiker, live AI-pipeline, cookies/analytics, i18n. Specens avgränsningar gäller.
