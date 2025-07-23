"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

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

export default function HomeClient() {
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
      y: -2,
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
            <motion.div variants={itemVariants}>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed hover:text-white transition-colors duration-500 max-w-4xl">
                Welcome to my portfolio! I am passionate about web development and digital innovation. Explore my projects, skills, and creative journey.
              </p>
            </motion.div>

            {/* Call to Action Button */}
            <motion.div variants={buttonVariants} whileHover="hover">
              <Link
                href="/projects"
                className="inline-block px-8 py-4 mt-6 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-300"
              >
                View My Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </motion.main>
  );
} 