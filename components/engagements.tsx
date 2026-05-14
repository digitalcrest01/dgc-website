import Link from 'next/link';
import { ArrowUpRight, Rocket, Layers3, Calendar } from 'lucide-react';

const models = [
  {
    icon: Rocket,
    name: 'Sprint',
    duration: '2 to 6 weeks',
    summary:
      'A focused assessment with a clear deliverable. Threat model, audit gap analysis, cloud landing zone review.',
    items: [
      'Senior consultant on the ground',
      'Fixed scope and fixed price',
      'Deliverable inside one sprint cycle',
    ],
  },
  {
    icon: Layers3,
    name: 'Programme',
    duration: '3 to 9 months',
    summary:
      'An outcome based engagement: certification, secure SDLC stand up, identity and detection programme, cloud platform.',
    items: [
      'Programme manager and senior practitioners',
      'Embedded with your team',
      'Outcomes proven, then handed over',
    ],
    featured: true,
  },
  {
    icon: Calendar,
    name: 'Fractional',
    duration: 'Ongoing',
    summary:
      'A senior security leader and squad on retainer. Board reporting, audit defence, programme delivery and incident readiness.',
    items: ['Virtual CISO', 'Quarterly board pack', 'Defined response SLAs'],
  },
];

export function Engagements() {
  return (
    <section className="container-page mt-32 lg:mt-44">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow eyebrow-dot">Ways to work with us</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Sized to fit the
            <br />
            <span className="text-navy/55">decision in front of you.</span>
          </h2>
        </div>
        <Link href="/contact" className="btn-ghost">
          Discuss an engagement
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {models.map((m) => (
          <article
            key={m.name}
            className={`relative flex flex-col rounded-2xl border p-7 transition-all ${
              m.featured
                ? 'border-navy bg-navy text-cream-100 shadow-2xl shadow-navy/20'
                : 'border-navy/10 bg-cream-100/60 hover:border-navy/25 hover:bg-cream-100'
            }`}
          >
            {m.featured && (
              <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-navy">
                most chosen
              </span>
            )}
            <div className="flex items-center justify-between">
              <m.icon
                className={`h-5 w-5 ${m.featured ? 'text-gold' : 'text-gold-500'}`}
              />
              <span
                className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
                  m.featured ? 'text-cream-100/55' : 'text-navy/55'
                }`}
              >
                {m.duration}
              </span>
            </div>
            <h3
              className={`mt-6 font-display text-2xl font-semibold tracking-tight ${
                m.featured ? 'text-cream-100' : 'text-navy'
              }`}
            >
              {m.name}
            </h3>
            <p
              className={`mt-3 text-[15px] leading-relaxed ${
                m.featured ? 'text-cream-100/75' : 'text-navy/70'
              }`}
            >
              {m.summary}
            </p>
            <ul
              className={`mt-6 space-y-2 text-sm ${
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
