import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_75%)]" />
      <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-yellow/15 blur-3xl" />
      <div className="container-px mx-auto max-w-7xl relative py-20 md:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/85">
          <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
          {eyebrow}
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05] text-balance max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg text-white/70 max-w-2xl">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}