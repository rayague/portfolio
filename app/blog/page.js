"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  // faPhone,
  // faEnvelope,
  // faMapMarkerAlt
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

  const posts = [
    {
      id: 1,
      title: "Post 1",
      author: "Ray Ague",
      date: "Aug. 2024",
      content:
        "Nous qui sommes des personnes tout à fait normales, nous n’avons généralement pas eu une vie comblée, une vie désirée. Dans la plupart des cas, notre vie est une succession d’obstacles plus ou moins à notre portée, que....",
      image: "/post1.jpg"
    },
    {
      id: 2,
      title: "Post 2",
      author: "Ray Ague",
      date: "Aug. 2024",
      content:
        "L’Homme, qu’est-il en réalité ? Il n’est point rare d’entendre dire que “l’Homme est un éternel insatisfait” ou “l’Homme est un loup pour l’Homme”, et j’en passe… Toutes ces affirmations sont vraies, mais la vraie question qu’il faut se poser est celle-ci : “Est-ce qu’on peut  ...",
      image: "/post2.jpg"
    },
    {
      id: 3,
      title: "Post 1",
      author: "Ray Ague",
      date: "Aug. 2024",
      content:
        "L’amour est ce sentiment profond qu’on éprouve pour une personne et non pour une chose, car pour moi, on ne tombe pas amoureux d’une chose. Je ne définirai peut-être pas l’amour de la même manière que les autres, car...",
      image: "/post3.jpg"
    },
    {
      id: 4,
      title: "Post 2",
      author: "Ray Ague",
      date: "Aug. 2024",
      content:
        "C’est fait de telle sorte que chaque infime pensée, chaque acte que tu poseras influencera ta destinée. Bien avant même la genèse, ceux qui ont existé avant nous, ceux d’aujourd’hui et ceux qui arriveront, étions tous là, auprès de ...",
      image: "/post10.jpg"
    },
    {
      id: 5,
      title: "Post 1",
      author: "Ray Ague",
      date: "Aug. 2024",
      content:
        "Dans la vie, il faut que tu connaisses ta position, que tu suives le tunnel qui te mènera à la réussite, à ton succès, à ton bonheur. Thanos disait dans le film Marvel Endgame : « S’il existe des gens qui s’attachent toujours à leur passé, c’est qu’il ...",
      image: "/post5.jpg"
    },
    {
      id: 6,
      title: "Post 2",
      author: "Ray Ague",
      date: "Aug. 2024",
      content:
        "Qui est Dieu ? Dieu n’est pas une personne, ni un esprit ou quoi que ce soit. Dans notre tête, nous craignons tous quelqu’un ou quelque chose ; nous savons qu’il y a un être...",
      image: "/post6.jpg"
    },
    {
      id: 7,
      title: "Post 1",
      author: "Ray Ague",
      date: "Aug. 2024",
      content:
        "Parfois, il suffit qu’une petite situation se présente pour que nous commencions à nous poser plusieurs questions. Nous nous demandons pourquoi la vie est ainsi, pourquoi nous devons subir à la place des autres, pourquoi nous sommes nés si nous ne pouvons pas être ...",
      image: "/post7.jpg"
    },
    {
      id: 8,
      title: "Post 2",
      author: "Internet",
      date: "Aug. 2024",
      content:
        "L'homme a été créé pour exercer son autorité. Il n'aime pas faire le chef, il est CHEF. Il n'aime pas commander, mais il est un commandant. Il n'y a jamais eu de petit mari et il n'y en aura jamais. Peu importe si la femme est plus ...",
      image: "/couple4.jpg"
    },
    {
      id: 9,
      title: "Post 1",
      author: "Internet",
      date: "Aug. 2024",
      content:
        "Depuis des siècles, les femmes ont été manipulées pour croire qu'elles sont « hystériques », « émotives », « folles » et « dépendantes » pour avoir des besoins ...",
      image: "/couple8.jpg"
    },
    {
      id: 10,
      title: "Post 2",
      author: "Internet",
      date: "Aug. 2024",
      content:
        "Souvent, lorsque nous parlons des relations toxiques que les femmes subissent, nous nous concentrons uniquement sur les hommes malsains qui agissent agressivement envers elles, ce qui est tout à fait justifié. Mais nous ...",
      image: "/friend10.jpg"
    },
    {
      id: 11,
      title: "Post 2",
      author: "Internet",
      date: "Aug. 2024",
      content:
        "SInternet est en émoi depuis que The Times a couvert plus en profondeur l'histoire de Ballerina Farm, une histoire initialement présentée dans The New York Times, à propos d'un couple influent très populaire, comprenant une ...",
      image: "/couple6.jpg"
    }
    // Ajoute d'autres posts ici
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
              Blog
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed hover:text-white transition-colors duration-500 max-w-4xl">
              In a world full of stories, I strive to share insights and
              experiences that inspire growth and creativity. Join me as we
              explore ideas, reflect on challenges, and celebrate the journey of
              learning together.
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
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
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
                <Link href={`/posts/${post.id}`}>
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/20 to-slate-800/20 border border-white/10 backdrop-blur-sm hover:from-slate-800/30 hover:to-slate-700/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Image container */}
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <Image
                        src={post.image}
                        width={500}
                        height={500}
                        alt="Blog Post"
                        className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-400 transition-all duration-300">
                          {post.title}
                        </h2>
                        <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30">
                          {post.date}
                        </span>
                      </div>
                      
                      <div className="mb-3">
                        <span className="text-sm text-gray-400">Posted by: </span>
                        <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {post.author}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm line-clamp-3">
                        {post.content}
                      </p>
                      
                      {/* Read more indicator */}
                      <div className="flex items-center mt-4">
                        <span className="text-xs text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                          Read more
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
      </div>
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
      </div>
    </motion.main>
  );
}
