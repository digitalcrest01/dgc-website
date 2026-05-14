import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacy notice for digitalcrest.co.uk.',
};

export default function PrivacyPage() {
  return (
    <section className="container-page max-w-3xl pt-14 lg:pt-20">
      <p className="eyebrow eyebrow-dot">Legal</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        Privacy notice
      </h1>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-navy/55">
        Last updated · 2025
      </p>

      <div className="mt-8 space-y-5 text-sm leading-relaxed text-navy/80">
        <p>
          Digital Crest Consulting Ltd is the data controller for personal information collected
          through digitalcrest.co.uk. We process data under the UK GDPR and the Data Protection
          Act 2018.
        </p>

        <h2 className="font-display text-lg font-semibold tracking-tight text-navy">
          What we collect
        </h2>
        <p>
          When you contact us: your name, work email, company, and the content of your enquiry. On
          visit: technical information such as IP address, browser, and pages viewed, for security
          and reliability.
        </p>

        <h2 className="font-display text-lg font-semibold tracking-tight text-navy">
          Why we collect it
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>To respond to your enquiry and run any engagement you agree.</li>
          <li>To keep the site secure and reliable.</li>
          <li>To improve our services in aggregate. We do not track you personally.</li>
        </ul>

        <h2 className="font-display text-lg font-semibold tracking-tight text-navy">
          How long we keep it
        </h2>
        <p>
          Enquiries and engagement records are retained for up to seven years. Site analytics for
          thirteen months at most.
        </p>

        <h2 className="font-display text-lg font-semibold tracking-tight text-navy">
          Your rights
        </h2>
        <p>
          You can request a copy of your data, ask for corrections, request deletion, or object to
          processing. Email{' '}
          <a className="link-underline" href="mailto:legal@digitalcrest.co.uk">
            legal@digitalcrest.co.uk
          </a>
          . You can also complain to the ICO at ico.org.uk.
        </p>

        <h2 className="font-display text-lg font-semibold tracking-tight text-navy">
          Sub processors
        </h2>
        <p>
          We use a small set of trusted providers for hosting, email, and analytics. List available
          on request. We do not sell personal data and we do not enable third party ad trackers.
        </p>
      </div>
    </section>
  );
}
