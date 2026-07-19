"use client";
import { useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorRingRef = useRef(null);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 15 });
  const isHoveringRef = useRef(false);
  const isVisible = useRef(true);

  const handleMouseMove = useCallback((e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    isVisible.current = false;
    if (cursorRef.current) cursorRef.current.style.opacity = "0";
    if (cursorRingRef.current) cursorRingRef.current.style.opacity = "0";
  }, []);

  const handleMouseEnter = useCallback(() => {
    isVisible.current = true;
    if (cursorRef.current) cursorRef.current.style.opacity = "1";
    if (cursorRingRef.current) cursorRingRef.current.style.opacity = "1";
  }, []);

  useEffect(() => {
    document.body.style.cursor = "none";

    const handleHoverStart = (e) => {
      if (e.target.closest("a, button, [role=button], input, textarea, select")) {
        isHoveringRef.current = true;
        if (cursorRingRef.current) {
          cursorRingRef.current.style.width = "48px";
          cursorRingRef.current.style.height = "48px";
          cursorRingRef.current.style.borderColor = "rgba(99, 102, 241, 0.6)";
          cursorRingRef.current.style.backgroundColor = "rgba(99, 102, 241, 0.1)";
        }
      }
    };

    const handleHoverEnd = () => {
      isHoveringRef.current = false;
      if (cursorRingRef.current) {
        cursorRingRef.current.style.width = "32px";
        cursorRingRef.current.style.height = "32px";
        cursorRingRef.current.style.borderColor = "rgba(148, 163, 184, 0.5)";
        cursorRingRef.current.style.backgroundColor = "transparent";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ boxShadow: "0 0 8px rgba(99,102,241,0.6)" }}
      />
      <motion.div
        ref={cursorRingRef}
        className="fixed pointer-events-none z-[9998] w-8 h-8 border border-slate-400/50 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ left: ringX, top: ringY, transition: "width 0.2s, height 0.2s, border-color 0.2s, background-color 0.2s" }}
      />
    </>
  );
}
