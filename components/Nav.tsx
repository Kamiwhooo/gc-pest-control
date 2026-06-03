"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome || open
          ? "bg-[var(--color-olive-dark)] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-[var(--color-tan)] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div>
              <span className="text-white font-semibold text-base tracking-tight leading-none block">GC Pest Control</span>
              <span className="text-[var(--color-tan-light)] text-xs tracking-widest uppercase leading-none">Licensed & Insured</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === l.href
                    ? "text-[var(--color-tan)]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0412345678"
              className="flex items-center gap-2 text-[var(--color-tan-light)] hover:text-[var(--color-tan)] text-sm font-medium transition-colors"
            >
              <Phone size={15} />
              0412 345 678
            </a>
            <Link
              href="/book"
              className="px-4 py-2 bg-[var(--color-tan)] hover:bg-[var(--color-tan-light)] text-white text-sm font-semibold rounded transition-colors duration-200"
            >
              Book Inspection
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--color-olive-dark)] border-t border-white/10 px-5 pb-6 pt-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block py-3 text-base border-b border-white/10 last:border-none transition-colors ${
                pathname === l.href ? "text-[var(--color-tan)]" : "text-white/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a href="tel:0412345678" className="flex items-center gap-2 text-[var(--color-tan-light)] text-sm">
              <Phone size={14} /> 0412 345 678
            </a>
            <Link
              href="/book"
              className="inline-flex justify-center px-4 py-3 bg-[var(--color-tan)] text-white text-sm font-semibold rounded"
            >
              Book Inspection
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
