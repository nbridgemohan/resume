import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsArrowUpRight, BsCheck2 } from "react-icons/bs";
import { Layout, SectionHeader, Eyebrow } from "../components/Layout";
import { Seo } from "../components/Seo";
import { ChatDemo } from "../components/ChatDemo";
import { TechMarquee } from "../components/TechMarquee";
import { BetaSignupModal } from "../components/BetaSignupModal";
import { useReveal, useHeroEntrance } from "../components/useReveal";
import { products, getProduct, type Product } from "../data/products";
import { accents, statusClasses } from "../data/accents";
import { stats, services, whyUs, processSteps, packages, about, testimonials, SITE_URL, CONTACT_EMAIL, LINKEDIN_URL, TTOMNI_URL } from "../data/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bridgemohan Technologies",
  url: SITE_URL,
  email: CONTACT_EMAIL,
  description: "Software studio building AI assistants, fintech tools, and web and mobile apps for companies in the US, Europe and the Caribbean.",
  address: { "@type": "PostalAddress", addressLocality: "Port of Spain", addressCountry: "TT" },
  areaServed: ["United States", "Canada", "United Kingdom", "Europe", "Caribbean"],
  knowsAbout: ["Software development", "AI chatbots", "Mobile app development", "Web application development", "Fintech"],
};

const contactHref = (projectType: string) => `/contact?type=${encodeURIComponent(projectType)}`;
const heroLines = [["We", "build", "AI", "products"], ["that", "ship."]];

