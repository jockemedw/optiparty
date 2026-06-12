import type { Metadata } from "next";
import { dataset } from "@/data/dataset";
import { fmt } from "@/lib/format";
import { displayColor } from "@/lib/color";

export const metadata: Metadata = { title: "Metodik — Optiparty" };

const scaleAnchors = [
  ["~10", "Politiken motverkar aktivt dimensionens mål som bärande linje"],
  ["~30", "Motverkar målet i väsentliga delar, eller målet saknas i partiets program"],
  ["~50", "Blandad eller neutral förväntad effekt"],
  ["~70", "Målet är uttalad prioritet med konkret politik"],
  ["~90", "Målet är partiets bärande prioritet med omfattande, konkret program"],
] as const;

const eLevels = [
  ["1.0", "Statsråd under någon av de två senaste mandatperioderna"],
  ["0.7", "Statsråd inom 12 år, men inte de två senaste mandatperioderna"],
  ["0.5", "Statsråd inom 20 år"],
  ["0.3", "Formaliserat regeringssamarbete utan statsråd (t.ex. samarbetsavtal)"],
  ["0.1", "Inget av ovanstående"],
] as const;

const tLevels = [
  ["1.0", "Lett regering"],
  ["0.8", "Koalitionspart med statsråd"],
  ["0.6", "Avtalspart med dokumenterat programgenomslag (t.ex. Tidöavtalet, januariavtalet)"],
  ["0.4", "Återkommande budgetuppgörelser med regering"],
  ["0.2", "Inget formaliserat genomslag"],
] as const;

