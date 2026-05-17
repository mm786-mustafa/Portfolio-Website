import { motion } from "framer-motion";
import { timeline } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Timeline() {
  return (
    <section id="journey" className="section-spacing">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <SectionHeader
          eyebrow="Journey"
          title="Experience timeline"
          description="A progression of learning, certifications, and high-impact deliveries."
        />
        <div className="relative border-l border-white/10 pl-6">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8 flex flex-col gap-2"
            >
              <div className="absolute -left-[7px] mt-2 h-3 w-3 rounded-full bg-[color:var(--accent)]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                {item.year}
              </span>
              <h3 className="text-lg font-semibold text-[color:var(--text)]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
