import type { Metadata } from 'next';
import { CTA } from '@/components/cta';
import { Logo } from '@/components/logo';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Digital Crest Consulting is a UK based cyber security consultancy founded by senior practitioners with deep experience in regulated industries and high growth scaleups.',
};

const values = [
  {
    title: 'Senior by default',
    body: 'Every engagement is led by a practitioner with at least 12 years of experience. We do not subcontract the thinking.',
  },
  {
    title: 'Plain English',
    body: 'Reports your engineers, lawyers and board can read without a translator. Jargon only where it earns its place.',
  },
  {
    title: 'Long view',
    body: 'We build programmes that survive after we leave. If our absence breaks your security posture, we did the wrong job.',
  },
  {
    title: 'Quiet pride',
    body: 'No vendor logos. No vanity case studies. We let the work, and the references, speak.',
  },
];

const facts = [
  { k: 'Founded', v: '2024' },
  { k: 'HQ', v: 'United Kingdom' },
  { k: 'Operating model', v: 'Remote first' },
  { k: 'Clients', v: 'Scaleups + regulated enterprise' },
  { k: 'Disciplines', v: 'AppSec · GRC · SecEng · Cloud' },
  { k: 'Engagements', v: 'Sprint · Programme · Fractional' },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-page pt-20 lg:pt-28">
        <p className="eyebrow eyebrow-dot">About</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold tracking-tight text-navy text-balance sm:text-6xl lg:text-7xl">
          A small firm with
          <br />
          <span className="text-navy/55">an outsized standard.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
          Digital Crest was founded to do consulting the way clients always say they want it done.
          Senior people on the work, clear deliverables, evidence over storytelling, and a
          relationship that earns the next engagement on merit.
        </p>
      </section>

      <section className="container-page mt-20 lg:mt-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-cream-100 p-10 lg:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:40px_40px] opacity-[0.08]"
            />
            <div className="relative flex h-full flex-col justify-between">
              <Logo className="h-12 w-auto" variant="mark" />
              <div className="mt-12">
                <p className="font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                  The crest is a promise. Defence with a steady hand, structure beneath the surface,
                  a mark of standard you can rely on.
                </p>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-navy/55">
                  Brand language · v1
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow eyebrow-dot">Values</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              How we behave
              <br />
              <span className="text-navy/55">on a Tuesday afternoon.</span>
            </h2>
            <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 sm:grid-cols-2">
              {values.map((v) => (
                <li key={v.title} className="bg-cream-100 p-6">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/70">{v.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page mt-20 lg:mt-28">
        <p className="eyebrow eyebrow-dot">At a glance</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          The facts.
        </h2>
        <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((f) => (
            <div key={f.k} className="bg-cream-100 p-6">
              <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-navy/55">
                {f.k}
              </dt>
              <dd className="mt-2 font-display text-xl font-semibold tracking-tight text-navy">
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
