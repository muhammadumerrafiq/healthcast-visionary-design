const partners = [
  "CMA Hospital",
  "I-DAAP Conference",
  "Smile Solutions",
  "Dr. Sakina Clinics",
  "Pearl Medical",
  "MediCare+",
  "HealthSphere",
  "VitalsCo",
  "ClinicNova",
  "CarePoint",
];

export function TrustedBy() {
  const row = [...partners, ...partners];
  return (
    <section className="py-14 md:py-16 bg-secondary border-y border-border">
      <div className="container-px mx-auto max-w-7xl">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by leading healthcare organizations
        </p>
      </div>
      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max gap-12 animate-[marquee_35s_linear_infinite]">
          {row.map((name, i) => (
            <div
              key={i}
              className="shrink-0 px-6 py-3 rounded-xl border border-border bg-background flex items-center gap-3 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-yellow transition-colors"
            >
              <span className="h-2 w-2 rounded-full bg-yellow" />
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}