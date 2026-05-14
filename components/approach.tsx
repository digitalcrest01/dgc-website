import { Compass, Layers, Hammer, BadgeCheck } from 'lucide-react';

const phases = [
  {
    label: 'Discover',
    code: 'phase.01',
    icon: Compass,
    body: 'Architecture walkthroughs, stakeholder interviews, a risk baseline grounded in your business.',
    deliverables: ['Risk baseline', 'Threat model', 'Quick wins'],
  },
  {
    label: 'Design',
    code: 'phase.02',
    icon: Layers,
    body: 'A target operating model that fits your team. Controls mapped to the frameworks that matter.',
    deliverables: ['Operating model', 'Control library', 'Roadmap'],
  },
  {
    label: 'Build',
    code: 'phase.03',
    icon: Hammer,
    body: 'Senior engineers alongside your people. Guardrails, detections, identity, and platform patterns.',
    deliverables: ['Guardrails as code', 'Detections', 'Runbooks'],
  },
  {
    label: 'Prove',
    code: 'phase.04',
    icon: BadgeCheck,
    body: 'Audit support, board reporting, metrics that hold up. Your team runs it after we leave.',
    deliverables: ['Evidence pipeline', 'Audit support', 'Board pack'],
  },
];

export function Approach() {
  return (
    <section className="relative mt-24 lg:mt-32">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="eyebrow eyebrow-dot">How we work</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              A method, not a methodology.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-navy/70">
              Four phases, repeatable, transparent. We tell you what we will do, do it, then prove
              it.
            </p>
          </div>

          <ol className="space-y-3">
            {phases.map((p) => (
              <li key={p.label}>
                <div className="group grid grid-cols-[40px_1fr] gap-5 rounded-xl border border-transparent p-4 transition-colors hover:border-navy/10 hover:bg-cream-100/60">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy/15 bg-cream-50 text-gold-500">
                    <p.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-xl font-semibold tracking-tight text-navy">
                        {p.label}
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-navy/45">
                        {p.code}
                      </span>
                    </div>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-navy/70">
                      {p.body}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.deliverables.map((d) => (
                        <span key={d} className="chip">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
