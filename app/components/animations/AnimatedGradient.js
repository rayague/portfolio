"use client";
import { useEffect, useRef } from "react";

export default function AnimatedGradient() {
  const ref = useRef(null);

  useEffect(() => {
    const colors = [
      "rgba(59,130,246,0.03)",
      "rgba(139,92,246,0.03)",
      "rgba(236,72,153,0.03)",
      "rgba(59,130,246,0.02)",
    ];
    let frame;
    let start = Date.now();

    const animate = () => {
      if (!ref.current) return;
      const elapsed = (Date.now() - start) / 1000;
      const i1 = Math.floor(elapsed * 0.1) % colors.length;
      const i2 = (i1 + 1) % colors.length;
      const t = (elapsed * 0.1) % 1;
      const x = 50 + 40 * Math.sin(elapsed * 0.15);
      const y = 50 + 40 * Math.cos(elapsed * 0.12);
      ref.current.style.background = `
        radial-gradient(circle at ${x}% ${y}%, ${colors[i1]} 0%, transparent 50%),
        radial-gradient(circle at ${100 - x}% ${100 - y}%, ${colors[i2]} 0%, transparent 50%)
      `;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
