import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Website terms of use for digitalcrest.co.uk.',
};

export default function TermsPage() {
  return (
    <section className="container-page max-w-3xl pt-20 lg:pt-28">
      <p className="eyebrow eyebrow-dot">Legal</p>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-navy sm:text-6xl">
        Website terms
      </h1>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-navy/55">
        Last updated · 2025
      </p>

      <div className="prose mt-10 max-w-none space-y-6 text-[15px] leading-relaxed text-navy/80">
        <p>
          These terms govern your use of digitalcrest.co.uk. By using the site you agree to them.
          If you engage us for consulting services, a separate written agreement will set out the
          terms of that engagement.
        </p>

        <h2 className="font-display text-2xl font-semibold tracking-tight text-navy">
          Content and use
        </h2>
        <p>
          The content on this site is provided for general information. It is not security or
          legal advice. We take care to keep the information accurate but make no warranties about
          completeness or fitness for a particular purpose. Reliance on the content is at your own
          risk.
        </p>

        <h2 className="font-display text-2xl font-semibold tracking-tight text-navy">
          Intellectual property
        </h2>
        <p>
          The site, including its text, design, code and marks, is owned by Digital Crest
          Consulting Ltd. You may view and share the content with attribution. You may not copy,
          republish or use it commercially without our written permission.
        </p>

        <h2 className="font-display text-2xl font-semibold tracking-tight text-navy">
          Acceptable use
        </h2>
        <p>
          Do not use the site to harm, harass, infringe rights, or break the law. Do not probe,
          scan or test the site for vulnerabilities without written authorisation. If you spot a
          security issue, please report it to{' '}
          <a className="link-underline" href="mailto:security@digitalcrest.co.uk">
            security@digitalcrest.co.uk
          </a>{' '}
          and we will work with you in good faith.
        </p>

        <h2 className="font-display text-2xl font-semibold tracking-tight text-navy">
          Liability
        </h2>
        <p>
          To the extent permitted by law, we exclude liability for any loss arising from your use
          of the site. Nothing in these terms limits liability for fraud, death or personal injury
          caused by negligence.
        </p>

        <h2 className="font-display text-2xl font-semibold tracking-tight text-navy">
          Jurisdiction
        </h2>
        <p>
          These terms are governed by the laws of England and Wales, and disputes are subject to
          the exclusive jurisdiction of the courts of England and Wales.
        </p>
      </div>
    </section>
  );
}
