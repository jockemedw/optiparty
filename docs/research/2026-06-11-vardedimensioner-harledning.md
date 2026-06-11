# Fas 0: Härledning av värdedimensionerna

**Datum:** 2026-06-11
**Status:** Godkänd av projektägaren 2026-06-11. Beslut enligt rekommendation:
sex dimensioner låsta (§5), ingen tillitsdimension i v1 (utelämnandet redovisas
på metodiksidan), defaultvikter likaviktade 1/6 ("indifferensprior").
Displaynamnet för Total välfärd avgörs vid bygget (§6.2).
**Mål:** En dimensionsuppsättning där varje steg i resonemanget är spårbart
till etablerad teori och forskning, och som upplevs helt rätt och rimlig.

---

## 1. Varför en viktad flerdimensionell modell över huvud taget?

Innan vi väljer dimensioner måste själva ansatsen försvaras: varför inte bara
välja *en* etisk teori (t.ex. utilitarism) och räkna?

Svaret kommer från forskningsfältet **moralisk osäkerhet** (moral uncertainty):
ingen normativ teori är bevisad, och rimliga, välinformerade människor är
varaktigt oeniga om vilken som är rätt. MacAskill, Bykvist & Ord (*Moral
Uncertainty*, Oxford University Press, 2020) argumenterar för att en rationell
aktör under sådan osäkerhet bör behandla etiska teorier som en **viktad
portfölj** — ungefär som en investerare hanterar osäkerhet om framtiden —
snarare än att satsa allt på en teori.

Detta är projektets vetenskapliga fundament: **den viktade flerdimensionella
modellen är inte en pragmatisk kompromiss utan den teoretiskt motiverade
hanteringen av moralisk osäkerhet.** Varje dimension representerar en
seriöst försvarad etisk position; vikterna representerar trovärdighet/prioritet
mellan positionerna. Att besökaren kan justera vikterna är därmed inte bara en
konstnärlig poäng utan metodologiskt ärligt.

**Känd begränsning (redovisas öppet):** Arrows omöjlighetsteorem (Arrow,
*Social Choice and Individual Values*, 1951) visar att ingen
aggregeringsmetod av rangordningar kan uppfylla alla rimliga rättvisekrav
samtidigt. Vår modell undviker delar av problemet genom att aggregera
*kardinala poäng* (0–100) i stället för rangordningar, men valet av
aggregeringsfunktion (viktad summa) är ett värdeval i sig. Detta ska stå på
metodiksidan.

## 2. Krav på dimensionsuppsättningen

Härledda ur projektets syfte (specen) och ur standardkrav på
multikriterieanalys (jfr Keeney & Raiffa, *Decisions with Multiple
Objectives*, 1976, vars kriterier för "objectives" är etablerad standard):

| # | Krav | Innebörd |
|---|---|---|
| K1 | Teoriförankring | Varje dimension svarar mot minst en etablerad etisk teori eller forskningstradition — ingen dimension är "tyckande" |
| K2 | Fullständighet | Tillsammans täcker dimensionerna de stora seriösa svaren på "vad är ett gott samhälle?" — en väljare med någon av de stora värdegrunderna ska känna igen sin |
| K3 | Icke-överlapp | Dimensionerna mäter olika saker; gränserna definieras explicit så att samma sak inte räknas dubbelt |
| K4 | Bedömbarhet | Det går att poängsätta ett partiprogram mot dimensionen med motivering och källa |
| K5 | Viktbarhet | Dimensionen är meningsfull att dra upp/ner i ett reglage — den representerar en värdering man kan ha mer eller mindre av |
| K6 | Begriplighet | En intresserad lekman förstår dimensionen av namnet + två meningar |

## 3. Genomgång av ramverken

### 3.1 Klassisk utilitarism och välbefinnandeforskning

**Teori:** Bentham (*An Introduction to the Principles of Morals and
Legislation*, 1789) och Mill (*Utilitarianism*, 1863): rätt handling är den
som maximerar den sammanlagda lyckan/välfärden. Detta är grunden för modern
välfärdsekonomi.

