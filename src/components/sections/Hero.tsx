"use client";

import { motion } from "framer-motion";
import { hero } from "@/data/site";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { useEffect, useState } from "react";

function TypingText({ text }: { text: string }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      setDisplay(text.slice(0, index));
      index += 1;
      if (index > text.length) {
        window.clearInterval(interval);
      }
    }, 28);

    return () => window.clearInterval(interval);
  }, [text]);

  return (
    <span className="border-r border-[color:var(--accent)]/60 pr-2">
      {display}
    </span>
  );
}

function FloatingIcons() {
  const items = ["K8s", "CI", "Cloud", "API", "RN", "IaC"];
  return (
    <div className="pointer-events-none absolute inset-0">
      {items.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
          className="floating-icon absolute rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]"
          style={{
            left: `${10 + index * 13}%`,
            top: `${15 + (index % 3) * 20}%`,
          }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-white/5"
    >
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      <ParticleCanvas />
      <FloatingIcons />
      <div className="relative mx-auto flex min-h-[90vh] w-full max-w-6xl flex-col items-start justify-center gap-10 px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-semibold tracking-tight text-[color:var(--text)] md:text-6xl"
        >
          {hero.name}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-xl font-medium text-[color:var(--accent)] md:text-2xl"
        >
          {hero.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-2xl text-lg leading-relaxed text-[color:var(--muted)]"
        >
          <TypingText text={hero.tagline} />
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl text-base leading-relaxed text-[color:var(--muted)]"
        >
          {hero.subtagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          {hero.ctas.map((cta, index) => (
            <a
              key={cta.label}
              href={cta.href}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                index === 0
                  ? "bg-[color:var(--accent)] text-black hover:brightness-110"
                  : "border border-white/10 bg-white/5 text-[color:var(--text)] hover:bg-white/10"
              }`}
            >
              {cta.label}
            </a>
          ))}
        </motion.div>
        <div className="mt-10 grid w-full gap-4 text-sm text-[color:var(--muted)] md:grid-cols-3">
          {[
            "99.9% deployment uptime",
            "Automated CI/CD in under 15 minutes",
            "Cross-platform product delivery",
          ].map((metric) => (
            <div
              key={metric}
              className="glass-card rounded-2xl border border-white/10 px-4 py-3"
            >
              {metric}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
