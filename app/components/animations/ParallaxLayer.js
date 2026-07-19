"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ParallaxLayer({ children, speed = 0.1, className = "" }) {
  const ref = useRef(null);
  const [offsetY, setOffsetY] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const windowCenter = window.innerHeight / 2;
        setOffsetY((centerY - windowCenter) * speed);
      }
    };

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x * 10);
      mouseY.set(y * 10);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [speed, mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y: springY,
        x: springX,
        transform: `translateY(${offsetY}px)`,
      }}
    >
      {children}
    </motion.div>
  );
}
