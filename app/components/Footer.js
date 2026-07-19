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
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { siteConfig } from "@/data/site-config";

const socials = [
  { href: siteConfig.social.github, icon: faGithub, label: "GitHub" },
  { href: siteConfig.social.linkedin, icon: faLinkedin, label: "LinkedIn" },
  { href: siteConfig.social.whatsapp, icon: faWhatsapp, label: "WhatsApp" },
  { href: siteConfig.social.instagram, icon: faInstagram, label: "Instagram" },
  { href: siteConfig.social.facebook, icon: faFacebook, label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="w-full mt-auto relative z-10 border-t border-white/[0.05]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link href="/" className="font-display text-xl font-bold gradient-text">
          Ray AGUE
        </Link>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ y: -4, scale: 1.08 }}
              className="flex items-center justify-center w-10 h-10 glass-card rounded-full text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors duration-300"
            >
              <FontAwesomeIcon className="text-sm" icon={s.icon} />
            </motion.a>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-slate-500 text-center">
          &copy; {new Date().getFullYear()} Ray AGUE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
