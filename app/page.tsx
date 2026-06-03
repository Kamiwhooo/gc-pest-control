import Link from "next/link";
import { ArrowRight, Shield, Clock, Star, CheckCircle, Phone, ChevronRight } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const services = [
  { name: "Termite Inspections", slug: "termite-control", description: "Comprehensive visual and thermal imaging inspections. We identify termite activity before it becomes a costly problem.", icon: "🪲" },
  { name: "Rodent Control", slug: "rodent-control", description: "Targeted baiting and exclusion programs that eliminate rodents and keep them out without disrupting your home.", icon: "🐭" },
  { name: "Cockroach Treatment", slug: "cockroach-control", description: "Gel bait and residual spray programs that break the breeding cycle and deliver lasting results.", icon: "🪳" },
];

const trustItems = [
  { label: "Years Experience", value: "16+" },
  { label: "Jobs Completed", value: "4,800+" },
  { label: "5-Star Reviews", value: "310+" },
  { label: "Service Guarantee", value: "12-Month" },
];

const reviews = [
  { name: "Sandra T.", location: "Parramatta", text: "Had a serious termite problem and GC Pest Control sorted it out completely. The technician was thorough, explained everything clearly, and followed up two weeks later. Wouldn't use anyone else.", rating: 5, date: "March 2024" },
  { name: "James K.", location: "Penrith", text: "Called on a Tuesday, they were out by Thursday. Found mouse entry points I didn't know existed and sealed them all. No more issues since.", rating: 5, date: "January 2024" },
  { name: "Michelle R.", location: "Blacktown", text: "Genuinely the most professional pest control company I've used. On time, tidy, explained what they were doing at every step. The cockroach treatment worked within days.", rating: 5, date: "December 2023" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center bg-[var(--color-olive-dark)] overflow-hidden">
        <div className="absolute inset-0">
          <ImagePlaceholder src="/public/images/hero.jpg" alt="Pest control technician at work" className="w-full h-full" label="/public/images/hero.jpg" />
          <div className="absolute inset-0 bg-[var(--color-olive-dark)]/70" />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-tan)]/40 text-[var(--color-tan)] text-xs font-medium tracking-widest uppercase mb-8 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-tan)] inline-block" />
              Licensed & Insured - NSW Lic. #12345
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6 animate-fade-up delay-100">
              Pest control you can
              <span className="block text-[var(--color-tan)]">actually rely on.</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 animate-fade-up delay-200">
              Greater Sydney's trusted pest management team. We handle termites, rodents, cockroaches, and more with honest advice, qualified technicians, and real guarantees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Link href="/book" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--color-tan)] hover:bg-[var(--color-tan-light)] text-white font-semibold rounded transition-all duration-200 text-base">
                Book an Inspection <ArrowRight size={18} />
              </Link>
              <a href="tel:0412345678" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/30 hover:border-white/60 text-white font-medium rounded transition-all duration-200 text-base">
                <Phone size={17} /> 0412 345 678
              </a>
            </div>
            <p className="text-white/40 text-sm mt-5 animate-fade-up delay-400">Same-week bookings available - Free quotes on large jobs</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--color-warm-white)] to-transparent" />
      </section>

      <section className="bg-[var(--color-warm-white)] border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--color-border)]">
            {trustItems.map((item) => (
              <div key={item.label} className="px-6 py-8 text-center">
                <div className="font-display text-3xl md:text-4xl text-[var(--color-olive)] mb-1">{item.value}</div>
                <div className="text-sm text-[var(--color-muted)] font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--color-warm-white)]">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[var(--color-tan)] text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
              <h2 className="font-display text-4xl md:text-5xl text-[var(--color-olive-dark)] leading-tight">Professional treatment<br />for every pest problem.</h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-[var(--color-olive)] font-medium text-sm hover:gap-3 transition-all border-b border-[var(--color-olive)]/30 hover:border-[var(--color-olive)] pb-0.5 self-start md:self-end">
              View all services <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group block bg-white border border-[var(--color-border)] rounded-xl p-7 hover:border-[var(--color-tan)]/50 hover:shadow-md transition-all duration-200">
                <div className="text-3xl mb-5">{s.icon}</div>
                <h3 className="font-display text-xl text-[var(--color-olive-dark)] mb-3 group-hover:text-[var(--color-olive-light)] transition-colors">{s.name}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-5">{s.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm text-[var(--color-tan)] font-medium group-hover:gap-2.5 transition-all">Learn more <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section className="py-20 md:py-28 bg-[var(--color-warm-white)]">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-[var(--color-tan)] text-sm font-semibold uppercase tracking-widest mb-3">Why GC Pest Control</p>
              <h2 className="font-display text-4xl md:text-5xl text-[var(--color-olive-dark)] leading-tight mb-8">We do the job right,<br />or we come back.</h2>
              <p className="text-[var(--color-muted)] text-base leading-relaxed mb-8">Pest control isn't complicated - it just needs to be done properly. We use the right products, apply them correctly, and explain what we've done and why. No upselling. No scare tactics.</p>
              <ul className="space-y-4">
                {["Fully licensed technicians - not subcontractors", "Thermal imaging for termite inspections", "12-month service guarantee on most treatments", "We return free of charge if the problem persists", "All products are Australian-registered and pet-safe"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-charcoal)]">
                    <CheckCircle size={17} className="text-[var(--color-tan)] mt-0.5 shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/about" className="inline-flex items-center gap-2 text-[var(--color-olive)] font-medium text-sm border-b border-[var(--color-olive)]/30 hover:border-[var(--color-olive)] pb-0.5 transition-all">
                  About our team <ChevronRight size={15} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <ImagePlaceholder src="/public/images/technician.jpg" alt="GC Pest Control technician" className="w-full aspect-[4/5] rounded-2xl" label="/public/images/technician.jpg" />
              <div className="absolute -bottom-5 -left-5 bg-white border border-[var(--color-border)] rounded-xl px-5 py-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <Shield className="text-[var(--color-tan)]" size={22} />
                  <div>
                    <div className="font-semibold text-sm text-[var(--color-olive-dark)]">12-Month Guarantee</div>
                    <div className="text-xs text-[var(--color-muted)]">On all treatments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section className="py-20 md:py-28 bg-[var(--color-warm-white)]">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[var(--color-tan)] text-sm font-semibold uppercase tracking-widest mb-3">Customer Reviews</p>
              <h2 className="font-display text-4xl md:text-5xl text-[var(--color-olive-dark)] leading-tight">What our customers say.</h2>
            </div>
            <div className="flex items-center gap-3 self-start md:self-end">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-[var(--color-tan)] fill-[var(--color-tan)]" />)}
              </div>
              <span className="text-sm text-[var(--color-muted)] font-medium">4.9 - 310+ reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white border border-[var(--color-border)] rounded-xl p-6">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} size={14} className="text-[var(--color-tan)] fill-[var(--color-tan)]" />)}
                </div>
                <p className="text-[var(--color-charcoal)] text-sm leading-relaxed mb-6 italic">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm text-[var(--color-olive-dark)]">{r.name}</div>
                    <div className="text-xs text-[var(--color-muted)]">{r.location}</div>
                  </div>
                  <span className="text-xs text-[var(--color-muted)]/60">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/reviews" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-olive)] border border-[var(--color-border)] hover:border-[var(--color-olive)] px-5 py-2.5 rounded-full transition-all">
              Read all reviews <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-olive-dark)] py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-[var(--color-tan)] fill-[var(--color-tan)]" />)}
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-5">Ready to sort out your pest problem?</h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">Most jobs are booked within the week. Get in touch for a free quote - no call centres, just our team.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--color-tan)] hover:bg-[var(--color-tan-light)] text-white font-semibold rounded transition-all text-base">
              Book an Inspection <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 hover:border-white/60 text-white font-medium rounded transition-all text-base">
              Ask a Question
            </Link>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6 text-sm text-white/40">
            <span className="flex items-center gap-2"><Clock size={14} /> Same-week availability</span>
            <span className="flex items-center gap-2"><Shield size={14} /> 12-month guarantee</span>
          </div>
        </div>
      </section>
    </>
  );
}
