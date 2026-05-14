import type { Metadata } from 'next';
import { Mail, MapPin, Linkedin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a 30 minute discovery call with Digital Crest Consulting. Senior practitioner, no sales motion, clear next step.',
};

export default function ContactPage() {
  return (
    <section className="container-page pt-20 lg:pt-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow eyebrow-dot">Contact</p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-navy text-balance sm:text-6xl">
            Let us help you
            <br />
            <span className="text-navy/55">scope the right thing.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-navy/70">
            A 30 minute call with a senior practitioner. You leave with a clear view of what to do
            next, whether that is with us or not.
          </p>

          <ul className="mt-10 space-y-5">
            <Item icon={Mail} label="Email">
              <a className="link-underline" href="mailto:hello@digitalcrest.co.uk">
                hello@digitalcrest.co.uk
              </a>
            </Item>
            <Item icon={MapPin} label="Location">
              United Kingdom, remote first
            </Item>
            <Item icon={Clock} label="Response time">
              Within 1 working day, Monday to Friday, GMT
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

          <div className="mt-12 rounded-2xl border border-navy/10 bg-cream-100/60 p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-navy/55">
              Before the call
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-navy/75">
              A short brief helps us turn up prepared. Even a couple of lines on your goal and
              constraints is enough. We do the rest of the homework.
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
    <li className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-navy/15 bg-cream-100 text-gold-500">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-navy/55">{label}</p>
        <p className="mt-1 text-[15px] text-navy">{children}</p>
      </div>
    </li>
  );
}
