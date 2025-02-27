"use client";
import React from "react";
import Link from "next/link";
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
    <main className="flex flex-col items-center min-h-screen font-sans justify-normal bg-slate-950">
      <div className="flex flex-row items-center justify-between w-full h-auto gap-6 px-3 py-6 mb-5 shadow-2xl backdrop-blur-md bg-white/5 sm:px-5 lg:px-20 md:px-10 ">
        <button
          onClick={handleBack}
          className="text-4xl font-black text-gray-50"
        >
          &larr;
        </button>
        <nav className="flex flex-row justify-end gap-4 font-extrabold text-gray-200 decoration-none text-md/6">
          <Link href="/projects" className="hover:text-gray-50">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-gray-50">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gray-50">
            Contact
          </Link>
        </nav>
      </div>
      <div className="container px-5 sm:px-10 md:px-24 xl:px44 2xl:px44 lg:px44">
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
            <h1 className="text-5xl font-black text-gray-50">Home</h1>
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
              Every project is a new adventure, a way to express my passion for
              creation. I invite you to explore my universe, where each piece
              tells a unique story.
            </p>
          </motion.div>
        </div>
        <div className="w-full h-px my-16 bg-gray-800"></div>
        <div className="container flex flex-col items-center justify-center gap-8 mx-auto mb-16 text-white sm:grid-cols-1 lg:flex-row">
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
                  delay: 1.2
                }
              }
            }}
          >
            <Image
              src="/profile.JPG"
              width={400}
              height={400}
              alt="Picture of the author"
              className="object-cover shadow-xl shadow-gray-600/70"
            />
          </motion.div>

          <div className="flex flex-col justify-evenly">
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
                    delay: 1.6
                  }
                }
              }}
            >
              <h1 className="text-6xl text-white text-extrabold">Hi</h1>
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
                    delay: 2
                  }
                }
              }}
            >
              <h2 className="text-4xl text-white text-extrabold">
                I&apos;m Ray AGUE
              </h2>
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
                    delay: 2.4
                  }
                }
              }}
            >
              <p className="text-xl text-white/75 md:text-ml">
                Every journey begins with a single step, and I believe that
                creativity is the driving force that transforms dreams into
                reality. With each project, I strive to leave a mark, inspiring
                others to embrace their passions and pursue their unique paths.
              </p>
            </motion.div>
          </div>
        </div>
        {/* <div className="w-full h-px my-16 bg-gray-800"></div> */}
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
