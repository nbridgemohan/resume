import Head from "next/head";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsCodeSlash, BsPalette, BsPhone } from "react-icons/bs";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Head>
        <title>Bridgemohan Technologies | Modern Application Design Solutions</title>
        <meta name="description" content="Professional application design and development services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#0ea5e9,#4f46e5)] opacity-20 animate-gradient"></div>
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
                <a href="#services" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <Link href="/contact" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Crafting Digital Excellence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We transform ideas into exceptional digital experiences through innovative design and cutting-edge technology.
          </p>
          <Link href="/contact" legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              Get Started <BsArrowRight className="ml-2" />
            </motion.a>
          </Link>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <BsCodeSlash className="text-4xl text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
              <p className="text-gray-400">Tailored solutions built with cutting-edge technologies to meet your specific needs.</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <BsPalette className="text-4xl text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-400">Beautiful, intuitive interfaces that enhance user experience and drive engagement.</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <BsPhone className="text-4xl text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mobile Solutions</h3>
              <p className="text-gray-400">Cross-platform mobile applications that work seamlessly across all devices.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to bring your vision to life? Get in touch with us today.
          </p>
          <div className="flex flex-col items-center">
            <div className="flex justify-center space-x-6 mb-8">
              <a href="mailto:nbridgemohan@gmail.com" className="text-2xl hover:text-blue-400 transition-colors">
                <AiOutlineMail />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors">
                <AiFillGithub />
              </a>
            </div>
            <Link href="/contact" legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Visit Our Contact Page <BsArrowRight className="ml-2" />
              </motion.a>
            </Link>
          </div>
        </div>
      </section>

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
