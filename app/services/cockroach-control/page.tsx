import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cockroach Treatment | GC Pest Control",
  description: "Professional cockroach treatment across Greater Sydney. Gel bait and residual spray programs that break the breeding cycle. 30-day guarantee.",
};

export default function CockroachControlPage() {
  return (
    <>
      <div className="bg-[var(--color-olive-dark)] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-2 text-sm text-white/40 mb-4">
            <Link href="/services" className="hover:text-white/70">Services</Link>
            <span>/</span>
            <span className="text-white/70">Cockroach Control</span>
          </div>
          <p className="text-[var(--color-tan)] text-sm font-semibold uppercase tracking-widest mb-3">Cockroach Control</p>
          <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-4 max-w-xl">Break the breeding cycle for good.</h1>
          <p className="text-white/60 text-base max-w-lg leading-relaxed">Our cockroach programs are designed to work even in heavily infested environments, including commercial kitchens.</p>
        </div>
      </div>
      <section className="py-16 md:py-24 bg-[var(--color-warm-white)]">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl text-[var(--color-olive-dark)] mb-6">What makes our treatment different</h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">German cockroaches in particular are hard to eliminate because they breed so rapidly. Our gel bait and residual spray combination targets adults, juveniles, and egg cases - breaking the cycle rather than just reducing numbers.</p>
              <ul className="space-y-3">
                {["German and American cockroach specialist programs", "Gel bait applied to harbourage zones", "Residual spray to all relevant surfaces", "Targets eggs, juveniles, and adults", "Low-odour, food-safe products available", "Commercial kitchen programs available", "30-day free return guarantee"].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--color-charcoal)]">
                    <CheckCircle size={16} className="text-[var(--color-tan)] mt-0.5 shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
            <ImagePlaceholder src="/public/images/cockroach-control.jpg" alt="Cockroach treatment" className="w-full aspect-[4/3] rounded-2xl" label="/public/images/cockroach-control.jpg" />
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-olive-dark)] py-14">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="font-display text-3xl text-white mb-4">Book cockroach treatment</h2>
          <p className="text-white/60 mb-8">Results typically visible within 3-5 days. 30-day guarantee on all treatments.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-tan)] text-white font-semibold rounded hover:bg-[var(--color-tan-light)] transition-colors">Book Now <ArrowRight size={16} /></Link>
            <a href="tel:0412345678" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded hover:border-white/60 transition-colors">Call 0412 345 678</a>
          </div>
        </div>
      </section>
    </>
  );
}
