# Protokolländring v1.1 — delkomponenter per dimension

**Datum:** 2026-06-12
**Status:** UTKAST — kräver projektägarens godkännande (metodgranskning) innan
någon poäng ändras. Tills dess gäller v1:s kurerade dimensionspoäng oförändrat.
**Ändrar:** §2 i `2026-06-11-bedomningsprotokoll.md` (skalankare för
dimensionspoäng). Övriga paragrafer (omfångsregel, genomförbarhetsrubrik,
ändringslogg, grundregel) berörs inte.

## A. Syfte

V1:s dimensionspoäng är ankarkalibrerade kurerade bedömningar — protokollet
erkänner detta som en begränsning och pekar ut en finare nedbrytning som
v1.1-förbättring. Denna ändring ersätter den kurerade poängen per dimension
med en **beräknad** poäng: en frågebank per dimension, en poäng per fråga
grundad i partiets validerbara inriktning, och en viktad summering till
dimensionstotal. Bedömningsutrymmet flyttas därmed från "vilken poäng
förtjänar partiet på dimensionen?" (en bedömning) till "vilken inriktning har
partiet dokumenterat i denna konkreta fråga?" (många små, källbundna och var
för sig granskningsbara bedömningar).

## B. Frågebank och urvalskriterier

Frågebanken byggs ur offentligt dokumenterade frågor från de stora
valkompasserna vid senaste riksdagsval (SVT:s valkompass, TV4/Expressen,
Aftonbladet, DN, Sveriges Radio) kompletterat med riksdagsvoteringar i
sakfrågor. Valkompassfrågorna används för att de är (1) formulerade av
oberoende redaktioner, (2) besvarade av partierna själva offentligt, och
(3) jämförbara mellan partier.

En fråga tas in i banken endast om samtliga kriterier uppfylls:

- **K1 — Validerbarhet:** varje partis inriktning i frågan kan beläggas med
  minst en citerbar offentlig källa: partiets eget valkompass-svar,
  partiprogram/valmanifest, riksdagsvotering eller officiellt
  ställningstagande. Käll-URL:er fetch-verifieras innan de läggs in
  (befintlig regel).
- **K2 — Entydig mappning:** frågan kan mappas till exakt en av de sex låsta
  dimensionerna, med angiven polaritet (vilket svar som främjar dimensionens
  mål). Frågor som väsentligen mäter två dimensioner samtidigt utesluts eller
  omformuleras inte — de utesluts.
- **K3 — Sakpolitik:** frågan rör politikens innehåll, inte personer,
  regeringsfrågan eller partistrategi.
- **K4 — Deduplicering:** frågor från olika kompasser som mäter samma
  sakfråga slås ihop till en komponent; samtliga ursprung anges i `origin`.
- **K5 — Täckning:** varje dimension ska ha minst 5 komponenter innan dess
  beräknade poäng ersätter den kurerade. Färre än 5 → dimensionen väntar.

## C. Poäng per fråga (frågeankare)

Partiets validerade inriktning i frågan bedöms mot dimensionens mål på en
femgradig skala. Den grova skalan är avsiktlig: den minskar
bedömningsutrymmet per fråga, och precisionen uppstår i aggregeringen.

| Frågepoäng | Innebörd |
|---|---|
| 0 | Inriktningen motverkar aktivt dimensionens mål |
| 25 | Inriktningen motverkar målet delvis |
| 50 | Neutral, blandad eller otydlig inriktning |
| 75 | Inriktningen främjar målet |
| 100 | Inriktningen främjar målet starkt och konkret |

## D. Saknad position

Om ett parti saknar validerbar inriktning i en fråga sätts frågepoängen 50
(neutral prior) och positionsfältet anger uttryckligen att position saknas,
med källa till var den eftersökts. Tyst gissning är förbjuden.

## E. Viktning inom dimension

Default är likavikt per komponent — samma indifferensprior som v1 använder
mellan dimensionerna. Avsteg från likavikt kräver en härledning i detta
dokument och projektägarens godkännande. (Vikter lagras explicit per
komponent så att framtida härledda vikter inte kräver schemaändring.)

## F. Aggregering och maskinell konsistens

```
dimensionspoäng = Σ ( normaliserad vikt × frågepoäng ), avrundad till heltal
```

Den lagrade dimensionspoängen valideras maskinellt mot komponentberäkningen
av zod-schemat (tolerans ±0,5 för heltalsavrundning). Ett dataset där lagrad
och beräknad poäng avviker bygger inte. Implementerat i
`src/lib/model/types.ts` (`ComponentSchema` + konsistenskontroll) och
`src/lib/model/calc.ts` (`componentScore`), aktivt från och med detta utkast
men vilande tills komponenter förekommer i datasetet.

## G. Migrering

- Dimension för dimension: en dimension migreras i sin helhet (alla åtta
  partier samtidigt) när dess frågebank uppfyller K5 och alla positioner är
  källverifierade.
- Varje migrerad dimension ger en daterad rad per parti i
  `CHANGELOG-bedomningar.md` med gammal kurerad poäng, ny beräknad poäng och
  åberopad regel (§0a: protokolländring).
- Domen ändras endast som konsekvens av beräkningen — aldrig som mål för den.
- Under migreringen samexisterar kurerade (utan komponenter) och beräknade
  (med komponenter) dimensioner; UI:t redovisar komponenterna när de finns.

## H. Granskning

Oförändrat enligt §0 och §5: projektägaren godkänner **metoden** — kriterierna
K1–K5, frågeankarna, likaviktsdefaulten och migreringsreglerna — inte de
enskilda frågepoäng som metoden producerar. Invändningar formuleras som
metodinvändningar och omberäknar alla partier likformigt.

## I. Kandidatfrågor per dimension (att verifiera — INTE positioner)

Nedan är en inventering av frågeområden som återkommer i valkompasserna och
preliminärt uppfyller K2–K3. Detta är en arbetslista för datainsamlingen:
inga partipositioner eller poäng får härledas ur listan utan källverifiering
enligt K1.

- **Samlat välbefinnande:** vinster i välfärden; skattetryckets nivå;
  sjukförsäkringens ersättningsnivå; vårdens organisering; skolans
  huvudmannaskap.
- **Lidandeminimering:** a-kassans nivå; psykiatrisatsningar; sprutbyte/
  skademinimering; hemlöshetsstrategi; brottsofferstöd; vårdköer.
- **Fördelningsrättvisa:** kapital-/förmögenhetsbeskattning; ränteavdrag;
  marginalskatt; skolval/kösystem; bostadspolitik.
- **Insatsrättvisa:** jobbskatteavdrag; bidragstak; motprestationskrav;
  arbetslinjen; företagandets villkor.
- **Frihet & autonomi:** övervakningsbefogenheter; valfrihet i välfärden;
  dödshjälpsutredning; alkoholmonopol/gårdsförsäljning; public service-
  styrning; föreningsfrihet.
- **Framtidsansvar:** klimatmål 2045; reduktionsplikt; kärnkraft/förnybart;
  överskottsmål; FoU-anslag; civilförsvar/beredskap.

## J. Vad projektägaren godkänner med detta dokument

Genom godkännande av v1.1 godkänns: urvalskriterierna K1–K5, frågeankarna i
§C, neutralprior-regeln i §D, likaviktsdefaulten i §E, aggregerings- och
konsistensregeln i §F samt migreringsordningen i §G. Därefter genomförs
datainsamlingen mekaniskt enligt protokollet, med ändringslogg per migrerad
dimension.
