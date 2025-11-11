import Head from "next/head";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsCodeSlash, BsGear, BsCloud, BsPeople, BsBox, BsCheck, BsStar, BsAward, BsGraphUp, BsLightbulb, BsTrophy, BsRocket, BsSun, BsMoon, BsPalette, BsWindow } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "10+", label: "Years Experience", icon: BsAward },
    { number: "100%", label: "Client Focused", icon: BsStar },
    { number: "Custom", label: "Solutions", icon: BsTrophy },
    { number: "Expert", label: "Development", icon: BsCodeSlash }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-gray-50 dark:from-slate-900 dark:via-gray-900 dark:to-black text-slate-900 dark:text-white font-['Inter',_sans-serif] transition-colors duration-300">
      <Head>
        <title>Bridgemohan Technologies | Web Design & Development | HR & Payroll Software Solutions</title>
        <meta name="description" content="Professional web design & development, HR & Payroll solutions, Inventory Management systems, and custom software development for modern businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200/30 via-indigo-100/20 to-transparent dark:from-blue-600/30 dark:via-indigo-500/20 dark:to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#3b82f6,#6366f1,#8b5cf6,#a855f7)] opacity-5 dark:opacity-10 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 dark:opacity-40"></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed w-full bg-white/60 dark:bg-black/60 backdrop-blur-xl z-50 border-b border-slate-200/20 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500 text-transparent bg-clip-text hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 dark:hover:from-blue-300 dark:hover:to-purple-400 transition-all duration-300">
                Bridgemohan Technologies
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-slate-100/50 dark:hover:bg-white/5">Services</a>
              <a href="#process" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-slate-100/50 dark:hover:bg-white/5">Process</a>
              <a href="#about" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-slate-100/50 dark:hover:bg-white/5">About</a>
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 px-6 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">Get Started</Link>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center z-10 max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-snug tracking-tight">
            <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 dark:from-white dark:via-blue-100 dark:to-indigo-200 text-transparent bg-clip-text block mb-2">
              Web Design
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 dark:from-blue-400 dark:via-indigo-500 dark:to-purple-600 text-transparent bg-clip-text">
              & Software Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Let us help you with tailor made solutions to see your business thrive. Specializing in modern web design & development, HR & Payroll management, Inventory tracking systems, and custom software solutions to streamline your operations and boost productivity.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/contact" legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 group"
              >
                Start Your Transformation
                <BsRocket className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </Link>
            
            <motion.a
              href="#process"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center px-10 py-4 rounded-full border-2 border-slate-300 dark:border-white/20 text-slate-700 dark:text-white font-semibold text-lg hover:bg-slate-100/50 dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              View Our Process
              <BsArrowRight className="ml-3" />
            </motion.a>
          </div>

          {/* Contact Info with Enhanced Styling */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-slate-600 dark:text-slate-400">
            <motion.a
              href="mailto:nbridgemohan@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center group transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <div className="p-3 rounded-full bg-blue-500/20 border border-blue-400/30 mr-3 group-hover:bg-blue-500/30 transition-all duration-300">
                <AiOutlineMail className="text-blue-600 dark:text-blue-400" />
              </div>
              <span className="font-medium">nbridgemohan@gmail.com</span>
            </motion.a>
            
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 border-y border-slate-200/20 dark:border-white/10 bg-slate-100/20 dark:bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="p-4 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-blue-400/30 w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-2xl text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-2">{stat.number}</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-semibold mb-6">
              💼 Our Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-900 dark:from-white dark:to-slate-300 text-transparent bg-clip-text">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-400 max-w-4xl mx-auto font-light leading-relaxed">
              From stunning web design to HR management and inventory tracking, we deliver comprehensive digital solutions that elevate your online presence and streamline your business operations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800/60 dark:to-gray-900/60 backdrop-blur-sm border border-indigo-200/50 dark:border-gray-600/30 hover:border-indigo-400/70 dark:hover:border-indigo-400/50 shadow-lg dark:shadow-none group"
            >
              <div className="p-4 rounded-2xl bg-indigo-100 dark:bg-indigo-500/20 border border-indigo-300 dark:border-indigo-400/30 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BsPalette className="text-2xl text-indigo-700 dark:text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Web Design & Development</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Modern, responsive websites and web applications that captivate your audience and drive business growth with stunning design and seamless functionality.</p>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-3 mb-6">
                <li className="flex items-center"><BsCheck className="text-green-600 dark:text-green-400 mr-3 text-lg" />Responsive Website Design</li>
                <li className="flex items-center"><BsCheck className="text-green-600 dark:text-green-400 mr-3 text-lg" />E-Commerce Solutions</li>
                <li className="flex items-center"><BsCheck className="text-green-600 dark:text-green-400 mr-3 text-lg" />UI/UX Design & Optimization</li>
                <li className="flex items-center"><BsCheck className="text-green-600 dark:text-green-400 mr-3 text-lg" />Content Management Systems</li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-indigo-700 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 font-semibold group-hover:translate-x-2 transition-all duration-300">
                Learn More <BsArrowRight className="ml-2" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-800/60 dark:to-gray-900/60 backdrop-blur-sm border border-blue-200/50 dark:border-gray-600/30 hover:border-blue-400/70 dark:hover:border-blue-400/50 shadow-lg dark:shadow-none group"
            >
              <div className="p-4 rounded-2xl bg-blue-100 dark:bg-blue-500/20 border border-blue-300 dark:border-blue-400/30 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BsGear className="text-2xl text-blue-700 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Business Software Applications</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Cloud-based web and mobile applications for HR, Payroll, and Inventory Management to streamline your business operations.</p>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-3 mb-6">
                <li className="flex items-center"><BsCheck className="text-green-600 dark:text-green-400 mr-3 text-lg" />HR & Payroll Management</li>
                <li className="flex items-center"><BsCheck className="text-green-600 dark:text-green-400 mr-3 text-lg" />Inventory Tracking Systems</li>
                <li className="flex items-center"><BsCheck className="text-green-600 dark:text-green-400 mr-3 text-lg" />Employee & Time Management</li>
                <li className="flex items-center"><BsCheck className="text-green-600 dark:text-green-400 mr-3 text-lg" />Real-time Reporting & Analytics</li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-blue-700 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-semibold group-hover:translate-x-2 transition-all duration-300">
                Learn More <BsArrowRight className="ml-2" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-white to-green-50 dark:from-gray-800/60 dark:to-gray-900/60 backdrop-blur-sm border border-green-200/50 dark:border-gray-600/30 hover:border-green-400/70 dark:hover:border-green-400/50 shadow-lg dark:shadow-none group"
            >
              <div className="p-4 rounded-2xl bg-green-100 dark:bg-green-500/20 border border-green-300 dark:border-green-400/30 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BsCodeSlash className="text-2xl text-green-700 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Custom Software Solutions</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Enterprise-grade web and mobile applications designed specifically for your business needs, including HR & Payroll systems and Inventory Management.</p>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-3 mb-6">
                <li className="flex items-center"><BsCheck className="text-green-600 dark:text-green-400 mr-3 text-lg" />Web & Mobile App Development</li>
                <li className="flex items-center"><BsCheck className="text-green-600 dark:text-green-400 mr-3 text-lg" />HR & Payroll Web Applications</li>
                <li className="flex items-center"><BsCheck className="text-green-600 dark:text-green-400 mr-3 text-lg" />Inventory Management Apps</li>
                <li className="flex items-center"><BsCheck className="text-green-600 dark:text-green-400 mr-3 text-lg" />Cloud-Based Business Solutions</li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-green-700 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 font-semibold group-hover:translate-x-2 transition-all duration-300">
                Learn More <BsArrowRight className="ml-2" />
              </Link>
            </motion.div>


          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-4 bg-gradient-to-r from-slate-50/50 to-blue-50/50 dark:from-slate-900/50 dark:to-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-semibold mb-6">
              🎯 Our Methodology
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-900 dark:from-white dark:to-slate-300 text-transparent bg-clip-text">
              Proven Delivery Process
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-400 max-w-4xl mx-auto font-light leading-relaxed">
              Our structured approach ensures successful project delivery, on-time and within budget, every single time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery & Analysis", description: "Deep-dive into your business requirements, challenges, and objectives to create a comprehensive project blueprint.", icon: BsLightbulb },
              { step: "02", title: "Strategy & Planning", description: "Develop detailed technical specifications, project timeline, and resource allocation for optimal execution.", icon: BsGear },
              { step: "03", title: "Development & Testing", description: "Agile development with continuous integration, rigorous testing, and regular client feedback loops.", icon: BsCodeSlash },
              { step: "04", title: "Deployment & Support", description: "Seamless launch with comprehensive training, documentation, and ongoing technical support.", icon: BsRocket }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-2xl text-blue-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Enhanced About Section */}
      <section id="about" className="py-24 px-4 bg-gradient-to-r from-slate-50/50 to-gray-50/50 dark:from-gray-900/50 dark:to-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold mb-6">
              🏆 Why Choose Us
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-900 dark:from-white dark:to-slate-300 text-transparent bg-clip-text">
              Your Digital Transformation Partner
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-400 max-w-4xl mx-auto font-light leading-relaxed">
              Bridgemohan Technologies specializes in modern web design, enterprise web applications, mobile apps, and cloud-based business software including HR & Payroll systems and Inventory Management solutions that streamline operations and drive productivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-blue-400/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BsAward className="text-3xl text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">10+ Years of Excellence</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Proven expertise in web design, enterprise web applications, mobile apps, and cloud-based business solutions for companies of all sizes.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 border border-purple-400/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BsPeople className="text-3xl text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Business-Focused Solutions</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">From stunning websites to complex business applications, we understand your needs and deliver web and mobile solutions that fit your workflow perfectly.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-400/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BsGraphUp className="text-3xl text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Modern Web & Mobile Solutions</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Our web and mobile applications automate manual processes, provide seamless user experiences, and deliver real-time insights to boost your business efficiency.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-gray-800/60 dark:to-gray-900/60 backdrop-blur-sm border border-blue-200/50 dark:border-gray-600/30 shadow-xl dark:shadow-none">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-8">
                🚀 Ready to Transform?
              </span>
              
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-900 dark:from-white dark:to-slate-300 text-transparent bg-clip-text">
                Let&apos;s Build the Future Together
              </h2>
              
              <p className="text-xl text-slate-700 dark:text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                Don&apos;t let technology limitations hold your business back. Schedule a free consultation and discover how we can accelerate your digital transformation.
              </p>
              
              <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
                <Link href="/contact" legacyBehavior>
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 group"
                  >
                    Schedule Free Consultation
                    <BsRocket className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                </Link>
                
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-slate-100/80 dark:bg-black/80 backdrop-blur-xl py-16 border-t border-slate-200/20 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="text-3xl font-black bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-transparent bg-clip-text inline-block mb-8 hover:from-blue-300 hover:to-purple-500 transition-all duration-300">
              Bridgemohan Technologies Consulting
            </Link>
            
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
              Empowering businesses through innovative technology solutions. Your success is our mission.
            </p>
            
            <div className="flex justify-center space-x-8 mb-12">
              <motion.a
                href="mailto:nbridgemohan@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-4 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-400 hover:bg-blue-500/30 transition-all duration-300"
              >
                <AiOutlineMail className="text-2xl" />
              </motion.a>
            </div>
            
            <div className="text-slate-600 dark:text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Bridgemohan Technologies. All rights reserved. | Streamlining businesses through specialized software solutions.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
