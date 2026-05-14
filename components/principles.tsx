import { ShieldHalf, GitBranch, Eye, Scale } from 'lucide-react';

const principles = [
  {
    icon: ShieldHalf,
    title: 'Defensible, not theatrical',
    body: 'Every control we recommend is justified by a real threat or a real obligation. We do not ship security theatre.',
  },
  {
    icon: GitBranch,
    title: 'Engineering native',
    body: 'Security as code, in pull requests, in pipelines, in the runtime. The secure path is the easy path.',
  },
  {
    icon: Eye,
    title: 'Evidence first',
    body: 'If it is not measured, it is a story. We wire telemetry into controls so assurance is continuous, not a quarterly scramble.',
  },
  {
    icon: Scale,
    title: 'Outcome accountable',
    body: 'We agree what good looks like before we start, then prove it. No vanity metrics, no recycled deliverables.',
  },
];

export function Principles() {
  return (
    <section className="container-page mt-32 lg:mt-44">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow eyebrow-dot">Principles</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            How we think
            <br />
            about your risk.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="bg-cream-100 p-7">
              <p.icon className="h-5 w-5 text-gold-500" />
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-navy">
                {p.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-navy/70">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
