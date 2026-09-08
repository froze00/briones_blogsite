"use client";

import { PostCard } from "./post-card";
import { posts } from "@/lib/blog-data";

type Props = {
  onOpen: (slug: string) => void;
};

export function EntriesSection({ onOpen }: Props) {
  return (
    <section id="entries" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="flex items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-caramel">
            The Journal
          </div>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Weekly entries
          </h2>
        </div>
        <p className="hidden max-w-xs text-right text-sm text-ink-soft sm:block">
          Each entry is a faithful record of a week's work — what I studied, built,
          and the hours I logged.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard key={post.slug} post={post} index={index} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}
