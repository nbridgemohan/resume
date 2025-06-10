import Head from "next/head";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsCodeSlash, BsGear, BsShield, BsCloud, BsPeople, BsCheck } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
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
        <title>Bridgemohan Technologies | IT Software Consulting Services</title>
        <meta name="description" content="Professional IT Software Consulting Services - Custom development, cloud solutions, and enterprise software consulting" />
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
                <a href="#about" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">About</a>
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
              IT Software Consulting
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Expert software consulting services to accelerate your digital transformation and optimize your technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/contact" legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Get Free Consultation <BsArrowRight className="ml-2" />
              </motion.a>
            </Link>
            <div className="flex items-center space-x-4 text-gray-300">
              <div className="flex items-center">
                <AiOutlineMail className="mr-2" />
                <span>nbridgemohan@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <span>(868) 279-3914</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Consulting Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive IT software consulting to help businesses leverage technology for growth and efficiency.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <BsCodeSlash className="text-4xl text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Custom Software Development</h3>
              <p className="text-gray-400 mb-4">Tailored software solutions designed to meet your specific business requirements and workflows.</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li className="flex items-center"><BsCheck className="text-green-400 mr-2" />Web Applications</li>
                <li className="flex items-center"><BsCheck className="text-green-400 mr-2" />Desktop Applications</li>
                <li className="flex items-center"><BsCheck className="text-green-400 mr-2" />API Development</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <BsCloud className="text-4xl text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cloud Solutions</h3>
              <p className="text-gray-400 mb-4">Migrate, optimize, and manage your cloud infrastructure for maximum efficiency and cost savings.</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li className="flex items-center"><BsCheck className="text-green-400 mr-2" />Cloud Migration</li>
                <li className="flex items-center"><BsCheck className="text-green-400 mr-2" />AWS/Azure Solutions</li>
                <li className="flex items-center"><BsCheck className="text-green-400 mr-2" />DevOps Implementation</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <BsGear className="text-4xl text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">System Integration</h3>
              <p className="text-gray-400 mb-4">Seamlessly connect your existing systems and optimize your technology stack.</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li className="flex items-center"><BsCheck className="text-green-400 mr-2" />Third-party Integrations</li>
                <li className="flex items-center"><BsCheck className="text-green-400 mr-2" />Database Optimization</li>
                <li className="flex items-center"><BsCheck className="text-green-400 mr-2" />Legacy Modernization</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <BsShield className="text-4xl text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Security Consulting</h3>
              <p className="text-gray-400 mb-4">Protect your business with comprehensive security audits and implementation strategies.</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li className="flex items-center"><BsCheck className="text-green-400 mr-2" />Security Audits</li>
                <li className="flex items-center"><BsCheck className="text-green-400 mr-2" />Compliance Solutions</li>
                <li className="flex items-center"><BsCheck className="text-green-400 mr-2" />Data Protection</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <BsPeople className="text-4xl text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Technology Strategy</h3>
              <p className="text-gray-400 mb-4">Strategic technology planning to align your IT investments with business objectives.</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li className="flex items-center"><BsCheck className="text-green-400 mr-2" />IT Roadmapping</li>
                <li className="flex items-center"><BsCheck className="text-green-400 mr-2" />Technology Assessment</li>
                <li className="flex items-center"><BsCheck className="text-green-400 mr-2" />Digital Transformation</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <BsGear className="text-4xl text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
              <p className="text-gray-400 mb-4">Ongoing technical support and maintenance to keep your systems running smoothly.</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li className="flex items-center"><BsCheck className="text-green-400 mr-2" />24/7 Monitoring</li>
                <li className="flex items-center"><BsCheck className="text-green-400 mr-2" />Performance Optimization</li>
                <li className="flex items-center"><BsCheck className="text-green-400 mr-2" />Issue Resolution</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose Bridgemohan Technologies?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BsCodeSlash className="text-2xl text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Knowledge</h3>
                <p className="text-gray-400">Deep expertise in modern technologies and industry best practices.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BsPeople className="text-2xl text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Client-Focused</h3>
                <p className="text-gray-400">Personalized approach tailored to your specific business needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BsShield className="text-2xl text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-gray-400">Track record of delivering successful technology solutions.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Technology?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how our IT software consulting services can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" legacyBehavior>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                >
                  Schedule Consultation <BsArrowRight className="ml-2" />
                </motion.a>
              </Link>
              <div className="flex flex-col sm:flex-row gap-4 text-gray-300">
                <a href="mailto:nbridgemohan@gmail.com" className="flex items-center hover:text-blue-400 transition-colors">
                  <AiOutlineMail className="mr-2" />
                  nbridgemohan@gmail.com
                </a>
                <a href="tel:18682793914" className="flex items-center hover:text-blue-400 transition-colors">
                  <FaPhoneAlt className="mr-2" />
                  (868) 279-3914
                </a>
              </div>
            </div>
          </motion.div>
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
              Professional IT Software Consulting Services to accelerate your digital transformation.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="mailto:nbridgemohan@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <AiOutlineMail className="text-xl" />
              </a>
              <a href="tel:18682793914" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaPhoneAlt className="text-xl" />
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
