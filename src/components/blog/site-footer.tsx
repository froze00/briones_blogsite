import { Coffee } from "lucide-react";
import { intern } from "@/lib/blog-data";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-paper">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-caramel text-paper">
              <Coffee className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="font-serif text-sm font-semibold text-ink">
                The Dev Journal
              </div>
              <div className="text-xs text-ink-soft">
                {intern.name} · {intern.position}
              </div>
            </div>
          </div>

          <div className="text-left text-xs text-ink-soft sm:text-right">
            <div>
              {intern.company} · {intern.office}
            </div>
            <div className="mt-0.5">
              {intern.school} — OJT Accomplishment Reports
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-5 text-center text-[11px] uppercase tracking-[0.16em] text-ink-soft">
          © 2026 {intern.name} · Built during OJT at {intern.company}
        </div>
      </div>
    </footer>
  );
}
