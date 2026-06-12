# Frågebank: Insatsrättvisa (migrering enligt protokoll v1.1)

**Datum:** 2026-06-13
**Status:** Genomförd enligt godkänt protokoll v1.1
(`2026-06-12-protokoll-v11-delkomponenter.md`). Dimensionen Insatsrättvisa är
tredje dimensionen som migreras enligt §G (efter Framtidsansvar och
Fördelningsrättvisa).

## Frågorna (likavikt per §E)

Formuleringarna är härledda ur protokollets kandidatområden för Insatsrättvisa
(§I: jobbskatteavdrag, bidragstak, motprestationskrav, arbetslinjen,
företagandets villkor) samt SVT:s valkompass 2022. Polariteten anger vilken
inriktning som främjar dimensionens mål: att arbete, ansträngning och bidrag
till samhället lönar sig — proportion mellan insats och utfall, drivkrafter för
arbete och företagande och skydd mot friåkning (förtjänstteori, Miller 1999).
Måttet gäller alltså om utfallen *speglar insatsen*, inte om gapen är små
(det är Fördelningsrättvisa). Flera frågor drar därför medvetet åt motsatt håll
mot fördelningsdimensionen — det är den avsedda spänningen mellan reglagen.

| Id | Fråga | Polaritet |
|---|---|---|
| jobbskatteavdrag | Skatten på arbetsinkomster ska sänkas, t.ex. genom ett förstärkt jobbskatteavdrag. | Sänkt skatt på arbete främjar målet |
| bidragstak-motprestation | Bidragssystemen ska stramas åt med bidragstak och motprestationskrav så att det tydligt lönar sig att arbeta. | Bidragstak och motprestationskrav främjar målet |
| a-kassa-niva | Den tillfälliga höjningen av a-kassan ska inte permanentas, så att gapet mellan ersättning och arbetsinkomst bevaras. | Bevarat gap mellan a-kassa och arbetsinkomst främjar målet |
| anstallningsskydd | Det ska bli enklare för arbetsgivare att säga upp anställda (en mer rörlig arbetsmarknad). | Mer flexibel arbetsmarknad främjar målet |
| rut-avdrag | RUT-avdraget ska behållas som en skattelättnad som gör hushållsnära arbete lönsamt och vitt. | Bevarat RUT-avdrag främjar målet |

## Uteslutna frågor (K2: ej entydig polaritet)

- **Karensdagen ska avskaffas:** SVT:s valkompass 2022 (riksdag) hade frågan,
  men den mäter primärt sjukförsäkringens generositet (Lidandeminimering).
  Insatspolariteten är tvåsidig — karensavdraget är ett friåkningsskydd mot
  korttidsfrånvaro, men slår samtidigt hårdast mot dem med små marginaler som
  inte har råd att avstå inkomst vid sjukdom. Utesluts.
- **"Hur mycket ska höginkomsttagare betala i skatt?":** redan entydigt mappad
  till Fördelningsrättvisa (F2 där) och mäter primärt relativa gap. För insats
  är polariteten tvåsidig — lägre marginalskatt belönar ansträngning, men frågan
  mäter fördelning. Enligt K2 mappas en fråga till exakt en dimension; utesluts
  här för att inte dubbelräknas.

## Källäge och §D-flaggor

Samtliga käll-URL:er är fetch-verifierade 2026-06-13. Tre av fem frågor
valideras för alla åtta partier ur var sin gemensam källa — SVT:s valkompass
2022 (riksdag), där partierna själva besvarat de exakta förslagen:

- `a-kassa-niva` — SVT:s valkompass 2022, "Den tillfälliga höjningen i A-kassan
  ska permanentas" (polariteten vänd: motstånd mot permanentad höjning främjar
  målet, eftersom gapet mot arbetsinkomst bevaras).
- `anstallningsskydd` — SVT:s valkompass 2022, "Det ska bli enklare för
  arbetsgivare att säga upp anställda".
- `rut-avdrag` — SVT:s valkompass 2022, "RUT-avdraget ska avskaffas"
  (polariteten vänd: motstånd mot avskaffande främjar målet).

`jobbskatteavdrag` valideras för alla åtta partier ur Arbetsvärldens
sammanställning "Sex av åtta partier vill sänka skatten på arbete", där varje
partis ställning till sänkt skatt på arbete citeras. `bidragstak-motprestation`
valideras ur riksdagens betänkande 2025/26:SoU30 (Reformerat försörjningsstöd –
bidragstak) inklusive reservationerna: regeringspartierna M, KD, L driver
reformen tillsammans med SD, C stöder arbetslinjen med reservation om
utvärderingen, medan S (reservation 1), V (reservation 2) och MP reserverar sig
emot.

**Neutral prior 50 enligt §D:** inga. Samtliga åtta partier har en validerbar
position i var och en av de fem frågorna.

## Beräknade dimensionspoäng

F1 = jobbskatteavdrag · F2 = bidragstak-motprestation · F3 = a-kassa-niva
· F4 = anstallningsskydd · F5 = rut-avdrag.

| Parti | F1 | F2 | F3 | F4 | F5 | Total (likavikt) | Tidigare kurerad |
|---|---|---|---|---|---|---|---|
| S | 25 | 25 | 0 | 0 | 75 | **25** | 45 |
| M | 100 | 100 | 100 | 75 | 100 | **95** | 72 |
| SD | 75 | 100 | 0 | 25 | 100 | **60** | 58 |
| V | 25 | 0 | 0 | 0 | 0 | **5** | 30 |
| C | 75 | 75 | 75 | 75 | 100 | **80** | 68 |
| KD | 75 | 100 | 100 | 75 | 100 | **90** | 62 |
| L | 100 | 100 | 75 | 75 | 100 | **90** | 65 |
| MP | 75 | 0 | 0 | 0 | 75 | **30** | 40 |

## Metodnot om källbias och utfall

Till skillnad från Framtidsansvar (där partisidornas ambitionsöverdrifter drev
upp poängen) bygger fyra av fem frågor här på partiernas egna valkompass-svar
eller på riksdagsdokument med reservationer — en hårdare och jämnare
kalibrering, i linje med förbättringspunkten från Framtidsansvar. Dimensionen är
uttryckligen förtjänstinriktad och frågebanken operationaliserar den genom de
konkreta arbetslinje- och företagandeinstrument valkompassen och riksdagen
ställer frågor om: skatt på arbete, bidragstak och motprestationskrav,
a-kassenivåer, anställningsskydd och RUT. De marknadsliberala/arbetslinje-
inriktade partierna (M, KD, L, C) hamnar därför systematiskt högre än på
Fördelningsrättvisa, medan V och MP — som motsätter sig instrumenten — hamnar
lågt. Detta är samma mått-byte som vid de tidigare migreringarna: från en
sammanvägd kurerad bedömning till källverifierade ställningstaganden i enskilda
frågor, ingen handjustering. Att S faller (45→25) beror på att S i de
operationaliserade frågorna säger nej till sänkt skatt på arbete, nej till
bidragstak och ja till höjd a-kassa — den retoriska "arbetslinjen" fångas inte
av frågebankens konkreta instrument. Att SD landar mitt i fältet (60) speglar en
delad profil: ja till bidragstak, RUT och sänkt skatt på låga inkomster, men ja
till höjd a-kassa och tveksam till uppluckrat anställningsskydd.
