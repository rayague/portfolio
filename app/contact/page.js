"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter, useEffect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

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
  return (
    <main className="flex flex-col items-center min-h-screen font-sans bg-slate-950">
      <div className="flex flex-row items-center justify-between w-full h-auto gap-6 px-3 py-6 mb-5 shadow-2xl backdrop-blur-md bg-white/5 sm:px-5 lg:px-20 md:px-10 ">
        <button
          onClick={handleBack}
          className="text-4xl font-black text-gray-50"
        >
          &larr;
        </button>
        <nav className="flex flex-row justify-end gap-4 font-extrabold text-gray-200 decoration-none text-md/6">
          <Link href="/home" className="hover:text-gray-50">
            Home
          </Link>
          <Link href="/projects" className="hover:text-gray-50">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-gray-50">
            Blog
          </Link>
        </nav>
      </div>
      <div className="container px-5 sm:px-8 md:px-12 xl:px24 2xl:px44 lg:px16">
        <div className="flex flex-col w-full h-auto gap-6 my-11">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 1,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.3
                }
              }
            }}
          >
            <h1 className="text-5xl font-black text-gray-50">Contact</h1>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 1,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.8
                }
              }
            }}
          >
            <p className="text-lg text-white/75">
              Connecting with others is the first step towards collaboration and
              growth. I&apos;m always open to new opportunities, ideas, and
              conversations that inspire creativity and innovation.
            </p>
          </motion.div>
        </div>

        <div className="w-full h-px my-16 bg-gray-800"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 1,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 1.4
              }
            }
          }}
        >
          <div className="container flex flex-col items-center justify-center gap-6 mb-24 text-white">
            <div className="flex items-center justify-center w-full border rounded-md sm:w-ful md:w-full lg:w-1/2 p-7 backdrop-blur-md bg-slate-600/30">
              {" "}
              <a
                href="https://www.google.com/maps/place/Abomey-Calavi,+Benin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="mr-2" icon={faMapMarkerAlt} />
                Abomey-Calavi, Bénin
              </a>
            </div>
            <div className="flex items-center justify-center w-full border rounded-md sm:w-ful md:w-full lg:w-1/2 p-7 backdrop-blur-md bg-slate-600/30">
              <a
                href="https://wa.me/22960932967"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="mr-2" icon={faPhone} /> +229 60 93
                29 67
              </a>
            </div>
            <div className="flex items-center justify-center w-full border rounded-md sm:w-ful md:w-full lg:w-1/2 p-7 backdrop-blur-md bg-slate-600/30">
              {" "}
              <a
                href="mailto:rayague03@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="mr-2" icon={faEnvelope} />{" "}
                rayague03@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="relative bottom-0 flex flex-row items-center justify-center w-full h-auto gap-3 p-3 ">
        <a
          href="https://www.facebook.com/profile.php?id=100084755843013"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white "
        >
          <FontAwesomeIcon className="size-8" icon={faFacebook} />
        </a>
        <a
          href="https://www.instagram.com/rayague03?igsh=MTg3eWNnN2hzdnI0Zg=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-white "
        >
          <FontAwesomeIcon className="size-8" icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/in/ray-ague-2066b4247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white "
        >
          <FontAwesomeIcon className="size-8" icon={faLinkedin} />
        </a>
        <a
          href="https://wa.me/22960932967"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <FontAwesomeIcon className="size-8" icon={faWhatsapp} />
        </a>
        <a
          href="https://github.com/rayague"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <FontAwesomeIcon className="size-8" icon={faGithub} />
        </a>
      </div>
      <p className="mt-4 mb-8 text-sm text-center text-white">
        © copyright -{" "}
        <Link href="https://portfolio-cnkp.vercel.app">Ray Ague</Link> All
        rights reserved.
      </p>
    </main>
  );
}
