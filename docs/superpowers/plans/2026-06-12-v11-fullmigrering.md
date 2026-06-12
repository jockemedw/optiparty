# v1.1-fullmigrering och datadriven dimensionsredovisning — implementationsplan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Alla sex dimensionspoäng beräknas ur källverifierade delkomponenter (protokoll v1.1) och §6 på /metodik renderar fullständiga dimensionsdefinitioner (frågebank, uteslutningar, gränsdragningar) direkt ur datasetet.

**Architecture:** Frågebanken (fråga, polaritet, ursprung, vikt) flyttar från partiernas komponenter till dimensionsnivå i datasetet; partikomponenter behåller endast det partispecifika (poäng, position, källor). Zod-invarianter tvingar bank ↔ komponent-matchning och lagrad = beräknad poäng. UI:t (§6, §7, kalkylremsan) renderar ur datat. Därefter migreras fem dimensioner en i taget enligt protokollets §G, med PR + deploy per dimension.

**Tech Stack:** Next.js 16 (App Router, statisk export), TypeScript, zod 4, vitest, Tailwind.

**Spec:** `docs/superpowers/specs/2026-06-12-v11-fullmigrering-redovisning-design.md`
**Protokoll:** `docs/research/2026-06-12-protokoll-v11-delkomponenter.md` (godkänt)
**Prejudikat:** `docs/research/2026-06-12-framtid-fragebank.md`

**Branch:** allt arbete sker på `feature/v11-fullmigrering` (PR 0). Migrerings-PR:arna (Task 7) får egna brancher.

**Styrande regler (gäller varje task):**
- Inga handjusterade poäng. Poäng ändras endast av beräkningen.
- Käll-URL:er fetch-verifieras innan de läggs in.
- Varje poängändring får en daterad rad i `docs/research/CHANGELOG-bedomningar.md`.
- Ägaren godkänner metod, aldrig enskilda poäng (§H).

---

## Task 1: `bankScore` i calc.ts

Beräknar dimensionspoäng genom att joina dimensionens frågebank (vikter) med partiets komponenter (poäng).

**Files:**
- Modify: `src/lib/model/calc.ts` (efter `componentScore`, rad ~38)
- Test: `tests/calc.test.ts`

- [ ] **Step 1: Skriv failande test**

Lägg sist i `tests/calc.test.ts`:

```ts
import { bankScore } from "@/lib/model/calc"; // utöka befintlig import från calc

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
```

- [ ] **Step 2: Kör testet — ska faila**

Kör: `npx vitest run tests/calc.test.ts`
Förväntat: FAIL — `bankScore` exporteras inte.

- [ ] **Step 3: Implementera**

I `src/lib/model/calc.ts`, direkt efter `componentScore`:

```ts
export interface BankEntryLike {
  id: string;
  weight: number;
}

export interface PartyComponentLike {
  componentId: string;
  score: number;
}

/** Dimensionspoäng ur frågebank + partikomponenter: bankens vikter joinas
 *  med partiets frågepoäng via componentId. Saknad komponent fångas av
 *  zod-invarianten — här behandlas den som 0 för att aldrig dölja fel. */
export function bankScore(bank: BankEntryLike[], components: PartyComponentLike[]): number {
  const scoreById = new Map(components.map((c) => [c.componentId, c.score]));
  return componentScore(bank.map((q) => ({ weight: q.weight, score: scoreById.get(q.id) ?? 0 })));
}
```

- [ ] **Step 4: Kör testet — ska passera**

Kör: `npx vitest run tests/calc.test.ts`
Förväntat: PASS (samtliga).

- [ ] **Step 5: Commit**

```powershell
git add src/lib/model/calc.ts tests/calc.test.ts
git commit -m "Add bankScore: dimension score from question bank joined with party components"
```

---

## Task 2: Nytt zod-schema — frågebank på dimensionsnivå

**Files:**
- Modify: `src/lib/model/types.ts` (hela filen ersätts enligt nedan)
- Test: `tests/components.test.ts` (skrivs om), `tests/dataset.test.ts` (fixtur utökas)

