import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsArrowRight, BsEnvelope } from "react-icons/bs";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import { products } from "../data/products";
import { projectTypes, budgetRanges, CONTACT_EMAIL } from "../data/site";

const emptyForm = { name: "", email: "", projectType: "", budget: "", message: "" };

const inputClass =
  "w-full px-4 py-3 bg-slate-50 dark:bg-gray-900/50 border border-slate-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white";
const labelClass = "block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1";

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
        description="Tell us about your software project. AI chatbots, business tools, and web and mobile apps for clients in the US, Europe and the Caribbean."
        path="/contact"
      />

      <div className="pt-28 md:pt-36 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-slate-800 dark:text-white">Book a free consultation</h1>
            <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tell us a little about your project and we&apos;ll get back to you to set up a call.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 bg-white/80 dark:bg-gray-800/50 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-gray-700 shadow-lg dark:shadow-none">
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-500/20 border border-green-500 rounded-md">
                  <p className="text-green-700 dark:text-green-300">Thanks, your message has been sent. We&apos;ll be in touch soon.</p>
                </div>
              )}
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-500/20 border border-red-500 rounded-md">
                  <p className="text-red-700 dark:text-red-300">{submitError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>Name *</label>
                    <input type="text" id="name" name="name" required autoComplete="name" value={formData.name} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email *</label>
                    <input type="email" id="email" name="email" required autoComplete="email" value={formData.email} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="projectType" className={labelClass}>Project type *</label>
                    <select id="projectType" name="projectType" required value={formData.projectType} onChange={handleChange} className={inputClass}>
                      <option value="" disabled>Choose one</option>
                      {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className={labelClass}>Budget range</label>
                    <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className={inputClass}>
                      <option value="">Choose one</option>
                      {budgetRanges.map((range) => <option key={range} value={range}>{range}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="What do you want to build, and who is it for?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full font-semibold text-white flex items-center justify-center disabled:opacity-50 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                  {!isSubmitting && <BsArrowRight className="ml-2" />}
                </button>
              </form>
            </div>

            <aside className="lg:col-span-2 space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <BsEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-800 dark:text-gray-200">Prefer email?</h2>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 break-all">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-slate-800 dark:text-gray-200 mb-3">See what we&apos;ve built</h2>
                <ul className="space-y-2">
                  {products.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/work/${p.slug}`} className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                        <span className="font-medium text-slate-800 dark:text-gray-200">{p.name}</span>: {p.tagline}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
}
