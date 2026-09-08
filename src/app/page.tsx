"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiteHeader } from "@/components/blog/site-header";
import { Hero } from "@/components/blog/hero";
import { EntriesSection } from "@/components/blog/entries-section";
import { AboutSection } from "@/components/blog/about-section";
import { PostView } from "@/components/blog/post-view";
import { SiteFooter } from "@/components/blog/site-footer";
import { posts } from "@/lib/blog-data";

export default function Home() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const activePost = posts.find((p) => p.slug === activeSlug) ?? null;
  const activeIndex = activePost ? posts.findIndex((p) => p.slug === activePost.slug) : -1;
  const prev = activeIndex > 0 ? posts[activeIndex - 1] : undefined;
  const next =
    activeIndex >= 0 && activeIndex < posts.length - 1
      ? posts[activeIndex + 1]
      : undefined;

  const goHome = useCallback(() => {
    setActiveSlug(null);
  }, []);

  const openPost = useCallback((slug: string) => {
    setActiveSlug(slug);
  }, []);

  // Scroll to top whenever the view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [activeSlug]);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader view={activePost ? "post" : "list"} onHome={goHome} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activePost ? (
            <motion.div
              key={activePost.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <PostView
                post={activePost}
                onBack={goHome}
                onNavigate={openPost}
                prev={prev}
                next={next}
              />
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Hero />
              <EntriesSection onOpen={openPost} />
              <AboutSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <SiteFooter />
    </div>
  );
}