- [ ] **Step 1: Skriv om `tests/components.test.ts` mot nya schemat**

Ersätt hela filens innehåll efter de två `componentScore`-describen (som behålls oförändrade) — dvs. ersätt `datasetWith` och `DatasetSchema med delkomponenter`-blocket med:

```ts
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
```

- [ ] **Step 2: Utöka dimensionsfixturen i `tests/dataset.test.ts`**

I `makeDataset`, ge båda dimensionsobjekten de nya obligatoriska fälten:

```ts
{ id: "a", name: "A", shortDescription: "Kort.", grounding: "Teori.", measures: "Mäter.",
  boundary: "En gränsdragningstext som är tillräckligt lång.", exclusions: [] },
{ id: "b", name: "B", shortDescription: "Kort.", grounding: "Teori.", measures: "Mäter.",
  boundary: "En gränsdragningstext som är tillräckligt lång.", exclusions: [] },
```

Kontrollera även `tests/explain.test.ts` och `tests/url.test.ts`: bygger de dimensionsobjekt ska samma två fält läggas till; annars lämnas de orörda.

- [ ] **Step 3: Kör testerna — nya ska faila**

Kör: `npx vitest run`
Förväntat: FAIL i `components.test.ts` (nya schemafält/invarianter finns inte).

- [ ] **Step 4: Skriv nya `src/lib/model/types.ts`**

Ersätt filens innehåll:

```ts
import { z } from "zod";
import { bankScore } from "./calc";

export const SourceSchema = z.object({
  title: z.string().min(1),
  url: z.url(),
});

/** En fråga i dimensionens frågebank: det partioberoende (protokoll v1.1 §B–§C, §E). */
export const QuestionBankEntrySchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  question: z.string().min(10),
  polarity: z.string().min(5),
  origin: z.string().min(3),
  weight: z.number().positive(),
});

/** En K2-uteslutning eller annan avgränsning: vad som inte ingår och varför. */
export const ExclusionSchema = z.object({
  topic: z.string().min(3),
  reason: z.string().min(10),
});

/** Frågeankarna i protokollets §C: grov skala avsiktligt — precisionen uppstår i aggregeringen. */
const anchorScore = z.union([z.literal(0), z.literal(25), z.literal(50), z.literal(75), z.literal(100)]);

/** Partiets svar på en bankfråga: endast det partispecifika. */
export const PartyComponentSchema = z.object({
  componentId: z.string().regex(/^[a-z0-9-]+$/),
  score: anchorScore,
  position: z.string().min(10),
  sources: z.array(SourceSchema).min(1),
});

export const DimensionSchema = z.object({
  id: z.string().regex(/^[a-z]+$/),
  name: z.string().min(1),
  shortDescription: z.string().min(1),
  grounding: z.string().min(1),
  measures: z.string().min(1),
  boundary: z.string().min(20),
  exclusions: z.array(ExclusionSchema),
  questionBank: z.array(QuestionBankEntrySchema).min(5).optional(), // min 5 = K5
});

export const ScoreEntrySchema = z.object({
  score: z.number().min(0).max(100),
  motivation: z.string().min(20),
  sources: z.array(SourceSchema).min(1),
  components: z.array(PartyComponentSchema).min(1).optional(),
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
    const dims = new Map(data.dimensions.map((d) => [d.id, d]));
    for (const party of data.parties) {
      const scoreIds = new Set(Object.keys(party.scores));
      for (const id of dims.keys()) {
        if (!scoreIds.has(id)) {
          ctx.addIssue({ code: "custom", message: `Partiet ${party.id} saknar poäng för dimensionen ${id}` });
        }
      }
      for (const id of scoreIds) {
        if (!dims.has(id)) {
          ctx.addIssue({ code: "custom", message: `Partiet ${party.id} har poäng för okänd dimension ${id}` });
        }
      }
      for (const [dimId, entry] of Object.entries(party.scores)) {
        const bank = dims.get(dimId)?.questionBank;
        if (bank) {
          if (!entry.components) {
            ctx.addIssue({ code: "custom", message: `Partiet ${party.id}, dimensionen ${dimId}: migrerad dimension utan komponenter` });
            continue;
          }
          const bankIds = new Set(bank.map((q) => q.id));
          const compIds = new Set(entry.components.map((c) => c.componentId));
          for (const id of bankIds) {
            if (!compIds.has(id)) {
              ctx.addIssue({ code: "custom", message: `Partiet ${party.id}, dimensionen ${dimId}: saknar komponent för bankfrågan ${id}` });
            }
          }
          for (const id of compIds) {
            if (!bankIds.has(id)) {
              ctx.addIssue({ code: "custom", message: `Partiet ${party.id}, dimensionen ${dimId}: komponenten ${id} finns inte i frågebanken` });
            }
          }
          if (entry.components.length !== compIds.size) {
            ctx.addIssue({ code: "custom", message: `Partiet ${party.id}, dimensionen ${dimId}: dubblerade komponent-id:n` });
          }
          const computed = bankScore(bank, entry.components);
          if (Math.abs(computed - entry.score) > 0.5) {
            ctx.addIssue({
              code: "custom",
              message: `Partiet ${party.id}, dimensionen ${dimId}: lagrad poäng ${entry.score} avviker från bankberäknad ${computed.toFixed(2)} (tolerans ±0,5)`,
            });
          }
        } else if (entry.components) {
          ctx.addIssue({ code: "custom", message: `Partiet ${party.id}, dimensionen ${dimId}: komponenter utan frågebank i dimensionen` });
        }
      }
    }
  });

export type Source = z.infer<typeof SourceSchema>;
export type QuestionBankEntry = z.infer<typeof QuestionBankEntrySchema>;
export type Exclusion = z.infer<typeof ExclusionSchema>;
export type PartyComponent = z.infer<typeof PartyComponentSchema>;
export type Dimension = z.infer<typeof DimensionSchema>;
export type ScoreEntry = z.infer<typeof ScoreEntrySchema>;
export type Party = z.infer<typeof PartySchema>;
export type Dataset = z.infer<typeof DatasetSchema>;
```

