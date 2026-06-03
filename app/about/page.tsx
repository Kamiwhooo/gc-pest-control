import Link from "next/link";
import { ArrowRight, Award, Users, Clock, Leaf } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | GC Pest Control",
  description: "Family-owned pest control business serving Greater Sydney since 2008.",
};

const values = [
  { icon: Award, title: "Properly licensed", desc: "Every technician holds a current NSW pest management licence. We don't use unlicensed subcontractors, ever." },
  { icon: Users, title: "Family-owned", desc: "GC Pest Control has been run by the same family since 2008. You deal with us directly, not a call centre." },
  { icon: Clock, title: "On time, every time", desc: "We respect your schedule. If we're running late, we call ahead. It's a simple standard we hold ourselves to." },
  { icon: Leaf, title: "Responsible products", desc: "We use Australian-registered products applied at label rates. No cutting corners on safety." },
];

const team = [
  { name: "Gary Chen", role: "Director & Senior Technician", bio: "Gary founded GC Pest Control in 2008 after 10 years with a national pest management company. He holds a full NSW pest management licence and specialises in termite management.", image: "/public/images/team-gary.jpg" },
  { name: "Lisa Chen", role: "Operations Manager", bio: "Lisa manages scheduling, customer communications, and quality assurance. She ensures every job meets our service standards before the technician leaves site.", image: "/public/images/team-lisa.jpg" },
  { name: "Michael Torres", role: "Senior Technician", bio: "Michael has been with GC Pest Control for seven years and holds specialist qualifications in timber pest management. He handles most of our complex termite cases.", image: "/public/images/team-michael.jpg" },
];

export default function AboutPage() {
  return (
    <>
      <div className="bg-[var(--color-olive-dark)] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="text-[var(--color-tan)] text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-4 max-w-xl">Sixteen years of getting it right.</h1>
          <p className="text-white/60 text-base max-w-lg leading-relaxed">We started small, built our reputation on honest work, and have not changed the formula since.</p>
        </div>
      </div>
      <section className="py-16 md:py-24 bg-[var(--color-warm-white)]">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-[var(--color-olive-dark)] leading-tight mb-6">Started with one van. Built on word of mouth.</h2>
              <div className="space-y-4 text-[var(--color-muted)] text-base leading-relaxed">
                <p>Gary Chen started GC Pest Control in 2008 out of a simple frustration: he had spent a decade watching large pest control companies prioritise volume over quality, sending out undertrained technicians and leaving customers with recurring problems.</p>
                <p>He set out to do it differently. Small enough to care about every job. Qualified enough to actually solve the problem. Honest enough to tell you when a job does not need doing.</p>
                <p>Sixteen years later, the business has grown but the approach has not. Our team is small and fully licensed. We still answer our own phones. And we still come back if the job is not done right.</p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[{ value: "2008", label: "Est." }, { value: "4,800+", label: "Jobs done" }, { value: "4.9", label: "Avg. rating" }].map((stat) => (
                  <div key={stat.label} className="bg-[var(--color-cream)] rounded-xl p-4 text-center border border-[var(--color-border)]">
                    <div className="font-display text-2xl text-[var(--color-olive-dark)]">{stat.value}</div>
                    <div className="text-xs text-[var(--color-muted)] mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <ImagePlaceholder src="/public/images/about-van.jpg" alt="GC Pest Control van" className="w-full aspect-square rounded-2xl" label="/public/images/about-van.jpg" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl overflow-hidden border-4 border-white shadow-md">
                <ImagePlaceholder src="/public/images/about-team.jpg" alt="GC Pest Control team" className="w-full h-full" label="/public/images/about-team.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="section-divider" />
      <section className="py-16 md:py-24 bg-[var(--color-warm-white)]">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="mb-12">
            <p className="text-[var(--color-tan)] text-sm font-semibold uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--color-olive-dark)]">What we stand for.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-[var(--color-border)] rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-tan)]/10 flex items-center justify-center mb-5">
                  <v.icon size={19} className="text-[var(--color-tan)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-olive-dark)] mb-2">{v.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="section-divider" />
      <section className="py-16 md:py-24 bg-[var(--color-warm-white)]">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="mb-12">
            <p className="text-[var(--color-tan)] text-sm font-semibold uppercase tracking-widest mb-3">The Team</p>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--color-olive-dark)]">The people doing the work.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name}>
                <div className="overflow-hidden rounded-xl mb-5 border border-[var(--color-border)]">
                  <ImagePlaceholder src={member.image} alt={member.name} className="w-full aspect-[3/4]" label={member.image} />
                </div>
                <h3 className="font-semibold text-[var(--color-olive-dark)] text-lg">{member.name}</h3>
                <p className="text-[var(--color-tan)] text-sm font-medium mb-3">{member.role}</p>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-cream)] border-t border-[var(--color-border)] py-12">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="text-center text-[var(--color-muted)] text-sm mb-8 uppercase tracking-widest font-medium">Licences and Memberships</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["NSW Pest Management Licence #12345", "AEPMA Member", "AS 4349.3 Certified", "Public Liability Insured", "WorkCover NSW"].map((c) => (
              <span key={c} className="px-4 py-2 bg-white border border-[var(--color-border)] rounded-full text-sm text-[var(--color-charcoal)] font-medium">{c}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-olive-dark)] py-16">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Want to work with us?</h2>
          <p className="text-white/60 mb-8 leading-relaxed">Book an inspection or get in touch. We are a friendly team and happy to chat through what you are dealing with.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-tan)] text-white font-semibold rounded text-sm hover:bg-[var(--color-tan-light)] transition-colors">Book an Inspection <ArrowRight size={16} /></Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded text-sm hover:border-white/60 transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
