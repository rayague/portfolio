"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
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
            delay: 0.1
          }
        }
      }}
    >
      <main className="flex flex-col items-center justify-center min-h-screen p-24 font-sans bg-slate-950">
        <div className="flex flex-col items-center justify-center w-full gap-6 h-80">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0
              },
              visible: {
                scale: 1.4,
                opacity: 1,
                transition: {
                  delay: 0.4
                }
              }
            }}
          >
            <h1 className="py-3.5 px-0.5 z-10 text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-9xl whitespace-nowrap bg-clip-text font-bold tracking-tighter">
              Portfolio
            </h1>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 1.2,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 1.3
                }
              }
            }}
          >
            <p className="text-center text-slate-300/75 text-base/6">
              Explore my projects and journey. I&lsquo;m excited to share my
              work with you!
            </p>
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
            <nav className="flex flex-row items-center justify-center gap-4 font-bold text-gray-300 decoration-none text-sm/6 align-center">
              <Link
                href="/home"
                className="px-8 py-2 transition ease-in-out border border-white rounded-xl hover:text-gray-50 delay-10 hover:-translate-y-1 hover:scale-110"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="px-8 py-2 transition ease-in-out border border-white rounded-xl hover:text-gray-50 delay-10 hover:-translate-y-1 hover:scale-110 "
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        </div>
        <p className="absolute text-sm text-center text-white bottom-3">
          © copyright -{" "}
          <Link href="https://portfolio-cnkp.vercel.app">Ray Ague</Link> All
          rights reserved.
        </p>
      </main>
    </motion.div>
  );
}