Observera: typen `ScoreComponent` och `ComponentSchema` försvinner. Konsumenter uppdateras i Task 4–5; `src/data/dataset.ts` i Task 3. Fram till Task 5 är bygget rött — det är väntat.

- [ ] **Step 5: Kör schematesterna — ska passera**

Kör: `npx vitest run tests/components.test.ts tests/dataset.test.ts tests/calc.test.ts`
Förväntat: PASS. (`npm test` i sin helhet kan ännu faila på dataset/UI — åtgärdas i Task 3–5.)

- [ ] **Step 6: Commit**

```powershell
git add src/lib/model/types.ts tests/components.test.ts tests/dataset.test.ts
git commit -m "Move question bank to dimension level in schema with bank-component invariants"
```

---

## Task 3: Konvertera datasetet

**Files:**
- Modify: `src/data/dataset.ts`

- [ ] **Step 1: Ge alla sex dimensioner `boundary` och `exclusions`**

Texterna är hämtade ur gränsdragningarna i `docs/research/2026-06-11-vardedimensioner-harledning.md` (§3.1–3.7). Lägg till fälten per dimensionsobjekt:

`valbefinnande`:
```ts
boundary: "Räknar alla människor lika och mäter utfallet. Gräns mot Lidandeminimering: den viktar botten av fördelningen, denna räknar alla lika. Gräns mot Frihet & autonomi: välbefinnande mäter om folk mår bra, frihet mäter förmågan och rätten att själv välja — paternalistisk politik kan ge plus här och minus där.",
exclusions: [],
```

