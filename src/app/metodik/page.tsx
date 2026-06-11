import type { Metadata } from "next";
import { dataset } from "@/data/dataset";

export const metadata: Metadata = { title: "Metodik — Optiparty" };

export default function Metodik() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-black">Metodik</h1>

      <section className="mt-8 space-y-4 text-zinc-300">
        <h2 className="text-xl font-bold text-zinc-100">Varför en viktad modell?</h2>
        <p>
          Ingen etisk teori är bevisad, och rimliga människor är varaktigt oeniga om vilken som är
          rätt. Forskningen om moralisk osäkerhet (MacAskill, Bykvist &amp; Ord, <i>Moral
          Uncertainty</i>, 2020) visar att en rationell aktör då bör behandla teorierna som en
          viktad portfölj i stället för att satsa allt på en. Varje dimension nedan representerar
          en seriöst försvarad etisk position; vikterna representerar hur mycket du litar på den.
          Därför är reglagen inte en gimmick — de är metodens ärligaste del.
        </p>
        <h2 className="text-xl font-bold text-zinc-100">Formeln</h2>
        <p className="font-mono text-sm">
          politikpoäng = Σ (vikt × dimensionspoäng) · slutpoäng = politikpoäng × (1 − g + g × genomförbarhet)
        </p>
        <p>
          Vikterna normaliseras att summera till 1. Default är likaviktning (1/6 per dimension) —
          en &quot;indifferensprior&quot; som inte tar ställning mellan teorierna — och fullt
          genomförbarhetsgenomslag (g&nbsp;=&nbsp;1). Genomförbarheten är en multiplikator, inte en
          dimension: den är ingen värdering utan en sannolikhet, och sannolikheter multipliceras.
          Den beräknas på partinivå enligt en mekanisk rubrik: regeringsvana, parlamentarisk tyngd
          och genomslagshistorik vägs samman (0.45/0.25/0.30) och skalas med ett koalitionsgolv på
          0.3, eftersom varje riksdagsparti har en realistisk koalitionsväg till inflytande. Inga
          betyg sätts på namngivna personer.
        </p>
        <h2 className="text-xl font-bold text-zinc-100">Kända begränsningar</h2>
        <p>
          Arrows omöjlighetsteorem (1951) visar att ingen aggregeringsmetod uppfyller alla rimliga
          rättvisekrav samtidigt; valet av viktad summa är ett värdeval i sig. Vi har också medvetet
          utelämnat en dimension för social sammanhållning/tillit i v1 — tillit kan ses som mekanism
          för välbefinnande snarare än egenvärde, men det är ett vägval som går att ifrågasätta.
          Poängen är kurerade bedömningar av partiernas offentliga material, inte mätningar; varje
          siffra redovisas nedan med motivering och källa så att du kan göra en annan bedömning.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-black">Dimensionerna</h2>
        {dataset.dimensions.map((d) => (
          <article key={d.id} className="mt-6 rounded border border-zinc-800 bg-zinc-900 p-5">
            <h3 className="font-bold">{d.name}</h3>
            <p className="mt-1 text-sm text-zinc-300">{d.shortDescription}</p>
            <p className="mt-2 text-xs text-zinc-500"><b>Förankring:</b> {d.grounding}</p>
            <p className="mt-1 text-xs text-zinc-500"><b>Mäter:</b> {d.measures}</p>
          </article>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-black">Alla poäng, motiveringar och källor</h2>
        {dataset.parties.map((p) => (
          <article key={p.id} className="mt-8">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <span aria-hidden className="h-3 w-3 rounded-full" style={{ backgroundColor: p.color }} />
              {p.name}
            </h3>
            <dl className="mt-3 space-y-3">
              {dataset.dimensions.map((d) => {
                const entry = p.scores[d.id];
                return (
                  <div key={d.id} className="rounded border border-zinc-800 p-4">
                    <dt className="flex justify-between text-sm font-bold">
                      <span>{d.name}</span>
                      <span className="font-mono">{entry.score}/100</span>
                    </dt>
                    <dd className="mt-1 text-sm text-zinc-300">{entry.motivation}</dd>
                    <dd className="mt-1 text-xs">
                      {entry.sources.map((s) => (
                        <a key={s.url} href={s.url} className="mr-3 text-zinc-500 underline hover:text-zinc-300">
                          {s.title}
                        </a>
                      ))}
                    </dd>
                  </div>
                );
              })}
              <div className="rounded border border-zinc-700 bg-zinc-900 p-4">
                <dt className="flex justify-between text-sm font-bold">
                  <span>Genomförbarhet</span>
                  <span className="font-mono">{p.feasibility.factor.toFixed(2)}</span>
                </dt>
                <dd className="mt-1 text-sm text-zinc-300">{p.feasibility.motivation}</dd>
                <dd className="mt-1 text-xs">
                  {p.feasibility.sources.map((s) => (
                    <a key={s.url} href={s.url} className="mr-3 text-zinc-500 underline hover:text-zinc-300">
                      {s.title}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </section>
    </main>
  );
}