**Empirisk operationalisering:** Fältet subjektivt välbefinnande (SWB) har
gjort lyckomaximering mätbar:

- **WELLBY** (wellbeing-adjusted life year): ett levnadsår viktat med
  livstillfredsställelse 0–10. Utvecklat av bl.a. Richard Layard (LSE);
  infört i brittiska finansdepartementets *Green Book* (2021 års tillägg) som
  officiellt utvärderingsmått för politik. Detta är det starkaste beviset på
  att "maximera välbefinnande" är en *praktiserad* statlig utvärderingsgrund,
  inte bara filosofi.
- **World Happiness Report** (Helliwell, Layard, Sachs m.fl., årlig sedan
  2012): förklarar nationella lyckonivåer med sex faktorer — BNP/capita,
  socialt stöd, frisk förväntad livslängd, frihet att välja sitt liv,
  generositet, låg korruption.
- **OECD Better Life Index** (sedan 2011): 11 dimensioner av livskvalitet
  (inkomst, jobb, boende, hälsa, utbildning, miljö, samhällsengagemang,
  socialt stöd, säkerhet, balans arbete/fritid, livstillfredsställelse).

**Ger kandidatdimension:** *Total välfärd/välbefinnande* — politikens
förväntade effekt på befolkningens samlade välbefinnande.

### 3.2 Negativ utilitarism och prioritarianism

**Teori:** Popper (*The Open Society and Its Enemies*, 1945) formulerade
asymmetrin: "lidande har moralisk förtur framför lycka — det finns ingen
symmetri mellan att öka någons lycka och att lindra någons plåga."
**Prioritarianism** (Parfit, "Equality or Priority?", Lindley Lecture 1991)
är den moderna, mer hanterbara varianten: välfärdsförbättringar väger tyngre
ju sämre ställt den person har som får dem — utan negativ utilitarisms
extrema slutsatser.

**Empirisk koppling:** Lidandeforskning (t.ex. Happier Lives Institutes
arbete med att jämföra interventioner i WELLBY-termer) visar att de största
välbefinnandevinsterna konsekvent finns i botten av fördelningen: psykisk
ohälsa, fattigdom, ensamhet, smärta.

**Ger kandidatdimension:** *Lidandeminimering* — politikens förväntade effekt
på de som har det sämst i absoluta termer: fattigdom, psykisk ohälsa,
vårdköer, missbruk, hemlöshet, brottsoffer.

**Gränsdragning mot 3.1:** total välfärd räknar alla lika; lidandeminimering
viktar botten av fördelningen. Ett parti kan vara starkt på den ena och svagt
på den andra (tillväxtpolitik vs. riktade insatser).

### 3.3 Rawls och fördelningsrättvisa

**Teori:** Rawls (*A Theory of Justice*, 1971): bakom "okunnighetens slöja"
— utan att veta vilken position i samhället man föds till — skulle rationella
personer välja principer där ojämlikheter bara accepteras om de gynnar de
sämst ställda (differensprincipen) och där grundläggande fri- och rättigheter
är lika för alla.

**Empirisk koppling:** Wilkinson & Pickett (*The Spirit Level*, 2009) och
efterföljande litteratur: hög ojämlikhet korrelerar med sämre utfall på
hälsa, tillit, kriminalitet och social rörlighet — *även för de rika*.
Korrelationerna är omdebatterade i styrka men inte i riktning.

**Ger kandidatdimension:** *Fördelningsrättvisa* — hur jämlikt samhällets
resurser, möjligheter och risker fördelas; social rörlighet.

**Gränsdragning mot 3.2:** lidandeminimering är *absolut* (hur illa har de
sämst ställda det?); fördelningsrättvisa är *relativ* (hur stora är gapen,
och är de rättvist uppkomna?). Ett samhälle kan ha litet lidande men stora
gap, och tvärtom.

### 3.4 Förtjänst, reciprocitet och insatsrättvisa

