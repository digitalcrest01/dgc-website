import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Linkedin } from 'lucide-react';
import { Logo } from './logo';
import { services } from '@/lib/services';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-navy/10 bg-navy text-cream-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-cream [background-size:48px_48px] opacity-[0.07]"
      />
      <div className="container-page relative grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Digital Crest home">
            <Logo className="h-10 w-auto text-cream-100" variant="mark" monochrome />
            <span className="font-display text-lg font-semibold">
              Digital<span className="text-gold">Crest</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-100/70">
            A UK based cyber security consultancy. We secure software, harden cloud platforms, and
            build defensible programmes for teams that need to ship and stay compliant.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:hello@digitalcrest.co.uk"
              className="inline-flex items-center gap-2 rounded-full border border-cream-100/20 px-4 py-2 text-xs text-cream-100/90 transition-colors hover:bg-cream-100/10"
            >
              <Mail className="h-3.5 w-3.5" /> hello@digitalcrest.co.uk
            </a>
            <a
              href="https://www.linkedin.com/company/digitalcrestconsulting"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream-100/20 px-4 py-2 text-xs text-cream-100/90 transition-colors hover:bg-cream-100/10"
            >
              <Linkedin className="h-3.5 w-3.5" /> LinkedIn
            </a>
          </div>
        </div>

        <FooterCol title="Services">
          {services.map((s) => (
            <FooterLink key={s.slug} href={`/services/${s.slug}`}>
              {s.shortName}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Company">
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/approach">Approach</FooterLink>
          <FooterLink href="/insights">Insights</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterCol>

        <FooterCol title="Get in touch">
          <li className="flex items-start gap-2 text-sm text-cream-100/75">
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
            <span>United Kingdom, remote first</span>
          </li>
          <li className="pt-2">
            <Link href="/contact" className="btn-gold w-full justify-center">
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </li>
        </FooterCol>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-6 text-xs text-cream-100/60 md:flex-row md:items-center">
          <p>
            © {year} Digital Crest Consulting Ltd. Registered in England and Wales. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-cream-100">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-cream-100">
              Terms
            </Link>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream-100/40">
              v1.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">{title}</p>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-1.5 text-sm text-cream-100/80 transition-colors hover:text-cream-100"
      >
        {children}
        <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-60" />
      </Link>
    </li>
  );
}
