import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Field notes on application security, GRC, security engineering and cloud architecture from Digital Crest practitioners.',
};

const posts = [
  {
    title: 'Threat models that engineers actually use',
    summary:
      'A practical pattern for keeping threat models living, light, and tightly coupled to the code your team is changing this sprint.',
    category: 'Application Security',
    readTime: '6 min read',
    date: 'Coming soon',
  },
  {
    title: 'Evidence pipelines for SOC 2 Type II',
    summary:
      'Stop drowning in screenshots. A blueprint for wiring telemetry into your control library so the audit writes itself.',
    category: 'GRC and Audit',
    readTime: '8 min read',
    date: 'Coming soon',
  },
  {
    title: 'Detection as code, without the demo magic',
    summary:
      'A grounded look at building a detection programme that survives staff turnover and the next vendor migration.',
    category: 'Security Engineering',
    readTime: '7 min read',
    date: 'Coming soon',
  },
  {
    title: 'A landing zone you can defend on day one',
    summary:
      'Multi account guardrails, network patterns and policy as code: the minimum viable platform that scales with you.',
    category: 'Cloud Architecture',
    readTime: '9 min read',
    date: 'Coming soon',
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="container-page pt-20 lg:pt-28">
        <p className="eyebrow eyebrow-dot">Insights</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold tracking-tight text-navy text-balance sm:text-6xl lg:text-7xl">
          Field notes from
          <br />
          <span className="text-navy/55">the front line.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
          Short, opinionated writing from our practitioners. Patterns that work, anti patterns to
          avoid, and the occasional hot take, all grounded in actual engagements.
        </p>
      </section>

      <section className="container-page mt-16 lg:mt-24">
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((p) => (
            <article
              key={p.title}
              className="card group flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="chip">{p.category}</span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-navy/45">
                  <Clock className="h-3 w-3" />
                  {p.readTime}
                </span>
              </div>
              <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight text-navy">
                {p.title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-navy/70">{p.summary}</p>
              <div className="mt-6 flex items-center justify-between border-t border-navy/10 pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-navy/55">
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

        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-navy/10 bg-cream-100/60 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight text-navy">
              Get the next post in your inbox.
            </p>
            <p className="mt-1 text-sm text-navy/65">
              No spam. One email when a new piece goes live, that is the deal.
            </p>
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
