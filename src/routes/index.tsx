import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import heroVideo from "@/assets/hero-landscape.mp4.asset.json";
import { ArrowUpRight, Plus } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Logo() {
  return (
    <div className="flex items-center gap-2 text-sm font-medium tracking-tight">
      <div className="grid h-5 w-5 grid-cols-3 grid-rows-3 gap-[2px]">
        {[1, 1, 1, 1, 0, 1, 1, 1, 1].map((v, i) => (
          <div key={i} className={v ? "bg-foreground" : "bg-transparent"} />
        ))}
      </div>
      <span className="text-base">VORA</span>
    </div>
  );
}

function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between rounded-full border border-border bg-background/60 px-5 py-2.5 backdrop-blur-xl">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {["Product", "Corpus", "Pricing", "Docs"].map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              {n}
            </a>
          ))}
        </nav>
        <a
          href="#demo"
          className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-xs font-medium text-background transition-transform hover:scale-[1.03]"
        >
          Request access <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </motion.header>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto max-w-[1200px] px-4 pt-28 md:pt-32">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
        <div className="grid min-h-[620px] grid-cols-1 md:grid-cols-[1fr_1.3fr]">
          {/* Left copy */}
          <div className="relative flex flex-col justify-between p-8 md:p-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-between"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                ◍ v1.0 · alpha
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-blink" />
                live
              </span>
            </motion.div>

            <div className="py-12">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-balance text-[44px] font-medium leading-[1.02] tracking-[-0.03em] md:text-[56px]"
              >
                Legal reasoning,
                <br />
                <span className="text-muted-foreground">grounded in precedent.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground"
              >
                VORA is a retrieval-augmented legal assistant trained on{" "}
                <span className="text-foreground">40,000+ Supreme Court judgments</span>.
                Find similar cases, formulate arguments, cite real precedent.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-3"
            >
              <a
                href="#demo"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground py-2.5 pl-5 pr-2 text-xs font-medium text-background transition-transform hover:scale-[1.03]"
              >
                Try the demo
                <span className="grid h-7 w-7 place-items-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-90">
                  <Plus className="h-3.5 w-3.5" />
                </span>
              </a>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                no card required
              </span>
            </motion.div>
          </div>

          {/* Right video */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative min-h-[320px] overflow-hidden border-t border-border md:border-l md:border-t-0"
          >
            <video
              src={heroVideo.url}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 ascii-overlay" />
            <div className="absolute inset-0 scanlines pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/10 to-background/40" />

            <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-widest text-foreground/70">
              ◍ corpus.live
            </div>
            <div className="absolute right-5 top-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-blink" />
              indexing
            </div>
            <div className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-widest text-foreground/70">
              40,213 judgments
            </div>
            <div className="absolute bottom-5 right-5 font-mono text-[10px] uppercase tracking-widest text-foreground/70">
              p50 24ms · p99 88ms
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) =>
    v.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }),
  );
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 2, ease: [0.22, 1, 0.36, 1] });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, mv, rounded]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function AnimatedBar({ value, delay = 0 }: { value: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref} className="h-1 w-full overflow-hidden bg-border">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
        className="h-full bg-foreground"
      />
    </div>
  );
}

function Sparkline() {
  const data = [14, 22, 18, 30, 26, 40, 34, 48, 42, 56, 50, 62, 58, 70, 66, 80, 74, 92, 86, 100];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref} className="mt-6 flex h-16 items-end gap-1">
      {data.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={inView ? { height: `${h}%` } : { height: 0 }}
          transition={{ duration: 0.6, delay: i * 0.035, ease: "easeOut" }}
          className={i > 14 ? "flex-1 bg-foreground" : "flex-1 bg-border-strong"}
        />
      ))}
    </div>
  );
}

