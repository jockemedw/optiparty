<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Optiparty

Statisk Next.js-sajt (App Router, `output: "export"` + `trailingSlash`) som förkunnar Sveriges
"matematiskt optimala parti" ur en zod-validerad värdemodell. Konst- och metodprojekt.
Live: https://optiparty.vercel.app · Repo: github.com/jockemedw/optiparty

## Kommandon

```powershell
npm test           # vitest, tests/
npm run validate   # zod-validering av datasetet med läsbara fel
npm run build      # kör validate + test via prebuild, exporterar till out/
npx serve out      # rök-testa den statiska exporten
```

## Arkitektur

- `src/data/dataset.ts` — ENDA stället innehåll ändras (dimensioner, partipoäng, källor, genomförbarhet)
- `src/lib/model/` — rena, testade funktioner: `types.ts` (zod-kontrakt), `calc.ts` (normalisering/ranking), `url.ts` (vikter ↔ query-params)
- `src/components/VerdictBoard.tsx` äger allt UI-state; `WeightPanel`/`RankingList`/`CalculationSheet` är dumma
- `src/app/` — `/` (domen), `/metodik` (alla poäng + källor), `/om`

## Styrning (viktigast)

- **Inga handjusterade poäng.** Värden ändras endast via protokolländring eller ändrat källäge,
  enligt `docs/research/2026-06-11-bedomningsprotokoll.md` (godkänt). Varje ändring kräver en
  daterad rad i `docs/research/CHANGELOG-bedomningar.md`.
- Genomförbarhetsfaktorerna BERÄKNAS ur rubriken i protokollets §3 — tyck inte.
- De sex dimensionerna är låsta (`docs/research/2026-06-11-vardedimensioner-harledning.md` — rör ej).
- Käll-URL:er i datasetet ska fetch-verifieras innan de läggs in (flera partisajter har döda gamla URL:er).

## Fallgropar

- `useSearchParams` kräver Suspense-wrapper vid statisk export (se `src/app/page.tsx`).
- `trailingSlash: true` krävs — nav-länkarna är `/metodik/`, `/om/`; utan den 404:ar strikta statiska värdar.
- Kör inte `npx create-next-app` i repo-roten (krockar med `docs/`).
- RSC-prefetch-404:or i konsolen vid lokal servering är kända och ofarliga.

## Arbetsflöde

- Handover-rutin: `/handover` skriver `.claude/handovers/latest.md`, `/resume` läser den.
- Deploy: `npx vercel --yes` (projektet är länkat). Produktion/domän avgörs av projektägaren.
