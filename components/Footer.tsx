import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-olive-dark)] text-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[var(--color-tan)] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="font-semibold text-base">GC Pest Control</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">Licensed pest management professionals serving Greater Sydney since 2008.</p>
            <div className="mt-5 flex gap-3">
              <span className="text-xs px-2.5 py-1 rounded-full border border-white/20 text-white/60">Licensed</span>
              <span className="text-xs px-2.5 py-1 rounded-full border border-white/20 text-white/60">Insured</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-tan)] mb-5">Services</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {["Termite Inspections", "Termite Treatment", "Rodent Control", "Cockroach Control", "General Pest Control", "Pre-Purchase Inspections"].map((s) => (
                <li key={s}><Link href="/services" className="hover:text-white transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-tan)] mb-5">Company</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                { label: "About Us", href: "/about" },
                { label: "Customer Reviews", href: "/reviews" },
                { label: "Book an Inspection", href: "/book" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}><Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-tan)] mb-5">Get in Touch</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3"><Phone size={15} className="text-[var(--color-tan)] mt-0.5 shrink-0" /><a href="tel:0412345678" className="hover:text-white transition-colors">0412 345 678</a></li>
              <li className="flex gap-3"><Mail size={15} className="text-[var(--color-tan)] mt-0.5 shrink-0" /><a href="mailto:info@gcpestcontrol.com.au" className="hover:text-white transition-colors">info@gcpestcontrol.com.au</a></li>
              <li className="flex gap-3"><MapPin size={15} className="text-[var(--color-tan)] mt-0.5 shrink-0" /><span>Greater Sydney, NSW</span></li>
              <li className="flex gap-3"><Clock size={15} className="text-[var(--color-tan)] mt-0.5 shrink-0" /><div><div>Mon-Fri: 7am - 6pm</div><div>Sat: 8am - 3pm</div></div></li>
            </ul>
          </div>
        </div>
        <hr className="border-white/10 mt-14 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>2026 GC Pest Control. All rights reserved.</span>
          <span>NSW Pest Control Licence #12345 - ABN 12 345 678 901</span>
        </div>
      </div>
    </footer>
  );
}
