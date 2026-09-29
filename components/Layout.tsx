import { useState, type ReactNode } from "react";
import Link from "next/link";
import { BsList, BsX } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { CONTACT_EMAIL } from "../data/site";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "How we work" },
  { href: "/#packages", label: "Packages" },
];

export function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-50 via-white to-gray-50 dark:from-slate-900 dark:via-gray-900 dark:to-black text-slate-900 dark:text-white font-['Inter',_sans-serif] transition-colors duration-300">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200/30 via-indigo-100/20 to-transparent dark:from-blue-600/30 dark:via-indigo-500/20 dark:to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#3b82f6,#6366f1,#8b5cf6,#a855f7)] opacity-5 dark:opacity-10 animate-gradient-x"></div>
      </div>

      <nav className="fixed w-full bg-white/70 dark:bg-black/60 backdrop-blur-xl z-50 border-b border-slate-200/40 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500 text-transparent bg-clip-text">
              Bridgemohan Technologies
            </Link>

            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-100/50 dark:hover:bg-white/5">
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 px-5 py-2 rounded-full text-sm font-semibold text-white hover:shadow-lg hover:shadow-blue-500/30">
                Book a free consultation
              </Link>
              <ThemeSwitcher />
            </div>

            <div className="flex md:hidden items-center gap-2">
              <ThemeSwitcher />
              <button
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="p-3 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10"
              >
                {menuOpen ? <BsX className="w-6 h-6" /> : <BsList className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-slate-200/40 dark:border-white/10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block px-3 py-3 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5">
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="block mt-2 text-center bg-gradient-to-r from-blue-600 to-indigo-700 px-5 py-3 rounded-full font-semibold text-white">
                Book a free consultation
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="bg-slate-100/80 dark:bg-black/80 backdrop-blur-xl py-12 border-t border-slate-200/40 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="text-2xl font-black bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-transparent bg-clip-text inline-block mb-4">
            Bridgemohan Technologies
          </Link>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-6">
            AI, fintech and consumer apps built in Trinidad &amp; Tobago, for clients at home and abroad.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-sm text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400">{link.label}</Link>
            ))}
            <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
          </div>
          <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 mb-6">
            <AiOutlineMail /> {CONTACT_EMAIL}
          </a>
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Bridgemohan Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export function SectionHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-500/20 border border-indigo-200 dark:border-indigo-400/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-4">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-800 dark:text-white">{title}</h2>
      {intro && <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">{intro}</p>}
    </div>
  );
}
