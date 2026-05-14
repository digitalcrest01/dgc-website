import { Compass, Layers, Hammer, BadgeCheck } from 'lucide-react';

const phases = [
  {
    label: 'Discover',
    code: 'phase.01',
    icon: Compass,
    body: 'We start by listening. Architecture walkthroughs, stakeholder interviews and a risk baseline grounded in your business model, not a template.',
    deliverables: ['Risk baseline', 'Threat model', 'Quick wins list'],
  },
  {
    label: 'Design',
    code: 'phase.02',
    icon: Layers,
    body: 'A target operating model that fits your team and stack. Controls mapped to the frameworks that matter, with a costed and prioritised roadmap.',
    deliverables: ['Target operating model', 'Control library', 'Costed roadmap'],
  },
  {
    label: 'Build',
    code: 'phase.03',
    icon: Hammer,
    body: 'Senior engineers and architects working alongside your people. Pipeline guardrails, detections, identity, and the platform patterns that make the secure path the easy path.',
    deliverables: ['Guardrails as code', 'Detections', 'Runbooks'],
  },
  {
    label: 'Prove',
    code: 'phase.04',
    icon: BadgeCheck,
    body: 'Audit support, board reporting and metrics that hold up. We hand over an environment your team can run, not a deck and a retainer.',
    deliverables: ['Evidence pipeline', 'Audit support', 'Board pack'],
  },
];

export function Approach() {
  return (
    <section className="relative mt-32 lg:mt-44">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow eyebrow-dot">How we work</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
              A method, not
              <br />
              a methodology.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-navy/70">
              Four phases, repeatable, transparent, and built for engineering teams. We tell you
              what we will do, do it, then prove it. No black boxes, no recycled templates.
            </p>
          </div>

          <ol className="relative space-y-4 border-l border-navy/15 pl-0 lg:pl-0">
            {phases.map((p, i) => (
              <li key={p.label} className="relative">
                <div className="group relative grid grid-cols-[44px_1fr] gap-5 rounded-2xl border border-transparent p-5 transition-colors hover:border-navy/10 hover:bg-cream-100/60">
                  <div className="relative">
                    <div className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-full -translate-y-1/2 bg-navy/20" />
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-navy/15 bg-cream-50 text-gold-500">
                      <p.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-navy">
                        {p.label}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy/45">
                        {p.code}
                      </span>
                    </div>
                    <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-navy/70">
                      {p.body}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.deliverables.map((d) => (
                        <span key={d} className="chip">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {i < phases.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute left-0 top-full h-4 w-px bg-navy/10"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
