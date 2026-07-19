"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faStar } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedGradient from "./animations/AnimatedGradient";
import TextReveal from "./animations/TextReveal";

// Deterministic gradient per project so tiles stay stable between renders.
const gradients = [
  "from-indigo-500 to-violet-600",
  "from-violet-500 to-fuchsia-600",
  "from-fuchsia-500 to-pink-600",
  "from-sky-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-red-600",
  "from-cyan-500 to-blue-600",
];

function hashCode(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function initialsOf(title) {
  const words = title.split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function ProjectCard({ project, index }) {
  const gradient = gradients[hashCode(project.id) % gradients.length];
  const href = project.homepage || project.html_url || "#";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.45, delay: (index % 12) * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative h-full"
    >
      <div className="flex flex-col h-full overflow-hidden rounded-2xl glass-card hover:border-indigo-500/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10">
        {/* Monogram header — initials instead of screenshots */}
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          <div className="relative h-36 flex items-center justify-center overflow-hidden">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-[0.16] group-hover:opacity-30 transition-opacity duration-500`}
            />
            <div
              className={`relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
            >
              <span className="font-display text-3xl font-bold text-white select-none">
                {initialsOf(project.title)}
              </span>
            </div>
          </div>
        </a>

        <div className="flex flex-col flex-1 p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h2 className="font-display text-lg font-bold text-white group-hover:gradient-text transition-all duration-300">
              {project.title}
            </h2>
            {project.language && (
              <span className="shrink-0 px-3 py-1 text-xs font-semibold bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
                {project.language}
              </span>
            )}
          </div>

          <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 flex-1">
            {project.description}
          </p>

          {project.topics?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.topics.slice(0, 3).map((topic) => (
                <span
                  key={topic}
                  className="px-2 py-0.5 text-[10px] font-mono text-slate-500 border border-white/10 rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/[0.06]">
            <div className="flex items-center gap-3">
              {project.html_url && (
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="text-slate-500 hover:text-white transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-lg" />
                </a>
              )}
              {project.homepage && (
                <a
                  href={project.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="text-slate-500 hover:text-indigo-400 transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base" />
                </a>
              )}
            </div>
            {project.stargazers_count > 0 && (
              <span className="flex items-center gap-1 text-xs text-slate-500">
                <FontAwesomeIcon icon={faStar} className="text-amber-400/80" />
                {project.stargazers_count}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsClient() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("/api/github/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.repos || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const languagesList = useMemo(() => {
    const counts = {};
    repos.forEach((r) => {
      if (r.language) counts[r.language] = (counts[r.language] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 7)
      .map(([lang]) => lang);
  }, [repos]);

  const visible = useMemo(
    () => (filter === "All" ? repos : repos.filter((r) => r.language === filter)),
    [repos, filter]
  );

  return (
    <main className="flex flex-col min-h-screen font-sans bg-slate-950">
      <AnimatedGradient />
      <Navbar />

      <div className="flex-1 w-full pt-24 sm:pt-28 relative z-10">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col w-full gap-6 my-12 sm:my-16">
            <span className="text-xs sm:text-sm font-mono text-indigo-400 tracking-[0.35em] uppercase">
              Open source &amp; client work
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold">
              <TextReveal text="Projects" speed={0.08} className="gradient-text" />
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl">
              Every public repository from my GitHub, plus client work shipped to
              production. Each project is an opportunity to explore, learn and
              build something meaningful.
            </p>
            {!loading && (
              <p className="font-mono text-sm text-slate-600">
                {repos.length} projects — {visible.length} shown
              </p>
            )}
          </div>

          {/* Language filter */}
          {!loading && languagesList.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12">
              {["All", ...languagesList].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setFilter(lang)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === lang
                      ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/25"
                      : "glass-card text-slate-400 hover:text-white hover:border-indigo-500/30"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}

          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
              <p className="font-mono text-sm text-slate-500">
                Fetching repositories…
              </p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 gap-6 pb-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {visible.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
