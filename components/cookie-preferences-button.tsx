'use client';

import { OPEN_CONSENT_EVENT } from './cookie-consent';

export function CookiePreferencesButton({ className }: { className?: string }) {
  function open() {
    window.dispatchEvent(new CustomEvent(OPEN_CONSENT_EVENT));
  }
  return (
    <button
      type="button"
      onClick={open}
      className={className ?? 'hover:text-cream-100'}
    >
      Cookie preferences
    </button>
  );
}
