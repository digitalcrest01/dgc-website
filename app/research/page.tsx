import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Clock, BookOpen } from 'lucide-react';
import { research } from '@/lib/research';

export const metadata: Metadata = {
  title: 'Research Lab',
  description:
    'Reference patterns and playbooks for AWS, Azure, GCP, CI/CD and GRC. From the Digital Crest Research Lab.',
};

export default function ResearchPage() {
  return (
    <>
      <section className="container-page pt-14 lg:pt-20">
        <div className="flex flex-wrap items-center gap-3">
          <p className="eyebrow eyebrow-dot">Research Lab</p>
          <span className="hidden h-3 w-px bg-cream-100/15 sm:inline-block" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-100/55">
            {String(research.length).padStart(2, '0')} entries · v1.0
          </span>
        </div>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-cream-100 text-balance sm:text-5xl">
          Reference patterns from the field.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream-100/70">
          Patterns we deploy with clients on AWS, Azure, and GCP. Each entry includes the controls
          it satisfies, the trade offs we have learned the hard way, and links to the official
          documentation that backs it.
        </p>
      </section>

      <section className="container-page mt-12 lg:mt-16">
        <div className="grid gap-4 lg:grid-cols-2">
          {research.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col rounded-2xl border border-cream-100/10 bg-ink-700 p-6 transition-all hover:border-gold/30"
            >
              <div className="flex items-center justify-between">
                <span className="chip">{p.cloud}</span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-cream-100/45">
                  <Clock className="h-3 w-3" />
                  {p.readTime}
                </span>
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold tracking-tight text-cream-100">
                {p.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-cream-100/70">{p.summary}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.controls.slice(0, 2).map((c) => (
                  <span key={c} className="chip">
                    {c.split(' · ')[0]}
                  </span>
                ))}
                <span className="chip">
                  <BookOpen className="h-3 w-3" /> {p.references.length} refs
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-cream-100/10 pt-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-100/55">
                  {p.useCase}
                </p>
                <Link
                  href={`/research/${p.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-cream-100/80 group-hover:text-cream-100"
                >
                  Read
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
