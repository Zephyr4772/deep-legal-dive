import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/hero-landscape.mp4.asset.json";
import {
  ArrowUpRight,
  Plus,
  Scale,
  BookOpen,
  Search,
  Network,
  ShieldCheck,
  Gavel,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Corpus", href: "#corpus" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <div className="flex items-center gap-2 text-sm font-medium tracking-wide">
      <div className="grid h-6 w-6 grid-cols-3 grid-rows-3 gap-[2px]">
        {[1, 1, 1, 1, 0, 1, 1, 1, 1].map((v, i) => (
          <div
            key={i}
            className={v ? "bg-foreground" : "bg-accent"}
            style={{ borderRadius: 1 }}
          />
        ))}
      </div>
      <span>VORA</span>
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between rounded-md border border-border bg-background/70 px-4 py-3 backdrop-blur-md">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              className={
                "rounded-sm px-3 py-1.5 text-xs uppercase tracking-wider transition-colors " +
                (i === 0
                  ? "bg-surface-elevated text-foreground"
                  : "text-muted-foreground hover:text-foreground")
              }
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-sm border border-border bg-surface px-3 py-1.5 text-xs uppercase tracking-wider text-foreground hover:border-border-strong md:flex"
        >
          Request access <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-[1400px] px-4 pt-28 md:pt-32"
    >
      <div className="relative overflow-hidden rounded-md border border-border bg-surface">
        <div className="grid min-h-[640px] grid-cols-1 md:grid-cols-[1fr_1.4fr]">
          {/* Left copy */}
          <div className="relative flex flex-col justify-between p-8 md:p-10">
            <div className="flex items-center justify-between">
              <Logo />
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                v1.0 · alpha
              </span>
            </div>

            <div className="py-10">
              <h1 className="text-balance text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">
                Legal reasoning,
                <br />
                grounded in precedent.
              </h1>
            </div>

            <div className="space-y-6">
              <p className="max-w-sm border-l border-border pl-4 text-sm leading-relaxed text-muted-foreground">
                VORA is a retrieval-augmented legal assistant trained on{" "}
                <span className="text-foreground">40,000+ Supreme Court judgments</span>
                . Find similar cases, formulate arguments, and cite real
                precedent — backed by decades of jurisprudence.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-sm border border-border bg-surface-elevated pl-4 pr-2 py-2 text-xs uppercase tracking-wider hover:border-border-strong"
                >
                  Try free demo
                  <span className="grid h-7 w-7 place-items-center rounded-sm border border-border bg-background transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                </a>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  no card required
                </span>
              </div>
            </div>
          </div>

          {/* Right video */}
          <div className="relative min-h-[320px] overflow-hidden border-t border-border md:border-l md:border-t-0">
            <video
              src={heroVideo.url}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* ASCII dither */}
            <div className="absolute inset-0 ascii-overlay" />
            <div className="absolute inset-0 scanlines pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-surface/40" />

            {/* HUD corner labels */}
            <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest text-foreground/70">
              ◍ corpus.live
            </div>
            <div className="absolute right-4 top-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-blink" />
              indexing
            </div>
            <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-foreground/70">
              40,213 judgments
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-foreground/70">
              lat 24ms · p99 88ms
            </div>
          </div>
        </div>

        {/* trusted partners marquee */}
        <div className="border-t border-border bg-background/60">
          <div className="flex items-center gap-8 py-6">
            <div className="shrink-0 px-8 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Trusted across firms & faculties
            </div>
            <div className="overflow-hidden">
              <div className="flex w-max animate-marquee items-center gap-12 text-sm font-medium text-muted-foreground">
                {[
                  "Ephemeral & Co.",
                  "AlphaWave Legal",
                  "Boltshift LLP",
                  "Clandestine Law",
                  "Northbridge Chambers",
                  "Veridian Partners",
                ]
                  .concat([
                    "Ephemeral & Co.",
                    "AlphaWave Legal",
                    "Boltshift LLP",
                    "Clandestine Law",
                    "Northbridge Chambers",
                    "Veridian Partners",
                  ])
                  .map((n, i) => (
                    <span key={i} className="whitespace-nowrap">
                      ◇ {n}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  kicker,
}: {
  eyebrow: string;
  title: string;
  kicker?: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          | {eyebrow}
        </div>
        <h2 className="max-w-2xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
          {title}
        </h2>
      </div>
      {kicker && (
        <p className="max-w-sm text-sm text-muted-foreground">{kicker}</p>
      )}
    </div>
  );
}

function Capabilities() {
  const cards = [
    {
      icon: Search,
      title: "Semantic case retrieval",
      body: "Ask in plain language. VORA matches the substance of your question against 40k+ judgments — not keywords.",
    },
    {
      icon: Network,
      title: "Citation graphs",
      body: "Trace how a ruling cites, distinguishes, or overturns prior decisions across decades of jurisprudence.",
    },
    {
      icon: Gavel,
      title: "Argument scaffolds",
      body: "Generate structured outlines for briefs, with every claim grounded in retrievable precedent.",
    },
    {
      icon: ShieldCheck,
      title: "Verifiable citations",
      body: "Every answer ships with the paragraph-level source. Zero hallucinated citations.",
    },
  ];
  return (
    <section id="capabilities" className="mx-auto max-w-[1400px] px-4 py-24">
      <SectionHeader
        eyebrow="Capabilities"
        title="Built for the way lawyers actually work."
        kicker="From precedent search to argument drafting, VORA assists every step of legal research without ever leaving the source."
      />
      <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
        {cards.map(({ icon: Icon, title, body }) => (
          <div key={title} className="group bg-surface p-8 transition-colors hover:bg-surface-elevated">
            <div className="mb-6 flex items-center justify-between">
              <Icon className="h-5 w-5 text-accent" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                /module
              </span>
            </div>
            <h3 className="mb-2 text-lg font-medium">{title}</h3>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CorpusAnalytics() {
  return (
    <section id="corpus" className="mx-auto max-w-[1400px] px-4 py-24">
      <SectionHeader
        eyebrow="The corpus"
        title="40,213 judgments. 14.6M paragraphs. Decades of binding precedent."
        kicker="Every metric below is live from the production retrieval pipeline."
      />

      {/* big stats row */}
      <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-4">
        {[
          { v: "40,213", l: "Supreme Court judgments" },
          { v: "1950–2025", l: "Years of jurisprudence" },
          { v: "14.6M", l: "Indexed paragraphs" },
          { v: "2.1B", l: "Embedded tokens" },
        ].map((s) => (
          <div key={s.l} className="bg-surface p-8">
            <div className="font-display text-4xl font-medium tracking-tight">
              {s.v}
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground">
              {s.l}
            </div>
          </div>
        ))}
      </div>

      {/* Performance + coverage */}
      <div className="mt-px grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
        {/* retrieval performance */}
        <div className="bg-surface p-8 md:col-span-1">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Retrieval performance
            </div>
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-blink" />
          </div>
          <div className="space-y-5">
            {[
              { k: "p50 latency", v: "24 ms", bar: 18 },
              { k: "p99 latency", v: "88 ms", bar: 38 },
              { k: "Top-5 recall", v: "94.2%", bar: 94 },
              { k: "Citation precision", v: "98.7%", bar: 98 },
            ].map((row) => (
              <div key={row.k}>
                <div className="mb-1 flex justify-between text-xs">
                  <span className="text-muted-foreground">{row.k}</span>
                  <span className="text-foreground">{row.v}</span>
                </div>
                <div className="h-1 w-full bg-border">
                  <div
                    className="h-full bg-accent"
                    style={{ width: `${row.bar}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* live activity */}
        <div className="bg-surface p-8 md:col-span-1">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Live activity · last 24h
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">
              ↑ 12%
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "2,418", l: "Queries answered" },
              { v: "186", l: "Active researchers" },
              { v: "9,402", l: "Citations surfaced" },
              { v: "812", l: "Briefs drafted" },
            ].map((s) => (
              <div key={s.l} className="border border-border bg-background p-4">
                <div className="text-2xl font-medium">{s.v}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          {/* mini sparkline */}
          <div className="mt-6 flex h-16 items-end gap-1">
            {[14, 22, 18, 30, 26, 40, 34, 48, 42, 56, 50, 62, 58, 70, 66, 80, 74, 92, 86, 100].map(
              (h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-border"
                  style={{
                    height: `${h}%`,
                    background:
                      i > 14 ? "var(--color-accent)" : "var(--color-border-strong)",
                  }}
                />
              )
            )}
          </div>
        </div>

        {/* coverage by domain */}
        <div className="bg-surface p-8 md:col-span-1">
          <div className="mb-6 text-[10px] uppercase tracking-widest text-muted-foreground">
            Coverage by legal domain
          </div>
          <div className="space-y-3">
            {[
              { k: "Constitutional", v: 32 },
              { k: "Criminal", v: 24 },
              { k: "Civil & Tort", v: 18 },
              { k: "Commercial", v: 14 },
              { k: "Tax & Revenue", v: 8 },
              { k: "Labour & Service", v: 4 },
            ].map((row) => (
              <div key={row.k} className="flex items-center gap-3">
                <div className="w-32 text-xs text-muted-foreground">{row.k}</div>
                <div className="flex-1 h-2 bg-border">
                  <div
                    className="h-full bg-foreground"
                    style={{ width: `${row.v * 3}%` }}
                  />
                </div>
                <div className="w-10 text-right text-xs">{row.v}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* feature row */}
      <div className="mt-px grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
        {[
          {
            t: "Paragraph-level retrieval",
            b: "Sources are anchored to the exact paragraph of the judgment, never the whole document.",
          },
          {
            t: "Hybrid ranking",
            b: "Dense embeddings + BM25 + legal-domain re-ranker for precision on rare citations.",
          },
          {
            t: "Continuously updated",
            b: "New judgments are ingested, embedded, and indexed within 48 hours of publication.",
          },
        ].map((c) => (
          <div key={c.t} className="bg-surface p-6">
            <div className="mb-2 flex items-center gap-2">
              <Plus className="h-3.5 w-3.5 text-accent" />
              <h4 className="text-sm font-medium">{c.t}</h4>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">{c.b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ManifestoBand() {
  return (
    <section className="relative overflow-hidden border-y border-border">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="absolute inset-0 noise" />
      <div className="relative mx-auto max-w-[1400px] px-4 py-28 text-center">
        <div className="mb-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          | the thesis
        </div>
        <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          A legal AI is only as honest as
          <br />
          <span className="text-muted-foreground">the precedent it stands on.</span>
        </h2>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      t: "Ask your question",
      b: "Plain English. Describe the facts, the dispute, or the precedent you're hunting.",
    },
    {
      n: "02",
      t: "Retrieve from 40k+ rulings",
      b: "Hybrid search ranks the most relevant paragraphs from the Supreme Court corpus.",
    },
    {
      n: "03",
      t: "Synthesise with citations",
      b: "VORA composes an answer where every claim links back to a verified source paragraph.",
    },
    {
      n: "04",
      t: "Verify & export",
      b: "Inspect the cited passages, export a brief outline, or hand it to your team.",
    },
  ];
  return (
    <section id="process" className="mx-auto max-w-[1400px] px-4 py-24">
      <SectionHeader
        eyebrow="How it works"
        title="From question to citable answer in four steps."
      />
      <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="bg-surface p-8">
            <div className="mb-8 font-mono text-xs text-accent">{s.n}</div>
            <h3 className="mb-3 text-base font-medium">{s.t}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">{s.b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      q: "VORA collapsed three days of precedent research into an afternoon. Every citation it returned was real, paragraph-accurate, and worth quoting.",
      a: "Noah Wilson",
      r: "Counsel · Northbridge Chambers",
    },
    {
      q: "It's the first legal AI we've trusted to assist juniors. The grounded citations changed how we vet AI output in the firm entirely.",
      a: "Priya Mehta",
      r: "Partner · Veridian Partners",
    },
    {
      q: "I used VORA to find an obscure 1987 dissent that anchored my entire argument. No keyword search would have surfaced it.",
      a: "Daniel Aoki",
      r: "Advocate · Independent practice",
    },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % quotes.length), 7000);
    return () => clearInterval(id);
  }, [quotes.length]);
  const t = quotes[i];
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-24">
      <div className="overflow-hidden rounded-md border border-border bg-surface">
        <div className="flex items-center justify-between border-b border-border px-8 py-4 text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>| testimonials</span>
          <span>
            {String(i + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr]">
          <div className="relative min-h-[260px] border-b border-border md:border-b-0 md:border-r">
            <div className="absolute inset-0 grid-lines opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Quote className="h-20 w-20 text-accent" />
            </div>
          </div>
          <div className="p-10">
            <p className="text-balance text-xl font-medium leading-snug md:text-2xl">
              “{t.q}”
            </p>
            <div className="mt-8 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">{t.a}</div>
                <div className="text-xs text-muted-foreground">{t.r}</div>
              </div>
              <div className="flex items-center gap-2">
                {quotes.map((_, k) => (
                  <button
                    key={k}
                    onClick={() => setI(k)}
                    aria-label={`testimonial ${k + 1}`}
                    className={
                      "h-2 w-6 transition-colors " +
                      (k === i ? "bg-accent" : "bg-border hover:bg-border-strong")
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Researcher",
      price: "$38",
      period: "/ month",
      tagline: "For students, clerks, and curious citizens.",
      features: [
        "200 grounded queries / month",
        "Full 40k judgment corpus",
        "Paragraph-level citations",
        "Personal workspace",
      ],
      cta: "Start free",
      featured: false,
    },
    {
      name: "Practitioner",
      price: "$179",
      period: "/ month",
      tagline: "For advocates and small chambers.",
      features: [
        "Unlimited grounded queries",
        "Citation graphs & precedent maps",
        "Brief & argument scaffolds",
        "Export to .docx / .pdf",
        "Priority retrieval (sub-50ms p99)",
      ],
      cta: "Request access",
      featured: true,
    },
  ];
  return (
    <section id="pricing" className="mx-auto max-w-[1400px] px-4 py-24">
      <SectionHeader
        eyebrow="Pricing"
        title="Flexible pricing for intelligent counsel."
        kicker="Two simple plans. Cancel anytime. Enterprise & faculty licensing on request."
      />
      <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={
              "relative p-10 " +
              (t.featured ? "bg-surface-elevated" : "bg-surface")
            }
          >
            {t.featured && (
              <div className="absolute right-6 top-6 border border-accent px-2 py-0.5 text-[10px] uppercase tracking-widest text-accent">
                most chosen
              </div>
            )}
            <div className="mb-2 text-[10px] uppercase tracking-widest text-muted-foreground">
              {t.name}
            </div>
            <div className="mb-3 flex items-baseline gap-2">
              <span className="font-display text-5xl font-medium tracking-tight">
                {t.price}
              </span>
              <span className="text-sm text-muted-foreground">{t.period}</span>
            </div>
            <p className="mb-8 max-w-sm text-sm text-muted-foreground">
              {t.tagline}
            </p>
            <ul className="mb-10 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-2 h-1 w-3 shrink-0 bg-accent" />
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={
                "inline-flex items-center gap-3 rounded-sm px-4 py-2.5 text-xs uppercase tracking-wider " +
                (t.featured
                  ? "bg-accent text-accent-foreground hover:opacity-90"
                  : "border border-border bg-background hover:border-border-strong")
              }
            >
              {t.cta}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    {
      q: "How does VORA avoid hallucinated citations?",
      a: "Every answer is composed strictly from passages retrieved from the indexed Supreme Court corpus. The model cannot return a citation that does not exist in the source database — and we surface the underlying paragraph for verification.",
    },
    {
      q: "Which jurisdictions does the 40,000-judgment corpus cover?",
      a: "The current corpus indexes Supreme Court judgments from 1950 to 2025. High Court, tribunal, and international expansions are planned for Q3.",
    },
    {
      q: "Can I trust this output in a real filing?",
      a: "VORA is built to assist research and drafting — not to replace counsel. Every cited paragraph is shown alongside the answer so a qualified lawyer can verify before filing.",
    },
    {
      q: "Is my workspace and query history private?",
      a: "Yes. Queries are encrypted in transit and at rest. We never use private workspace queries to train models.",
    },
    {
      q: "Do you offer faculty or chamber-wide licensing?",
      a: "Yes — write to us via the contact form for academic, chamber, and enterprise pricing.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-24">
      <SectionHeader
        eyebrow="FAQ"
        title="Got questions? We've got grounded answers."
      />
      <div className="overflow-hidden rounded-md border border-border bg-surface">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="border-b border-border last:border-b-0">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left hover:bg-surface-elevated"
              >
                <span className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-medium">{it.q}</span>
                </span>
                <Plus
                  className={
                    "h-4 w-4 shrink-0 transition-transform " +
                    (isOpen ? "rotate-45 text-accent" : "text-muted-foreground")
                  }
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 pl-[3.75rem]">
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {it.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-4 py-24">
      <div
        ref={ref}
        className="relative overflow-hidden rounded-md border border-border bg-surface"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-lines opacity-30" />
          <div
            className="absolute -bottom-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 60%)",
              opacity: 0.25,
            }}
          />
          <div className="absolute inset-0 noise" />
        </div>
        <div className="relative px-6 py-24 text-center">
          <div className="mb-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            ◍ ready when you are
          </div>
          <h2 className="mx-auto max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            Ready to build
            <br />
            smarter arguments<span className="text-accent">.</span>
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@vora.ai"
              className="group inline-flex items-center gap-3 rounded-sm bg-accent pl-5 pr-2 py-2.5 text-xs uppercase tracking-wider text-accent-foreground hover:opacity-90"
            >
              Request access
              <span className="grid h-7 w-7 place-items-center rounded-sm bg-accent-foreground/10">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
            <a
              href="#corpus"
              className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground"
            >
              or explore the corpus →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="mb-4 flex items-center gap-2">
              <Logo />
            </div>
            <a
              href="mailto:hello@vora.ai"
              className="text-base text-foreground hover:text-accent"
            >
              hello@vora.ai
            </a>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              VORA is an AI legal-research assistant. It assists qualified
              counsel — it does not provide legal advice.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 text-xs md:grid-cols-3">
            {[
              { h: "Product", l: ["Capabilities", "Corpus", "Process", "Pricing"] },
              { h: "Company", l: ["About", "Research", "Careers", "Contact"] },
              { h: "Legal", l: ["Privacy", "Terms", "Data ethics"] },
            ].map((col) => (
              <div key={col.h}>
                <div className="mb-4 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {col.h}
                </div>
                <ul className="space-y-2">
                  {col.l.map((x) => (
                    <li key={x}>
                      <a href="#" className="text-foreground/80 hover:text-foreground">
                        {x}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-[10px] uppercase tracking-widest text-muted-foreground md:flex-row md:items-center">
          <span>© 2026 VORA Labs · All rights reserved</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-blink" />
            system operational · 40,213 judgments indexed
          </span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 noise" />
      <Nav />
      <main className="relative">
        <Hero />
        <Capabilities />
        <CorpusAnalytics />
        <ManifestoBand />
        <Process />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
