import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | GC Pest Control",
  description: "Get in touch with GC Pest Control. Call, email, or send a message. Serving Greater Sydney - same-week bookings available.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-[var(--color-olive-dark)] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="text-[var(--color-tan)] text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
          <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-4">Let's talk.</h1>
          <p className="text-white/60 text-base max-w-md leading-relaxed">We answer our own phones and aim to respond to all messages within a few hours during business hours.</p>
        </div>
      </div>
      <section className="py-16 md:py-24 bg-[var(--color-warm-white)]">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            <div className="md:col-span-2">
              <h2 className="font-display text-2xl text-[var(--color-olive-dark)] mb-8">Get in touch</h2>
              <div className="space-y-7">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-tan)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={17} className="text-[var(--color-tan)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[var(--color-olive-dark)] mb-1">Phone</div>
                    <a href="tel:0412345678" className="text-[var(--color-muted)] text-sm hover:text-[var(--color-olive)] transition-colors">0412 345 678</a>
                    <p className="text-xs text-[var(--color-muted)]/60 mt-1">Mon-Fri 7am-6pm, Sat 8am-3pm</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-tan)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={17} className="text-[var(--color-tan)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[var(--color-olive-dark)] mb-1">Email</div>
                    <a href="mailto:info@gcpestcontrol.com.au" className="text-[var(--color-muted)] text-sm hover:text-[var(--color-olive)] transition-colors">info@gcpestcontrol.com.au</a>
                    <p className="text-xs text-[var(--color-muted)]/60 mt-1">We reply within a few hours</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-tan)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={17} className="text-[var(--color-tan)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[var(--color-olive-dark)] mb-1">Service Area</div>
                    <p className="text-[var(--color-muted)] text-sm">Greater Sydney, NSW</p>
                    <p className="text-xs text-[var(--color-muted)]/60 mt-1">Hills District, Parramatta, Western Sydney, Northern Suburbs</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-tan)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={17} className="text-[var(--color-tan)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[var(--color-olive-dark)] mb-2">Business Hours</div>
                    <div className="space-y-1 text-sm text-[var(--color-muted)]">
                      <div className="flex justify-between gap-8"><span>Monday - Friday</span><span>7:00am - 6:00pm</span></div>
                      <div className="flex justify-between gap-8"><span>Saturday</span><span>8:00am - 3:00pm</span></div>
                      <div className="flex justify-between gap-8"><span>Sunday</span><span className="text-[var(--color-muted)]/50">Closed</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 p-5 bg-[var(--color-cream)] border border-[var(--color-border)] rounded-xl">
                <div className="flex items-start gap-3">
                  <MessageSquare size={17} className="text-[var(--color-tan)] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-[var(--color-olive-dark)] mb-1">Emergency pest issue?</div>
                    <p className="text-xs text-[var(--color-muted)] leading-relaxed">Call us directly on 0412 345 678. We do our best to accommodate urgent situations, particularly for active termite infestations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="bg-white border border-[var(--color-border)] rounded-2xl p-8 md:p-10">
                <h2 className="font-display text-2xl text-[var(--color-olive-dark)] mb-2">Send us a message</h2>
                <p className="text-[var(--color-muted)] text-sm mb-8">Not sure what service you need? Describe what you're seeing and we'll point you in the right direction.</p>
                <form className="space-y-5" action="#" method="POST">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5">First name</label>
                      <input type="text" id="first_name" name="first_name" placeholder="Gary" className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:border-[var(--color-olive)] transition-colors bg-[var(--color-warm-white)]" />
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5">Last name</label>
                      <input type="text" id="last_name" name="last_name" placeholder="Chen" className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:border-[var(--color-olive)] transition-colors bg-[var(--color-warm-white)]" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5">Email address</label>
                    <input type="email" id="email" name="email" placeholder="gary@example.com.au" className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:border-[var(--color-olive)] transition-colors bg-[var(--color-warm-white)]" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5">Phone number</label>
                    <input type="tel" id="phone" name="phone" placeholder="04XX XXX XXX" className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:border-[var(--color-olive)] transition-colors bg-[var(--color-warm-white)]" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5">What do you need help with?</label>
                    <select id="service" name="service" className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:border-[var(--color-olive)] transition-colors bg-[var(--color-warm-white)] text-[var(--color-charcoal)]">
                      <option value="">Select a service</option>
                      <option>Termite Inspection</option>
                      <option>Termite Treatment</option>
                      <option>Rodent Control</option>
                      <option>Cockroach Treatment</option>
                      <option>General Pest Control</option>
                      <option>Pre-Purchase Inspection</option>
                      <option>Not sure - need advice</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="suburb" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5">Suburb</label>
                    <input type="text" id="suburb" name="suburb" placeholder="Parramatta" className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:border-[var(--color-olive)] transition-colors bg-[var(--color-warm-white)]" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5">Message</label>
                    <textarea id="message" name="message" rows={4} placeholder="Tell us what you're seeing or what you'd like help with..." className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:border-[var(--color-olive)] transition-colors bg-[var(--color-warm-white)] resize-none" />
                  </div>
                  <button type="submit" className="w-full py-3 bg-[var(--color-olive-dark)] hover:bg-[var(--color-olive-light)] text-white font-semibold rounded-lg text-sm transition-colors">Send Message</button>
                  <p className="text-xs text-[var(--color-muted)] text-center">We typically respond within 2-4 business hours.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
