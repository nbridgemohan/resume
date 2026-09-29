import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsX, BsArrowRight, BsCheckCircle } from "react-icons/bs";

interface BetaSignupModalProps {
  appName: string | null;
  onClose: () => void;
}

export function BetaSignupModal({ appName, onClose }: BetaSignupModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleClose = () => {
    onClose();
    setSubmitSuccess(false);
    setSubmitError("");
    setFormData({ name: "", email: "", whatsapp: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.whatsapp,
          product: appName,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to send request");
      }

      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError("There was an error sending your request. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {appName && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-ink-950/60 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl border border-ink-200 bg-white p-8 shadow-2xl dark:border-ink-800 dark:bg-ink-900"
          >
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-2 text-ink-500 hover:bg-ink-100 dark:text-ink-400 dark:hover:bg-ink-800"
            >
              <BsX className="text-xl" />
            </button>

            {submitSuccess ? (
              <div className="text-center py-6">
                <BsCheckCircle className="mx-auto mb-4 text-4xl text-emerald-500" />
                <h3 className="mb-2 font-display text-xl font-semibold text-ink-900 dark:text-white">Request sent</h3>
                <p className="text-ink-600 dark:text-ink-400">
                  Thanks for your interest in {appName}. We&apos;ll reach out on WhatsApp with your beta access details soon.
                </p>
              </div>
            ) : (
              <>
                <h3 className="mb-2 font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">Join the {appName} beta</h3>
                <p className="mb-6 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                  {appName} is currently in testing. Leave your details and we&apos;ll add you as a tester and follow up on WhatsApp.
                </p>

                {submitError && (
                  <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-md text-sm text-red-600 dark:text-red-400">
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="beta-name" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-300">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="beta-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-ink-200 bg-paper px-4 py-2.5 text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15 dark:border-ink-700 dark:bg-ink-950 dark:text-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="beta-email" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-300">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="beta-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-ink-200 bg-paper px-4 py-2.5 text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15 dark:border-ink-700 dark:bg-ink-950 dark:text-white"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="beta-whatsapp" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-300">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      id="beta-whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-ink-200 bg-paper px-4 py-2.5 text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15 dark:border-ink-700 dark:bg-ink-950 dark:text-white"
                      placeholder="+1 (868) 000-0000"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center rounded-full bg-ink-900 px-6 py-3 font-semibold text-white hover:bg-ink-700 disabled:opacity-50 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-200"
                  >
                    {isSubmitting ? "Sending..." : "Request Beta Access"}
                    {!isSubmitting && <BsArrowRight className="ml-2" />}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
