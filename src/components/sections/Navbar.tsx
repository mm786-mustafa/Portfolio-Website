"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/data/site";

interface NavbarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  const sectionIds = useMemo(
    () => navigation.map((item) => item.href.replace("#", "")),
    []
  );

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-40 w-full border-b border-white/5 bg-[color:var(--bg)]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-lg font-semibold tracking-tight">
          <span className="text-[color:var(--accent)]">M</span>uhammad Mustafa
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navigation.map((item) => {
            const target = item.href.replace("#", "");
            const isActive = active === target;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`transition ${
                  isActive
                    ? "text-[color:var(--accent)]"
                    : "text-[color:var(--muted)] hover:text-[color:var(--text)]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] transition hover:text-[color:var(--text)]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-[color:var(--text)] md:hidden"
            aria-label="Toggle navigation"
          >
            <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-[color:var(--bg)] px-6 py-4 md:hidden"
          >
            <div className="flex flex-col gap-4 text-sm">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-[color:var(--muted)] hover:text-[color:var(--text)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
