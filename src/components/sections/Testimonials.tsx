import { motion } from "framer-motion";
import { testimonials } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-spacing">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by ambitious teams"
          description="Results-driven partnerships that prioritize clarity, velocity, and reliability."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl border border-white/10 p-6"
            >
              <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                "{item.quote}"
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-[color:var(--text)]">
                  {item.name}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
