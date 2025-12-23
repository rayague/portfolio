"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
// On retire l'import react-icons et on utilise des emojis à la place
const skills = [
  { name: "Laravel", icon: "🛠️" },
  { name: "Next.js", icon: "⚡" },
  { name: "React Native", icon: "📱" },
  // { name: "Node.js", icon: "🌳" },
  { name: "HTML5", icon: "🔤" },
  { name: "CSS3", icon: "🎨" },
  // { name: "JavaScript", icon: "✨" },
  // { name: "TypeScript", icon: "🔷" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Git", icon: "🔗" },
  { name: "Python", icon: "🐍" },
  // { name: "Maîtrise des logiciels de bureau", icon: "💻" },
  { name: "Prompt engineering", icon: "🤖" },
];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function SkillsPage() {
  return (
    <main className="flex flex-col min-h-screen font-sans bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Navbar */}
      <Navbar />
      {/* Content with top padding for fixed navbar */}
      <div className="flex-1 w-full pt-20 sm:pt-24 flex flex-col items-center justify-center mb-24">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          {/* Header harmonisé */}
          <motion.div className="flex flex-col w-full h-auto gap-8 my-16" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-400 hover:to-pink-400 transition-all duration-500">
                Skills
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed hover:text-white transition-colors duration-500 max-w-4xl">
                Every skill is an opportunity to grow, solve problems, and create value. I am passionate about mastering new technologies and using my expertise to deliver innovative and impactful solutions.
              </p>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div 
              className="flex items-center space-x-4 mt-8"
              variants={itemVariants}
            >
              <motion.div
                className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: 0.5,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="w-3 h-3 bg-gradient-to-r from-pink-400 to-red-500 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: 1,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full h-px my-16 bg-gradient-to-r from-transparent via-gray-600 to-transparent"
            variants={itemVariants}
          ></motion.div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full max-w-7xl mx-auto pb-24"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            {skills.map((skill, idx) => (
                <motion.div
                key={idx}
                className="flex flex-col items-center justify-center px-8 py-10 rounded-3xl bg-gradient-to-br from-blue-900/60 via-purple-900/60 to-pink-900/60 border border-white/10 shadow-2xl cursor-pointer select-none"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.08, rotate: 2, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.25)", background: "linear-gradient(135deg, #6366f1 0%, #a21caf 100%)" }}
                transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="mb-4 text-5xl drop-shadow-lg animate-bounce-slow">{skill.icon}</div>
                <span className="text-2xl font-bold text-white text-center tracking-wide drop-shadow-lg animate-fade-in">{skill.name}</span>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}
