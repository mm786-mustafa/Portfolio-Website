import { motion } from "framer-motion";
import { socials } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GitHubStats } from "@/components/ui/GitHubStats";

export function Contact() {
  return (
    <section id="contact" className="section-spacing">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let us build your next release"
          description="Tell me about your product goals, infrastructure challenges, or upcoming launch."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6 }}
            className="glass-card flex flex-col gap-4 rounded-3xl border border-white/10 p-6"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--accent)]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--accent)]"
              />
            </div>
            <input
              type="text"
              name="company"
              placeholder="Company / Project"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--accent)]"
            />
            <textarea
              name="message"
              placeholder="Tell me about your goals..."
              rows={5}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--accent)]"
            />
            <button
              type="submit"
              className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
            >
              Send Message
            </button>
          </motion.form>
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl border border-white/10 p-6"
            >
              <p className="text-sm text-[color:var(--muted)]">
                Prefer a quick response? Reach out directly:
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[color:var(--text)] transition hover:border-[color:var(--accent)]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
            <GitHubStats username="your-handle" />
          </div>
        </div>
      </div>
    </section>
  );
}
