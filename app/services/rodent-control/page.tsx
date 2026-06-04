import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rodent Control | GC Pest Control",
  description: "Professional rodent control across Greater Sydney. Roof void inspections, tamper-resistant bait stations, entry point sealing. Guaranteed results.",
};

export default function RodentControlPage() {
  return (
    <>
      <div className="bg-[var(--color-olive-dark)] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-2 text-sm text-white/40 mb-4">
            <Link href="/services" className="hover:text-white/70">Services</Link>
            <span>/</span>
            <span className="text-white/70">Rodent Control</span>
          </div>
          <p className="text-[var(--color-tan)] text-sm font-semibold uppercase tracking-widest mb-3">Rodent Control</p>
          <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-4 max-w-xl">Eliminate rodents. Keep them out.</h1>
          <p className="text-white/60 text-base max-w-lg leading-relaxed">Bait stations alone are not enough. We find where rodents are entering, seal entry points, and set up a program that works long-term.</p>
        </div>
      </div>
      <section className="py-16 md:py-24 bg-[var(--color-warm-white)]">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl text-[var(--color-olive-dark)] mb-6">How we approach rodent control</h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">Most pest controllers drop bait and leave. We take a different approach - we inspect your roof void, subfloor, and exterior to understand how rodents are accessing your property, then address the root cause.</p>
              <ul className="space-y-3">
                {["Roof void and subfloor inspection included", "Entry point identification - gaps, pipes, eaves", "Tamper-resistant bait station installation", "Internal snap trap program where appropriate", "Entry point sealing recommendations (with quotes)", "Follow-up inspection at 2 weeks included", "Ongoing monitoring programs available"].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--color-charcoal)]">
                    <CheckCircle size={16} className="text-[var(--color-tan)] mt-0.5 shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
            <ImagePlaceholder src="/public/images/rodent-control.jpg" alt="Rodent control treatment" className="w-full aspect-[4/3] rounded-2xl" label="/public/images/rodent-control.jpg" />
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-olive-dark)] py-14">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="font-display text-3xl text-white mb-4">Book rodent control</h2>
          <p className="text-white/60 mb-8">Same-week appointments usually available. Free follow-up inspection included.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-tan)] text-white font-semibold rounded hover:bg-[var(--color-tan-light)] transition-colors">Book Now <ArrowRight size={16} /></Link>
            <a href="tel:0412345678" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded hover:border-white/60 transition-colors">Call 0412 345 678</a>
          </div>
        </div>
      </section>
    </>
  );
}
