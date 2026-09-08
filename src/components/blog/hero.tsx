"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, CalendarDays } from "lucide-react";
import { intern, stats } from "@/lib/blog-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="paper-grain absolute inset-0 opacity-60" aria-hidden />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-caramel/10 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-caramel/40 bg-caramel/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-caramel"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-caramel" />
          Weekly Accomplishment Journal
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
        >
          A trainee's field notes from building the web, one week at a time.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft"
        >
          Hi, I'm <span className="font-semibold text-ink">{intern.name}</span> — a{" "}
          {intern.position.toLowerCase()} at {intern.company}. This journal records
          what I learned, built, and broke during my on-the-job training, straight
          from my weekly accomplishment reports.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft"
        >
          <span className="inline-flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-caramel" />
            {intern.company}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-caramel" />
            {intern.office}
          </span>
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-caramel" />
            June – July 2026
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3"
        >
          <Stat label="Weeks logged" value={String(stats.weeksDocumented)} />
          <Stat label="Projects built" value={stats.projectsBuilt} />
          <Stat label="Required hours" value={String(stats.requiredHours)} />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-paper px-5 py-5">
      <div className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
        {value}
      </div>
      <div className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-soft">
        {label}
      </div>
    </div>
  );
}
