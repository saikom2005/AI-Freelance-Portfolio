import { services } from "@/components/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Services() {
  return (
    <section id="services" className="py-10 border-t-[0.5px] border-border">
      <SectionLabel>Services</SectionLabel>
      <h2 className="mb-6 text-[26px] font-semibold tracking-[-0.5px]">
        How I can help
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}
