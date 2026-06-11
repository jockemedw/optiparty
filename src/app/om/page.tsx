import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Om — Optiparty" };

export default function Om() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12 space-y-4 text-zinc-300">
      <h1 className="text-3xl font-black text-zinc-100">Om Optiparty</h1>
      <p>
        Optiparty är ett konst- och metodprojekt. Sajten förkunnar med största självsäkerhet vilket
        svenskt riksdagsparti som är &quot;matematiskt optimalt&quot; — och menar det, så långt en
        öppet redovisad modell någonsin kan mena något.
      </p>
      <p>
        Tvärsäkerheten är en del av verket. Bakom låset på förstasidan finns poängen: det optimala
        partiet beror på vad du värderar. Modellen är byggd på etablerad etisk teori och
        välbefinnandeforskning, varje siffra har motivering och källa, och varje vikt går att dra
        i. Den som låser upp reglagen upptäcker att domen är en funktion av ens egna värderingar —
        vilket är exakt vad politik är.
      </p>
      <p>
        Allt underlag finns på <Link href="/metodik/" className="underline">metodiksidan</Link>.
        Projektet är byggt av Joakim Weimar med AI-assistans. Det är inte en valkompass, inte
        partipolitisk reklam och inte en sanningsmaskin — det är en spegel med matematik i.
      </p>
    </main>
  );
}
