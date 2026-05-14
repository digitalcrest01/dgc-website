import { ShieldHalf, GitBranch, Eye, Scale } from 'lucide-react';

const principles = [
  {
    icon: ShieldHalf,
    title: 'Defensible, not theatrical',
    body: 'Every control is justified by a real threat or obligation. No security theatre.',
  },
  {
    icon: GitBranch,
    title: 'Engineering native',
    body: 'Security as code, in pull requests, pipelines, runtime. The secure path is the easy path.',
  },
  {
    icon: Eye,
    title: 'Evidence first',
    body: 'If it is not measured, it is a story. Telemetry wired into controls, continuous assurance.',
  },
  {
    icon: Scale,
    title: 'Outcome accountable',
    body: 'We agree what good looks like before we start, then prove it. No vanity metrics.',
  },
];

export function Principles() {
  return (
    <section className="container-page mt-24 lg:mt-32">
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow eyebrow-dot">Principles</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            How we think about risk.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-navy/10 bg-navy/10 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="bg-cream-100 p-6">
              <p.icon className="h-4 w-4 text-gold-500" />
              <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-navy">
                {p.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy/70">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
