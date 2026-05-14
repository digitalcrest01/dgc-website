import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { CookieConsent } from '@/components/cookie-consent';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://digitalcrest.co.uk'),
  title: {
    default: 'Digital Crest Consulting | Cyber Security, GRC and Cloud',
    template: '%s | Digital Crest Consulting',
  },
  description:
    'Digital Crest Consulting is a UK based cyber security consultancy specialising in application security, GRC and audit, security engineering, and cloud architecture.',
  keywords: [
    'application security',
    'GRC',
    'security audit',
    'security engineering',
    'cloud architecture',
    'cyber security consultancy',
    'UK security consultancy',
    'AppSec',
    'ISO 27001',
    'SOC 2',
  ],
  openGraph: {
    title: 'Digital Crest Consulting',
    description:
      'Cyber security consultancy specialising in application security, GRC, security engineering and cloud architecture.',
    url: 'https://digitalcrest.co.uk',
    siteName: 'Digital Crest Consulting',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Crest Consulting',
    description:
      'Cyber security consultancy specialising in application security, GRC, security engineering and cloud architecture.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#F2ECDC',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <body className="min-h-dvh bg-cream-200 font-sans text-navy antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-navy focus:px-3 focus:py-2 focus:text-cream-100"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
