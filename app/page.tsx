import { Hero } from '@/components/hero';
import { ServicesGrid } from '@/components/services-grid';
import { Approach } from '@/components/approach';
import { TrustMarquee } from '@/components/trust-marquee';
import { Principles } from '@/components/principles';
import { Engagements } from '@/components/engagements';
import { Quote } from '@/components/quote';
import { CTA } from '@/components/cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <ServicesGrid />
      <Approach />
      <Principles />
      <Engagements />
      <Quote />
      <CTA />
    </>
  );
}
