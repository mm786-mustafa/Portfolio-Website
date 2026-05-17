"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const metrics = [
  { label: "Deploy Success", value: "99.9%" },
  { label: "Mean Recovery", value: "4m" },
  { label: "Pipeline Speed", value: "12m" },
];

export function DevOpsShowcase() {
  return (
    <section id="devops" className="section-spacing">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <SectionHeader
          eyebrow="DevOps"
          title="Automation that scales with confidence"
          description="Automating deployments with scalable cloud infrastructure and real-time observability."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl border border-white/10 p-6 lg:col-span-2"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Deployment pipeline
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {["Commit", "Build", "Deploy"].map((stage, index) => (
                <div
                  key={stage}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center justify-between text-sm text-[color:var(--text)]">
                    <span>{stage}</span>
                    <span className="text-xs text-[color:var(--muted)]">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-[color:var(--accent)]"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-[#0b0f1f] p-4 font-mono text-xs text-[color:var(--muted)]">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-2"
              >
                <p>$ git push origin main</p>
                <p>$ pipeline run --env=production</p>
                <p>{"-> Provisioning clusters ... done"}</p>
                <p>{"-> Deploying containers ... done"}</p>
                <p>{"-> Running smoke tests ... passed"}</p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-3xl border border-white/10 p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Cluster map
            </p>
            <svg
              viewBox="0 0 240 180"
              className="mt-6 h-40 w-full"
              aria-hidden="true"
            >
              <rect
                x="20"
                y="20"
                width="200"
                height="140"
                rx="18"
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.1)"
              />
              <circle cx="70" cy="70" r="22" fill="rgba(120,150,255,0.2)" />
              <circle cx="170" cy="70" r="22" fill="rgba(120,150,255,0.2)" />
              <circle cx="120" cy="120" r="24" fill="rgba(120,150,255,0.35)" />
              <line
                x1="70"
                y1="70"
                x2="120"
                y2="120"
                stroke="rgba(120,150,255,0.6)"
              />
              <line
                x1="170"
                y1="70"
                x2="120"
                y2="120"
                stroke="rgba(120,150,255,0.6)"
              />
            </svg>
            <p className="mt-4 text-sm text-[color:var(--muted)]">
              Kubernetes clusters across regions with auto-scaling nodes and
              traffic-aware routing.
            </p>
          </motion.div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl border border-white/10 p-5"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                {metric.label}
              </p>
              <p className="mt-3 text-3xl font-semibold text-[color:var(--text)]">
                {metric.value}
              </p>
              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-full bg-[color:var(--accent)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
