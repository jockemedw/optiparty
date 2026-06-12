# Frågebank: Lidandeminimering (migrering enligt protokoll v1.1)

**Datum:** 2026-06-13
**Status:** Genomförd enligt godkänt protokoll v1.1
(`2026-06-12-protokoll-v11-delkomponenter.md`). Dimensionen Lidandeminimering är
fjärde dimensionen som migreras enligt §G (efter Framtidsansvar,
Fördelningsrättvisa och Insatsrättvisa).

## Frågorna (likavikt per §E)

Formuleringarna är härledda ur protokollets kandidatområden för
Lidandeminimering (§I: psykiatrisatsningar, sprutbyte/skademinimering,
hemlöshetsstrategi, brottsofferstöd, vårdköer). Polariteten anger vilken
inriktning som främjar dimensionens mål: att lindra situationen i absoluta
termer för dem som har det sämst — fattiga, psykiskt sjuka, missbrukare,
hemlösa, brottsoffer och vårdköande (negativ utilitarism, Popper;
prioritarianism, Parfit). Måttet gäller den absoluta nivån hos de sämst ställda,
inte de relativa gapen (det är Fördelningsrättvisa) och inte den generella
välfärden för alla (det är Samlat välbefinnande).

| Id | Fråga | Polaritet |
|---|---|---|
| psykiatri | Vården av psykisk ohälsa och suicidprevention ska byggas ut kraftigt. | Utbyggd psykiatri främjar målet |
| narkotika-skademinimering | Narkotikapolitiken ska läggas om mot skademinimering (sprutbyte, naloxon, brukarrum, lågtröskelvård) och kriminaliseringen av eget bruk ska omprövas. | Omläggning mot skademinimering främjar målet |
| hemloshet-bostad-forst | En nationell hemlöshetsstrategi enligt Bostad först ska driva ner hemlösheten. | Ambitiös hemlöshetsstrategi/Bostad först främjar målet |
| brottsofferstod | Stödet till brottsoffer ska stärkas. | Stärkt brottsofferstöd främjar målet |
| vardkoer | Vårdköerna ska kortas med kraftfulla åtgärder. | Kortade köer främjar målet |

## Uteslutna frågor (K2/K4)

- **A-kassans nivå:** listas i protokollets §I även för Lidandeminimering, men
  är redan migrerad och mappad till Insatsrättvisa (komponenten `a-kassa-niva`,
  med inverterad polaritet "bevarat gap främjar"). Enligt K4 mappas en fråga
  till exakt en dimension; utesluts här för att inte dubbelräknas.
- **Tiggeriförbud:** polariteten mot lidandemålet är tvåsidig — ett förbud kan
  hävdas både öka de mest utsattas utsatthet (kriminaliserar de fattigaste) och
  minska utnyttjandet av människor i tiggeri. Utesluts enligt K2.
- **Sjukförsäkringens ersättningsnivå / karensavdraget:** mappas i protokollets
  §I till Samlat välbefinnande ("sjukförsäkringens ersättningsnivå") och har
  dessutom tvåsidig polaritet (friåkningsskydd kontra skydd för dem med små
  marginaler, jfr K2-uteslutningen i Insatsrättvisa). Utesluts här (K2/K4).

## Källäge och §D-flaggor

Samtliga käll-URL:er är fetch-verifierade 2026-06-13. Två av fem frågor
valideras för alla åtta partier ur var sin gemensam källa — SVT:s
valfrågeguiden 2022, där partierna själva besvarat redaktionens förslag:

- `psykiatri` — SVT:s valfrågeguiden 2022, "Minska psykisk ohälsa" (samtliga
  åtta partier stödjer; poängen skiljs av konkretionsgrad enligt §C).
- `vardkoer` — SVT:s valfrågeguiden 2022, "Kortare vårdköer" (samtliga åtta
  partier stödjer; namngivna strukturreformer ger 100, generella åtaganden 75).

