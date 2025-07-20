"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCode, faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Transformations pour les animations au scroll
  const navbarBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(15, 23, 42, 0.1)", "rgba(15, 23, 42, 0.95)"]
  );
  
  const navbarBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  );
  
  const navbarScale = useTransform(
    scrollY,
    [0, 100],
    [1, 0.95]
  );
  
  const navbarY = useTransform(
    scrollY,
    [0, 100],
    [0, -10]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "/home", label: "Home", icon: faHome, color: "from-blue-500 to-blue-600" },
    { href: "/projects", label: "Projects", icon: faCode, color: "from-purple-500 to-purple-600" },
    { href: "/contact", label: "Contact", icon: faEnvelope, color: "from-green-500 to-green-600" },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 w-full px-2 py-2 sm:px-4 md:px-6 lg:px-8"
        style={{
          background: navbarBackground,
          backdropFilter: navbarBlur,
          scale: navbarScale,
          y: navbarY,
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      <div className="w-full">
        <div className="flex items-center justify-between w-full">
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4 flex-1 justify-center">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={item.href}
                    className={`relative flex items-center px-3 py-2 lg:px-4 rounded-xl transition-all duration-300 group ${
                      isActive 
                        ? `bg-gradient-to-r ${item.color} shadow-lg shadow-${item.color.split('-')[1]}-500/25` 
                        : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20'
                    }`}
                  >
                    {/* Background gradient for active state */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    {/* Icon */}
                    <div className={`flex items-center justify-center w-6 h-6 mr-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : 'bg-white/10 text-gray-300 group-hover:bg-white/20 group-hover:text-white'
                    }`}>
                      <FontAwesomeIcon className="text-sm" icon={item.icon} />
                    </div>
                    
                    {/* Label */}
                    <span className={`font-semibold text-sm transition-all duration-300 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {item.label}
                    </span>
                    
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon 
              className={`text-white text-lg transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
              icon={isMobileMenuOpen ? faTimes : faBars} 
            />
          </motion.button>

          {/* Decorative Elements */}
          <div className="hidden sm:flex items-center space-x-2">
            <motion.div
              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
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
              className="w-2 h-2 bg-gradient-to-r from-pink-400 to-red-500 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 1,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom border with gradient */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.nav>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMobileMenu}
          />
          
          {/* Menu Panel */}
          <motion.div
            className="fixed top-0 right-0 w-80 h-full bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-l border-white/10 z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 200 
            }}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Menu
              </h2>
              <motion.button
                onClick={closeMobileMenu}
                className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon className="text-white text-lg" icon={faTimes} />
              </motion.button>
            </div>

            {/* Menu Items */}
            <div className="p-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`relative flex items-center p-4 rounded-xl transition-all duration-300 group ${
                          isActive 
                            ? `bg-gradient-to-r ${item.color} shadow-lg` 
                            : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20'
                        }`}
                      >
                        {/* Background gradient for active state */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                        
                        {/* Icon */}
                        <div className={`flex items-center justify-center w-12 h-12 mr-4 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? 'bg-white/20 text-white' 
                            : 'bg-white/10 text-gray-300 group-hover:bg-white/20 group-hover:text-white'
                        }`}>
                          <FontAwesomeIcon className="text-lg" icon={item.icon} />
                        </div>
                        
                        {/* Label */}
                        <div className="flex-1">
                          <span className={`block font-semibold text-lg transition-all duration-300 ${
                            isActive 
                              ? 'text-white' 
                              : 'text-gray-300 group-hover:text-white'
                          }`}>
                            {item.label}
                          </span>
                          <span className={`block text-sm transition-all duration-300 ${
                            isActive 
                              ? 'text-white/70' 
                              : 'text-gray-400 group-hover:text-gray-300'
                          }`}>
                            {item.label === 'Home' && 'Accueil principal'}
                            {item.label === 'Projects' && 'Mes réalisations'}
                            {item.label === 'Contact' && 'Me contacter'}
                          </span>
                        </div>
                        
                        {/* Arrow */}
                        <motion.div
                          className="text-gray-400 group-hover:text-white transition-colors duration-300"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                        >
                          →
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Menu Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
              <div className="flex items-center justify-center space-x-3">
                <motion.div
                  className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="text-sm text-gray-400">
                  Navigation rapide
                </span>
                <motion.div
                  className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: 0.5,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
};

export default Navbar; 