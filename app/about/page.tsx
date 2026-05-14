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
    body: 'Earned by the work, not claimed in a pitch. Reasoning, evidence, and trade offs are always on the table.',
  },
  {
    title: 'Integrity',
    body: 'What we say in private, we say in public. The recommendation does not change to win the engagement.',
  },
  {
    title: 'Customer first',
    body: 'Your outcome is the brief, not the contract. We measure ourselves against your business.',
  },
  {
    title: 'Excellence',
    body: 'Senior people, senior standards. Quiet, exacting craft is the only acceptable default.',
  },
];

const facts = [
  { k: 'Founded', v: '2019' },
  { k: 'HQ', v: 'United Kingdom' },
  { k: 'Model', v: 'Remote first' },
  { k: 'Clients', v: 'Scaleups + regulated' },
  { k: 'Disciplines', v: 'AppSec · GRC · SecEng · Cloud' },
  { k: 'Engagements', v: 'Sprint · Programme · Fractional' },
];

const timeline = [
  { year: '2019', event: 'Founded in the UK. Application security and audit practice.' },
  { year: '2020', event: 'Cloud architecture practice added across AWS, Azure, and GCP.' },
  { year: '2022', event: 'Security engineering practice. Detection and identity at scale.' },
  { year: '2024', event: 'Research Lab launched. Reference architectures and playbooks.' },
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
          Founded in 2019. Senior people on the work, clear deliverables, evidence over storytelling.
        </p>
      </section>

      <section className="container-page mt-16 lg:mt-20">
        <p className="eyebrow eyebrow-dot">Timeline</p>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-cream-100 sm:text-3xl">
          Six years, four disciplines, one standard.
        </h2>
        <ol className="mt-8 grid gap-px overflow-hidden rounded-xl border border-cream-100/10 bg-cream-100/10 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t) => (
            <li key={t.year} className="bg-ink-700 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
                {t.year}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-cream-100/80">{t.event}</p>
            </li>
          ))}
        </ol>
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
            <p className="eyebrow eyebrow-dot">Core values</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-cream-100 sm:text-3xl">
              The four lines we hold.
            </h2>
            <ul className="mt-6 grid gap-px overflow-hidden rounded-xl border border-cream-100/10 bg-cream-100/10 sm:grid-cols-2">
              {values.map((v) => (
                <li key={v.title} className="bg-ink-700 p-5">
                  <h3 className="font-display text-base font-semibold tracking-tight text-cream-100">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-100/70">{v.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page mt-16 lg:mt-20">
        <p className="eyebrow eyebrow-dot">At a glance</p>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-cream-100 sm:text-3xl">
          The facts.
        </h2>
        <dl className="mt-6 grid gap-px overflow-hidden rounded-xl border border-cream-100/10 bg-cream-100/10 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>

      <CTA />
    </>
  );
}
