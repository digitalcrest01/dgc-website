import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Linkedin } from 'lucide-react';
import { Logo } from './logo';
import { services } from '@/lib/services';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-navy/10 bg-navy text-cream-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-cream [background-size:48px_48px] opacity-[0.07]"
      />
      <div className="container-page relative grid gap-10 py-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Digital Crest home">
            <Logo className="h-8 w-auto text-cream-100" variant="mark" monochrome />
            <span className="font-display text-base font-semibold">
              Digital<span className="text-gold">Crest</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-100/70">
            A UK based cyber security consultancy. We secure software, harden cloud platforms, and
            build defensible programmes.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-gold/80">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
            est. 2019 · united kingdom
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href="mailto:enquiries@digitalcrest.co.uk"
              className="inline-flex items-center gap-1.5 rounded-full border border-cream-100/20 px-3 py-1.5 text-[11px] text-cream-100/90 transition-colors hover:bg-cream-100/10"
            >
              <Mail className="h-3 w-3" /> enquiries@digitalcrest.co.uk
            </a>
            <a
              href="https://www.linkedin.com/company/digitalcrestconsulting"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-cream-100/20 px-3 py-1.5 text-[11px] text-cream-100/90 transition-colors hover:bg-cream-100/10"
            >
              <Linkedin className="h-3 w-3" /> LinkedIn
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
          <FooterLink href="/research">Research Lab</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterCol>

        <FooterCol title="Get in touch">
          <li className="flex items-start gap-2 text-sm text-cream-100/75">
            <MapPin className="mt-0.5 h-3 w-3 shrink-0 text-gold" />
            <span>UK · remote first</span>
          </li>
          <li className="pt-1.5">
            <Link href="/contact" className="btn-gold w-full justify-center">
              Start a conversation
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </li>
        </FooterCol>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-5 text-[11px] text-cream-100/60 md:flex-row md:items-center">
          <p>
            © {year} Digital Crest Consulting Ltd. Registered in England and Wales.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-cream-100">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-cream-100">
              Cookies
            </Link>
            <Link href="/terms" className="hover:text-cream-100">
              Terms
            </Link>
            <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-cream-100/40">
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
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">{title}</p>
      <ul className="mt-3 space-y-2">{children}</ul>
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
        <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-60" />
      </Link>
    </li>
  );
}
