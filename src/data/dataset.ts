import { DatasetSchema, type Dataset } from "@/lib/model/types";

export const dataset: Dataset = DatasetSchema.parse({
  assessmentDate: "2026-06-13",
  dimensions: [
    {
      id: "valbefinnande",
      name: "Samlat välbefinnande",
      shortDescription: "Politikens förväntade effekt på befolkningens samlade välbefinnande och välstånd.",
      grounding: "Klassisk utilitarism (Bentham 1789, Mill 1863); operationaliserad i SWB/WELLBY-forskningen (Layard; HM Treasury Green Book 2021) och OECD Better Life Index.",
      measures: "Aggregerat välbefinnande för flest människor: ekonomi, hälsa, utbildning, socialt stöd.",
      boundary: "Räknar alla människor lika och mäter utfallet. Gräns mot Lidandeminimering: den viktar botten av fördelningen, denna räknar alla lika. Gräns mot Frihet & autonomi: välbefinnande mäter om folk mår bra, frihet mäter förmågan och rätten att själv välja — paternalistisk politik kan ge plus här och minus där.",
      exclusions: [
        {
          topic: "Skattetryckets nivå",
          reason: "K2: listas i §I men är genuint tvåsidig för det aggregerade välbefinnandet — ett högre skattetryck finansierar välfärd som höjer välbefinnandet men medför samtidigt effektivitetsförluster (deadweight loss) som sänker välståndet. Ingen entydig polaritet mot målet.",
        },
        {
          topic: "Vinster i välfärden / driftsform",
          reason: "K4: listas i §I men är redan migrerad och mappad till Frihet & autonomi (komponenten valfrihet-valfard, polaritet 'bevarad driftsfrihet främjar'). En sakfråga mappas till exakt en dimension; utesluts här för att inte dubbelräknas.",
        },
        {
          topic: "Förstatligande av sjukvården",
          reason: "K2: 'vårdens organisering' operationaliseras i SVT:s valkompass 2022 som statligt övertagande, men polariteten mot målet är tvåsidig — förespråkarna hävdar mer jämlik och kapabel vård, motståndarna (sex av åtta partier) hävdar att nära regionalt styrd vård ger mer tillgänglig och bättre vård för befolkningen.",
        },
        {
          topic: "Minska arbetslösheten",
          reason: "K2/K4: SVT:s valfrågeguiden 2022 har förslaget, men partierna operationaliserar målet med just de instrument (bidragstak, sänkt skatt på arbete, motprestation) som redan är mappade till Insatsrättvisa; att poängsätta frågan skulle dubbelräkna arbetslinjens instrument, och medlen är dessutom tvåsidiga för det aggregerade välbefinnandet.",
        },
      ],
      questionBank: [
        { id: "utbildning-skolresultat", question: "Skolan ska stärkas så att kunskapsresultaten höjs för hela befolkningen.", polarity: "Konkreta resultathöjande skolreformer främjar målet", origin: "F1 · frågebanken för Samlat välbefinnande (protokoll v1.1)", weight: 1 },
        { id: "aldreomsorg", question: "Äldreomsorgen ska byggas ut och kvaliteten höjas.", polarity: "Utbyggd och förbättrad äldreomsorg främjar målet", origin: "F2 · frågebanken för Samlat välbefinnande (protokoll v1.1)", weight: 1 },
        { id: "trygghet-gangvald", question: "Gängvåldet ska pressas tillbaka så att tryggheten ökar i hela befolkningen.", polarity: "Kraftfulla åtgärder mot gängvåld (ökad trygghet) främjar målet", origin: "F3 · frågebanken för Samlat välbefinnande (protokoll v1.1)", weight: 1 },
        { id: "tandvard-hogkostnadsskydd", question: "Tandvården ska föras närmare övrig sjukvård genom ett förstärkt och breddat högkostnadsskydd.", polarity: "Starkare och breddat tandvårdsskydd främjar målet", origin: "F4 · frågebanken för Samlat välbefinnande (protokoll v1.1)", weight: 1 },
        { id: "sjukforsakring-karens", question: "Karensavdraget i sjukförsäkringen ska avskaffas så att människor inte tvingas arbeta sjuka eller förlora inkomst.", polarity: "Avskaffat karensavdrag (tryggare sjukförsäkring) främjar målet", origin: "F5 · frågebanken för Samlat välbefinnande (protokoll v1.1)", weight: 1 },
      ],
    },
    {
      id: "lidande",
      name: "Lidandeminimering",
      shortDescription: "Hur mycket politiken lindrar situationen för dem som har det sämst, i absoluta termer.",
      grounding: "Negativ utilitarism (Popper 1945) och prioritarianism (Parfit 1991): förbättringar väger tyngre ju sämre ställd mottagaren är.",
      measures: "Fattigdom, psykisk ohälsa, vårdköer, missbruk, hemlöshet, brottsoffer.",
      boundary: "Absolut nivå hos de sämst ställda: förbättringar väger tyngre ju sämre ställd mottagaren är. Gräns mot Samlat välbefinnande: där räknas alla lika. Gräns mot Fördelningsrättvisa: lidande är absolut (hur illa har de sämst ställda det?), fördelning är relativ (hur stora är gapen?).",
      exclusions: [
        {
          topic: "A-kassans nivå",
          reason: "K4: frågan listas i §I även för Lidandeminimering men är redan migrerad och mappad till Insatsrättvisa (komponenten a-kassa-niva, inverterad polaritet). En fråga mappas till exakt en dimension; utesluts här för att inte dubbelräknas.",
        },
        {
          topic: "Tiggeriförbud",
          reason: "K2: polariteten mot lidandemålet är tvåsidig — ett förbud kan hävdas både öka de mest utsattas utsatthet (kriminaliserar de fattigaste) och minska utnyttjandet av människor i tiggeri.",
        },
        {
          topic: "Sjukförsäkringens ersättningsnivå/karensavdraget",
          reason: "K2/K4: mappas i §I till Samlat välbefinnande och har dessutom tvåsidig polaritet (friåkningsskydd kontra skydd för dem med små marginaler, jfr K2-uteslutningen i Insatsrättvisa).",
        },
      ],
      questionBank: [
        { id: "psykiatri", question: "Vården av psykisk ohälsa och suicidprevention ska byggas ut kraftigt.", polarity: "Utbyggd psykiatri främjar målet", origin: "F1 · frågebanken för Lidandeminimering (protokoll v1.1)", weight: 1 },
        { id: "narkotika-skademinimering", question: "Narkotikapolitiken ska läggas om mot skademinimering (sprutbyte, naloxon, brukarrum, lågtröskelvård) och kriminaliseringen av eget bruk ska omprövas.", polarity: "Omläggning mot skademinimering främjar målet", origin: "F2 · frågebanken för Lidandeminimering (protokoll v1.1)", weight: 1 },
        { id: "hemloshet-bostad-forst", question: "En nationell hemlöshetsstrategi enligt Bostad först ska driva ner hemlösheten.", polarity: "Ambitiös hemlöshetsstrategi/Bostad först främjar målet", origin: "F3 · frågebanken för Lidandeminimering (protokoll v1.1)", weight: 1 },
        { id: "brottsofferstod", question: "Stödet till brottsoffer ska stärkas.", polarity: "Stärkt brottsofferstöd främjar målet", origin: "F4 · frågebanken för Lidandeminimering (protokoll v1.1)", weight: 1 },
        { id: "vardkoer", question: "Vårdköerna ska kortas med kraftfulla åtgärder.", polarity: "Kortade köer främjar målet", origin: "F5 · frågebanken för Lidandeminimering (protokoll v1.1)", weight: 1 },
      ],
    },
    {
      id: "fordelning",
      name: "Fördelningsrättvisa",
      shortDescription: "Hur jämlikt resurser, möjligheter och risker fördelas i samhället.",
      grounding: "Rawls rättviseteori (1971): differensprincipen och lika grundläggande friheter; empiriskt stödd ojämlikhetsforskning (Wilkinson & Pickett 2009).",
      measures: "Relativa gap, jämlika livschanser, social rörlighet.",
      boundary: "Relativa gap och lika livschanser. Gräns mot Lidandeminimering: fördelning är relativ, lidande absolut — ett samhälle kan ha litet lidande men stora gap, och tvärtom. Gräns mot Insatsrättvisa: fördelning frågar om gapen är små och chanserna lika; insats frågar om utfallen speglar insatsen.",
      exclusions: [
        {
          topic: "Vinstutdelning i friskolor",
          reason: "K2: frågan mäter främst driftsform och valfrihet (Frihet & autonomi) snarare än fördelning, och fördelningspolariteten är omtvistad — ett vinstförbud kan både minska segregationsdrivande urval och minska utbudet av skolplatser.",
        },
        {
          topic: "Ränteavdraget",
          reason: "K2: polariteten mot fördelningsmålet är inte entydig — en nedtrappning träffar skuldsatta förstagångsköpare med små förmögenheter lika hårt som förmögna, medan kontantköpare inte berörs alls. Både nedtrappning och bibehållen nivå kan hävdas främja jämlikhet.",
        },
      ],
      questionBank: [
        { id: "kapitalinkomstskatt", question: "Skatten på stora kapitalinkomster ska höjas.", polarity: "Höjd kapitalskatt främjar målet", origin: "F1 · frågebanken för Fördelningsrättvisa (protokoll v1.1)", weight: 1 },
        { id: "hoga-inkomster-skatt", question: "Skatten på höga arbetsinkomster ska höjas.", polarity: "Höjd skatt på höga inkomster främjar målet", origin: "F2 · frågebanken för Fördelningsrättvisa (protokoll v1.1)", weight: 1 },
        { id: "formogenhet-arvsskatt", question: "Skatt på stora förmögenheter och arv ska återinföras.", polarity: "Återinförande främjar målet", origin: "F3 · frågebanken för Fördelningsrättvisa (protokoll v1.1)", weight: 1 },
        { id: "kommunal-skatteutjamning", question: "Mer skatteinkomster ska omfördelas från rika till fattiga kommuner.", polarity: "Mer omfördelning främjar målet", origin: "F4 · frågebanken för Fördelningsrättvisa (protokoll v1.1)", weight: 1 },
        { id: "marknadshyror", question: "Hyror ska sättas efter bruksvärde i stället för på en fri marknad (inga marknadshyror).", polarity: "Nej till marknadshyror främjar målet", origin: "F5 · frågebanken för Fördelningsrättvisa (protokoll v1.1)", weight: 1 },
      ],
    },
    {
      id: "insats",
      name: "Insatsrättvisa",
      shortDescription: "Att arbete, ansträngning och bidrag till samhället lönar sig.",
      grounding: "Förtjänstteori (Miller 1999); empiriskt robust proportionalitetsintuition (Starmans, Sheskin & Bloom 2017).",
      measures: "Drivkrafter för arbete och företagande, skydd mot friåkning, proportion mellan insats och utfall.",
      boundary: "Proportion mellan insats och utfall. Gräns mot Fördelningsrättvisa: dimensionerna drar ofta åt olika håll — det är avsiktligt, reglagen låter besökaren välja sida. Fångar tillsammans med Frihet & autonomi de libertarianska intuitionerna om äganderätt till frukten av sitt arbete; en egen libertarianismdimension skulle dubbelräkna.",
      exclusions: [
        {
          topic: "Karensdagen ska avskaffas",
          reason: "K2: frågan mäter primärt sjukförsäkringens generositet (Lidandeminimering); insatspolariteten är tvåsidig — karensavdraget är ett friåkningsskydd men slår hårdast mot dem med små marginaler som inte kan avstå inkomst vid sjukdom.",
        },
        {
          topic: "Hur mycket ska höginkomsttagare betala i skatt?",
          reason: "K2: frågan är redan entydigt mappad till Fördelningsrättvisa och mäter primärt relativa gap. För insats är polariteten tvåsidig — lägre marginalskatt belönar ansträngning men frågan mäter fördelning. En fråga mappas till exakt en dimension.",
        },
      ],
      questionBank: [
        { id: "jobbskatteavdrag", question: "Skatten på arbetsinkomster ska sänkas, till exempel genom ett förstärkt jobbskatteavdrag.", polarity: "Sänkt skatt på arbete främjar målet", origin: "F1 · frågebanken för Insatsrättvisa (protokoll v1.1)", weight: 1 },
        { id: "bidragstak-motprestation", question: "Bidragssystemen ska stramas åt med bidragstak och motprestationskrav så att det tydligt lönar sig att arbeta.", polarity: "Bidragstak och motprestationskrav främjar målet", origin: "F2 · frågebanken för Insatsrättvisa (protokoll v1.1)", weight: 1 },
        { id: "a-kassa-niva", question: "Den tillfälliga höjningen av a-kassan ska inte permanentas, så att gapet mellan ersättning och arbetsinkomst bevaras.", polarity: "Bevarat gap mellan a-kassa och arbetsinkomst främjar målet", origin: "F3 · frågebanken för Insatsrättvisa (protokoll v1.1)", weight: 1 },
        { id: "anstallningsskydd", question: "Det ska bli enklare för arbetsgivare att säga upp anställda (en mer rörlig arbetsmarknad).", polarity: "Mer flexibel arbetsmarknad främjar målet", origin: "F4 · frågebanken för Insatsrättvisa (protokoll v1.1)", weight: 1 },
        { id: "rut-avdrag", question: "RUT-avdraget ska behållas som en skattelättnad som gör hushållsnära arbete lönsamt och vitt.", polarity: "Bevarat RUT-avdrag främjar målet", origin: "F5 · frågebanken för Insatsrättvisa (protokoll v1.1)", weight: 1 },
      ],
    },
    {
      id: "frihet",
      name: "Frihet & autonomi",
      shortDescription: "Individens självbestämmande och reella förmåga att forma sitt liv.",
      grounding: "Liberal frihetstradition (Mill 1859, Berlin 1958) och capability approach (Sen 1999, Nussbaum 2011); rättsstaten som frihetens institution.",
      measures: "Självbestämmande, rättssäkerhet, maktdelning, reella valmöjligheter.",
      boundary: "Förmågan och rätten att själv välja, även att välja 'fel'. Gräns mot Samlat välbefinnande: välbefinnande mäter utfallet, frihet mäter självbestämmandet. Rättsstat och maktdelning poängsätts här — demokrati som egen dimension skulle diskriminera dåligt eftersom alla riksdagspartier formellt bekänner sig till den.",
      exclusions: [
        {
          topic: "Religiösa/konfessionella friskolor (förbud)",
          reason: "K2: polariteten mot frihetsmålet är tvåsidig — ett förbud inskränker föräldrarnas och församlingarnas religions- och föreningsfrihet, men kan samtidigt hävdas värna barnets rätt till en öppen framtid och egen autonomi (Feinberg); segregations- och likvärdighetsargumenten hör dessutom till andra dimensioner.",
        },
        {
          topic: "Public service-styrning (minskat anslag/omfång)",
          reason: "K2: ett oberoende public service kan hävdas både stärka det fria ordet och maktdelningen och utgöra en statligt finansierad medieaktör som en frihetlig inriktning vill begränsa. Polariteten mot självbestämmande/rättsstat är inte entydig.",
        },
      ],
      questionBank: [
        { id: "valfrihet-valfard", question: "Det ska vara tillåtet för fristående aktörer att driva och dela ut vinst i skattefinansierad välfärd (inget vinstutdelningsförbud i välfärden).", polarity: "Bevarad valfrihet/driftsfrihet (nej till vinstförbud) främjar målet", origin: "F1 · frågebanken för Frihet & autonomi (protokoll v1.1)", weight: 1 },
        { id: "gardsforsaljning", question: "Gårdsförsäljning av alkohol ska tillåtas, så att alkoholmonopolet luckras upp till förmån för närings- och konsumentfrihet.", polarity: "Ja till gårdsförsäljning främjar målet", origin: "F2 · frågebanken för Frihet & autonomi (protokoll v1.1)", weight: 1 },
        { id: "dodshjalp", question: "Dödshjälp i livets slutskede ska utredas och tillåtas, så att svårt sjuka själva kan bestämma över sin död.", polarity: "Att utreda/öppna för dödshjälp främjar målet", origin: "F3 · frågebanken för Frihet & autonomi (protokoll v1.1)", weight: 1 },
        { id: "overvakning", question: "Polisens befogenheter till hemlig avlyssning och övervakning utan konkret brottsmisstanke ska hållas tillbaka till skydd för integritet och rättssäkerhet.", polarity: "Återhållsamhet med övervakning utan brottsmisstanke främjar målet", origin: "F4 · frågebanken för Frihet & autonomi (protokoll v1.1)", weight: 1 },
        { id: "visitationszoner", question: "Polisen ska inte ges rätt att upprätta visitationszoner där människor kan kroppsvisiteras utan individuell brottsmisstanke.", polarity: "Nej till visitationszoner utan brottsmisstanke främjar målet", origin: "F5 · frågebanken för Frihet & autonomi (protokoll v1.1)", weight: 1 },
      ],
    },
    {
      id: "framtid",
      name: "Framtidsansvar",
      shortDescription: "Politikens effekter bortom en generation.",
      grounding: "Parfit (1984) om framtida personers moraliska vikt; Brundtland (1987); Stern Review (2006) om intergenerationella avvägningar.",
      measures: "Klimat och miljö, statsfinanser, infrastruktur, forskning, beredskap.",
      boundary: "Effekter bortom ungefär en generation. Övriga fem dimensioner bedöms på effekten för nu levande; denna fångar uttryckligen kostnader som tas nu med vinster som tillfaller kommande generationer, och tvärtom.",
      exclusions: [
        {
          topic: "Kärnkraft som egen fråga",
          reason: "K2: polariteten mot dimensionsmålet är inte entydig — både ja- och nej-sidan hävdar klimat- och framtidsnytta. Fångas indirekt i frågan om fossilfri elproduktion, där måttet är utbyggnad oavsett kraftslag.",
        },
        {
          topic: "Överskottsmålet och statsfinanserna",
          reason: "K2: sparande och lånefinansierade framtidsinvesteringar kan båda försvaras som framtidsansvar; polariteten är inte entydig.",
        },
      ],
      questionBank: [
        { id: "klimatmal-2045", question: "Sveriges klimatmål om nettonollutsläpp senast 2045 ska behållas eller skärpas.", polarity: "Behålla eller skärpa främjar målet", origin: "F1 · frågebanken för Framtidsansvar (protokoll v1.1)", weight: 1 },
        { id: "reduktionsplikt", question: "Reduktionsplikten för bensin och diesel ska hållas på en hög nivå.", polarity: "Hög nivå främjar målet", origin: "F2 · frågebanken för Framtidsansvar (protokoll v1.1)", weight: 1 },
        { id: "naturskydd-skog", question: "Mer natur och skog ska ges långsiktigt skydd.", polarity: "Mer skydd främjar målet", origin: "F3 · frågebanken för Framtidsansvar (protokoll v1.1)", weight: 1 },
        { id: "civilforsvar-beredskap", question: "Det civila försvaret och krisberedskapen ska byggas ut.", polarity: "Utbyggnad främjar målet", origin: "F4 · frågebanken för Framtidsansvar (protokoll v1.1)", weight: 1 },
        { id: "fossilfri-el", question: "Den fossilfria elproduktionen ska byggas ut kraftigt.", polarity: "Utbyggnad främjar målet", origin: "F5 · frågebanken för Framtidsansvar (protokoll v1.1)", weight: 1 },
      ],
    },
  ],
  parties: [
    {
      id: "s",
      name: "Socialdemokraterna",
      abbreviation: "S",
      color: "#E8112d",
      scores: {
        valbefinnande: {
          score: 75,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: programåtaganden för stärkt skola, fler anställda i välfärden, brett brottsbekämpande och brottsförebyggande arbete mot gängvåld, breddat tandvårdsskydd och en reformerad sjukförsäkring där karensavdraget ses som ett 'ganska bra' förslag att avskaffa.",
          sources: [
            { title: "SVT:s valfrågeguiden 2022: God äldreomsorg", url: "https://www.svt.se/valfrageguiden/forslag/god-aldreomsorg" },
            { title: "SVT:s valkompass 2022: Karensdagen ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/karensdagen-ska-avskaffas" },
          ],
          components: [
            {
              componentId: "utbildning-skolresultat",
              position: "Vill återföra ett statligt huvudansvar för skolan, stärka lärarnas auktoritet och styra resurser till undervisning i stället för vinst — programåtagande för högre och jämnare kunskapsresultat.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Likvärdig utbildning", url: "https://www.svt.se/valfrageguiden/forslag/likvardig-utbildning" }],
            },
            {
              componentId: "aldreomsorg",
              position: "Vill ha 'fler anställda i välfärden' med bättre arbetsvillkor, fasta omsorgskontakter i hemtjänsten och stärkt medicinsk kompetens i äldreomsorgen.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: God äldreomsorg", url: "https://www.svt.se/valfrageguiden/forslag/god-aldreomsorg" }],
            },
            {
              componentId: "trygghet-gangvald",
              position: "'Det krävs flera åtgärder, såväl brottsbekämpande som brottsförebyggande' — utökad avlyssning i gängmiljöer och snabbare lagföring för att pressa tillbaka gängvåldet.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Minska gängvåldet", url: "https://www.svt.se/valfrageguiden/forslag/minska-gangvaldet" }],
            },
            {
              componentId: "tandvard-hogkostnadsskydd",
              position: "Stödjer det förstärkta högkostnadsskyddet men reserverar sig (res. 4) för att återinföra avgiftsfri tandvård för unga 19–23 år — vill bredda reformen.",
              score: 75,
              sources: [{ title: "Riksdagen: betänkande 2025/26:SoU10 (Ett förstärkt högkostnadsskydd för tandvård)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/ett-forstarkt-hogkostnadsskydd-for-tandvard_hd01sou10/" }],
            },
            {
              componentId: "sjukforsakring-karens",
              position: "'Ganska bra förslag' att avskaffa karensdagen; karensavdraget 'påverkar olika utifrån kön, yrke och ställning på arbetsmarknaden' och bör reformeras för ökad trygghet.",
              score: 75,
              sources: [{ title: "SVT:s valkompass 2022: Karensdagen ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/karensdagen-ska-avskaffas" }],
            },
          ],
        },
        lidande: {
          score: 75,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: den S-ledda regeringen beslutade om en nationell hemlöshetsstrategi med Bostad först, vill bygga ut psykiatrin och stärka statens och regionernas insatser mot vårdköer samt samla brottsoffrens rättigheter i en brottsofferlag; narkotikapolitiken hålls dock restriktiv med blandad inställning till skademinimering.",
          sources: [
            { title: "Regeringen: Nationell hemlöshetsstrategi 2022–2026 (Bostad först nationellt)", url: "https://www.regeringen.se/artiklar/2022/10/---regeringen-beslutar-om-en-nationell-hemloshetsstrategi/" },
            { title: "SVT:s valfrågeguiden 2022: Kortare vårdköer", url: "https://www.svt.se/valfrageguiden/forslag/kortare-vardkoer" },
          ],
          components: [
            {
              componentId: "psykiatri",
              position: "Vill förbättra vården med likvärdiga förebyggande insatser för barn och unga och stärkt elevhälsa för att tidigt upptäcka psykisk ohälsa — tydligt programåtagande.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Minska psykisk ohälsa", url: "https://www.svt.se/valfrageguiden/forslag/minska-psykisk-ohalsa" }],
            },
            {
              componentId: "narkotika-skademinimering",
              position: "Reservation 17 i SoU13: välkomnar bättre tillgång till naloxon och stärkt samordnad vård för samsjuklighet, men håller fast vid en restriktiv narkotikapolitik och säger nej till avkriminalisering av eget bruk — blandad inriktning.",
              score: 50,
              sources: [{ title: "Riksdagen: betänkande 2024/25:SoU13 (Alkohol, narkotika, dopning, tobak och spel)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/alkohol-narkotika-dopning-tobak-och-spel_hc01sou13/" }],
            },
            {
              componentId: "hemloshet-bostad-forst",
              position: "Den S-ledda regeringen beslutade om en nationell hemlöshetsstrategi 2022–2026 där 'Bostad först bör införas nationellt' med riktat statsbidrag till kommunerna — starkt och konkret.",
              score: 100,
              sources: [{ title: "Regeringen: Nationell hemlöshetsstrategi 2022–2026 (Bostad först nationellt)", url: "https://www.regeringen.se/artiklar/2022/10/---regeringen-beslutar-om-en-nationell-hemloshetsstrategi/" }],
            },
            {
              componentId: "brottsofferstod",
              position: "Reservation 16 (med MP) i JuU18: vill samla brottsoffrens rättigheter i en samlad brottsofferlag — driver stärkt brottsofferstöd.",
              score: 75,
              sources: [{ title: "Riksdagen: betänkande 2023/24:JuU18 (Våldsbrott och brottsoffer)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/valdsbrott-och-brottsoffer_hb01juu18/" }],
            },
            {
              componentId: "vardkoer",
              position: "'Staten och regionernas insatser för att minska köerna ska stärkas' och privata utförare ska samverka för att korta köerna — tydligt programåtagande.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Kortare vårdköer", url: "https://www.svt.se/valfrageguiden/forslag/kortare-vardkoer" }],
            },
          ],
        },
        fordelning: {
          score: 75,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: vill höja skatten på stora kapitalinkomster och på höga arbetsinkomster, motsätter sig marknadshyror och vill reformera den kommunala skatteutjämningen; saknar dock validerbar position om återinförd förmögenhets- och arvsskatt (§D).",
          sources: [{ title: "Socialdemokraterna: Skatter", url: "https://www.socialdemokraterna.se/var-politik/a-till-o/skatter" }],
          components: [
            {
              componentId: "kapitalinkomstskatt",
              position: "'Vi vill höja beskattningen av stora, lågt beskattade, kapitalinkomster' och inför en tredje beskattningsnivå för dem med störst kapitalinnehav — höjer kapitalskatten.",
              score: 75,
              sources: [{ title: "Socialdemokraterna: Skatter", url: "https://www.socialdemokraterna.se/var-politik/a-till-o/skatter" }],
            },
            {
              componentId: "hoga-inkomster-skatt",
              position: "Vill höja skatten något för höginkomsttagare: 'Skatt ska betalas efter bärkraft' och skattesystemets syfte är att finansiera välfärden.",
              score: 75,
              sources: [{ title: "SVT:s valkompass 2022: Hur mycket ska höginkomsttagare betala i skatt?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-hoginkomsttagare-betala-i-skatt" }],
            },
            {
              componentId: "formogenhet-arvsskatt",
              position: "Position saknas: skattesidan behandlar kapitalinkomstskatt men anger ingen position om återinförd förmögenhets- eller arvsskatt (eftersökt 2026-06-13). Neutral prior enligt protokollets §D.",
              score: 50,
              sources: [{ title: "Socialdemokraterna: Skatter (eftersökt)", url: "https://www.socialdemokraterna.se/var-politik/a-till-o/skatter" }],
            },
            {
              componentId: "kommunal-skatteutjamning",
              position: "Instämmer delvis: 'Vi vill göra om utjämningssystemet i grunden' och omfördela efter demografi och socioekonomiska förutsättningar.",
              score: 75,
              sources: [{ title: "SVT:s valkompass 2022: Mer skatteinkomster ska omfördelas från rika till fattiga kommuner", url: "https://valkompass.svt.se/2022/riksdag/fraga/mer-skatteinkomster-ska-omfordelas-fran-rika-till-fattiga-kommuner" }],
            },
            {
              componentId: "marknadshyror",
              position: "Motsätter sig marknadshyror starkt: 'Marknadshyror leder till en ökad omfördelning från hyresgäster till fastighetsägare, med en sämre vardagsekonomi för väldigt många människor som följd.'",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: Marknadshyror ska införas på nya hyresrätter", url: "https://valkompass.svt.se/2022/riksdag/fraga/marknadshyror-ska-inforas-pa-nya-hyresratter" }],
            },
          ],
        },
        insats: {
          score: 25,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: säger nej till sänkt skatt på arbete och till bidragstaket, går till val på permanentad höjd a-kassa och försvarar anställningsskyddet; endast RUT-avdraget behålls i huvudsak. Genomgående svag koppling mellan insats och utfall i de operationaliserade frågorna.",
          sources: [
            { title: "Arbetsvärlden: Sex av åtta partier vill sänka skatten på arbete", url: "https://www.arbetsvarlden.se/sex-av-atta-partier-vill-sanka-skatten-pa-arbete/" },
            { title: "SVT:s valkompass 2022: RUT-avdraget ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/rut-avdraget-ska-avskaffas" },
          ],
          components: [
            {
              componentId: "jobbskatteavdrag",
              position: "Säger nej till sänkt skatt på arbete: vill i stället ta bort 'pensionärsskatten' och prioriterar välfärdsfinansiering framför jobbskatteavdrag.",
              score: 25,
              sources: [{ title: "Arbetsvärlden: Sex av åtta partier vill sänka skatten på arbete", url: "https://www.arbetsvarlden.se/sex-av-atta-partier-vill-sanka-skatten-pa-arbete/" }],
            },
            {
              componentId: "bidragstak-motprestation",
              position: "Reserverar sig mot regeringens bidragstak (reservation 1): reformen 'riskerar att fördjupa barnfattigdomen, öka utsattheten'. Avvisar instrumentet, om än inte arbetslinjen i stort.",
              score: 25,
              sources: [{ title: "Riksdagens betänkande 2025/26:SoU30 (Reformerat försörjningsstöd – bidragstak)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/reformerat-forsorjningsstod-bidragstak-och-okade_hd01sou30/" }],
            },
            {
              componentId: "a-kassa-niva",
              position: "'Vi vill höja ersättningen i arbetslöshetsförsäkringen och går till val på att permanenta den tillfälligt stärkta a-kassan' (Mycket bra förslag) — minskar gapet mot arbetsinkomst.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Den tillfälliga höjningen i A-kassan ska permanentas", url: "https://valkompass.svt.se/2022/riksdag/fraga/den-tillfalliga-hojningen-i-a-kassan-ska-permanentas" }],
            },
            {
              componentId: "anstallningsskydd",
              position: "Motsätter sig (Mycket dåligt förslag): 'Sverige ska fortsätta konkurrera med kompetens, trygghet och hög omställningsförmåga'; nej till fler undantag från turordningen.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Det ska bli enklare för arbetsgivare att säga upp anställda", url: "https://valkompass.svt.se/2022/riksdag/fraga/det-ska-bli-enklare-for-arbetsgivare-att-saga-upp-anstallda" }],
            },
            {
              componentId: "rut-avdrag",
              position: "Vill behålla RUT-avdraget (Ganska dåligt förslag om att avskaffa) — motsätter sig att avdraget tas bort.",
              score: 75,
              sources: [{ title: "SVT:s valkompass 2022: RUT-avdraget ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/rut-avdraget-ska-avskaffas" }],
            },
          ],
        },
        frihet: {
          score: 25,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: S vill förbjuda vinstutdelning i välfärden, säger nej till gårdsförsäljning och till dödshjälpsutredning och vill ge polisen mycket mer övervakning utan brottsmisstanke; endast motståndet mot visitationszoner drar åt frihetshållet. Genomgående svag negativ frihet i de operationaliserade frågorna.",
          sources: [
            { title: "SVT:s valkompass 2022: Vinstutdelning för friskolor ska förbjudas", url: "https://valkompass.svt.se/2022/riksdag/fraga/vinstutdelning-for-friskolor-ska-forbjudas" },
            { title: "SVT:s valkompass 2022: Hur mycket ska polisen få använda hemlig avlyssning och övervakning utan brottsmisstanke?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-polisen-fa-anvanda-hemlig-avlyssning-och-overvakning-utan-brottsmisstanke" },
          ],
          components: [
            {
              componentId: "valfrihet-valfard",
              position: "Tycker vinstutdelningsförbud är ett mycket bra förslag: 'Våra skattepengar ska gå till elevernas utbildning … inte till riskkapitalisters vinster' — vill begränsa driftsfriheten/valfriheten i välfärden.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Vinstutdelning för friskolor ska förbjudas", url: "https://valkompass.svt.se/2022/riksdag/fraga/vinstutdelning-for-friskolor-ska-forbjudas" }],
            },
            {
              componentId: "gardsforsaljning",
              position: "Motsätter sig gårdsförsäljning med hänvisning till att det inte är förenligt med EU:s regler om detaljhandelsmonopol — värnar Systembolagsmonopolet.",
              score: 25,
              sources: [{ title: "Vinbanken: Gårdsförsäljning av alkohol – så tycker de olika partierna (2022)", url: "https://vinbanken.se/2022/09/07/gardsforsaljning-av-alkohol-sa-tycker-de-olika-partierna" }],
            },
            {
              componentId: "dodshjalp",
              position: "Säger nej till en parlamentarisk utredning om dödshjälp; ett av två partier som inte vill att frågan utreds.",
              score: 25,
              sources: [{ title: "Senioren: Sex partier vill utreda dödshjälp", url: "https://www.senioren.se/nyheter/254501/" }],
            },
            {
              componentId: "overvakning",
              position: "Vill ge polisen 'mycket mer' möjlighet till hemlig avlyssning och övervakning utan brottsmisstanke: tidig tillgång till information är avgörande för att förhindra skjutningar och sprängningar.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Hur mycket ska polisen få använda hemlig avlyssning och övervakning utan brottsmisstanke?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-polisen-fa-anvanda-hemlig-avlyssning-och-overvakning-utan-brottsmisstanke" }],
            },
            {
              componentId: "visitationszoner",
              position: "Anser visitationszoner vara ett ganska dåligt förslag — polisen har redan stora befogenheter och åtgärden riskerar 'göra mer skada än nytta'.",
              score: 75,
              sources: [{ title: "SVT:s valkompass 2022: Polisen ska kunna upprätta visitationszoner i brottsutsatta områden", url: "https://valkompass.svt.se/2022/riksdag/fraga/polisen-ska-kunna-uppratta-visitationszoner-i-brottsutsatta-omraden" }],
            },
          ],
        },
        framtid: {
          score: 80,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: står bakom 2045-målet och en stabil reduktionsplikt (Sverigebränslet), uttalat naturskydd, totalförsvarsutbyggnad och bred teknikneutral utbyggnad av fossilfri el.",
          sources: [{ title: "Socialdemokraternas politik A–Ö", url: "https://www.socialdemokraterna.se/var-politik" }],
          components: [
            {
              componentId: "klimatmal-2045",
              position: "Vill att Sverige ska 'nå nettonollutsläpp till 2045' och 'vidta kraftfulla åtgärder för att Sverige ska klara klimatmålen till 2030' — behåller målet.",
              score: 75,
              sources: [{ title: "Socialdemokraterna: Klimatpolitik", url: "https://www.socialdemokraterna.se/var-politik/a-till-o/klimatpolitik" }],
            },
            {
              componentId: "reduktionsplikt",
              position: "Reserverade sig mot sänkningen till 6 % och föreslår 'Sverigebränslet' med stabil basinblandning (19,3 % för diesel) — behåller en hög nivå.",
              score: 75,
              sources: [
                { title: "Riksdagen: betänkande 2023/24:MJU5", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/sankning-av-reduktionsplikten-for-bensin-och_hb01mju5/" },
                { title: "Socialdemokraterna: Klimatpolitik", url: "https://www.socialdemokraterna.se/var-politik/a-till-o/klimatpolitik" },
              ],
            },
            {
              componentId: "naturskydd-skog",
              position: "Vill 'skydda naturen och ekosystemen' och 'bevara biologisk mångfald'; skogen ska samtidigt bidra 'både till klimatnytta och jobb'.",
              score: 75,
              sources: [{ title: "Socialdemokraterna: Klimat och miljö", url: "https://www.socialdemokraterna.se/var-politik/a-till-o/klimat-och-miljo" }],
            },
            {
              componentId: "civilforsvar-beredskap",
              position: "'Totalförsvaret ska byggas ut i hela landet'; kritisk infrastruktur ska byggas ut och skyddas, hela landet ska klara kriser som extremväder.",
              score: 75,
              sources: [{ title: "Socialdemokraterna: Försvar och beredskap", url: "https://www.socialdemokraterna.se/var-politik/a-till-o/forsvar-och-beredskap" }],
            },
            {
              componentId: "fossilfri-el",
              position: "'Alla fossilfria kraftslag behövs': bygga ut kärnkraften, snabba på vindkraften, värna vattenkraften och öka elproduktionen i hela landet.",
              score: 100,
              sources: [{ title: "Socialdemokraterna: Energi", url: "https://www.socialdemokraterna.se/var-politik/a-till-o/energi" }],
            },
          ],
        },
      },
      feasibility: {
        factor: 1.0,
        motivation: "Protokollets rubrik §3.3: E 1.0 (statsråd under mandatperioden 2018–2022), P 1.00 (107/107 mandat, största parti), T 1.0 (ledde regeringen 2014–2022); raw 1.000 ger faktor 1.00 efter koalitionsgolvet.",
        sources: [
          { title: "Valresultat 2022 (Valmyndigheten)", url: "https://www.val.se/valresultat-och-statistik/riksdags--region--och-kommunval/valresultat-2022" },
          { title: "Regeringar i Sverige (Riksdagen)", url: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/" },
        ],
      },
    },
    {
      id: "m",
      name: "Moderaterna",
      abbreviation: "M",
      color: "#52BDEC",
      scores: {
        valbefinnande: {
          score: 70,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: konkreta flaggskepp för högre skolresultat (mer undervisningstid, kunskapsfokus) och mot gängvåld (kriminaliserat gängdeltagande, dubbla straff) lyfter poängen, liksom stöd för det förstärkta tandvårdsskyddet och en sjuksköterske-/läkartät äldreomsorg; karensavdraget försvaras dock som ett 'mycket dåligt' förslag att avskaffa.",
          sources: [
            { title: "SVT:s valfrågeguiden 2022: Likvärdig utbildning", url: "https://www.svt.se/valfrageguiden/forslag/likvardig-utbildning" },
            { title: "SVT:s valkompass 2022: Karensdagen ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/karensdagen-ska-avskaffas" },
          ],
          components: [
            {
              componentId: "utbildning-skolresultat",
              position: "Konkret kunskapsagenda: mer undervisningstid (en lektion mer per dag i lågstadiet), fokus på mätbara faktakunskaper och ordningsbetyg — flaggskepp för högre skolresultat.",
              score: 100,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Likvärdig utbildning", url: "https://www.svt.se/valfrageguiden/forslag/likvardig-utbildning" }],
            },
            {
              componentId: "aldreomsorg",
              position: "Vill säkra 'god tillgång till sjuksköterskor och läkare' på äldreboenden, minska delade turer och ställa språkkrav på personalen.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: God äldreomsorg", url: "https://www.svt.se/valfrageguiden/forslag/god-aldreomsorg" }],
            },
            {
              componentId: "trygghet-gangvald",
              position: "Vill kriminalisera gängdeltagande, införa dubbla straff för gängkriminella, visitationszoner och anonyma vittnen — omfattande konkret trygghetsagenda.",
              score: 100,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Minska gängvåldet", url: "https://www.svt.se/valfrageguiden/forslag/minska-gangvaldet" }],
            },
            {
              componentId: "tandvard-hogkostnadsskydd",
              position: "Regeringsparti bakom prop. 2025/26:27; stödjer det förstärkta högkostnadsskyddet för tandvård som en motiverad prioritering av de äldre med störst behov.",
              score: 75,
              sources: [{ title: "Riksdagen: betänkande 2025/26:SoU10 (Ett förstärkt högkostnadsskydd för tandvård)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/ett-forstarkt-hogkostnadsskydd-for-tandvard_hd01sou10/" }],
            },
            {
              componentId: "sjukforsakring-karens",
              position: "'Mycket dåligt förslag' att avskaffa karensdagen — 'karensdagen fyller en viktig funktion' för att motverka onödiga sjukskrivningar.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Karensdagen ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/karensdagen-ska-avskaffas" }],
            },
          ],
        },
        lidande: {
          score: 70,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: konkreta flaggskepp i valensfrågorna lyfter poängen — lagstadgad 30-dagarsgaranti i barnpsykiatrin och en nationell vårdförmedling mot köer, plus Tidöpartiernas fokusskifte mot brottsoffer; samtidigt försvarad restriktiv narkotikalinje och ingen nationell hemlöshetsstrategi.",
          sources: [
            { title: "SVT:s valfrågeguiden 2022: Minska psykisk ohälsa", url: "https://www.svt.se/valfrageguiden/forslag/minska-psykisk-ohalsa" },
            { title: "SVT:s valfrågeguiden 2022: Kortare vårdköer", url: "https://www.svt.se/valfrageguiden/forslag/kortare-vardkoer" },
          ],
          components: [
            {
              componentId: "psykiatri",
              position: "Vill lagstifta att 'barn som mår psykiskt dåligt och behöver hjälp och stöd ska få det inom maximalt 30 dagar' och behandling inom ytterligare 30 dagar — konkret, kvantifierat flaggskepp.",
              score: 100,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Minska psykisk ohälsa", url: "https://www.svt.se/valfrageguiden/forslag/minska-psykisk-ohalsa" }],
            },
            {
              componentId: "narkotika-skademinimering",
              position: "Försvarar den restriktiva narkotikapolitiken med nolltolerans och motsätter sig avkriminalisering; inga skademinimerande reservationer i SoU13 — motverkar delvis omläggningen mot skademinimering.",
              score: 25,
              sources: [{ title: "Riksdagen: betänkande 2024/25:SoU13 (Alkohol, narkotika, dopning, tobak och spel)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/alkohol-narkotika-dopning-tobak-och-spel_hc01sou13/" }],
            },
            {
              componentId: "hemloshet-bostad-forst",
              position: "Fokuserar på att underlätta bostadsköp och vill utveckla kommunernas sociala kontrakt; driver ingen nationell hemlöshetsstrategi eller Bostad först — svag/blandad inriktning.",
              score: 50,
              sources: [{ title: "Fastighetstidningen: Snabbguide till valet – social bostadspolitik (2022)", url: "https://fastighetstidningen.se/snabbguide-till-valet-social-bostadspolitik/" }],
            },
            {
              componentId: "brottsofferstod",
              position: "Driver Tidöpartiernas fokusskifte mot brottsoffer med utökat mandat för Brottsoffermyndigheten och pågående reformer för stärkt brottsofferstöd.",
              score: 75,
              sources: [{ title: "Riksdagen: betänkande 2023/24:JuU18 (Våldsbrott och brottsoffer)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/valdsbrott-och-brottsoffer_hb01juu18/" }],
            },
            {
              componentId: "vardkoer",
              position: "Vill 'inrätta en nationell vårdförmedling' för att korta köerna — konkret strukturreform.",
              score: 100,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Kortare vårdköer", url: "https://www.svt.se/valfrageguiden/forslag/kortare-vardkoer" }],
            },
          ],
        },
        fordelning: {
          score: 20,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: vill sänka skatten på höga arbetsinkomster, avslår höjda kapital- och förmögenhetsskatter, motsätter sig utvidgad kommunal skatteutjämning och förespråkar friare hyressättning — genomgående motverkar de fördelningsutjämnande instrumenten.",
          sources: [
            { title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" },
            { title: "SVT:s valkompass 2022: Hur mycket ska höginkomsttagare betala i skatt?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-hoginkomsttagare-betala-i-skatt" },
          ],
          components: [
            {
              componentId: "kapitalinkomstskatt",
              position: "Tillhör utskottsmajoriteten som i SkU12 avslog förslagen om höjd kapitalbeskattning; partiets linje är lägre skatt på arbete och oförändrad eller lägre kapitalskatt — motverkar delvis en höjning.",
              score: 25,
              sources: [{ title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" }],
            },
            {
              componentId: "hoga-inkomster-skatt",
              position: "Vill sänka skatten på höga inkomster: 'Det ska löna sig att utbilda sig och göra karriär i Sverige. Ansträngning måste löna sig bättre' — motverkar aktivt en höjning.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Hur mycket ska höginkomsttagare betala i skatt?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-hoginkomsttagare-betala-i-skatt" }],
            },
            {
              componentId: "formogenhet-arvsskatt",
              position: "Avslår återinförd förmögenhets- och arvsskatt (SkU12, avslag på reservationerna 8 och 16); partiet avskaffade dessa skatter och vill behålla dem avskaffade — motverkar delvis.",
              score: 25,
              sources: [{ title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" }],
            },
            {
              componentId: "kommunal-skatteutjamning",
              position: "Oense: 'En utvidgning av utjämningen skulle förvärra problemet' eftersom omfattande utjämning redan sker — motverkar delvis mer omfördelning.",
              score: 25,
              sources: [{ title: "SVT:s valkompass 2022: Mer skatteinkomster ska omfördelas från rika till fattiga kommuner", url: "https://valkompass.svt.se/2022/riksdag/fraga/mer-skatteinkomster-ska-omfordelas-fran-rika-till-fattiga-kommuner" }],
            },
            {
              componentId: "marknadshyror",
              position: "Vill ändra systemet mot 'mer rättvisa hyror' där hyresgästernas värderingar väger tyngre, dvs. friare hyressättning — motverkar delvis bruksvärdesprincipen.",
              score: 25,
              sources: [{ title: "SVT:s valkompass 2022: Marknadshyror ska införas på nya hyresrätter", url: "https://valkompass.svt.se/2022/riksdag/fraga/marknadshyror-ska-inforas-pa-nya-hyresratter" }],
            },
          ],
        },
        insats: {
          score: 95,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: vill sänka skatten på arbete, driver bidragstaket som en 'värderingsreform', vill återställa a-kassan, luckra upp anställningsskyddet och behålla RUT. Genomgående stark koppling insats–utfall.",
          sources: [
            { title: "Arbetsvärlden: Sex av åtta partier vill sänka skatten på arbete", url: "https://www.arbetsvarlden.se/sex-av-atta-partier-vill-sanka-skatten-pa-arbete/" },
            { title: "SVT:s valkompass 2022: RUT-avdraget ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/rut-avdraget-ska-avskaffas" },
          ],
          components: [
            {
              componentId: "jobbskatteavdrag",
              position: "'Moderaterna vill sänka skatten på arbete, och särskilt för de med lägre inkomster' — flaggskeppspolitik för att det ska löna sig att arbeta.",
              score: 100,
              sources: [{ title: "Arbetsvärlden: Sex av åtta partier vill sänka skatten på arbete", url: "https://www.arbetsvarlden.se/sex-av-atta-partier-vill-sanka-skatten-pa-arbete/" }],
            },
            {
              componentId: "bidragstak-motprestation",
              position: "Driver bidragstaket: 'Bidragstaket är därför inte bara en ekonomisk reform, utan det är en värderingsreform.'",
              score: 100,
              sources: [{ title: "Riksdagens betänkande 2025/26:SoU30 (Reformerat försörjningsstöd – bidragstak)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/reformerat-forsorjningsstod-bidragstak-och-okade_hd01sou30/" }],
            },
            {
              componentId: "a-kassa-niva",
              position: "Avvisar permanentad höjning (Mycket dåligt förslag): 'De tillfälligt höjda nivåerna under pandemin bör återställas nu när restriktionerna upphört.'",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: Den tillfälliga höjningen i A-kassan ska permanentas", url: "https://valkompass.svt.se/2022/riksdag/fraga/den-tillfalliga-hojningen-i-a-kassan-ska-permanentas" }],
            },
            {
              componentId: "anstallningsskydd",
              position: "Stöder uppluckrat anställningsskydd (Ganska bra förslag): kompetens ska väga tyngre vid uppsägning, med förbättrade omställningsmöjligheter.",
              score: 75,
              sources: [{ title: "SVT:s valkompass 2022: Det ska bli enklare för arbetsgivare att säga upp anställda", url: "https://valkompass.svt.se/2022/riksdag/fraga/det-ska-bli-enklare-for-arbetsgivare-att-saga-upp-anstallda" }],
            },
            {
              componentId: "rut-avdrag",
              position: "Vill behålla RUT-avdraget (Mycket dåligt förslag om att avskaffa).",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: RUT-avdraget ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/rut-avdraget-ska-avskaffas" }],
            },
          ],
        },
        frihet: {
          score: 50,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: M värnar valfriheten/vinst i välfärden, stöder gårdsförsäljning och en dödshjälpsutredning; samtidigt vill partiet ge polisen mycket mer övervakning utan brottsmisstanke och driver visitationszoner — stark negativ frihet på marknads- och anti-paternalismfrågorna men låg på rättssäkerhet mot statens tvångsmakt.",
          sources: [
            { title: "SVT:s valkompass 2022: Vinstutdelning för friskolor ska förbjudas", url: "https://valkompass.svt.se/2022/riksdag/fraga/vinstutdelning-for-friskolor-ska-forbjudas" },
            { title: "SVT:s valkompass 2022: Polisen ska kunna upprätta visitationszoner i brottsutsatta områden", url: "https://valkompass.svt.se/2022/riksdag/fraga/polisen-ska-kunna-uppratta-visitationszoner-i-brottsutsatta-omraden" },
          ],
          components: [
            {
              componentId: "valfrihet-valfard",
              position: "Tycker vinstutdelningsförbud är ett mycket dåligt förslag; försvarar vinstdrivande friskolor med hårda kvalitetskrav och indragna tillstånd vid brister — värnar valfriheten/driftsfriheten starkt.",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: Vinstutdelning för friskolor ska förbjudas", url: "https://valkompass.svt.se/2022/riksdag/fraga/vinstutdelning-for-friskolor-ska-forbjudas" }],
            },
            {
              componentId: "gardsforsaljning",
              position: "För gårdsförsäljning: 'Gårdsförsäljning av alkohol ska tillåtas då detta är en viktig del av utvecklingen', med bevarat Systembolagsmonopol.",
              score: 75,
              sources: [{ title: "Vinbanken: Gårdsförsäljning av alkohol – så tycker de olika partierna (2022)", url: "https://vinbanken.se/2022/09/07/gardsforsaljning-av-alkohol-sa-tycker-de-olika-partierna" }],
            },
            {
              componentId: "dodshjalp",
              position: "Ett av sex partier som vill utreda dödshjälp och öppna för frågan om självbestämmande i livets slutskede.",
              score: 75,
              sources: [{ title: "Senioren: Sex partier vill utreda dödshjälp", url: "https://www.senioren.se/nyheter/254501/" }],
            },
            {
              componentId: "overvakning",
              position: "Vill ge polisen 'mycket mer' befogenheter till hemlig avlyssning, dataavläsning och kamerabevakning mot aktiva gängkriminella utan konkret brottsmisstanke.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Hur mycket ska polisen få använda hemlig avlyssning och övervakning utan brottsmisstanke?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-polisen-fa-anvanda-hemlig-avlyssning-och-overvakning-utan-brottsmisstanke" }],
            },
            {
              componentId: "visitationszoner",
              position: "Tycker visitationszoner är ett mycket bra förslag; våldet håller 'tusentals människor och hela stadsdelar i ett järngrepp' och polisen behöver verktyg att söka efter illegala vapen.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Polisen ska kunna upprätta visitationszoner i brottsutsatta områden", url: "https://valkompass.svt.se/2022/riksdag/fraga/polisen-ska-kunna-uppratta-visitationszoner-i-brottsutsatta-omraden" }],
            },
          ],
        },
        framtid: {
          score: 60,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: står bakom 2045-målet, parallell utbyggnad av totalförsvaret och kärnkraftsledd elutbyggnad; genomförde sänkningen av reduktionsplikten och saknar validerbar naturskyddsposition (§D).",
          sources: [{ title: "Moderaternas politik", url: "https://moderaterna.se/var-politik/" }],
          components: [
            {
              componentId: "klimatmal-2045",
              position: "'Sverige ska nå nettonollutsläpp senast år 2045 – samtidigt som vi hjälper andra länder att minska sina utsläpp' — behåller målet.",
              score: 75,
              sources: [{ title: "Moderaterna: Klimat, miljö och energi", url: "https://moderaterna.se/var-politik/klimat-miljo-och-energi/" }],
            },
            {
              componentId: "reduktionsplikt",
              position: "Regeringsparti bakom prop. 2023/24:28 som sänkte reduktionsplikten till 6 % 2024–2026 och slopade höjningsnivåerna 2027–2030 — sänker nivån.",
              score: 25,
              sources: [{ title: "Riksdagen: betänkande 2023/24:MJU5", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/sankning-av-reduktionsplikten-for-bensin-och_hb01mju5/" }],
            },
            {
              componentId: "naturskydd-skog",
              position: "Position saknas: naturskydd och skogsskydd behandlas inte som egna områden på partiets klimat-, miljö- och energisida (eftersökt 2026-06-12). Neutral prior enligt protokollets §D.",
              score: 50,
              sources: [{ title: "Moderaterna: Klimat, miljö och energi (eftersökt)", url: "https://moderaterna.se/var-politik/klimat-miljo-och-energi/" }],
            },
            {
              componentId: "civilforsvar-beredskap",
              position: "'Sverige ska ha ett starkt totalförsvar där det militära försvaret och civila försvaret stärks parallellt'; båda ska 'byggas ut parallellt'.",
              score: 75,
              sources: [{ title: "Moderaterna: Försvar och krisberedskap", url: "https://moderaterna.se/var-politik/forsvar-och-krisberedskap/" }],
            },
            {
              componentId: "fossilfri-el",
              position: "Vill 'återuppbygga det stabila svenska kraftsystemet' där ny kärnkraft försörjer södra Sverige och vattenkraften frigörs för industrin i norr.",
              score: 75,
              sources: [{ title: "Moderaterna: Klimat, miljö och energi", url: "https://moderaterna.se/var-politik/klimat-miljo-och-energi/" }],
            },
          ],
        },
      },
      feasibility: {
        factor: 0.94,
        motivation: "Protokollets rubrik §3.3: E 1.0 (statsråd innevarande mandatperiod, leder regeringen sedan 2022), P 0.64 (68/107 mandat), T 1.0 (lett regering inom 12 år); raw 0.910 ger faktor 0.94 efter koalitionsgolvet.",
        sources: [
          { title: "Valresultat 2022 (Valmyndigheten)", url: "https://www.val.se/valresultat-och-statistik/riksdags--region--och-kommunval/valresultat-2022" },
          { title: "Regeringar i Sverige (Riksdagen)", url: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/" },
        ],
      },
    },
    {
      id: "sd",
      name: "Sverigedemokraterna",
      abbreviation: "SD",
      color: "#DDDD00",
      scores: {
        valbefinnande: {
          score: 75,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: drev igenom tandvårdsreformen ('största välfärdsreformen på 20 år'), vill att staten återtar skolan, satsar på straffskärpningar mot gängvåld och vill slopa karensen för vissa yrkesgrupper; äldreomsorgssatsningen är dock villkorad av minskade migrationskostnader och därmed mindre konkret.",
          sources: [
            { title: "Riksdagen: betänkande 2025/26:SoU10 (Ett förstärkt högkostnadsskydd för tandvård)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/ett-forstarkt-hogkostnadsskydd-for-tandvard_hd01sou10/" },
            { title: "SVT:s valkompass 2022: Karensdagen ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/karensdagen-ska-avskaffas" },
          ],
          components: [
            {
              componentId: "utbildning-skolresultat",
              position: "Vill att staten återtar ansvaret för skolan med ny finansieringsmodell och nationella riktlinjer: 'Genom att staten återfår ansvaret kan vi vända ojämlikheten som det kommunala ansvaret skapat.'",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Likvärdig utbildning", url: "https://www.svt.se/valfrageguiden/forslag/likvardig-utbildning" }],
            },
            {
              componentId: "aldreomsorg",
              position: "Vill rikta resurser till kommunerna men kopplar finansieringen till minskade migrationskostnader — villkorad och mindre konkret inriktning.",
              score: 50,
              sources: [{ title: "SVT:s valfrågeguiden 2022: God äldreomsorg", url: "https://www.svt.se/valfrageguiden/forslag/god-aldreomsorg" }],
            },
            {
              componentId: "trygghet-gangvald",
              position: "Betonar straffskärpningar och verkställda straff samt fler poliser med effektiva verktyg för att pressa tillbaka gängvåldet.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Minska gängvåldet", url: "https://www.svt.se/valfrageguiden/forslag/minska-gangvaldet" }],
            },
            {
              componentId: "tandvard-hogkostnadsskydd",
              position: "Drev igenom det förstärkta högkostnadsskyddet (tiotandvården) tillsammans med regeringen och beskriver det som 'den största välfärdsreformen på 20 år' — konkret flaggskepp.",
              score: 100,
              sources: [{ title: "Riksdagen: betänkande 2025/26:SoU10 (Ett förstärkt högkostnadsskydd för tandvård)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/ett-forstarkt-hogkostnadsskydd-for-tandvard_hd01sou10/" }],
            },
            {
              componentId: "sjukforsakring-karens",
              position: "'Ganska bra förslag': vill slopa karensavdraget för vissa yrkesgrupper, såsom skol- och förskolepersonal.",
              score: 75,
              sources: [{ title: "SVT:s valkompass 2022: Karensdagen ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/karensdagen-ska-avskaffas" }],
            },
          ],
        },
        lidande: {
          score: 60,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: vill ha en nationell strategi för psykisk ohälsa och suicidprevention, driver med Tidömajoriteten fokusskiftet mot brottsoffer och budgeterar tillskott mot vårdköer; samtidigt restriktiv narkotikalinje och ingen nationell hemlöshetsstrategi.",
          sources: [
            { title: "SVT:s valfrågeguiden 2022: Minska psykisk ohälsa", url: "https://www.svt.se/valfrageguiden/forslag/minska-psykisk-ohalsa" },
            { title: "SVT:s valfrågeguiden 2022: Kortare vårdköer", url: "https://www.svt.se/valfrageguiden/forslag/kortare-vardkoer" },
          ],
          components: [
            {
              componentId: "psykiatri",
              position: "Vill ha en 'långsiktig och hållbar nationell strategi' med suicidprevention, stärkt elevhälsa och satsning på ungdomspsykiatrin.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Minska psykisk ohälsa", url: "https://www.svt.se/valfrageguiden/forslag/minska-psykisk-ohalsa" }],
            },
            {
              componentId: "narkotika-skademinimering",
              position: "Försvarar i SoU13 den restriktiva narkotikapolitiken utan skademinimerande reservationer — motverkar delvis omläggningen mot skademinimering.",
              score: 25,
              sources: [{ title: "Riksdagen: betänkande 2024/25:SoU13 (Alkohol, narkotika, dopning, tobak och spel)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/alkohol-narkotika-dopning-tobak-och-spel_hc01sou13/" }],
            },
            {
              componentId: "hemloshet-bostad-forst",
              position: "Betonar bostadsbidrag och fler sociala kontrakt på kommunal nivå och ser hemlöshet främst som ett kommunalt problem; driver ingen nationell strategi — svag/blandad inriktning.",
              score: 50,
              sources: [{ title: "Fastighetstidningen: Snabbguide till valet – social bostadspolitik (2022)", url: "https://fastighetstidningen.se/snabbguide-till-valet-social-bostadspolitik/" }],
            },
            {
              componentId: "brottsofferstod",
              position: "Del av Tidömajoriteten som driver fokusskiftet mot brottsoffer och stärkt brottsofferstöd via pågående propositioner.",
              score: 75,
              sources: [{ title: "Riksdagen: betänkande 2023/24:JuU18 (Våldsbrott och brottsoffer)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/valdsbrott-och-brottsoffer_hb01juu18/" }],
            },
            {
              componentId: "vardkoer",
              position: "Har 'budgeterat för stora tillskott till regionerna' och bättre arbetsvillkor för att korta köerna — programåtagande utan namngiven strukturreform.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Kortare vårdköer", url: "https://www.svt.se/valfrageguiden/forslag/kortare-vardkoer" }],
            },
          ],
        },
        fordelning: {
          score: 50,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: vill behålla dagens kapital- och inkomstskattenivåer oförändrade, avslår återinförd förmögenhets-/arvsskatt och motsätter sig utvidgad skatteutjämning mellan kommuner; samtidigt ett starkt motstånd mot marknadshyror med uttalat fokus på att alla ska ha råd att bo.",
          sources: [
            { title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" },
            { title: "SVT:s valkompass 2022: Marknadshyror ska införas på nya hyresrätter", url: "https://valkompass.svt.se/2022/riksdag/fraga/marknadshyror-ska-inforas-pa-nya-hyresratter" },
          ],
          components: [
            {
              componentId: "kapitalinkomstskatt",
              position: "Vill behålla dagens schabloniserade ISK- och kapitalskattesystem oförändrat; varken höjer eller sänker kapitalskatten i sak — neutral/status quo.",
              score: 50,
              sources: [{ title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" }],
            },
            {
              componentId: "hoga-inkomster-skatt",
              position: "Vill behålla skatten på höga inkomster oförändrad: 'Det finns därför inget utrymme för skattehöjningar' — varken höjning eller sänkning.",
              score: 50,
              sources: [{ title: "SVT:s valkompass 2022: Hur mycket ska höginkomsttagare betala i skatt?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-hoginkomsttagare-betala-i-skatt" }],
            },
            {
              componentId: "formogenhet-arvsskatt",
              position: "Tillhör blocket som i SkU12 avslog återinförd förmögenhets- och arvsskatt och vill behålla dagens system utan dessa skatter — motverkar delvis.",
              score: 25,
              sources: [{ title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" }],
            },
            {
              componentId: "kommunal-skatteutjamning",
              position: "Oense delvis: 'Utgångspunkten bör inte vara att välskötta kommuner ska bära kostnaderna för misskötta kommuner' — motverkar delvis mer omfördelning.",
              score: 25,
              sources: [{ title: "SVT:s valkompass 2022: Mer skatteinkomster ska omfördelas från rika till fattiga kommuner", url: "https://valkompass.svt.se/2022/riksdag/fraga/mer-skatteinkomster-ska-omfordelas-fran-rika-till-fattiga-kommuner" }],
            },
            {
              componentId: "marknadshyror",
              position: "Motsätter sig marknadshyror starkt; menar att hyror ska vara rättvisa och på nivåer där alla har råd att bo — främjar lika tillgång starkt.",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: Marknadshyror ska införas på nya hyresrätter", url: "https://valkompass.svt.se/2022/riksdag/fraga/marknadshyror-ska-inforas-pa-nya-hyresratter" }],
            },
          ],
        },
        insats: {
          score: 60,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: vill sänka skatten på låga arbetsinkomster, inför bidragstak och behåller RUT, men stöder permanentad höjd a-kassa och är ljummet negativ till uppluckrat anställningsskydd. Koppling insats–utfall starkare i skatte- och bidragsfrågor än i arbetsrätten.",
          sources: [
            { title: "Arbetsvärlden: Sex av åtta partier vill sänka skatten på arbete", url: "https://www.arbetsvarlden.se/sex-av-atta-partier-vill-sanka-skatten-pa-arbete/" },
            { title: "SVT:s valkompass 2022: RUT-avdraget ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/rut-avdraget-ska-avskaffas" },
          ],
          components: [
            {
              componentId: "jobbskatteavdrag",
              position: "'Ja, på låga förvärvsinkomster i första hand utifrån budgetutrymme' — vill sänka skatten på arbete.",
              score: 75,
              sources: [{ title: "Arbetsvärlden: Sex av åtta partier vill sänka skatten på arbete", url: "https://www.arbetsvarlden.se/sex-av-atta-partier-vill-sanka-skatten-pa-arbete/" }],
            },
            {
              componentId: "bidragstak-motprestation",
              position: "Stöder bidragstaket: 'Vi inför ett bidragstak för större hushåll därför att systemen måste vara långsiktigt hållbara.'",
              score: 100,
              sources: [{ title: "Riksdagens betänkande 2025/26:SoU30 (Reformerat försörjningsstöd – bidragstak)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/reformerat-forsorjningsstod-bidragstak-och-okade_hd01sou30/" }],
            },
            {
              componentId: "a-kassa-niva",
              position: "'Vi är positiva till att den tillfälliga höjningen av a-kassan permanentas' (Mycket bra förslag) — minskar gapet mot arbetsinkomst.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Den tillfälliga höjningen i A-kassan ska permanentas", url: "https://valkompass.svt.se/2022/riksdag/fraga/den-tillfalliga-hojningen-i-a-kassan-ska-permanentas" }],
            },
            {
              componentId: "anstallningsskydd",
              position: "Något negativ (Ganska dåligt förslag) trots stöd för partsöverenskommelsen bakom LAS-ändringarna; värnar tryggheten i anställningen.",
              score: 25,
              sources: [{ title: "SVT:s valkompass 2022: Det ska bli enklare för arbetsgivare att säga upp anställda", url: "https://valkompass.svt.se/2022/riksdag/fraga/det-ska-bli-enklare-for-arbetsgivare-att-saga-upp-anstallda" }],
            },
            {
              componentId: "rut-avdrag",
              position: "Vill behålla RUT-avdraget (Mycket dåligt förslag om att avskaffa).",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: RUT-avdraget ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/rut-avdraget-ska-avskaffas" }],
            },
          ],
        },
        frihet: {
          score: 50,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: SD värnar valfriheten i välfärden, stöder gårdsförsäljning och en dödshjälpsutredning och vill bara ha något mer övervakning, men driver visitationszoner fullt ut — en blandad frihetsprofil där rättssäkerheten mot polismakten väger lätt.",
          sources: [
            { title: "SVT:s valkompass 2022: Vinstutdelning för friskolor ska förbjudas", url: "https://valkompass.svt.se/2022/riksdag/fraga/vinstutdelning-for-friskolor-ska-forbjudas" },
            { title: "SVT:s valkompass 2022: Polisen ska kunna upprätta visitationszoner i brottsutsatta områden", url: "https://valkompass.svt.se/2022/riksdag/fraga/polisen-ska-kunna-uppratta-visitationszoner-i-brottsutsatta-omraden" },
          ],
          components: [
            {
              componentId: "valfrihet-valfard",
              position: "Tycker vinstutdelningsförbud är ett ganska dåligt förslag; värnar valfriheten och vill inte skuldbelägga privata aktörer för skolans problem.",
              score: 75,
              sources: [{ title: "SVT:s valkompass 2022: Vinstutdelning för friskolor ska förbjudas", url: "https://valkompass.svt.se/2022/riksdag/fraga/vinstutdelning-for-friskolor-ska-forbjudas" }],
            },
            {
              componentId: "gardsforsaljning",
              position: "För gårdsförsäljning som möjliggör för små bryggerier, med bibehållen roll för Systembolaget.",
              score: 75,
              sources: [{ title: "Vinbanken: Gårdsförsäljning av alkohol – så tycker de olika partierna (2022)", url: "https://vinbanken.se/2022/09/07/gardsforsaljning-av-alkohol-sa-tycker-de-olika-partierna" }],
            },
            {
              componentId: "dodshjalp",
              position: "Ett av sex partier som vill utreda dödshjälp och öppna för frågan om självbestämmande i livets slutskede.",
              score: 75,
              sources: [{ title: "Senioren: Sex partier vill utreda dödshjälp", url: "https://www.senioren.se/nyheter/254501/" }],
            },
            {
              componentId: "overvakning",
              position: "Vill ge polisen 'lite mer' förebyggande övervakning inriktad mot gängkriminella miljöer.",
              score: 25,
              sources: [{ title: "SVT:s valkompass 2022: Hur mycket ska polisen få använda hemlig avlyssning och övervakning utan brottsmisstanke?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-polisen-fa-anvanda-hemlig-avlyssning-och-overvakning-utan-brottsmisstanke" }],
            },
            {
              componentId: "visitationszoner",
              position: "Tycker visitationszoner är ett mycket bra förslag mot narkotikaförsäljning och skjutningar i utsatta områden.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Polisen ska kunna upprätta visitationszoner i brottsutsatta områden", url: "https://valkompass.svt.se/2022/riksdag/fraga/polisen-ska-kunna-uppratta-visitationszoner-i-brottsutsatta-omraden" }],
            },
          ],
        },
        framtid: {
          score: 45,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: drev sänkningen av reduktionsplikten och bromsar vindkraft men vill bygga ny kärnkraft och återuppbygga totalförsvaret; anslöt sig till 2045-målet 2023 efter tidigare motstånd, naturskyddsposition saknas (§D).",
          sources: [{ title: "Sverigedemokraternas politik – Vad vi vill", url: "https://www.sd.se/vad-vi-vill/" }],
          components: [
            {
              componentId: "klimatmal-2045",
              position: "Ställde sig bakom 2045-målet i Tidöpartiernas överenskommelse (2023-11-14) efter att tidigare ha röstat nej till klimatmålen och drivit på för att avskaffa dem; partiets eget program motsätter sig 'ineffektiva klimatpolitiska satsningar' — blandad inriktning.",
              score: 50,
              sources: [
                { title: "SVT: SD ställer sig bakom Sveriges klimatmål (2023-11-14)", url: "https://www.svt.se/nyheter/inrikes/sd-staller-sig-bakom-sveriges-klimatmal--myxt3h" },
                { title: "Sverigedemokraterna: Vad vi vill", url: "https://www.sd.se/vad-vi-vill/" },
              ],
            },
            {
              componentId: "reduktionsplikt",
              position: "Drev fram sänkningen till 6 % och slopade höjningsnivåer 2027–2030 som profilfråga; vill fortsatt ha 'låga skatter på drivmedel' — motverkar aktivt en hög nivå.",
              score: 0,
              sources: [
                { title: "Riksdagen: betänkande 2023/24:MJU5", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/sankning-av-reduktionsplikten-for-bensin-och_hb01mju5/" },
                { title: "Sverigedemokraterna: Vad vi vill", url: "https://www.sd.se/vad-vi-vill/" },
              ],
            },
            {
              componentId: "naturskydd-skog",
              position: "Position saknas: naturskydd och skogsskydd behandlas inte på partiets miljöpolitik- eller programsidor (eftersökt 2026-06-12). Neutral prior enligt protokollets §D.",
              score: 50,
              sources: [{ title: "Sverigedemokraterna: Miljöpolitik (eftersökt)", url: "https://sd.se/vad-vi-vill/miljopolitik/" }],
            },
            {
              componentId: "civilforsvar-beredskap",
              position: "Vill att 'totalförsvaret återuppbyggas med ett starkt militärt försvar och bättre beredskap i hela landet'.",
              score: 75,
              sources: [{ title: "Sverigedemokraterna: Vad vi vill", url: "https://www.sd.se/vad-vi-vill/" }],
            },
            {
              componentId: "fossilfri-el",
              position: "Vill 'bygga ny kärnkraft i Sverige' med färdplan för SMR-reaktorer, men motarbetar vindkraft ('väderberoende') och värnar det kommunala vetot — blandad inriktning för total utbyggnad.",
              score: 50,
              sources: [{ title: "Sverigedemokraterna: Svensk energi", url: "https://www.sd.se/vad-vi-vill/svensk-energi/" }],
            },
          ],
        },
      },
      feasibility: {
        factor: 0.64,
        motivation: "Protokollets rubrik §3.3: E 0.3 (formaliserat regeringssamarbete utan statsråd, Tidöavtalet), P 0.68 (73/107 mandat), T 0.6 (avtalspart med dokumenterat programgenomslag via Tidöavtalet); raw 0.485 ger faktor 0.64 efter koalitionsgolvet.",
        sources: [
          { title: "Valresultat 2022 (Valmyndigheten)", url: "https://www.val.se/valresultat-och-statistik/riksdags--region--och-kommunval/valresultat-2022" },
          { title: "Regeringar i Sverige (Riksdagen)", url: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/" },
        ],
      },
    },
    {
      id: "v",
      name: "Vänsterpartiet",
      abbreviation: "V",
      color: "#DA291C",
      scores: {
        valbefinnande: {
          score: 85,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: mest expansiv på de konkreta välfärdsinstrument frågebanken mäter — vill avskaffa karensavdraget ('mycket bra'), bredda tandvårdsskyddet ('tänderna är en klassfråga'), kraftigt öka resurserna till skola och äldreomsorg samt bryta gängvåldet med både polis och sociala insatser.",
          sources: [
            { title: "Riksdagen: betänkande 2025/26:SoU10 (Ett förstärkt högkostnadsskydd för tandvård)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/ett-forstarkt-hogkostnadsskydd-for-tandvard_hd01sou10/" },
            { title: "SVT:s valkompass 2022: Karensdagen ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/karensdagen-ska-avskaffas" },
          ],
          components: [
            {
              componentId: "utbildning-skolresultat",
              position: "Vill att skattepengar går 'till skolan, inte läggas i fickan på ägare till stora friskolekoncerner' och stärka skolans resurser för bättre resultat.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Likvärdig utbildning", url: "https://www.svt.se/valfrageguiden/forslag/likvardig-utbildning" }],
            },
            {
              componentId: "aldreomsorg",
              position: "Vill kraftigt öka de kommunala resurserna för att anställa mer personal, förbättra villkoren och se till att pengarna går till omsorg snarare än vinst.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: God äldreomsorg", url: "https://www.svt.se/valfrageguiden/forslag/god-aldreomsorg" }],
            },
            {
              componentId: "trygghet-gangvald",
              position: "Vill stoppa narkotika- och vapensmuggling, fler poliser, sociala insatsgrupper och avhopparprogram för att bryta gängvåldet.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Minska gängvåldet", url: "https://www.svt.se/valfrageguiden/forslag/minska-gangvaldet" }],
            },
            {
              componentId: "tandvard-hogkostnadsskydd",
              position: "Stödjer reformen men reserverar sig (res. 1 och 5) för ett bredare högkostnadsskydd — 'tänderna är en klassfråga' och tandvården bör likställas med övrig sjukvård.",
              score: 100,
              sources: [{ title: "Riksdagen: betänkande 2025/26:SoU10 (Ett förstärkt högkostnadsskydd för tandvård)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/ett-forstarkt-hogkostnadsskydd-for-tandvard_hd01sou10/" }],
            },
            {
              componentId: "sjukforsakring-karens",
              position: "'Mycket bra förslag': 'Karensavdraget leder till skadlig sjuknärvaro och drabbar framförallt människor med arbetaryrken.'",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: Karensdagen ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/karensdagen-ska-avskaffas" }],
            },
          ],
        },
        lidande: {
          score: 80,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: starkast i fältet på narkotikaomläggning mot skademinimering (brukarrum, avkriminalisering av eget bruk), vill stärka primärvård och elevhälsa, bygga billiga hyresrätter för de sämst ställda och stärka brottsofferstödet.",
          sources: [
            { title: "Riksdagen: betänkande 2024/25:SoU13 (Alkohol, narkotika, dopning, tobak och spel)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/alkohol-narkotika-dopning-tobak-och-spel_hc01sou13/" },
            { title: "SVT:s valfrågeguiden 2022: Minska psykisk ohälsa", url: "https://www.svt.se/valfrageguiden/forslag/minska-psykisk-ohalsa" },
          ],
          components: [
            {
              componentId: "psykiatri",
              position: "Vill 'stärka primärvården och elevhälsan' med 'låga trösklar för att få hjälp' vid psykisk ohälsa.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Minska psykisk ohälsa", url: "https://www.svt.se/valfrageguiden/forslag/minska-psykisk-ohalsa" }],
            },
            {
              componentId: "narkotika-skademinimering",
              position: "Reservation 10 i SoU13 (Karin Rågsjö): vill utvärdera kriminaliseringen av eget bruk, lägga om målet mot minskade skador och införa brukarrum — enda parti som vill avskaffa straff för eget bruk (Portugalmodellen). Starkt och konkret.",
              score: 100,
              sources: [{ title: "Riksdagen: betänkande 2024/25:SoU13 (Alkohol, narkotika, dopning, tobak och spel)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/alkohol-narkotika-dopning-tobak-och-spel_hc01sou13/" }],
            },
            {
              componentId: "hemloshet-bostad-forst",
              position: "Ser bostaden som en social rättighet, inte en handelsvara, och vill bygga billiga hyresrätter med låga hyror för de sämst ställda.",
              score: 75,
              sources: [{ title: "Fastighetstidningen: Snabbguide till valet – social bostadspolitik (2022)", url: "https://fastighetstidningen.se/snabbguide-till-valet-social-bostadspolitik/" }],
            },
            {
              componentId: "brottsofferstod",
              position: "Reservation 3 i JuU18: vill stärka polisens och åklagarnas arbete vid brott mot kvinnor och barn — driver stärkt brottsofferstöd.",
              score: 75,
              sources: [{ title: "Riksdagen: betänkande 2023/24:JuU18 (Våldsbrott och brottsoffer)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/valdsbrott-och-brottsoffer_hb01juu18/" }],
            },
            {
              componentId: "vardkoer",
              position: "Vill 'öka personaltätheten' med höjda löner och bättre villkor för att korta köerna — programåtagande utan namngiven strukturreform.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Kortare vårdköer", url: "https://www.svt.se/valfrageguiden/forslag/kortare-vardkoer" }],
            },
          ],
        },
        fordelning: {
          score: 100,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: vill skärpa kapitalbeskattningen, höja skatten på höga inkomster, återinföra arvs- och förmögenhetsskatt samt statlig fastighetsskatt på dyra fastigheter, utjämna mellan kommuner och stoppa marknadshyror — främjar fördelningsmålet starkt och konkret i varje fråga.",
          sources: [
            { title: "Vänsterpartiet: Skattepolitik", url: "https://www.vansterpartiet.se/var-politik/politik-a-o/skattepolitik/" },
            { title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" },
          ],
          components: [
            {
              componentId: "kapitalinkomstskatt",
              position: "Vill flytta skatteuttaget från arbete till kapital och förmögenhet med 'skärpt beskattning av kapital'; höjer kapitalskatten kraftigt — främjar starkt.",
              score: 100,
              sources: [
                { title: "Vänsterpartiet: Skattepolitik", url: "https://www.vansterpartiet.se/var-politik/politik-a-o/skattepolitik/" },
                { title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" },
              ],
            },
            {
              componentId: "hoga-inkomster-skatt",
              position: "Vill höja skatten kraftigt på höga inkomster: 'Efter flera decennier av skattesänkningar behöver skattepolitiken ändras' — främjar starkt.",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: Hur mycket ska höginkomsttagare betala i skatt?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-hoginkomsttagare-betala-i-skatt" }],
            },
            {
              componentId: "formogenhet-arvsskatt",
              position: "Reservation 8 (återinförd arvs- och gåvoskatt: 'arv är också ett tydligt exempel på hur kapital påverkar en individs livschanser') och reservation 16 (statlig fastighetsskatt på dyra fastigheter) i SkU12 — främjar starkt och konkret.",
              score: 100,
              sources: [{ title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" }],
            },
            {
              componentId: "kommunal-skatteutjamning",
              position: "Instämmer: 'Boende i Dorotea eller Årjäng ska inte behöva betala mycket mer i kommunalskatt än rika kommuner' — främjar omfördelning starkt.",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: Mer skatteinkomster ska omfördelas från rika till fattiga kommuner", url: "https://valkompass.svt.se/2022/riksdag/fraga/mer-skatteinkomster-ska-omfordelas-fran-rika-till-fattiga-kommuner" }],
            },
            {
              componentId: "marknadshyror",
              position: "Motsätter sig marknadshyror starkt: 'Marknadshyror leder enbart till höjda hyror. Det skulle bli en ännu mer ojämlik bostadsmarknad än den vi har idag' — främjar starkt.",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: Marknadshyror ska införas på nya hyresrätter", url: "https://valkompass.svt.se/2022/riksdag/fraga/marknadshyror-ska-inforas-pa-nya-hyresratter" }],
            },
          ],
        },
        insats: {
          score: 5,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: säger nej till sänkt skatt på arbete, leder motståndet mot bidragstaket, vill stärka a-kassan, var ensamt parti mot LAS-uppluckringen och vill avskaffa RUT. Genomgående svag koppling mellan individuell insats och utfall i de operationaliserade frågorna.",
          sources: [
            { title: "Arbetsvärlden: Sex av åtta partier vill sänka skatten på arbete", url: "https://www.arbetsvarlden.se/sex-av-atta-partier-vill-sanka-skatten-pa-arbete/" },
            { title: "SVT:s valkompass 2022: RUT-avdraget ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/rut-avdraget-ska-avskaffas" },
          ],
          components: [
            {
              componentId: "jobbskatteavdrag",
              position: "'Nej. Det finns inget egenvärde i höga skatter på arbete' men avvisar generella sänkningar; öppnar bara för lägre skatt på låga inkomster.",
              score: 25,
              sources: [{ title: "Arbetsvärlden: Sex av åtta partier vill sänka skatten på arbete", url: "https://www.arbetsvarlden.se/sex-av-atta-partier-vill-sanka-skatten-pa-arbete/" }],
            },
            {
              componentId: "bidragstak-motprestation",
              position: "Leder motståndet (reservation 2): 'en av de största försämringarna' — avvisar bidragstaket helt.",
              score: 0,
              sources: [{ title: "Riksdagens betänkande 2025/26:SoU30 (Reformerat försörjningsstöd – bidragstak)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/reformerat-forsorjningsstod-bidragstak-och-okade_hd01sou30/" }],
            },
            {
              componentId: "a-kassa-niva",
              position: "Vill stärka arbetslöshetsförsäkringen utöver förslaget (Mycket bra förslag om permanentning) — minskar gapet mot arbetsinkomst.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Den tillfälliga höjningen i A-kassan ska permanentas", url: "https://valkompass.svt.se/2022/riksdag/fraga/den-tillfalliga-hojningen-i-a-kassan-ska-permanentas" }],
            },
            {
              componentId: "anstallningsskydd",
              position: "Motsätter sig starkt (Mycket dåligt förslag, extra viktig fråga): var ensamt parti som röstade mot LAS-ändringarna.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Det ska bli enklare för arbetsgivare att säga upp anställda", url: "https://valkompass.svt.se/2022/riksdag/fraga/det-ska-bli-enklare-for-arbetsgivare-att-saga-upp-anstallda" }],
            },
            {
              componentId: "rut-avdrag",
              position: "Vill avskaffa RUT-avdraget (Mycket bra förslag om att avskaffa).",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: RUT-avdraget ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/rut-avdraget-ska-avskaffas" }],
            },
          ],
        },
        frihet: {
          score: 55,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: V säger ja till vinstutdelningsförbud och nej till gårdsförsäljning men stöder en dödshjälpsutredning och är det parti som starkast värnar rättssäkerheten mot statens tvångsmakt — vill ha mindre hemlig övervakning utan brottsmisstanke och avvisar visitationszoner helt.",
          sources: [
            { title: "SVT:s valkompass 2022: Hur mycket ska polisen få använda hemlig avlyssning och övervakning utan brottsmisstanke?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-polisen-fa-anvanda-hemlig-avlyssning-och-overvakning-utan-brottsmisstanke" },
            { title: "SVT:s valkompass 2022: Polisen ska kunna upprätta visitationszoner i brottsutsatta områden", url: "https://valkompass.svt.se/2022/riksdag/fraga/polisen-ska-kunna-uppratta-visitationszoner-i-brottsutsatta-omraden" },
          ],
          components: [
            {
              componentId: "valfrihet-valfard",
              position: "Tycker vinstutdelningsförbud är ett mycket bra förslag; avvisar skolan som marknad och vill återföra kontrollen till samhället — begränsar driftsfriheten/valfriheten.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Vinstutdelning för friskolor ska förbjudas", url: "https://valkompass.svt.se/2022/riksdag/fraga/vinstutdelning-for-friskolor-ska-forbjudas" }],
            },
            {
              componentId: "gardsforsaljning",
              position: "Mot gårdsförsäljning: 'alkohol inte ska vara tillgängligt som om det var vilken vara som helst' — värnar monopolet.",
              score: 25,
              sources: [{ title: "Vinbanken: Gårdsförsäljning av alkohol – så tycker de olika partierna (2022)", url: "https://vinbanken.se/2022/09/07/gardsforsaljning-av-alkohol-sa-tycker-de-olika-partierna" }],
            },
            {
              componentId: "dodshjalp",
              position: "Ett av sex partier som vill utreda dödshjälp och öppna för frågan om självbestämmande i livets slutskede.",
              score: 75,
              sources: [{ title: "Senioren: Sex partier vill utreda dödshjälp", url: "https://www.senioren.se/nyheter/254501/" }],
            },
            {
              componentId: "overvakning",
              position: "Vill ha 'lite mindre' hemlig tvångsmedelsanvändning: hemliga tvångsmedel ska kräva brottsmisstanke och förebyggande åtgärder bara för de grövsta brotten.",
              score: 75,
              sources: [{ title: "SVT:s valkompass 2022: Hur mycket ska polisen få använda hemlig avlyssning och övervakning utan brottsmisstanke?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-polisen-fa-anvanda-hemlig-avlyssning-och-overvakning-utan-brottsmisstanke" }],
            },
            {
              componentId: "visitationszoner",
              position: "Tycker visitationszoner är ett mycket dåligt förslag; visitation utan misstanke drabbar oskyldiga, ökar risken för profilering och skadar förtroendet för polisen.",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: Polisen ska kunna upprätta visitationszoner i brottsutsatta områden", url: "https://valkompass.svt.se/2022/riksdag/fraga/polisen-ska-kunna-uppratta-visitationszoner-i-brottsutsatta-omraden" }],
            },
          ],
        },
        framtid: {
          score: 85,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: vill skärpa klimatmålet till 2035, behöll reduktionsplikten, kraftigt utökat naturskydd samt civilplikt och självförsörjning i beredskapen; elutbyggnaden är förnybar men utesluter kärnkraft.",
          sources: [{ title: "Vänsterpartiets politik", url: "https://www.vansterpartiet.se/var-politik/" }],
          components: [
            {
              componentId: "klimatmal-2045",
              position: "'Sverige bör anta klimatmål om nollutsläpp senast år 2035' — skärper målet med tio år.",
              score: 100,
              sources: [{ title: "Vänsterpartiet: Klimat", url: "https://www.vansterpartiet.se/var-politik/politik-a-o/klimat/" }],
            },
            {
              componentId: "reduktionsplikt",
              position: "Reserverade sig mot sänkningen och kräver att regeringen återkommer med handlingsplan för att sluta utsläppsgapet som sänkningen skapar — behåller en hög nivå.",
              score: 75,
              sources: [{ title: "Riksdagen: betänkande 2023/24:MJU5", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/sankning-av-reduktionsplikten-for-bensin-och_hb01mju5/" }],
            },
            {
              componentId: "naturskydd-skog",
              position: "Vill 'kraftigt öka satsningar på att skydda och återställa värdefull natur'; miljöhänsyn ska 'gå före företagens kortsiktiga vinstintressen' — starkt och konkret.",
              score: 100,
              sources: [{ title: "Vänsterpartiet: Miljö", url: "https://www.vansterpartiet.se/var-politik/politik-a-o/miljo/" }],
            },
            {
              componentId: "civilforsvar-beredskap",
              position: "Förespråkar 'civilplikt för t.ex. brandbekämpning och katastrofberedskap', ökad självförsörjning av livsmedel och stärkt energiberedskap.",
              score: 75,
              sources: [{ title: "Vänsterpartiet: Krisberedskap och samhällsskydd", url: "https://www.vansterpartiet.se/var-politik/politik-a-o/krisberedskap-och-samhallsskydd/" }],
            },
            {
              componentId: "fossilfri-el",
              position: "Vill satsa på 'lokal förnybar elproduktion, med klimatsmart el från sol, vind, bio- och geoenergi' och historiskt stora elnätsinvesteringar; kärnkraft ingår inte.",
              score: 75,
              sources: [{ title: "Vänsterpartiet: Energi", url: "https://www.vansterpartiet.se/var-politik/politik-a-o/energi/" }],
            },
          ],
        },
      },
      feasibility: {
        factor: 0.45,
        motivation: "Protokollets rubrik §3.3: E 0.1 (varken statsråd eller formaliserat regeringssamarbete), P 0.22 (24/107 mandat), T 0.4 (återkommande budgetuppgörelser med S-regeringar); raw 0.220 ger faktor 0.45 efter koalitionsgolvet.",
        sources: [
          { title: "Valresultat 2022 (Valmyndigheten)", url: "https://www.val.se/valresultat-och-statistik/riksdags--region--och-kommunval/valresultat-2022" },
          { title: "Regeringar i Sverige (Riksdagen)", url: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/" },
        ],
      },
    },
    {
      id: "c",
      name: "Centerpartiet",
      abbreviation: "C",
      color: "#009933",
      scores: {
        valbefinnande: {
          score: 60,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: programåtaganden för stärkt lärarroll, en hemtjänst med få och fasta kontakter, förebyggande och repressiva insatser mot gängvåld samt stöd för det breddade tandvårdsskyddet; karensavdraget försvaras dock som ett 'mycket dåligt' förslag att avskaffa.",
          sources: [
            { title: "SVT:s valfrågeguiden 2022: God äldreomsorg", url: "https://www.svt.se/valfrageguiden/forslag/god-aldreomsorg" },
            { title: "SVT:s valkompass 2022: Karensdagen ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/karensdagen-ska-avskaffas" },
          ],
          components: [
            {
              componentId: "utbildning-skolresultat",
              position: "Vill stärka lärarnas ställning, ge fler speciallärare till elever som behöver mest stöd och säkra hög kvalitet i alla skolor.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Likvärdig utbildning", url: "https://www.svt.se/valfrageguiden/forslag/likvardig-utbildning" }],
            },
            {
              componentId: "aldreomsorg",
              position: "Vill att 'max tio medarbetare ska besöka den äldres hem' under två veckor, med fasta omsorgskontakter och stärkt medicinsk närvaro.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: God äldreomsorg", url: "https://www.svt.se/valfrageguiden/forslag/god-aldreomsorg" }],
            },
            {
              componentId: "trygghet-gangvald",
              position: "Vill kombinera tidiga förebyggande insatser, stärkta polisresurser och hemliga tvångsmedel med riktade straffskärpningar.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Minska gängvåldet", url: "https://www.svt.se/valfrageguiden/forslag/minska-gangvaldet" }],
            },
            {
              componentId: "tandvard-hogkostnadsskydd",
              position: "Stödjer det förstärkta högkostnadsskyddet men reserverar sig för att täppa till glappen för landsbygden — vill bredda reformen.",
              score: 75,
              sources: [{ title: "Riksdagen: betänkande 2025/26:SoU10 (Ett förstärkt högkostnadsskydd för tandvård)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/ett-forstarkt-hogkostnadsskydd-for-tandvard_hd01sou10/" }],
            },
            {
              componentId: "sjukforsakring-karens",
              position: "'Mycket dåligt förslag': 'Den som är sjuk har rätt till sjuklön med undantag för en första dag' — vill behålla karensavdraget.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Karensdagen ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/karensdagen-ska-avskaffas" }],
            },
          ],
        },
        lidande: {
          score: 75,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: vill avkriminalisera eget bruk för att fler ska söka vård, snabb hjälp vid psykisk ohälsa och utnyttja all vårdkapacitet (kömiljard) mot köer, plus stärkt brottsofferskydd; svagare på en sammanhållen hemlöshetsstrategi.",
          sources: [
            { title: "SVT: Centerpartiet vill avkriminalisera narkotika i kroppen (2025)", url: "https://www.svt.se/nyheter/inrikes/centerpartiet-vill-avkriminalisera-narkotika-i-kroppen" },
            { title: "SVT:s valfrågeguiden 2022: Kortare vårdköer", url: "https://www.svt.se/valfrageguiden/forslag/kortare-vardkoer" },
          ],
          components: [
            {
              componentId: "psykiatri",
              position: "'Människor som mår dåligt behöver snabbt få hjälp' genom utbyggd primärvård och tillgänglig samtalsterapi utan krav på specialist.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Minska psykisk ohälsa", url: "https://www.svt.se/valfrageguiden/forslag/minska-psykisk-ohalsa" }],
            },
            {
              componentId: "narkotika-skademinimering",
              position: "Partistämman beslutade (2025-11-15) att avkriminalisera förekomst av narkotika i kroppen för att fler ska söka vård och frigöra polisresurser — främjar omläggningen mot vård före straff.",
              score: 75,
              sources: [{ title: "SVT: Centerpartiet vill avkriminalisera narkotika i kroppen (2025)", url: "https://www.svt.se/nyheter/inrikes/centerpartiet-vill-avkriminalisera-narkotika-i-kroppen" }],
            },
            {
              componentId: "hemloshet-bostad-forst",
              position: "Vill utveckla en social bostadssektor med befintliga allmännyttiga verktyg men kombinerar det med friare hyressättning i nyproduktion; driver ingen nationell hemlöshetsstrategi — blandad inriktning.",
              score: 50,
              sources: [{ title: "Fastighetstidningen: Snabbguide till valet – social bostadspolitik (2022)", url: "https://fastighetstidningen.se/snabbguide-till-valet-social-bostadspolitik/" }],
            },
            {
              componentId: "brottsofferstod",
              position: "Driver i JuU18 reservationer för stärkt brottsofferskydd (bland annat digital trygghet och traumastöd).",
              score: 75,
              sources: [{ title: "Riksdagen: betänkande 2023/24:JuU18 (Våldsbrott och brottsoffer)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/valdsbrott-och-brottsoffer_hb01juu18/" }],
            },
            {
              componentId: "vardkoer",
              position: "'All sjukvårdskapacitet som finns ska användas för att korta köerna' med riktade statsbidrag (kömiljard) — konkret flaggskepp.",
              score: 100,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Kortare vårdköer", url: "https://www.svt.se/valfrageguiden/forslag/kortare-vardkoer" }],
            },
          ],
        },
        fordelning: {
          score: 35,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: marknadsliberal skattelinje som vill sänka skatter och avslår höjda kapital- och förmögenhetsskatter, plus stöd för friare hyressättning; undantaget är skatteutjämningen, som C vill reformera för att bli mer rättvis.",
          sources: [
            { title: "SVT:s valkompass 2022: Mer skatteinkomster ska omfördelas från rika till fattiga kommuner", url: "https://valkompass.svt.se/2022/riksdag/fraga/mer-skatteinkomster-ska-omfordelas-fran-rika-till-fattiga-kommuner" },
            { title: "SVT:s valkompass 2022: Hur mycket ska höginkomsttagare betala i skatt?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-hoginkomsttagare-betala-i-skatt" },
          ],
          components: [
            {
              componentId: "kapitalinkomstskatt",
              position: "Marknadsliberal skattelinje; tillhör de partier som i SkU12 avslog höjd kapitalbeskattning och vill sänka skatter snarare än höja kapitalskatten — motverkar delvis.",
              score: 25,
              sources: [{ title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" }],
            },
            {
              componentId: "hoga-inkomster-skatt",
              position: "Vill sänka skatten något på höga inkomster: 'Vi vill sänka skatterna för alla, men mest för låg- och medelinkomsttagare' — motverkar delvis en höjning.",
              score: 25,
              sources: [{ title: "SVT:s valkompass 2022: Hur mycket ska höginkomsttagare betala i skatt?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-hoginkomsttagare-betala-i-skatt" }],
            },
            {
              componentId: "formogenhet-arvsskatt",
              position: "Tillhör blocket som i SkU12 avslog återinförd förmögenhets- och arvsskatt; partiets liberala grundhållning motsätter sig sådana skatter — motverkar delvis.",
              score: 25,
              sources: [{ title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" }],
            },
            {
              componentId: "kommunal-skatteutjamning",
              position: "Instämmer delvis: 'Skatteutjämningssystemet behöver reformeras och förbättras för att bli mer rättvist' — främjar omfördelning.",
              score: 75,
              sources: [{ title: "SVT:s valkompass 2022: Mer skatteinkomster ska omfördelas från rika till fattiga kommuner", url: "https://valkompass.svt.se/2022/riksdag/fraga/mer-skatteinkomster-ska-omfordelas-fran-rika-till-fattiga-kommuner" }],
            },
            {
              componentId: "marknadshyror",
              position: "Stöder friare hyressättning i nyproduktion för att öka rörligheten på bostadsmarknaden ('ganska bra förslag') — motverkar delvis bruksvärdesprincipen.",
              score: 25,
              sources: [{ title: "SVT:s valkompass 2022: Marknadshyror ska införas på nya hyresrätter", url: "https://valkompass.svt.se/2022/riksdag/fraga/marknadshyror-ska-inforas-pa-nya-hyresratter" }],
            },
          ],
        },
        insats: {
          score: 80,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: 'det ska alltid löna sig att arbeta' — vill sänka skatten på arbete, stöder arbetslinjen och bidragsreformen, vill luckra upp anställningsskyddet och försvarar RUT starkt; svalt snarare än helt emot permanentad a-kassa.",
          sources: [
            { title: "Arbetsvärlden: Sex av åtta partier vill sänka skatten på arbete", url: "https://www.arbetsvarlden.se/sex-av-atta-partier-vill-sanka-skatten-pa-arbete/" },
            { title: "SVT:s valkompass 2022: RUT-avdraget ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/rut-avdraget-ska-avskaffas" },
          ],
          components: [
            {
              componentId: "jobbskatteavdrag",
              position: "'Ja. Det ska alltid löna sig att arbeta' — vill sänka skatten på arbete, mest för låg- och medelinkomsttagare.",
              score: 75,
              sources: [{ title: "Arbetsvärlden: Sex av åtta partier vill sänka skatten på arbete", url: "https://www.arbetsvarlden.se/sex-av-atta-partier-vill-sanka-skatten-pa-arbete/" }],
            },
            {
              componentId: "bidragstak-motprestation",
              position: "Stöder arbetslinjen och kraven i bidragsreformen ('Arbetslinjen är en av de mest grundläggande principerna'), med reservation om utvärderingen.",
              score: 75,
              sources: [{ title: "Riksdagens betänkande 2025/26:SoU30 (Reformerat försörjningsstöd – bidragstak)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/reformerat-forsorjningsstod-bidragstak-och-okade_hd01sou30/" }],
            },
            {
              componentId: "a-kassa-niva",
              position: "Negativ till permanentad höjning (Ganska dåligt förslag): vill en omställningsförsäkring som är högre först och trappas ner snabbare.",
              score: 75,
              sources: [{ title: "SVT:s valkompass 2022: Den tillfälliga höjningen i A-kassan ska permanentas", url: "https://valkompass.svt.se/2022/riksdag/fraga/den-tillfalliga-hojningen-i-a-kassan-ska-permanentas" }],
            },
            {
              componentId: "anstallningsskydd",
              position: "Stöder utökade undantag från turordningen (Ganska bra förslag) med ett grundläggande omställnings- och kompetensstöd.",
              score: 75,
              sources: [{ title: "SVT:s valkompass 2022: Det ska bli enklare för arbetsgivare att säga upp anställda", url: "https://valkompass.svt.se/2022/riksdag/fraga/det-ska-bli-enklare-for-arbetsgivare-att-saga-upp-anstallda" }],
            },
            {
              componentId: "rut-avdrag",
              position: "Vill behålla RUT-avdraget (Mycket dåligt förslag om att avskaffa, extra viktig fråga).",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: RUT-avdraget ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/rut-avdraget-ska-avskaffas" }],
            },
          ],
        },
        frihet: {
          score: 75,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: C är frihetligt på samtliga delar — värnar valfrihet i välfärden, gårdsförsäljning och en dödshjälpsutredning samt avvisar visitationszoner helt, och vill behålla dagens övervakningsnivå men kräver konkret brottsmisstanke. Det enda parti som håller frihetslinjen i både marknads-, anti-paternalism- och rättssäkerhetsfrågorna.",
          sources: [
            { title: "SVT:s valkompass 2022: Polisen ska kunna upprätta visitationszoner i brottsutsatta områden", url: "https://valkompass.svt.se/2022/riksdag/fraga/polisen-ska-kunna-uppratta-visitationszoner-i-brottsutsatta-omraden" },
            { title: "SVT:s valkompass 2022: Hur mycket ska polisen få använda hemlig avlyssning och övervakning utan brottsmisstanke?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-polisen-fa-anvanda-hemlig-avlyssning-och-overvakning-utan-brottsmisstanke" },
          ],
          components: [
            {
              componentId: "valfrihet-valfard",
              position: "Tycker vinstutdelningsförbud är ett ganska dåligt förslag; accepterar vinst för utveckling men vill begränsa utdelning vid tillsynsbrister — värnar i huvudsak valfriheten.",
              score: 75,
              sources: [{ title: "SVT:s valkompass 2022: Vinstutdelning för friskolor ska förbjudas", url: "https://valkompass.svt.se/2022/riksdag/fraga/vinstutdelning-for-friskolor-ska-forbjudas" }],
            },
            {
              componentId: "gardsforsaljning",
              position: "För gårdsförsäljning av egna produkter där de tillverkas, med bevarat Systembolagsmonopol; långvarig profilfråga för partiet.",
              score: 75,
              sources: [{ title: "Vinbanken: Gårdsförsäljning av alkohol – så tycker de olika partierna (2022)", url: "https://vinbanken.se/2022/09/07/gardsforsaljning-av-alkohol-sa-tycker-de-olika-partierna" }],
            },
            {
              componentId: "dodshjalp",
              position: "Svängde 2023 om och vill se en parlamentarisk utredning av dödshjälp (motion 2023/24:2581 av Kerstin Lundgren), vilket skapade riksdagsmajoritet för en utredning.",
              score: 75,
              sources: [{ title: "Senioren: Sex partier vill utreda dödshjälp", url: "https://www.senioren.se/nyheter/254501/" }],
            },
            {
              componentId: "overvakning",
              position: "Vill behålla övervakningen på 'samma som i dag'; stöder utökade verktyg men kräver konkret brottsmisstanke för att de ska få användas — validerad status quo-position.",
              score: 50,
              sources: [{ title: "SVT:s valkompass 2022: Hur mycket ska polisen få använda hemlig avlyssning och övervakning utan brottsmisstanke?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-polisen-fa-anvanda-hemlig-avlyssning-och-overvakning-utan-brottsmisstanke" }],
            },
            {
              componentId: "visitationszoner",
              position: "Tycker visitationszoner är ett mycket dåligt förslag; låter polisen visitera vem som helst utan skäl och hotar förtroendet mellan polis och allmänhet.",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: Polisen ska kunna upprätta visitationszoner i brottsutsatta områden", url: "https://valkompass.svt.se/2022/riksdag/fraga/polisen-ska-kunna-uppratta-visitationszoner-i-brottsutsatta-omraden" }],
            },
          ],
        },
        framtid: {
          score: 80,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: vill skärpa klimatmålet till 2040, motsatte sig reduktionspliktens sänkning och vill fördubbla den fossilfria elproduktionen; naturskyddet bygger på frivillighet och äganderätt snarare än utökat formellt skydd.",
          sources: [{ title: "Centerpartiets politik", url: "https://www.centerpartiet.se/var-politik" }],
          components: [
            {
              componentId: "klimatmal-2045",
              position: "Vill 'skärpa klimatmålet till nettonollutsläpp i Sverige och EU senast 2040' — skärper målet med fem år.",
              score: 100,
              sources: [{ title: "Centerpartiet: Klimat", url: "https://www.centerpartiet.se/centerpartiets-politik/centerpartiets-politik-a-o/klimat" }],
            },
            {
              componentId: "reduktionsplikt",
              position: "Motsatte sig sänkningen med hänvisning till kraftigt ökade transportutsläpp och risken att missa EU:s klimatåtaganden — behåller en hög nivå.",
              score: 75,
              sources: [{ title: "Riksdagen: betänkande 2023/24:MJU5", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/sankning-av-reduktionsplikten-for-bensin-och_hb01mju5/" }],
            },
            {
              componentId: "naturskydd-skog",
              position: "Vill 'stärka skötseln av värdefull natur' och 'kombinera skydd av värdefull natur med flexibla metoder och rättvis ersättning', men prioriterar brukande och äganderätt framför utökat formellt skydd — blandad inriktning.",
              score: 50,
              sources: [
                { title: "Centerpartiet: Miljö", url: "https://centerpartiet.se/centerpartiets-politik/centerpartiets-politik-a-o/miljo" },
                { title: "Centerpartiet: Jordbruk, skog, jakt och fiske", url: "https://centerpartiet.se/centerpartiets-politik/centerpartiets-politik-a-o/jordbruk-skog-jakt-och-fiske" },
              ],
            },
            {
              componentId: "civilforsvar-beredskap",
              position: "Vill 'stärka det civila försvaret genom ökade resurser till bland annat kommuner och regioner' och ett 'modernt och uthålligt totalförsvar'.",
              score: 75,
              sources: [{ title: "Centerpartiet: Försvar", url: "https://www.centerpartiet.se/centerpartiets-politik/centerpartiets-politik-a-o/forsvar" }],
            },
            {
              componentId: "fossilfri-el",
              position: "Vill 'fördubbla Sveriges elproduktion genom snabbare tillstånd'; 'utbyggnaden av all fossilfri kraft ska välkomnas, från vind- och solkraft till kärnkraft på marknadsmässiga villkor'.",
              score: 100,
              sources: [{ title: "Centerpartiet: Energi", url: "https://www.centerpartiet.se/centerpartiets-politik/centerpartiets-politik-a-o/energi" }],
            },
          ],
        },
      },
      feasibility: {
        factor: 0.69,
        motivation: "Protokollets rubrik §3.3: E 0.7 (statsråd t.o.m. oktober 2014, inom 12 år från bedömningsdatumet), P 0.22 (24/107 mandat), T 0.6 (avtalspart med dokumenterat programgenomslag via januariavtalet); raw 0.550 ger faktor 0.69 efter koalitionsgolvet.",
        sources: [
          { title: "Valresultat 2022 (Valmyndigheten)", url: "https://www.val.se/valresultat-och-statistik/riksdags--region--och-kommunval/valresultat-2022" },
          { title: "Regeringar i Sverige (Riksdagen)", url: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/" },
        ],
      },
    },
    {
      id: "kd",
      name: "Kristdemokraterna",
      abbreviation: "KD",
      color: "#000077",
      scores: {
        valbefinnande: {
          score: 60,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: statliga skolpengsnormer för en likvärdig skola, ett vård- och omsorgsprofilerat åtgärdspaket för äldreomsorgen, omfattande straffskärpningar mot gängvåld och stöd för det förstärkta tandvårdsskyddet; karensavdraget försvaras dock som ett 'mycket dåligt' förslag att avskaffa.",
          sources: [
            { title: "SVT:s valfrågeguiden 2022: God äldreomsorg", url: "https://www.svt.se/valfrageguiden/forslag/god-aldreomsorg" },
            { title: "SVT:s valkompass 2022: Karensdagen ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/karensdagen-ska-avskaffas" },
          ],
          components: [
            {
              componentId: "utbildning-skolresultat",
              position: "Vill införa statligt fastställda skolpengsnormer som styr kommunerna mot en mer likvärdig skola och minskar 30–40 % skillnader i resurser.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Likvärdig utbildning", url: "https://www.svt.se/valfrageguiden/forslag/likvardig-utbildning" }],
            },
            {
              componentId: "aldreomsorg",
              position: "Vill genomföra flera äldreomsorgsreformer: ökad medicinsk kompetens, bättre arbetsvillkor, mer anpassat boende och utbyggd primärvård.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: God äldreomsorg", url: "https://www.svt.se/valfrageguiden/forslag/god-aldreomsorg" }],
            },
            {
              componentId: "trygghet-gangvald",
              position: "Kräver 'omfattande straffskärpningar', fler synliga poliser, förstärkt förebyggande arbete och föräldrastödsprogram i varje kommun.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Minska gängvåldet", url: "https://www.svt.se/valfrageguiden/forslag/minska-gangvaldet" }],
            },
            {
              componentId: "tandvard-hogkostnadsskydd",
              position: "Stödjer det förstärkta högkostnadsskyddet och betonar värdigheten i att föra tandvården närmare sjukvårdens principer.",
              score: 75,
              sources: [{ title: "Riksdagen: betänkande 2025/26:SoU10 (Ett förstärkt högkostnadsskydd för tandvård)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/ett-forstarkt-hogkostnadsskydd-for-tandvard_hd01sou10/" }],
            },
            {
              componentId: "sjukforsakring-karens",
              position: "'Mycket dåligt förslag': 'Karensavdraget fyller en funktion som självrisk och minskar förekomsten av att arbetstagare stannar hemma.'",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Karensdagen ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/karensdagen-ska-avskaffas" }],
            },
          ],
        },
        lidande: {
          score: 65,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: profilfrågan om nationellt huvudmannaskap för vården ger maxpoäng mot vårdköer, utbyggd primärvård och ungdomspsykiatri samt fokusskifte mot brottsoffer väger upp; samtidigt avvisad narkotikaomläggning ('narkotikafritt samhälle') och ingen nationell hemlöshetsstrategi.",
          sources: [
            { title: "SVT:s valfrågeguiden 2022: Kortare vårdköer", url: "https://www.svt.se/valfrageguiden/forslag/kortare-vardkoer" },
            { title: "Riksdagen: betänkande 2024/25:SoU13 (Alkohol, narkotika, dopning, tobak och spel)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/alkohol-narkotika-dopning-tobak-och-spel_hc01sou13/" },
          ],
          components: [
            {
              componentId: "psykiatri",
              position: "Vill ha en 'rejält utbyggd primärvård' som grund med tidiga insatser i alla åldrar och utbyggd ungdomspsykiatri.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Minska psykisk ohälsa", url: "https://www.svt.se/valfrageguiden/forslag/minska-psykisk-ohalsa" }],
            },
            {
              componentId: "narkotika-skademinimering",
              position: "Motsätter sig (Dan Hovskär, SoU13) legalisering/avkriminalisering och står fast vid målet om 'ett narkotikafritt samhälle' — motverkar delvis omläggningen mot skademinimering.",
              score: 25,
              sources: [{ title: "Riksdagen: betänkande 2024/25:SoU13 (Alkohol, narkotika, dopning, tobak och spel)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/alkohol-narkotika-dopning-tobak-och-spel_hc01sou13/" }],
            },
            {
              componentId: "hemloshet-bostad-forst",
              position: "Förespråkar bostadsförmedling med social hänsyn och ökad rörlighet på bostadsmarknaden; driver ingen nationell hemlöshetsstrategi eller Bostad först — svag/blandad inriktning.",
              score: 50,
              sources: [{ title: "Fastighetstidningen: Snabbguide till valet – social bostadspolitik (2022)", url: "https://fastighetstidningen.se/snabbguide-till-valet-social-bostadspolitik/" }],
            },
            {
              componentId: "brottsofferstod",
              position: "Del av Tidömajoriteten som driver fokusskiftet mot brottsoffer och stärkt brottsofferstöd via pågående reformer.",
              score: 75,
              sources: [{ title: "Riksdagen: betänkande 2023/24:JuU18 (Våldsbrott och brottsoffer)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/valdsbrott-och-brottsoffer_hb01juu18/" }],
            },
            {
              componentId: "vardkoer",
              position: "'Sverige behöver först och främst ett nationellt ansvar för vården' med fler vårdplatser och nationell vårdförmedling — konkret strukturreform (statligt huvudmannaskap).",
              score: 100,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Kortare vårdköer", url: "https://www.svt.se/valfrageguiden/forslag/kortare-vardkoer" }],
            },
          ],
        },
        fordelning: {
          score: 20,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: vill sänka skatten på höga inkomster, avslår höjda kapital- och förmögenhetsskatter och motsätter sig utvidgad skatteutjämning, samt är det parti som starkast förordar marknadshyror i nyproduktion — motverkar de fördelningsutjämnande instrumenten genomgående.",
          sources: [
            { title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" },
            { title: "SVT:s valkompass 2022: Marknadshyror ska införas på nya hyresrätter", url: "https://valkompass.svt.se/2022/riksdag/fraga/marknadshyror-ska-inforas-pa-nya-hyresratter" },
          ],
          components: [
            {
              componentId: "kapitalinkomstskatt",
              position: "Tillhör utskottsmajoriteten som i SkU12 avslog höjd kapitalbeskattning; partiets linje är lägre skatt på arbete och oförändrad kapitalskatt — motverkar delvis en höjning.",
              score: 25,
              sources: [{ title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" }],
            },
            {
              componentId: "hoga-inkomster-skatt",
              position: "Vill sänka skatten något på höga inkomster: en hög skatt 'minskar incitamentet att utbilda sig och jobba hårt' — motverkar delvis en höjning.",
              score: 25,
              sources: [{ title: "SVT:s valkompass 2022: Hur mycket ska höginkomsttagare betala i skatt?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-hoginkomsttagare-betala-i-skatt" }],
            },
            {
              componentId: "formogenhet-arvsskatt",
              position: "Tillhör blocket som i SkU12 avslog återinförd förmögenhets- och arvsskatt och vill behålla dagens system utan dessa skatter — motverkar delvis.",
              score: 25,
              sources: [{ title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" }],
            },
            {
              componentId: "kommunal-skatteutjamning",
              position: "Oense delvis: 'Dagens utjämningssystem bör ses över' men med fokus på en regional modell och ökat statligt ansvar snarare än mer omfördelning mellan kommuner — motverkar delvis.",
              score: 25,
              sources: [{ title: "SVT:s valkompass 2022: Mer skatteinkomster ska omfördelas från rika till fattiga kommuner", url: "https://valkompass.svt.se/2022/riksdag/fraga/mer-skatteinkomster-ska-omfordelas-fran-rika-till-fattiga-kommuner" }],
            },
            {
              componentId: "marknadshyror",
              position: "Förordar marknadshyror i nyproduktion ('mycket bra förslag') med starkt besittningsskydd och förutsägbar indexering — motverkar bruksvärdesprincipen aktivt.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Marknadshyror ska införas på nya hyresrätter", url: "https://valkompass.svt.se/2022/riksdag/fraga/marknadshyror-ska-inforas-pa-nya-hyresratter" }],
            },
          ],
        },
        insats: {
          score: 90,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: vill sänka skatten på arbete, stöder bidragstaket, vill återställa a-kassan, luckra upp anställningsskyddet och behålla RUT. Genomgående stark koppling insats–utfall.",
          sources: [
            { title: "Arbetsvärlden: Sex av åtta partier vill sänka skatten på arbete", url: "https://www.arbetsvarlden.se/sex-av-atta-partier-vill-sanka-skatten-pa-arbete/" },
            { title: "SVT:s valkompass 2022: RUT-avdraget ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/rut-avdraget-ska-avskaffas" },
          ],
          components: [
            {
              componentId: "jobbskatteavdrag",
              position: "'Ja. Vi har föreslagit och finansierat en generell skattesänkning för alla' som arbetar — sänkt skatt på arbete.",
              score: 75,
              sources: [{ title: "Arbetsvärlden: Sex av åtta partier vill sänka skatten på arbete", url: "https://www.arbetsvarlden.se/sex-av-atta-partier-vill-sanka-skatten-pa-arbete/" }],
            },
            {
              componentId: "bidragstak-motprestation",
              position: "Stöder bidragstaket: 'Bidragstaket kommer samlat att innebära en minskning av nivån på försörjningsstödet.'",
              score: 100,
              sources: [{ title: "Riksdagens betänkande 2025/26:SoU30 (Reformerat försörjningsstöd – bidragstak)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/reformerat-forsorjningsstod-bidragstak-och-okade_hd01sou30/" }],
            },
            {
              componentId: "a-kassa-niva",
              position: "Avvisar permanentad höjning (Mycket dåligt förslag): vill återgå till taknivåerna i a-kassan som gällde före coronapandemin.",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: Den tillfälliga höjningen i A-kassan ska permanentas", url: "https://valkompass.svt.se/2022/riksdag/fraga/den-tillfalliga-hojningen-i-a-kassan-ska-permanentas" }],
            },
            {
              componentId: "anstallningsskydd",
              position: "Stöder ökad flexibilitet (Ganska bra förslag) genom utökade undantag från turordningen för att öka rörligheten och uppmuntra anställningar.",
              score: 75,
              sources: [{ title: "SVT:s valkompass 2022: Det ska bli enklare för arbetsgivare att säga upp anställda", url: "https://valkompass.svt.se/2022/riksdag/fraga/det-ska-bli-enklare-for-arbetsgivare-att-saga-upp-anstallda" }],
            },
            {
              componentId: "rut-avdrag",
              position: "Vill behålla RUT-avdraget (Mycket dåligt förslag om att avskaffa, extra viktig fråga).",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: RUT-avdraget ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/rut-avdraget-ska-avskaffas" }],
            },
          ],
        },
        frihet: {
          score: 35,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: KD värnar valfrihet/vinst i välfärden och stöder gårdsförsäljning, men säger principiellt nej till dödshjälp och vill ge polisen mycket mer övervakning utan brottsmisstanke samt driver visitationszoner — låg negativ frihet mot statens tvångsmakt och i livets slutskede.",
          sources: [
            { title: "SVT:s valkompass 2022: Vinstutdelning för friskolor ska förbjudas", url: "https://valkompass.svt.se/2022/riksdag/fraga/vinstutdelning-for-friskolor-ska-forbjudas" },
            { title: "Senioren: Sex partier vill utreda dödshjälp", url: "https://www.senioren.se/nyheter/254501/" },
          ],
          components: [
            {
              componentId: "valfrihet-valfard",
              position: "Tycker vinstutdelningsförbud är ett mycket dåligt förslag: 'Privata aktörer får göra en vinst i välfärden är i sig inget problem' — kvalitet före driftsform, värnar valfriheten starkt.",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: Vinstutdelning för friskolor ska förbjudas", url: "https://valkompass.svt.se/2022/riksdag/fraga/vinstutdelning-for-friskolor-ska-forbjudas" }],
            },
            {
              componentId: "gardsforsaljning",
              position: "För gårdsförsäljning av lokal produktion i små volymer utan att hota Systembolagsmonopolet.",
              score: 75,
              sources: [{ title: "Vinbanken: Gårdsförsäljning av alkohol – så tycker de olika partierna (2022)", url: "https://vinbanken.se/2022/09/07/gardsforsaljning-av-alkohol-sa-tycker-de-olika-partierna" }],
            },
            {
              componentId: "dodshjalp",
              position: "Säger principiellt nej till dödshjälp och vill inte att frågan utreds; dödshjälp ska förbli förbjuden — motverkar aktivt självbestämmande i livets slutskede.",
              score: 0,
              sources: [{ title: "Senioren: Sex partier vill utreda dödshjälp", url: "https://www.senioren.se/nyheter/254501/" }],
            },
            {
              componentId: "overvakning",
              position: "Vill ge polisen 'mycket mer' förebyggande avlyssning av gängkriminella utan konkret brottsmisstanke.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Hur mycket ska polisen få använda hemlig avlyssning och övervakning utan brottsmisstanke?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-polisen-fa-anvanda-hemlig-avlyssning-och-overvakning-utan-brottsmisstanke" }],
            },
            {
              componentId: "visitationszoner",
              position: "Tycker visitationszoner är ett mycket bra förslag; liknande system fungerar 'helt okontroversiellt' i andra länder.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Polisen ska kunna upprätta visitationszoner i brottsutsatta områden", url: "https://valkompass.svt.se/2022/riksdag/fraga/polisen-ska-kunna-uppratta-visitationszoner-i-brottsutsatta-omraden" }],
            },
          ],
        },
        framtid: {
          score: 55,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: står bakom EU:s klimatramverk och bred fossilfri energiutbyggnad, men genomförde sänkningen av reduktionsplikten; skogspolitiken är bruksorienterad och en validerbar civilförsvarsposition saknas (§D).",
          sources: [{ title: "Kristdemokraternas politik", url: "https://www.kristdemokraterna.se/var-politik/" }],
          components: [
            {
              componentId: "klimatmal-2045",
              position: "'Klimatfrågan är vår tids största utmaning'; har medverkat till EU:s Fit for 55 och välkomnar riksdagens mål om energiförsörjning utan nettoutsläpp 2040 — står bakom klimatramverket.",
              score: 75,
              sources: [
                { title: "Kristdemokraterna: Klimat", url: "https://kristdemokraterna.se/var-politik/politik-a-till-o/klimat" },
                { title: "Kristdemokraterna: Fossilfri energi", url: "https://kristdemokraterna.se/var-politik/politik-a-till-o/fossilfri-energi" },
              ],
            },
            {
              componentId: "reduktionsplikt",
              position: "Regeringsparti bakom prop. 2023/24:28 som sänkte reduktionsplikten till 6 % och slopade höjningsnivåerna 2027–2030 — sänker nivån.",
              score: 25,
              sources: [{ title: "Riksdagen: betänkande 2023/24:MJU5", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/sankning-av-reduktionsplikten-for-bensin-och_hb01mju5/" }],
            },
            {
              componentId: "naturskydd-skog",
              position: "Skogen beskrivs främst som näring och klimatresurs ('binder koldioxid som fortsätter att lagras i produkter av trä') med rekreation och ekosystemtjänster som tillägg; utökat formellt skydd drivs inte — blandad inriktning.",
              score: 50,
              sources: [{ title: "Kristdemokraterna: Skogsbruk", url: "https://kristdemokraterna.se/var-politik/politik-a-till-o/skogsbruk" }],
            },
            {
              componentId: "civilforsvar-beredskap",
              position: "Position saknas: försvarssidan behandlar militära satsningar (5 % av BNP, Nato) men inte civilförsvar eller krisberedskap (eftersökt 2026-06-12). Neutral prior enligt protokollets §D.",
              score: 50,
              sources: [{ title: "Kristdemokraterna: Försvar (eftersökt)", url: "https://kristdemokraterna.se/var-politik/politik-a-till-o/forsvar" }],
            },
            {
              componentId: "fossilfri-el",
              position: "'Alla fossilfria alternativ kommer att behövas'; står bakom målet om energiförsörjning utan nettoutsläpp 2040 och vill bygga ny kärnkraft.",
              score: 75,
              sources: [{ title: "Kristdemokraterna: Fossilfri energi", url: "https://kristdemokraterna.se/var-politik/politik-a-till-o/fossilfri-energi" }],
            },
          ],
        },
      },
      feasibility: {
        factor: 0.81,
        motivation: "Protokollets rubrik §3.3: E 1.0 (statsråd innevarande mandatperiod, Tidöregeringen), P 0.18 (19/107 mandat), T 0.8 (koalitionspart med statsråd); raw 0.735 ger faktor 0.81 efter koalitionsgolvet.",
        sources: [
          { title: "Valresultat 2022 (Valmyndigheten)", url: "https://www.val.se/valresultat-och-statistik/riksdags--region--och-kommunval/valresultat-2022" },
          { title: "Regeringar i Sverige (Riksdagen)", url: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/" },
        ],
      },
    },
    {
      id: "l",
      name: "Liberalerna",
      abbreviation: "L",
      color: "#006AB3",
      scores: {
        valbefinnande: {
          score: 70,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: skolan är partiets flaggskepp (vill förstatliga den för likvärdig utbildning) och trygghetsagendan är konkret (10 000 fler poliser), liksom en hemtjänst med få fasta kontakter och stöd för det förstärkta tandvårdsskyddet; karensavdraget vill partiet snarare utöka, vilket ger 'mycket dåligt' på sjukförsäkringsfrågan.",
          sources: [
            { title: "SVT:s valfrågeguiden 2022: Likvärdig utbildning", url: "https://www.svt.se/valfrageguiden/forslag/likvardig-utbildning" },
            { title: "SVT:s valkompass 2022: Karensdagen ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/karensdagen-ska-avskaffas" },
          ],
          components: [
            {
              componentId: "utbildning-skolresultat",
              position: "'Liberalerna vill förstatliga skolan under nästa mandatperiod för att säkra en likvärdig utbildning' med staten som finansieringsansvarig — skolan är partiets flaggskeppsfråga.",
              score: 100,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Likvärdig utbildning", url: "https://www.svt.se/valfrageguiden/forslag/likvardig-utbildning" }],
            },
            {
              componentId: "aldreomsorg",
              position: "Vill att 'varje hemtjänsttagare bör i snitt träffa högst åtta olika personer', fler undersköterskor och språkkrav samt stärkt anhörigstöd.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: God äldreomsorg", url: "https://www.svt.se/valfrageguiden/forslag/god-aldreomsorg" }],
            },
            {
              componentId: "trygghet-gangvald",
              position: "Föreslår 'en långsiktig pakt mot gängen med 10 000 fler poliser' kombinerat med förebyggande insatser och utökade sociala ingripanderätter.",
              score: 100,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Minska gängvåldet", url: "https://www.svt.se/valfrageguiden/forslag/minska-gangvaldet" }],
            },
            {
              componentId: "tandvard-hogkostnadsskydd",
              position: "Regeringsparti bakom prop. 2025/26:27; stödjer det förstärkta högkostnadsskyddet för tandvård.",
              score: 75,
              sources: [{ title: "Riksdagen: betänkande 2025/26:SoU10 (Ett förstärkt högkostnadsskydd för tandvård)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/ett-forstarkt-hogkostnadsskydd-for-tandvard_hd01sou10/" }],
            },
            {
              componentId: "sjukforsakring-karens",
              position: "'Mycket dåligt förslag': 'Det är rimligt att det finns en självrisk i sjukförsäkringen precis som i alla försäkringar' — vill snarare utöka karensen.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Karensdagen ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/karensdagen-ska-avskaffas" }],
            },
          ],
        },
        lidande: {
          score: 80,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: uttalat starkast på hemlöshet (Bostad först och nationell strategi) och bland reformpartierna på narkotikaskademinimering (brukarrum, naloxon), plus stark primärvård/psykiatri och fokusskifte mot brottsoffer.",
          sources: [
            { title: "Fastighetstidningen: Snabbguide till valet – social bostadspolitik (2022)", url: "https://fastighetstidningen.se/snabbguide-till-valet-social-bostadspolitik/" },
            { title: "SVT:s valfrågeguiden 2022: Minska psykisk ohälsa", url: "https://www.svt.se/valfrageguiden/forslag/minska-psykisk-ohalsa" },
          ],
          components: [
            {
              componentId: "psykiatri",
              position: "Vill ha en 'stark primärvård' i hela landet med psykiatriambulanser och bättre samordning mellan BUP, skola och socialtjänst.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Minska psykisk ohälsa", url: "https://www.svt.se/valfrageguiden/forslag/minska-psykisk-ohalsa" }],
            },
            {
              componentId: "narkotika-skademinimering",
              position: "Förespråkar brukarrum och bred tillgång till naloxon som 'minskar överdosrelaterade skador och dödsfall' — främjar skademinimering.",
              score: 75,
              sources: [{ title: "Riksdagen: betänkande 2024/25:SoU13 (Alkohol, narkotika, dopning, tobak och spel)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/alkohol-narkotika-dopning-tobak-och-spel_hc01sou13/" }],
            },
            {
              componentId: "hemloshet-bostad-forst",
              position: "Förordar uttryckligen Bostad först ('Att få en bostad, en trygg punkt i tillvaron, är det viktigaste') och föreslår en nationell hemlöshetsstrategi och behovsbostäder — starkt och konkret.",
              score: 100,
              sources: [{ title: "Fastighetstidningen: Snabbguide till valet – social bostadspolitik (2022)", url: "https://fastighetstidningen.se/snabbguide-till-valet-social-bostadspolitik/" }],
            },
            {
              componentId: "brottsofferstod",
              position: "Del av Tidömajoriteten som driver fokusskiftet mot brottsoffer och stärkt brottsofferstöd via pågående propositioner.",
              score: 75,
              sources: [{ title: "Riksdagen: betänkande 2023/24:JuU18 (Våldsbrott och brottsoffer)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/valdsbrott-och-brottsoffer_hb01juu18/" }],
            },
            {
              componentId: "vardkoer",
              position: "Vill korta vårdköerna 'genom ekonomiska styrmedel' och effektivare organisation — programåtagande utan namngiven strukturreform.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Kortare vårdköer", url: "https://www.svt.se/valfrageguiden/forslag/kortare-vardkoer" }],
            },
          ],
        },
        fordelning: {
          score: 35,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: liberal skattelinje som vill sänka skatten på höga inkomster och avslår höjda kapital- och förmögenhetsskatter samt stöder friare hyressättning; undantaget är den befintliga kommunala skatteutjämningen, som L bedömer som rimlig.",
          sources: [
            { title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" },
            { title: "SVT:s valkompass 2022: Mer skatteinkomster ska omfördelas från rika till fattiga kommuner", url: "https://valkompass.svt.se/2022/riksdag/fraga/mer-skatteinkomster-ska-omfordelas-fran-rika-till-fattiga-kommuner" },
          ],
          components: [
            {
              componentId: "kapitalinkomstskatt",
              position: "Tillhör utskottsmajoriteten som i SkU12 avslog höjd kapitalbeskattning; partiets linje är lägre skatt på arbete, inte höjd kapitalskatt — motverkar delvis en höjning.",
              score: 25,
              sources: [{ title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" }],
            },
            {
              componentId: "hoga-inkomster-skatt",
              position: "Vill sänka skatten något på höga inkomster: 'Det ska löna sig att arbeta. Vi föreslår en sänkt statlig skatt' — motverkar delvis en höjning.",
              score: 25,
              sources: [{ title: "SVT:s valkompass 2022: Hur mycket ska höginkomsttagare betala i skatt?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-hoginkomsttagare-betala-i-skatt" }],
            },
            {
              componentId: "formogenhet-arvsskatt",
              position: "Tillhör blocket som i SkU12 avslog återinförd förmögenhets- och arvsskatt; partiets liberala grundhållning motsätter sig sådana skatter — motverkar delvis.",
              score: 25,
              sources: [{ title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" }],
            },
            {
              componentId: "kommunal-skatteutjamning",
              position: "Instämmer delvis: det finns 'ett system för att utjämna kommunernas ekonomiska förutsättningar' som L bedömer som rimligt — främjar omfördelning.",
              score: 75,
              sources: [{ title: "SVT:s valkompass 2022: Mer skatteinkomster ska omfördelas från rika till fattiga kommuner", url: "https://valkompass.svt.se/2022/riksdag/fraga/mer-skatteinkomster-ska-omfordelas-fran-rika-till-fattiga-kommuner" }],
            },
            {
              componentId: "marknadshyror",
              position: "Stöder fri hyressättning i nyproduktion för att bygga fler hyresrätter, med bibehållet starkt besittningsskydd ('ganska bra förslag') — motverkar delvis bruksvärdesprincipen.",
              score: 25,
              sources: [{ title: "SVT:s valkompass 2022: Marknadshyror ska införas på nya hyresrätter", url: "https://valkompass.svt.se/2022/riksdag/fraga/marknadshyror-ska-inforas-pa-nya-hyresratter" }],
            },
          ],
        },
        insats: {
          score: 90,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: 'det ska löna sig bättre att jobba' — vill sänka skatten på arbete, står som regeringsparti bakom bidragstaket, är negativ till permanentad a-kassa, stöder en rörligare arbetsmarknad och behåller RUT.",
          sources: [
            { title: "Arbetsvärlden: Sex av åtta partier vill sänka skatten på arbete", url: "https://www.arbetsvarlden.se/sex-av-atta-partier-vill-sanka-skatten-pa-arbete/" },
            { title: "SVT:s valkompass 2022: RUT-avdraget ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/rut-avdraget-ska-avskaffas" },
          ],
          components: [
            {
              componentId: "jobbskatteavdrag",
              position: "'Ja. Det ska löna sig bättre att jobba, utbilda sig och ta ansvar' — kärnpolitik för sänkt skatt på arbete.",
              score: 100,
              sources: [{ title: "Arbetsvärlden: Sex av åtta partier vill sänka skatten på arbete", url: "https://www.arbetsvarlden.se/sex-av-atta-partier-vill-sanka-skatten-pa-arbete/" }],
            },
            {
              componentId: "bidragstak-motprestation",
              position: "Står som regeringsparti (M, KD, L) bakom propositionens bidragstak och skärpta krav för försörjningsstöd.",
              score: 100,
              sources: [{ title: "Riksdagens betänkande 2025/26:SoU30 (Reformerat försörjningsstöd – bidragstak)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/reformerat-forsorjningsstod-bidragstak-och-okade_hd01sou30/" }],
            },
            {
              componentId: "a-kassa-niva",
              position: "Negativ till permanentad höjning (Ganska dåligt förslag): 'I den här situationen är det fel signal att höja ersättningen till den som är arbetslös.'",
              score: 75,
              sources: [{ title: "SVT:s valkompass 2022: Den tillfälliga höjningen i A-kassan ska permanentas", url: "https://valkompass.svt.se/2022/riksdag/fraga/den-tillfalliga-hojningen-i-a-kassan-ska-permanentas" }],
            },
            {
              componentId: "anstallningsskydd",
              position: "Stöder LAS-reformen (Ganska bra förslag): 'arbetsmarknaden blir mer rörlig' med bibehållna grundläggande villkor.",
              score: 75,
              sources: [{ title: "SVT:s valkompass 2022: Det ska bli enklare för arbetsgivare att säga upp anställda", url: "https://valkompass.svt.se/2022/riksdag/fraga/det-ska-bli-enklare-for-arbetsgivare-att-saga-upp-anstallda" }],
            },
            {
              componentId: "rut-avdrag",
              position: "Vill behålla RUT-avdraget (Mycket dåligt förslag om att avskaffa).",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: RUT-avdraget ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/rut-avdraget-ska-avskaffas" }],
            },
          ],
        },
        frihet: {
          score: 55,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: L driver dödshjälpslegalisering hårdast och stöder gårdsförsäljning, men säger 'mycket mer' till hemlig övervakning utan brottsmisstanke och stöder delvis ett vinstutdelningsförbud — frihetsbrandingen 'För din frihet' överlever inte rättssäkerhetsfrågan om statens övervakningsmakt.",
          sources: [
            { title: "Senioren: Sex partier vill utreda dödshjälp", url: "https://www.senioren.se/nyheter/254501/" },
            { title: "SVT:s valkompass 2022: Hur mycket ska polisen få använda hemlig avlyssning och övervakning utan brottsmisstanke?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-polisen-fa-anvanda-hemlig-avlyssning-och-overvakning-utan-brottsmisstanke" },
          ],
          components: [
            {
              componentId: "valfrihet-valfard",
              position: "Tycker vinstutdelningsförbud är ett ganska bra förslag: 'Det ska vara förbjudet med all form av vinstutdelning som går ut över elevernas undervisning' — vill delvis begränsa driftsfriheten.",
              score: 25,
              sources: [{ title: "SVT:s valkompass 2022: Vinstutdelning för friskolor ska förbjudas", url: "https://valkompass.svt.se/2022/riksdag/fraga/vinstutdelning-for-friskolor-ska-forbjudas" }],
            },
            {
              componentId: "gardsforsaljning",
              position: "För gårdsförsäljning: 'Det bör vara tillåtet att sälja egna produkter där de tillverkas', med villkor som skyddar Systembolaget.",
              score: 75,
              sources: [{ title: "Vinbanken: Gårdsförsäljning av alkohol – så tycker de olika partierna (2022)", url: "https://vinbanken.se/2022/09/07/gardsforsaljning-av-alkohol-sa-tycker-de-olika-partierna" }],
            },
            {
              componentId: "dodshjalp",
              position: "Driver hårdast en parlamentarisk utredning om — och legalisering av — dödshjälp i livets slutskede; starkt och konkret självbestämmandeåtagande.",
              score: 100,
              sources: [{ title: "Senioren: Sex partier vill utreda dödshjälp", url: "https://www.senioren.se/nyheter/254501/" }],
            },
            {
              componentId: "overvakning",
              position: "Vill ge polisen 'mycket mer' förebyggande övervakningsrätt mot dokumenterat kriminella innan konkret brottsmisstanke finns.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Hur mycket ska polisen få använda hemlig avlyssning och övervakning utan brottsmisstanke?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-polisen-fa-anvanda-hemlig-avlyssning-och-overvakning-utan-brottsmisstanke" }],
            },
            {
              componentId: "visitationszoner",
              position: "Tycker visitationszoner är ett ganska dåligt förslag; andra åtgärder (mer närvarande polis, tidiga sociala insatser, enklare kamerabevakning) är viktigare.",
              score: 75,
              sources: [{ title: "SVT:s valkompass 2022: Polisen ska kunna upprätta visitationszoner i brottsutsatta områden", url: "https://valkompass.svt.se/2022/riksdag/fraga/polisen-ska-kunna-uppratta-visitationszoner-i-brottsutsatta-omraden" }],
            },
          ],
        },
        framtid: {
          score: 65,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: vill eliminera koldioxidutsläppen, öka arealen skyddad skog och bygga ut såväl fossilfri el som det civila försvaret; var samtidigt regeringsparti bakom reduktionspliktens sänkning.",
          sources: [{ title: "Liberalernas politik", url: "https://www.liberalerna.se/politik/" }],
          components: [
            {
              componentId: "klimatmal-2045",
              position: "'Koldioxidutsläppen ska elimineras, metan- och lustgasutsläppen minska kraftigt och stora mängder CO2 fångas in och lagras' — står bakom klimatmålens riktning.",
              score: 75,
              sources: [{ title: "Liberalerna: Klimatet", url: "https://www.liberalerna.se/politik/klimatet" }],
            },
            {
              componentId: "reduktionsplikt",
              position: "Regeringsparti bakom prop. 2023/24:28 som sänkte reduktionsplikten till 6 % och slopade höjningsnivåerna 2027–2030 — sänker nivån.",
              score: 25,
              sources: [{ title: "Riksdagen: betänkande 2023/24:MJU5", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/sankning-av-reduktionsplikten-for-bensin-och_hb01mju5/" }],
            },
            {
              componentId: "naturskydd-skog",
              position: "Vill 'öka arealen skyddad skog'; 'särskilt viktigt är att bevara naturskogar och gammelskogar' med nationalparker, naturreservat och biotopskydd som grund.",
              score: 75,
              sources: [{ title: "Liberalerna: Skogen", url: "https://www.liberalerna.se/politik/skogen" }],
            },
            {
              componentId: "civilforsvar-beredskap",
              position: "Vill återuppbygga civilförsvaret med beredskapslager och krigsviktiga företag: 'elförsörjning, sjukvård, transporter och livsmedelsförsörjning måste fungera även i krig'.",
              score: 75,
              sources: [{ title: "Liberalerna: Försvar", url: "https://www.liberalerna.se/politik/forsvar" }],
            },
            {
              componentId: "fossilfri-el",
              position: "'Den fossilfria energin ska byggas ut'; kärnkraften har 'en särställning' som planerbar och storskalig, kompletterad av vatten-, sol- och vindkraft.",
              score: 75,
              sources: [{ title: "Liberalerna: Energi", url: "https://www.liberalerna.se/politik/energi-2" }],
            },
          ],
        },
      },
      feasibility: {
        factor: 0.81,
        motivation: "Protokollets rubrik §3.3: E 1.0 (statsråd innevarande mandatperiod, Tidöregeringen), P 0.15 (16/107 mandat), T 0.8 (koalitionspart med statsråd); raw 0.728 ger faktor 0.81 efter koalitionsgolvet.",
        sources: [
          { title: "Valresultat 2022 (Valmyndigheten)", url: "https://www.val.se/valresultat-och-statistik/riksdags--region--och-kommunval/valresultat-2022" },
          { title: "Regeringar i Sverige (Riksdagen)", url: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/" },
        ],
      },
    },
    {
      id: "mp",
      name: "Miljöpartiet",
      abbreviation: "MP",
      color: "#83CF39",
      scores: {
        valbefinnande: {
          score: 90,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: mest expansiv på de konkreta välfärdsinstrumenten — permanent statsbidrag på 40 miljarder till äldreomsorgen, vill avskaffa karensavdraget ('mycket bra') och bredda tandvårdsskyddet till hela befolkningen ('tänderna är en del av kroppen'), samt stärka skolan och förebygga gängvåld brett.",
          sources: [
            { title: "Riksdagen: motion 2025/26:3824 (MP) med anledning av prop. 2025/26:27", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/motion/med-anledning-av-prop-20252627-ett-forstarkt_hd023824/" },
            { title: "SVT:s valkompass 2022: Karensdagen ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/karensdagen-ska-avskaffas" },
          ],
          components: [
            {
              componentId: "utbildning-skolresultat",
              position: "Vill bryta skolsegregationen genom att avskaffa vinstjakten, införa ett rättvist skolval och lägga finansieringsansvaret på staten för en mer likvärdig skola.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Likvärdig utbildning", url: "https://www.svt.se/valfrageguiden/forslag/likvardig-utbildning" }],
            },
            {
              componentId: "aldreomsorg",
              position: "Vill ge kommunerna ett 'permanent statsbidrag på 40 miljarder' för att anställa mer personal och höja lönerna så att arbetet i äldreomsorgen blir mer attraktivt.",
              score: 100,
              sources: [{ title: "SVT:s valfrågeguiden 2022: God äldreomsorg", url: "https://www.svt.se/valfrageguiden/forslag/god-aldreomsorg" }],
            },
            {
              componentId: "trygghet-gangvald",
              position: "Vill ha fler poliser och bättre utredningsverktyg men också stärkt tidigt stöd till familjer, bättre skola och minskad segregation för att förebygga gängvåld.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Minska gängvåldet", url: "https://www.svt.se/valfrageguiden/forslag/minska-gangvaldet" }],
            },
            {
              componentId: "tandvard-hogkostnadsskydd",
              position: "Motion 2025/26:3824: vill utveckla högkostnadsskyddet 'med samma principer som övriga hälso- och sjukvården' för hela befolkningen och behålla avgiftsfri tandvård upp till 23 år — 'tänderna är en del av kroppen'.",
              score: 100,
              sources: [{ title: "Riksdagen: motion 2025/26:3824 (MP) med anledning av prop. 2025/26:27", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/motion/med-anledning-av-prop-20252627-ett-forstarkt_hd023824/" }],
            },
            {
              componentId: "sjukforsakring-karens",
              position: "'Mycket bra förslag': 'Karensdagen i sjukförsäkringen behöver slopas' eftersom den ger skadlig sjuknärvaro och förstärker ojämlikhet.",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: Karensdagen ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/karensdagen-ska-avskaffas" }],
            },
          ],
        },
        lidande: {
          score: 75,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: jämnt främjande över alla fem frågor — narkotikaomläggning mot skademinimering (brukarrum), nationell hemlöshetsstrategi och bostadsstiftelse, vård för psykisk ohälsa på lika villkor, brottsofferlag och åtgärder mot vårdköer.",
          sources: [
            { title: "Riksdagen: betänkande 2024/25:SoU13 (Alkohol, narkotika, dopning, tobak och spel)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/alkohol-narkotika-dopning-tobak-och-spel_hc01sou13/" },
            { title: "Fastighetstidningen: Snabbguide till valet – social bostadspolitik (2022)", url: "https://fastighetstidningen.se/snabbguide-till-valet-social-bostadspolitik/" },
          ],
          components: [
            {
              componentId: "psykiatri",
              position: "Vill göra det 'lika lätt och självklart att söka vård för psykisk ohälsa' som för fysisk ohälsa, med tidigt samtalsstöd.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Minska psykisk ohälsa", url: "https://www.svt.se/valfrageguiden/forslag/minska-psykisk-ohalsa" }],
            },
            {
              componentId: "narkotika-skademinimering",
              position: "Reservation 18 i SoU13 (Ulrika Westerlund): vill lägga om målet mot skademinimering och att regeringen utreder brukarrum — främjar omläggningen.",
              score: 75,
              sources: [{ title: "Riksdagen: betänkande 2024/25:SoU13 (Alkohol, narkotika, dopning, tobak och spel)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/alkohol-narkotika-dopning-tobak-och-spel_hc01sou13/" }],
            },
            {
              componentId: "hemloshet-bostad-forst",
              position: "Vill ha en nationell hemlöshetsstrategi och en bostadsstiftelse och kritiserar sociala kontrakt som tillfälliga lösningar ('barnfamiljer slussas mellan olika tillfälliga lösningar').",
              score: 75,
              sources: [{ title: "Fastighetstidningen: Snabbguide till valet – social bostadspolitik (2022)", url: "https://fastighetstidningen.se/snabbguide-till-valet-social-bostadspolitik/" }],
            },
            {
              componentId: "brottsofferstod",
              position: "Reservation 16 (med S) i JuU18: vill samla brottsoffrens rättigheter i en samlad brottsofferlag — driver stärkt brottsofferstöd.",
              score: 75,
              sources: [{ title: "Riksdagen: betänkande 2023/24:JuU18 (Våldsbrott och brottsoffer)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/valdsbrott-och-brottsoffer_hb01juu18/" }],
            },
            {
              componentId: "vardkoer",
              position: "'Bättre arbetsvillkor och arbetsmiljö är förutsättningen' för att behålla personal och korta köerna — programåtagande.",
              score: 75,
              sources: [{ title: "SVT:s valfrågeguiden 2022: Kortare vårdköer", url: "https://www.svt.se/valfrageguiden/forslag/kortare-vardkoer" }],
            },
          ],
        },
        fordelning: {
          score: 90,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: vill höja skatten på kapital relativt arbete och på höga inkomster, beskatta dem som äger mest, utjämna mellan kommuner och stoppa marknadshyror — främjar fördelningsmålet starkt i samtliga frågor.",
          sources: [
            { title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" },
            { title: "SVT:s valkompass 2022: Hur mycket ska höginkomsttagare betala i skatt?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-hoginkomsttagare-betala-i-skatt" },
          ],
          components: [
            {
              componentId: "kapitalinkomstskatt",
              position: "Reservation 9 i SkU12: vill reformera kapitalinkomstbeskattningen så att skatten på kapital höjs relativt arbete — främjar en höjning.",
              score: 75,
              sources: [{ title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" }],
            },
            {
              componentId: "hoga-inkomster-skatt",
              position: "Vill höja skatten kraftigt på höga inkomster: 'De som tjänar och äger mest ska betala högre skatt' — främjar starkt.",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: Hur mycket ska höginkomsttagare betala i skatt?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-hoginkomsttagare-betala-i-skatt" }],
            },
            {
              componentId: "formogenhet-arvsskatt",
              position: "Vill att 'de som tjänar och äger mest ska betala högre skatt' och stöder höjd beskattning av förmögenhet/kapital i fördelningssyfte — främjar återinförd förmögenhetsbeskattning.",
              score: 75,
              sources: [
                { title: "SVT:s valkompass 2022: Hur mycket ska höginkomsttagare betala i skatt?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-hoginkomsttagare-betala-i-skatt" },
                { title: "Riksdagen: betänkande 2023/24:SkU12 (Företag, kapital och fastighet)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/foretag-kapital-och-fastighet_hb01sku12/" },
              ],
            },
            {
              componentId: "kommunal-skatteutjamning",
              position: "Instämmer: 'Det är bra att den ekonomiska utjämningen mellan kommuner ses över' i utjämnande riktning — främjar omfördelning.",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: Mer skatteinkomster ska omfördelas från rika till fattiga kommuner", url: "https://valkompass.svt.se/2022/riksdag/fraga/mer-skatteinkomster-ska-omfordelas-fran-rika-till-fattiga-kommuner" }],
            },
            {
              componentId: "marknadshyror",
              position: "Motsätter sig marknadshyror; varnar för höjda hyror, ökad segregation och bostadsbrist för låginkomsttagare — främjar lika tillgång starkt.",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: Marknadshyror ska införas på nya hyresrätter", url: "https://valkompass.svt.se/2022/riksdag/fraga/marknadshyror-ska-inforas-pa-nya-hyresratter" }],
            },
          ],
        },
        insats: {
          score: 30,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: vill visserligen sänka skatten på arbete via arbetsgivaravgift och grundavdrag och behålla RUT, men motsätter sig bidragstaket, vill stärka a-kassan och bevara anställningsskyddet. Sammantaget svag koppling insats–utfall i bidrags- och arbetsrättsfrågorna.",
          sources: [
            { title: "Arbetsvärlden: Sex av åtta partier vill sänka skatten på arbete", url: "https://www.arbetsvarlden.se/sex-av-atta-partier-vill-sanka-skatten-pa-arbete/" },
            { title: "SVT:s valkompass 2022: RUT-avdraget ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/rut-avdraget-ska-avskaffas" },
          ],
          components: [
            {
              componentId: "jobbskatteavdrag",
              position: "'Ja. Miljöpartiet vill bland annat sänka arbetsgivaravgiften och höja grundavdraget' — vill sänka skatten på arbete.",
              score: 75,
              sources: [{ title: "Arbetsvärlden: Sex av åtta partier vill sänka skatten på arbete", url: "https://www.arbetsvarlden.se/sex-av-atta-partier-vill-sanka-skatten-pa-arbete/" }],
            },
            {
              componentId: "bidragstak-motprestation",
              position: "Motsätter sig bidragstaket: försörjningsstödet är skyddsnätets sista utväg och ska inte användas för att pressa människor djupare i fattigdom.",
              score: 0,
              sources: [{ title: "Riksdagens betänkande 2025/26:SoU30 (Reformerat försörjningsstöd – bidragstak)", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/reformerat-forsorjningsstod-bidragstak-och-okade_hd01sou30/" }],
            },
            {
              componentId: "a-kassa-niva",
              position: "Stöder permanentad höjning och en mer universell a-kassa (Mycket bra förslag) — minskar gapet mot arbetsinkomst.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Den tillfälliga höjningen i A-kassan ska permanentas", url: "https://valkompass.svt.se/2022/riksdag/fraga/den-tillfalliga-hojningen-i-a-kassan-ska-permanentas" }],
            },
            {
              componentId: "anstallningsskydd",
              position: "Motsätter sig (Mycket dåligt förslag): vill skapa anställningstrygghet och förhindra missbruk av korta kontrakt i stället för fasta jobb.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Det ska bli enklare för arbetsgivare att säga upp anställda", url: "https://valkompass.svt.se/2022/riksdag/fraga/det-ska-bli-enklare-for-arbetsgivare-att-saga-upp-anstallda" }],
            },
            {
              componentId: "rut-avdrag",
              position: "Vill behålla RUT-avdraget (Ganska dåligt förslag om att avskaffa).",
              score: 75,
              sources: [{ title: "SVT:s valkompass 2022: RUT-avdraget ska avskaffas", url: "https://valkompass.svt.se/2022/riksdag/fraga/rut-avdraget-ska-avskaffas" }],
            },
          ],
        },
        frihet: {
          score: 45,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: MP säger ja till vinstutdelningsförbud och nej till gårdsförsäljning men stöder en dödshjälpsutredning och avvisar visitationszoner helt; partiet vill bara ha något mer övervakning, med uttalat skydd för mänskliga rättigheter — stark på rättssäkerhet, svagare på marknads- och anti-paternalismfrihet.",
          sources: [
            { title: "SVT:s valkompass 2022: Polisen ska kunna upprätta visitationszoner i brottsutsatta områden", url: "https://valkompass.svt.se/2022/riksdag/fraga/polisen-ska-kunna-uppratta-visitationszoner-i-brottsutsatta-omraden" },
            { title: "Senioren: Sex partier vill utreda dödshjälp", url: "https://www.senioren.se/nyheter/254501/" },
          ],
          components: [
            {
              componentId: "valfrihet-valfard",
              position: "Tycker vinstutdelningsförbud är ett mycket bra förslag: 'Skolans syfte ska alltid vara utbildning – aldrig vinst' — vill begränsa driftsfriheten/valfriheten.",
              score: 0,
              sources: [{ title: "SVT:s valkompass 2022: Vinstutdelning för friskolor ska förbjudas", url: "https://valkompass.svt.se/2022/riksdag/fraga/vinstutdelning-for-friskolor-ska-forbjudas" }],
            },
            {
              componentId: "gardsforsaljning",
              position: "Mot gårdsförsäljning av hälsoskäl: 'alkohol är ju inte vilken vara som helst' — värnar monopolet.",
              score: 25,
              sources: [{ title: "Vinbanken: Gårdsförsäljning av alkohol – så tycker de olika partierna (2022)", url: "https://vinbanken.se/2022/09/07/gardsforsaljning-av-alkohol-sa-tycker-de-olika-partierna" }],
            },
            {
              componentId: "dodshjalp",
              position: "Ett av sex partier som vill utreda dödshjälp och öppna för frågan om självbestämmande i livets slutskede.",
              score: 75,
              sources: [{ title: "Senioren: Sex partier vill utreda dödshjälp", url: "https://www.senioren.se/nyheter/254501/" }],
            },
            {
              componentId: "overvakning",
              position: "Vill ha 'lite mer' övervakning mot grov brottslighet men med uttalat skydd för mänskliga rättigheter.",
              score: 25,
              sources: [{ title: "SVT:s valkompass 2022: Hur mycket ska polisen få använda hemlig avlyssning och övervakning utan brottsmisstanke?", url: "https://valkompass.svt.se/2022/riksdag/fraga/hur-mycket-ska-polisen-fa-anvanda-hemlig-avlyssning-och-overvakning-utan-brottsmisstanke" }],
            },
            {
              componentId: "visitationszoner",
              position: "Tycker visitationszoner är ett mycket dåligt förslag; drabbar oproportionerligt socioekonomiskt utsatta områden och riskerar kollektiv utpekning.",
              score: 100,
              sources: [{ title: "SVT:s valkompass 2022: Polisen ska kunna upprätta visitationszoner i brottsutsatta områden", url: "https://valkompass.svt.se/2022/riksdag/fraga/polisen-ska-kunna-uppratta-visitationszoner-i-brottsutsatta-omraden" }],
            },
          ],
        },
        framtid: {
          score: 85,
          motivation: "Beräknad ur fem likaviktade delkomponenter enligt protokoll v1.1: vill skärpa klimatmålet inklusive konsumtionsutsläpp, behöll reduktionsplikten, skydda 30 procent av naturen till 2030 och dubblera elsystemet med förnybart; motståndet mot ny kärnkraft begränsar elutbyggnadens bredd.",
          sources: [{ title: "Miljöpartiets politik", url: "https://www.mp.se/politik" }],
          components: [
            {
              componentId: "klimatmal-2045",
              position: "Vill 'skärpa Sveriges klimatmål utifrån bästa tillgänglig forskning' där 'utsläpp från svensk konsumtion också inkluderas' — skärper målet.",
              score: 100,
              sources: [{ title: "Miljöpartiet: Klimat", url: "https://www.mp.se/politik/klimat/" }],
            },
            {
              componentId: "reduktionsplikt",
              position: "Motsatte sig sänkningen med hänvisning till kraftigt ökade transportutsläpp och risken att missa EU:s klimatåtaganden — behåller en hög nivå.",
              score: 75,
              sources: [{ title: "Riksdagen: betänkande 2023/24:MJU5", url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/sankning-av-reduktionsplikten-for-bensin-och_hb01mju5/" }],
            },
            {
              componentId: "naturskydd-skog",
              position: "Vill 'skydda 30 procent av land, hav och sjöar till 2030', 'stoppa avverkningarna av Sveriges sista naturskogar' och ge fjällskogarna långsiktigt skydd — starkt och konkret.",
              score: 100,
              sources: [{ title: "Miljöpartiet: Skog och biologisk mångfald", url: "https://www.mp.se/politik/skog-och-biologisk-mangfald/" }],
            },
            {
              componentId: "civilforsvar-beredskap",
              position: "Vill 'stärka det civila försvaret', öka självförsörjningen, säkra lager av livsmedel och medicin samt klimatanpassa samhällsviktig infrastruktur.",
              score: 75,
              sources: [{ title: "Miljöpartiet: Civilt försvar och krisberedskap", url: "https://www.mp.se/politik/civilt-forsvar-och-krisberedskap/" }],
            },
            {
              componentId: "fossilfri-el",
              position: "Vill 'dubblera elsystemet till 2035' genom stor utbyggnad av förnybart, framför allt havsbaserad vindkraft; motsätter sig ny kärnkraft ('försenar och fördyrar omställningen').",
              score: 75,
              sources: [{ title: "Miljöpartiet: Energi", url: "https://www.mp.se/politik/energi/" }],
            },
          ],
        },
      },
      feasibility: {
        factor: 0.81,
        motivation: "Protokollets rubrik §3.3: E 1.0 (statsråd t.o.m. november 2021, under mandatperioden 2018–2022), P 0.17 (18/107 mandat), T 0.8 (koalitionspart med statsråd 2014–2021); raw 0.733 ger faktor 0.81 efter koalitionsgolvet.",
        sources: [
          { title: "Valresultat 2022 (Valmyndigheten)", url: "https://www.val.se/valresultat-och-statistik/riksdags--region--och-kommunval/valresultat-2022" },
          { title: "Regeringar i Sverige (Riksdagen)", url: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/" },
        ],
      },
    },
  ],
});

export const dimensionIds = dataset.dimensions.map((d) => d.id);
