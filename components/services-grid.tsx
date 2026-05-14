import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/services';

export function ServicesGrid() {
  return (
    <section id="services" className="container-page mt-24 lg:mt-32">
      <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow eyebrow-dot">What we do</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Four disciplines.{' '}
            <span className="text-navy/55">One programme.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            Senior practitioners, accountable for the result. Delivered standalone or together.
          </p>
        </div>
        <Link href="/services" className="btn-ghost">
          View all
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {services.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="card group flex flex-col">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy/15 bg-cream-50 text-gold-400 transition-colors group-hover:border-gold group-hover:text-gold-500">
                  <s.icon className="h-4 w-4" />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy/45">
                  {s.index} · {s.shortName}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 -translate-x-1 translate-y-1 text-navy/30 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-navy" />
            </div>

            <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-navy">
              {s.name}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-navy/70">{s.tagline}</p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {s.stack.slice(0, 5).map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