`lidande`:
```ts
boundary: "Absolut nivå hos de sämst ställda: förbättringar väger tyngre ju sämre ställd mottagaren är. Gräns mot Samlat välbefinnande: där räknas alla lika. Gräns mot Fördelningsrättvisa: lidande är absolut (hur illa har de sämst ställda det?), fördelning är relativ (hur stora är gapen?).",
exclusions: [],
```

`fordelning`:
```ts
boundary: "Relativa gap och lika livschanser. Gräns mot Lidandeminimering: fördelning är relativ, lidande absolut — ett samhälle kan ha litet lidande men stora gap, och tvärtom. Gräns mot Insatsrättvisa: fördelning frågar om gapen är små och chanserna lika; insats frågar om utfallen speglar insatsen.",
exclusions: [],
```

`insats`:
```ts
boundary: "Proportion mellan insats och utfall. Gräns mot Fördelningsrättvisa: dimensionerna drar ofta åt olika håll — det är avsiktligt, reglagen låter besökaren välja sida. Fångar tillsammans med Frihet & autonomi de libertarianska intuitionerna om äganderätt till frukten av sitt arbete; en egen libertarianismdimension skulle dubbelräkna.",
exclusions: [],
```

`frihet`:
```ts
boundary: "Förmågan och rätten att själv välja, även att välja 'fel'. Gräns mot Samlat välbefinnande: välbefinnande mäter utfallet, frihet mäter självbestämmandet. Rättsstat och maktdelning poängsätts här — demokrati som egen dimension skulle diskriminera dåligt eftersom alla riksdagspartier formellt bekänner sig till den.",
exclusions: [],
```

`framtid`:
```ts
boundary: "Effekter bortom ungefär en generation. Övriga fem dimensioner bedöms på effekten för nu levande; denna fångar uttryckligen kostnader som tas nu med vinster som tillfaller kommande generationer, och tvärtom.",
exclusions: [
  {
    topic: "Kärnkraft som egen fråga",
    reason: "K2: polariteten mot dimensionsmålet är inte entydig — både ja- och nej-sidan hävdar klimat- och framtidsnytta. Fångas indirekt i frågan om fossilfri elproduktion, där måttet är utbyggnad oavsett kraftslag.",
  },
  {
    topic: "Överskottsmålet och statsfinanserna",
    reason: "K2: sparande och lånefinansierade framtidsinvesteringar kan båda försvaras som framtidsansvar; polariteten är inte entydig.",
  },
],
```

- [ ] **Step 2: Lägg `questionBank` på framtid-dimensionen**

Polariteter ur `docs/research/2026-06-12-framtid-fragebank.md`; frågetext/origin/vikt flyttas oförändrade från partikomponenterna:

```ts
questionBank: [
  { id: "klimatmal-2045", question: "Sveriges klimatmål om nettonollutsläpp senast 2045 ska behållas eller skärpas.", polarity: "Behålla eller skärpa främjar målet", origin: "F1 · frågebanken för Framtidsansvar (protokoll v1.1)", weight: 1 },
  { id: "reduktionsplikt", question: "Reduktionsplikten för bensin och diesel ska hållas på en hög nivå.", polarity: "Hög nivå främjar målet", origin: "F2 · frågebanken för Framtidsansvar (protokoll v1.1)", weight: 1 },
  { id: "naturskydd-skog", question: "Mer natur och skog ska ges långsiktigt skydd.", polarity: "Mer skydd främjar målet", origin: "F3 · frågebanken för Framtidsansvar (protokoll v1.1)", weight: 1 },
  { id: "civilforsvar-beredskap", question: "Det civila försvaret och krisberedskapen ska byggas ut.", polarity: "Utbyggnad främjar målet", origin: "F4 · frågebanken för Framtidsansvar (protokoll v1.1)", weight: 1 },
  { id: "fossilfri-el", question: "Den fossilfria elproduktionen ska byggas ut kraftigt.", polarity: "Utbyggnad främjar målet", origin: "F5 · frågebanken för Framtidsansvar (protokoll v1.1)", weight: 1 },
],
```

- [ ] **Step 3: Konvertera framtid-komponenterna för alla åtta partier**

