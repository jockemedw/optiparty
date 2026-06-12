# Ändringslogg — bedömningar

Krav enligt bedömningsprotokollet §4 (`2026-06-11-bedomningsprotokoll.md`):
varje ändring av en poäng eller faktor efter protokollets godkännande loggas
här med datum, vad som ändrades, vilken regel i §0 som åberopas (a:
protokolländring, b: ändrat källäge) och källa.

## 2026-06-13

- **Dimensionen Insatsrättvisa migrerad till beräknade poäng** (regel a:
  protokolländring v1.1). Poängen beräknas nu ur fem likaviktade delkomponenter
  med källverifierade partipositioner; frågebank, polaritet, uteslutna frågor
  och §D-läge dokumenteras i `2026-06-13-insats-fragebank.md`. Frågorna: sänkt
  skatt på arbete (jobbskatteavdrag), bidragstak och motprestationskrav,
  a-kassenivå (gapet mot arbetsinkomst), uppluckrat anställningsskydd och
  RUT-avdraget. De kurerade poängen ersätts:

  | Parti | Tidigare (kurerad) | Ny (beräknad) |
  |---|---|---|
  | S | 45 | 25 |
  | M | 72 | 95 |
  | SD | 58 | 60 |
  | V | 30 | 5 |
  | C | 68 | 80 |
  | KD | 62 | 90 |
  | L | 65 | 90 |
  | MP | 40 | 30 |

  Källor (samtliga fetch-verifierade 2026-06-13): SVT:s valkompass 2022
  (riksdag) för tre frågor med partiernas egna svar (a-kassan permanentas,
  enklare säga upp anställda, RUT-avdraget ska avskaffas), Arbetsvärldens
  sammanställning "Sex av åtta partier vill sänka skatten på arbete"
  (jobbskatteavdrag) samt riksdagens betänkande 2025/26:SoU30 (Reformerat
  försörjningsstöd – bidragstak) inklusive reservationerna (S res. 1, V res. 2,
  MP emot; M, KD, L, SD för; C för arbetslinjen med reservation). Inga §D-flaggor
  — samtliga åtta partier har validerbar position i alla fem frågor.
  Per-frågekällor anges per delkomponent i `src/data/dataset.ts`. Som vid de
  tidigare migreringarna faller de partier vars konkreta ställningstaganden inte
  matchar måttet (S, V) medan arbetslinjepartierna (M, KD, L, C) stiger — en
  konsekvens av metoden, ingen handjustering.

- **Dimensionen Fördelningsrättvisa migrerad till beräknade poäng** (regel a:
  protokolländring v1.1). Poängen beräknas nu ur fem likaviktade delkomponenter
  med källverifierade partipositioner; frågebank, polaritet, uteslutna frågor
  och §D-flagga dokumenteras i `2026-06-13-fordelning-fragebank.md`. Frågorna:
  kapitalinkomstskatt, skatt på höga arbetsinkomster, återinförd
  förmögenhets-/arvsskatt, kommunal skatteutjämning och marknadshyror. De
  kurerade poängen ersätts:

  | Parti | Tidigare (kurerad) | Ny (beräknad) |
  |---|---|---|
  | S | 72 | 75 |
  | M | 45 | 20 |
  | SD | 42 | 50 |
  | V | 78 | 100 |
  | C | 50 | 35 |
  | KD | 48 | 20 |
  | L | 46 | 35 |
  | MP | 62 | 90 |

  Källor: SVT:s valkompass 2022 (riksdag) för tre frågor med partiernas egna
  svar (höginkomstskatt, kommunal skatteutjämning, marknadshyror, samtliga
  fetch-verifierade 2026-06-13) samt riksdagens betänkande 2023/24:SkU12
  (Företag, kapital och fastighet) inklusive reservationerna för
  kapital- och förmögenhets-/arvsskatt; Socialdemokraternas och
  Vänsterpartiets skattesidor kompletterar kapitalinkomstskatten. En §D-flagga:
  S saknar validerbar position om återinförd förmögenhets-/arvsskatt
  (neutral prior 50). Per-frågekällor anges per delkomponent i
  `src/data/dataset.ts`. Som vid Framtidsansvar faller de marknadsliberala
  partierna och stiger de utjämningsinriktade när måttet byts från kurerad
  bedömning till källverifierade ställningstaganden — en konsekvens av metoden,
  ingen handjustering.