`narkotika-skademinimering` valideras ur riksdagens betänkande 2024/25:SoU13
(Alkohol, narkotika, dopning, tobak och spel) inklusive reservationerna — V
(res. 10, Karin Rågsjö: utvärdera kriminaliseringen, mål om minskade skador,
brukarrum), MP (res. 18, Ulrika Westerlund: skademinimering och utredning av
brukarrum), S (res. 17: naloxon och samordnad vård men fast restriktiv linje),
L (brukarrum och naloxon) samt KD (Dan Hovskär: nej till avkriminalisering,
"narkotikafritt samhälle") och M/SD som försvarade den restriktiva linjen utan
skademinimerande reservationer. Centerpartiets position valideras separat ur
SVT:s rapportering av partistämmans beslut 2025-11-15 att avkriminalisera
förekomst av narkotika i kroppen.

`hemloshet-bostad-forst` valideras för sju partier ur Fastighetstidningens
valguide "Snabbguide till valet – social bostadspolitik" (2022) och för S ur
regeringens nationella hemlöshetsstrategi 2022–2026 (den S-ledda regeringens
beslut att införa Bostad först nationellt). `brottsofferstod` valideras för
alla åtta partier ur riksdagens betänkande 2023/24:JuU18 (Våldsbrott och
brottsoffer): oppositionens reservationer (S+MP res. 16 om en samlad
brottsofferlag, V res. 3, C:s skyddsreservationer) och Tidömajoritetens
(M, SD, KD, L) fokusskifte mot brottsoffer med utökat mandat för
Brottsoffermyndigheten.

**Neutral prior 50 enligt §D:** inga. Samtliga åtta partier har en validerbar
position i var och en av de fem frågorna.

## Beräknade dimensionspoäng

F1 = psykiatri · F2 = narkotika-skademinimering · F3 = hemloshet-bostad-forst
· F4 = brottsofferstod · F5 = vardkoer.

| Parti | F1 | F2 | F3 | F4 | F5 | Total (likavikt) | Tidigare kurerad |
|---|---|---|---|---|---|---|---|
| S | 75 | 50 | 100 | 75 | 75 | **75** | 68 |
| M | 100 | 25 | 50 | 75 | 100 | **70** | 50 |
| SD | 75 | 25 | 50 | 75 | 75 | **60** | 48 |
| V | 75 | 100 | 75 | 75 | 75 | **80** | 74 |
| C | 75 | 75 | 50 | 75 | 100 | **75** | 45 |
| KD | 75 | 25 | 50 | 75 | 100 | **65** | 58 |
| L | 75 | 75 | 100 | 75 | 75 | **80** | 48 |
| MP | 75 | 75 | 75 | 75 | 75 | **75** | 55 |

## Metodnot om källbias och utfall

Lidandeminimering är till skillnad från Fördelnings- och Insatsrättvisa en
bred konsensusdimension: tre av fem frågor (psykiatri, brottsofferstöd,
vårdköer) är valensfrågor där samtliga åtta partier uttalar stöd för riktningen
och skillnaderna ligger i konkretion snarare än polaritet. Det driver poängen
genomgående uppåt och komprimerar fältet (60–80) jämfört med den kurerade
bedömningen — samma valens-/ambitionsöverdriftsbias som dokumenterades vid
Framtidsansvar, här förstärkt av att flera frågor saknar en tydlig
motståndarsida. Den verkliga differentieringen kommer från
`narkotika-skademinimering`, där en klar skiljelinje finns mellan
reformpartierna (V starkast med brukarrum och avkriminalisering, därefter C, L,
MP) och de restriktiva (M, SD, KD), samt från `hemloshet-bostad-forst`, där S
(nationell strategi) och L (uttalat Bostad först) ligger i topp. Att de
marknads- och arbetslinjeinriktade partierna stiger mest jämfört med den
kurerade poängen (C 45→75, L 48→80, M 50→70) beror på att deras konkreta
flaggskepp i valensfrågorna (M:s lagstadgade 30-dagarsgaranti i barnpsykiatrin,
nationell vårdförmedling; C:s och KD:s vårdköreformer) ger maxpoäng på §C-skalan
— en konsekvens av att måttet bytts från en sammanvägd kurerad bedömning till
källverifierade ställningstaganden i enskilda frågor, inte av någon
handjustering. Poängen ska läsas som dokumenterad inriktning per fråga, inte som
en rangordning av hur mycket varje parti "bryr sig" om de sämst ställda.
