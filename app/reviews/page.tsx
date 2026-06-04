import Link from "next/link";
import { Star, ArrowRight, Quote } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews | GC Pest Control",
  description: "310+ verified customer reviews for GC Pest Control. See why Greater Sydney residents trust us with their pest management.",
};

const reviews = [
  { name: "Sandra T.", location: "Parramatta", service: "Termite Inspection", rating: 5, date: "March 2024", text: "Had a serious termite problem and GC Pest Control sorted it out completely. The technician was thorough, explained everything clearly, and followed up two weeks later. Genuinely could not fault the service." },
  { name: "James K.", location: "Penrith", service: "Rodent Control", rating: 5, date: "January 2024", text: "Called on a Tuesday, they were out by Thursday. Found mouse entry points I had no idea existed and sealed them all. No more issues since. Great service, fair price." },
  { name: "Michelle R.", location: "Blacktown", service: "Cockroach Treatment", rating: 5, date: "December 2023", text: "The most professional pest control company I have used. On time, tidy, explained what they were doing at every step. The treatment worked within days." },
  { name: "David M.", location: "Castle Hill", service: "General Pest Control", rating: 5, date: "November 2023", text: "Annual service done again this year. Consistent quality every single time. They remember details about our property and address the spots we have had issues with before. Highly recommend." },
  { name: "Priya N.", location: "Baulkham Hills", service: "Pre-Purchase Inspection", rating: 5, date: "October 2023", text: "Needed a pre-purchase termite inspection done quickly. Gary came out within 24 hours, did a thorough job, and had the report to me same day. Saved me from a potentially expensive problem. Worth every cent." },
  { name: "Tom B.", location: "Ryde", service: "Termite Treatment", rating: 5, date: "September 2023", text: "Found termites in our back fence and were worried about the house. GC did a full inspection and treatment program. Very reassuring to deal with professionals who did not try to upsell or scare us." },
  { name: "Karen L.", location: "Hornsby", service: "Spider & Ant Treatment", rating: 5, date: "August 2023", text: "Excellent service from start to finish. Booking was easy, the technician arrived on time, and was clearly experienced. Our spider problem is completely gone. Will book again next year." },
  { name: "Ahmed S.", location: "Fairfield", service: "Cockroach Control", rating: 5, date: "July 2023", text: "Commercial kitchen treatment. Booked GC Pest Control after our previous provider consistently failed. The difference was immediately noticeable. We now have a monthly service contract with them." },
  { name: "Jenny W.", location: "Epping", service: "Rodent Control", rating: 4, date: "June 2023", text: "Very good service overall. Took a couple of visits to fully resolve our rat issue in the roof void, but they came back promptly as part of the guarantee and sorted it. Communication was excellent throughout." },
];

const stats = [
  { value: "4.9", label: "Average rating", sub: "Across all platforms" },
  { value: "310+", label: "Verified reviews", sub: "Google, Facebook, Word of Mouth" },
  { value: "98%", label: "Would recommend", sub: "Based on survey responses" },
];

export default function ReviewsPage() {
  return (
    <>
      <div className="bg-[var(--color-olive-dark)] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="text-[var(--color-tan)] text-sm font-semibold uppercase tracking-widest mb-3">Customer Reviews</p>
          <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-4">310+ customers. One consistent verdict.</h1>
          <div className="flex items-center gap-3 mt-6">
            <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-[var(--color-tan)] fill-[var(--color-tan)]" />)}</div>
            <span className="text-white/70 text-base">4.9 average across 310+ reviews</span>
          </div>
        </div>
      </div>
      <section className="bg-white border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-3 divide-x divide-[var(--color-border)]">
            {stats.map((s) => (
              <div key={s.label} className="py-10 px-4 md:px-10 text-center">
                <div className="font-display text-4xl md:text-5xl text-[var(--color-olive-dark)] mb-1">{s.value}</div>
                <div className="font-semibold text-sm text-[var(--color-charcoal)]">{s.label}</div>
                <div className="text-xs text-[var(--color-muted)] mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-cream)] py-14 border-b border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <Quote size={36} className="text-[var(--color-tan)]/40 mx-auto mb-6" />
          <p className="font-display text-xl md:text-2xl text-[var(--color-olive-dark)] leading-relaxed italic mb-6">
            "Had GC Pest Control out for a pre-purchase inspection. Gary was on time, professional, and gave me a detailed report the same day. Found evidence of previous termite activity that would have cost tens of thousands to fix. Genuinely saved us from a disaster."
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-[var(--color-tan)] fill-[var(--color-tan)]" />)}</div>
            <span className="text-sm font-semibold text-[var(--color-olive-dark)]">Robert H.</span>
            <span className="text-sm text-[var(--color-muted)]">— Kellyville</span>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-[var(--color-warm-white)]">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name + r.date} className="bg-white border border-[var(--color-border)] rounded-xl p-6 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(r.rating)].map((_, i) => <Star key={i} size={13} className="text-[var(--color-tan)] fill-[var(--color-tan)]" />)}
                    {[...Array(5 - r.rating)].map((_, i) => <Star key={i} size={13} className="text-[var(--color-border)]" />)}
                  </div>
                  <span className="text-xs text-[var(--color-muted)]/60">{r.date}</span>
                </div>
                <p className="text-[var(--color-charcoal)] text-sm leading-relaxed flex-1 mb-5 italic">"{r.text}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                  <div>
                    <div className="font-semibold text-sm text-[var(--color-olive-dark)]">{r.name}</div>
                    <div className="text-xs text-[var(--color-muted)]">{r.location}</div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-[var(--color-cream)] text-[var(--color-muted)] rounded-full border border-[var(--color-border)]">{r.service}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-[var(--color-muted)] text-sm mb-2">Reviews sourced from Google Business Profile and Facebook.</p>
            <a href="https://g.page/r/review" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-tan)] font-medium underline underline-offset-2 hover:text-[var(--color-tan-light)]">Leave us a review on Google</a>
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-olive-dark)] py-16">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Ready to be our next happy customer?</h2>
          <p className="text-white/60 mb-8">Most jobs are booked within the week. Same-week appointments usually available.</p>
          <Link href="/book" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--color-tan)] text-white font-semibold rounded hover:bg-[var(--color-tan-light)] transition-colors">
            Book an Inspection <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
