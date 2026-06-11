# Bedömningsprotokoll för Optiparty

**Datum:** 2026-06-11
**Status:** Godkänd av projektägaren 2026-06-11. Vid godkännandegranskningen
rättades två E-klassningar i §3.3 (MP, C) som avvek från E-tabellen — se
`CHANGELOG-bedomningar.md`.
**Kompletterar:** `2026-06-11-vardedimensioner-harledning.md` (de låsta dimensionerna)

## 0. Grundregel: inga handjusterade värden

Ingen — varken projektägaren, en utvecklare eller en AI — justerar enskilda
poäng direkt. Ett värde i datasetet får bara ändras genom att:

a) **detta protokoll ändras** (och godkänns på nytt av projektägaren), eller
b) **källäget ändras** (ett parti byter dokumenterat politik), varvid en
   ombedömning görs *enligt protokollet* med daterad ändringslogg.

Projektägarens roll vid granskningsgrindar är **metodgranskning**: följdes
protokollet, är källorna riktiga och aktuella, är motiveringarna sakliga?
Aldrig värdekalibrering. En granskningsflagga ("poängen kunde vara X i
stället") ändrar en poäng endast om den påvisar ett protokollbrott eller en
felaktig sakuppgift.

## 1. Vems välfärd räknas? (omfångsregeln)

Alla personer som **varaktigt berörs av svensk politik** ingår i bedömningen —
inte enbart medborgare. Detta är härlett, inte valt: samtliga sex
teoritraditioner bakom dimensionerna är universalistiska. Bentham räknar var
och en som en ("everybody to count for one, nobody for more than one"); Rawls
okunnighetsslöja döljer just sådana egenskaper som medborgarskap; Sens och
Nussbaums capability approach formulerades uttryckligen om mänskliga förmågor,
inte medborgerliga. Ett protokoll som begränsade omfånget till medborgare
skulle bryta mot teorierna som modellen vilar på.

*Konsekvens:* bedömningar av t.ex. frihets- och lidandeeffekter inkluderar
effekter på boende utan medborgarskap. (Detta avgör granskningsflaggan om SD:s
frihetspoäng: bedömningen 40 står, eftersom den följer omfångsregeln.)

## 2. Skalankare för dimensionspoäng

Dimensionspoäng (0–100) sätts mot följande ankare, alltid med motivering och
källa per poäng:

| Poäng | Innebörd |
|---|---|
| ~10 | Politiken motverkar aktivt dimensionens mål som bärande linje |
| ~30 | Motverkar målet i väsentliga delar, eller målet saknas i partiets program |
| ~50 | Blandad eller neutral förväntad effekt |
| ~70 | Målet är uttalad prioritet med konkret politik |
| ~90 | Målet är partiets bärande prioritet med omfattande, konkret program |

**Erkänd v1-begränsning:** dimensionspoängen är ankarkalibrerade kurerade
bedömningar av partiernas offentliga material — inte mekaniska beräkningar.
Detta redovisas öppet på metodiksidan. En finare nedbrytning (delkomponenter
per dimension med egna vikter) är en dokumenterad v1.1-förbättring; den ska i
så fall härledas och godkännas som protokolländring, inte improviseras.

*Konsekvens för kvarvarande granskningsflaggor (SD framtid 35, V insats 30,
MP framtid 82):* poängen är förenliga med ankarna och deras motiveringar
påvisar inga sakfel → de står. Flaggornas "kunde argumenteras ±10" är exakt
den typ av preferensjustering grundregeln förbjuder.

## 3. Genomförbarhetsfaktorn: mekanisk rubrik

Genomförbarheten är en sannolikhetsskattning och ska därför beräknas, inte
tyckas. Faktorn beräknas i två steg.

### 3.1 Råpoäng: `raw = 0.45·E + 0.25·P + 0.30·T`

**E — Regeringsvana** (dokumenterbart faktum):

| Nivå | Kriterium |
|---|---|
| 1.0 | Statsråd under någon av de två senaste mandatperioderna |
| 0.7 | Statsråd inom 12 år, men inte de två senaste mandatperioderna |
| 0.5 | Statsråd inom 20 år |
| 0.3 | Formaliserat regeringssamarbete utan statsråd (t.ex. samarbetsavtal) |
| 0.1 | Inget av ovanstående |

**P — Parlamentarisk tyngd** (dokumenterbart faktum): partiets mandatandel i
senaste riksdagsvalet, normaliserad mot det största partiet (största parti = 1.0).

**T — Genomslagshistorik senaste 12 åren** (dokumenterbart med källor):

| Nivå | Kriterium |
|---|---|
| 1.0 | Lett regering |
| 0.8 | Koalitionspart med statsråd |
| 0.6 | Avtalspart med dokumenterat programgenomslag (t.ex. Tidöavtalet, januariavtalet) |
| 0.4 | Återkommande budgetuppgörelser med regering |
| 0.2 | Inget formaliserat genomslag |

### 3.2 Koalitionsgolv: `factor = 0.3 + 0.7·raw`

Motivering: varje riksdagsparti har en realistisk koalitionsväg till inflytande;
en faktor nära noll skulle påstå att partiets politik är praktiskt omöjlig,
vilket är empiriskt falskt i ett proportionellt flerpartisystem. Golvet 0.3
hindrar också att genomförbarheten ensam dominerar hela modellen (utan golv
avgör multiplikatorn mer än samtliga värdedimensioner tillsammans, vilket
skulle göra viktreglagen kosmetiska).

### 3.3 Beräknade värden (mandat per valet 2022: S 107, SD 73, M 68, V 24, C 24, KD 19, MP 18, L 16 av 349)

| Parti | E | P | T | raw | **factor** |
|---|---|---|---|---|---|
| S | 1.0 | 1.00 | 1.0 (ledde regering 2014–2022) | 1.000 | **1.00** |
| M | 1.0 | 0.64 | 1.0 (leder regering) | 0.910 | **0.94** |
| KD | 1.0 | 0.18 | 0.8 (koalitionspart) | 0.735 | **0.81** |
| MP | 1.0 | 0.17 | 0.8 (koalitionspart 2014–2021) | 0.733 | **0.81** |
| L | 1.0 | 0.15 | 0.8 (koalitionspart) | 0.728 | **0.81** |
| C | 0.7 | 0.22 | 0.6 (januariavtalet) | 0.550 | **0.69** |
| SD | 0.3 | 0.68 | 0.6 (Tidöavtalet) | 0.485 | **0.64** |
| V | 0.1 | 0.22 | 0.4 (budgetuppgörelser) | 0.220 | **0.45** |

*E-noter:* MP hade statsråd t.o.m. november 2021, dvs. under mandatperioden
2018–2022 → nivå 1.0 (rättat från 0.7). C:s sista statsråd avgick 3 oktober
2014, inom 12 år från bedömningsdatumet 2026-06-11 → nivå 0.7 (rättat från
0.5).

Dessa ersätter de tidigare kurerade faktorerna (som var bedömningar utan
rubrik och därmed bröt mot grundregeln). Varje partis E/P/T-klassning
dokumenteras med källa i datasetet.

### 3.4 Konsekvens för default-domen (likaviktat, g = 1)

Ranking med rubrikens faktorer (tabellens avrundade faktorer, som datasetet
lagrar): S 60.0 · M 54.4 · MP 47.5 · L 47.4 · KD 45.8 · C 41.7 · SD 29.3 ·
V 26.9. (Domen ändras inte i toppen; mittfältet omsorteras och MP passerar
L/KD.)

## 4. Ändringslogg-krav

Varje ändring av en poäng eller faktor efter protokollets godkännande kräver
en daterad rad i `docs/research/CHANGELOG-bedomningar.md`: vad ändrades, vilken
regel (a/b i §0) som åberopas, och källan.

## 5. Vad projektägaren godkänner

Genom att godkänna detta protokoll godkänner projektägaren **metoden** —
omfångsregeln, skalankarna, rubriken med dess vikter (0.45/0.25/0.30) och
koalitionsgolvet (0.3) — inte de enskilda siffror som metoden producerar.
Invändningar ska formuleras som metodinvändningar ("vikten på parlamentarisk
tyngd är fel därför att…"), vilka i så fall ändrar protokollet och omberäknar
alla partier likformigt.
