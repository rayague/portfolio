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

const socialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.1, y: -5, transition: { duration: 0.2 } },
};

const socials = [
  { href: "https://www.facebook.com/profile.php?id=100084755843013", icon: faFacebook, color: "from-blue-600 to-blue-700" },
  { href: "https://www.instagram.com/rayague03", icon: faInstagram, color: "from-pink-600 to-purple-700" },
  { href: "https://www.linkedin.com/in/ray-ague-2066b4247", icon: faLinkedin, color: "from-blue-700 to-blue-800" },
  { href: "https://wa.me/33758279907", icon: faWhatsapp, color: "from-green-600 to-green-700" },
  { href: "https://github.com/rayague", icon: faGithub, color: "from-slate-700 to-slate-800" },
];

const Footer = () => {
  return (
    <footer className="w-full mt-auto relative z-10">
      <motion.div
        className="flex flex-row items-center justify-center w-full gap-4 p-4 sm:p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {socials.map((s) => (
          <motion.div key={s.href} variants={socialVariants} whileHover="hover">
            <Link
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${s.color} rounded-full hover:from-inherit hover:to-inherit transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center`}
            >
              <FontAwesomeIcon className="text-white text-sm sm:text-lg" icon={s.icon} />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="w-full px-4 py-4 sm:py-6 border-t border-slate-800/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-xs sm:text-sm text-center text-slate-400">
          &copy; copyright -{" "}
          <Link href="/" className="hover:text-slate-300 transition-colors duration-300">
            Ray AGUE
          </Link> All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
