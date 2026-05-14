import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Field notes from Digital Crest practitioners.',
};

const posts = [
  {
    title: 'Threat models engineers actually use',
    summary: 'A pattern for keeping threat models light and tightly coupled to the code.',
    category: 'Application Security',
    readTime: '6 min',
    date: 'Coming soon',
  },
  {
    title: 'Evidence pipelines for SOC 2 Type II',
    summary: 'Wire telemetry into your control library so the audit writes itself.',
    category: 'GRC and Audit',
    readTime: '8 min',
    date: 'Coming soon',
  },
  {
    title: 'Detection as code, without the demo magic',
    summary: 'A grounded look at a detection programme that survives staff turnover.',
    category: 'Security Engineering',
    readTime: '7 min',
    date: 'Coming soon',
  },
  {
    title: 'A landing zone you can defend on day one',
    summary: 'Multi account guardrails and network patterns that scale with you.',
    category: 'Cloud Architecture',
    readTime: '9 min',
    date: 'Coming soon',
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="container-page pt-14 lg:pt-20">
        <p className="eyebrow eyebrow-dot">Insights</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-navy text-balance sm:text-5xl">
          Field notes from the front line.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/70">
          Short, opinionated writing from our practitioners. Patterns that work, grounded in real
          engagements.
        </p>
      </section>

      <section className="container-page mt-12 lg:mt-16">
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.title} className="card group flex flex-col">
              <div className="flex items-center justify-between">
                <span className="chip">{p.category}</span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-navy/45">
                  <Clock className="h-3 w-3" />
                  {p.readTime}
                </span>
              </div>
              <h2 className="mt-5 font-display text-lg font-semibold tracking-tight text-navy">
                {p.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{p.summary}</p>
              <div className="mt-5 flex items-center justify-between border-t border-navy/10 pt-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy/55">
                  {p.date}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-navy/70">
                  Read
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-3 rounded-xl border border-navy/10 bg-cream-100/60 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-base font-semibold tracking-tight text-navy">
              Get the next post in your inbox.
            </p>
            <p className="mt-1 text-sm text-navy/65">One email per new piece. No spam.</p>
          </div>
          <Link href="/contact" className="btn-primary">
            Subscribe
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