Mekanisk regel per komponent — innehållet bevaras ordagrant, inget skrivs om:
- `id: "X"` → `componentId: "X"`
- ta bort `question`, `origin`, `weight` (ligger nu i banken)
- behåll `score`, `position`, `sources` oförändrade

Exempel — S:s första komponent efter konvertering:

```ts
components: [
  {
    componentId: "klimatmal-2045",
    position: "Vill att Sverige ska 'nå nettonollutsläpp till 2045' och 'vidta kraftfulla åtgärder för att Sverige ska klara klimatmålen till 2030' — behåller målet.",
    score: 75,
    sources: [{ title: "Socialdemokraterna: Klimatpolitik", url: "https://www.socialdemokraterna.se/var-politik/a-till-o/klimatpolitik" }],
  },
  // …övriga fyra komponenter efter samma regel
],
```

Upprepa för samtliga åtta partier (s, m, sd, v, c, kd, l, mp) — varje parti har exakt fem framtid-komponenter.

- [ ] **Step 4: Verifiera att inga poäng ändrats**

Kör: `npm run validate`
Förväntat: `Dataset OK: 8 partier × 6 dimensioner, daterat 2026-06-12.`
Konsistenskontrollen bevisar att de lagrade poängen (S 80, M 60, SD 45, V 85, C 80, KD 55, L 65, MP 85) fortfarande är bankberäknade. Avviker något: felet sitter i konverteringen — rätta konverteringen, ändra ALDRIG en poäng.

- [ ] **Step 5: Commit**

```powershell
git add src/data/dataset.ts
git commit -m "Convert dataset: question bank on dimension level, boundaries and exclusions for all dimensions"
```

---

## Task 4: Kalkylremsan joinar med frågebanken

**Files:**
- Modify: `src/components/CalculationSheet.tsx`

- [ ] **Step 1: Uppdatera typimporter och ComponentTable**

Byt typimporten (rad 5):

```ts
import type { Dimension, Party, PartyComponent, QuestionBankEntry, ScoreEntry } from "@/lib/model/types";
```

Ersätt `ComponentTable` (rad ~167) med en bankjoinande variant:

```tsx
/** Frågenivån: dimensionspoängen uppbyggd ur frågebanken — en rad per
 *  bankfråga med partiets validerade position, poäng och vikt. */
function ComponentTable({ bank, components }: { bank: QuestionBankEntry[]; components: PartyComponent[] }) {
  const totalWeight = bank.reduce((sum, q) => sum + q.weight, 0);
  const byId = new Map(components.map((c) => [c.componentId, c]));
  return (
    <div className="mt-4">
      <p className="text-[10px] tracking-[0.3em] text-ink-faint uppercase">
        Delkomponenter · dimensionspoäng = Σ(vikt × frågepoäng)
      </p>
      <ul className="mt-2 flex flex-col">
        {bank.map((q) => {
          const c = byId.get(q.id);
          if (!c) return null;
          const w = q.weight / totalWeight;
          return (
            <li key={q.id} className="border-b border-rule/60 py-2.5 last:border-b-0">
              <p className="font-serif text-sm leading-snug">{q.question}</p>
              <p className="mt-1 font-serif text-sm leading-relaxed text-ink-soft">{c.position}</p>
              <p className="mt-1.5 text-[11px] text-ink-faint tabular-nums">
                {q.origin} · vikt {pct(w)} × poäng {c.score} ={" "}
                <span className="font-medium text-ink">{fmt(w * c.score, 2)}</span>
                {c.sources.map((s) => (
                  <a key={s.url} href={s.url} className="ml-3 underline decoration-rule-strong underline-offset-2 hover:text-stamp" target="_blank" rel="noopener noreferrer">
                    {s.title} ↗
                  </a>
                ))}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
```

- [ ] **Step 2: Skicka in banken vid anropet**

I huvudkomponentens detail-rendering (rad ~103), `dim` finns redan i scope:

