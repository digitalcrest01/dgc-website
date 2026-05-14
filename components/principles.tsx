import { ShieldCheck, Scale, Users, Sparkles } from 'lucide-react';

const principles = [
  {
    icon: ShieldCheck,
    title: 'Trust',
    body: 'Trust is the foundation of every assessment we run and every recommendation we make. We build it the only way it can be built, through transparent reasoning, measured promises, and a willingness to be wrong out loud.',
  },
  {
    icon: Scale,
    title: 'Integrity',
    body: 'Integrity is the alignment between what we know, what we say, and what we do. We will not soften a finding to keep an engagement, dilute a recommendation to avoid a hard conversation, or sign off on a control that does not work.',
  },
  {
    icon: Users,
    title: 'Customer first',
    body: 'Your outcome is our scoreboard. Not hours billed, not deliverables produced, not slides presented. When the right answer is to do less or to stop, we are the ones to say it.',
  },
  {
    icon: Sparkles,
    title: 'Excellence',
    body: 'Excellence is the discipline of refusing to settle. Senior practitioners, peer reviewed work, evidence behind every claim. Good enough is not enough when the consequences of failure are this real.',
  },
];

export function Principles() {
  return (
    <section className="container-page mt-24 lg:mt-32">
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow eyebrow-dot">Core values</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream-100 sm:text-4xl">
            What we stand for.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cream-100/70">
            Four values that govern every engagement, in good weather and bad. Stated plainly so we
            can be held to them.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-cream-100/10 bg-cream-100/10 sm:grid-cols-2">
          {principles.map((p) => (
            <article key={p.title} className="bg-ink-700 p-7">
              <div className="flex items-center gap-2">
                <p.icon className="h-5 w-5 text-gold" />
                <h3 className="font-display text-lg font-semibold tracking-tight text-cream-100">
                  {p.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-cream-100/75">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
