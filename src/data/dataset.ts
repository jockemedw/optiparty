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
      exclusions: [],
    },
    {
      id: "lidande",
      name: "Lidandeminimering",
      shortDescription: "Hur mycket politiken lindrar situationen för dem som har det sämst, i absoluta termer.",
      grounding: "Negativ utilitarism (Popper 1945) och prioritarianism (Parfit 1991): förbättringar väger tyngre ju sämre ställd mottagaren är.",
      measures: "Fattigdom, psykisk ohälsa, vårdköer, missbruk, hemlöshet, brottsoffer.",
      boundary: "Absolut nivå hos de sämst ställda: förbättringar väger tyngre ju sämre ställd mottagaren är. Gräns mot Samlat välbefinnande: där räknas alla lika. Gräns mot Fördelningsrättvisa: lidande är absolut (hur illa har de sämst ställda det?), fördelning är relativ (hur stora är gapen?).",
      exclusions: [],
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
      exclusions: [],
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
          score: 62,
          motivation: "Bred välfärdsagenda med generell sjukvård, skola och trygghetssystem som täcker hela befolkningen; svagare på tillväxt- och produktivitetsreformer som lyfter välståndet på sikt.",
          sources: [{ title: "Socialdemokraternas partiprogram och riktlinjer", url: "https://www.socialdemokraterna.se/var-politik/partiprogram-och-riktlinjer" }],
        },
        lidande: {
          score: 68,
          motivation: "Tydlig prioritering av utsatta grupper via a-kassa, sjukförsäkring och riktade välfärdssatsningar; psykiatri- och vårdköfrågan adresseras men med begränsad reformhöjd.",
          sources: [{ title: "Socialdemokraternas politik A–Ö", url: "https://www.socialdemokraterna.se/var-politik" }],
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
          score: 55,
          motivation: "Stark på reella förmågor (utbildning, vård som frihetsförutsättning) i capability-mening; svagare på negativ frihet med benägenhet för reglering och paternalism.",
          sources: [{ title: "Socialdemokraternas partiprogram och riktlinjer", url: "https://www.socialdemokraterna.se/var-politik/partiprogram-och-riktlinjer" }],
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
          score: 60,
          motivation: "Tillväxt-, jobb- och företagsfokus med god förväntad effekt på aggregerat välstånd; mindre vikt vid välbefinnandefaktorer som socialt stöd och arbetsliv/balans.",
          sources: [{ title: "Moderaternas idéprogram", url: "https://moderaterna.se/var-politik/" }],
        },
        lidande: {
          score: 50,
          motivation: "Brottsofferperspektiv och vårdköfokus väger upp; samtidigt innebär stramare ersättningssystem ökad risk för de ekonomiskt mest utsatta.",
          sources: [{ title: "Moderaternas politik", url: "https://moderaterna.se/var-politik/" }],
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
          score: 65,
          motivation: "Stark på negativ frihet: äganderätt, valfrihet i välfärden, näringsfrihet; repressiva inslag i kriminalpolitiken drar ned rättssäkerhetsdelen något.",
          sources: [{ title: "Moderaternas idéprogram", url: "https://moderaterna.se/var-politik/" }],
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
          score: 52,
          motivation: "Satsningar på välfärd, polis och pensioner adresserar viktiga välståndsfaktorer; finansieringsmodellen – frigjorda medel via minskad invandring – är osäker och försvårar bedömningen av nettopåverkan på aggregerat välbefinnande.",
          sources: [{ title: "Sverigedemokraternas politik – Vad vi vill", url: "https://www.sd.se/vad-vi-vill/" }],
        },
        lidande: {
          score: 48,
          motivation: "Stark betoning på brottsoffer och trygghet gynnar utsatta i brottsdrabbade miljöer; restriktiv migrationspolitik begränsar dock tillgången till välfärd och skydd för nyanlända i nöd, vilket ökar absolut utsatthet i den gruppen.",
          sources: [{ title: "Sverigedemokraternas politik – Vad vi vill", url: "https://www.sd.se/vad-vi-vill/" }],
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
          score: 40,
          motivation: "Nationalistisk kulturpolitik och sträng immigrationskontroll inskränker reell och formell frihet för en betydande befolkningsgrupp bosatt i Sverige; medborgerliga friheter för svenska medborgare upprätthålls i övrigt utan märkbara inskränkningar.",
          sources: [{ title: "Sverigedemokraternas politik – Vad vi vill", url: "https://www.sd.se/vad-vi-vill/" }],
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
          score: 55,
          motivation: "Generös välfärdsagenda och storskaliga klimatinvesteringar ger positiv riktning för folkhälsa och utbildning; hög skattebelastning och motstånd mot privata alternativ i välfärden riskerar att hämma tillväxt och produktivitet.",
          sources: [{ title: "Vänsterpartiets politik", url: "https://www.vansterpartiet.se/var-politik/" }],
        },
        lidande: {
          score: 74,
          motivation: "Omfördelning till de mest utsatta – stärkt a-kassa, utbyggd psykiatri, bostadsrättsreformer och fattigdomsbekämpning – är kärnan i partiprogrammet med tydlig prioritarianistisk logik; oppositionsläget begränsar kortsiktig genomförandekraft.",
          sources: [{ title: "Vänsterpartiets politik", url: "https://www.vansterpartiet.se/var-politik/" }],
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
          score: 52,
          motivation: "Stark på reella förmågor i Sens tradition – allas rätt till bostad, vård och utbildning – men motstånd mot privata alternativ i välfärden och tung statlig reglering begränsar negativ frihet och individuell valfrihet.",
          sources: [{ title: "Vänsterpartiets politik", url: "https://www.vansterpartiet.se/var-politik/" }],
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
          score: 63,
          motivation: "Företagarvänlig politik med sänkta arbetsgivaravgifter, avregleringar och landsbygdssatsningar ger goda tillväxtförutsättningar och brett välstånd; generella välfärdsnivåer och socialt stöd är dock inte partiets primära fokus.",
          sources: [{ title: "Centerpartiets politik", url: "https://www.centerpartiet.se/var-politik" }],
        },
        lidande: {
          score: 45,
          motivation: "Marknadslösningar och valfrihet driver agendan med svagare träffsäkerhet för de mest utsatta i absoluta termer; geografisk utjämning stad–land är central men ersätter inte specifika satsningar på fattigdom, missbruk eller psykiatri.",
          sources: [{ title: "Centerpartiets politik", url: "https://www.centerpartiet.se/var-politik" }],
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
          motivation: "Individens rätt att bestämma över sitt eget liv är partiets värdemässiga ledstjärna – 'alla ska kunna bestämma över sitt liv genom egna och fria val'; brett stöd för valfrihet i välfärd, äganderätt och anti-paternalism ger hög autonomipoäng.",
          sources: [{ title: "Centerpartiets politik", url: "https://www.centerpartiet.se/var-politik" }],
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
          score: 56,
          motivation: "Familjepolitik, äldreomsorg och trygghetsagenda ger positiva välfärdseffekter för berörda grupper; bredare ekonomisk reformagenda och tillväxtfrämjande åtgärder är underbetonade i förhållande till partiets parlamentariska vikt.",
          sources: [{ title: "Kristdemokraternas politik", url: "https://www.kristdemokraterna.se/var-politik/" }],
        },
        lidande: {
          score: 58,
          motivation: "Omsorg om äldre, funktionsnedsatta och utsatta familjer är en uttalad värdegrundsprincip; fokus är primärt på socialt integrerade utsatta och familjenära grupper snarare än de allra mest marginaliserade.",
          sources: [{ title: "Kristdemokraternas politik", url: "https://www.kristdemokraterna.se/var-politik/" }],
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
          score: 58,
          motivation: "KD värnar rättsstaten, demokrati och religionsfrihet, och den moderna partilinjen är pluralistisk i praktiken; kristdemokratisk värdegrund inkluderar viss social konservatism kring familjeliv som kan anta paternalistisk karaktär.",
          sources: [{ title: "Kristdemokraternas politik", url: "https://www.kristdemokraterna.se/var-politik/" }],
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
          score: 60,
          motivation: "Stark kunskapsskolasatsning och marknadsekonomisk inriktning bidrar positivt till humankapital och välstånd på sikt; partiets begränsade storlek och koalitionsberoende reducerar i praktiken den faktiska reformkapaciteten.",
          sources: [{ title: "Liberalernas politik", url: "https://www.liberalerna.se/politik/" }],
        },
        lidande: {
          score: 48,
          motivation: "Liberal marknadsansats erbjuder svagare direktskydd för de mest utsatta i absoluta termer; utbildning och sysselsättning lyfts som vägen ur utsatthet men akuta insatser för hemlösa, missbrukare och brottsoffer är inte partiets tydliga profil.",
          sources: [{ title: "Liberalernas politik", url: "https://www.liberalerna.se/politik/" }],
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
          score: 72,
          motivation: "Frihet är partiets kärnideologi – 'För din frihet' – med stark betoning på negativ frihet, rättsstat, demokrati och medborgerliga rättigheter inklusive HBTQI-rättigheter; konsekvent anti-paternalistisk profil i program och praktisk politik.",
          sources: [{ title: "Liberalernas politik", url: "https://www.liberalerna.se/politik/" }],
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
          score: 53,
          motivation: "Kombination av klimatansvar och välfärdsambitioner ger positiva långsiktiga bidrag till välbefinnande; partiets strikta ekologiska ram kan begränsa ekonomisk aktivitet och välståndsskapande på kort till medellång sikt.",
          sources: [{ title: "Miljöpartiets politik", url: "https://www.mp.se/politik" }],
        },
        lidande: {
          score: 55,
          motivation: "Miljöpartiet kombinerar klimatpolitik med social rättvisa och stöd till utsatta hushåll; den ekologiska prioriteringen innebär dock att akuta behov hos de allra mest marginaliserade inte är partiets primära politikfokus.",
          sources: [{ title: "Miljöpartiets politik", url: "https://www.mp.se/politik" }],
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
          score: 60,
          motivation: "Stark på civila rättigheter, HBTQI-rättigheter och livsstilsfrihet i liberal tradition; miljöregleringar och konsumtionsbegränsningar innebär å andra sidan en form av paternalism som delvis begränsar individuell autonomi och valfrihet.",
          sources: [{ title: "Miljöpartiets politik", url: "https://www.mp.se/politik" }],
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
