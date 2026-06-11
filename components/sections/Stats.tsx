"use client";

import { motion } from "framer-motion";
import { stats } from "@/components/data/stats";

export function Stats() {
  return (
    <section className="py-10 border-t-[0.5px] border-border">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid grid-cols-3 overflow-hidden rounded-card border-[0.5px] border-border"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-4 py-6 text-center ${
              i > 0 ? "border-l-[0.5px] border-border" : ""
            }`}
          >
            <p className="text-[26px] font-semibold tracking-[-0.5px] text-teal">
              {stat.value}
            </p>
            <p className="mt-1 text-[12px] text-text-faint">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
