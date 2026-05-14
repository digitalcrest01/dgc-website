import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';

export function CTA() {
  return (
    <section className="container-page mt-32 lg:mt-44">
      <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-cream-100 p-10 lg:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:48px_48px] opacity-[0.08]"
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow eyebrow-dot">Ready when you are</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy text-balance sm:text-5xl">
              Tell us where it hurts.
              <br />
              We will tell you what good looks like.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-navy/70">
              A 30 minute discovery call with a senior practitioner. No sales motion, no slide deck.
              You leave with a clear view of the next step, whether that is with us or not.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-3">
            <Link href="/contact" className="btn-primary w-full justify-center">
              Book a discovery call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:hello@digitalcrest.co.uk"
              className="btn-ghost w-full justify-center"
            >
              <Mail className="h-4 w-4" />
              hello@digitalcrest.co.uk
            </a>
            <p className="mt-2 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-navy/45">
              UK based · remote first · GMT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
