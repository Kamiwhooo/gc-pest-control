import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | GC Pest Control",
  description: "Professional pest control services across Greater Sydney - termite inspections, rodent control, cockroach treatment, and general pest management.",
};

const services = [
  {
    slug: "termite-control",
    name: "Termite Inspections & Treatment",
    shortDesc: "Identify and eliminate termite activity before it causes structural damage.",
    image: "/public/images/termite-treatment.jpg",
    imageAlt: "Termite treatment inspection",
    features: ["Visual & thermal imaging inspections", "Pre-purchase property inspections", "Chemical barrier treatments", "Baiting system installation", "Annual inspection programs", "AS 4349.3 compliant reports"],
    tag: "Most requested",
  },
  {
    slug: "rodent-control",
    name: "Rodent Control",
    shortDesc: "Targeted elimination programs combined with permanent exclusion to keep rodents out for good.",
    image: "/public/images/rodent-control.jpg",
    imageAlt: "Rodent control inspection",
    features: ["Roof void & subfloor inspections", "Entry point identification & sealing", "Tamper-resistant bait station installation", "Internal & external trapping programs", "Follow-up inspection included"],
    tag: null,
  },
  {
    slug: "cockroach-control",
    name: "Cockroach Treatment",
    shortDesc: "Long-lasting gel bait and residual spray programs that break the breeding cycle.",
    image: "/public/images/cockroach-control.jpg",
    imageAlt: "Cockroach treatment",
    features: ["German cockroach specialist treatment", "Commercial kitchen programs available", "Low-odour, family-safe products", "Breaks the breeding cycle", "30-day follow-up guarantee"],
    tag: null,
  },
  {
    slug: "general-pest",
    name: "General Pest Control",
    shortDesc: "Annual or one-off treatments covering spiders, ants, silverfish, fleas and more.",
    image: "/public/images/general-pest.jpg",
    imageAlt: "General pest control treatment",
    features: ["Covers spiders, ants, silverfish, fleas", "Interior & exterior spray treatment", "Pet & child-safe products", "Annual maintenance programs available"],
    tag: null,
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="bg-[var(--color-olive-dark)] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="text-[var(--color-tan)] text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
          <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-4 max-w-xl">Every service. One trusted team.</h1>
          <p className="text-white/60 text-base max-w-lg leading-relaxed">Licensed technicians, registered products, and real guarantees on every job we do.</p>
        </div>
      </div>
      <section className="bg-[var(--color-warm-white)] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="space-y-10">
            {services.map((s, i) => (
              <div
                key={s.slug}
                className={`grid md:grid-cols-2 gap-10 items-center bg-white border border-[var(--color-border)] rounded-2xl overflow-hidden ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
              >
                <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                  <ImagePlaceholder src={s.image} alt={s.imageAlt} className="w-full aspect-[4/3] md:h-full min-h-64" label={s.image} />
                </div>
                <div className={`p-8 md:p-10 ${i % 2 === 1 ? "[direction:ltr]" : ""}`}>
                  {s.tag && (
                    <span className="inline-block text-xs font-semibold text-[var(--color-tan)] bg-[var(--color-tan)]/10 px-2.5 py-1 rounded-full mb-4 uppercase tracking-wider">{s.tag}</span>
                  )}
                  <h2 className="font-display text-2xl md:text-3xl text-[var(--color-olive-dark)] mb-3">{s.name}</h2>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6">{s.shortDesc}</p>
                  <ul className="space-y-2.5 mb-8">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--color-charcoal)]">
                        <CheckCircle size={16} className="text-[var(--color-tan)] mt-0.5 shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4 flex-wrap">
                    <Link href="/book" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-olive-dark)] hover:bg-[var(--color-olive-light)] text-white text-sm font-semibold rounded transition-colors">
                      Book this service <ArrowRight size={15} />
                    </Link>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--color-border)] hover:border-[var(--color-olive)] text-[var(--color-olive-dark)] text-sm font-medium rounded transition-colors">
                      Ask a question
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-cream)] border-t border-[var(--color-border)] py-16">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-[var(--color-olive-dark)] mb-4">Not sure what you need?</h2>
          <p className="text-[var(--color-muted)] mb-8 leading-relaxed">Call us and describe what you're seeing. We'll let you know what's likely going on and what it'll take to fix it.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-olive-dark)] text-white font-semibold rounded text-sm transition-colors hover:bg-[var(--color-olive-light)]">
              Book an Inspection <ArrowRight size={16} />
            </Link>
            <a href="tel:0412345678" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--color-border)] text-[var(--color-olive-dark)] font-medium rounded text-sm transition-colors hover:border-[var(--color-olive)]">
              Call 0412 345 678
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
