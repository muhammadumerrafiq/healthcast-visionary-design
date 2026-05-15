import founder from "@/assets/founder.jpg";
import { Quote } from "lucide-react";

export function FounderVision() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-lift">
            <img src={founder} alt="Founder of Healthcast" loading="lazy" className="w-full h-auto" width={1024} height={1280} />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 md:-right-8 bg-yellow text-charcoal rounded-2xl px-5 py-4 shadow-glow max-w-[220px]">
            <div className="text-xs font-semibold uppercase tracking-wider opacity-80">Founder & CEO</div>
            <div className="text-lg font-extrabold leading-tight">Building the future of care</div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="text-xs uppercase tracking-[0.2em] text-yellow font-semibold">Founder vision</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-balance">
            Healthcare is human. Technology should make it more so.
          </h2>
          <Quote className="h-10 w-10 text-yellow mt-8" />
          <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
            We started Healthcast because brilliant doctors, clinics and
            medical organizations deserved digital partners who actually
            understood their world. Our mission is simple — combine technology,
            design and storytelling to help healthcare reach more lives, with
            more clarity and more trust.
          </p>
          <p className="mt-4 text-muted-foreground">
            Every product we build, every campaign we run and every event we
            cover is shaped by this belief: better healthcare communication
            creates better healthcare outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}