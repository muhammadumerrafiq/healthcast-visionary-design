import { Play } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const items = [
  { src: g1, alt: "Healthcare conference keynote", tag: "Conferences", span: "md:col-span-2 md:row-span-2", video: false },
  { src: g2, alt: "Healthcast podcast recording", tag: "Podcast", span: "", video: true },
  { src: g3, alt: "Doctors networking", tag: "Networking", span: "", video: false },
  { src: g4, alt: "Healthcast team at work", tag: "Behind the scenes", span: "md:col-span-2", video: false },
];

export function Gallery() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-yellow font-semibold">Glimpse</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-balance">
              A look inside our work, events & people
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            From international medical conferences to studio podcasts and
            on-the-ground campaigns — moments that shape Healthcast.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group border border-border ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/0 to-transparent opacity-90" />
              {it.video && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="h-14 w-14 rounded-full bg-yellow text-charcoal flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 ml-0.5 fill-current" />
                  </span>
                </span>
              )}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-white/90 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur border border-white/15">
                  {it.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}