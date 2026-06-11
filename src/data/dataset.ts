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
          sources: [{ title: "Socialdemokraternas partiprogram", url: "https://www.socialdemokraterna.se/vart-parti/om-partiet/vart-partiprogram" }],
        },
        lidande: {
          score: 68,
          motivation: "Tydlig prioritering av utsatta grupper via a-kassa, sjukförsäkring och riktade välfärdssatsningar; psykiatri- och vårdköfrågan adresseras men med begränsad reformhöjd.",
          sources: [{ title: "Socialdemokraternas politik A–Ö", url: "https://www.socialdemokraterna.se/var-politik" }],
        },
        fordelning: {
          score: 72,
          motivation: "Utjämning är kärnideologi: progressiv beskattning, generell välfärd och uttalat mål om minskade klyftor; social rörlighet via avgiftsfri utbildning.",
          sources: [{ title: "Socialdemokraternas partiprogram", url: "https://www.socialdemokraterna.se/vart-parti/om-partiet/vart-partiprogram" }],
        },
        insats: {
          score: 45,
          motivation: "Arbetslinjen finns retoriskt, men höga marginaleffekter och bidragssystemens utformning försvagar proportionen mellan insats och utfall för breda grupper.",
          sources: [{ title: "Socialdemokraternas politik A–Ö", url: "https://www.socialdemokraterna.se/var-politik" }],
        },
        frihet: {
          score: 55,
          motivation: "Stark på reella förmågor (utbildning, vård som frihetsförutsättning) i capability-mening; svagare på negativ frihet med benägenhet för reglering och paternalism.",
          sources: [{ title: "Socialdemokraternas partiprogram", url: "https://www.socialdemokraterna.se/vart-parti/om-partiet/vart-partiprogram" }],
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
  ],
});

export const dimensionIds = dataset.dimensions.map((d) => d.id);
