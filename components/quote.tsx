export function Quote() {
  return (
    <section className="container-page mt-32 lg:mt-44">
      <figure className="relative overflow-hidden rounded-3xl border border-navy/10 bg-navy p-10 text-cream-100 lg:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-gold/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-cream [background-size:48px_48px] opacity-[0.05]"
        />
        <div className="relative max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
            From the team
          </p>
          <blockquote className="mt-6 font-display text-3xl font-medium leading-snug tracking-tight text-balance sm:text-4xl">
            &ldquo;Security is the practice of making the right thing the easy thing.
            Everything else is friction, and friction is where breaches live.&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/20 bg-cream-100/5 font-mono text-sm text-gold">
              DC
            </div>
            <div>
              <p className="text-sm font-semibold text-cream-100">Founding team</p>
              <p className="text-xs text-cream-100/60">Digital Crest Consulting</p>
            </div>
          </figcaption>
        </div>
      </figure>
    </section>
  );
}
