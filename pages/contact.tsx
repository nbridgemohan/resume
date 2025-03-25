import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsEnvelope, BsPhone } from "react-icons/bs";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <Head>
        <title>Contact Us | Bridgemohan Technologies</title>
        <meta name="description" content="Get in touch with our application design team" />
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
      <nav className="fixed w-full bg-black/50 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Bridgemohan Technologies
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/#services" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                <Link href="/contact" className="text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
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
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We'd love to hear about your project. Let's create something amazing together.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-md">
                  <p className="text-green-300">Your message has been sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-md">
                  <p className="text-red-300">{submitError}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Tell us about your project and how we can help..."
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
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <p className="text-gray-300 mb-8">
                  Need to discuss your project in more detail? Reach out to us directly through any of these channels.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <BsEnvelope className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-200">Email</h3>
                    <p className="text-gray-400">
                      <a href="mailto:nbridgemohan@gmail.com" className="hover:text-blue-400 transition-colors">
                        nbridgemohan@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-full">
                    <BsPhone className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-200">Phone</h3>
                    <p className="text-gray-400">
                      <a href="tel:+1-868-279-3914" className="hover:text-purple-400 transition-colors">
                        +1 (868) 279-3914
                      </a>
                    </p>
                  </div>
                </div>
                
              </div>
              
              <div className="pt-8 border-t border-gray-700">
                <h3 className="text-lg font-medium text-gray-200 mb-4">Connect with us</h3>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-500/20 p-3 rounded-full transition-colors">
                    <AiFillLinkedin className="text-xl" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-500/20 p-3 rounded-full transition-colors">
                    <AiOutlineTwitter className="text-xl" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-500/20 p-3 rounded-full transition-colors">
                    <AiOutlineInstagram className="text-xl" />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-500/20 p-3 rounded-full transition-colors">
                    <AiFillGithub className="text-xl" />
                  </a>
                </div>
              </div>
              
              <div className="pt-8 mt-8 border-t border-gray-700">
                <h3 className="text-lg font-medium text-gray-200 mb-4">Office Hours</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
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
              Bridgemohan Technologies
            </Link>
            <p className="text-gray-400 max-w-md mx-auto mb-8">
              Creating exceptional digital experiences through innovative design and cutting-edge technology.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <AiFillLinkedin className="text-xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <AiOutlineTwitter className="text-xl" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <AiFillGithub className="text-xl" />
              </a>
            </div>
            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Bridgemohan Technologies. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 