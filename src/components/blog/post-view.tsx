"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, CalendarRange, Sparkles } from "lucide-react";
import type { JournalPost } from "@/lib/blog-data";

type Props = {
  post: JournalPost;
  onBack: () => void;
  onNavigate: (slug: string) => void;
  prev?: JournalPost;
  next?: JournalPost;
};

export function PostView({ post, onBack, onNavigate, prev, next }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <button
        onClick={onBack}
        className="group mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-caramel"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to all entries
      </button>

      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="border-b border-border pb-8"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-paper">
            Week {String(post.week).padStart(2, "0")}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft">
            <CalendarRange className="h-3.5 w-3.5 text-caramel" />
            {post.dateRange}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft">
            <Clock className="h-3.5 w-3.5 text-caramel" />
            {post.totalHours}
          </span>
        </div>

        <div className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-caramel">
          {post.theme}
        </div>
        <h1 className="mt-2 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">{post.excerpt}</p>

        <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {post.highlights.map((h) => (
            <div key={h.label} className="bg-paper px-4 py-3.5">
              <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-caramel">
                <Sparkles className="h-3 w-3" />
                {h.label}
              </div>
              <div className="mt-1 text-sm font-semibold text-ink">{h.value}</div>
            </div>
          ))}
        </div>
      </motion.header>

      <div className="mt-10 space-y-8">
        {post.days.map((day, i) => (
          <motion.section
            key={day.date}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="relative pl-6 sm:pl-8"
          >
            <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-caramel bg-paper" />
            <span className="absolute left-[5px] top-5 h-full w-px bg-border" aria-hidden />

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-serif text-xl font-semibold text-ink">
                {day.day}
              </h3>
              <span className="text-sm font-medium text-caramel">{day.date}</span>
            </div>
            <div className="mt-0.5 text-xs uppercase tracking-[0.14em] text-ink-soft">
              {day.time}
            </div>

            <ul className="mt-3 space-y-2.5">
              {day.accomplishments.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-caramel" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-ink-soft"
          >
            #{tag}
          </span>
        ))}
      </div>

      <nav className="mt-10 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
        {prev ? (
          <button
            onClick={() => onNavigate(prev.slug)}
            className="group flex items-center gap-3 rounded-xl border border-border bg-paper p-4 text-left transition-colors hover:border-caramel/50"
          >
            <ArrowLeft className="h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:-translate-x-1 group-hover:text-caramel" />
            <span className="min-w-0">
              <span className="block text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                Previous
              </span>
              <span className="block truncate text-sm font-semibold text-ink group-hover:text-caramel">
                {prev.title}
              </span>
            </span>
          </button>
        ) : (
          <span />
        )}
        {next ? (
          <button
            onClick={() => onNavigate(next.slug)}
            className="group flex items-center justify-end gap-3 rounded-xl border border-border bg-paper p-4 text-right transition-colors hover:border-caramel/50"
          >
            <span className="min-w-0">
              <span className="block text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                Next
              </span>
              <span className="block truncate text-sm font-semibold text-ink group-hover:text-caramel">
                {next.title}
              </span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-caramel" />
          </button>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
