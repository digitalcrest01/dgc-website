import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import { services } from '@/lib/services';
import { CTA } from '@/components/cta';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Application security, GRC and audit, security engineering, and cloud architecture. Senior practitioners delivering measurable outcomes.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-page pt-20 lg:pt-28">
        <p className="eyebrow eyebrow-dot">Services</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold tracking-tight text-navy sm:text-6xl lg:text-7xl">
          Four disciplines that move
          <br />
          <span className="text-navy/55">the risk needle.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
          Each service is led by a senior practitioner accountable for the outcome. They share a
          common operating model so your engagement does not fragment as it grows.
        </p>
      </section>

      <section className="container-page mt-16 lg:mt-24">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-navy/10 bg-navy/10">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative grid gap-8 bg-cream-100 p-8 transition-colors hover:bg-cream-50 lg:grid-cols-[140px_1fr_auto] lg:items-center lg:p-12"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-navy/15 bg-cream-50 text-gold-500">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-navy/45 lg:hidden">
                  {s.index}
                </span>
              </div>

              <div>
                <p className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-navy/45 lg:block">
                  {s.index}
                </p>
                <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-navy lg:text-4xl">
                  {s.name}
                </h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-navy/70">
                  {s.tagline}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.stack.slice(0, 6).map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-navy/15 text-navy transition-all group-hover:-translate-y-0.5 group-hover:border-navy group-hover:bg-navy group-hover:text-cream-100">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
