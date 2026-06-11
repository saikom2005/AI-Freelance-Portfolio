import { pricingTiers } from "@/components/data/pricing";
import { PricingCard } from "@/components/ui/PricingCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Pricing() {
  return (
    <section id="pricing" className="py-10 border-t-[0.5px] border-border">
      <SectionLabel>Pricing</SectionLabel>
      <h2 className="mb-2 text-[26px] font-semibold tracking-[-0.5px]">
        Simple, project-based pricing
      </h2>
      <p className="mb-6 max-w-[560px] text-[15px] leading-[1.65] text-text-muted">
        Every project is scoped up front, so you know the cost before we start.
        Rough guidelines below — happy to discuss what fits your project.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.name} tier={tier} />
        ))}
      </div>
    </section>
  );
}