**Teori:** Förtjänstteori/desert theory (samlad i Miller, *Principles of
Social Justice*, 1999): rättvisa innebär bl.a. att utfall står i proportion
till bidrag och ansträngning. Detta är den teoretiska grunden för "rättvis
sett till insats i samhället" ur projektidén.

**Empirisk koppling:** Starmans, Sheskin & Bloom ("Why people prefer unequal
societies", *Nature Human Behaviour*, 2017): människor föredrar inte
jämlikhet i sig utan **proportionalitet** — ojämlikhet upplevs rättvis när
den speglar insats, orättvis när den inte gör det. Equity theory (Adams,
1965) visar samma mönster i organisationer. Detta är alltså en empiriskt
robust, folkligt djupt förankrad rättviseintuition — inte en politisk paroll.

**Ger kandidatdimension:** *Insatsrättvisa* — att arbete, ansträngning och
bidrag till samhället lönar sig; att systemet inte belönar friåkning.

**Gränsdragning mot 3.3:** fördelningsrättvisa frågar "är gapen små och
chanserna lika?"; insatsrättvisa frågar "speglar utfallen insatsen?". De drar
ofta åt olika håll — det är en feature: reglagen låter besökaren välja sida.

### 3.5 Frihet, autonomi och grundläggande förmågor

**Teori:** Två traditioner som konvergerar:

- **Liberal frihetstradition:** Mill (*On Liberty*, 1859) — individens
  suveränitet över sig själv; Berlin ("Two Concepts of Liberty", 1958) —
  negativ frihet (frånvaro av tvång) vs. positiv frihet (faktisk förmåga).
  Rättsstatens principer (förutsägbar lag, maktdelning, rättssäkerhet) är
  frihetens institutionella förutsättning.
- **Capability approach:** Sen (*Development as Freedom*, 1999) och Nussbaum
  (*Creating Capabilities*, 2011, med listan över tio centrala förmågor):
  det som ska maximeras är människors *reella förmågor* att leva liv de har
  skäl att värdesätta — inte bara resurser eller lycka. Ligger till grund för
  FN:s Human Development Index.

**Empirisk koppling:** "Frihet att välja sitt liv" är en av de sex robusta
prediktorerna för nationell livstillfredsställelse i World Happiness Report.

**Ger kandidatdimension:** *Frihet & autonomi* — individens självbestämmande,
rättsstatens styrka, och människors reella förmåga att forma sina liv.

**Gränsdragning mot 3.1:** välbefinnande mäter utfallet (mår folk bra?);
frihet mäter förmågan och rätten att själv välja (även att välja "fel").
Paternalistisk politik kan ge plus på 3.1 och minus här.

### 3.6 Framtida generationer och långsiktighet

**Teori:** Parfit (*Reasons and Persons*, 1984, del IV) etablerade att
framtida personers välfärd inte rimligen kan diskonteras bara för att den
ligger i framtiden. Brundtlandkommissionen (*Our Common Future*, 1987) gav
den politiska definitionen: möta dagens behov utan att äventyra kommande
generationers. Ord (*The Precipice*, 2020) utsträcker resonemanget till
existentiell risk.

**Empirisk koppling:** Stern Review (2006) och IPCC:s rapporter kvantifierar
klimatpolitikens intergenerationella avvägningar; finanspolitiska ramverk
(överskottsmål, skuldankare) är samma logik tillämpad på statsfinanser.

**Ger kandidatdimension:** *Framtidsansvar* — klimat och miljö, statsfinanser,
infrastruktur, forskning, beredskap: allt där kostnaden tas nu och vinsten
tillfaller kommande generationer (eller tvärtom).

**Gränsdragning:** övriga dimensioner bedöms på effekt för *nu levande*;
denna dimension fångar uttryckligen effekten bortom ~en generation.

### 3.7 Ramverk som övervägts men inte ger egna dimensioner

Redovisas för fullständighet (K2) — utelämnanden ska också vara spårbara:

- **Libertarianism som egen dimension** (Nozick, *Anarchy, State, and
  Utopia*, 1974): fångas av Frihet & autonomi (negativ frihet) +
  Insatsrättvisa (äganderätt till frukten av sitt arbete). En egen dimension
  skulle dubbelräkna (K3).
- **Kommunitarism/socialkonservatism** (MacIntyre, *After Virtue*, 1981;
  Etzioni): värdet av gemenskap, tradition och social sammanhållning. Fångas
  delvis av välbefinnandeforskningens "socialt stöd/tillit". **Öppen fråga
  till granskningen:** är detta tillräckligt, eller behövs en dimension för
  social sammanhållning/tillit? (Se §6.)
- **Moral Foundations Theory** (Haidt, *The Righteous Mind*, 2012): beskriver
  *psykologin* bakom politiska värderingar (omsorg, rättvisa, lojalitet,
  auktoritet, helgd, frihet) men är deskriptiv, inte normativ — den säger vad
  människor *känner*, inte vad som *bör* maximeras. Används som
  rimlighetskontroll: våra dimensioner täcker omsorg (3.1/3.2), rättvisa
  (3.3/3.4), frihet (3.5); lojalitet/auktoritet/helgd saknar normativ
  förankring av det slag K1 kräver och utelämnas medvetet.
- **Demokrati/rättsstat som egen dimension:** behandlas som del av Frihet &
  autonomi. Alla riksdagspartier bekänner sig formellt till demokratin, så
  som separat dimension skulle den diskriminera dåligt (K4); skillnader i
  t.ex. maktdelningssyn poängsätts inom 3.5.

## 4. Konsolidering: täckningsmatris

Hur de stora frågorna "vad är ett gott samhälle?" mappar mot förslaget:

| Seriös värdegrund | Täcks av |
|---|---|
| "Störst total lycka/välstånd" (utilitarism, välfärdsekonomi) | Total välfärd |
| "Minimera lidande, hjälp de utsatta först" (negativ util., prioritarianism, omsorgsetik) | Lidandeminimering |
| "Jämlikhet och lika chanser" (Rawls, egalitarianism) | Fördelningsrättvisa |
| "Det ska löna sig att anstränga sig" (förtjänstteori, reciprocitet) | Insatsrättvisa |
| "Individens frihet och rättsstaten" (liberalism, capability approach) | Frihet & autonomi |
| "Tänk på barnbarnen" (hållbarhet, långsiktighet) | Framtidsansvar |
| "Politik måste kunna genomföras" (implementeringsforskning) | Genomförbarhetsmultiplikatorn |

## 5. Föreslagen dimensionsuppsättning

Sex dimensioner + multiplikator. (Att resultatet liknar specens arbetsexempel
är väntat — exemplet skissades från samma traditioner; skillnaden är att
varje dimension nu har spårbar härledning, explicita gränsdragningar och
redovisade utelämnanden.)

1. **Total välfärd** — klassisk utilitarism; operationaliserad via
   SWB/WELLBY-forskningen (§3.1)
2. **Lidandeminimering** — Popper/Parfit-prioritarianism; absolut nivå hos de
   sämst ställda (§3.2)
3. **Fördelningsrättvisa** — Rawls; relativa gap och social rörlighet (§3.3)
4. **Insatsrättvisa** — förtjänstteori; empiriskt robust
   proportionalitetsintuition (§3.4)
5. **Frihet & autonomi** — Mill/Berlin + Sen/Nussbaum; självbestämmande,
   rättsstat, reella förmågor (§3.5)
6. **Framtidsansvar** — Parfit/Brundtland; effekter bortom en generation (§3.6)

**Genomförbarhet** förblir multiplikator, inte dimension: den representerar
ingen *värdering* (ingen tycker att ogenomförbar politik är bra) utan en
*sannolikhet* — och sannolikheter multipliceras, de adderas inte. Teoretiskt
stöd: implementeringsforskningen (Pressman & Wildavsky, *Implementation*,
1973) visar att policyutfall = intention × genomförandekapacitet.

**Kontroll mot kraven:** K1 ✓ (varje dimension har namngiven teori + källa).
K2 ✓ med en öppen fråga (§6.1). K3 ✓ (gränsdragningar definierade parvis där
risk finns). K4 ✓ (alla bedömbara mot partiprogram; svårast är Total välfärd
— kräver bedömning av aggregerad effekt, vilket blir poängsättningens
svåraste hantverk). K5 ✓ (alla representerar något man kan värdera mer/
mindre). K6 ✓ (alla namn klarar tvåmeningstestet — bör verifieras på riktiga
personer).

## 6. Öppna frågor till granskningen

1. **Social sammanhållning/tillit som sjunde dimension?** Tillit är en av de
   starkaste prediktorerna för nationellt välbefinnande (World Happiness
   Report) och kärnan i kommunitär kritik av liberal teori. Argument för: en
   konservativ väljare kanske inte känner igen sin värdegrund fullt ut i de
   sex (K2-risk). Argument emot: tillit kan ses som *mekanism* för välfärd
   snarare än egenvärde (K3-risk för dubbelräkning med Total välfärd).
   **Min rekommendation:** utelämna i v1, redovisa öppet på metodiksidan som
   medvetet val — men detta är ett genuint vägval du bör ta ställning till.
2. **Namnfrågan:** "Total välfärd" kan läsas som "välfärdsstat" på svenska.
   Alternativ: "Samlat välbefinnande", "Allmän välfärd". Avgörs vid bygget.
3. **Ska dimensionsvikterna ha en motiverad default?** Moral
   uncertainty-ramverket antyder att defaultvikterna borde spegla teoriernas
   relativa trovärdighet — men det finns ingen konsensus att luta sig mot.
   Enklast försvarbara default: likaviktning (1/6), redovisad som
   "indifferensprior". Rekommenderas.

## 7. Källförteckning

- Adams, J.S. (1965). "Inequity in social exchange". *Advances in
  Experimental Social Psychology*, vol. 2.
- Arrow, K. (1951). *Social Choice and Individual Values*.
- Bentham, J. (1789). *An Introduction to the Principles of Morals and
  Legislation*.
- Berlin, I. (1958). "Two Concepts of Liberty".
- Brundtlandkommissionen (1987). *Our Common Future*.
- Haidt, J. (2012). *The Righteous Mind*.
- Helliwell, J., Layard, R., Sachs, J. m.fl. (2012–). *World Happiness
  Report*.
- HM Treasury (2021). *Green Book* supplementary guidance: wellbeing.
- Keeney, R. & Raiffa, H. (1976). *Decisions with Multiple Objectives*.
- MacAskill, W., Bykvist, K. & Ord, T. (2020). *Moral Uncertainty*. OUP.
- MacIntyre, A. (1981). *After Virtue*.
- Mill, J.S. (1859). *On Liberty*; (1863). *Utilitarianism*.
- Miller, D. (1999). *Principles of Social Justice*.
- Nozick, R. (1974). *Anarchy, State, and Utopia*.
- Nussbaum, M. (2011). *Creating Capabilities*.
- OECD (2011–). *Better Life Index*.
- Ord, T. (2020). *The Precipice*.
- Parfit, D. (1984). *Reasons and Persons*; (1991). "Equality or Priority?",
  Lindley Lecture.
- Popper, K. (1945). *The Open Society and Its Enemies*.
- Pressman, J. & Wildavsky, A. (1973). *Implementation*.
- Rawls, J. (1971). *A Theory of Justice*.
- Sen, A. (1999). *Development as Freedom*.
- Starmans, C., Sheskin, M. & Bloom, P. (2017). "Why people prefer unequal
  societies". *Nature Human Behaviour*, 1, 0082.
- Stern, N. (2006). *The Stern Review on the Economics of Climate Change*.
- Wilkinson, R. & Pickett, K. (2009). *The Spirit Level*.
