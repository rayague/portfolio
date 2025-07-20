"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
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
    <footer className="w-full mt-auto">
      {/* Social Media Links */}
      <motion.div 
        className="flex flex-row items-center justify-center w-full gap-4 p-4 sm:p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
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
      <motion.div 
        className="w-full px-4 py-4 sm:py-6 border-t border-gray-800/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-xs sm:text-sm text-center text-gray-400">
          © copyright -{" "}
          <Link 
            href="https://portfolio-cnkp.vercel.app" 
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Ray Ague
          </Link> All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer; 