'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './logo';
import { services } from '@/lib/services';

const primaryNav = [
  { href: '/services', label: 'Services' },
  { href: '/approach', label: 'Approach' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-navy/10 bg-cream-200/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-page flex h-14 items-center justify-between lg:h-16">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Digital Crest home">
          <Logo className="h-7 w-auto" variant="mark" />
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:inline">
            Digital<span className="text-gold">Crest</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="rounded-full px-3 py-1.5 text-[13px] font-medium text-navy/80 transition-colors hover:text-navy"
            >
              Services
            </Link>
            <div
              className={`absolute left-1/2 top-full w-[500px] -translate-x-1/2 pt-2 transition-all ${
                servicesOpen
                  ? 'pointer-events-auto translate-y-0 opacity-100'
                  : 'pointer-events-none -translate-y-1 opacity-0'
              }`}
            >
              <div className="grid grid-cols-2 gap-1.5 rounded-xl border border-navy/10 bg-cream-50 p-2.5 shadow-xl shadow-navy/5">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex items-start gap-2.5 rounded-lg p-2.5 transition-colors hover:bg-cream-200"
                  >
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-navy/15 bg-cream-100 text-gold">
                      <s.icon className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-navy">{s.shortName}</p>
                      <p className="mt-0.5 text-[11.5px] text-navy/65">{s.tagline}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {primaryNav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-[13px] font-medium text-navy/80 transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/contact" className="btn-primary">
            Book a call
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 text-navy lg:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="container-page space-y-1.5 border-t border-navy/10 bg-cream-100 py-5">
            <p className="eyebrow eyebrow-dot">Services</p>
            <div className="grid gap-1">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] font-medium hover:bg-cream-200"
                >
                  <span>{s.shortName}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-navy/40" />
                </Link>
              ))}
            </div>
            <div className="hairline my-2" />
            {primaryNav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-[13px] font-medium hover:bg-cream-200"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
              Book a call
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
