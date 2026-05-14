import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70dvh] flex-col items-center justify-center py-16 text-center">
      <p className="eyebrow eyebrow-dot">404</p>
      <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight text-cream-100 sm:text-6xl">
        Off the map.
      </h1>
      <p className="mt-3 max-w-md text-base text-cream-100/70">
        The page is not here. Let us get you back to safe ground.
      </p>
      <Link href="/" className="btn-primary mt-6">
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </section>
  );
}
