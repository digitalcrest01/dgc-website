export function Quote() {
  return (
    <section className="container-page mt-24 lg:mt-32">
      <figure className="relative overflow-hidden rounded-2xl border border-navy/10 bg-navy p-8 text-cream-100 lg:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-cream [background-size:48px_48px] opacity-[0.05]"
        />
        <div className="relative max-w-3xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
            From the team
          </p>
          <blockquote className="mt-4 font-display text-xl font-medium leading-snug tracking-tight text-balance sm:text-2xl">
            &ldquo;Security is making the right thing the easy thing. Everything else is friction,
            and friction is where breaches live.&rdquo;
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/20 bg-cream-100/5 font-mono text-xs text-gold">
              DC
            </div>
            <div>
              <p className="text-xs font-semibold text-cream-100">Founding team</p>
              <p className="text-[11px] text-cream-100/60">Digital Crest Consulting</p>
            </div>
          </figcaption>
        </div>
      </figure>
    </section>
  );
}
