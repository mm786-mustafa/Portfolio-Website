import { motion } from "framer-motion";
import { services } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Services() {
  return (
    <section id="services" className="section-spacing">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <SectionHeader
          eyebrow="Services"
          title="Services built for ambitious teams"
          description="From cloud foundations to product delivery, everything is optimized for speed, reliability, and clarity."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="glass-card flex items-center justify-between rounded-2xl border border-white/10 px-5 py-4"
            >
              <span className="text-sm text-[color:var(--text)]">
                {service}
              </span>
              <span className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">
                Pro
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
