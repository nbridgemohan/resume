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
          className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-slate-900/60 dark:bg-black/70 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            className="relative w-full max-w-md p-8 rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700 shadow-2xl"
          >
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-4 right-4 p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors"
            >
              <BsX className="text-xl" />
            </button>

            {submitSuccess ? (
              <div className="text-center py-6">
                <BsCheckCircle className="text-4xl text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Request Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Thanks for your interest in {appName}. We&apos;ll reach out on WhatsApp with your beta access details soon.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">Join the {appName} Beta</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                  {appName} is currently in testing. Leave your details and we&apos;ll add you as a tester and follow up on WhatsApp.
                </p>

                {submitError && (
                  <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-md text-sm text-red-600 dark:text-red-400">
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="beta-name" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="beta-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-gray-800/50 border border-slate-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="beta-email" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="beta-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-gray-800/50 border border-slate-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="beta-whatsapp" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      id="beta-whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-gray-800/50 border border-slate-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                      placeholder="+1 (868) 000-0000"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-md font-semibold text-white flex items-center justify-center disabled:opacity-50 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
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
