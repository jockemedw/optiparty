import { DatasetSchema, type Dataset } from "@/lib/model/types";

export const dataset: Dataset = DatasetSchema.parse({
  assessmentDate: "2026-06-11",
  dimensions: [
    {
      id: "valbefinnande",
      name: "Samlat välbefinnande",
      shortDescription: "Politikens förväntade effekt på befolkningens samlade välbefinnande och välstånd.",
      grounding: "Klassisk utilitarism (Bentham 1789, Mill 1863); operationaliserad i SWB/WELLBY-forskningen (Layard; HM Treasury Green Book 2021) och OECD Better Life Index.",
      measures: "Aggregerat välbefinnande för flest människor: ekonomi, hälsa, utbildning, socialt stöd.",
    },
    {
      id: "lidande",
      name: "Lidandeminimering",
      shortDescription: "Hur mycket politiken lindrar situationen för dem som har det sämst, i absoluta termer.",
      grounding: "Negativ utilitarism (Popper 1945) och prioritarianism (Parfit 1991): förbättringar väger tyngre ju sämre ställd mottagaren är.",
      measures: "Fattigdom, psykisk ohälsa, vårdköer, missbruk, hemlöshet, brottsoffer.",
    },
    {
      id: "fordelning",
      name: "Fördelningsrättvisa",
      shortDescription: "Hur jämlikt resurser, möjligheter och risker fördelas i samhället.",
      grounding: "Rawls rättviseteori (1971): differensprincipen och lika grundläggande friheter; empiriskt stödd ojämlikhetsforskning (Wilkinson & Pickett 2009).",
      measures: "Relativa gap, jämlika livschanser, social rörlighet.",
    },
    {
      id: "insats",
      name: "Insatsrättvisa",
      shortDescription: "Att arbete, ansträngning och bidrag till samhället lönar sig.",
      grounding: "Förtjänstteori (Miller 1999); empiriskt robust proportionalitetsintuition (Starmans, Sheskin & Bloom 2017).",
      measures: "Drivkrafter för arbete och företagande, skydd mot friåkning, proportion mellan insats och utfall.",
    },
    {
      id: "frihet",
      name: "Frihet & autonomi",
      shortDescription: "Individens självbestämmande och reella förmåga att forma sitt liv.",
      grounding: "Liberal frihetstradition (Mill 1859, Berlin 1958) och capability approach (Sen 1999, Nussbaum 2011); rättsstaten som frihetens institution.",
      measures: "Självbestämmande, rättssäkerhet, maktdelning, reella valmöjligheter.",
    },
    {
      id: "framtid",
      name: "Framtidsansvar",
      shortDescription: "Politikens effekter bortom en generation.",
      grounding: "Parfit (1984) om framtida personers moraliska vikt; Brundtland (1987); Stern Review (2006) om intergenerationella avvägningar.",
      measures: "Klimat och miljö, statsfinanser, infrastruktur, forskning, beredskap.",
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
          score: 72,
          motivation: "Utjämning är kärnideologi: progressiv beskattning, generell välfärd och uttalat mål om minskade klyftor; social rörlighet via avgiftsfri utbildning.",
          sources: [{ title: "Socialdemokraternas partiprogram och riktlinjer", url: "https://www.socialdemokraterna.se/var-politik/partiprogram-och-riktlinjer" }],
        },
        insats: {
          score: 45,
          motivation: "Arbetslinjen finns retoriskt, men höga marginaleffekter och bidragssystemens utformning försvagar proportionen mellan insats och utfall för breda grupper.",
          sources: [{ title: "Socialdemokraternas politik A–Ö", url: "https://www.socialdemokraterna.se/var-politik" }],
        },
        frihet: {
          score: 55,
          motivation: "Stark på reella förmågor (utbildning, vård som frihetsförutsättning) i capability-mening; svagare på negativ frihet med benägenhet för reglering och paternalism.",
          sources: [{ title: "Socialdemokraternas partiprogram och riktlinjer", url: "https://www.socialdemokraterna.se/var-politik/partiprogram-och-riktlinjer" }],
        },
        framtid: {
          score: 58,
          motivation: "Klimatomställning bejakas med statligt investeringsfokus; statsfinansiell långsiktighet historiskt god, men framtida pensions- och demografiutmaningar adresseras svagt.",
          sources: [{ title: "Socialdemokraternas politik A–Ö", url: "https://www.socialdemokraterna.se/var-politik" }],
        },
      },
      feasibility: {
        factor: 0.85,
        motivation: "Längst regeringserfarenhet av alla partier, etablerad förvaltningstradition och stabil partiorganisation; minuspoäng för beroende av komplexa koalitionsunderlag.",
        sources: [{ title: "Regeringar i Sverige (Riksdagen)", url: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/" }],
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
          score: 45,
          motivation: "Lika chanser betonas via skola och arbetslinje snarare än utjämnade utfall; skattesänkningar gynnar i första hand arbetande medel- och höginkomsttagare.",
          sources: [{ title: "Moderaternas idéprogram", url: "https://moderaterna.se/var-politik/" }],
        },
        insats: {
          score: 72,
          motivation: "Proportionalitet mellan insats och utfall är kärnbudskap: det ska löna sig att arbeta, bidragstak, sänkt skatt på arbete och hårdare krav på motprestation.",
          sources: [{ title: "Moderaternas politik", url: "https://moderaterna.se/var-politik/" }],
        },
        frihet: {
          score: 65,
          motivation: "Stark på negativ frihet: äganderätt, valfrihet i välfärden, näringsfrihet; repressiva inslag i kriminalpolitiken drar ned rättssäkerhetsdelen något.",
          sources: [{ title: "Moderaternas idéprogram", url: "https://moderaterna.se/var-politik/" }],
        },
        framtid: {
          score: 55,
          motivation: "Kärnkraftssatsning och statsfinansiell återhållsamhet är långsiktiga plus; lägre ambition i närtida utsläppsminskningar och naturskydd drar ned.",
          sources: [{ title: "Moderaternas politik", url: "https://moderaterna.se/var-politik/" }],
        },
      },
      feasibility: {
        factor: 0.8,
        motivation: "Omfattande och aktuell regeringserfarenhet, professionaliserad organisation; samordningskostnader i blockpolitiken drar ned något.",
        sources: [{ title: "Regeringar i Sverige (Riksdagen)", url: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/" }],
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
          score: 42,
          motivation: "Partiets fördelningsagenda är primärt nationellt avgränsad – välfärden ska kanaliseras till etablerade medborgare snarare än utjämna ekonomiska klyftor; progressiv beskattning och strukturell ojämlikhet är inte centrala politiska frågor.",
          sources: [{ title: "Sverigedemokraternas politik – Vad vi vill", url: "https://www.sd.se/vad-vi-vill/" }],
        },
        insats: {
          score: 58,
          motivation: "SD betonar att välfärden ska förtjänas och förespråkar krav på motprestationer, vilket stärker kopplingen insats–utfall; incitamentstänkandet är dock primärt riktat mot migrationsfrågor snarare än mot bred arbetsmarknadspolitik.",
          sources: [{ title: "Sverigedemokraternas politik – Vad vi vill", url: "https://www.sd.se/vad-vi-vill/" }],
        },
        frihet: {
          score: 40,
          motivation: "Nationalistisk kulturpolitik och sträng immigrationskontroll inskränker reell och formell frihet för en betydande befolkningsgrupp bosatt i Sverige; medborgerliga friheter för svenska medborgare upprätthålls i övrigt utan märkbara inskränkningar.",
          sources: [{ title: "Sverigedemokraternas politik – Vad vi vill", url: "https://www.sd.se/vad-vi-vill/" }],
        },
        framtid: {
          score: 35,
          motivation: "Motvilja mot ambitiösa klimatskatter och stöd för billig fossil energi i landsbygden signalerar låg klimatambition; infrastruktur och beredskap ges viss prioritet men ej i relation till de mest långsiktiga klimat- och miljöriskerna.",
          sources: [{ title: "Sverigedemokraternas politik – Vad vi vill", url: "https://www.sd.se/vad-vi-vill/" }],
        },
      },
      feasibility: {
        factor: 0.60,
        motivation: "Tongivande stödparti i Tidökoalitionen 2022–2026 ger viss praktisk styrningserfarenhet; partiet har dock aldrig innehaft ministerposter och organisationen har periodvis präglats av interna spänningar kring politisk linje och tempo.",
        sources: [{ title: "Regeringar i Sverige (Riksdagen)", url: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/" }],
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
          score: 78,
          motivation: "Utjämning av ekonomiska klyftor via progressiv beskattning, förmögenhetsskatt och universella välfärdstjänster är partiets viktigaste politiska mål; social rörlighet och lika livschanser är centrala teman i partiprogrammet.",
          sources: [{ title: "Vänsterpartiets politik", url: "https://www.vansterpartiet.se/var-politik/" }],
        },
        insats: {
          score: 30,
          motivation: "Partiets betoning på kollektiv solidaritet framför individuell meritbelöning, kombinerat med höga marginalskatter och begränsade krav på motprestationer för transfereringar, minskar klart proportionen mellan individuell insats och utfall.",
          sources: [{ title: "Vänsterpartiets politik", url: "https://www.vansterpartiet.se/var-politik/" }],
        },
        frihet: {
          score: 52,
          motivation: "Stark på reella förmågor i Sens tradition – allas rätt till bostad, vård och utbildning – men motstånd mot privata alternativ i välfärden och tung statlig reglering begränsar negativ frihet och individuell valfrihet.",
          sources: [{ title: "Vänsterpartiets politik", url: "https://www.vansterpartiet.se/var-politik/" }],
        },
        framtid: {
          score: 70,
          motivation: "Mål om 700 miljarder i klimatinvesteringar och bred miljöprofil ger hög framtidspoäng; fullständig finansiering och statsfinansiell hållbarhet för de offensiva satsningarna är dock inte fullt säkerställd i partiets dokument.",
          sources: [{ title: "Vänsterpartiets politik", url: "https://www.vansterpartiet.se/var-politik/" }],
        },
      },
      feasibility: {
        factor: 0.50,
        motivation: "Stöd- men inte koalitionsparti åt S-regeringar utan formella ministerposter, vilket begränsar direkt förvaltningserfarenhet; stabil partiorganisation men vänsterprofilen och oppositionspositionen försvårar bred parlamentarisk koalitionsbildning.",
        sources: [{ title: "Regeringar i Sverige (Riksdagen)", url: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/" }],
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
          score: 50,
          motivation: "C förespråkar lika möjligheter via utbildning och geografisk jämlikhet snarare än utjämning av ekonomiska utfall; marknadsliberal grundhållning utan starkt progressivt skattefokus begränsar den faktiska omfördelningseffekten.",
          sources: [{ title: "Centerpartiets politik", url: "https://www.centerpartiet.se/var-politik" }],
        },
        insats: {
          score: 68,
          motivation: "Kärnbudskapet att det ska löna sig att arbeta och driva företag omsätts i sänkta arbetsgivaravgifter, lägre inkomstskatt på landsbygd och förenklat regelverk; incitamenten för arbete och ansträngning stärks konsekvent i politiken.",
          sources: [{ title: "Centerpartiets politik", url: "https://www.centerpartiet.se/var-politik" }],
        },
        frihet: {
          score: 75,
          motivation: "Individens rätt att bestämma över sitt eget liv är partiets värdemässiga ledstjärna – 'alla ska kunna bestämma över sitt liv genom egna och fria val'; brett stöd för valfrihet i välfärd, äganderätt och anti-paternalism ger hög autonomipoäng.",
          sources: [{ title: "Centerpartiets politik", url: "https://www.centerpartiet.se/var-politik" }],
        },
        framtid: {
          score: 62,
          motivation: "Historiskt stark miljöprofil och nuvarande satsning på att fördubbla fossilfri energiproduktion är positiva; tillväxtfokus och deregleringsambitioner skapar ibland spänning mot snabb klimatomställning och tydliga intergenerationella åtaganden.",
          sources: [{ title: "Centerpartiets politik", url: "https://www.centerpartiet.se/var-politik" }],
        },
      },
      feasibility: {
        factor: 0.70,
        motivation: "Ministeransvar under Alliansregeringarna 2006–2014 ger solid regeringserfarenhet och etablerad förvaltningstradition; partiets val att lämna Alliansen inför 2022 och söka nytt parlamentariskt samarbete skapar viss osäkerhet om koalitionsförmåga.",
        sources: [{ title: "Regeringar i Sverige (Riksdagen)", url: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/" }],
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
          score: 48,
          motivation: "Familjepolitiska stöd och lika tillgång till omsorg ger viss utjämningseffekt; KD är inte primärt omfördelningsinriktat utan betonar valfrihet, familjens eget ansvar och meritbaserade chanser framför statlig inkomstutjämning.",
          sources: [{ title: "Kristdemokraternas politik", url: "https://www.kristdemokraterna.se/var-politik/" }],
        },
        insats: {
          score: 62,
          motivation: "Kristen demokratis etik betonar ansvar, arbete och att bidrag till samhället ska ge utdelning; krav på motprestationer i transfereringssystem kombineras med familjens roll som primär solidaritetsenhet.",
          sources: [{ title: "Kristdemokraternas politik", url: "https://www.kristdemokraterna.se/var-politik/" }],
        },
        frihet: {
          score: 58,
          motivation: "KD värnar rättsstaten, demokrati och religionsfrihet, och den moderna partilinjen är pluralistisk i praktiken; kristdemokratisk värdegrund inkluderar viss social konservatism kring familjeliv som kan anta paternalistisk karaktär.",
          sources: [{ title: "Kristdemokraternas politik", url: "https://www.kristdemokraterna.se/var-politik/" }],
        },
        framtid: {
          score: 57,
          motivation: "Mål om 100 procent fossilfri energiförsörjning och ett förvaltarskapstänk kring miljön ger viss framtidsorientering; klimatambitionen är moderat centrism snarare än ledande och genomgripande demografireformer saknas i stor utsträckning.",
          sources: [{ title: "Kristdemokraternas politik", url: "https://www.kristdemokraterna.se/var-politik/" }],
        },
      },
      feasibility: {
        factor: 0.72,
        motivation: "Ministeransvar i Alliansregeringarna 2006–2014 och i Tidökoalitionen 2022–2026 ger bred och aktuell regeringserfarenhet; stabilt parti med lojal väljarbase och väl etablerad partiorganisation stärker genomförbarhetspotentialen.",
        sources: [{ title: "Regeringar i Sverige (Riksdagen)", url: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/" }],
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
          score: 46,
          motivation: "L prioriterar lika möjligheter – primärt via utbildning och ökad sysselsättning – snarare än utjämnade utfall; fri marknad och valfrihet tenderar i praktiken att gynna resursstarka grupper relativt sett.",
          sources: [{ title: "Liberalernas politik", url: "https://www.liberalerna.se/politik/" }],
        },
        insats: {
          score: 65,
          motivation: "Meritokrati, eget ansvar och att arbete ska löna sig präglar partiprogrammet; frihandel, arbetsmarknadsflexibilitet och lägre marginalskatter stärker kopplingen mellan individuell insats och utfall.",
          sources: [{ title: "Liberalernas politik", url: "https://www.liberalerna.se/politik/" }],
        },
        frihet: {
          score: 72,
          motivation: "Frihet är partiets kärnideologi – 'För din frihet' – med stark betoning på negativ frihet, rättsstat, demokrati och medborgerliga rättigheter inklusive HBTQI-rättigheter; konsekvent anti-paternalistisk profil i program och praktisk politik.",
          sources: [{ title: "Liberalernas politik", url: "https://www.liberalerna.se/politik/" }],
        },
        framtid: {
          score: 60,
          motivation: "Utbildningsinvestering och kunskapslyft är partiets starkaste framtidsbidrag; stöd för förnybar energi och klimatmål är tillräckligt men inte ledande, och intergenerationell rättvisa är underadresserat i partiprogrammet.",
          sources: [{ title: "Liberalernas politik", url: "https://www.liberalerna.se/politik/" }],
        },
      },
      feasibility: {
        factor: 0.65,
        motivation: "Ministeransvar i Alliansregeringarna 2006–2014 och i Tidökoalitionen 2022–2026 ger reell styrningserfarenhet; interna stridigheter kring partilinje 2019–2021 och minskad väljarstorlek reducerar stabilitetspoängen något.",
        sources: [{ title: "Regeringar i Sverige (Riksdagen)", url: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/" }],
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
          score: 62,
          motivation: "Partiets agenda kring social rättvisa, antirasism och universella välfärdslösningar ger en tydlig fördelningsprofil; grön omfördelning som begränsar konsumtion och riktar stöd till utsatta hushåll kan ha progressiv jämlikhetseffekt.",
          sources: [{ title: "Miljöpartiets politik", url: "https://www.mp.se/politik" }],
        },
        insats: {
          score: 40,
          motivation: "Miljöpartiet prioriterar kollektiv och ekologisk hållbarhet framför individuella meritbelöningar; stöd för universella bidragssystem och begränsad betoning av krav på motprestationer minskar kopplingen insats–utfall.",
          sources: [{ title: "Miljöpartiets politik", url: "https://www.mp.se/politik" }],
        },
        frihet: {
          score: 60,
          motivation: "Stark på civila rättigheter, HBTQI-rättigheter och livsstilsfrihet i liberal tradition; miljöregleringar och konsumtionsbegränsningar innebär å andra sidan en form av paternalism som delvis begränsar individuell autonomi och valfrihet.",
          sources: [{ title: "Miljöpartiets politik", url: "https://www.mp.se/politik" }],
        },
        framtid: {
          score: 82,
          motivation: "Klimatansvar och intergenerationell rättvisa är partiets raison d'être; bred miljöagenda, naturskydd och mål om hållbar cirkulär ekonomi gör MP till den tydligaste frontlöparen på framtidsdimensionen bland riksdagspartierna.",
          sources: [{ title: "Miljöpartiets politik", url: "https://www.mp.se/politik" }],
        },
      },
      feasibility: {
        factor: 0.55,
        motivation: "Koalitionspartner med S 2014–2019 med direkta ministerposter ger erfarenhet av formellt regeringsansvar; partiets utträdande ur riksdagen 2022 och begränsade väljarstorlek sänker stabilitets- och kapacitetsbedömningen.",
        sources: [{ title: "Regeringar i Sverige (Riksdagen)", url: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/" }],
      },
    },
  ],
});

export const dimensionIds = dataset.dimensions.map((d) => d.id);
