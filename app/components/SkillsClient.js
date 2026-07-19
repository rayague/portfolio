"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import AnimatedGradient from "../components/animations/AnimatedGradient";
import TextReveal from "../components/animations/TextReveal";

const skills = [
  { name: "Laravel", icon: "🛠️", category: "Backend" },
  { name: "Next.js", icon: "⚡", category: "Frontend" },
  { name: "React Native", icon: "📱", category: "Mobile" },
  { name: "Node.js", icon: "🌳", category: "Backend" },
  { name: "HTML5", icon: "🔤", category: "Frontend" },
  { name: "CSS3", icon: "🎨", category: "Frontend" },
  { name: "JavaScript", icon: "✨", category: "Langage" },
  { name: "TypeScript", icon: "🔷", category: "Langage" },
  { name: "Tailwind CSS", icon: "💨", category: "Frontend" },
  { name: "Git", icon: "🔗", category: "Outil" },
  { name: "Python", icon: "🐍", category: "Langage" },
  { name: "Prompt Engineering", icon: "🤖", category: "AI" },
  { name: "Three.js", icon: "🔄", category: "3D" },
  { name: "Firebase", icon: "🔥", category: "Backend" },
  { name: "PHP", icon: "🐘", category: "Backend" },
  { name: "React", icon: "⚛️", category: "Frontend" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
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
      <div className="flex-1 w-full pt-20 sm:pt-24 flex flex-col items-center mb-24 relative z-10">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <motion.div
            className="flex flex-col w-full h-auto gap-8 my-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
                <TextReveal
                  text="Skills"
                  speed={0.08}
                  className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                />
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl">
                Every skill is an opportunity to grow, solve problems, and create value.
                I am passionate about mastering new technologies and using my expertise
                to deliver innovative and impactful solutions.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full h-px my-16 bg-gradient-to-r from-transparent via-slate-600 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full max-w-7xl mx-auto pb-24"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center justify-center px-4 py-8 rounded-2xl bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30 border border-white/5 shadow-xl cursor-pointer select-none backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  boxShadow: "0 8px 32px 0 rgba(99,102,241,0.3)",
                  background: "linear-gradient(135deg, rgba(99,102,241,0.4), rgba(168,85,247,0.4))",
                }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="mb-3 text-4xl"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2, ease: "easeInOut" }}
                >
                  {skill.icon}
                </motion.div>
                <span className="text-sm font-semibold text-white text-center tracking-wide">
                  {skill.name}
                </span>
                <span className="text-xs text-slate-400 mt-1">{skill.category}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
