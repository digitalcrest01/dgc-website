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
      <section className="relative overflow-hidden pt-14 lg:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-ink [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
        />
        <div className="container-page relative">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-cream-100/55 hover:text-cream-100"
          >
            <span aria-hidden>←</span> All services
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cream-100/15 bg-ink-600 text-gold-500">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-100/55">
                  service
                </p>
              </div>
              <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-cream-100 text-balance sm:text-5xl">
                {service.name}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream-100/75">
                {service.intro}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
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

      <section className="container-page mt-20 lg:mt-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="eyebrow eyebrow-dot">Outcomes</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-cream-100 sm:text-3xl">
              What you get.
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.outcomes.map((o) => (
              <li
                key={o}
                className="flex items-start gap-3 rounded-xl border border-cream-100/10 bg-ink-700/60 p-4"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/15 text-gold-600">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm leading-relaxed text-cream-100/85">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page mt-20 lg:mt-24">
        <p className="eyebrow eyebrow-dot">Capabilities</p>
        <h2 className="mt-3 max-w-3xl font-display text-2xl font-semibold tracking-tight text-cream-100 sm:text-3xl">
          The work, broken down.
        </h2>

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-cream-100/10 bg-cream-100/10 sm:grid-cols-2">
          {service.capabilities.map((c) => (
            <div key={c.title} className="bg-ink-700 p-6">
              <h3 className="font-display text-base font-semibold tracking-tight text-cream-100">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-100/70">{c.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page mt-20 lg:mt-24">
        <div className="rounded-2xl border border-cream-100/10 bg-ink-700/60 p-6 lg:p-10">
          <p className="eyebrow eyebrow-dot">Tooling and standards</p>
          <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-cream-100">
            The platforms we work with.
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {service.stack.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page mt-20 lg:mt-24">
        <p className="eyebrow eyebrow-dot">Pair with</p>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-cream-100 sm:text-3xl">
          Stronger together.
        </h2>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {others.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card group flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cream-100/15 bg-ink-600 text-gold-400">
                  <s.icon className="h-4 w-4" />
                </div>
                <p className="font-display text-base font-semibold tracking-tight text-cream-100">
                  {s.shortName}
                </p>
              </div>
              <ArrowRight className="mt-2 h-4 w-4 text-cream-100/40 transition-transform group-hover:translate-x-0.5 group-hover:text-cream-100" />
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
      <div className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-to-br from-gold/20 via-transparent to-navy/10 blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-cream-100/15 bg-ink-700 text-cream-100 shadow-2xl shadow-navy/20">
        <div className="flex items-center justify-between border-b border-cream-100/10 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-cream-100/25" />
            <span className="h-2 w-2 rounded-full bg-cream-100/25" />
            <span className="h-2 w-2 rounded-full bg-gold/80" />
          </div>
          <p className="font-mono text-[10px] text-cream-100/60">{service.artifact.label}</p>
          <p className="font-mono text-[10px] text-cream-100/40">v1</p>
        </div>
        <div className="space-y-2.5 p-5 font-mono text-[11.5px] leading-relaxed">
          {service.artifact.lines.map((l, idx) => (
            <div key={idx} className="flex gap-3">
              <span className="w-20 shrink-0 text-gold/90">{l.tag ?? ''}</span>
              <span className="text-cream-100/85">{l.text}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-cream-100/10 bg-cream-100/[0.03] px-5 py-3">
          <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-gold/80">
            ready for review
          </p>
        </div>
      </div>
    </div>
  );
}
