import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed text-white/65 max-w-xs">
            Empowering healthcare decisions with data-driven strategies and human-centered solutions.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-white/15 hover:bg-yellow hover:text-charcoal hover:border-yellow transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold tracking-wide uppercase mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/services/it", label: "IT Services" },
              { to: "/services/marketing", label: "Digital Marketing" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-yellow transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold tracking-wide uppercase mb-5">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 text-yellow shrink-0 mt-0.5" />
              <span>HEALTH CAST SMC PVT LTD., CMA Hospital Pearl Arcade F-block Kohistan Enclave, Wah Cantt, Pakistan</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 text-yellow shrink-0" />
              <a href="mailto:healthcastpk1@gmail.com" className="hover:text-yellow">healthcastpk1@gmail.com</a>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 text-yellow shrink-0" />
              <a href="tel:+923288637836" className="hover:text-yellow">+92 328 8637836</a>
            </li>
          </ul>
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Healthcast location"
              src="https://www.google.com/maps?q=Wah+Cantt+Kohistan+Enclave&output=embed"
              className="w-full h-40 grayscale-[40%]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>© {new Date().getFullYear()} Healthcast SMC Pvt Ltd. All rights reserved.</p>
          <p>Built for healthcare. Designed for trust.</p>
        </div>
      </div>
    </footer>
  );
}