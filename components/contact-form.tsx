'use client';

import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const services = [
  'Application Security',
  'GRC and Audit',
  'Security Engineering',
  'Cloud Architecture',
  'Not sure yet',
];

const sizes = ['1 to 50', '51 to 250', '251 to 1000', '1000+'];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const mail = [
      `From: ${data.get('name')} <${data.get('email')}>`,
      `Company: ${data.get('company')} (${data.get('size')})`,
      `Interest: ${data.get('service')}`,
      '',
      String(data.get('message') ?? ''),
    ].join('\n');
    const href = `mailto:enquiries@digitalcrest.co.uk?cc=info@digitalcrest.co.uk&subject=${encodeURIComponent(
      'New enquiry · ' + (data.get('company') || data.get('name') || 'website'),
    )}&body=${encodeURIComponent(mail)}`;
    window.location.href = href;
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-navy/10 bg-cream-100 p-10 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-gold-500" />
        <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-navy">
          Your mail client should be open.
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-navy/70">
          If it did not launch, drop a note to{' '}
          <a className="link-underline" href="mailto:enquiries@digitalcrest.co.uk">
            enquiries@digitalcrest.co.uk
          </a>{' '}
          and we will be in touch within one working day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-navy/10 bg-cream-100 p-7 lg:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" required />
        <Field label="Work email" name="email" type="email" required />
        <Field label="Company" name="company" required />
        <Select label="Team size" name="size" options={sizes} />
      </div>

      <Select className="mt-5" label="Primary interest" name="service" options={services} />

      <Textarea
        className="mt-5"
        label="Tell us a little about the goal"
        name="message"
        placeholder="A few sentences on what you are trying to achieve, the timeline, and any constraints worth knowing."
        rows={5}
      />

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy/55">
          Replies within 1 working day
        </p>
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'Opening mail…' : 'Send enquiry'}
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy/55">
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-navy/15 bg-cream-50 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-navy focus:bg-cream-50"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
  className = '',
}: {
  label: string;
  name: string;
  options: string[];
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy/55">
        {label}
      </span>
      <select
        name={name}
        className="mt-2 w-full appearance-none rounded-xl border border-navy/15 bg-cream-50 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-navy"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function Textarea({
  label,
  name,
  rows = 4,
  placeholder,
  className = '',
}: {
  label: string;
  name: string;
  rows?: number;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy/55">
        {label}
      </span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="mt-2 w-full resize-none rounded-xl border border-navy/15 bg-cream-50 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-navy"
      />
    </label>
  );
}
