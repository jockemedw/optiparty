# Optiparty — designdokument

**Datum:** 2026-06-11
**Status:** Godkänd av projektägaren

## Sammanfattning

En sajt (konst-/metodprojekt) som förkunnar vilket svenskt riksdagsparti som är
"matematiskt och vetenskapligt mest optimalt" enligt en öppet redovisad,
teoriförankrad värdemodell. Domen presenteras som ett låst facit; besökaren kan
låsa upp en viktningspanel och se hur domen förändras med egna värderingar.

## Koncept

- Förstasidan förkunnar med självsäker min: **"Sveriges optimala parti är: X"**.
- Facit är låst som default — den provokativa tvärsäkerheten är poängen.
- Besökaren kan låsa upp en panel med reglage per värdedimension och se
  rankingen räknas om live. Låset är en del av verket: insikten att "optimalt
  beror på dina värderingar" är belöningen för den nyfikne.
- En "Om"-sektion ramar tydligt in projektet som konst/metodexperiment.

## Modellen

### Värdedimensioner (viktbara)

Sex dimensioner, var och en förankrad i en etablerad etisk/vetenskaplig
tradition. Dimensionerna är teoriförankrade; poängen är kurerade bedömningar
med obligatoriska källor.

| Dimension | Förankring | Mäter |
|---|---|---|
| Lidandeminimering | Negativ utilitarism | Politikens effekt på de sämst ställda: fattigdom, psykisk ohälsa, vårdköer, brottsoffer |
| Total välfärd | Klassisk utilitarism | Aggregerad välfärd/välstånd för flest människor |
| Fördelningsrättvisa | Rawls (maximin) | Jämlikhet, hur samhällets svagaste prioriteras |
| Insatsrättvisa | Meritokrati/reciprocitet | Att bidrag till samhället lönar sig |
| Framtidsansvar | Hållbarhet/långsiktighet | Klimat, statsfinanser, kommande generationer |
| Frihet & autonomi | Liberal tradition | Individens självbestämmande, rättsstat |

### Genomförbarhet (multiplikator, ej viktbar dimension)

`slutpoäng = politikpoäng × genomförbarhetsfaktor`

- Bedöms **på partinivå** — inga betyg på namngivna individer.
- Mätbara proxies: regeringserfarenhet, intern stabilitet, historik av
  genomförda förslag, sakerfarenhet i partitoppen.
- I upplåst läge finns ett reglage "hur mycket ska genomförbarhet spela roll?"
  (0–100 %) som skalar multiplikatorns genomslag: vid 0 % är faktorn alltid 1,
  vid 100 % får den fullt genomslag.

### Beräkning

- Vikterna normaliseras så att de summerar till 1.
- `politikpoäng = Σ (vikt_d × poäng_d)` över de sex dimensionerna.
- `slutpoäng = politikpoäng × (1 − g + g × genomförbarhetsfaktor)` där `g` är
  genomslagsreglaget (0–1) och genomförbarhetsfaktorn ligger i [0, 1].
- Ranking sorteras på slutpoäng. All beräkning sker i klienten.

## Datasetet

- De 8 riksdagspartierna (S, M, SD, C, V, KD, L, MP).
- Per parti och dimension: poäng 0–100 + **obligatorisk motivering** +
  **obligatorisk källhänvisning** (partiprogram, valkompassvar, riksdagsdata).
- Per parti: genomförbarhetsfaktor 0–1 + motivering + källor.
- Kureras AI-assisterat under utveckling; uppdateras manuellt vid kursändringar.
- Lagras som typade TS/JSON-filer i repot, valideras med zod — bygget failar
  om en poäng saknar motivering eller källa.
- Datasetet är daterat ("bedömning per juni 2026") och visas i sin helhet på
  sajten. Transparensen är försvaret mot "vem bestämde det här?"-kritiken.

## Sajtstruktur

1. **Förstasidan** — domen i jätteformat, vinnarens poäng, fullständig ranking,
   låset som låser upp viktningspanelen.
2. **Upplåst läge** — reglagepanel (6 dimensioner + genomförbarhetsgenomslag),
   ranking som animerat räknas om, delbar länk med vikterna i URL:ens
   query-parametrar.
3. **Metodik-sidan** — varje dimension förklarad med filosofisk grund, varje
   partis poäng med motivering och källor.
4. **Om-sidan** — konstprojektramen, upphovsperson, syfte.

## Teknik

- Next.js (App Router), helt statisk export, hostad på Vercel.
- Ingen backend, ingen databas — all omräkning klientside.
- Zod-validering av datasetet körs i bygget.
- Enhetstester på beräkningslogiken: viktnormalisering,
  genomförbarhetsmultiplikator, ranking, URL-serialisering av vikter.

## Felhantering

- Ogiltiga vikter i URL:en (utanför intervall, fel format) faller tillbaka till
  defaultvikterna utan felmeddelande.
- Datasetfel upptäcks i bygget (zod), aldrig i runtime.

## Avgränsningar (YAGNI)

Medvetet bortvalt i v1: historikgrafer över domens förändring över tid, fler
länder, användarkonton, individbedömningar av politiker, live AI-pipeline.
Allt kan läggas till senare utan att arkitekturen ändras.
