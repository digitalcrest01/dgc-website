import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Website terms of use for digitalcrest.co.uk.',
};

export default function TermsPage() {
  return (
    <section className="container-page max-w-3xl pt-14 lg:pt-20">
      <p className="eyebrow eyebrow-dot">Legal</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-cream-100 sm:text-5xl">
        Website terms
      </h1>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-cream-100/55">
        Last updated · 2025
      </p>

      <div className="mt-8 space-y-5 text-sm leading-relaxed text-cream-100/80">
        <p>
          These terms govern your use of digitalcrest.co.uk. By using the site you agree to them.
          Consulting services are governed by a separate written agreement.
        </p>

        <h2 className="font-display text-lg font-semibold tracking-tight text-cream-100">
          Content and use
        </h2>
        <p>
          Content is provided for general information. It is not security or legal advice. We make
          no warranties about completeness or fitness for a particular purpose.
        </p>

        <h2 className="font-display text-lg font-semibold tracking-tight text-cream-100">
          Intellectual property
        </h2>
        <p>
          The site is owned by Digital Crest Consulting Ltd. You may view and share with
          attribution. Commercial use requires written permission.
        </p>

        <h2 className="font-display text-lg font-semibold tracking-tight text-cream-100">
          Acceptable use
        </h2>
        <p>
          Do not probe, scan, or test the site for vulnerabilities without written authorisation.
          Report security issues to{' '}
          <a className="link-underline" href="mailto:security@digitalcrest.co.uk">
            security@digitalcrest.co.uk
          </a>
          .
        </p>

        <h2 className="font-display text-lg font-semibold tracking-tight text-cream-100">Liability</h2>
        <p>
          To the extent permitted by law, we exclude liability for losses arising from use of the
          site. Nothing limits liability for fraud, death, or personal injury caused by negligence.
        </p>

        <h2 className="font-display text-lg font-semibold tracking-tight text-cream-100">
          Jurisdiction
        </h2>
        <p>
          Governed by the laws of England and Wales. Disputes subject to the exclusive
          jurisdiction of the courts of England and Wales.
        </p>
      </div>
    </section>
  );
}
