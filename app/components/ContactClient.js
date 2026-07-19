"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AnimatedGradient from "./animations/AnimatedGradient";
import FloatingParticles from "./three/FloatingParticles";
import MagneticButton from "./animations/MagneticButton";
import TextReveal from "./animations/TextReveal";

import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactClient() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
    hover: { y: -8, scale: 1.02, transition: { duration: 0.3 } },
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.1, y: -5, transition: { duration: 0.2 } },
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/33758279907", "_blank", "noopener,noreferrer");
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
          <motion.div className="flex flex-col w-full h-auto gap-6 my-11" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black">
                <TextReveal
                  text="Contact"
                  speed={0.08}
                  className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                />
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
                Envie de collaborer sur un projet ou simplement d&apos;échanger ?
                N&apos;hésitez pas à me contacter. Je suis toujours ouvert aux nouvelles
                opportunités et aux conversations inspirantes.
              </p>
            </motion.div>
          </motion.div>

          <motion.div className="w-full h-px my-16 bg-gradient-to-r from-transparent via-slate-600 to-transparent" variants={itemVariants} />

          <motion.div variants={itemVariants}>
            <div className="w-full flex flex-col items-center justify-center gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24 text-white">
              <motion.div
                className="flex items-center justify-center w-full border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md bg-gradient-to-br from-blue-900/20 to-purple-900/20 hover:from-blue-800/30 hover:to-purple-800/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
                onClick={() => window.open("https://www.google.com/maps/place/Corte,+France", "_blank")}
              >
                <div className="flex items-center w-full group">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 group-hover:from-blue-400 group-hover:to-blue-500 transition-all duration-300">
                    <FontAwesomeIcon className="text-white text-lg" icon={faMapMarkerAlt} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-400 font-medium">Localisation</p>
                    <p className="text-lg font-semibold group-hover:text-blue-300 transition-colors duration-300">
                      Corte (20250), Haute-Corse, France
                    </p>
                    <p className="text-sm text-slate-500">Originaire d&apos;Abomey-Calavi, Bénin</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center justify-center w-full border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md bg-gradient-to-br from-green-900/20 to-emerald-900/20 hover:from-green-800/30 hover:to-emerald-800/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
                onClick={handleWhatsApp}
              >
                <div className="flex items-center w-full group">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-4 group-hover:from-green-400 group-hover:to-emerald-500 transition-all duration-300">
                    <FontAwesomeIcon className="text-white text-lg" icon={faPhone} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-400 font-medium">Téléphone / WhatsApp</p>
                    <p className="text-lg font-semibold group-hover:text-green-300 transition-colors duration-300">
                      +33 7 58 27 99 07
                    </p>
                    <p className="text-sm text-slate-500">Cliquez pour me contacter sur WhatsApp</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center justify-center w-full border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-pink-900/20 hover:from-purple-800/30 hover:to-pink-800/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
                onClick={() => window.open("mailto:rayague03@gmail.com", "_blank")}
              >
                <div className="flex items-center w-full group">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-4 group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
                    <FontAwesomeIcon className="text-white text-lg" icon={faEnvelope} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-400 font-medium">Email</p>
                    <p className="text-lg font-semibold group-hover:text-purple-300 transition-colors duration-300">
                      rayague03@gmail.com
                    </p>
                    <p className="text-sm text-slate-500">Cliquez pour m&apos;écrire</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center justify-center w-full border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md bg-gradient-to-br from-orange-900/20 to-yellow-900/20 hover:from-orange-800/30 hover:to-yellow-800/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
                onClick={() => window.open("https://wa.me/33758279907", "_blank")}
              >
                <div className="flex items-center w-full group">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full mr-4 group-hover:from-orange-400 group-hover:to-yellow-500 transition-all duration-300">
                    <FontAwesomeIcon className="text-white text-lg" icon={faWhatsapp} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-400 font-medium">WhatsApp Direct</p>
                    <p className="text-lg font-semibold group-hover:text-orange-300 transition-colors duration-300">
                      Envoyer un message
                    </p>
                    <p className="text-sm text-slate-500">Réponse rapide garantie</p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="w-full p-6 rounded-2xl bg-gradient-to-br from-slate-900/30 to-slate-800/30 border border-slate-600/30 backdrop-blur-md shadow-xl">
                <h3 className="text-xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Formations
                </h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-slate-300">Université Pasquale Paoli, Corse</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-slate-300">Université Libre de Bolzano (stage)</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Footer */}
      <motion.div
        className="relative z-10 flex items-center justify-center gap-4 py-8"
        variants={itemVariants}
      >
        {[
          { href: "https://www.facebook.com/profile.php?id=100084755843013", icon: faFacebook, color: "from-blue-600 to-blue-700" },
          { href: "https://www.instagram.com/rayague03", icon: faInstagram, color: "from-pink-600 to-purple-700" },
          { href: "https://www.linkedin.com/in/ray-ague-2066b4247", icon: faLinkedin, color: "from-blue-700 to-blue-800" },
          { href: "https://wa.me/33758279907", icon: faWhatsapp, color: "from-green-600 to-green-700" },
          { href: "https://github.com/rayague", icon: faGithub, color: "from-slate-700 to-slate-800" },
        ].map((s) => (
          <motion.div key={s.href} variants={socialVariants} whileHover="hover">
            <Link
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${s.color} rounded-full hover:from-inherit hover:to-inherit transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center`}
            >
              <FontAwesomeIcon className="text-white text-lg" icon={s.icon} />
            </Link>
          </motion.div>
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
