import Link from 'next/link';
import { ArrowUpRight, Rocket, Layers3, Calendar } from 'lucide-react';

const models = [
  {
    icon: Rocket,
    name: 'Sprint',
    duration: '2 to 6 weeks',
    summary: 'A focused assessment with a clear deliverable. Fixed scope, fixed price.',
    items: ['Senior consultant', 'Fixed scope', 'One sprint cycle'],
  },
  {
    icon: Layers3,
    name: 'Programme',
    duration: '3 to 9 months',
    summary: 'Outcome based: certification, SSDLC, identity, detection, cloud platform.',
    items: ['Embedded team', 'Outcomes proven', 'Hand over to your team'],
    featured: true,
  },
  {
    icon: Calendar,
    name: 'Fractional',
    duration: 'Ongoing',
    summary: 'A senior security leader and squad on retainer. Board reporting and audit defence.',
    items: ['Virtual CISO', 'Quarterly board pack', 'Defined SLAs'],
  },
];

export function Engagements() {
  return (
    <section className="container-page mt-24 lg:mt-32">
      <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow eyebrow-dot">Ways to work with us</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Sized to the decision in front of you.
          </h2>
        </div>
        <Link href="/contact" className="btn-ghost">
          Discuss an engagement
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {models.map((m) => (
          <article
            key={m.name}
            className={`relative flex flex-col rounded-xl border p-6 transition-all ${
              m.featured
                ? 'border-navy bg-navy text-cream-100 shadow-xl shadow-navy/20'
                : 'border-navy/10 bg-cream-100/60 hover:border-navy/25 hover:bg-cream-100'
            }`}
          >
            {m.featured && (
              <span className="absolute -top-2.5 left-6 inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.2em] text-navy">
                most chosen
              </span>
            )}
            <div className="flex items-center justify-between">
              <m.icon className={`h-4 w-4 ${m.featured ? 'text-gold' : 'text-gold-500'}`} />
              <span
                className={`font-mono text-[10px] uppercase tracking-[0.18em] ${
                  m.featured ? 'text-cream-100/55' : 'text-navy/55'
                }`}
              >
                {m.duration}
              </span>
            </div>
            <h3
              className={`mt-5 font-display text-xl font-semibold tracking-tight ${
                m.featured ? 'text-cream-100' : 'text-navy'
              }`}
            >
              {m.name}
            </h3>
            <p
              className={`mt-2 text-sm leading-relaxed ${
                m.featured ? 'text-cream-100/75' : 'text-navy/70'
              }`}
            >
              {m.summary}
            </p>
            <ul
              className={`mt-5 space-y-1.5 text-sm ${
                m.featured ? 'text-cream-100/80' : 'text-navy/75'
              }`}
            >
              {m.items.map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className={`mt-1.5 inline-block h-1.5 w-1.5 rounded-full ${
                      m.featured ? 'bg-gold' : 'bg-navy/45'
                    }`}
                  />
                  {i}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