```tsx
{entry.components && dim?.questionBank && (
  <ComponentTable bank={dim.questionBank} components={entry.components} />
)}
```

- [ ] **Step 3: Typkontrollera**

Kör: `npx tsc --noEmit`
Förväntat: inga fel i `CalculationSheet.tsx` (fel kan kvarstå i `metodik/page.tsx` tills Task 5).

- [ ] **Step 4: Commit**

```powershell
git add src/components/CalculationSheet.tsx
git commit -m "Join calculation sheet component rows with the dimension question bank"
```

---

## Task 5: §6 fullständig dimensionsredovisning + §7-join på /metodik

**Files:**
- Modify: `src/app/metodik/page.tsx`

- [ ] **Step 1: Ersätt §6-renderingen**

Ersätt hela `<SectionHeading no="6">…</div>`-blocket (rad ~160–177) med:

```tsx
<SectionHeading no="6">Dimensionerna</SectionHeading>
<p className="mt-4 leading-relaxed text-ink-soft">
  Varje dimension redovisas med definition, gränsdragning mot grannliggande dimensioner,
  ingående frågebank med vikter samt vad som uttryckligen uteslutits och varför. Frågebanken
  nedan är samma data som beräknar poängen — den kan inte avvika från beräkningen.
</p>
<div className="mt-6 space-y-6">
  {dataset.dimensions.map((d, i) => {
    const totalWeight = d.questionBank?.reduce((sum, q) => sum + q.weight, 0) ?? 0;
    return (
      <article key={d.id} className="border border-rule bg-card p-5">
        <p className="font-mono text-[10px] tracking-[0.25em] text-stamp uppercase">
          Dimension {String(i + 1).padStart(2, "0")} ·{" "}
          {d.questionBank ? "Beräknad enligt protokoll v1.1" : "Kurerad v1 — migrering återstår"}
        </p>
        <h3 className="mt-2 text-lg font-bold tracking-tight">{d.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d.shortDescription}</p>
        <p className="mt-3 text-xs leading-relaxed text-ink-faint">
          <b className="text-ink-soft">Förankring:</b> {d.grounding}
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-ink-faint">
          <b className="text-ink-soft">Mäter:</b> {d.measures}
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-ink-faint">
          <b className="text-ink-soft">Gränsdragning:</b> {d.boundary}
        </p>
        {d.questionBank && (
          <table className="mt-4 w-full border-collapse text-sm">
            <caption className="sr-only">Frågebank för {d.name}</caption>
            <thead>
              <tr className="border-b border-rule text-left text-[10px] tracking-[0.15em] text-ink-faint uppercase">
                <th className="py-1.5 pr-3 font-normal">Fråga</th>
                <th className="py-1.5 pr-3 font-normal">Polaritet</th>
                <th className="py-1.5 text-right font-normal">Vikt</th>
              </tr>
            </thead>
            <tbody>
              {d.questionBank.map((q) => (
                <tr key={q.id} className="border-b border-rule/60 align-top">
                  <td className="py-2 pr-3 text-ink-soft">{q.question}</td>
                  <td className="py-2 pr-3 text-xs text-ink-faint">{q.polarity}</td>
                  <td className="py-2 text-right font-mono text-xs tabular-nums">
                    {fmt((q.weight / totalWeight) * 100)} %
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {d.exclusions.length > 0 && (
          <div className="mt-4">
            <p className="font-mono text-[10px] tracking-[0.25em] text-ink-faint uppercase">Uteslutet ur dimensionen</p>
            <ul className="mt-1.5 space-y-1.5">
              {d.exclusions.map((e) => (
                <li key={e.topic} className="text-xs leading-relaxed text-ink-faint">
                  <b className="text-ink-soft">{e.topic}:</b> {e.reason}
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    );
  })}
</div>
```

- [ ] **Step 2: Joina §7-komponentrenderingen med banken**

I §7 (rad ~214–247) renderas `entry.components` med `c.question`, `c.origin`, `c.weight`. Banken finns som `d.questionBank` i samma scope. Ersätt komponentblocket:

