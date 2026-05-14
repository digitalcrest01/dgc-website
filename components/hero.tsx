import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { HeroPipeline } from './hero-pipeline';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 lg:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-ink [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 bg-radial-fade"
      />

      <div className="container-page relative">
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="eyebrow eyebrow-dot">UK cyber security consultancy</div>
            <span className="hidden h-3 w-px bg-cream-100/15 sm:inline-block" />
            <SystemBadge />
          </div>

          <h1 className="max-w-4xl font-display text-[34px] font-semibold leading-[1.05] tracking-tightest text-balance text-cream-100 sm:text-5xl lg:text-[56px]">
            Engineered security for the teams shipping critical software.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-cream-100/75">
            Application security, GRC and audit, security engineering, and cloud architecture.
            Senior practitioners. Built into your pipeline, measured against your business.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-primary">
              Book a discovery call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-ghost">
              Explore services
            </Link>
          </div>

          <HeroStats />
        </div>

        <HeroPipeline />
      </div>
    </section>
  );
}

function SystemBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cream-100/15 bg-ink-600 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-cream-100/65">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-gold" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
      </span>
      operational · uk · gmt
    </span>
  );
}

function HeroStats() {
  const stats = [
    { value: 'United Kingdom', label: 'HQ' },
    { value: '4', label: 'Disciplines' },
    { value: 'AWS · Azure · GCP', label: 'Cloud platforms' },
    { value: 'ISO · SOC · NIST', label: 'Frameworks' },
  ];
  return (
    <dl className="mt-4 grid w-full grid-cols-2 gap-px overflow-hidden rounded-xl border border-cream-100/10 bg-cream-100/10 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-ink-700 p-4">
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-cream-100/55">
            {s.label}
          </dt>
          <dd className="mt-1.5 font-display text-base font-semibold text-cream-100 lg:text-lg">
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
