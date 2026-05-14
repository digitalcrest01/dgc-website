import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacy notice for digitalcrest.co.uk.',
};

export default function PrivacyPage() {
  return (
    <section className="container-page max-w-3xl pt-20 lg:pt-28">
      <p className="eyebrow eyebrow-dot">Legal</p>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-navy sm:text-6xl">
        Privacy notice
      </h1>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-navy/55">
        Last updated · 2025
      </p>

      <div className="prose mt-10 max-w-none space-y-6 text-[15px] leading-relaxed text-navy/80">
        <p>
          Digital Crest Consulting Ltd (we, us, our) is the data controller for personal
          information collected through digitalcrest.co.uk. This notice explains what we collect,
          why, how we protect it, and the choices you have. We process data in line with the UK
          GDPR and the Data Protection Act 2018.
        </p>

        <h2 className="font-display text-2xl font-semibold tracking-tight text-navy">
          What we collect
        </h2>
        <p>
          When you contact us we collect your name, work email, company, and the content of your
          enquiry. When you visit the site we may collect technical information such as your IP
          address, browser, and the pages you view, for security, analytics and reliability.
        </p>

        <h2 className="font-display text-2xl font-semibold tracking-tight text-navy">
          Why we collect it
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>To respond to your enquiry and run any engagement you agree with us.</li>
          <li>To keep the site secure and operating reliably.</li>
          <li>To improve our services and content, in aggregate, never to track you personally.</li>
        </ul>

        <h2 className="font-display text-2xl font-semibold tracking-tight text-navy">
          How long we keep it
        </h2>
        <p>
          Enquiries and engagement records are retained for as long as is needed to provide our
          services and meet our legal obligations, typically up to seven years. Site analytics are
          retained for thirteen months at most.
        </p>

        <h2 className="font-display text-2xl font-semibold tracking-tight text-navy">
          Your rights
        </h2>
        <p>
          You can ask for a copy of your data, request a correction, ask us to delete it, or
          object to processing. Email{' '}
          <a className="link-underline" href="mailto:privacy@digitalcrest.co.uk">
            privacy@digitalcrest.co.uk
          </a>{' '}
          and we will respond within one month. You can also complain to the Information
          Commissioner&apos;s Office at ico.org.uk.
        </p>

        <h2 className="font-display text-2xl font-semibold tracking-tight text-navy">
          Sub processors
        </h2>
        <p>
          We use a small set of trusted providers for hosting, email and analytics. A current list
          is available on request. We do not sell personal data and we do not enable third party
          advertising trackers on this site.
        </p>
      </div>
    </section>
  );
}
