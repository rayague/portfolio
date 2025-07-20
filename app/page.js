"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Composant de typing texte avec répétition infinie
const TypewriterText = ({ text, speed = 100, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length) {
      // Attendre un peu puis recommencer
      const resetTimeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
        setIsTyping(true);
      }, 2000);

      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, text, speed, isTyping]);

  return (
    <span className={className}>
      {displayText}
      {isTyping && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default function Home() {
  // Variants d'animation pour une meilleure cohérence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: -20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col min-h-screen font-sans bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
    >
      {/* Modern Navbar */}
      <Navbar />
      
      {/* Content with top padding for fixed navbar */}
      <div className="flex-1 w-full pt-20 sm:pt-24">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          {/* Hero Section */}
          <motion.div 
            className="flex flex-col items-center justify-center w-full gap-8 my-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Titre avec effet de typing */}
            <motion.div
              variants={titleVariants}
              className="relative"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-400 hover:to-pink-400 transition-all duration-500">
                <TypewriterText 
                  text="Portfolio" 
                  speed={150}
                  className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                />
              </h1>
              {/* Effet de glow subtil */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-30"></div>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="max-w-4xl"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed hover:text-white transition-colors duration-500">
                Explore my projects and journey. I&apos;m excited to share my
                work with you!
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

          {/* Separator */}
          <motion.div 
            className="w-full h-px my-16 bg-gradient-to-r from-transparent via-gray-600 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />

          {/* Navigation Cards */}
          <motion.div
            className="w-full pb-16 sm:pb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Home Card */}
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="h-full"
              >
                <Link href="/home" className="block h-full">
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/20 to-slate-800/20 border border-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 p-8 h-full flex flex-col justify-center">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 text-center">
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-400 transition-all duration-300 mb-4">
                        Accueil
                      </h2>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        Découvrez mon univers créatif et mon parcours professionnel
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Contact Card */}
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="h-full"
              >
                <Link href="/contact" className="block h-full">
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/20 to-slate-800/20 border border-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 p-8 h-full flex flex-col justify-center">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 text-center">
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent group-hover:from-green-300 group-hover:to-blue-400 transition-all duration-300 mb-4">
                        Contact
                      </h2>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        Entrons en contact et discutons de vos projets
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </motion.main>
  );
}
