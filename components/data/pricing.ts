import { PricingTier } from "./types";

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$500–$1,000",
    description:
      "A focused, single-purpose tool — a chatbot, automation script, or small dashboard.",
    features: [
      "1 core feature or workflow",
      "1–2 week turnaround",
      "1 round of revisions",
      "Basic documentation",
    ],
  },
  {
    name: "Pro",
    price: "$1,000–$3,000",
    description:
      "A complete application — ML model, full-stack tool, or multi-step automation pipeline.",
    features: [
      "End-to-end build & deployment",
      "2–4 week turnaround",
      "2 rounds of revisions",
      "Documentation + handoff call",
      "30 days of post-launch support",
    ],
    highlighted: true,
  },
  {
    name: "Custom",
    price: "Let's talk",
    description:
      "Larger or ongoing projects — ongoing ML work, ongoing automation needs, or ongoing partnerships.",
    features: [
      "Scoped to your needs",
      "Flexible timeline",
      "Ongoing support available",
      "Direct collaboration",
    ],
  },
];
