import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowUpRight, Clock, ArrowLeft, ShieldCheck } from 'lucide-react';
import { research, getResearchPost } from '@/lib/research';
import { CTA } from '@/components/cta';

export function generateStaticParams() {
  return research.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getResearchPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
  };
}

export default function ResearchPostPage({ params }: { params: { slug: string } }) {
  const post = getResearchPost(params.slug);
  if (!post) notFound();

  const others = research.filter((p) => p.slug !== post.slug).slice(0, 3);
  const Diagram = post.diagram;

  return (
    <>
      <section className="container-page pt-14 lg:pt-20">
        <Link
          href="/research"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-cream-100/55 hover:text-cream-100"
        >
          <ArrowLeft className="h-3 w-3" /> Research Lab
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="chip">{post.cloud}</span>
          <span className="chip">{post.useCase}</span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-cream-100/55">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-100/45">
            published · {post.published}
          </span>
        </div>

        <h1 className="mt-5 max-w-4xl font-display text-3xl font-semibold tracking-tight text-cream-100 text-balance sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-cream-100/75">{post.summary}</p>
      </section>

      <section className="container-page mt-10 lg:mt-14">
        <Diagram />
      </section>

      <section className="container-page mt-14 lg:mt-20">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <article className="space-y-10">
            {post.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-xl font-semibold tracking-tight text-cream-100 sm:text-2xl">
                  {s.heading}
                </h2>
                <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-cream-100/80">
                  {s.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {s.list && (
                  <ul className="mt-4 space-y-2">
                    {s.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-lg border border-cream-100/10 bg-ink-700/60 p-3 font-mono text-[12px] leading-relaxed text-cream-100/85"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="rounded-2xl border border-cream-100/10 bg-ink-700 p-6 text-cream-100 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
                Takeaway
              </p>
              <p className="mt-3 font-display text-lg font-medium leading-snug text-cream-100 sm:text-xl">
                {post.takeaway}
              </p>
            </div>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-cream-100/10 bg-ink-700 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-100/55">
                Controls satisfied
              </p>
              <ul className="mt-3 space-y-2">
                {post.controls.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-cream-100/80">
                    <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-500" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-cream-100/10 bg-ink-700 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-100/55">
                Need this in your stack?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-cream-100/70">
                Our engineers can pattern this into your environment in a sprint.
              </p>
              <Link href="/contact" className="btn-primary mt-4 w-full justify-center">
                Talk to an engineer
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-page mt-20 lg:mt-24">
        <p className="eyebrow eyebrow-dot">More from the lab</p>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-cream-100 sm:text-3xl">
          Related research.
        </h2>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/research/${o.slug}`}
              className="card group flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="chip">{o.cloud}</span>
                <ArrowUpRight className="h-4 w-4 text-cream-100/40 group-hover:text-cream-100" />
              </div>
              <h3 className="mt-3 font-display text-base font-semibold tracking-tight text-cream-100">
                {o.title}
              </h3>
              <p className="mt-1.5 text-xs text-cream-100/65">{o.useCase}</p>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
