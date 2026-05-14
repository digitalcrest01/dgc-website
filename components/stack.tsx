import { Layers, Network, Database, Gavel } from 'lucide-react';

const layers = [
  {
    code: 'L4',
    label: 'Application',
    icon: Layers,
    summary: 'Code, APIs, services, supply chain',
    tags: ['SSDLC', 'Threat models', 'SAST · DAST', 'SBOM', 'Signed builds'],
  },
  {
    code: 'L3',
    label: 'Platform',
    icon: Network,
    summary: 'Identity, network, runtime, detection',
    tags: ['SSO · SCIM', 'Zero trust', 'Kubernetes', 'EDR · XDR', 'SIEM'],
  },
  {
    code: 'L2',
    label: 'Data',
    icon: Database,
    summary: 'Classification, encryption, residency',
    tags: ['KMS · HSM', 'Tokenisation', 'DLP', 'Lineage', 'Residency'],
  },
  {
    code: 'L1',
    label: 'Governance',
    icon: Gavel,
    summary: 'Controls, evidence, risk, audit',
    tags: ['ISO 27001', 'SOC 2', 'NIST CSF', 'DORA · NIS2', 'Board pack'],
  },
];

export function Stack() {
  return (
    <section className="container-page mt-24 lg:mt-32">
      <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow eyebrow-dot">The stack we secure</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream-100 sm:text-4xl">
            From the codebase to the boardroom.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-cream-100/70">
            One coherent view of risk across every layer your business runs on.
          </p>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-100/55">
          spec · v1.0 · 04 layers
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-cream-100/15 bg-ink-700 text-cream-100 shadow-xl shadow-navy/15">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-cream [background-size:48px_48px] opacity-[0.06]"
        />
        <div className="flex items-center justify-between border-b border-cream-100/10 px-5 py-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-100/55">
            digital crest · stack
          </p>
          <p className="font-mono text-[10px] text-cream-100/40">layered defence model</p>
        </div>
        <ul className="relative grid grid-cols-1 gap-px bg-cream-100/10">
          {layers.map((l) => (
            <li
              key={l.code}
              className="grid grid-cols-[88px_1fr] items-start gap-5 bg-ink-700 px-5 py-5 sm:grid-cols-[100px_220px_1fr] sm:items-center sm:px-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                  {l.code}
                </span>
                <span aria-hidden className="hidden h-px w-6 bg-ink-700/15 sm:inline-block" />
              </div>
              <div className="col-start-2 flex items-center gap-3 sm:col-start-2">
                <l.icon className="h-4 w-4 text-gold/90" />
                <div>
                  <p className="font-display text-base font-semibold text-cream-100">{l.label}</p>
                  <p className="hidden text-xs text-cream-100/55 sm:block">{l.summary}</p>
                </div>
              </div>
              <p className="col-span-2 col-start-1 text-xs text-cream-100/55 sm:hidden">
                {l.summary}
              </p>
              <div className="col-span-2 col-start-1 flex flex-wrap gap-1.5 sm:col-span-1 sm:col-start-3 sm:justify-end">
                {l.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-cream-100/15 bg-ink-700/[0.04] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cream-100/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-3 gap-px border-t border-cream-100/10 bg-cream-100/10">
          {[
            ['Coverage', 'end to end'],
            ['Integration', 'pipeline native'],
            ['Assurance', 'continuous'],
          ].map(([k, v]) => (
            <div key={k} className="bg-ink-700 px-5 py-3">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-cream-100/45">
                {k}
              </p>
              <p className="mt-0.5 font-mono text-[11px] text-cream-100/90">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
