import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, IBM_Plex_Mono } from "next/font/google";
import { dataset } from "@/data/dataset";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "Optiparty — bästa tillgängliga parti, framräknat",
  description:
    "Ett konst- och metodprojekt som ur en öppet redovisad värdemodell räknar fram vilket av riksdagens partier som får högst sammanvägd poäng — det bästa tillgängliga, inte det perfekta.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${fraunces.variable} ${plexMono.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper font-serif text-ink antialiased">
        <header className="border-b border-ink">
          <nav aria-label="Huvudnavigering" className="mx-auto flex max-w-5xl items-baseline gap-8 px-5 py-5">
            <Link href="/" className="text-lg font-black tracking-tight">
              Optiparty<span className="text-stamp">.</span>
            </Link>
            <Link
              href="/metodik/"
              className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase transition-colors hover:text-stamp"
            >
              Metodik
            </Link>
            <Link
              href="/om/"
              className="font-mono text-xs tracking-[0.2em] text-ink-soft uppercase transition-colors hover:text-stamp"
            >
              Om
            </Link>
            <span className="ml-auto hidden font-mono text-[10px] tracking-[0.2em] text-ink-faint uppercase sm:inline">
              Dnr 2026:OPT-1
            </span>
          </nav>
        </header>
        <div className="flex-1">{children}</div>
        <footer className="border-t border-ink">
          <div className="mx-auto flex max-w-5xl flex-col gap-1 px-5 py-6 font-mono text-[11px] tracking-wide text-ink-soft">
            <p>BEDÖMNING PER {dataset.assessmentDate} · MODELL V1 · INGA HANDJUSTERADE VÄRDEN</p>
            <p>
              Optiparty är ett konst- och metodprojekt — läs{" "}
              <Link href="/metodik/" className="underline decoration-rule-strong underline-offset-2 transition-colors hover:text-stamp">
                metodiken
              </Link>{" "}
              innan du blir arg.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
