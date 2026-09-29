import { useState } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight, BsArrowUpRight, BsCheck2 } from "react-icons/bs";
import { Layout, Eyebrow } from "../../components/Layout";
import { Seo } from "../../components/Seo";
import { BetaSignupModal } from "../../components/BetaSignupModal";
import { useReveal, useHeroEntrance } from "../../components/useReveal";
import { products, getProduct } from "../../data/products";
import { accents, statusClasses } from "../../data/accents";

// Icons are components and can't pass through getStaticProps, so only the slug
// crosses the boundary and the product is looked up again on render.
export default function CaseStudy({ slug }: { slug: string }) {
  const product = getProduct(slug)!;
  const accent = accents[product.accent];
  const [betaApp, setBetaApp] = useState<string | null>(null);
  const metrics = product.metrics.filter((m) => m.value);
  const contactHref = `/contact?type=${encodeURIComponent(product.projectType)}`;
  const index = products.findIndex((p) => p.slug === product.slug);
  const next = products[(index + 1) % products.length];
  useHeroEntrance(slug);
  useReveal(slug);

  return (
    <Layout>
      <Seo title={product.seo.title} description={product.seo.description} path={`/work/${product.slug}`} image={`/og/${product.slug}.png`} />

      <article>
        <header className="relative overflow-hidden px-4 sm:px-6 pt-32 pb-16 md:pt-40">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl">
            <Link href="/#work" data-hero className="inline-flex items-center text-sm font-medium text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white">
              <BsArrowLeft className="mr-2" /> All work
            </Link>
            <div data-hero className="mt-10 flex flex-wrap items-center gap-3">
              <Eyebrow>Case study 0{index + 1}</Eyebrow>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusClasses[product.status]}`}>{product.status}</span>
              <span className="text-xs text-ink-500 dark:text-ink-400">{product.platform}</span>
            </div>
            <h1 className="mt-5 font-display text-5xl font-semibold tracking-tightest text-ink-900 md:text-7xl dark:text-white">
              <span className="inline-block overflow-hidden pb-2 align-bottom"><span data-hero-word className="inline-block">{product.name}</span></span>
            </h1>
            <p data-hero className="mt-4 max-w-2xl text-xl leading-relaxed text-ink-600 md:text-2xl dark:text-ink-300">{product.tagline}</p>
            <div data-hero className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={contactHref} className="group inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3 font-semibold text-white hover:bg-ink-700 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-200">
                Build something like this <BsArrowRight className="ml-2 transition-transform group-hover:translate-x-0.5" />
              </Link>
              {product.beta ? (
                <button onClick={() => setBetaApp(product.name)} className="inline-flex items-center justify-center rounded-full border border-ink-300 px-6 py-3 font-semibold text-ink-800 hover:border-ink-900 dark:border-ink-700 dark:text-ink-100 dark:hover:border-ink-300">
                  Join the beta
                </button>
              ) : product.link ? (
                <a href={product.link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-ink-300 px-6 py-3 font-semibold text-ink-800 hover:border-ink-900 dark:border-ink-700 dark:text-ink-100 dark:hover:border-ink-300">
                  {product.link.label} <BsArrowUpRight className="ml-2 h-3.5 w-3.5" />
                </a>
              ) : null}
            </div>
          </div>
        </header>

        {(metrics.length > 0 || product.highlights.length > 0) && (
          <div className="border-y border-ink-200 px-4 sm:px-6 dark:border-ink-800">
            <dl className="mx-auto grid max-w-4xl grid-cols-2 gap-8 py-10 md:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} data-reveal>
                  <dt className="text-sm text-ink-500 dark:text-ink-400">{m.label}</dt>
                  <dd className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink-900 dark:text-white">{m.value}</dd>
                </div>
              ))}
              <div data-reveal className={metrics.length ? "col-span-2" : "col-span-2 md:col-span-4"}>
                <dt className="text-sm text-ink-500 dark:text-ink-400">Stack</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-800 dark:text-ink-100">{product.stack.flatMap((s) => s.items).slice(0, 6).join(", ")}</dd>
              </div>
            </dl>
          </div>
        )}

        <div className="px-4 sm:px-6 py-20">
          <div className="mx-auto max-w-4xl space-y-20">
            <Section label="01" title="The problem">
              <p className="text-lg leading-relaxed text-ink-600 dark:text-ink-300">{product.problem}</p>
            </Section>

            <Section label="02" title="The solution">
              <p className="text-lg leading-relaxed text-ink-600 dark:text-ink-300">{product.solution}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 rounded-xl border border-ink-200 bg-white p-4 text-sm text-ink-700 dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-200">
                    <BsCheck2 className="mt-0.5 shrink-0 text-brand-600 dark:text-brand-400" />{feature}
                  </li>
                ))}
              </ul>
            </Section>

            {product.screenshots.length > 0 && (
              <div data-reveal className={`relative -mx-4 overflow-hidden rounded-none px-4 py-12 sm:mx-0 sm:rounded-3xl sm:px-10 ${accent.panel}`}>
                <div className={`absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl ${accent.glow}`} aria-hidden="true" />
                <div className="relative flex snap-x gap-6 overflow-x-auto pb-2">
                  {product.screenshots.map((shot) => (
                    <Image key={shot.src} src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes="(max-width: 640px) 65vw, 240px"
                      className="h-auto w-[65vw] shrink-0 snap-start rounded-2xl border border-ink-200 shadow-xl sm:w-[240px] dark:border-ink-700" />
                  ))}
                </div>
              </div>
            )}

            <Section label="03" title="Tech stack">
              <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
                {product.stack.map((group) => (
                  <div key={group.group} className="border-t border-ink-200 pt-4 dark:border-ink-800">
                    <dt className="font-mono text-xs uppercase tracking-[0.14em] text-ink-400">{group.group}</dt>
                    <dd className="mt-2 text-ink-800 dark:text-ink-100">{group.items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </Section>

            <Section label="04" title="Results">
              <ul className="space-y-3">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-lg text-ink-700 dark:text-ink-200">
                    <BsCheck2 className="mt-1 shrink-0 text-brand-600 dark:text-brand-400" />{h}
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </div>

        <div className="px-4 sm:px-6 pb-24">
          <div data-reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-ink-950 px-8 py-14 text-center text-white md:px-14">
            <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">Want something like this?</h2>
              <p className="mx-auto mt-4 max-w-lg text-ink-300">Tell us about your project. Our team will come back with a clear scope and a quote.</p>
              <Link href={contactHref} className="group mt-8 inline-flex items-center rounded-full bg-white px-7 py-3.5 font-semibold text-ink-900 hover:bg-ink-200">
                Book a free consultation <BsArrowRight className="ml-2 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <Link href={`/work/${next.slug}`} data-reveal className="group mx-auto mt-6 flex max-w-4xl items-center justify-between rounded-3xl border border-ink-200 p-8 hover:border-ink-900 dark:border-ink-800 dark:hover:border-ink-300">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-400">Next case study</p>
              <p className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">{next.name}</p>
              <p className="text-sm text-ink-500 dark:text-ink-400">{next.tagline}</p>
            </div>
            <BsArrowRight className="h-6 w-6 shrink-0 text-ink-400 transition-transform group-hover:translate-x-1 group-hover:text-ink-900 dark:group-hover:text-white" />
          </Link>
        </div>
      </article>

      <BetaSignupModal appName={betaApp} onClose={() => setBetaApp(null)} />
    </Layout>
  );
}

function Section({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section data-reveal className="grid gap-6 md:grid-cols-[180px_1fr]">
      <div>
        <p className="font-mono text-xs text-ink-400">{label}</p>
        <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: products.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { slug: params!.slug as string },
});
