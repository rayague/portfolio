"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiLaravel,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiPython,
  SiThreedotjs,
  SiFirebase,
  SiPhp,
  SiMysql,
  SiBootstrap,
  SiLinux,
  SiOpenai,
} from "react-icons/si";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedGradient from "./animations/AnimatedGradient";
import TextReveal from "./animations/TextReveal";

const skills = [
  { name: "Laravel", icon: SiLaravel, category: "Backend", color: "#FF2D20" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend", color: "#ffffff" },
  { name: "React", icon: SiReact, category: "Frontend", color: "#61DAFB" },
  { name: "React Native", icon: SiReact, category: "Mobile", color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend", color: "#5FA04E" },
  { name: "JavaScript", icon: SiJavascript, category: "Language", color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, category: "Language", color: "#3178C6" },
  { name: "PHP", icon: SiPhp, category: "Language", color: "#777BB4" },
  { name: "Python", icon: SiPython, category: "Language", color: "#3776AB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend", color: "#06B6D4" },
  { name: "Bootstrap", icon: SiBootstrap, category: "Frontend", color: "#7952B3" },
  { name: "HTML5", icon: SiHtml5, category: "Frontend", color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, category: "Frontend", color: "#663399" },
  { name: "Three.js", icon: SiThreedotjs, category: "3D", color: "#ffffff" },
  { name: "Firebase", icon: SiFirebase, category: "Backend", color: "#DD2C00" },
  { name: "MySQL", icon: SiMysql, category: "Database", color: "#4479A1" },
  { name: "Git", icon: SiGit, category: "Tooling", color: "#F05032" },
  { name: "Linux", icon: SiLinux, category: "OS", color: "#FCC624" },
  { name: "Prompt Engineering", icon: SiOpenai, category: "AI", color: "#74AA9C" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsClient() {
  return (
    <main className="flex flex-col min-h-screen font-sans bg-slate-950">
      <AnimatedGradient />
      <Navbar />
      <div className="flex-1 w-full pt-24 sm:pt-28 relative z-10">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            className="flex flex-col w-full gap-6 my-12 sm:my-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.span
              variants={itemVariants}
              className="text-xs sm:text-sm font-mono text-indigo-400 tracking-[0.35em] uppercase"
            >
              What I work with
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold"
            >
              <TextReveal text="Skills" speed={0.08} className="gradient-text" />
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl"
            >
              Every skill is an opportunity to grow, solve problems and create
              value. These are the languages, frameworks and tools I use to
              deliver reliable, modern solutions.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full pb-24"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="group flex flex-col items-center justify-center px-4 py-8 rounded-2xl glass-card shadow-lg select-none"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.06,
                    y: -8,
                    boxShadow: "0 12px 40px 0 rgba(99,102,241,0.25)",
                  }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 220 }}
                >
                  <Icon
                    className="mb-4 text-4xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    style={{ color: skill.color }}
                  />
                  <span className="text-sm font-semibold text-white text-center tracking-wide">
                    {skill.name}
                  </span>
                  <span className="text-xs text-slate-500 mt-1">
                    {skill.category}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
