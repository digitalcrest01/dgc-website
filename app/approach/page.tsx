import type { Metadata } from 'next';
import { Approach } from '@/components/approach';
import { Principles } from '@/components/principles';
import { Engagements } from '@/components/engagements';
import { CTA } from '@/components/cta';

export const metadata: Metadata = {
  title: 'Approach',
  description: 'How Digital Crest delivers: a transparent four phase method.',
};

export default function ApproachPage() {
  return (
    <>
      <section className="container-page pt-14 lg:pt-20">
        <p className="eyebrow eyebrow-dot">Approach</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-cream-100 text-balance sm:text-5xl">
          A clear method. Honest deliverables.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream-100/70">
          Four phases that flow into each other. You see the work, the artefacts, and the controls
          we leave behind.
        </p>
      </section>
      <Approach />
      <Principles />
      <Engagements />
      <CTA />
    </>
  );
}
