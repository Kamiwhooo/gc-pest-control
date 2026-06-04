import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Shield, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Inspection | GC Pest Control",
  description: "Book a pest inspection or treatment with GC Pest Control. Same-week availability across Greater Sydney. Licensed technicians.",
};

const services = [
  "Termite Inspection (Standard)",
  "Termite Inspection + Report (AS 4349.3)",
  "Pre-Purchase Termite Inspection",
  "Termite Chemical Barrier Treatment",
  "Termite Baiting System",
  "Rodent Control - Residential",
  "Rodent Control - Commercial",
  "Cockroach Treatment",
  "General Pest Control (Spider, Ant, Silverfish)",
  "Flea Treatment",
  "Not sure - I need advice first",
];

export default function BookPage() {
  return (
    <>
      <div className="bg-[var(--color-olive-dark)] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="text-[var(--color-tan)] text-sm font-semibold uppercase tracking-widest mb-3">Book Online</p>
          <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-4">Book an Inspection</h1>
          <p className="text-white/60 text-base max-w-md leading-relaxed">Fill in the form below and we'll confirm your booking within a few hours. Same-week appointments usually available.</p>
        </div>
      </div>
      <section className="py-16 md:py-24 bg-[var(--color-warm-white)]">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            <div className="md:col-span-2 order-2 md:order-1">
              <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-2xl p-7 mb-6">
                <h3 className="font-semibold text-[var(--color-olive-dark)] mb-5">What to expect</h3>
                <ul className="space-y-4">
                  {[
                    { step: "1", text: "Submit your booking request below." },
                    { step: "2", text: "We'll call or email to confirm the time and answer any questions." },
                    { step: "3", text: "Our technician arrives on time and carries out the service." },
                    { step: "4", text: "We follow up to make sure everything is sorted." },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-3 text-sm text-[var(--color-charcoal)]">
                      <span className="w-6 h-6 rounded-full bg-[var(--color-tan)] text-white text-xs font-bold flex items-center justify-center shrink-0">{item.step}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: "12-month guarantee on most treatments" },
                  { icon: CheckCircle, text: "Licensed & insured technicians" },
                  { icon: Clock, text: "Same-week bookings available" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-sm text-[var(--color-charcoal)]">
                    <item.icon size={16} className="text-[var(--color-tan)] shrink-0" />
                    {item.text}
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-white border border-[var(--color-border)] rounded-xl">
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-3">Prefer to call? We are happy to take bookings over the phone.</p>
                <a href="tel:0412345678" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-olive-dark)] hover:text-[var(--color-olive-light)] transition-colors">
                  <Phone size={15} /> 0412 345 678
                </a>
              </div>
            </div>
            <div className="md:col-span-3 order-1 md:order-2">
              <div className="bg-white border border-[var(--color-border)] rounded-2xl p-8 md:p-10">
                <h2 className="font-display text-2xl text-[var(--color-olive-dark)] mb-7">Your booking details</h2>
                <form className="space-y-5" action="#" method="POST">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="b_first" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5">First name <span className="text-red-400">*</span></label>
                      <input type="text" id="b_first" required className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:border-[var(--color-olive)] bg-[var(--color-warm-white)]" />
                    </div>
                    <div>
                      <label htmlFor="b_last" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5">Last name <span className="text-red-400">*</span></label>
                      <input type="text" id="b_last" required className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:border-[var(--color-olive)] bg-[var(--color-warm-white)]" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="b_email" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5">Email address <span className="text-red-400">*</span></label>
                    <input type="email" id="b_email" required className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:border-[var(--color-olive)] bg-[var(--color-warm-white)]" />
                  </div>
                  <div>
                    <label htmlFor="b_phone" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5">Phone number <span className="text-red-400">*</span></label>
                    <input type="tel" id="b_phone" required className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:border-[var(--color-olive)] bg-[var(--color-warm-white)]" />
                  </div>
                  <div>
                    <label htmlFor="b_address" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5">Property address <span className="text-red-400">*</span></label>
                    <input type="text" id="b_address" required placeholder="Street address, suburb, postcode" className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:border-[var(--color-olive)] bg-[var(--color-warm-white)]" />
                  </div>
                  <div>
                    <label htmlFor="b_service" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5">Service required <span className="text-red-400">*</span></label>
                    <select id="b_service" required className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:border-[var(--color-olive)] bg-[var(--color-warm-white)] text-[var(--color-charcoal)]">
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="b_type" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5">Property type</label>
                    <select id="b_type" className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:border-[var(--color-olive)] bg-[var(--color-warm-white)] text-[var(--color-charcoal)]">
                      <option value="">Select property type</option>
                      <option>House</option>
                      <option>Unit / Apartment</option>
                      <option>Townhouse</option>
                      <option>Commercial premises</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="b_preferred" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5">Preferred date / time</label>
                    <input type="text" id="b_preferred" placeholder="e.g. Any morning this week, Wednesday afternoon..." className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:border-[var(--color-olive)] bg-[var(--color-warm-white)]" />
                  </div>
                  <div>
                    <label htmlFor="b_notes" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5">Additional notes</label>
                    <textarea id="b_notes" rows={3} placeholder="Describe what you're seeing, any access requirements, or anything else we should know..." className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:border-[var(--color-olive)] bg-[var(--color-warm-white)] resize-none" />
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-[var(--color-tan)] hover:bg-[var(--color-tan-light)] text-white font-semibold rounded-lg text-sm transition-colors">Request Booking</button>
                  <p className="text-xs text-[var(--color-muted)] text-center">We will confirm your booking via phone or email within 2-4 business hours.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