function CorpusAnalytics() {
  const stats = [
    { to: 40213, suffix: "", l: "Supreme Court judgments" },
    { to: 75, suffix: " yrs", l: "Of jurisprudence (1950–2025)" },
    { to: 14.6, suffix: "M", l: "Indexed paragraphs", decimals: 1 },
    { to: 2.1, suffix: "B", l: "Embedded tokens", decimals: 1 },
  ];

  const live = [
    { to: 2418, l: "Queries answered" },
    { to: 186, l: "Active researchers" },
    { to: 9402, l: "Citations surfaced" },
    { to: 812, l: "Briefs drafted" },
  ];

  return (
    <section id="corpus" className="mx-auto max-w-[1200px] px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-16 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            / 01 — the corpus
          </div>
          <h2 className="max-w-2xl text-balance text-3xl font-medium tracking-[-0.02em] md:text-5xl">
            The depth behind every answer.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Every metric below is live from the production retrieval pipeline.
        </p>
      </motion.div>

      {/* Big stats */}
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-surface p-8"
          >
            <div className="text-4xl font-medium tracking-[-0.03em] md:text-5xl">
              <Counter to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
            </div>
            <div className="mt-3 text-[11px] uppercase tracking-widest text-muted-foreground">
              {s.l}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Performance + Live + Coverage */}
      <div className="mt-px grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
        {/* retrieval performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-surface p-8"
        >
          <div className="mb-6 flex items-center justify-between">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Retrieval performance
            </div>
            <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-blink" />
          </div>
          <div className="space-y-5">
            {[
              { k: "p50 latency", v: "24 ms", bar: 18 },
              { k: "p99 latency", v: "88 ms", bar: 38 },
              { k: "Top-5 recall", v: "94.2%", bar: 94 },
              { k: "Citation precision", v: "98.7%", bar: 98 },
            ].map((row, i) => (
              <div key={row.k}>
                <div className="mb-2 flex justify-between text-xs">
                  <span className="text-muted-foreground">{row.k}</span>
                  <span className="text-foreground font-mono">{row.v}</span>
                </div>
                <AnimatedBar value={row.bar} delay={i * 0.15} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* live activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-surface p-8"
        >
          <div className="mb-6 flex items-center justify-between">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Live activity · last 24h
            </div>
            <span className="font-mono text-[10px] text-foreground">↑ 12%</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {live.map((s) => (
              <div key={s.l} className="rounded-md border border-border bg-background p-4">
                <div className="text-2xl font-medium tracking-tight">
                  <Counter to={s.to} />
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
          <Sparkline />
        </motion.div>

        {/* coverage by domain */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-surface p-8"
        >
          <div className="mb-6 text-[10px] uppercase tracking-widest text-muted-foreground">
            Coverage by legal domain
          </div>
          <div className="space-y-4">
            {[
              { k: "Constitutional", v: 32 },
              { k: "Criminal", v: 24 },
              { k: "Civil & Tort", v: 18 },
              { k: "Commercial", v: 14 },
              { k: "Tax & Revenue", v: 8 },
              { k: "Labour & Service", v: 4 },
            ].map((row, i) => (
              <div key={row.k} className="flex items-center gap-3">
                <div className="w-32 text-xs text-muted-foreground">{row.k}</div>
                <div className="flex-1">
                  <AnimatedBar value={row.v * 3} delay={i * 0.1} />
                </div>
                <div className="w-10 text-right text-xs font-mono">{row.v}%</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center"
      >
        <p className="max-w-md text-sm text-muted-foreground">
          Built for lawyers, legal researchers, and anyone seeking advice
          backed by real case law.
        </p>
        <a
          href="#demo"
          className="group inline-flex items-center gap-3 rounded-full border border-border-strong py-2.5 pl-5 pr-2 text-xs font-medium text-foreground transition-colors hover:bg-surface-elevated"
        >
          Try VORA free
          <span className="grid h-7 w-7 place-items-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-45">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </a>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 px-4 py-8 md:flex-row md:items-center">
        <Logo />
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          © 2026 VORA · grounded in precedent
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <CorpusAnalytics />
      <Footer />
    </main>
  );
}
