"use client";

import { useEffect, useRef } from "react";

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let animationFrame = 0;
    const particles = Array.from({ length: 70 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      radius: 0.4 + Math.random() * 1.5,
      speed: 0.12 + Math.random() * 0.2,
      drift: (Math.random() - 0.5) * 0.2,
      alpha: 0.3 + Math.random() * 0.5,
    }));

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      const { width, height } = canvas.getBoundingClientRect();
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(120, 150, 255, 0.5)";

      particles.forEach((particle) => {
        particle.y -= particle.speed / 100;
        particle.x += particle.drift / 100;

        if (particle.y < -0.05) particle.y = 1.05;
        if (particle.x < -0.05) particle.x = 1.05;
        if (particle.x > 1.05) particle.x = -0.05;

        const x = particle.x * width;
        const y = particle.y * height;

        context.beginPath();
        context.arc(x, y, particle.radius * 2, 0, Math.PI * 2);
        context.fillStyle = `rgba(120, 150, 255, ${particle.alpha})`;
        context.fill();
      });

      animationFrame = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}
