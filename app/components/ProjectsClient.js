"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AnimatedGradient from "./animations/AnimatedGradient";
import FloatingParticles from "./three/FloatingParticles";
import MagneticButton from "./animations/MagneticButton";
import TextReveal from "./animations/TextReveal";

export default function ProjectsClient() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.repos || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.main
      className="flex flex-col min-h-screen font-sans bg-slate-950"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <AnimatedGradient />
      <FloatingParticles />
      <Navbar />

      <div className="flex-1 w-full pt-20 sm:pt-24 relative z-10">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <motion.div className="flex flex-col w-full h-auto gap-8 my-16" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
                <TextReveal
                  text="Projects"
                  speed={0.08}
                  className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                />
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl">
                Every project is an opportunity to explore, innovate, and create
                something meaningful. I&apos;m passionate about bringing ideas to
                life and sharing my vision through unique and impactful work.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full h-px my-16 bg-gradient-to-r from-transparent via-slate-600 to-transparent"
            variants={itemVariants}
          />

          {loading ? (
            <div className="flex items-center justify-center py-32">
              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 gap-6 sm:gap-8 pb-16 sm:pb-20 md:pb-32 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
              variants={containerVariants}
            >
              {repos.map((project, index) => (
                <motion.div
                  key={project.id || index}
                  variants={{
                    hidden: { scale: 0.8, opacity: 0, y: 50 },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: index * 0.05, ease: "easeOut" },
                    },
                  }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  style={{ perspective: 1000 }}
                >
                  <motion.div
                    whileHover={{ rotateX: 5, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative group cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Link
                      href={project.homepage || project.html_url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-white/5 backdrop-blur-sm hover:from-slate-800/50 hover:to-slate-700/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {project.image ? (
                          <div className="relative overflow-hidden rounded-t-2xl">
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={400}
                              height={200}
                              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                        ) : (
                          <div className={`w-full h-48 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${
                            index % 5 === 0 ? "bg-gradient-to-br from-blue-600 to-purple-700" :
                            index % 5 === 1 ? "bg-gradient-to-br from-green-600 to-teal-700" :
                            index % 5 === 2 ? "bg-gradient-to-br from-orange-600 to-red-700" :
                            index % 5 === 3 ? "bg-gradient-to-br from-purple-600 to-pink-700" :
                            "bg-gradient-to-br from-cyan-600 to-blue-700"
                          }`}>
                            <span className="text-white text-xl font-bold text-center px-4">{project.title}</span>
                          </div>
                        )}

                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h2 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-400 transition-all duration-300">
                              {project.title}
                            </h2>
                            {project.language && (
                              <span className="px-3 py-1 text-xs font-semibold bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                                {project.language}
                              </span>
                            )}
                          </div>

                          <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm line-clamp-3">
                            {project.description}
                          </p>

                          <div className="flex items-center justify-between mt-4">
                            <span className="text-xs text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                              View project &rarr;
                            </span>
                            {project.stargazers_count > 0 && (
                              <span className="text-xs text-slate-500">
                                &#9733; {project.stargazers_count}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}

          <motion.section
            className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-slate-900/30 to-slate-800/30 border border-white/5 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl font-bold">&#128640;</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                My Journey and Continuous Growth
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
              Throughout my university studies, I focused primarily on web
              technologies, which led me to work on numerous projects. While I
              still don&apos;t consider myself an expert in web development, this
              journey has been an incredible learning experience. I&apos;m
              continuously developing personal projects that will soon be added to
              my portfolio as they are completed, all with the goal of improving
              my skills and expertise.
            </p>
          </motion.section>
        </div>
      </div>

      {/* Footer social */}
      <motion.div
        className="relative z-10 flex items-center justify-center gap-4 py-8"
        variants={itemVariants}
      >
        {[
          { href: "https://github.com/rayague", label: "GitHub", color: "from-slate-600 to-slate-700" },
          { href: "https://www.linkedin.com/in/ray-ague-2066b4247", label: "LinkedIn", color: "from-blue-600 to-blue-700" },
          { href: "https://wa.me/33758279907", label: "WhatsApp", color: "from-green-600 to-green-700" },
        ].map((s) => (
          <MagneticButton key={s.label} as="a" href={s.href} target="_blank" rel="noopener noreferrer">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${s.color} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}>
              <span className="text-white text-xs font-bold">{s.label[0]}</span>
            </div>
          </MagneticButton>
        ))}
      </motion.div>

      <motion.p
        className="relative z-10 pb-8 text-xs sm:text-sm text-center text-slate-400"
        variants={itemVariants}
      >
        &copy; copyright -{" "}
        <Link href="/" className="hover:text-slate-300 transition-colors duration-300">
          Ray AGUE
        </Link> All rights reserved.
      </motion.p>
    </motion.main>
  );
}
