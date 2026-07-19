"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAME = "RAY AGUE";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 14 + 4;
        return next >= 100 ? 100 : next;
      });
    }, 110);

    const timer = setTimeout(() => {
      setProgress(100);
      setIsLoading(false);
      document.documentElement.style.overflow = "";
    }, 2300);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  const letterVariants = {
    initial: { opacity: 0, y: 60, rotateX: -90 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: 0.15 + i * 0.06,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-950"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="flex items-center gap-1 sm:gap-2 mb-10 [perspective:600px]">
            {NAME.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="initial"
                animate="animate"
                className="font-display text-5xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
                style={{ display: "inline-block" }}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </div>

          <div className="w-56 h-[2px] bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 rounded-full origin-left"
              animate={{ scaleX: Math.min(progress, 100) / 100 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
          </div>

          <motion.p
            className="mt-6 font-mono text-sm text-slate-500 tabular-nums tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {Math.round(Math.min(progress, 100))}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
