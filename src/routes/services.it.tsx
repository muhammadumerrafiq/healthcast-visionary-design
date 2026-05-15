import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  Search, Globe, Smartphone, Palette, BrainCircuit, Bot, Boxes, ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/services/it")({
  head: () => ({
    meta: [
      { title: "IT Services — Web, App, AI & SaaS for Healthcare | Healthcast" },
      { name: "description", content: "Healthcast IT services: SEO, web & app development, UI/UX design, AI automation, chatbots and SaaS solutions for healthcare." },
      { property: "og:title", content: "Healthcast IT Services" },
      { property: "og:description", content: "Engineering the digital backbone of modern healthcare." },
    ],
  }),
  component: ITServicesPage,
});

const services = [
  { icon: Search, title: "SEO", desc: "Healthcare-grade search visibility, technical SEO and authority building." },
  { icon: Globe, title: "Web Development", desc: "High-performance sites for hospitals, clinics, conferences and brands." },
  { icon: Smartphone, title: "App Development", desc: "Patient apps, doctor tools and internal systems on iOS, Android and web." },
  { icon: Palette, title: "UI/UX Design", desc: "Premium product design that earns trust and removes friction." },
  { icon: BrainCircuit, title: "AI Automation", desc: "Workflow automation and AI agents that take real work off your team." },
  { icon: Bot, title: "Chatbots", desc: "24/7 patient-facing assistants connected to your booking, FAQ and CRM." },
  { icon: Boxes, title: "SaaS Solutions", desc: "Custom SaaS products engineered for healthcare-specific operations." },
];

const projects = [
  {
    name: "Smile Solutions",
    tag: "Dental clinic website",
    desc: "We developed a modern dental website focused on seamless appointment booking and user-friendly patient interaction.",
    url: "https://www.smilesolutionssk.com/",
    color: "from-[#0ea5e9] to-[#22d3ee]",
  },
  {
    name: "I-DAAP Conference",
    tag: "Medical conference platform",
    desc: "We designed and developed a professional website for the I-DAAP conference, ensuring smooth information access and event engagement.",
    url: "https://www.i-daap.com/",
    color: "from-[#f59e0b] to-[#facc15]",
  },
  {
    name: "Dr. Sakina Clinics",
    tag: "Clinic & doctor brand",
    desc: "We designed and developed a modern, user-friendly website for Dr. Sakina Clinics to streamline patient interaction and clearly present healthcare services.",
    url: "https://drsakinaclinics.com/",
    color: "from-[#ec4899] to-[#f472b6]",
  },
];

function ITServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="IT Services"
        title="Engineering the digital backbone of modern healthcare."
        description="From websites and mobile apps to AI automation and SaaS — we ship production-grade software for medical teams."
      />

      <section className="py-20 md:py-24">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-border bg-background p-6 hover:border-yellow hover:-translate-y-1 transition-all shadow-soft"
              >
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
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-yellow font-semibold">Selected work</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-balance">Healthcare projects we've shipped.</h2>
            </div>
            <Link to="/contact" className="text-sm font-semibold inline-flex items-center gap-1 hover:text-yellow">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl bg-background border border-border overflow-hidden hover:border-yellow hover:-translate-y-1 transition-all shadow-soft"
              >
                <div className={`h-44 bg-gradient-to-br ${p.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:24px_24px]" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div className="text-white">
                      <div className="text-xs font-semibold uppercase tracking-wider opacity-80">{p.tag}</div>
                      <div className="text-2xl font-extrabold mt-1">{p.name}</div>
                    </div>
                    <span className="h-10 w-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white group-hover:bg-white group-hover:text-charcoal transition-colors">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-charcoal">
                    Visit Website
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}