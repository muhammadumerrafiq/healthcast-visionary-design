import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/923288637836";

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-yellow/15 blur-3xl" />
      <div className="container-px mx-auto max-w-5xl relative text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-yellow animate-pulse" />
          Ready when you are
        </span>
        <h2 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05] text-balance">
          Let's Build The Future of <span className="text-yellow">Healthcare</span> Together.
        </h2>
        <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
          Talk to our team about your hospital, clinic, conference or healthcare brand. We'll
          map out the right mix of technology and marketing to move it forward.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-yellow text-charcoal px-7 py-4 text-sm font-bold shadow-glow hover:-translate-y-0.5 transition-transform"
          >
            <MessageCircle className="h-4 w-4" />
            Contact Us on WhatsApp
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="mailto:healthcastpk1@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            healthcastpk1@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}