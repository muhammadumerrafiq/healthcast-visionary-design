import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Activity, ShieldCheck, Stethoscope } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_75%)]" />
      <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-yellow/20 blur-3xl" />

      <div className="container-px mx-auto max-w-7xl relative pt-20 md:pt-28 pb-20 md:pb-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 animate-[fade-up_0.7s_ease-out_both]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-medium text-white/85">
            <Sparkles className="h-3.5 w-3.5 text-yellow" />
            Healthcare technology, reimagined
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05] text-balance">
            Empowering Healthcare Through{" "}
            <span className="relative inline-block">
              <span className="text-yellow">Technology</span>
              <span className="absolute -bottom-1 left-0 h-2 w-full bg-yellow/30 -z-0 rounded-full" />
            </span>{" "}
            & Digital Innovation
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
            Healthcast partners with hospitals, clinics, doctors, and medical
            enterprises to deliver IT, marketing, and digital transformation
            built for the realities of modern care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-yellow text-charcoal px-6 py-3.5 text-sm font-semibold shadow-glow hover:translate-y-[-2px] transition-transform"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "120+", v: "Healthcare clients" },
              { k: "50+", v: "Conferences powered" },
              { k: "8 yrs", v: "Industry expertise" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-extrabold text-white">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-white/55 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative animate-[fade-up_0.9s_ease-out_both]">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-lift">
            <img
              src={heroDashboard}
              alt="Healthcast healthcare analytics dashboard"
              width={1280}
              height={1024}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
          </div>

          {/* Floating cards */}
          <div className="hidden sm:flex absolute -left-4 md:-left-10 top-10 items-center gap-3 rounded-2xl bg-white text-charcoal px-4 py-3 shadow-lift animate-[float_6s_ease-in-out_infinite]">
            <span className="h-9 w-9 rounded-xl bg-yellow/20 inline-flex items-center justify-center">
              <Activity className="h-5 w-5 text-charcoal" />
            </span>
            <div>
              <div className="text-xs text-slate">Active patients</div>
              <div className="text-sm font-bold">12,438 today</div>
            </div>
          </div>

          <div className="hidden sm:flex absolute -right-4 md:-right-6 bottom-8 items-center gap-3 rounded-2xl bg-white text-charcoal px-4 py-3 shadow-lift animate-[float_7s_ease-in-out_infinite]">
            <span className="h-9 w-9 rounded-xl bg-yellow inline-flex items-center justify-center">
              <ShieldCheck className="h-5 w-5 text-charcoal" />
            </span>
            <div>
              <div className="text-xs text-slate">Compliance</div>
              <div className="text-sm font-bold">HIPAA Ready</div>
            </div>
          </div>

          <div className="hidden md:flex absolute right-10 -top-6 items-center gap-2 rounded-full bg-charcoal border border-white/10 px-4 py-2 text-xs text-white shadow-lift">
            <Stethoscope className="h-4 w-4 text-yellow" />
            <span className="font-medium">200+ clinics onboarded</span>
          </div>
        </div>
      </div>
    </section>
  );
}