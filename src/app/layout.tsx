import type { Metadata } from "next";
import Link from "next/link";
import { dataset } from "@/data/dataset";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optiparty — Sveriges optimala parti",
  description:
    "Ett konst- och metodprojekt som räknar fram Sveriges matematiskt optimala parti utifrån en öppet redovisad värdemodell.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased flex flex-col">
        <header className="border-b border-zinc-800">
          <nav className="mx-auto flex max-w-4xl items-baseline gap-6 px-4 py-4">
            <Link href="/" className="font-bold tracking-widest uppercase">Optiparty</Link>
            <Link href="/metodik/" className="text-sm text-zinc-400 hover:text-zinc-100">Metodik</Link>
            <Link href="/om/" className="text-sm text-zinc-400 hover:text-zinc-100">Om</Link>
          </nav>
        </header>
        <div className="flex-1">{children}</div>
        <footer className="border-t border-zinc-800 px-4 py-6 text-center text-xs text-zinc-500">
          Bedömning per {dataset.assessmentDate}. Optiparty är ett konst- och metodprojekt —
          läs <Link href="/metodik/" className="underline">metodiken</Link> innan du blir arg.
        </footer>
      </body>
    </html>
  );
}
