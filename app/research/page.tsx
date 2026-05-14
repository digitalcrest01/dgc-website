import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Clock } from 'lucide-react';
import { research } from '@/lib/research';

export const metadata: Metadata = {
  title: 'Research Lab',
  description:
    'Reference architectures and playbooks for AWS, Azure, GCP, CI/CD and GRC. From the Digital Crest Research Lab.',
};

const cloudPills: Record<string, string> = {
  AWS: 'bg-ink-600 border-cream-100/15 text-cream-100',
  Azure: 'bg-ink-600 border-cream-100/15 text-cream-100',
  GCP: 'bg-ink-600 border-cream-100/15 text-cream-100',
  'Multi-cloud': 'bg-ink-700 text-cream-100 border-gold',
  'CI/CD': 'bg-ink-600 border-cream-100/15 text-cream-100',
  GRC: 'bg-ink-600 border-cream-100/15 text-cream-100',
};

export default function ResearchPage() {
  return (
    <>
      <section className="container-page pt-14 lg:pt-20">
        <div className="flex flex-wrap items-center gap-3">
          <p className="eyebrow eyebrow-dot">Research Lab</p>
          <span className="hidden h-3 w-px bg-ink-700/15 sm:inline-block" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-100/55">
            est. 2019 · v1.0 · {String(research.length).padStart(2, '0')} entries
          </span>
        </div>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-cream-100 text-balance sm:text-5xl">
          Reference architectures from the field.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream-100/70">
          Patterns we deploy with clients on AWS, Azure, and GCP. Each entry includes a working
          diagram, the controls it satisfies, and the trade offs we have learned the hard way.
        </p>
      </section>

      <section className="container-page mt-12 lg:mt-16">
        <div className="grid gap-5 lg:grid-cols-2">
          {research.map((p) => {
            const Diagram = p.diagram;
            return (
              <article
                key={p.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-cream-100/10 bg-ink-700 transition-all hover:border-cream-100/20"
              >
                <div className="border-b border-cream-100/10 bg-ink-600/60 p-3">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                    <div className="absolute inset-0 origin-top-left scale-[0.62] sm:scale-[0.78] lg:scale-[0.7]">
                      <Diagram />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                        cloudPills[p.cloud] ?? 'bg-ink-600 border-cream-100/15 text-cream-100'
                      }`}
                    >
                      {p.cloud}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-cream-100/45">
                      <Clock className="h-3 w-3" />
                      {p.readTime}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-semibold tracking-tight text-cream-100">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-cream-100/70">{p.summary}</p>
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
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
