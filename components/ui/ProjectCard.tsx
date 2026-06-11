"use client";

import { motion } from "framer-motion";
import { Project } from "@/components/data/types";
import { Pill } from "./Pill";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-card border-[0.5px] border-border p-7 transition-colors hover:border-border-strong"
    >
      <span className="mb-3 inline-block rounded-pill bg-teal-light px-3 py-1 text-[12px] font-medium text-teal-dark">
        {project.badge}
      </span>
      <h3 className="mb-2 text-[20px] font-semibold tracking-[-0.5px]">
        {project.title}
      </h3>
      <p className="mb-4 text-[15px] leading-[1.65] text-text-muted">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.pills.map((pill) => (
          <Pill key={pill}>{pill}</Pill>
        ))}
      </div>
    </motion.div>
  );
}
