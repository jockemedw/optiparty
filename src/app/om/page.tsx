import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Om — Optiparty" };

export default function Om() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-14">
      <p className="font-mono text-[11px] tracking-[0.35em] text-ink-faint uppercase">
        Förklaring · konst- och metodprojekt
      </p>
      <h1 className="mt-4 text-5xl font-black tracking-tight">Om Optiparty</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
        <p>
          Optiparty är ett konst- och metodprojekt. Sajten förkunnar med största självsäkerhet
          vilket av riksdagens partier som räknas fram till högst sammanvägd poäng — det bästa
          tillgängliga alternativet, inte ett optimalt parti i någon absolut mening. Sajten menar
          det, så långt en öppet redovisad modell någonsin kan mena något.
        </p>
        <p>
          Tvärsäkerheten är en del av verket. Bakom förseglingen på förstasidan finns poängen: det
          optimala partiet beror på vad du värderar. Modellen är byggd på etablerad etisk teori
          och välbefinnandeforskning, varje siffra har motivering och källa, varje beräkning kan
          vecklas ut steg för steg, och varje vikt går att dra i. Den som låser upp reglagen
          upptäcker att domen är en funktion av ens egna värderingar — vilket är exakt vad politik
          är.
        </p>
        <p>
          Allt underlag finns på{" "}
          <Link href="/metodik/" className="underline decoration-rule-strong underline-offset-2 hover:text-stamp">
            metodiksidan
          </Link>
          . Projektet är byggt av Joakim Weimar med AI-assistans. Det är inte en valkompass, inte
          partipolitisk reklam och inte en sanningsmaskin — det är en spegel med matematik i.
        </p>
      </div>
    </main>
  );
}
