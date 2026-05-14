import { ShieldCheck, Scale, Users, Sparkles } from 'lucide-react';

const principles = [
  {
    icon: ShieldCheck,
    title: 'Trust',
    body: 'Earned by the work, not claimed in a pitch. We show our reasoning, our evidence, and our trade offs.',
  },
  {
    icon: Scale,
    title: 'Integrity',
    body: 'What we say in private, we say in public. The recommendation does not change to win the engagement.',
  },
  {
    icon: Users,
    title: 'Customer first',
    body: 'Your outcome is the brief, not the contract. We measure ourselves against your business, not our hours.',
  },
  {
    icon: Sparkles,
    title: 'Excellence',
    body: 'Senior people, senior standards, every engagement. Quiet, exacting craft is the only acceptable default.',
  },
];

export function Principles() {
  return (
    <section className="container-page mt-24 lg:mt-32">
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow eyebrow-dot">Core values</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream-100 sm:text-4xl">
            What we stand for.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cream-100/70">
            Four values that govern every engagement, in good weather and bad.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-cream-100/10 bg-cream-100/10 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="bg-ink-700 p-6">
              <p.icon className="h-5 w-5 text-gold" />
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-cream-100">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-100/70">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
