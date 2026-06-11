"use client";

import { motion } from "framer-motion";
import { Service } from "@/components/data/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-card border-[0.5px] border-border bg-bg-secondary p-7 transition-colors hover:border-border-strong"
    >
      <div className="mb-3 text-[24px]">{service.icon}</div>
      <h3 className="mb-2 text-[17px] font-semibold tracking-[-0.5px]">
        {service.title}
      </h3>
      <p className="text-[15px] leading-[1.65] text-text-muted">
        {service.description}
      </p>
    </motion.div>
  );
}
