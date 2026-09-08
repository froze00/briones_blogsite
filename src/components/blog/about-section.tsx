"use client";

import { GraduationCap, UserCog, Building2, Hourglass } from "lucide-react";
import { intern, stats } from "@/lib/blog-data";

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border bg-ink text-paper">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-caramel-soft">
              About this journal
            </div>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              On-the-job training, documented.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-paper/75">
              This blog is a personal record of my on-the-job training (OJT) as a{" "}
              <span className="text-paper">{intern.position}</span> at{" "}
              <span className="text-paper">{intern.company}</span>. Every entry is
              drawn directly from my weekly accomplishment reports — the same ones I
              submit to my OJT coordinator — so what you read here is exactly what I
              learned and built each week.
            </p>
            <p className="mt-4 text-base leading-relaxed text-paper/75">
              The journey started with raw HTML and semantic structure, moved into
              the world of CSS and the cascade, and is now deep into responsive
              design and modern layout. The goal is simple: turn theory into things
              that actually run in a browser.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-paper/15 bg-paper/15">
            <InfoRow icon={<Building2 className="h-4 w-4" />} label="Company" value={intern.company} />
            <InfoRow icon={<GraduationCap className="h-4 w-4" />} label="School" value={intern.school} />
            <InfoRow icon={<UserCog className="h-4 w-4" />} label="OJT Coordinator" value={intern.coordinator} />
            <InfoRow
              icon={<Hourglass className="h-4 w-4" />}
              label="Hours remaining"
              value={`${stats.hoursRemaining} / ${intern.requiredHours}h required`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 bg-ink px-5 py-4">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-caramel text-ink">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-[0.16em] text-paper/55">
          {label}
        </div>
        <div className="mt-0.5 text-sm font-medium text-paper">{value}</div>
      </div>
    </div>
  );
}
