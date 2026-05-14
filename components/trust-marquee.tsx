const badges = [
  'ISO 27001',
  'SOC 2',
  'NIST CSF',
  'CIS v8',
  'OWASP ASVS',
  'NIST SSDF',
  'DORA',
  'NIS2',
  'PCI DSS',
  'AWS',
  'Azure',
  'Google Cloud',
  'Kubernetes',
  'Zero Trust',
  'SLSA',
  'CSA STAR',
];

export function TrustMarquee() {
  return (
    <section className="relative mt-20 lg:mt-24">
      <div className="container-page">
        <p className="eyebrow eyebrow-dot mb-4">Frameworks and platforms</p>
      </div>
      <div className="relative mask-fade-edges overflow-hidden border-y border-cream-100/10 bg-ink-700/60 py-4">
        <div className="flex w-max animate-marquee gap-8 px-6 will-change-transform">
          {[...badges, ...badges].map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="whitespace-nowrap font-display text-lg font-medium tracking-tight text-cream-100/55"
            >
              {b}
              <span aria-hidden className="ml-8 text-gold/60">
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
