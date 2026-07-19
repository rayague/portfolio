"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TextReveal from "./animations/TextReveal";
import MagneticButton from "./animations/MagneticButton";
import AnimatedGradient from "./animations/AnimatedGradient";
import ParallaxLayer from "./animations/ParallaxLayer";

const HeroScene = dynamic(() => import("./three/HeroScene"), { ssr: false });
const FloatingParticles = dynamic(() => import("./three/FloatingParticles"), { ssr: false });

export default function HomeClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
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

      <div className="flex-1 w-full pt-20 sm:pt-24 relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <HeroScene />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 z-[1]" />

          <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-center">
            <motion.div variants={fadeUp} className="mb-4">
              <span className="text-sm sm:text-base text-blue-400/80 tracking-[0.3em] uppercase font-medium">
                Full Stack Developer &bull; Corse
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-6">
              <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-black leading-none">
                <TextReveal
                  text="Ray AGUE"
                  speed={0.06}
                  className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                />
              </h1>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Créateur de solutions digitales innovantes,
                <br className="hidden sm:block" />
                basé à <span className="text-blue-400">Corte, Corse</span>
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <MagneticButton as="a" href="/projects" className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-shadow duration-300">
                <span className="relative z-10">Voir mes projets</span>
              </MagneticButton>
              <MagneticButton as="a" href="/contact" className="px-8 py-4 border border-slate-600/50 rounded-full text-slate-300 font-semibold hover:border-blue-500/50 hover:text-white transition-all duration-300">
                <span className="relative z-10">Me contacter</span>
              </MagneticButton>
            </motion.div>
          </div>
        </section>

        {/* Profile Section */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-white/5 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 p-8 sm:p-10 lg:p-12"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 relative z-10">
              <ParallaxLayer speed={0.05}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                    <Image
                      src="/profile.JPG"
                      width={400}
                      height={400}
                      alt="Ray AGUE - Développeur Web Full Stack"
                      className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-110"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              </ParallaxLayer>

              <div className="flex flex-col justify-center items-start gap-6 lg:gap-8 max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-3xl sm:text-4xl lg:text-5xl text-slate-400 font-light">
                    Hello, I&apos;m
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Ray AGUE
                  </h2>
                  <motion.div
                    className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-medium">
                    Full Stack Developer & Creative Designer
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                    Originaire du Bénin et basé à Corte (Haute-Corse), je suis un développeur
                    full stack passionné par la création de solutions digitales. Formé à
                    l&apos;Université Pasquale Paoli de Corse et ayant effectué un stage à
                    l&apos;Université Libre de Bolzano, je combine expertise technique et
                    sensibilité design pour donner vie à des projets innovants.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <MagneticButton as="a" href="/projects" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                    <span>Découvrir mes réalisations</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </MagneticButton>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </motion.main>
  );
}
