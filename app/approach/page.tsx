import type { Metadata } from 'next';
import { Approach } from '@/components/approach';
import { Principles } from '@/components/principles';
import { Engagements } from '@/components/engagements';
import { CTA } from '@/components/cta';

export const metadata: Metadata = {
  title: 'Approach',
  description:
    'How Digital Crest delivers secure outcomes: a transparent four phase method, sized to fit the decision in front of you.',
};

export default function ApproachPage() {
  return (
    <>
      <section className="container-page pt-20 lg:pt-28">
        <p className="eyebrow eyebrow-dot">Approach</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold tracking-tight text-navy text-balance sm:text-6xl lg:text-7xl">
          A clear method,
          <br />
          <span className="text-navy/55">honest deliverables.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
          We work in four phases that flow into each other. You see the work in progress, the
          artefacts we produce, and the controls we leave behind. No black box, no hand wave.
        </p>
      </section>
      <Approach />
      <Principles />
      <Engagements />
      <CTA />
    </>
  );
}
