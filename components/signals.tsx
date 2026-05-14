const signals = [
  { value: 'Est. 2019', label: 'Operating since' },
  { value: '4', label: 'Disciplines' },
  { value: '12+ yrs', label: 'Median experience' },
  { value: '3 clouds', label: 'AWS · Azure · GCP' },
  { value: 'UK · EU', label: 'Primary regions' },
  { value: 'GMT', label: 'Working hours' },
];

export function Signals() {
  return (
    <section className="container-page mt-20 lg:mt-24">
      <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-cream-100/60">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:32px_32px] opacity-[0.08]"
        />
        <div className="relative flex items-center justify-between border-b border-navy/10 px-5 py-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy/55">
            engineering signals
          </p>
          <p className="font-mono text-[10px] text-navy/45">live</p>
        </div>
        <dl className="relative grid grid-cols-2 gap-px bg-navy/10 sm:grid-cols-3 lg:grid-cols-6">
          {signals.map((s) => (
            <div key={s.label} className="bg-cream-100 px-4 py-4">
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-navy/55">
                {s.label}
              </dt>
              <dd className="mt-1.5 font-display text-base font-semibold text-navy">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
