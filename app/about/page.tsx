import type { Metadata } from 'next';
import { CTA } from '@/components/cta';
import { Logo } from '@/components/logo';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Digital Crest Consulting is a UK based cyber security consultancy founded by senior practitioners.',
};

const values = [
  {
    title: 'Trust',
    body: 'Trust is the foundation of every assessment we run and every recommendation we make. We build it the only way it can be built, through transparent reasoning, measured promises, and a willingness to be wrong out loud. Our clients hand us their crown jewels, and that responsibility shapes how we behave when no one is watching.',
  },
  {
    title: 'Integrity',
    body: 'Integrity is the alignment between what we know, what we say, and what we do. We will not soften a finding to keep an engagement, dilute a recommendation to avoid a hard conversation, or sign off on a control that does not work. The version we deliver in private is the version we are willing to defend in public.',
  },
  {
    title: 'Customer first',
    body: 'Your outcome is our scoreboard. Not hours billed, not deliverables produced, not slides presented. We measure success by the resilience of your business, the confidence of your board, and the readiness of your team to carry the work forward. When the right answer is to do less or to stop, we are the ones to say it.',
  },
  {
    title: 'Excellence',
    body: 'Excellence is the discipline of refusing to settle. Senior practitioners, peer reviewed work, evidence behind every claim. We treat security as a craft, not a checklist, and we hold ourselves to the standard we would expect from the team protecting our own data. Good enough is not enough when the consequences of failure are this real.',
  },
];

const facts = [
  { k: 'HQ', v: 'United Kingdom' },
  { k: 'Model', v: 'Remote first' },
  { k: 'Clients', v: 'Scaleups + regulated' },
  { k: 'Disciplines', v: 'AppSec · GRC · SecEng · Cloud' },
  { k: 'Engagements', v: 'Sprint · Programme · Fractional' },
  { k: 'Footprint', v: 'UK · EU' },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-page pt-14 lg:pt-20">
        <p className="eyebrow eyebrow-dot">About</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-cream-100 text-balance sm:text-5xl">
          A small firm with an outsized standard.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream-100/70">
          Digital Crest is a UK based cyber security consultancy. Senior people on the work, clear
          deliverables, evidence over storytelling.
        </p>
      </section>

      <section className="container-page mt-16 lg:mt-20">
        <p className="eyebrow eyebrow-dot">Core values</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-cream-100 sm:text-4xl">
          The four lines we hold.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cream-100/70">
          Values that govern every engagement, in good weather and bad.
        </p>
        <ul className="mt-8 grid gap-px overflow-hidden rounded-xl border border-cream-100/10 bg-cream-100/10 md:grid-cols-2">
          {values.map((v) => (
            <li key={v.title} className="bg-ink-700 p-7">
              <h3 className="font-display text-lg font-semibold tracking-tight text-cream-100">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-100/75">{v.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page mt-16 lg:mt-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="relative overflow-hidden rounded-2xl border border-cream-100/10 bg-ink-700 p-8 lg:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-grid-ink [background-size:40px_40px] opacity-[0.08]"
            />
            <div className="relative flex h-full flex-col justify-between">
              <Logo className="h-10 w-auto" variant="mark" />
              <div className="mt-10">
                <p className="font-display text-lg font-medium tracking-tight text-cream-100 sm:text-xl">
                  The crest is a promise. Defence with a steady hand. Structure beneath the
                  surface. A mark of standard you can rely on.
                </p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-cream-100/55">
                  Brand · v1
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow eyebrow-dot">At a glance</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-cream-100 sm:text-3xl">
              The facts.
            </h2>
            <dl className="mt-6 grid gap-px overflow-hidden rounded-xl border border-cream-100/10 bg-cream-100/10 sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.k} className="bg-ink-700 p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-100/55">
                    {f.k}
                  </dt>
                  <dd className="mt-1.5 font-display text-base font-semibold tracking-tight text-cream-100">
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
