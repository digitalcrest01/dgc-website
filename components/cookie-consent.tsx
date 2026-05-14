'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { X, Cookie, ShieldCheck } from 'lucide-react';

const STORAGE_KEY = 'dgc.consent.v1';

type Choice = 'all' | 'essential' | null;

type Preferences = {
  essential: true;
  analytics: boolean;
  preferences: boolean;
  setAt: string;
};

function load(): Preferences | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Preferences) : null;
  } catch {
    return null;
  }
}

function save(prefs: Preferences) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    /* ignore quota or disabled storage */
  }
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [preferences, setPreferences] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => {
      if (!load()) setOpen(true);
    }, 600);
    return () => window.clearTimeout(t);
  }, []);

  function persist(choice: Choice, custom?: { analytics?: boolean; preferences?: boolean }) {
    const prefs: Preferences = {
      essential: true,
      analytics: choice === 'all' ? true : choice === 'essential' ? false : custom?.analytics ?? false,
      preferences: choice === 'all' ? true : choice === 'essential' ? false : custom?.preferences ?? false,
      setAt: new Date().toISOString(),
    };
    save(prefs);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-heading"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-2xl border border-navy/15 bg-cream-100 shadow-2xl shadow-navy/15 lg:inset-x-auto lg:left-6 lg:bottom-6 lg:right-auto lg:w-[420px]"
    >
      <div className="flex items-start justify-between gap-3 px-5 pt-4">
        <div className="flex items-center gap-2">
          <Cookie className="h-4 w-4 text-gold-500" />
          <p id="cookie-heading" className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy/65">
            Cookies and privacy
          </p>
        </div>
        <button
          type="button"
          aria-label="Dismiss for this session"
          onClick={() => setOpen(false)}
          className="rounded-full p-1 text-navy/50 hover:bg-navy/5 hover:text-navy"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      {!showSettings ? (
        <div className="px-5 pb-5 pt-3">
          <p className="text-sm leading-relaxed text-navy/80">
            We use a small set of cookies. Essential cookies make the site work. Analytics and
            preferences cookies are optional and only set if you accept.
          </p>
          <p className="mt-2 text-[12px] text-navy/55">
            See our{' '}
            <Link href="/cookies" className="link-underline">
              cookie notice
            </Link>
            ,{' '}
            <Link href="/privacy" className="link-underline">
              privacy notice
            </Link>
            , and{' '}
            <Link href="/terms" className="link-underline">
              terms
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => persist('all')}
              className="btn-primary"
            >
              Accept all
            </button>
            <button
              type="button"
              onClick={() => persist('essential')}
              className="btn-ghost"
            >
              Essential only
            </button>
            <button
              type="button"
              onClick={() => setShowSettings(true)}
              className="ml-auto text-[12px] font-medium text-navy/70 underline-offset-4 hover:underline"
            >
              Manage
            </button>
          </div>
        </div>
      ) : (
        <div className="px-5 pb-5 pt-3">
          <div className="space-y-2.5">
            <Row
              title="Essential"
              detail="Required for the site to function. Cannot be disabled."
              locked
              checked
            />
            <Row
              title="Analytics"
              detail="Anonymous, aggregated usage to improve the site."
              checked={analytics}
              onChange={setAnalytics}
            />
            <Row
              title="Preferences"
              detail="Remember choices such as theme on return visits."
              checked={preferences}
              onChange={setPreferences}
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => persist(null, { analytics, preferences })}
              className="btn-primary"
            >
              Save choices
            </button>
            <button
              type="button"
              onClick={() => setShowSettings(false)}
              className="btn-ghost"
            >
              Back
            </button>
            <span className="ml-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-navy/45">
              <ShieldCheck className="h-3 w-3 text-gold-500" />
              UK GDPR
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function Row({
  title,
  detail,
  checked,
  onChange,
  locked,
}: {
  title: string;
  detail: string;
  checked: boolean;
  onChange?: (v: boolean) => void;
  locked?: boolean;
}) {
  return (
    <label
      className={`flex items-start justify-between gap-3 rounded-lg border border-navy/10 bg-cream-50 p-3 ${
        locked ? 'opacity-90' : 'cursor-pointer hover:bg-cream-50/80'
      }`}
    >
      <div>
        <p className="text-[13px] font-semibold text-navy">{title}</p>
        <p className="mt-0.5 text-[11.5px] leading-snug text-navy/65">{detail}</p>
      </div>
      <span
        aria-hidden
        className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
          checked ? 'bg-navy' : 'bg-navy/15'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 rounded-full bg-cream-100 shadow-sm transition-transform ${
            checked ? 'translate-x-4' : 'translate-x-0.5'
          }`}
        />
      </span>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        disabled={locked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
    </label>
  );
}
