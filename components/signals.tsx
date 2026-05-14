const signals = [
  { value: 'United Kingdom', label: 'Headquarters' },
  { value: 'Remote first', label: 'Operating model' },
  { value: '4 disciplines', label: 'Practice areas' },
  { value: '3 clouds', label: 'AWS · Azure · GCP' },
  { value: 'UK · EU', label: 'Primary regions' },
  { value: 'GMT', label: 'Working hours' },
];

export function Signals() {
  return (
    <section className="container-page mt-20 lg:mt-24">
      <div className="relative overflow-hidden rounded-2xl border border-cream-100/10 bg-ink-700/60">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-ink [background-size:32px_32px] opacity-[0.08]"
        />
        <div className="relative flex items-center justify-between border-b border-cream-100/10 px-5 py-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-100/55">
            engineering signals
          </p>
          <p className="font-mono text-[10px] text-cream-100/45">live</p>
        </div>
        <dl className="relative grid grid-cols-2 gap-px bg-cream-100/10 sm:grid-cols-3 lg:grid-cols-6">
          {signals.map((s) => (
            <div key={s.label} className="bg-ink-700 px-4 py-4">
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-cream-100/55">
                {s.label}
              </dt>
              <dd className="mt-1.5 font-display text-base font-semibold text-cream-100">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
