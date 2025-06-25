import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsEnvelope, BsPhone } from "react-icons/bs";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError("");

    try {
      // Send form data to API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }
      
      console.log('Email sent successfully', data);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
        company: "",
        phone: "",
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitError("There was an error sending your message. Please try again or contact us directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:to-black text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      <Head>
        <title>Contact Us | Bridgemohan Technologies Consulting</title>
        <meta name="description" content="Get in touch with our IT software consulting team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-violet-500/10 to-black"></div>
        
        {/* Subtle moving gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#0ea5e9,#4f46e5)] opacity-10 animate-gradient"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/60 dark:bg-black/50 backdrop-blur-md z-50 border-b border-slate-200/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-transparent bg-clip-text">
                Bridgemohan Technologies Consulting
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/#services" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link href="/contact" className="text-blue-600 dark:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Get In Touch
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to discuss your IT consulting needs? Let&apos;s explore how we can help transform your business through technology.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-200 dark:border-gray-700 shadow-lg dark:shadow-none"
            >
              <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-white">Send us a message</h2>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-md">
                  <p className="text-green-300">Your message has been sent successfully! We&apos;ll get back to you soon.</p>
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-md">
                  <p className="text-red-300">{submitError}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-50 dark:bg-gray-900/50 border border-slate-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-50 dark:bg-gray-900/50 border border-slate-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-gray-900/50 border border-slate-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-50 dark:bg-gray-900/50 border border-slate-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-50 dark:bg-gray-900/50 border border-slate-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-slate-900 dark:text-white"
                    placeholder="Tell us about your IT consulting needs and how we can help transform your business..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md font-medium text-white flex items-center justify-center w-full md:w-auto disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  {!isSubmitting && <BsArrowRight className="ml-2" />}
                </button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-white">Contact Information</h2>
                <p className="text-slate-600 dark:text-gray-300 mb-8">
                  Ready to discuss your IT consulting needs? Reach out to us directly to explore how we can help transform your business.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <BsEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-800 dark:text-gray-200">Email</h3>
                    <p className="text-slate-600 dark:text-gray-400">
                      <a href="mailto:nbridgemohan@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        nbridgemohan@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-full">
                    <BsPhone className="text-purple-600 dark:text-purple-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-800 dark:text-gray-200">Phone</h3>
                    <p className="text-slate-600 dark:text-gray-400">
                      <a href="tel:18682793914" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        (868) 279-3914
                      </a>
                    </p>
                  </div>
                </div>
                
              </div>
              
              <div className="pt-8 border-t border-slate-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-slate-800 dark:text-gray-200 mb-4">Business Hours</h3>
                <p className="text-slate-600 dark:text-gray-400">
                  We&apos;re available for consultations and support during business hours. 
                  For urgent matters, please call or email us directly.
                </p>
              </div>
              

            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-md py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text inline-block mb-6">
              Bridgemohan Technologies Consulting
            </Link>
            <p className="text-gray-400 max-w-md mx-auto mb-8">
              Professional IT Software Consulting Services to accelerate your digital transformation.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="mailto:nbridgemohan@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <AiOutlineMail className="text-xl" />
              </a>
              <a href="tel:18682793914" className="text-gray-400 hover:text-blue-400 transition-colors">
                <BsPhone className="text-xl" />
              </a>
            </div>
            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Bridgemohan Technologies Consulting. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 