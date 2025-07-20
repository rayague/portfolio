"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useEffect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  faCoffee,
  faPhone,
  faEnvelope,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function Page() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  // Animation variants pour une meilleure cohérence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.main 
      className="flex flex-col min-h-screen font-sans bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Modern Navbar */}
      <Navbar />
      
      {/* Content with top padding for fixed navbar */}
      <div className="flex-1 w-full pt-20 sm:pt-24">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          {/* Hero Section */}
          <motion.div 
            className="flex flex-col w-full h-auto gap-8 my-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-400 hover:to-pink-400 transition-all duration-500">
                Accueil
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed hover:text-white transition-colors duration-500 max-w-4xl">
                Every project is a new adventure, a way to express my passion for
                creation. I invite you to explore my universe, where each piece
                tells a unique story.
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

          {/* Divider */}
          <motion.div 
            className="w-full h-px my-16 bg-gradient-to-r from-transparent via-gray-600 to-transparent"
            variants={itemVariants}
          ></motion.div>

          {/* Profile Section */}
          <motion.div 
            className="w-full mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/20 to-slate-800/20 border border-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 p-8 sm:p-10 lg:p-12">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 relative z-10">
                {/* Profile Image with enhanced styling */}
                <motion.div
                  variants={imageVariants}
                  className="relative group"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Image container */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl">
                    <Image
                      src="/profile.JPG"
                      width={450}
                      height={450}
                      alt="Picture of the author"
                      className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </motion.div>

                {/* Profile Text Content with improved layout */}
                <div className="flex flex-col justify-center items-start gap-6 lg:gap-8 max-w-2xl">
                  {/* Greeting */}
                  <motion.div 
                    variants={itemVariants}
                    className="relative"
                  >
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-400 font-light group-hover:text-gray-300 transition-colors duration-300">
                      Hello, I&apos;m
                    </span>
                  </motion.div>

                  {/* Name */}
                  <motion.div 
                    variants={itemVariants}
                    className="relative"
                  >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500">
                      Ray AGUE
                    </h1>
                    {/* Underline effect */}
                    <motion.div 
                      className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>

                  {/* Title/Role */}
                  <motion.div 
                    variants={itemVariants}
                    className="relative"
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                      Full Stack Developer & Creative Designer
                    </h2>
                  </motion.div>

                  {/* Description */}
                  <motion.div 
                    variants={itemVariants}
                    className="relative"
                  >
                    <p className="text-lg sm:text-xl text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                      Every journey begins with a single step, and I believe that
                      creativity is the driving force that transforms dreams into
                      reality. With each project, I strive to leave a mark, inspiring
                      others to embrace their passions and pursue their unique paths.
                    </p>
                  </motion.div>

                  {/* Call to action button */}
                  <motion.div 
                    variants={itemVariants}
                    className="pt-4"
                  >
                    <Link
                      href="/projects"
                      className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 group"
                    >
                      <span>View My Work</span>
                      <motion.svg 
                        className="w-5 h-5 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </motion.main>
  );
}
