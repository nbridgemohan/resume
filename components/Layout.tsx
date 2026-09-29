import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { BsList, BsX, BsArrowUpRight } from "react-icons/bs";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { CONTACT_EMAIL, LINKEDIN_URL, CONTRA_URL } from "../data/site";
import { products } from "../data/products";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#about", label: "About" },
];

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <rect width="28" height="28" rx="7" className="fill-ink-900 dark:fill-white" />
        <path d="M9 7h6.2c2.7 0 4.3 1.3 4.3 3.4 0 1.4-.8 2.4-2 2.9 1.6.4 2.6 1.6 2.6 3.2 0 2.4-1.8 3.9-4.7 3.9H9V7Zm3 5.4h2.8c1.2 0 1.9-.6 1.9-1.5s-.7-1.5-1.9-1.5H12v3Zm0 5.6h3.1c1.3 0 2-.6 2-1.6s-.7-1.6-2-1.6H12V18Z" className="fill-white dark:fill-ink-900" />
      </svg>
      <span className="font-display text-[17px] font-semibold tracking-tight text-ink-900 dark:text-white">
        Bridgemohan<span className="hidden sm:inline"> Technologies</span>
      </span>
    </span>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink-900 dark:bg-ink-950 dark:text-ink-50">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-b border-ink-200/70 bg-paper/85 backdrop-blur-xl dark:border-ink-800/70 dark:bg-ink-950/85"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" aria-label="Bridgemohan Technologies home"><Logo /></Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <Link href="/contact" className="hidden md:inline-flex items-center rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white hover:bg-ink-700 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-200">
              Book a call
            </Link>
            <button
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="md:hidden rounded-full p-2.5 text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800"
            >
              {menuOpen ? <BsX className="h-6 w-6" /> : <BsList className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-ink-200/70 bg-paper dark:border-ink-800 dark:bg-ink-950">
            <nav className="space-y-1 px-4 py-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-3 text-base font-medium text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-900">
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-3 block rounded-full bg-ink-900 px-5 py-3 text-center font-semibold text-white dark:bg-white dark:text-ink-900">
                Book a free consultation
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-ink-200 dark:border-ink-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
            <div className="col-span-2">
              <Logo />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                A software studio building AI products, business software and mobile apps for companies in the US, Europe and the Caribbean.
              </p>
              <p className="mt-4 font-mono text-xs text-ink-400">Port of Spain, Trinidad &amp; Tobago · UTC-4</p>
            </div>
            <FooterColumn title="Work" links={products.map((p) => ({ href: `/work/${p.slug}`, label: p.name }))} />
            <FooterColumn
              title="Company"
              links={[
                { href: "/#services", label: "Services" },
                { href: "/#process", label: "How we work" },
                { href: "/#pricing", label: "Pricing" },
                { href: "/#about", label: "About" },
              ]}
            />
            <FooterColumn
              title="Contact"
              links={[
                { href: "/contact", label: "Book a call" },
                { href: `mailto:${CONTACT_EMAIL}`, label: "Email us" },
                { href: LINKEDIN_URL, label: "LinkedIn", external: true },
                { href: CONTRA_URL, label: "Contra", external: true },
              ]}
            />
          </div>
          <div className="mt-14 flex flex-col gap-2 border-t border-ink-200 pt-6 text-xs text-ink-400 sm:flex-row sm:justify-between dark:border-ink-800">
            <span>&copy; {new Date().getFullYear()} Bridgemohan Technologies. All rights reserved.</span>
            <span>Quotes in USD. Working hours overlap US Eastern and European afternoons.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string; external?: boolean }[] }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-400">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white">
                {link.label} <BsArrowUpRight className="h-3 w-3" />
              </a>
            ) : (
              <Link href={link.href} className="text-sm text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-brand-600 dark:text-brand-400">
      <span className="h-px w-6 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeader({ eyebrow, title, intro, center = false }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div data-reveal className={`mb-12 md:mb-16 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 md:text-5xl md:leading-[1.05] dark:text-white">{title}</h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-ink-500 dark:text-ink-400">{intro}</p>}
    </div>
  );
}
