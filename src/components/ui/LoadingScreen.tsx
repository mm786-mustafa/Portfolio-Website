"use client";

import { motion } from "framer-motion";

interface LoadingScreenProps {
  visible: boolean;
}

export function LoadingScreen({ visible }: LoadingScreenProps) {
  if (!visible) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[color:var(--bg)]"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="h-12 w-12 rounded-full border border-[color:var(--accent)]/30 border-t-[color:var(--accent)] animate-spin" />
        <p className="text-sm uppercase tracking-[0.4em] text-[color:var(--muted)]">
          Initializing
        </p>
      </motion.div>
    </motion.div>
  );
}
