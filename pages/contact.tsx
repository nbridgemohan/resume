import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsArrowRight, BsEnvelope } from "react-icons/bs";
import { Layout, Eyebrow } from "../components/Layout";
import { Seo } from "../components/Seo";
import { products } from "../data/products";
import { projectTypes, budgetRanges, CONTACT_EMAIL } from "../data/site";

const emptyForm = { name: "", email: "", projectType: "", budget: "", message: "" };

const inputClass =
  "w-full rounded-xl border border-ink-200 bg-paper px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15 dark:border-ink-700 dark:bg-ink-950 dark:text-white";
const labelClass = "mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-300";

const steps = [
  { title: "Send the form", text: "A few details about your project and budget." },
  { title: "Free consultation", text: "A call during your working hours, US or European time." },
  { title: "Scope and quote", text: "A written scope and a fixed quote before any work starts." },
];

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Preselect the project type when arriving from a service, package or case study link.
  useEffect(() => {
    const type = router.query.type;
    if (typeof type === "string" && projectTypes.includes(type)) {
      setFormData((prev) => ({ ...prev, projectType: type }));
    }
  }, [router.query.type]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }
      setSubmitSuccess(true);
      setFormData(emptyForm);
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitError("There was an error sending your message. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Seo
        title="Book a Free Consultation | Bridgemohan Technologies"
        description="Tell us about your software project. Our team builds AI assistants, fintech tools, and web and mobile apps for companies in the US, Europe and the Caribbean."
        path="/contact"
      />

      <div className="relative overflow-hidden px-4 sm:px-6 pt-32 pb-24 md:pt-40">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-5 font-display text-5xl font-semibold tracking-tightest text-ink-900 md:text-6xl dark:text-white">Let&apos;s talk about your project.</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-600 dark:text-ink-300">
              Tell us what you&apos;re building. Our team will reply to set up a free consultation, and you&apos;ll leave the call with a clear next step.
            </p>

            <ol className="mt-10 space-y-5">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-300 font-mono text-xs text-ink-600 dark:border-ink-700 dark:text-ink-300">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-ink-900 dark:text-white">{step.title}</p>
                    <p className="text-sm text-ink-500 dark:text-ink-400">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 border-t border-ink-200 pt-8 dark:border-ink-800">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-400">Prefer email?</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 inline-flex items-center gap-2 break-all font-semibold text-ink-900 hover:text-brand-600 dark:text-white dark:hover:text-brand-400">
                <BsEnvelope /> {CONTACT_EMAIL}
              </a>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-ink-400">Our work</p>
              <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                {products.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/work/${p.slug}`} className="text-sm text-ink-600 underline decoration-ink-300 underline-offset-4 hover:text-ink-900 hover:decoration-ink-900 dark:text-ink-300 dark:hover:text-white">
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-ink-200 bg-white p-6 shadow-[0_24px_60px_-30px_rgba(20,20,23,0.25)] md:p-10 dark:border-ink-800 dark:bg-ink-900">
            {submitSuccess && (
              <div className="mb-6 rounded-xl border border-emerald-500/40 bg-emerald-50 p-4 dark:bg-emerald-500/10">
                <p className="text-emerald-800 dark:text-emerald-300">Thanks, your message has been sent. We&apos;ll be in touch soon.</p>
              </div>
            )}
            {submitError && (
              <div className="mb-6 rounded-xl border border-red-500/40 bg-red-50 p-4 dark:bg-red-500/10">
                <p className="text-red-800 dark:text-red-300">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>Name *</label>
                  <input type="text" id="name" name="name" required autoComplete="name" value={formData.name} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Work email *</label>
                  <input type="email" id="email" name="email" required autoComplete="email" value={formData.email} onChange={handleChange} className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="projectType" className={labelClass}>Project type *</label>
                  <select id="projectType" name="projectType" required value={formData.projectType} onChange={handleChange} className={inputClass}>
                    <option value="" disabled>Choose one</option>
                    {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className={labelClass}>Budget (USD)</label>
                  <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className={inputClass}>
                    <option value="">Choose one</option>
                    {budgetRanges.map((range) => <option key={range} value={range}>{range}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Project details *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder="What are you building, who is it for, and when do you need it?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center rounded-full bg-ink-900 px-8 py-3.5 font-semibold text-white hover:bg-ink-700 disabled:opacity-50 md:w-auto dark:bg-white dark:text-ink-900 dark:hover:bg-ink-200"
              >
                {isSubmitting ? "Sending..." : "Send message"}
                {!isSubmitting && <BsArrowRight className="ml-2 transition-transform group-hover:translate-x-0.5" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
