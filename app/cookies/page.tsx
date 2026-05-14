import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookies',
  description: 'Cookie notice for digitalcrest.co.uk.',
};

const rows: { name: string; purpose: string; lifetime: string; category: string }[] = [
  {
    name: 'dgc.consent.v1',
    purpose: 'Stores your cookie preferences so we do not ask again.',
    lifetime: '12 months',
    category: 'Essential',
  },
  {
    name: 'dgc.session',
    purpose: 'Maintains anti CSRF tokens and security headers for the contact form.',
    lifetime: 'Session',
    category: 'Essential',
  },
  {
    name: '_pa_*',
    purpose: 'Aggregated, anonymous traffic measurement. No cross site tracking.',
    lifetime: '13 months',
    category: 'Analytics (optional)',
  },
  {
    name: 'dgc.prefs',
    purpose: 'Remembers display choices such as colour scheme between visits.',
    lifetime: '6 months',
    category: 'Preferences (optional)',
  },
];

export default function CookiesPage() {
  return (
    <section className="container-page max-w-3xl pt-14 lg:pt-20">
      <p className="eyebrow eyebrow-dot">Legal</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-cream-100 sm:text-5xl">
        Cookie notice
      </h1>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-cream-100/55">
        Last updated · 2025
      </p>

      <div className="mt-8 space-y-5 text-sm leading-relaxed text-cream-100/80">
        <p>
          We use a small set of cookies on digitalcrest.co.uk. Essential cookies are set so the site
          works. Analytics and preferences cookies are optional and only set if you accept them in
          the consent banner.
        </p>

        <h2 className="font-display text-lg font-semibold tracking-tight text-cream-100">Categories</h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <span className="font-semibold">Essential.</span> Required for the site to function.
            Cannot be disabled.
          </li>
          <li>
            <span className="font-semibold">Analytics.</span> Aggregated, anonymous metrics that
            help us improve content and performance.
          </li>
          <li>
            <span className="font-semibold">Preferences.</span> Remember small choices such as
            display options between visits.
          </li>
        </ul>

        <h2 className="font-display text-lg font-semibold tracking-tight text-cream-100">
          What we set
        </h2>
        <div className="overflow-hidden rounded-xl border border-cream-100/10">
          <table className="w-full border-collapse text-left text-[13px]">
            <thead className="bg-ink-700/60 font-mono text-[10px] uppercase tracking-[0.18em] text-cream-100/55">
              <tr>
                <th className="px-3 py-2 font-normal">Name</th>
                <th className="px-3 py-2 font-normal">Purpose</th>
                <th className="px-3 py-2 font-normal">Lifetime</th>
                <th className="px-3 py-2 font-normal">Category</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name} className="border-t border-cream-100/10 align-top">
                  <td className="px-3 py-2 font-mono text-[12px] text-cream-100">{r.name}</td>
                  <td className="px-3 py-2 text-cream-100/75">{r.purpose}</td>
                  <td className="px-3 py-2 text-cream-100/75">{r.lifetime}</td>
                  <td className="px-3 py-2 text-cream-100/75">{r.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-display text-lg font-semibold tracking-tight text-cream-100">
          Your choices
        </h2>
        <p>
          You can change or withdraw consent at any time. Clear your cookies for this site to be
          asked again, or use your browser settings to block cookies in general.
        </p>

        <h2 className="font-display text-lg font-semibold tracking-tight text-cream-100">Questions</h2>
        <p>
          Email{' '}
          <a className="link-underline" href="mailto:legal@digitalcrest.co.uk">
            legal@digitalcrest.co.uk
          </a>{' '}
          and we will respond within one month.
        </p>
      </div>
    </section>
  );
}
