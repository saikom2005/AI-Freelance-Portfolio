"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored ? stored === "dark" : prefersDark;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={`flex h-8 w-8 items-center justify-center rounded-pill border-[0.5px] text-[13px] font-semibold transition-colors hover:opacity-80 ${
        isDark
          ? "border-white bg-white text-black"
          : "border-black bg-black text-white"
      }`}
    >
      {isDark ? "O" : "I"}
    </button>
  );
}
