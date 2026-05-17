"use client";

import { useEffect } from "react";

export function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    if (!glow) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      glow.style.setProperty("--glow-x", `${clientX}px`);
      glow.style.setProperty("--glow-y", `${clientY}px`);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div id="cursor-glow" aria-hidden="true" />;
}
