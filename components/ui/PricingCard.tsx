"use client";

import { motion } from "framer-motion";
import { PricingTier } from "@/components/data/types";

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`rounded-card border-[0.5px] p-7 transition-colors hover:border-border-strong ${
        tier.highlighted ? "border-teal" : "border-border"
      }`}
    >
      {tier.highlighted && (
        <span className="mb-3 inline-block rounded-pill bg-teal-light px-3 py-1 text-[12px] font-medium text-teal-dark">
          Most popular
        </span>
      )}
      <h3 className="mb-1 text-[17px] font-semibold tracking-[-0.5px]">
        {tier.name}
      </h3>
      <p className="mb-3 text-[26px] font-semibold tracking-[-0.5px]">
        {tier.price}
        {tier.period && (
          <span className="text-[14px] font-normal text-text-faint">
            {" "}
            {tier.period}
          </span>
        )}
      </p>
      <p className="mb-4 text-[15px] leading-[1.65] text-text-muted">
        {tier.description}
      </p>
      <ul className="space-y-2">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-[14px] text-text-muted">
            <span className="mt-[2px] text-teal">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
