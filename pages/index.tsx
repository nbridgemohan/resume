import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsArrowDown, BsCheck } from "react-icons/bs";
import { Layout, SectionHeader } from "../components/Layout";
import { Seo } from "../components/Seo";
import { BetaSignupModal } from "../components/BetaSignupModal";
import { products, getProduct } from "../data/products";
import { accents, statusClasses } from "../data/accents";
import { stats, services, processSteps, techStack, packages, testimonials, SITE_URL, CONTACT_EMAIL } from "../data/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bridgemohan Technologies",
  url: SITE_URL,
  email: CONTACT_EMAIL,
  description: "Software development company in Trinidad and Tobago building AI chatbots, fintech tools, and web and mobile apps.",
  address: { "@type": "PostalAddress", addressCountry: "TT" },
  areaServed: ["Trinidad and Tobago", "Caribbean", "Worldwide"],
  knowsAbout: ["Software development", "AI chatbots", "Mobile app development", "Web application development"],
};

const contactHref = (projectType: string) => `/contact?type=${encodeURIComponent(projectType)}`;

export default function Home() {
  const [betaApp, setBetaApp] = useState<string | null>(null);

  return (
    <Layout>
      <Seo
        title="Software Development in Trinidad | AI Chatbots & Apps | Bridgemohan Technologies"
        description="Trinidad and Tobago software company building AI chatbots, fintech tools, and web and mobile apps. See four products we've built, then book a free consultation."
        path="/"
        jsonLd={organizationJsonLd}
      />

      {/* Hero */}
      <section className="px-4 pt-32 pb-20 md:pt-44 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            <span className="text-slate-800 dark:text-white">We build AI, fintech and consumer apps for </span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500 text-transparent bg-clip-text">Caribbean businesses.</span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-200 mb-6">Here are four we&apos;ve built.</p>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            10+ years of software experience. Based in Trinidad &amp; Tobago, working with clients locally and internationally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300">
              Book a free consultation <BsArrowRight className="ml-3" />
            </Link>
            <a href="#work" className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-full border-2 border-slate-300 dark:border-white/20 text-slate-700 dark:text-white font-semibold text-lg hover:bg-slate-100/50 dark:hover:bg-white/10 transition-all duration-300">
              See our work <BsArrowDown className="ml-3" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Proof numbers */}
      <section className="py-12 px-4 border-y border-slate-200/60 dark:border-white/10 bg-slate-100/30 dark:bg-black/20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-4xl font-black text-slate-800 dark:text-white mb-1">{stat.number}</div>
              <div className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-20 md:py-24 px-4 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Our work"
            title="Products we've built"
            intro="We design, build and run our own products. Each one is a working example of what we can build for you."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {products.map((product, index) => {
              const accent = accents[product.accent];
              return (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`p-6 md:p-8 rounded-2xl bg-gradient-to-br dark:from-gray-800/60 dark:to-gray-900/60 dark:border-gray-600/30 border shadow-lg dark:shadow-none flex flex-col ${accent.card}`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className={`p-4 rounded-2xl border w-14 h-14 flex items-center justify-center ${accent.icon}`}>
                      <product.icon className="text-2xl" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{product.platform}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusClasses[product.status]}`}>{product.status}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-slate-800 dark:text-white">{product.name}</h3>
                  <p className="text-sm font-medium mb-3 text-slate-500 dark:text-slate-400">{product.tagline}</p>
                  <p className="text-slate-600 dark:text-slate-400 mb-5 leading-relaxed flex-grow">{product.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.stack.flatMap((s) => s.items).slice(0, 4).map((tech) => (
                      <span key={tech} className={`px-2.5 py-1 rounded-md text-xs font-medium ${accent.chip}`}>{tech}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Link href={`/work/${product.slug}`} className={`inline-flex items-center font-semibold ${accent.link}`}>
                      Read the case study <BsArrowRight className="ml-2" />
                    </Link>
                    {product.beta ? (
                      <button onClick={() => setBetaApp(product.name)} className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                        Join the beta
                      </button>
                    ) : product.link ? (
                      <a href={product.link.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                        {product.link.label} ↗
                      </a>
                    ) : null}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-24 px-4 bg-slate-50/60 dark:bg-slate-900/40 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Services"
            title="What we can build for you"
            intro="Every service is backed by a product we've already built, so you can see the work before you hire us."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service) => {
              const accent = accents[service.accent];
              const proof = getProduct(service.proofSlug);
              return (
                <div key={service.title} className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800/50 border border-slate-200 dark:border-gray-700 shadow-sm flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl border w-12 h-12 flex items-center justify-center shrink-0 ${accent.icon}`}>
                      <service.icon className="text-xl" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">{service.title}</h3>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">Who it&apos;s for</p>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{service.forWho}</p>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">What we deliver</p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.deliver.map((item) => (
                      <li key={item} className="flex items-start text-slate-600 dark:text-slate-300">
                        <BsCheck className="text-green-600 dark:text-green-400 mr-2 mt-1 shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 border-t border-slate-200 dark:border-gray-700">
                    {proof && (
                      <Link href={`/work/${proof.slug}`} className={`inline-flex items-center font-semibold ${accent.link}`}>
                        See {proof.name} <BsArrowRight className="ml-2" />
                      </Link>
                    )}
                    <Link href={contactHref(service.projectType)} className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                      Discuss a project
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-6">Technologies in our products</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full bg-white dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section id="process" className="py-20 md:py-24 px-4 bg-slate-50/60 dark:bg-slate-900/40 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="How we work" title="From first call to launch, and after" />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <li key={step.title} className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-slate-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-sm font-bold flex items-center justify-center">{index + 1}</span>
                  <step.icon className="text-xl text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white">{step.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Starter packages */}
      <section id="packages" className="py-20 md:py-24 px-4 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Starter packages"
            title="A clear first step"
            intro="Fixed-scope packages for the projects we're asked about most. Need something different? We'll scope it with you."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800/50 border border-slate-200 dark:border-gray-700 shadow-sm flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{pkg.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{pkg.description}</p>
                <div className="mb-5">
                  {pkg.priceFrom ? (
                    <p className="text-slate-800 dark:text-white"><span className="text-sm text-slate-500 dark:text-slate-400">from </span><span className="text-3xl font-black">{pkg.priceFrom}</span></p>
                  ) : (
                    <p className="text-lg font-semibold text-slate-800 dark:text-white">Fixed quote after a free call</p>
                  )}
                  {pkg.timeline && <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{pkg.timeline}</p>}
                </div>
                <ul className="space-y-2 mb-6 flex-grow">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                      <BsCheck className="text-green-600 dark:text-green-400 mr-2 mt-0.5 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <Link href={contactHref(pkg.projectType)} className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30">
                  Get started <BsArrowRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials: hidden until there is at least one real quote */}
      {testimonials.length > 0 && (
        <section className="py-20 md:py-24 px-4 bg-slate-50/60 dark:bg-slate-900/40">
          <div className="max-w-6xl mx-auto">
            <SectionHeader eyebrow="Feedback" title="What people say" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <figure key={t.name} className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800/50 border border-slate-200 dark:border-gray-700">
                  <blockquote className="text-lg text-slate-700 dark:text-slate-200 mb-4">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="text-sm text-slate-500 dark:text-slate-400"><span className="font-semibold text-slate-700 dark:text-slate-200">{t.name}</span>, {t.role}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-gray-800/60 dark:to-gray-900/60 border border-blue-200/50 dark:border-gray-600/30 shadow-xl dark:shadow-none">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-800 dark:text-white">Have a project in mind?</h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Tell us what you want to build and we&apos;ll set up a free consultation to talk it through.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300">
            Book a free consultation <BsArrowRight className="ml-3" />
          </Link>
        </div>
      </section>

      <BetaSignupModal appName={betaApp} onClose={() => setBetaApp(null)} />
    </Layout>
  );
}
