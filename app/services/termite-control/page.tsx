import Link from "next/link";
import { ArrowRight, CheckCircle, AlertTriangle, Shield } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termite Inspections & Treatment | GC Pest Control",
  description: "Professional termite inspections and treatment across Greater Sydney. Visual and thermal imaging inspections, chemical barriers, baiting systems. AS 4349.3 compliant reports.",
};

export default function TermiteControlPage() {
  return (
    <>
      <div className="bg-[var(--color-olive-dark)] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-2 text-sm text-white/40 mb-4">
            <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/70">Termite Control</span>
          </div>
          <p className="text-[var(--color-tan)] text-sm font-semibold uppercase tracking-widest mb-3">Termite Control</p>
          <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-4 max-w-xl">Termite inspections and treatment you can trust.</h1>
          <p className="text-white/60 text-base max-w-lg leading-relaxed">Termites cause billions in property damage in Australia each year. Early detection and the right treatment program make all the difference.</p>
        </div>
      </div>
      <section className="py-16 md:py-24 bg-[var(--color-warm-white)]">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl text-[var(--color-olive-dark)] mb-6">What's included in a termite inspection</h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">Our inspections follow AS 4349.3 and cover all accessible areas of your property including roof void, subfloor, interior and exterior. We use thermal imaging cameras and moisture meters in addition to the standard visual inspection.</p>
              <ul className="space-y-3 mb-8">
                {["Complete visual inspection of all accessible areas", "Thermal imaging camera scan", "Moisture meter readings at risk zones", "Written report with photos, delivered same day", "AS 4349.3 compliant documentation", "Clear recommendations with no pressure to up-sell"].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--color-charcoal)]">
                    <CheckCircle size={16} className="text-[var(--color-tan)] mt-0.5 shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl flex gap-3">
                <AlertTriangle size={17} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 leading-relaxed">Termite activity is often invisible to the untrained eye. Annual inspections are recommended for all Sydney properties, particularly timber-frame homes.</p>
              </div>
            </div>
            <ImagePlaceholder src="/public/images/termite-treatment.jpg" alt="Termite inspection in progress" className="w-full aspect-[4/3] rounded-2xl" label="/public/images/termite-treatment.jpg" />
          </div>
        </div>
      </section>
      <section className="py-16 bg-[var(--color-cream)] border-y border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h2 className="font-display text-3xl text-[var(--color-olive-dark)] mb-10">Treatment options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Chemical Barrier", desc: "Termiticide applied to the soil around and under your property perimeter, creating a protective zone termites cannot cross without being eliminated.", best: "Best for: New builds and established homes as primary protection" },
              { title: "Baiting Systems", desc: "In-ground bait stations placed at intervals around the property. Termites carry the bait back to the colony, eliminating it at the source.", best: "Best for: Active infestations, properties with slab construction" },
              { title: "Spot Treatment", desc: "Targeted treatment of localised active termite workings using foam or dust termiticides. Often used in combination with barrier or baiting programs.", best: "Best for: Small, contained infestations" },
            ].map((t) => (
              <div key={t.title} className="bg-white border border-[var(--color-border)] rounded-xl p-6">
                <div className="w-8 h-8 rounded bg-[var(--color-tan)]/10 flex items-center justify-center mb-4">
                  <Shield size={15} className="text-[var(--color-tan)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-olive-dark)] mb-2">{t.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">{t.desc}</p>
                <p className="text-xs text-[var(--color-tan)] font-medium">{t.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-olive-dark)] py-14">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="font-display text-3xl text-white mb-4">Book a termite inspection</h2>
          <p className="text-white/60 mb-8">Most inspections take 60-90 minutes. We provide the report the same day.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-tan)] text-white font-semibold rounded hover:bg-[var(--color-tan-light)] transition-colors">Book Now <ArrowRight size={16} /></Link>
            <a href="tel:0412345678" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded hover:border-white/60 transition-colors">Call 0412 345 678</a>
          </div>
        </div>
      </section>
    </>
  );
}
