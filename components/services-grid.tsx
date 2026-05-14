import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/services';

export function ServicesGrid() {
  return (
    <section id="services" className="container-page mt-32 lg:mt-48">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow eyebrow-dot">What we do</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Four disciplines.
            <br />
            <span className="text-navy/55">One coherent programme.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy/70">
            Most consultancies sell a slice. We bring the four capabilities that actually move
            risk: built by senior practitioners who have run them at scale and stay accountable for
            the result.
          </p>
        </div>
        <Link href="/services" className="btn-ghost">
          View all services
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="card group flex flex-col"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy/15 bg-cream-50 text-gold-400 transition-colors group-hover:border-gold group-hover:text-gold-500">
                  <s.icon className="h-5 w-5" />
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-navy/45">
                  {s.index} · {s.shortName}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 -translate-x-1 translate-y-1 text-navy/30 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-navy" />
            </div>

            <h3 className="mt-7 font-display text-2xl font-semibold tracking-tight text-navy">
              {s.name}
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-navy/70">{s.tagline}</p>

            <div className="mt-7 flex flex-wrap gap-1.5">
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
