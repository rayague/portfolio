"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setIsLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasVisited", "true");
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  const textVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
  };

  const letterVariants = {
    initial: { opacity: 0, y: 50, rotateX: -90 },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };

  const barVariants = {
    initial: { scaleX: 0 },
    animate: {
      scaleX: 1,
      transition: { duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-950"
          variants={containerVariants}
          initial="initial"
          exit="exit"
        >
          <motion.div
            className="flex items-center gap-2 mb-8"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            {"RAY AGUE".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className="text-5xl sm:text-7xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          <div className="w-48 h-[3px] bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full origin-left"
              variants={barVariants}
              initial="initial"
              animate="animate"
            />
          </div>

          <motion.p
            className="mt-6 text-sm text-slate-500 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
