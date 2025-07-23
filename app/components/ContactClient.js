"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter, useEffect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

import {
  faCoffee,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faUser,
  faMessage
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function ContactClient() {
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

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3
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
      className="flex flex-col items-center min-h-screen font-sans bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Modern Navbar */}
      <Navbar />
      {/* Content with top padding for fixed navbar */}
      <div className="w-full pt-20 sm:pt-24">

      {/* Main Content Container */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Hero Section */}
        <motion.div className="flex flex-col w-full h-auto gap-6 my-11" variants={itemVariants}>
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-400 hover:to-pink-400 transition-all duration-500">
              Contact
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed hover:text-white transition-colors duration-500 max-w-3xl">
              Connecting with others is the first step towards collaboration and
              growth. I&apos;m always open to new opportunities, ideas, and
              conversations that inspire creativity and innovation.
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

        {/* Contact Information Cards */}
        <motion.div variants={itemVariants}>
          <div className="w-full flex flex-col items-center justify-center gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24 text-white">
            {/* Location Card */}
            <motion.div 
              className="flex items-center justify-center w-full border border-gray-600/30 rounded-2xl p-8 backdrop-blur-md bg-gradient-to-br from-blue-900/20 to-purple-900/20 hover:from-blue-800/30 hover:to-purple-800/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20"
              variants={cardVariants}
              whileHover="hover"
            >
              <Link
                href="https://www.google.com/maps/place/Abomey-Calavi,+Benin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full group"
              >
                              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3 sm:mr-4 group-hover:from-blue-400 group-hover:to-blue-500 transition-all duration-300">
                <FontAwesomeIcon className="text-white text-sm sm:text-lg" icon={faMapMarkerAlt} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-400 font-medium">Location</p>
                <p className="text-sm sm:text-lg font-semibold group-hover:text-blue-300 transition-colors duration-300 truncate">
                  Abomey-Calavi, Bénin
                </p>
              </div>
              </Link>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              className="flex items-center justify-center w-full border border-gray-600/30 rounded-2xl p-8 backdrop-blur-md bg-gradient-to-br from-green-900/20 to-emerald-900/20 hover:from-green-800/30 hover:to-emerald-800/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-green-500/20"
              variants={cardVariants}
              whileHover="hover"
            >
              <Link
                href="https://wa.me/22960932967"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full group"
              >
                              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-3 sm:mr-4 group-hover:from-green-400 group-hover:to-emerald-500 transition-all duration-300">
                <FontAwesomeIcon className="text-white text-sm sm:text-lg" icon={faPhone} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-400 font-medium">Phone</p>
                <p className="text-sm sm:text-lg font-semibold group-hover:text-green-300 transition-colors duration-300 truncate">
                  +229 60 93 29 67
                </p>
              </div>
              </Link>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              className="flex items-center justify-center w-full border border-gray-600/30 rounded-2xl p-8 backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-pink-900/20 hover:from-purple-800/30 hover:to-pink-800/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
              variants={cardVariants}
              whileHover="hover"
            >
              <Link
                href="mailto:rayague03@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full group"
              >
                              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-3 sm:mr-4 group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
                <FontAwesomeIcon className="text-white text-sm sm:text-lg" icon={faEnvelope} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-400 font-medium">Email</p>
                <p className="text-sm sm:text-lg font-semibold group-hover:text-purple-300 transition-colors duration-300 truncate">
                  rayague03@gmail.com
                </p>
              </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Social Media Footer */}
      <motion.div 
        className="relative bottom-0 flex flex-row items-center justify-center w-full h-auto gap-3 sm:gap-4 p-4 sm:p-6"
        variants={itemVariants}
      >
        <motion.div
          variants={socialVariants}
          whileHover="hover"
        >
          <Link
            href="https://www.facebook.com/profile.php?id=100084755843013"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FontAwesomeIcon className="text-white text-sm sm:text-lg" icon={faFacebook} />
          </Link>
        </motion.div>
        
        <motion.div
          variants={socialVariants}
          whileHover="hover"
        >
          <Link
            href="https://www.instagram.com/rayague03?igsh=MTg3eWNnN2hzdnI0Zg=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full hover:from-pink-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FontAwesomeIcon className="text-white text-sm sm:text-lg" icon={faInstagram} />
          </Link>
        </motion.div>
        
        <motion.div
          variants={socialVariants}
          whileHover="hover"
        >
          <Link
            href="https://www.linkedin.com/in/ray-ague-2066b4247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FontAwesomeIcon className="text-white text-sm sm:text-lg" icon={faLinkedin} />
          </Link>
        </motion.div>
        
        <motion.div
          variants={socialVariants}
          whileHover="hover"
        >
          <Link
            href="https://wa.me/22960932967"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full hover:from-green-500 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FontAwesomeIcon className="text-white text-sm sm:text-lg" icon={faWhatsapp} />
          </Link>
        </motion.div>
        
        <motion.div
          variants={socialVariants}
          whileHover="hover"
        >
          <Link
            href="https://github.com/rayague"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FontAwesomeIcon className="text-white text-sm sm:text-lg" icon={faGithub} />
          </Link>
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <motion.p 
        className="mt-4 mb-8 text-xs sm:text-sm text-center text-gray-400"
        variants={itemVariants}
      >
        © copyright -{" "}
        <Link href="https://portfolio-cnkp.vercel.app" className="hover:text-gray-300 transition-colors duration-300">
          Ray Ague
        </Link> All rights reserved.
      </motion.p>
      </div>
    </motion.main>
  );
} 