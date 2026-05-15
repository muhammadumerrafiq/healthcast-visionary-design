import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Code2, Megaphone, Check } from "lucide-react";

const cards = [
  {
    icon: Code2,
    eyebrow: "IT Services",
    title: "Build the digital backbone of healthcare",
    desc: "From SaaS platforms to AI automation — we engineer the systems hospitals, clinics and medical brands rely on every day.",
    bullets: ["Web & App Development", "AI Automation & Chatbots", "SaaS & UX Design"],
    cta: "Explore IT Services",
    to: "/services/it",
  },
  {
    icon: Megaphone,
    eyebrow: "Digital Marketing",
    title: "Grow trust, reach and patient demand",
    desc: "Strategic marketing built specifically for healthcare — performance, content and brand systems that move the needle.",
    bullets: ["PR, Podcasts & Content", "Meta & Google Ads", "Event & Portfolio Management"],
    cta: "Explore Digital Marketing",
    to: "/services/marketing",
  },
] as const;

export function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-yellow font-semibold">What we do</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-balance">
            Two practices. One mission for healthcare.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {cards.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group relative overflow-hidden rounded-3xl bg-background border border-border p-8 md:p-10 hover:border-yellow hover:-translate-y-1 transition-all shadow-soft hover:shadow-lift"
            >
              <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-yellow/0 group-hover:bg-yellow/10 blur-2xl transition-colors" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-charcoal text-yellow">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-charcoal group-hover:rotate-12 transition-transform" />
                </div>
                <p className="mt-6 text-xs uppercase tracking-[0.2em] font-semibold text-yellow">
                  {c.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold text-balance">{c.title}</h3>
                <p className="mt-4 text-muted-foreground">{c.desc}</p>
                <ul className="mt-6 space-y-2">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-yellow" /> {b}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-charcoal">
                  {c.cta}
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}