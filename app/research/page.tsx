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
  AWS: 'bg-cream-50 border-navy/15 text-navy',
  Azure: 'bg-cream-50 border-navy/15 text-navy',
  GCP: 'bg-cream-50 border-navy/15 text-navy',
  'Multi-cloud': 'bg-navy text-cream-100 border-navy',
  'CI/CD': 'bg-cream-50 border-navy/15 text-navy',
  GRC: 'bg-cream-50 border-navy/15 text-navy',
};

export default function ResearchPage() {
  return (
    <>
      <section className="container-page pt-14 lg:pt-20">
        <div className="flex flex-wrap items-center gap-3">
          <p className="eyebrow eyebrow-dot">Research Lab</p>
          <span className="hidden h-3 w-px bg-navy/15 sm:inline-block" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy/55">
            est. 2019 · v1.0 · {String(research.length).padStart(2, '0')} entries
          </span>
        </div>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-navy text-balance sm:text-5xl">
          Reference architectures from the field.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/70">
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
                className="group flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-cream-100 transition-all hover:border-navy/25"
              >
                <div className="border-b border-navy/10 bg-cream-50/60 p-3">
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
                        cloudPills[p.cloud] ?? 'bg-cream-50 border-navy/15 text-navy'
                      }`}
                    >
                      {p.cloud}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-navy/45">
                      <Clock className="h-3 w-3" />
                      {p.readTime}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-semibold tracking-tight text-navy">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-navy/70">{p.summary}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-navy/10 pt-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy/55">
                      {p.useCase}
                    </p>
                    <Link
                      href={`/research/${p.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-navy/80 group-hover:text-navy"
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
