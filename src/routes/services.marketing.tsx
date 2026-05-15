import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import {
  Megaphone, Mic, Target, BarChart3, Briefcase, PenLine, CalendarCheck,
} from "lucide-react";

export const Route = createFileRoute("/services/marketing")({
  head: () => ({
    meta: [
      { title: "Digital Marketing — PR, Ads, Podcasts & Events | Healthcast" },
      { name: "description", content: "Healthcast digital marketing for healthcare: PR, podcasts, Meta & Google Ads, content creation, portfolio handling and event management." },
      { property: "og:title", content: "Healthcast Digital Marketing" },
      { property: "og:description", content: "Performance, content and brand systems built for healthcare." },
    ],
  }),
  component: MarketingPage,
});

const services = [
  { icon: Megaphone, title: "PR", desc: "Earned media and reputation building for clinicians and brands." },
  { icon: Mic, title: "Podcasts", desc: "Production, editing and distribution of healthcare podcasts." },
  { icon: Target, title: "Meta Ads", desc: "Patient acquisition campaigns on Facebook and Instagram." },
  { icon: BarChart3, title: "Google Ads", desc: "High-intent search campaigns for clinics and providers." },
  { icon: Briefcase, title: "Portfolio Handling", desc: "End-to-end social and brand portfolio management." },
  { icon: PenLine, title: "Content Creation", desc: "Reels, articles, photography and on-brand storytelling." },
  { icon: CalendarCheck, title: "Event Management", desc: "Medical conferences, launches and on-ground activations." },
];

const showcase = [
  { src: g2, label: "Podcast — Modern Medicine" },
  { src: g1, label: "I-DAAP Conference Coverage" },
  { src: g4, label: "Brand Campaign Shoot" },
  { src: g3, label: "Networking Event" },
];

function MarketingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Digital Marketing"
        title="Grow trust, reach and patient demand with marketing built for healthcare."
        description="From PR and podcasts to ads and event production — a full marketing engine designed for medical brands."
      />

      <section className="py-20 md:py-24">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="group rounded-2xl border border-border bg-background p-6 hover:border-yellow hover:-translate-y-1 transition-all shadow-soft">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-charcoal group-hover:bg-yellow transition-colors">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary">
        <div className="container-px mx-auto max-w-7xl">
          <span className="text-xs uppercase tracking-[0.2em] text-yellow font-semibold">Portfolio</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-balance max-w-3xl">
            Campaigns, podcasts and events we've produced.
          </h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {showcase.map((s, i) => (
              <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
                <img src={s.src} alt={s.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-xs font-semibold text-white/90 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur border border-white/15">
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}