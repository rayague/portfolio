"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faGithub,
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

  const projects = [
    {
      id: 1,
      title: "MES-FACTURES",
      date: "Jul. 2025",
      content: "Client portal developed in Laravel with secure authentication, invoice history, PDF downloads, and integrated WhatsApp notifications for order tracking.",
      image: "/unavaible.png",
      link: "https://mesfactures.cicanoblessepressing.com/"
    },
    {
      id: 2,
      title: "CICA NOBLESSE",
      date: "Jun. 2025",
      content: "Modern corporate website developed in React/TypeScript. Features animated hero section, service catalog, client testimonials, and integrated WhatsApp contact system.",
      image: "/unavaible.png",
      link: "https://cicanoblessepressing.com/"
    },
    {
      id: 3,
      title: "LOCAGRAM",
      date: "Jun. 2025",
      content: "Complete real estate platform for the Beninese market. Features modern showcase website, advanced search system, secure authentication, and comprehensive admin dashboard for property management.",
      image: "/unavaible.png",
      link: "https://locagram.vercel.app/"
    },
    {
      id: 4,
      title: "CICA APP",
      date: "May 2025",
      content: "Complete Laravel web application for laundry management. Features order tracking, client database, multi-payment processing, PDF invoices, and WhatsApp notifications.",
      image: "/unavaible.png",
      link: "https://cica-app.vercel.app/"
    },
    {
      id: 5,
      title: "Laundgram",
      date: "Mar 2025",
      content: "Laundgram is a web application designed by me for managing laundry services. It allows users to generate accurate invoices, send them via WhatsApp for quick payments, and track orders seamlessly.",
      image: "/laundgram.png",
      link: "https://laundgram.vercel.app"
    },
    {
      id: 6,
      title: "Tourism Tipiac-Agency",
      date: "Jan. 2025",
      content: "Tourism Tipiac-Agency is a website I developed for a group of students who wanted to present an exhibition on the \"Road of Fish\". The project was time-sensitive, so the focus was primarily on delivering the site quickly.",
      image: "/tourism.png",
      link: "https://tipiac-agency.vercel.app/"
    },
    {
      id: 7,
      title: "SuccèsSco",
      date: "Dec. 2024",
      content: "SuccèsSco is a web application developed for Révélateur SA Bénin, aimed at providing parents with a platform to track and monitor their children's academic progress.",
      image: "/succesSco.png",
      link: "https://appli.successco.africa/"
    },
    {
      id: 8,
      title: "Doctor Portfolio",
      date: "Dec. 2024",
      content: "I had the privilege of designing and developing a personalized portfolio website for a distinguished doctor. The project was focused on creating an elegant, user-friendly platform.",
      image: "/doctor.png",
      link: "https://dossoumarcel.vercel.app/"
    },
    {
      id: 9,
      title: "VROC-CREATION",
      date: "Oct 2024",
      content: "As the lead developer at VROC-CRÉATION, I was responsible for the development and design of our website. I closely collaborated with the team to ensure that every element of the site reflects our shared vision.",
      image: "/vrocCreation.jpeg",
      link: "https://rayague.github.io/vroc-creation/"
    },
    {
      id: 10,
      title: "Prototype",
      date: "Aug. 2024",
      content: "I am working on my portfolio website again, this time using a framework. The goal is to present my activities and projects more effectively.",
      image: "/prototype.png",
      link: "https://prototype-self.vercel.app/"
    },
    {
      id: 11,
      title: "My Portfolio",
      date: "Aug. 2024",
      content: "I am working on my portfolio website again, this time using a framework. The goal is to present my activities and projects more effectively.",
      image: "/portfolioRay.png",
      link: "https://portfolio-cnkp.vercel.app"
    },
    {
      id: 12,
      title: "My CV",
      date: "Jul. 2024",
      content: "I coded my CV using HTML and CSS. This project was done to evaluate my programming skills and create a well-structured and appealing CV.",
      image: "/CVen.png",
      link: "https://rayague.github.io/OnlineCvRayAgueEn/"
    },
    {
      id: 13,
      title: "Fadoul Global Industry",
      date: "Apr. 2024",
      content: "I developed a website for Fadoul Global Industry at the request of a friend. The goal was to present his company and its operations.",
      image: "/fadoolGlobal.jpeg",
      link: "https://rayague.github.io/fadoul-global-industry/"
    },
    {
      id: 14,
      title: "Amas Precision",
      date: "Mar. 2024",
      content: "I managed the development of a website for Amas Precision. This company specializes in statistical analysis and provides customized data solutions.",
      image: "/amasPrecision.png",
      link: "https://rayague.github.io/amas-precision/"
    },
    {
      id: 15,
      title: "Portfolio",
      date: "Apr. 2024",
      content: "I created a personal portfolio to enhance my programming skills. This project allowed me to explore various web development techniques.",
      image: "/portofolio.jpeg",
      link: "https://rayague.github.io/simpleFolio/"
    }
  ];

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
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <motion.div className="flex flex-col w-full h-auto gap-8 my-16" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-400 hover:to-pink-400 transition-all duration-500">
                Projects
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed hover:text-white transition-colors duration-500 max-w-4xl">
                Every project is an opportunity to explore, innovate, and create
                something meaningful. I&apos;m passionate about bringing ideas to
                life and sharing my vision through unique and impactful work.
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

          <motion.div 
            className="w-full h-px my-16 bg-gradient-to-r from-transparent via-gray-600 to-transparent"
            variants={itemVariants}
          ></motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.div className="grid grid-cols-1 gap-6 sm:gap-8 pb-16 sm:pb-20 md:pb-32 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5" variants={itemVariants}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      scale: 0.8,
                      opacity: 0,
                      y: 50,
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut"
                      },
                    },
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/20 to-slate-800/20 border border-white/10 backdrop-blur-sm hover:from-slate-800/30 hover:to-slate-700/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20">
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Image container */}
                      <div className="relative overflow-hidden rounded-t-2xl">
                        <div className={`w-full h-48 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${
                          index % 5 === 0 ? 'bg-gradient-to-br from-blue-600 to-purple-700' :
                          index % 5 === 1 ? 'bg-gradient-to-br from-green-600 to-teal-700' :
                          index % 5 === 2 ? 'bg-gradient-to-br from-orange-600 to-red-700' :
                          index % 5 === 3 ? 'bg-gradient-to-br from-purple-600 to-pink-700' :
                          'bg-gradient-to-br from-cyan-600 to-blue-700'
                        }`}>
                          <span className="text-white text-2xl font-bold text-center px-4">{project.title}</span>
                        </div>
                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-400 transition-all duration-300">
                            {project.title}
                          </h2>
                          <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30">
                            {project.date}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm line-clamp-3">
                          {project.content}
                        </p>
                        
                        {/* View project indicator */}
                        <div className="flex items-center mt-4">
                          <span className="text-xs text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                            View project
                          </span>
                          <motion.div
                            className="ml-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                          >
                            →
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* My Journey and Continuous Growth Section */}
          <motion.section 
            className="mb-16 p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900/30 to-slate-800/30 border border-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:from-slate-800/40 hover:to-slate-700/40"
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg sm:text-xl font-bold">🚀</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                My Journey and Continuous Growth
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed hover:text-white transition-colors duration-300">
              Throughout my university studies, I focused primarily on web
              technologies, which led me to work on numerous projects. While I
              still don&apos;t consider myself an expert in web development, this
              journey has been an incredible learning experience. I&apos;m
              continuously developing personal projects that will soon be added to
              my portfolio as they are completed, all with the goal of improving
              my skills and expertise. Once I&apos;ve fully explored the web
              technologies, I plan to venture into new domains, always aiming to
              bring my personal projects to life. You will see updates in my
              portfolio as I reach new milestones along this exciting path.
            </p>
            
            {/* Decorative elements */}
            <div className="flex items-center space-x-3 mt-6">
              <motion.div
                className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
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
                className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
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
                className="w-2 h-2 bg-gradient-to-r from-pink-400 to-red-500 rounded-full"
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
            </div>
          </motion.section>
        </div>
      </div>
      
      {/* Footer */}
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
      
      <motion.p 
        className="mt-4 mb-8 text-xs sm:text-sm text-center text-gray-400"
        variants={itemVariants}
      >
        © copyright -{" "}
        <Link href="https://portfolio-cnkp.vercel.app" className="hover:text-gray-300 transition-colors duration-300">
          Ray Ague
        </Link> All rights reserved.
      </motion.p>
    </motion.main>
  );
}
