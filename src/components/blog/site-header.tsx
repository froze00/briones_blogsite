"use client";

import { Coffee, ArrowLeft } from "lucide-react";

type Props = {
  view: "list" | "post";
  onHome: () => void;
};

export function SiteHeader({ view, onHome }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={onHome}
          className="group flex items-center gap-2.5 text-left"
          aria-label="Go to journal home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 bg-caramel text-paper transition-transform duration-300 group-hover:scale-105">
            <Coffee className="h-4 w-4" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base font-semibold tracking-tight text-ink">
              The Dev Journal
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              OJT · Raicom LLC
            </span>
          </span>
        </button>

        {view === "post" ? (
          <button
            onClick={onHome}
            className="group inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:border-caramel hover:text-caramel"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            All entries
          </button>
        ) : (
          <nav className="flex items-center gap-5 text-sm">
            <a
              href="#entries"
              className="link-underline font-medium text-ink-soft transition-colors hover:text-caramel"
            >
              Entries
            </a>
            <a
              href="#about"
              className="link-underline font-medium text-ink-soft transition-colors hover:text-caramel"
            >
              About
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
