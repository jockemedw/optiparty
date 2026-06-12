# Design: v1.1-fullmigrering och datadriven dimensionsredovisning

**Datum:** 2026-06-12
**Status:** Godkänd av projektägaren i designdialog 2026-06-12.
**Bakgrund:** Ägarens krav: "alla poäng måste ställas upp mer matematiskt,
alla dimensioner måste redovisas tydligare." Klargjort till: (1) samtliga
dimensionspoäng ska vara beräknade ur delkomponenter enligt godkänt protokoll
v1.1 (`docs/research/2026-06-12-protokoll-v11-delkomponenter.md`), inte
kurerade; (2) §6 på /metodik ska ge fullständiga dimensionsdefinitioner:
ingående frågor med vikter, uteslutningar med motiv, gränsdragningar.

## Mål

1. Migrera de fem återstående dimensionerna (Samlat välbefinnande,
   Lidandeminimering, Fördelningsrättvisa, Insatsrättvisa, Frihet & autonomi)
   till beräknade komponentpoäng. Framtidsansvar är redan migrerad.
2. Gör §6 på /metodik till en mekanisk spegel av datasetet: frågebank,
   vikter, uteslutningar och gränsdragningar renderas ur data, aldrig ur
   handskriven sidtext som kan glida.

## Icke-mål (YAGNI)

- Ingen jämförelsevy per dimension (alla partier sida vid sida) — bortvald.
- Ingen dimensionsförklaring vid reglagen på förstasidan — bortvald.
- Ingen KaTeX/LaTeX-typografi — formlerna behåller dagens mono-stil.
- Inga nya dimensioner, ingen ändring av genomförbarhetsrubriken.

## 1. Datamodell — frågebanken flyttar till dimensionsnivå

Frågetext, polaritet, ursprung och vikt är dimensionsfakta, inte partifakta.
Idag dupliceras de per parti (8×) och polariteten finns bara i
forskningsdokumentet. Ny form:

```
Dimension {
  …befintliga fält (id, name, shortDescription, grounding, measures)…
  exclusions: { topic: string; reason: string }[]   // K2-uteslutningar m.m.
  boundary: string                                  // gränsdragning mot grannliggande dimensioner
  questionBank?: QuestionBankEntry[]                // finns ⇒ dimensionen är migrerad
}
QuestionBankEntry { id, question, polarity, origin, weight }

ScoreEntry.components?: PartyComponent[]
PartyComponent { componentId, score, position, sources }  // endast det partispecifika
```

Zod-invarianter (bygget faller annars):

- Har dimensionen `questionBank` ⇒ **alla** partier har exakt en komponent
  per bankfråga — inga extra, inga saknade.
- Lagrad dimensionspoäng = Σ(normaliserad vikt × frågepoäng), tolerans ±0,5.
- `questionBank` kräver ≥5 frågor (K5).
- Frågepoäng ∈ {0, 25, 50, 75, 100} (frågeankarna i §C).

Framtidsansvars befintliga komponentdata konverteras till nya formen i ett
rent refaktoreringssteg: inga poäng ändras, bygget bevisar det via
konsistenskontrollen. `exclusions`/`boundary` fylls för alla sex dimensioner
(för Framtidsansvar ur det befintliga frågebanksdokumentet).

## 2. §6 på /metodik — fullständig dimensionsredovisning

Varje dimensionskort växer till en artikel med:

- Definition: dagens `shortDescription`, `grounding`, `measures`.
- **Frågebankstabell** ur `questionBank`: fråga, polaritet, vikt.
- **Uteslutningar** ur `exclusions`: ämne + motiv.
- **Gränsdragning** ur `boundary`.
- Statusrad: "Beräknad enligt protokoll v1.1" respektive
  "Kurerad v1 — migrering återstår".

Sektionen växer automatiskt för varje migrerings-PR. §7 och kalkylremsan
(`CalculationSheet`) anpassas till den nya datastrukturen (slår upp
frågetext/vikt via banken) men ändrar inte utseende i övrigt.

## 3. Migreringsprocess — protokollstyrd, repeteras per dimension

Exakt enligt Framtidsansvar-prejudikatet
(`docs/research/2026-06-12-framtid-fragebank.md`), per dimension:

1. Frågebanksdokument i `docs/research/YYYY-MM-DD-<dim>-fragebank.md`:
   frågor (≥5, K1–K5), polaritet, uteslutna frågor med K2-motiv.
2. Källverifiering av alla åtta partiers positioner. Voteringar väger
   tyngre än partisidor. Alla URL:er fetch-verifieras. Saknas validerbar
   position: §D — neutral prior 50 + eftersökningskälla, aldrig tyst gissning.
3. Beräkning med likavikt (§E), avrundning till heltal (§F).
4. Daterade rader per parti i `CHANGELOG-bedomningar.md` (gammal kurerad
   poäng, ny beräknad, regel §0a).
5. Dataset uppdateras; `npm run build` grönt (validate + test + export).
6. PR; ägaren granskar och mergar; deploy på ägarens begäran.

**Ordning** (mest voteringsbelagda först): Fördelningsrättvisa →
Insatsrättvisa → Lidandeminimering → Frihet & autonomi → Samlat
välbefinnande. Etappvis med deploy per dimension — ägarens val.

## 4. Felhantering och kanter

- Död käll-URL → sök alternativ källa; annars §D-neutralprior med flagga.
- K5 ej uppfylld → dimensionen stannar; eskalera till ägaren, tumma aldrig
  på kriterierna.
- Domen (rankingen) får ändras av beräkningen — aldrig styra den.
- Ägarens roll enligt §H: metodgranskning, aldrig värdekalibrering.

## 5. Tester

- Nya schemainvarianter: bank ↔ komponent-matchning, K5-minimum,
  frågeankarvärden, viktnormalisering, konsistenskontroll lagrad/beräknad.
- Befintliga 36 tester anpassas till nya datastrukturen.
- UI-ändringar följer befintligt mönster; rendering verifieras i den
  statiska exporten per migrerings-PR.

## Leveransordning

1. **PR 0 (struktur):** datamodell + zod-invarianter + Framtidsansvar-
   konvertering + nya §6 + anpassad §7/kalkylremsa + `exclusions`/`boundary`
   för alla sex dimensioner. Inga poängändringar.
2. **PR 1–5 (en per dimension):** frågebanksdokument + källverifierade
   komponenter + changelog + dataset, i ordningen ovan.