export default function Home() {
  const [betaApp, setBetaApp] = useState<string | null>(null);
  useHeroEntrance();
  useReveal();

  return (
    <Layout>
      <Seo
        title="Bridgemohan Technologies | AI & Software Development Studio for US & European Companies"
        description="A senior software studio building AI assistants, fintech tools, and web and mobile apps for companies in the US, Europe and the Caribbean. See four products we've launched."
        path="/"
        jsonLd={organizationJsonLd}
      />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 sm:px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div data-hero><Eyebrow>Software studio · Port of Spain · UTC-4</Eyebrow></div>
            <h1 className="mt-6 font-display text-[2.9rem] font-semibold leading-[1.02] tracking-tightest text-ink-900 sm:text-6xl lg:text-[5.2rem] dark:text-white">
              {heroLines.map((line, li) => (
                <span key={li} className="block">
                  {line.map((word, wi) => (
                    <span key={wi} className="inline-block overflow-hidden pb-2 align-bottom">
                      <span data-hero-word className={`inline-block ${li === 1 ? "text-brand-600 dark:text-brand-400" : ""}`}>
                        {word}
                        {wi < line.length - 1 ? " " : ""}
                      </span>
                    </span>
                  ))}
                </span>
              ))}
            </h1>
            <p data-hero className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 md:text-xl dark:text-ink-300">
              Bridgemohan Technologies is a software studio building AI assistants, fintech tools and mobile apps for companies in the US, Europe and the Caribbean. We&apos;ve launched four products of our own, so you can see our work before you hire us.
            </p>
            <div data-hero className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="group inline-flex items-center justify-center rounded-full bg-ink-900 px-7 py-3.5 font-semibold text-white hover:bg-ink-700 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-200">
                Book a free consultation <BsArrowRight className="ml-2 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a href="#work" className="inline-flex items-center justify-center rounded-full border border-ink-300 px-7 py-3.5 font-semibold text-ink-800 hover:border-ink-900 dark:border-ink-700 dark:text-ink-100 dark:hover:border-ink-300">
                See our work
              </a>
            </div>
            <ul data-hero className="mt-9 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-ink-500 dark:text-ink-400">
              {["Senior team", "Fixed-scope quotes", "US & EU working hours"].map((item) => (
                <li key={item} className="flex items-center gap-1.5"><BsCheck2 className="text-brand-600 dark:text-brand-400" />{item}</li>
              ))}
            </ul>
          </div>
          <div data-hero>
            <ChatDemo />
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="border-y border-ink-200 px-4 sm:px-6 py-8 dark:border-ink-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center">
          <p className="shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-ink-400 md:w-40">Our stack</p>
          <TechMarquee />
        </div>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-20 px-4 sm:px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Selected work"
            title="Proof, not promises."
            intro="Four products our team designed, built and launched: AI, fintech, consumer and education. Each one is a working example of what we can build for you."
          />
          <div className="space-y-6 md:space-y-8">
            {products.map((product, index) => (
              <ProductRow key={product.slug} product={product} index={index} onBeta={setBetaApp} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20 border-t border-ink-200 bg-white px-4 sm:px-6 py-24 md:py-32 dark:border-ink-800 dark:bg-ink-900/40">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Services"
            title="What we build."
            intro="Four practice areas, each backed by a product we already run in production or pilot."
          />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-200 bg-ink-200 md:grid-cols-2 dark:border-ink-800 dark:bg-ink-800">
            {services.map((service) => {
              const proof = getProduct(service.proofSlug);
              return (
                <div key={service.title} data-reveal className="flex flex-col bg-white p-8 md:p-10 dark:bg-ink-950">
                  <service.icon className={`h-6 w-6 ${accents[service.accent].icon}`} />
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">{service.title}</h3>
                  <p className="mt-2 text-lg text-ink-600 dark:text-ink-300">{service.tagline}</p>
                  <p className="mt-5 text-sm leading-relaxed text-ink-500 dark:text-ink-400"><span className="font-semibold text-ink-700 dark:text-ink-200">For </span>{service.forWho.charAt(0).toLowerCase() + service.forWho.slice(1)}</p>
                  <ul className="mt-5 flex-grow space-y-2">
                    {service.deliver.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700 dark:text-ink-200">
                        <BsCheck2 className="mt-0.5 shrink-0 text-brand-600 dark:text-brand-400" />{item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold">
                    {proof && (
                      <Link href={`/work/${proof.slug}`} className="group inline-flex items-center text-ink-900 dark:text-white">
                        Case study: {proof.name} <BsArrowRight className="ml-1.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    )}
                    <Link href={contactHref(service.projectType)} className="text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white">
                      Discuss a project
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="relative overflow-hidden bg-ink-950 px-4 sm:px-6 py-20 text-white">
        <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} data-reveal>
              <p className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
                <span data-count={stat.value} data-suffix={stat.suffix}>{stat.value}{stat.suffix}</span>
              </p>
              <p className="mt-3 max-w-[14rem] text-sm leading-relaxed text-ink-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section id="why-us" className="scroll-mt-20 px-4 sm:px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Why work with us"
            title="A nearshore team on your hours."
            intro="The quality you'd expect from a US or European studio, from a team whose working day overlaps yours."
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <div key={item.title} data-reveal className="border-t border-ink-900 pt-6 dark:border-white">
                <p className="font-mono text-xs text-ink-400">0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-20 border-t border-ink-200 bg-white px-4 sm:px-6 py-24 md:py-32 dark:border-ink-800 dark:bg-ink-900/40">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="How we work" title="From first call to launch, and after." />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <li key={step.title} data-reveal className="rounded-2xl border border-ink-200 bg-paper p-6 dark:border-ink-800 dark:bg-ink-950">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-ink-400">Step {index + 1}</span>
                  <step.icon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-ink-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-20 px-4 sm:px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Pricing"
            title="Clear starting points."
            intro="Fixed-scope packages for the projects we're asked about most. Every project starts with a free call and a written quote."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                data-reveal
                className={`flex flex-col rounded-2xl p-8 ${
                  pkg.featured
                    ? "bg-ink-950 text-white ring-1 ring-ink-950 dark:bg-white dark:text-ink-900 dark:ring-white"
                    : "border border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900/60"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold">{pkg.name}</h3>
                  {pkg.featured && <span className="rounded-full bg-brand-500 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-white">Popular</span>}
                </div>
                <p className={`mt-3 text-sm leading-relaxed ${pkg.featured ? "text-ink-300 dark:text-ink-600" : "text-ink-500 dark:text-ink-400"}`}>{pkg.description}</p>
                <p className="mt-8">
                  <span className={`text-sm ${pkg.featured ? "text-ink-400 dark:text-ink-500" : "text-ink-500"}`}>From </span>
                  <span className="font-display text-4xl font-semibold tracking-tight">{pkg.priceFrom ?? "Custom"}</span>
                </p>
                {pkg.timeline && <p className={`mt-1 text-sm ${pkg.featured ? "text-ink-400 dark:text-ink-500" : "text-ink-500"}`}>{pkg.timeline}</p>}
                <ul className="mt-8 flex-grow space-y-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <BsCheck2 className="mt-0.5 shrink-0 text-brand-500" />{item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={contactHref(pkg.projectType)}
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold ${
                    pkg.featured
                      ? "bg-white text-ink-900 hover:bg-ink-200 dark:bg-ink-900 dark:text-white dark:hover:bg-ink-700"
                      : "bg-ink-900 text-white hover:bg-ink-700 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-200"
                  }`}
                >
                  Get a quote
                </Link>
              </div>
            ))}
          </div>
          <p data-reveal className="mt-8 text-center text-sm text-ink-500 dark:text-ink-400">
            Just need a standard AI assistant?{" "}
            <a href={TTOMNI_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink-900 underline decoration-ink-300 underline-offset-4 hover:decoration-ink-900 dark:text-white">
              TTomni plans start at US$149/month
            </a>
            .
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 border-t border-ink-200 bg-white px-4 sm:px-6 py-24 md:py-32 dark:border-ink-800 dark:bg-ink-900/40">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
          <div data-reveal>
            <Eyebrow>About us</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 md:text-5xl md:leading-[1.05] dark:text-white">A studio that builds its own products.</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-600 dark:text-ink-300">{about.intro}</p>
            <p className="mt-4 text-lg leading-relaxed text-ink-600 dark:text-ink-300">{about.body}</p>
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-ink-200 p-5 dark:border-ink-800">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink-900 font-display font-semibold text-white dark:bg-white dark:text-ink-900">NB</span>
              <div className="flex-grow">
                <p className="font-semibold text-ink-900 dark:text-white">{about.leader.name}</p>
                <p className="text-sm text-ink-500 dark:text-ink-400">{about.leader.role}</p>
              </div>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-ink-700 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white">
                LinkedIn <BsArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
          <div className="space-y-4 lg:pt-12">
            {about.principles.map((p) => (
              <div key={p.title} data-reveal className="rounded-2xl border border-ink-200 bg-paper p-6 dark:border-ink-800 dark:bg-ink-950">
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials: hidden until there is at least one real quote */}
      {testimonials.length > 0 && (
        <section className="px-4 sm:px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader eyebrow="Feedback" title="What people say." />
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((t) => (
                <figure key={t.name} data-reveal className="rounded-2xl border border-ink-200 p-8 dark:border-ink-800">
                  <blockquote className="text-lg text-ink-800 dark:text-ink-100">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-4 text-sm text-ink-500"><span className="font-semibold text-ink-800 dark:text-ink-100">{t.name}</span>, {t.role}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-4 sm:px-6 py-24 md:py-32">
        <div data-reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-ink-950 px-8 py-16 text-center text-white md:px-16 md:py-24">
          <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
          <div className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">Tell us what you&apos;re building.</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-300">A free 30-minute call with our team. You&apos;ll leave with a clear next step, whether or not we work together.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="group inline-flex items-center rounded-full bg-white px-7 py-3.5 font-semibold text-ink-900 hover:bg-ink-200">
                Book a free consultation <BsArrowRight className="ml-2 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white hover:border-white/60">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      <BetaSignupModal appName={betaApp} onClose={() => setBetaApp(null)} />
    </Layout>
  );
}

function ProductRow({ product, index, onBeta }: { product: Product; index: number; onBeta: (name: string) => void }) {
  const accent = accents[product.accent];
  const shot = product.screenshots[1] ?? product.screenshots[0];
  const metric = product.metrics.find((m) => m.value);
  return (
    <article data-reveal className="grid overflow-hidden rounded-3xl border border-ink-200 bg-white md:grid-cols-2 dark:border-ink-800 dark:bg-ink-900/60">
      <div className={`flex flex-col p-8 md:p-12 ${index % 2 === 1 ? "md:order-2" : ""}`}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-ink-400">0{index + 1}</span>
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusClasses[product.status]}`}>{product.status}</span>
          <span className="text-xs text-ink-500 dark:text-ink-400">{product.platform}</span>
        </div>
        <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl dark:text-white">{product.name}</h3>
        <p className="mt-2 text-lg text-ink-600 dark:text-ink-300">{product.tagline}</p>
        <p className="mt-5 flex-grow leading-relaxed text-ink-500 dark:text-ink-400">{product.summary}</p>
        <p className="mt-6 font-mono text-xs leading-relaxed text-ink-400">{product.stack.flatMap((s) => s.items).slice(0, 5).join("  ·  ")}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold">
          <Link href={`/work/${product.slug}`} className="group inline-flex items-center rounded-full bg-ink-900 px-5 py-2.5 text-white hover:bg-ink-700 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-200">
            Read the case study <BsArrowRight className="ml-2 transition-transform group-hover:translate-x-0.5" />
          </Link>
          {product.beta ? (
            <button onClick={() => onBeta(product.name)} className="text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white">Join the beta</button>
          ) : product.link ? (
            <a href={product.link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white">
              {product.link.label} <BsArrowUpRight className="h-3 w-3" />
            </a>
          ) : null}
        </div>
      </div>
      <div className={`relative flex min-h-[260px] items-center justify-center overflow-hidden border-t border-ink-200 md:border-t-0 dark:border-ink-800 ${accent.panel} ${index % 2 === 1 ? "md:order-1" : ""}`}>
        <div className={`absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${accent.glow}`} aria-hidden="true" />
        {shot ? (
          <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes="(max-width: 768px) 60vw, 280px" className="relative mt-12 w-[55%] max-w-[260px] translate-y-6 rounded-t-3xl border border-ink-200 shadow-2xl dark:border-ink-700" />
        ) : (
          <div className="relative p-10 text-center">
            <product.icon className={`mx-auto h-14 w-14 ${accent.icon}`} />
            {metric ? (
              <p className="mt-6">
                <span className="block font-display text-5xl font-semibold tracking-tight text-ink-900 dark:text-white">{metric.value}</span>
                <span className="mt-1 block text-sm text-ink-500 dark:text-ink-400">{metric.label}</span>
              </p>
            ) : (
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-ink-600 dark:text-ink-300">{product.highlights[0]}</p>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
