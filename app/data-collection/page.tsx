import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data collection',
  description:
    'What personal data Digital Crest Consulting collects through digitalcrest.co.uk, why we collect it, how long we keep it, and your rights under UK GDPR.',
};

const categories: { name: string; items: string; basis: string; retention: string }[] = [
  {
    name: 'Enquiry data',
    items: 'Name, work email, company, role, message content',
    basis: 'Legitimate interest · responding to your enquiry',
    retention: 'Up to 24 months after last contact',
  },
  {
    name: 'Engagement data',
    items: 'Contract details, billing contacts, scope notes, agreed deliverables',
    basis: 'Contract · performance of services',
    retention: 'Up to 7 years after end of engagement (HMRC + audit defence)',
  },
  {
    name: 'Site usage',
    items: 'IP address, browser type, pages viewed, referrer (aggregated)',
    basis: 'Legitimate interest · site security and analytics',
    retention: 'Up to 13 months, then aggregated only',
  },
  {
    name: 'Cookie preferences',
    items: 'Your consent choices for analytics and preferences cookies',
    basis: 'Consent · your active choice',
    retention: '12 months',
  },
  {
    name: 'Marketing (optional)',
    items: 'Email, name, opt in status',
    basis: 'Consent · explicit opt in',
    retention: 'Until you unsubscribe, plus 90 days',
  },
];

const recipients = [
  'Vercel · website hosting',
  'Google Workspace · business email',
  'Microsoft 365 · documents and storage',
  'HubSpot or comparable · contact management',
  'A small set of UK and EU professional advisers (legal, accounting, audit) under written confidentiality',
];

const rights = [
  'Access · ask for a copy of the personal data we hold about you',
  'Rectification · correct anything we hold that is wrong',
  'Erasure · ask us to delete data, subject to legal retention obligations',
  'Restriction · limit how we process your data while a query is resolved',
  'Portability · receive your data in a structured, common format',
  'Object · object to processing based on legitimate interest',
  'Withdraw consent · for anything we process on the basis of consent',
];

export default function DataCollectionPage() {
  return (
    <section className="container-page max-w-3xl pt-14 lg:pt-20">
      <p className="eyebrow eyebrow-dot">Legal</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-cream-100 sm:text-5xl">
        Data collection
      </h1>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-cream-100/55">
        UK GDPR · transparency notice
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-cream-100/80">
        <p>
          This page sets out exactly what personal data Digital Crest Consulting Ltd collects
          through digitalcrest.co.uk and any engagement that follows, why we collect it, how long
          we keep it, who has access to it, and the rights you have over it. It supports the more
          formal text in our{' '}
          <a className="link-underline" href="/privacy">
            privacy notice
          </a>
          .
        </p>

        <div className="rounded-xl border border-cream-100/10 bg-ink-700/60 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
            Controller
          </p>
          <p className="mt-2 text-sm text-cream-100/85">
            Digital Crest Consulting Ltd, registered in England and Wales. Contact{' '}
            <a className="link-underline" href="mailto:legal@digitalcrest.co.uk">
              legal@digitalcrest.co.uk
            </a>{' '}
            for any data protection matter.
          </p>
        </div>

        <h2 className="font-display text-xl font-semibold tracking-tight text-cream-100 sm:text-2xl">
          What we collect, why, and for how long
        </h2>
        <div className="overflow-hidden rounded-xl border border-cream-100/10">
          <table className="w-full border-collapse text-left text-[13px]">
            <thead className="bg-ink-700/60 font-mono text-[10px] uppercase tracking-[0.18em] text-cream-100/55">
              <tr>
                <th className="px-3 py-2 font-normal">Category</th>
                <th className="px-3 py-2 font-normal">Data points</th>
                <th className="px-3 py-2 font-normal">Lawful basis</th>
                <th className="px-3 py-2 font-normal">Retention</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c) => (
                <tr key={c.name} className="border-t border-cream-100/10 align-top">
                  <td className="px-3 py-2 text-sm font-medium text-cream-100">{c.name}</td>
                  <td className="px-3 py-2 text-cream-100/75">{c.items}</td>
                  <td className="px-3 py-2 text-cream-100/75">{c.basis}</td>
                  <td className="px-3 py-2 text-cream-100/75">{c.retention}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-display text-xl font-semibold tracking-tight text-cream-100 sm:text-2xl">
          Who has access
        </h2>
        <p>
          Access to personal data is limited to Digital Crest staff who need it for the purpose
          stated. We share data only with the processors below, and only as needed to deliver
          services. We do not sell personal data and we do not allow third party advertising
          trackers on this site.
        </p>
        <ul className="grid gap-2">
          {recipients.map((r) => (
            <li
              key={r}
              className="flex items-start gap-3 rounded-lg border border-cream-100/10 bg-ink-700/60 p-3 text-sm text-cream-100/85"
            >
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {r}
            </li>
          ))}
        </ul>

        <h2 className="font-display text-xl font-semibold tracking-tight text-cream-100 sm:text-2xl">
          International transfers
        </h2>
        <p>
          Where a processor stores data outside the UK or EEA, we rely on adequacy decisions, the
          UK International Data Transfer Agreement, or Standard Contractual Clauses with
          appropriate supplementary measures. A current list of processors and the safeguards in
          place is available on request.
        </p>

        <h2 className="font-display text-xl font-semibold tracking-tight text-cream-100 sm:text-2xl">
          Your rights
        </h2>
        <ul className="grid gap-2">
          {rights.map((r) => (
            <li
              key={r}
              className="flex items-start gap-3 rounded-lg border border-cream-100/10 bg-ink-700/60 p-3 font-mono text-[12.5px] leading-relaxed text-cream-100/85"
            >
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {r}
            </li>
          ))}
        </ul>
        <p>
          To exercise any of these rights, email{' '}
          <a className="link-underline" href="mailto:legal@digitalcrest.co.uk">
            legal@digitalcrest.co.uk
          </a>
          . We will respond within one month. You can also lodge a complaint with the UK
          Information Commissioner&apos;s Office at{' '}
          <a className="link-underline" href="https://ico.org.uk" target="_blank" rel="noreferrer">
            ico.org.uk
          </a>
          .
        </p>

        <h2 className="font-display text-xl font-semibold tracking-tight text-cream-100 sm:text-2xl">
          Cookies and tracking
        </h2>
        <p>
          We use a small set of cookies. Essential cookies are set so the site works. Analytics and
          preferences cookies are optional and only set if you accept them in the consent banner.
          See the{' '}
          <a className="link-underline" href="/cookies">
            cookie notice
          </a>{' '}
          for the full table and your options.
        </p>

        <h2 className="font-display text-xl font-semibold tracking-tight text-cream-100 sm:text-2xl">
          Children
        </h2>
        <p>
          digitalcrest.co.uk is aimed at business audiences. We do not knowingly collect personal
          data from children. If you believe a child has provided personal data to us, contact{' '}
          <a className="link-underline" href="mailto:legal@digitalcrest.co.uk">
            legal@digitalcrest.co.uk
          </a>{' '}
          and we will delete it.
        </p>
      </div>
    </section>
  );
}
