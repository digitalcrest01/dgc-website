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
  'AWS Security',
  'Azure Security',
  'Google Cloud',
  'Kubernetes',
  'Zero Trust',
  'SLSA',
  'CSA STAR',
];

export function TrustMarquee() {
  return (
    <section className="relative mt-24 lg:mt-32">
      <div className="container-page">
        <p className="eyebrow eyebrow-dot mb-6">Frameworks and platforms we deliver</p>
      </div>
      <div className="relative mask-fade-edges overflow-hidden border-y border-navy/10 bg-cream-100/60 py-5">
        <div className="flex w-max animate-marquee gap-10 px-6 will-change-transform">
          {[...badges, ...badges].map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="whitespace-nowrap font-display text-2xl font-medium tracking-tight text-navy/55"
            >
              {b}
              <span aria-hidden className="ml-10 text-gold/60">
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
