"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { socials } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GitHubStats } from "@/components/ui/GitHubStats";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          company: String(formData.get("company") ?? ""),
          message: String(formData.get("message") ?? ""),
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(result?.message ?? "Message delivery failed.");
      }

      form.reset();
      setIsSubmitted(true);
      setFeedbackMessage(
        result?.message ??
          "Your details were submitted successfully and the email has been sent."
      );
    } catch (error) {
      setIsSubmitted(false);
      setFeedbackMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending the message."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

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
            onSubmit={handleSubmit}
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
                required
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--accent)]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
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
              required
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--accent)]"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
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
            <GitHubStats username="mm786-mustafa" />
          </div>
        </div>
      </div>
      {feedbackMessage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-md rounded-3xl border border-white/10 bg-[color:var(--background)] p-6 shadow-2xl shadow-black/40"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--accent)]">
              {isSubmitted ? "Message sent" : "Send failed"}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[color:var(--text)]">
              {isSubmitted ? "Thanks for reaching out" : "Unable to send message"}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
              {feedbackMessage}
            </p>
            <button
              type="button"
              onClick={() => {
                setFeedbackMessage("");
                setIsSubmitted(false);
              }}
              className="mt-6 rounded-full bg-[color:var(--accent)] px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-110"
            >
              Close
            </button>
          </motion.div>
        </div>
      ) : null}
    </section>
  );
}
