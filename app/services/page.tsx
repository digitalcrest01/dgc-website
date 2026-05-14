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
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-cream-100 sm:text-5xl">
          Four disciplines that move the risk needle.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream-100/70">
          Each service is led by a senior practitioner. They share an operating model so the work
          stays joined up as it grows.
        </p>
      </section>

      <section className="container-page mt-12 lg:mt-16">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-cream-100/10 bg-cream-100/10">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative grid gap-6 bg-ink-700 p-6 transition-colors hover:bg-ink-600 lg:grid-cols-[120px_1fr_auto] lg:items-center lg:p-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cream-100/15 bg-ink-600 text-gold-500">
                  <s.icon className="h-5 w-5" />
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-cream-100 lg:text-3xl">
                  {s.name}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cream-100/70">{s.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.stack.slice(0, 6).map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/15 text-cream-100 transition-all group-hover:-translate-y-0.5 group-hover:border-gold group-hover:bg-ink-700 group-hover:text-cream-100">
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
