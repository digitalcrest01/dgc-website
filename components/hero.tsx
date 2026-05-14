import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 lg:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[900px] -translate-x-1/2 bg-radial-fade"
      />

      <div className="container-page relative">
        <div className="flex flex-col items-start gap-8">
          <div className="eyebrow eyebrow-dot animate-fade-up">
            UK cyber security consultancy
            <span className="font-mono text-navy/40">·</span>
            <span className="text-navy/60">Est. 2024</span>
          </div>

          <h1 className="max-w-5xl font-display text-[44px] font-semibold leading-[1.02] tracking-tightest text-balance text-navy sm:text-6xl lg:text-[88px]">
            Security that lets your{' '}
            <span className="relative inline-block">
              <span className="relative z-10">engineers</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-gold/40 lg:h-4"
              />
            </span>{' '}
            ship.
            <br className="hidden sm:block" />
            <span className="text-navy-300">Assurance your board can read.</span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-navy/75 sm:text-xl">
            Digital Crest is a specialist consultancy for application security, GRC and audit,
            security engineering, and cloud architecture. We work with founders, platform teams and
            CISOs to build defensible programmes that earn trust and stay out of the way of the
            roadmap.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-primary">
              Book a discovery call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-ghost">
              Explore services
            </Link>
            <div className="ml-1 hidden items-center gap-2 text-xs text-navy/60 sm:flex">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              30 minute call, no obligation
            </div>
          </div>

          <HeroStats />
        </div>

        <HeroTerminal />
      </div>
    </section>
  );
}

function HeroStats() {
  const stats = [
    { value: '15+', label: 'Years securing regulated software' },
    { value: '4', label: 'Disciplines under one roof' },
    { value: 'AWS · Azure · GCP', label: 'Cloud platforms in production' },
    { value: 'ISO · SOC · NIST', label: 'Frameworks delivered end to end' },
  ];
  return (
    <dl className="mt-6 grid w-full grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-cream-100 p-5">
          <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy/55">
            {s.label}
          </dt>
          <dd className="mt-2 font-display text-xl font-semibold text-navy lg:text-2xl">
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function HeroTerminal() {
  return (
    <div className="relative mx-auto mt-20 max-w-5xl">
      <div className="absolute -inset-x-10 -inset-y-8 -z-10 rounded-3xl bg-gradient-to-br from-gold/20 via-transparent to-navy/10 blur-3xl" />
      <div className="overflow-hidden rounded-2xl border border-navy/15 bg-navy text-cream-100 shadow-2xl shadow-navy/20">
        <div className="flex items-center justify-between border-b border-cream-100/10 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-cream-100/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-cream-100/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream-100/50">
            dgc · engagement-blueprint
          </p>
          <p className="font-mono text-[11px] text-cream-100/40">v1.0</p>
        </div>
        <div className="grid gap-0 lg:grid-cols-2">
          <pre className="overflow-x-auto p-6 font-mono text-[12.5px] leading-relaxed text-cream-100/90 lg:p-8">
{`$ dgc engage \\
    --org "scaleup-co"  \\
    --scope appsec,grc,cloud \\
    --duration 12w

> phase 01  discover
  · architecture and code walkthroughs
  · risk and control baseline
  · threat model workshops

> phase 02  design
  · target operating model
  · control library mapped to iso + soc2
  · secure landing zone blueprint

> phase 03  build
  · pipeline guardrails as code
  · detections and identity controls
  · evidence pipeline live

> phase 04  prove
  · external audit support
  · board pack and metrics
  · runbooks the team owns

deliverables  ready for audit + production`}
          </pre>
          <div className="relative border-t border-cream-100/10 lg:border-l lg:border-t-0">
            <div
              aria-hidden
              className="absolute inset-0 bg-grid-cream [background-size:32px_32px] opacity-[0.08]"
            />
            <div className="relative grid h-full grid-cols-2 gap-px bg-cream-100/10">
              {[
                ['ISO 27001', 'ready'],
                ['SOC 2 Type II', 'evidence wired'],
                ['SSDLC', 'shifted left'],
                ['Landing zone', 'multi region'],
                ['Detections', 'as code'],
                ['Identity', 'jit + scim'],
              ].map(([k, v]) => (
                <div key={k} className="bg-navy/95 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/80">
                    {k}
                  </p>
                  <p className="mt-2 text-sm text-cream-100/90">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
