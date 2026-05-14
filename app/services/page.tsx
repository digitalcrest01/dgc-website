import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import { services } from '@/lib/services';
import { CTA } from '@/components/cta';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Application security, GRC and audit, security engineering, and cloud architecture.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-page pt-14 lg:pt-20">
        <p className="eyebrow eyebrow-dot">Services</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
          Four disciplines that move the risk needle.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/70">
          Each service is led by a senior practitioner. They share an operating model so the work
          stays joined up as it grows.
        </p>
      </section>

      <section className="container-page mt-12 lg:mt-16">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative grid gap-6 bg-cream-100 p-6 transition-colors hover:bg-cream-50 lg:grid-cols-[120px_1fr_auto] lg:items-center lg:p-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy/15 bg-cream-50 text-gold-500">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy/45 lg:hidden">
                  {s.index}
                </span>
              </div>

              <div>
                <p className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-navy/45 lg:block">
                  {s.index}
                </p>
                <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight text-navy lg:text-3xl">
                  {s.name}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy/70">{s.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.stack.slice(0, 6).map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition-all group-hover:-translate-y-0.5 group-hover:border-navy group-hover:bg-navy group-hover:text-cream-100">
                  <ArrowUpRight className="h-4 w-4" />
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
