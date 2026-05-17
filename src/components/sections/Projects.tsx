import { motion } from "framer-motion";
import { projects } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Featured builds with production polish"
          description="High-impact launches across infrastructure automation, cloud platforms, and cross-platform applications."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="animated-border absolute inset-0 opacity-0 transition group-hover:opacity-100" />
              <div className="relative z-10 flex h-full flex-col gap-5">
                <div className="relative flex h-40 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-[color:var(--accent)]/20 text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Preview
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                    {project.type}
                  </span>
                  <h3 className="text-xl font-semibold text-[color:var(--text)]">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[color:var(--muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[color:var(--text)] transition hover:border-[color:var(--accent)]"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[color:var(--text)] transition hover:border-[color:var(--accent)]"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
