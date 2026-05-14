import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowUpRight, Check, ArrowRight } from 'lucide-react';
import { services, getService } from '@/lib/services';
import { CTA } from '@/components/cta';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: s.name,
    description: s.tagline,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);
  const Icon = service.icon;

  return (
    <>
      <section className="relative overflow-hidden pt-20 lg:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
        />
        <div className="container-page relative">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-navy/55 hover:text-navy"
          >
            <span aria-hidden>←</span> All services
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-navy/15 bg-cream-50 text-gold-500">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-navy/55">
                  {service.index} · service
                </p>
              </div>
              <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-navy text-balance sm:text-6xl lg:text-7xl">
                {service.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/75">
                {service.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Scope an engagement
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/approach" className="btn-ghost">
                  See our approach
                </Link>
              </div>
            </div>

            <ServiceArtifact service={service} />
          </div>
        </div>
      </section>

      <section className="container-page mt-24 lg:mt-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow eyebrow-dot">Outcomes</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              What you get
              <br />
              <span className="text-navy/55">at the end.</span>
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.outcomes.map((o) => (
              <li
                key={o}
                className="flex items-start gap-3 rounded-2xl border border-navy/10 bg-cream-100/60 p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/15 text-gold-600">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-[15px] leading-relaxed text-navy/85">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page mt-24 lg:mt-32">
        <p className="eyebrow eyebrow-dot">Capabilities</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          The work, broken down so you know exactly what to expect.
        </h2>

        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-navy/10 bg-navy/10 sm:grid-cols-2">
          {service.capabilities.map((c, i) => (
            <div key={c.title} className="bg-cream-100 p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy/45">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-navy">
                {c.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy/70">{c.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page mt-24 lg:mt-32">
        <div className="rounded-3xl border border-navy/10 bg-cream-100/60 p-8 lg:p-12">
          <p className="eyebrow eyebrow-dot">Tooling and standards</p>
          <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-navy">
            We work with the platforms you already trust.
          </h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {service.stack.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page mt-24 lg:mt-32">
        <p className="eyebrow eyebrow-dot">Pair with</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          Stronger together.
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-navy/70">
          {service.name} is often delivered alongside one or more of the disciplines below.
        </p>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card group flex items-start justify-between"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-navy/45">
                  {s.index}
                </p>
                <p className="mt-2 font-display text-lg font-semibold tracking-tight text-navy">
                  {s.shortName}
                </p>
              </div>
              <ArrowRight className="mt-1 h-4 w-4 text-navy/40 transition-transform group-hover:translate-x-0.5 group-hover:text-navy" />
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}

function ServiceArtifact({ service }: { service: ReturnType<typeof getService> }) {
  if (!service) return null;
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-gold/20 via-transparent to-navy/10 blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-navy/15 bg-navy text-cream-100 shadow-2xl shadow-navy/20">
        <div className="flex items-center justify-between border-b border-cream-100/10 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-cream-100/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-cream-100/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
          </div>
          <p className="font-mono text-[11px] text-cream-100/60">{service.artifact.label}</p>
          <p className="font-mono text-[11px] text-cream-100/40">{service.index}</p>
        </div>
        <div className="space-y-3 p-6 font-mono text-[12.5px] leading-relaxed">
          {service.artifact.lines.map((l, idx) => (
            <div key={idx} className="flex gap-3">
              <span className="w-20 shrink-0 text-gold/90">{l.tag ?? ''}</span>
              <span className="text-cream-100/85">{l.text}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-cream-100/10 bg-cream-100/[0.03] px-6 py-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold/80">
            ready for review
          </p>
        </div>
      </div>
    </div>
  );
}
