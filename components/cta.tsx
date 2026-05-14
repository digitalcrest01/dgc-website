import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';

export function CTA() {
  return (
    <section className="container-page mt-24 lg:mt-32">
      <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-cream-100 p-8 lg:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:48px_48px] opacity-[0.08]"
        />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow eyebrow-dot">Get started</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy text-balance sm:text-4xl">
              Tell us where it hurts. We will tell you what good looks like.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-navy/70">
              A 30 minute call with a senior practitioner. No sales motion. Clear next step.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-2">
            <Link href="/contact" className="btn-primary w-full justify-center">
              Book a discovery call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href="mailto:hello@digitalcrest.co.uk" className="btn-ghost w-full justify-center">
              <Mail className="h-4 w-4" />
              hello@digitalcrest.co.uk
            </a>
            <p className="mt-1 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-navy/45">
              UK · remote first · GMT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
