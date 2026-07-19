"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faLayerGroup,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import ScrollProgress from "./animations/ScrollProgress";

const navItems = [
  { href: "/", label: "Home", icon: faHome },
  { href: "/projects", label: "Projects", icon: faCode },
  { href: "/skills", label: "Skills", icon: faLayerGroup },
  { href: "/contact", label: "Contact", icon: faEnvelope },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const navbarBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(2, 6, 23, 0)", "rgba(2, 6, 23, 0.9)"]
  );
  const navbarBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(16px)"]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <ScrollProgress />
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-10 py-3"
        style={{ background: navbarBackground, backdropFilter: navbarBlur }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-1 select-none">
            <span className="font-display text-2xl font-bold gradient-text">
              RA
            </span>
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400 group-hover:scale-125 transition-transform duration-300" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/25"
                        : "text-slate-300 hover:text-white glass-card hover:border-indigo-500/30"
                    }`}
                  >
                    <FontAwesomeIcon className="text-xs" icon={item.icon} />
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 glass-card rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon
              className={`text-white text-lg transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-90" : ""
              }`}
              icon={isMobileMenuOpen ? faTimes : faBars}
            />
          </motion.button>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
            />
            <motion.div
              className="fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-slate-950/95 backdrop-blur-xl border-l border-white/10 z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="font-display text-xl font-bold gradient-text">
                  Menu
                </span>
                <motion.button
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center w-10 h-10 glass-card rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close menu"
                >
                  <FontAwesomeIcon className="text-white text-lg" icon={faTimes} />
                </motion.button>
              </div>

              <div className="flex flex-col gap-3 p-6">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg"
                            : "glass-card text-slate-300 hover:text-white"
                        }`}
                      >
                        <FontAwesomeIcon className="text-lg" icon={item.icon} />
                        <span className="font-semibold text-lg">{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 text-center">
                <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">
                  Ray AGUE — Portfolio
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
