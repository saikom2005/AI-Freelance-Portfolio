"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/components/data/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { tagline, taglineAccent, subHeadline, availableForWork, email, linkedIn } =
    siteConfig;

  const parts = tagline.split(taglineAccent);

  return (
    <section className="pt-[7rem] pb-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {availableForWork && (
          <div className="mb-5 inline-flex items-center gap-2 rounded-pill bg-teal-light px-3 py-[6px] text-[13px] font-medium text-teal-dark">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-teal" />
            Available for freelance work
          </div>
        )}

        <h1 className="text-[34px] font-semibold leading-[1.08] tracking-[-1.5px] md:text-[46px] md:tracking-[-1.5px]">
          {parts[0]}
          <span className="text-teal">{taglineAccent}</span>
          {parts[1]}
        </h1>

        <p className="mt-4 max-w-[560px] text-[16px] leading-[1.65] text-text-muted md:text-[17px]">
          {subHeadline}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={`mailto:${email}`}>Work with me</Button>
          <Button href={linkedIn} variant="outline" external>
            LinkedIn →
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
