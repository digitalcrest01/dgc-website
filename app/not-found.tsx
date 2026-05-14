import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70dvh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow eyebrow-dot">404</p>
      <h1 className="mt-4 font-display text-6xl font-semibold tracking-tight text-navy sm:text-7xl">
        Off the map.
      </h1>
      <p className="mt-4 max-w-lg text-lg text-navy/70">
        The page you were looking for is not here. It may have moved, or it may never have existed.
        Either way, let us get you back to safe ground.
      </p>
      <Link href="/" className="btn-primary mt-8">
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </section>
  );
}
