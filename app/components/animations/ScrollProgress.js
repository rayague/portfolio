"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9997] origin-left bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      style={{ scaleX }}
    />
  );
}