```tsx
{entry.components && d.questionBank && (
  <dd className="mt-3 border-t border-rule pt-3">
    <p className="font-mono text-[10px] tracking-[0.25em] text-ink-faint uppercase">
      Delkomponenter · poäng = Σ(vikt × frågepoäng)
    </p>
    <ul className="mt-2 space-y-2">
      {d.questionBank.map((q) => {
        const c = entry.components!.find((x) => x.componentId === q.id);
        if (!c) return null;
        const total = d.questionBank!.reduce((sum, x) => sum + x.weight, 0);
        return (
          <li key={q.id} className="text-sm">
            <span className="leading-snug">{q.question}</span>
            <span className="ml-2 font-mono text-[11px] text-ink-faint tabular-nums">
              {q.origin} · vikt {fmt((q.weight / total) * 100)} % × {c.score}
            </span>
            <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{c.position}</p>
            <p className="font-mono text-[11px]">
              {c.sources.map((s) => (
                <a key={s.url} href={s.url} className="mr-4 text-ink-faint underline decoration-rule-strong underline-offset-2 hover:text-stamp" target="_blank" rel="noopener noreferrer">
                  {s.title} ↗
                </a>
              ))}
            </p>
          </li>
        );
      })}
    </ul>
  </dd>
)}
```

- [ ] **Step 3: Uppdatera §3-texten**

§3-stycket (rad ~102–110) säger att migrerade dimensioner redovisar delkomponenter "under §7" — utöka med §6. Ersätt sista meningen med:

```
…migrerade dimensioner redovisar sin frågebank under §6 och delkomponenterna per parti under §7 samt i beräkningen på förstasidan.
```

- [ ] **Step 4: Full verifiering**

Kör: `npm run build`
Förväntat: validate OK, alla tester PASS, statisk export med `/`, `/metodik`, `/om`.

Kör: `npx serve out` och öppna `http://localhost:3000/metodik/` — §6 visar Framtidsansvar med frågebankstabell, uteslutningar, gränsdragning och statusraden "Beräknad enligt protokoll v1.1"; övriga fem visar "Kurerad v1 — migrering återstår" med gränsdragning. Förstasidans kalkylremsa visar framtid-komponenterna som förut.

- [ ] **Step 5: Commit, push, PR**

```powershell
git add src/app/metodik/page.tsx
git commit -m "Render full dimension definitions in metodik section 6 from the dataset"
git push -u origin feature/v11-fullmigrering
gh pr create --base master --title "Question bank on dimension level with full dimension reporting (PR 0)" --body "Strukturell PR enligt spec 2026-06-12: schemat flyttar frågebanken till dimensionsnivå med bank/komponent-invarianter, §6 renderar fullständiga dimensionsdefinitioner ur datasetet. Inga poängändringar — konsistenskontrollen bevisar det."
```

Ägaren granskar och mergar. Deploy endast på uttrycklig begäran.

---

## Task 6: Uppdatera AGENTS.md-arkitekturraden

**Files:**
- Modify: `AGENTS.md` (raden om `src/lib/model/`)

- [ ] **Step 1: Lägg till bankScore-omnämnande**

Ändra raden:

```
- `src/lib/model/` — rena, testade funktioner: `types.ts` (zod-kontrakt inkl. frågebanksinvarianter), `calc.ts` (normalisering/ranking/bankScore), `url.ts` (vikter ↔ query-params)
```

- [ ] **Step 2: Commit (ingår i PR 0)**

```powershell
git add AGENTS.md
git commit -m "Document question bank invariants in AGENTS.md architecture notes"
```

---

## Task 7: Migrera fem dimensioner (en PR per dimension)

Forskningsdrivet — innehållet (frågor, positioner, poäng) FÅR INTE förskrivas i denna plan; det produceras mekaniskt av protokollet. Processen nedan upprepas i ordningen:

1. `fordelning` (Fördelningsrättvisa)
2. `insats` (Insatsrättvisa)
3. `lidande` (Lidandeminimering)
4. `frihet` (Frihet & autonomi)
5. `valbefinnande` (Samlat välbefinnande)

