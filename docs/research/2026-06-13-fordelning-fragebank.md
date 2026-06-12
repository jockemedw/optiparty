# Frågebank: Fördelningsrättvisa (migrering enligt protokoll v1.1)

**Datum:** 2026-06-13
**Status:** Genomförd enligt godkänt protokoll v1.1
(`2026-06-12-protokoll-v11-delkomponenter.md`). Dimensionen Fördelningsrättvisa
är andra dimensionen som migreras enligt §G (efter Framtidsansvar).

## Frågorna (likavikt per §E)

Formuleringarna är härledda ur valkompassernas återkommande frågeområden (§I:
kapital-/förmögenhetsbeskattning, marginalskatt, bostadspolitik) samt SVT:s
valkompass 2022. Polariteten anger vilken inriktning som främjar dimensionens
mål: jämnare fördelning av resurser, möjligheter och risker — mindre relativa
gap, lika livschanser och social rörlighet (Rawls differensprincip).

| Id | Fråga | Polaritet |
|---|---|---|
| kapitalinkomstskatt | Skatten på stora kapitalinkomster ska höjas. | Höjd kapitalskatt främjar målet |
| hoga-inkomster-skatt | Skatten på höga arbetsinkomster ska höjas. | Höjd skatt på höga inkomster främjar målet |
| formogenhet-arvsskatt | Skatt på stora förmögenheter och arv ska återinföras. | Återinförande främjar målet |
| kommunal-skatteutjamning | Mer skatteinkomster ska omfördelas från rika till fattiga kommuner. | Mer omfördelning främjar målet |
| marknadshyror | Hyror ska sättas efter bruksvärde i stället för på en fri marknad (inga marknadshyror). | Nej till marknadshyror främjar målet |

## Uteslutna frågor (K2: ej entydig polaritet)

- **Vinstutdelning i friskolor:** SVT:s valkompass 2022 hade en riksdagsfråga
  om vinstförbud i friskolor, men den mäter främst driftsform och valfrihet
  (Frihet & autonomi) snarare än fördelning. Fördelningspolariteten är dessutom
  omtvistad — ett vinstförbud kan både minska segregationsdrivande urval och
  minska utbudet av skolplatser. Utesluts.
- **Ränteavdraget:** polariteten mot fördelningsmålet är inte entydig. En
  nedtrappning träffar skuldsatta förstagångsköpare med små förmögenheter lika
  hårt som förmögna, medan kontantköpare inte berörs alls; både nedtrappning
  och bibehållen nivå kan hävdas främja jämlikhet. Utesluts.

## Källäge och §D-flaggor

Samtliga käll-URL:er är fetch-verifierade 2026-06-13. Tre frågor valideras för
alla åtta partier ur en gemensam källa var — SVT:s valkompass 2022 (riksdag),
där partierna själva besvarat de exakta frågorna:

- `hoga-inkomster-skatt` — SVT:s valkompass 2022, "Hur mycket ska
  höginkomsttagare betala i skatt?"
- `kommunal-skatteutjamning` — SVT:s valkompass 2022, "Mer skatteinkomster ska
  omfördelas från rika till fattiga kommuner".
- `marknadshyror` — SVT:s valkompass 2022, "Marknadshyror ska införas på nya
  hyresrätter" (polariteten vänd: motstånd mot marknadshyror främjar målet).

`kapitalinkomstskatt` och `formogenhet-arvsskatt` valideras ur riksdagens
betänkande 2023/24:SkU12 (Företag, kapital och fastighet) inklusive
reservationerna — V (reservation 8: återinförd arvs- och gåvoskatt; reservation
16: statlig fastighetsskatt på dyra fastigheter), MP (reservation 9: höjd
kapitalbeskattning relativt arbete) samt den rödgröna/borgerliga skiljelinjen
där M, SD, C, KD och L avslog förslagen om höjda kapital- och
förmögenhetsskatter. Socialdemokraternas och Vänsterpartiets egna skattesidor
kompletterar `kapitalinkomstskatt`.

**Neutral prior 50 enligt §D** (position eftersökt men ej validerbar):

- S, `formogenhet-arvsskatt` — eftersökt på
  socialdemokraterna.se/var-politik/a-till-o/skatter; sidan behandlar
  kapitalinkomstskatt men anger ingen position om återinförd förmögenhets- eller
  arvsskatt. Neutral prior enligt §D.

## Beräknade dimensionspoäng

F1 = kapitalinkomstskatt · F2 = hoga-inkomster-skatt · F3 = formogenhet-arvsskatt
· F4 = kommunal-skatteutjamning · F5 = marknadshyror.

| Parti | F1 | F2 | F3 | F4 | F5 | Total (likavikt) | Tidigare kurerad |
|---|---|---|---|---|---|---|---|
| S | 75 | 75 | 50* | 75 | 100 | **75** | 72 |
| M | 25 | 0 | 25 | 25 | 25 | **20** | 45 |
| SD | 50 | 50 | 25 | 25 | 100 | **50** | 42 |
| V | 100 | 100 | 100 | 100 | 100 | **100** | 78 |
| C | 25 | 25 | 25 | 75 | 25 | **35** | 50 |
| KD | 25 | 25 | 25 | 25 | 0 | **20** | 48 |
| L | 25 | 25 | 25 | 75 | 25 | **35** | 46 |
| MP | 75 | 100 | 75 | 100 | 100 | **90** | 62 |

\* = neutral prior enligt §D.

## Metodnot om källbias och utfall

Dimensionen är uttryckligen egalitär (differensprincipen), och frågebanken
operationaliserar den genom de konkreta omfördelningsinstrument valkompasserna
ställer frågor om: progressiv kapital-, inkomst- och förmögenhetsbeskattning,
kommunal skatteutjämning och reglerade hyror. Marknadsliberala partier hamnar
därför systematiskt lägre på denna dimension än den kurerade bedömningen var,
som gav dem tillgodoräknat för "lika chanser via skola och arbetslinje" —
en inriktning som inte fångas av fördelningsfrågornas relativa gap-mått.
Att M och KD faller (45→20, 48→20) och att V och MP stiger (78→100, 62→90) är
en konsekvens av att måttet bytts från en sammanvägd bedömning till
källverifierade ställningstaganden i enskilda fördelningsfrågor — inte av någon
handjustering. Till skillnad från Framtidsansvar bygger tre av fem frågor här
på partiernas egna valkompass-svar snarare än på partisidornas
ambitionsöverdrifter, vilket ger en hårdare och jämnare kalibrering.