## 2026-06-12

- **Protokoll v1.1 godkänt av projektägaren** (delkomponenter per dimension:
  kriterierna K1–K5, femgradiga frågeankare, neutral prior §D, likavikt §E,
  maskinell konsistens §F, migrering §G). Se
  `2026-06-12-protokoll-v11-delkomponenter.md`.

- **Dimensionen Framtidsansvar migrerad till beräknade poäng** (regel a:
  protokolländring v1.1). Poängen beräknas nu ur fem likaviktade
  delkomponenter med källverifierade partipositioner; frågebank, polaritet,
  uteslutna frågor och §D-flaggor dokumenteras i
  `2026-06-12-framtid-fragebank.md`. De kurerade poängen ersätts:

  | Parti | Tidigare (kurerad) | Ny (beräknad) |
  |---|---|---|
  | S | 58 | 80 |
  | M | 55 | 60 |
  | SD | 35 | 45 |
  | V | 70 | 85 |
  | C | 62 | 80 |
  | KD | 57 | 55 |
  | L | 60 | 65 |
  | MP | 82 | 85 |

  Källor: partiernas politiksidor (fetch-verifierade 2026-06-12), riksdagens
  betänkande 2023/24:MJU5 (reduktionsplikten, samtliga partiers position via
  reservationerna) samt SVT (SD:s anslutning till 2045-målet, 2023-11-14).
  Per-frågekällor anges per delkomponent i `src/data/dataset.ts`.
  Konsekvens för default-domen (likaviktat, g = 1): S 63,7 · M 55,1 ·
  L 48,1 · MP 47,9 · KD 45,5 · C 43,8 · SD 30,4 · V 28,0 — L och MP byter
  plats jämfört med tidigare; domen i toppen ändras inte.

## 2026-06-11

- **Protokollet godkänt av projektägaren** (metodgranskning enligt §5:
  omfångsregeln, skalankarna, rubriken 0.45/0.25/0.30 och koalitionsgolvet 0.3).

- **Rättelse av §3.3 vid godkännandegranskningen** (felaktig sakuppgift
  enligt §0, godkänd av projektägaren samma dag):
  - MP: E-klassning 0.7 → 1.0. MP hade statsråd t.o.m. november 2021, dvs.
    under mandatperioden 2018–2022, vilket uppfyller E-tabellens nivå 1.0
    ("statsråd under någon av de två senaste mandatperioderna").
    Faktor 0.72 → 0.81.
  - C: E-klassning 0.5 → 0.7. C:s sista statsråd avgick 3 oktober 2014,
    vilket är inom 12 år från bedömningsdatumet 2026-06-11 och uppfyller
    E-tabellens nivå 0.7 ("statsråd inom 12 år"). Faktor 0.62 → 0.69.

- **Genomförbarhetsfaktorer ersatta för samtliga åtta partier** (regel a:
  protokollets §3 ersätter de tidigare kurerade faktorerna, som var
  bedömningar utan rubrik):

  | Parti | Tidigare (kurerad) | Ny (rubrik §3.3) |
  |---|---|---|
  | S | 0.85 | 1.00 |
  | M | 0.80 | 0.94 |
  | KD | 0.72 | 0.81 |
  | MP | 0.55 | 0.81 |
  | L | 0.65 | 0.81 |
  | C | 0.70 | 0.69 |
  | SD | 0.60 | 0.64 |
  | V | 0.50 | 0.45 |

  Källor: Valmyndigheten, valresultat 2022 (P-komponenten, mandat);
  Riksdagen (E/T-komponenterna, regeringsinnehav). E/P/T-klassningen per
  parti dokumenteras i motiveringen i `src/data/dataset.ts`.