Per dimension, med `docs/research/2026-06-12-framtid-fragebank.md` som strukturmall:

- [ ] **Step 1: Branch** — `git checkout master; git pull; git checkout -b feature/v11-<dimensionsid>`

- [ ] **Step 2: Frågebank** — utgå från kandidatområdena i protokollets §I för dimensionen. Formulera ≥5 frågor som uppfyller K1–K5, med entydig polaritet (K2). Frågor som mäter två dimensioner utesluts och dokumenteras med motiv. Skriv `docs/research/2026-06-12-<dimensionsid>-fragebank.md` med samma sektioner som framtid-dokumentet: Frågorna (tabell id/fråga/polaritet), Uteslutna frågor (K2-motiv), Källäge och §D-flaggor, Beräknade dimensionspoäng (tabell per parti med F1–Fn, total, tidigare kurerad).

- [ ] **Step 3: Källverifiering** — för varje parti × fråga: belägg positionen med citerbar offentlig källa. Riksdagsvoteringar/betänkanden väger tyngre än partisidor. VARJE URL fetch-verifieras (WebFetch) innan den läggs in — död URL ⇒ sök alternativ källa. Hittas ingen validerbar position: §D — poäng 50, positionstexten anger uttryckligen att position saknas + var den eftersökts. Tyst gissning är förbjuden.

- [ ] **Step 4: Poängsätt** — varje position mot frågeankarna {0, 25, 50, 75, 100} (§C), likavikt (§E). Dimensionstotal = Σ(vikt × frågepoäng) avrundad till heltal (§F).

- [ ] **Step 5: Dataset** — i `src/data/dataset.ts`: lägg `questionBank` (id/question/polarity/origin/weight 1) på dimensionen, fyll `exclusions` med K2-uteslutningarna, ersätt varje partis lagrade dimensionspoäng med den beräknade, skriv om `motivation` till en sammanfattning i stil med framtids ("Beräknad ur N likaviktade delkomponenter enligt protokoll v1.1: …"), och lägg `components` (componentId/score/position/sources) per parti.

- [ ] **Step 6: Changelog** — daterad sektion i `docs/research/CHANGELOG-bedomningar.md` med samma format som Framtidsansvar-posten 2026-06-12: regel a (protokolländring v1.1), hänvisning till frågebanksdokumentet, tabell Parti | Tidigare (kurerad) | Ny (beräknad).

- [ ] **Step 7: Verifiera** — `npm run build` grönt. Konsistenskontrollen tvingar lagrad = beräknad. Rök-testa §6/§7 och kalkylremsan i `npx serve out`.

- [ ] **Step 8: PR** — `git push -u origin feature/v11-<dimensionsid>; gh pr create --base master …`. Ägaren granskar metodtillämpningen och mergar; deploy endast på uttrycklig begäran. Nästa dimension börjar först när PR:en är mergad (etappvis enligt ägarens beslut).

**Eskalering:** kan K5 (≥5 frågor med entydig polaritet) inte uppfyllas för en dimension stannar migreringen av den dimensionen och frågan går till ägaren som metodfråga — kriterierna sänks aldrig ensidigt.

---

## Självgranskning (utförd vid planskrivning)

- Spec-täckning: datamodell (Task 2), Framtidsansvar-konvertering utan poängändring (Task 3), §6/§7/kalkylremsa (Task 4–5), migreringsprocess och ordning (Task 7), felhantering/§D/K5-eskalering (Task 7), tester (Task 1–2). Icke-målen rörs inte.
- Typkonsistens: `QuestionBankEntry`/`PartyComponent`/`Exclusion` definieras i Task 2 och används med samma namn i Task 4–5; `bankScore(bank, components)` definieras i Task 1 och anropas i Task 2:s superRefine.
- Medvetet öppet: forskningsinnehållet i Task 7 (protokollstyrt, får inte förskrivas).
