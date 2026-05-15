import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { FounderVision } from "@/components/sections/FounderVision";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Target, Heart, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Healthcast — Healthcare Technology Partner" },
      { name: "description", content: "Healthcast is a healthcare-tech and digital agency helping hospitals, clinics and medical brands grow with technology, marketing and storytelling." },
      { property: "og:title", content: "About Healthcast" },
      { property: "og:description", content: "Our story, mission, and the team behind Healthcast." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Human-centered", desc: "Care comes first. Every product and campaign is designed around real patients and real clinicians." },
  { icon: Target, title: "Outcome-driven", desc: "We measure success in trust earned, patients reached and operations improved — not vanity metrics." },
  { icon: Sparkles, title: "Modern by default", desc: "We bring premium design, AI and SaaS thinking to an industry that has waited far too long for it." },
  { icon: Users, title: "Partner mindset", desc: "We work as an extension of your team, embedded in your goals and accountable to your growth." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Healthcast"
        title="A healthcare-tech partner built for the next decade of care."
        description="We help hospitals, clinics, doctors, conferences and medical enterprises grow through technology, marketing and digital innovation."
      />
      <section className="py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-yellow font-semibold">Our story</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-balance">From a small studio to a healthcare-tech partner.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>Healthcast began with a simple observation: healthcare deserves the same caliber of digital experience as the tech industry. Doctors, clinics and medical organizations were stuck with outdated websites, weak branding and disconnected systems.</p>
              <p>Today we're a multidisciplinary team of engineers, designers, marketers and storytellers working with healthcare brands across Pakistan and beyond — building SaaS products, running ad systems, producing podcasts, and powering medical conferences.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border p-6 bg-secondary hover:border-yellow transition-colors">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-charcoal text-yellow">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FounderVision />
      <FinalCTA />
    </>
  );
}