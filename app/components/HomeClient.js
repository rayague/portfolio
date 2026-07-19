"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Typewriter from "./animations/Typewriter";
import MagneticButton from "./animations/MagneticButton";
import AnimatedGradient from "./animations/AnimatedGradient";
import {
  about,
  experience,
  education,
  languages,
  stats,
} from "@/data/site-config";

const HeroScene = dynamic(() => import("./three/HeroScene"), { ssr: false });
const FloatingParticles = dynamic(() => import("./three/FloatingParticles"), {
  ssr: false,
});

const marqueeTech = [
  "Next.js",
  "React",
  "Laravel",
  "React Native",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "PHP",
  "Node.js",
  "Firebase",
  "Three.js",
  "MySQL",
  "Git",
  "Python",
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const start = performance.now();
    const duration = 1400;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function SectionTitle({ kicker, title }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={sectionReveal}
      className="mb-12 sm:mb-16"
    >
      <span className="text-xs sm:text-sm font-mono text-indigo-400 tracking-[0.35em] uppercase">
        {kicker}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 gradient-text">
        {title}
      </h2>
    </motion.div>
  );
}

export default function HomeClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col min-h-screen font-sans bg-slate-950"
    >
      <AnimatedGradient />
      <FloatingParticles />
      <Navbar />

      <div className="flex-1 w-full relative z-10">
        {/* ================= HERO ================= */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <HeroScene />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 z-[1]" />

          <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 text-center">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs sm:text-sm text-slate-300 tracking-[0.25em] uppercase font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Software Engineer &bull; Full Stack Developer
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-8">
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold leading-none min-h-[1.15em]">
                <Typewriter
                  words={["Ray AGUE"]}
                  typingSpeed={140}
                  deletingSpeed={70}
                  pauseTime={2400}
                  className="gradient-text"
                />
              </h1>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed text-balance">
                I craft reliable, modern digital experiences —
                <br className="hidden sm:block" /> educated in{" "}
                <span className="text-indigo-400 font-medium">France</span>,
                building for the world.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <MagneticButton
                as="a"
                href="/projects"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 rounded-full text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/40 transition-shadow duration-300"
              >
                <span className="relative z-10">View my work</span>
              </MagneticButton>
              <MagneticButton
                as="a"
                href="/contact"
                className="px-8 py-4 glass-card rounded-full text-slate-300 font-semibold hover:border-indigo-500/50 hover:text-white transition-all duration-300"
              >
                <span className="relative z-10">Get in touch</span>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <span className="text-[10px] font-mono text-slate-500 tracking-[0.3em] uppercase">
              Scroll
            </span>
            <motion.div
              className="w-[1px] h-10 bg-gradient-to-b from-indigo-400 to-transparent"
              animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </section>

        {/* ================= TECH MARQUEE ================= */}
        <section className="relative py-10 border-y border-white/[0.05] overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee w-max">
            {[...marqueeTech, ...marqueeTech].map((tech, i) => (
              <span
                key={i}
                className="mx-8 font-display text-xl sm:text-2xl font-semibold text-slate-700 hover:text-indigo-400 transition-colors duration-300 select-none"
              >
                {tech}
                <span className="mx-8 text-indigo-500/40">&#10022;</span>
              </span>
            ))}
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-24 sm:py-32">
          <SectionTitle kicker="About me" title="Engineer by training, builder at heart" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={sectionReveal}
            className="group relative overflow-hidden rounded-3xl glass-card shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 p-8 sm:p-10 lg:p-14"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative shrink-0 w-64 sm:w-80"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 to-fuchsia-500/30 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                  <Image
                    src="/profile.JPG"
                    width={400}
                    height={400}
                    alt="Ray AGUE — Software Engineer & Full Stack Developer"
                    className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
              </motion.div>

              <div className="flex flex-col gap-6 max-w-2xl">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Hello, I&apos;m Ray —{" "}
                  <span className="gradient-text">nice to meet you.</span>
                </h3>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  {about.short}
                </p>
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                  {about.long}
                </p>

                <div className="flex flex-wrap gap-3 mt-2">
                  {languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="px-4 py-2 rounded-full glass-card text-sm text-slate-300"
                    >
                      <span className="text-white font-medium">{lang.name}</span>
                      <span className="text-slate-500"> · {lang.level}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={sectionReveal}
                whileHover={{ y: -6 }}
                className="rounded-2xl glass-card p-6 sm:p-8 text-center shadow-lg hover:shadow-indigo-500/10 transition-shadow duration-300"
              >
                <div className="font-display text-4xl sm:text-5xl font-bold gradient-text">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-24 sm:py-32">
          <SectionTitle kicker="Career" title="Work experience" />

          <div className="relative max-w-4xl">
            <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-indigo-500/60 via-violet-500/40 to-transparent" />

            <div className="flex flex-col gap-10">
              {experience.map((job, i) => (
                <motion.article
                  key={`${job.company}-${job.period}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pl-10 sm:pl-14"
                >
                  <span className="absolute left-0 top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-indigo-400 bg-slate-950 shadow-[0_0_12px_rgba(129,140,248,0.6)]" />

                  <div className="group rounded-2xl glass-card p-6 sm:p-8 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                        {job.role}
                      </h3>
                      <span className="font-mono text-xs sm:text-sm text-indigo-400">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-400 mb-4">
                      {job.company} &middot;{" "}
                      <span className="text-slate-500">{job.type}</span>
                    </p>
                    <ul className="flex flex-col gap-2 mb-4">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="text-sm sm:text-base text-slate-300 leading-relaxed flex gap-3"
                        >
                          <span className="text-indigo-400 mt-[2px]">&#8227;</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-24 sm:py-32">
          <SectionTitle kicker="Education" title="Academic journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((ed, i) => (
              <motion.div
                key={ed.school}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl glass-card p-8 shadow-lg hover:shadow-violet-500/10 hover:border-violet-500/30 transition-all duration-300"
              >
                <span className="font-mono text-xs text-violet-400 tracking-widest uppercase">
                  {ed.period} &middot; {ed.location}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-3">
                  {ed.degree}
                </h3>
                <p className="text-slate-400 mt-2">{ed.school}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-24 sm:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={sectionReveal}
            className="relative overflow-hidden rounded-3xl glass-card p-10 sm:p-16 text-center shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-fuchsia-500/10" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance">
                Have a project in mind?{" "}
                <span className="gradient-text">Let&apos;s build it together.</span>
              </h2>
              <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                I&apos;m open to freelance work, collaborations and new
                opportunities. Let&apos;s talk about your idea.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton
                  as="a"
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 rounded-full text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/40 transition-shadow duration-300"
                >
                  <span className="relative z-10">Contact me</span>
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="https://github.com/rayague"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 glass-card rounded-full text-slate-300 font-semibold hover:border-indigo-500/50 hover:text-white transition-all duration-300"
                >
                  <span className="relative z-10">GitHub profile</span>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </motion.main>
  );
}
