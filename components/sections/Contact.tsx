"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/components/data/site";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="py-10 border-t-[0.5px] border-border">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-card border-[0.5px] border-border bg-bg-secondary p-7 text-center"
      >
        <h2 className="text-[26px] font-semibold tracking-[-0.5px]">
          Let&apos;s build something together.
        </h2>
        <p className="mx-auto mt-3 max-w-[480px] text-[15px] leading-[1.65] text-text-muted">
          I&apos;m taking on a limited number of projects right now, and
          offering a discount on your first project in exchange for an honest
          testimonial.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href={`mailto:${siteConfig.email}`}>Email me</Button>
          <Button href={siteConfig.linkedIn} variant="outline" external>
            LinkedIn →
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
