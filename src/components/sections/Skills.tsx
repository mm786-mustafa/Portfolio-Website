import { motion } from "framer-motion";
import { skillGroups } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="section-spacing">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <SectionHeader
          eyebrow="Skills"
          title="A focused, modern stack"
          description="Built for high-availability systems, developer velocity, and premium user experiences."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="glass-card rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[color:var(--text)]">
                  {group.label}
                </h3>
                <span className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">
                  {group.skills.length} skills
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--text)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs text-[color:var(--muted)]">
                  <span>Proficiency</span>
                  <span>{80 + groupIndex * 4}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${80 + groupIndex * 4}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-[color:var(--accent)]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
