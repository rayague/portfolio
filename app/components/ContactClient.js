"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedGradient from "./animations/AnimatedGradient";
import TextReveal from "./animations/TextReveal";
import { siteConfig, education } from "@/data/site-config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const channels = [
  {
    label: "Email",
    value: siteConfig.email,
    hint: "Best for detailed project briefs",
    icon: faEnvelope,
    accent: "from-violet-500 to-fuchsia-600",
    glow: "hover:shadow-violet-500/20",
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "WhatsApp",
    value: siteConfig.phone,
    hint: "Fastest way to reach me",
    icon: faWhatsapp,
    accent: "from-emerald-500 to-teal-600",
    glow: "hover:shadow-emerald-500/20",
    href: siteConfig.social.whatsapp,
  },
  {
    label: "LinkedIn",
    value: "Ray AGUE",
    hint: "Let's connect professionally",
    icon: faLinkedin,
    accent: "from-sky-500 to-blue-600",
    glow: "hover:shadow-sky-500/20",
    href: siteConfig.social.linkedin,
  },
  {
    label: "GitHub",
    value: "@rayague",
    hint: "Browse my open-source work",
    icon: faGithub,
    accent: "from-slate-500 to-slate-700",
    glow: "hover:shadow-slate-500/20",
    href: siteConfig.social.github,
  },
];

export default function ContactClient() {
  return (
    <motion.main
      className="flex flex-col min-h-screen font-sans bg-slate-950"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <AnimatedGradient />
      <Navbar />

      <div className="flex-1 w-full pt-24 sm:pt-28 relative z-10">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div className="flex flex-col w-full gap-6 my-12 sm:my-16" variants={itemVariants}>
            <span className="text-xs sm:text-sm font-mono text-indigo-400 tracking-[0.35em] uppercase">
              Let&apos;s talk
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold">
              <TextReveal text="Contact" speed={0.08} className="gradient-text" />
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl">
              Want to collaborate on a project, or simply say hello? I&apos;m
              always open to new opportunities and inspiring conversations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10">
            {channels.map((c) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`group flex items-center gap-5 rounded-2xl glass-card p-7 sm:p-8 shadow-xl hover:shadow-2xl ${c.glow} hover:border-white/[0.12] transition-all duration-400`}
              >
                <div
                  className={`flex items-center justify-center w-14 h-14 shrink-0 bg-gradient-to-br ${c.accent} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                >
                  <FontAwesomeIcon className="text-white text-xl" icon={c.icon} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-slate-500 font-medium">{c.label}</p>
                  <p className="text-lg font-semibold text-white truncate group-hover:gradient-text transition-all duration-300">
                    {c.value}
                  </p>
                  <p className="text-sm text-slate-500">{c.hint}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Education recap */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl glass-card p-8 sm:p-10 shadow-xl mb-24"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl shadow-lg">
                <FontAwesomeIcon className="text-white text-lg" icon={faGraduationCap} />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold gradient-text">
                Education
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {education.map((ed) => (
                <div key={ed.school} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400 shrink-0" />
                  <div>
                    <p className="text-white font-medium">{ed.degree}</p>
                    <p className="text-sm text-slate-400">
                      {ed.school} &middot; {ed.location} &middot; {ed.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </motion.main>
  );
}
