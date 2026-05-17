import { motion } from "framer-motion";
import { about } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <SectionHeader
          eyebrow="About"
          title={about.headline}
          description={about.story}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {about.highlights.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl border border-white/10 p-6"
            >
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
