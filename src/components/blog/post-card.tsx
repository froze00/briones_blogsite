"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, CalendarRange } from "lucide-react";
import type { JournalPost } from "@/lib/blog-data";

type Props = {
  post: JournalPost;
  index: number;
  onOpen: (slug: string) => void;
};

export function PostCard({ post, index, onOpen }: Props) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      onClick={() => onOpen(post.slug)}
      className="group flex h-full flex-col rounded-2xl border border-border bg-paper p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-caramel/50 hover:shadow-[0_18px_40px_-22px_rgba(36,29,23,0.35)]"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-paper">
          Week {String(post.week).padStart(2, "0")}
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft">
          <Clock className="h-3.5 w-3.5 text-caramel" />
          {post.totalHours}
        </span>
      </div>

      <div className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-caramel">
        {post.theme}
      </div>
      <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-ink transition-colors group-hover:text-caramel">
        {post.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
        {post.excerpt}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-ink-soft"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="inline-flex items-center gap-1.5 text-xs text-ink-soft">
          <CalendarRange className="h-3.5 w-3.5 text-caramel" />
          {post.dateRange}
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-caramel">
          Read entry
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </motion.button>
  );
}
