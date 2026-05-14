import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 lg:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 bg-radial-fade"
      />

      <div className="container-page relative">
        <div className="flex flex-col items-start gap-6">
          <div className="eyebrow eyebrow-dot">UK cyber security consultancy</div>

          <h1 className="max-w-4xl font-display text-[34px] font-semibold leading-[1.05] tracking-tightest text-balance text-navy sm:text-5xl lg:text-[56px]">
            Security that lets your engineers ship.
            <br className="hidden sm:block" />
            <span className="text-navy/55">Assurance your board can read.</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-navy/75">
            Application security, GRC and audit, security engineering, and cloud architecture.
            Senior practitioners, fixed scope, measurable outcomes.
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

        <HeroTerminal />
      </div>
    </section>
  );
}

function HeroStats() {
  const stats = [
    { value: '15+ yrs', label: 'Regulated software' },
    { value: '4', label: 'Disciplines' },
    { value: 'AWS · Azure · GCP', label: 'Cloud platforms' },
    { value: 'ISO · SOC · NIST', label: 'Frameworks' },
  ];
  return (
    <dl className="mt-4 grid w-full grid-cols-2 gap-px overflow-hidden rounded-xl border border-navy/10 bg-navy/10 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-cream-100 p-4">
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-navy/55">
            {s.label}
          </dt>
          <dd className="mt-1.5 font-display text-base font-semibold text-navy lg:text-lg">
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function HeroTerminal() {
  return (
    <div className="relative mx-auto mt-16 max-w-5xl">
      <div className="absolute -inset-x-10 -inset-y-8 -z-10 rounded-3xl bg-gradient-to-br from-gold/20 via-transparent to-navy/10 blur-3xl" />
      <div className="overflow-hidden rounded-2xl border border-navy/15 bg-navy text-cream-100 shadow-2xl shadow-navy/20">
        <div className="flex items-center justify-between border-b border-cream-100/10 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-cream-100/20" />
            <span className="h-2 w-2 rounded-full bg-cream-100/20" />
            <span className="h-2 w-2 rounded-full bg-gold/80" />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream-100/50">
            dgc · engagement
          </p>
          <p className="font-mono text-[10px] text-cream-100/40">v1.0</p>
        </div>
        <div className="grid gap-0 lg:grid-cols-2">
          <pre className="overflow-x-auto p-5 font-mono text-[11.5px] leading-relaxed text-cream-100/90 lg:p-6">
{`$ dgc engage --scope appsec,grc,cloud --duration 12w

> phase 01  discover
  · architecture and code review
  · risk baseline
  · threat model

> phase 02  design
  · target operating model
  · controls mapped (ISO + SOC2)
  · landing zone blueprint

> phase 03  build
  · pipeline guardrails as code
  · detections and identity
  · evidence pipeline live

> phase 04  prove
  · audit support
  · board pack and metrics
  · runbooks owned by the team

ready for audit + production`}
          </pre>
          <div className="relative border-t border-cream-100/10 lg:border-l lg:border-t-0">
            <div
              aria-hidden
              className="absolute inset-0 bg-grid-cream [background-size:32px_32px] opacity-[0.08]"
            />
            <div className="relative grid h-full grid-cols-2 gap-px bg-cream-100/10">
              {[
                ['ISO 27001', 'ready'],
                ['SOC 2', 'evidence wired'],
                ['SSDLC', 'shifted left'],
                ['Landing zone', 'multi region'],
                ['Detections', 'as code'],
                ['Identity', 'jit + scim'],
              ].map(([k, v]) => (
                <div key={k} className="bg-navy/95 p-4">
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-gold/80">
                    {k}
                  </p>
                  <p className="mt-1.5 text-xs text-cream-100/90">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
