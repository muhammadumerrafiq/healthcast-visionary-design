import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Healthcast — Talk to our healthcare-tech team" },
      { name: "description", content: "Reach Healthcast for IT services, digital marketing, healthcare events and partnerships. Wah Cantt, Pakistan." },
      { property: "og:title", content: "Contact Healthcast" },
      { property: "og:description", content: "Let's build the future of healthcare together." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build the future of healthcare, together."
        description="Tell us about your hospital, clinic, conference or brand. We'll get back within one business day."
      />

      <section className="py-20 md:py-24">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: MapPin, title: "Visit", body: "CMA Hospital, Pearl Arcade F-block, Kohistan Enclave, Wah Cantt, Pakistan" },
              { icon: Mail, title: "Email", body: "healthcastpk1@gmail.com", href: "mailto:healthcastpk1@gmail.com" },
              { icon: Phone, title: "Phone", body: "+92 328 8637836", href: "tel:+923288637836" },
              { icon: MessageCircle, title: "WhatsApp", body: "Chat with us instantly", href: "https://wa.me/923288637836" },
            ].map((c) => {
              const Inner = (
                <>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-charcoal text-yellow">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.title}</div>
                    <div className="mt-1 font-semibold">{c.body}</div>
                  </div>
                </>
              );
              return c.href ? (
                <a key={c.title} href={c.href} className="flex items-start gap-4 p-5 rounded-2xl border border-border hover:border-yellow transition-colors">
                  {Inner}
                </a>
              ) : (
                <div key={c.title} className="flex items-start gap-4 p-5 rounded-2xl border border-border">
                  {Inner}
                </div>
              );
            })}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 rounded-3xl border border-border bg-secondary p-6 md:p-8"
          >
            <h2 className="text-2xl font-extrabold">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">We typically respond within one business day.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Full name" name="name" placeholder="Dr. Sara Khan" />
              <Field label="Email" name="email" type="email" placeholder="you@clinic.com" />
              <Field label="Organization" name="org" placeholder="Hospital / Clinic / Brand" />
              <Field label="Phone" name="phone" placeholder="+92 ..." />
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium">How can we help?</label>
              <textarea required rows={5} placeholder="Tell us about your project..." className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow" />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-full bg-charcoal text-white px-6 py-3.5 text-sm font-semibold hover:bg-charcoal/90 transition-colors">
              {sent ? "Thank you — we'll be in touch" : "Send message"}
            </button>
          </form>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Healthcast on map"
              src="https://www.google.com/maps?q=Wah+Cantt+Kohistan+Enclave&output=embed"
              className="w-full h-[420px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow"
      />
    </div>
  );
}