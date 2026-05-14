import type { Metadata } from 'next';
import { Mail, MapPin, Linkedin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a 30 minute discovery call with Digital Crest Consulting.',
};

export default function ContactPage() {
  return (
    <section className="container-page pt-14 lg:pt-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow eyebrow-dot">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy text-balance sm:text-5xl">
            Let us scope the right thing.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-navy/70">
            A 30 minute call with a senior practitioner. Clear next step, whether that is with us
            or not.
          </p>

          <ul className="mt-8 space-y-4">
            <Item icon={Mail} label="Enquiries">
              <a className="link-underline" href="mailto:enquiries@digitalcrest.co.uk">
                enquiries@digitalcrest.co.uk
              </a>
            </Item>
            <Item icon={Mail} label="General info">
              <a className="link-underline" href="mailto:info@digitalcrest.co.uk">
                info@digitalcrest.co.uk
              </a>
            </Item>
            <Item icon={Mail} label="Legal and privacy">
              <a className="link-underline" href="mailto:legal@digitalcrest.co.uk">
                legal@digitalcrest.co.uk
              </a>
            </Item>
            <Item icon={MapPin} label="Location">
              United Kingdom · remote first
            </Item>
            <Item icon={Clock} label="Response">
              Within 1 working day, Mon to Fri, GMT
            </Item>
            <Item icon={Linkedin} label="Social">
              <a
                className="link-underline"
                href="https://www.linkedin.com/company/digitalcrestconsulting"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </Item>
          </ul>

          <div className="mt-10 rounded-xl border border-navy/10 bg-cream-100/60 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy/55">
              Before the call
            </p>
            <p className="mt-2 text-sm leading-relaxed text-navy/75">
              A short brief helps. A couple of lines on your goal and constraints is enough.
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function Item({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-navy/15 bg-cream-100 text-gold-500">
        <Icon className="h-3.5 w-3.5" />
      </div>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy/55">{label}</p>
        <p className="mt-0.5 text-sm text-navy">{children}</p>
      </div>
    </li>
  );
}
