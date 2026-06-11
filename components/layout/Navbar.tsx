"use client";

import { useState } from "react";
import { siteConfig } from "@/components/data/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-[0.5px] border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-[760px] items-center justify-between px-6 py-4">
        <a href="#" className="text-[15px] font-semibold tracking-[-0.5px]">
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] text-text-muted transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
          {siteConfig.github && (
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-text-muted transition-opacity hover:opacity-70"
            >
              GitHub
            </a>
          )}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px]"
          >
            <span
              className={`h-[1.5px] w-5 bg-text-primary transition-transform ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-text-primary transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-text-primary transition-transform ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t-[0.5px] border-border px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-[14px] text-text-muted transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
          {siteConfig.github && (
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="py-2 text-[14px] text-text-muted transition-opacity hover:opacity-70"
            >
              GitHub
            </a>
          )}
        </nav>
      )}
    </header>
  );
}
