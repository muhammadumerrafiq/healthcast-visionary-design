import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Gallery } from "@/components/sections/Gallery";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FounderVision } from "@/components/sections/FounderVision";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Healthcast — Healthcare Technology & Digital Innovation" },
      { name: "description", content: "Healthcast is a B2B healthcare-tech partner delivering IT, SaaS, and digital marketing solutions for hospitals, clinics, doctors and conferences." },
      { property: "og:title", content: "Healthcast — Empowering Healthcare Through Technology" },
      { property: "og:description", content: "IT, marketing and digital transformation built for the realities of modern healthcare." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Gallery />
      <ServicesPreview />
      <FounderVision />
      <FinalCTA />
    </>
  );
}