function RubricTable({ caption, rows }: { caption: string; rows: readonly (readonly [string, string])[] }) {
  return (
    <table className="mt-3 w-full border-collapse text-sm">
      <caption className="sr-only">{caption}</caption>
      <tbody>
        {rows.map(([level, criterion]) => (
          <tr key={level} className="border-b border-rule">
            <td className="w-14 py-2 pr-4 align-top font-mono font-semibold tabular-nums">{level}</td>
            <td className="py-2 text-ink-soft">{criterion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Formula({ children }: { children: React.ReactNode }) {
  return (
    <p className="my-4 border-l-2 border-stamp bg-card px-4 py-3 font-mono text-sm">{children}</p>
  );
}

function SectionHeading({ no, children }: { no: string; children: React.ReactNode }) {
  return (
    <h2 className="mt-16 flex items-baseline gap-4 border-b border-ink pb-3 text-2xl font-black tracking-tight">
      <span className="font-mono text-sm font-normal text-stamp">§{no}</span>
      {children}
    </h2>
  );
}

export default function Metodik() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="font-mono text-[11px] tracking-[0.35em] text-ink-faint uppercase">
        Metodbilaga · bedömningsprotokoll godkänt {dataset.assessmentDate}
      </p>
      <h1 className="mt-4 text-5xl font-black tracking-tight">Metodik</h1>
      <p className="mt-4 max-w-xl text-lg font-light text-ink-soft italic">
        Varje siffra på denna sajt går att följa hela vägen ned: formel, vikt, poäng, motivering
        och källa. Inget värde är handjusterat.
      </p>

      <SectionHeading no="1">Varför en viktad modell?</SectionHeading>
      <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
        <p>
          Ingen etisk teori är bevisad, och rimliga människor är varaktigt oeniga om vilken som är
          rätt. Forskningen om moralisk osäkerhet (MacAskill, Bykvist &amp; Ord, <i>Moral
          Uncertainty</i>, 2020) visar att en rationell aktör då bör behandla teorierna som en
          viktad portfölj i stället för att satsa allt på en. Varje dimension nedan representerar
          en seriöst försvarad etisk position; vikterna representerar hur mycket du litar på den.
          Därför är reglagen inte en gimmick — de är metodens ärligaste del.
        </p>
      </div>

      <SectionHeading no="2">Formeln</SectionHeading>
      <Formula>politikpoäng = Σ (vikt × dimensionspoäng)</Formula>
      <Formula>slutpoäng = politikpoäng × (1 − g + g × genomförbarhetsfaktor)</Formula>
      <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
        <p>
          Vikterna normaliseras att summera till 1. Default är likaviktning (1/6 per dimension) —
          en &quot;indifferensprior&quot; som inte tar ställning mellan teorierna — och fullt
          genomförbarhetsgenomslag (g&nbsp;=&nbsp;1). Genomförbarheten är en multiplikator, inte
          en dimension: den är ingen värdering utan en sannolikhet, och sannolikheter
          multipliceras. Varje partirad på förstasidan kan vecklas ut till sin fullständiga
          beräkning, steg för steg.
        </p>
      </div>

      <SectionHeading no="3">Skalankare för dimensionspoäng</SectionHeading>
      <p className="mt-4 leading-relaxed text-ink-soft">
        Dimensionspoäng (0–100) sätts mot fasta ankare, alltid med motivering och källa per poäng.
        Poängen är ankarkalibrerade kurerade bedömningar av partiernas offentliga material — inte
        mätningar. Det är en erkänd v1-begränsning som redovisas öppet; en finare nedbrytning per
        dimension är en dokumenterad v1.1-förbättring.
      </p>
      <RubricTable caption="Skalankare för dimensionspoäng" rows={scaleAnchors} />

      <SectionHeading no="4">Genomförbarhetsrubriken</SectionHeading>
      <p className="mt-4 leading-relaxed text-ink-soft">
        Genomförbarheten är en sannolikhetsskattning och beräknas därför mekaniskt ur
        dokumenterbara fakta — den tycks inte. Två steg:
      </p>
      <Formula>raw = 0.45 × E + 0.25 × P + 0.30 × T</Formula>
      <h3 className="mt-8 font-mono text-xs tracking-[0.25em] text-stamp uppercase">
        E — Regeringsvana
      </h3>
      <RubricTable caption="Nivåer för regeringsvana" rows={eLevels} />
      <h3 className="mt-8 font-mono text-xs tracking-[0.25em] text-stamp uppercase">
        P — Parlamentarisk tyngd
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        Partiets mandatandel i senaste riksdagsvalet, normaliserad mot det största partiet
        (största parti = 1.0).
      </p>
      <h3 className="mt-8 font-mono text-xs tracking-[0.25em] text-stamp uppercase">
        T — Genomslagshistorik senaste 12 åren
      </h3>
      <RubricTable caption="Nivåer för genomslagshistorik" rows={tLevels} />
      <h3 className="mt-8 font-mono text-xs tracking-[0.25em] text-stamp uppercase">
        Koalitionsgolv
      </h3>
      <Formula>faktor = 0.3 + 0.7 × raw</Formula>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        Varje riksdagsparti har en realistisk koalitionsväg till inflytande; en faktor nära noll
        skulle påstå att partiets politik är praktiskt omöjlig, vilket är empiriskt falskt i ett
        proportionellt flerpartisystem. Golvet hindrar också att genomförbarheten ensam dominerar
        modellen — utan golv skulle multiplikatorn väga tyngre än samtliga värdedimensioner
        tillsammans och göra viktreglagen kosmetiska. Varje partis E/P/T-klassning redovisas med
        källa under §7 nedan. Inga betyg sätts på namngivna personer.
      </p>

      <SectionHeading no="5">Kända begränsningar</SectionHeading>
      <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
        <p>
          Arrows omöjlighetsteorem (1951) visar att ingen aggregeringsmetod uppfyller alla rimliga
          rättvisekrav samtidigt; valet av viktad summa är ett värdeval i sig. Vi har också
          medvetet utelämnat en dimension för social sammanhållning/tillit i v1 — tillit kan ses
          som mekanism för välbefinnande snarare än egenvärde, men det är ett vägval som går att
          ifrågasätta. Poängen är kurerade bedömningar av partiernas offentliga material, inte
          mätningar; varje siffra redovisas nedan med motivering och källa så att du kan göra en
          annan bedömning.
        </p>
      </div>

      <SectionHeading no="6">Dimensionerna</SectionHeading>
      <div className="mt-6 grid gap-px border border-rule bg-rule sm:grid-cols-2">
        {dataset.dimensions.map((d, i) => (
          <article key={d.id} className="bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.25em] text-stamp uppercase">
              Dimension {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-lg font-bold tracking-tight">{d.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d.shortDescription}</p>
            <p className="mt-3 text-xs leading-relaxed text-ink-faint">
              <b className="text-ink-soft">Förankring:</b> {d.grounding}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-ink-faint">
              <b className="text-ink-soft">Mäter:</b> {d.measures}
            </p>
          </article>
        ))}
      </div>

      <SectionHeading no="7">Alla poäng, motiveringar och källor</SectionHeading>
      {dataset.parties.map((p) => {
        const color = displayColor(p.color);
        return (
          <article key={p.id} className="mt-10">
            <h3 className="flex items-baseline gap-3 border-b-2 pb-2 text-2xl font-black tracking-tight" style={{ borderColor: color }}>
              {p.name}
              <span className="font-mono text-sm font-normal text-ink-faint">{p.abbreviation}</span>
            </h3>
            <dl className="mt-4 space-y-4">
              {dataset.dimensions.map((d) => {
                const entry = p.scores[d.id];
                return (
                  <div key={d.id} className="border border-rule bg-card p-4">
                    <dt className="flex items-baseline justify-between gap-4 text-sm font-bold">
                      <span>{d.name}</span>
                      <span className="font-mono tabular-nums">{entry.score}<span className="font-normal text-ink-faint">/100</span></span>
                    </dt>
                    <div aria-hidden className="mt-2 h-1 w-full bg-rule">
                      <div className="h-1" style={{ width: `${entry.score}%`, backgroundColor: color }} />
                    </div>
                    <dd className="mt-3 text-sm leading-relaxed text-ink-soft">{entry.motivation}</dd>
                    <dd className="mt-2 font-mono text-[11px]">
                      {entry.sources.map((s) => (
                        <a
                          key={s.url}
                          href={s.url}
                          className="mr-4 text-ink-faint underline decoration-rule-strong underline-offset-2 hover:text-stamp"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {s.title} ↗
                        </a>
                      ))}
                    </dd>
                  </div>
                );
              })}
              <div className="border border-ink bg-card p-4">
                <dt className="flex items-baseline justify-between gap-4 text-sm font-bold">
                  <span>
                    Genomförbarhetsfaktor{" "}
                    <span className="font-mono text-[11px] font-normal text-ink-faint">
                      enligt rubriken i §4
                    </span>
                  </span>
                  <span className="font-mono tabular-nums">{fmt(p.feasibility.factor, 2)}</span>
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{p.feasibility.motivation}</dd>
                <dd className="mt-2 font-mono text-[11px]">
                  {p.feasibility.sources.map((s) => (
                    <a
                      key={s.url}
                      href={s.url}
                      className="mr-4 text-ink-faint underline decoration-rule-strong underline-offset-2 hover:text-stamp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s.title} ↗
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </article>
        );
      })}

      <p className="mt-16 border-t border-ink pt-6 font-mono text-[11px] leading-relaxed text-ink-faint">
        ÄNDRINGSREGEL: värden ändras endast via protokolländring eller ändrat källäge, med daterad
        rad i ändringsloggen. Projektägarens roll är metodgranskning — aldrig värdekalibrering.
      </p>
    </main>
  );
}
