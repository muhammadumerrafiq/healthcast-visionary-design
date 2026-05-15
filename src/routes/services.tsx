import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Healthcast" },
      { name: "description", content: "IT and digital marketing services tailored for healthcare organizations, hospitals, clinics and medical conferences." },
      { property: "og:title", content: "Healthcast Services" },
      { property: "og:description", content: "Two practices. One mission for healthcare." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Technology and marketing, engineered for healthcare."
        description="Pick the practice that fits your goal — or combine both for an end-to-end partnership across product, brand and growth."
      />
      <ServicesPreview />
      <FinalCTA />
    </>
  );
}