"use client";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hidden, setHidden] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { stiffness: 400, damping: 35, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 400, damping: 35, mass: 0.6 });

  useEffect(() => {
    // Only replace the cursor on devices with a precise pointer (mouse/trackpad).
    const fine = window.matchMedia("(pointer: fine)");
    if (!fine.matches) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const over = (e) => {
      const interactive = e.target.closest(
        "a, button, [role=button], input, textarea, select, [data-cursor=hover]"
      );
      setHovering(Boolean(interactive));
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <AnimatePresence>
      {!hidden && (
        <>
          {/* Core dot */}
          <motion.div
            key="cursor-dot"
            className="fixed top-0 left-0 pointer-events-none z-[99990]"
            style={{ x: mouseX, y: mouseY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="rounded-full bg-white"
              animate={{
                width: hovering ? 10 : 7,
                height: hovering ? 10 : 7,
                scale: pressed ? 0.7 : 1,
              }}
              transition={{ duration: 0.15 }}
              style={{
                translateX: "-50%",
                translateY: "-50%",
                boxShadow: "0 0 12px rgba(129,140,248,0.9)",
              }}
            />
          </motion.div>

          {/* Trailing ring */}
          <motion.div
            key="cursor-ring"
            className="fixed top-0 left-0 pointer-events-none z-[99989]"
            style={{ x: ringX, y: ringY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="rounded-full border"
              animate={{
                width: hovering ? 52 : 34,
                height: hovering ? 52 : 34,
                scale: pressed ? 0.85 : 1,
                borderColor: hovering
                  ? "rgba(129,140,248,0.9)"
                  : "rgba(148,163,184,0.55)",
                backgroundColor: hovering
                  ? "rgba(99,102,241,0.12)"
                  : "rgba(99,102,241,0)",
              }}
              transition={{ duration: 0.2 }}
              style={{ translateX: "-50%", translateY: "-50%" }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
