import { Link } from "@tanstack/react-router";
import { Activity } from "lucide-react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-yellow text-charcoal shadow-glow">
        <Activity className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className={`font-display text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-foreground"}`}>
        Health<span className="text-yellow">cast</span>
      </span>
    </Link>
  );
}