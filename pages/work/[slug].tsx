import { useState } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight, BsArrowUpRight, BsCheck } from "react-icons/bs";
import { Layout } from "../../components/Layout";
import { Seo } from "../../components/Seo";
import { BetaSignupModal } from "../../components/BetaSignupModal";
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
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <Layout>
      <Seo
        title={product.seo.title}
        description={product.seo.description}
        path={`/work/${product.slug}`}
        image={`/og/${product.slug}.png`}
      />

      <article className="px-4 pt-28 md:pt-36 pb-20">
        <div className="max-w-4xl mx-auto">
          <Link href="/#work" className="inline-flex items-center text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white mb-8">
            <BsArrowLeft className="mr-2" /> All work
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className={`p-3 rounded-xl border w-12 h-12 flex items-center justify-center ${accent.icon}`}>
                <product.icon className="text-xl" />
              </div>
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{product.platform}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusClasses[product.status]}`}>{product.status}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 text-slate-800 dark:text-white">{product.name}</h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">{product.tagline}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              {product.beta ? (
                <button onClick={() => setBetaApp(product.name)} className="inline-flex justify-center items-center px-6 py-3 rounded-full border-2 border-slate-300 dark:border-white/20 text-slate-700 dark:text-white font-semibold hover:bg-slate-100/50 dark:hover:bg-white/10">
                  Join the beta
                </button>
              ) : product.link ? (
                <a href={product.link.href} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-6 py-3 rounded-full border-2 border-slate-300 dark:border-white/20 text-slate-700 dark:text-white font-semibold hover:bg-slate-100/50 dark:hover:bg-white/10">
                  {product.link.label} <BsArrowUpRight className="ml-2" />
                </a>
              ) : null}
              <Link href={contactHref} className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30">
                Build something like this <BsArrowRight className="ml-2" />
              </Link>
            </div>
          </header>

          <Section title="The problem">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{product.problem}</p>
          </Section>

          <Section title="The solution">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{product.solution}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start text-slate-700 dark:text-slate-200">
                  <BsCheck className="text-green-600 dark:text-green-400 mr-2 mt-1 shrink-0 text-lg" />{feature}
                </li>
              ))}
            </ul>
          </Section>

          {product.screenshots.length > 0 && (
            <Section title="Screenshots">
              <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x">
                {product.screenshots.map((shot) => (
                  <Image
                    key={shot.src}
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    sizes="(max-width: 640px) 70vw, 260px"
                    className="w-[70vw] sm:w-[260px] h-auto shrink-0 snap-start rounded-2xl border border-slate-200 dark:border-gray-700 shadow-lg"
                  />
                ))}
              </div>
            </Section>
          )}

          <Section title="Tech stack">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {product.stack.map((group) => (
                <div key={group.group}>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">{group.group}</dt>
                  <dd className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className={`px-3 py-1 rounded-md text-sm font-medium ${accent.chip}`}>{item}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section title="Results">
            {metrics.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {metrics.map((m) => (
                  <div key={m.label} className="p-5 rounded-2xl bg-white dark:bg-gray-800/50 border border-slate-200 dark:border-gray-700 text-center">
                    <div className="text-3xl font-black text-slate-800 dark:text-white">{m.value}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{m.label}</div>
                  </div>
                ))}
              </div>
            )}
            <ul className="space-y-2">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start text-slate-700 dark:text-slate-200">
                  <BsCheck className="text-green-600 dark:text-green-400 mr-2 mt-1 shrink-0 text-lg" />{h}
                </li>
              ))}
            </ul>
          </Section>

          <div className="mt-16 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-gray-800/60 dark:to-gray-900/60 border border-blue-200/50 dark:border-gray-600/30 shadow-xl dark:shadow-none text-center">
            <h2 className="text-2xl md:text-4xl font-black mb-3 text-slate-800 dark:text-white">Want something like this for your business?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-xl mx-auto">Tell us what you have in mind and we&apos;ll set up a free consultation.</p>
            <Link href={contactHref} className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold hover:shadow-2xl hover:shadow-blue-500/40">
              Book a free consultation <BsArrowRight className="ml-3" />
            </Link>
          </div>

          <nav className="mt-16" aria-label="More case studies">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-4">More of our work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {others.map((p) => (
                <Link key={p.slug} href={`/work/${p.slug}`} className="p-5 rounded-2xl bg-white dark:bg-gray-800/50 border border-slate-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400/50">
                  <div className="font-bold text-slate-800 dark:text-white">{p.name}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{p.tagline}</div>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </article>

      <BetaSignupModal appName={betaApp} onClose={() => setBetaApp(null)} />
    </Layout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-white">{title}</h2>
      {children}
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
