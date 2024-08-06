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
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-24 font-sans">
        <div className="h-80 w-full flex flex-col justify-center items-center gap-6">
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
            <nav className="text-gray-300 flex flex-row decoration-none justify-center text-sm/6 align-center items-center font-bold gap-4">
              <Link
                href="/home"
                className="hover:text-gray-50 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 "
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="hover:text-gray-50 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 "
              >
                Contact
              </Link>
            </nav>
          </motion.div>

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
            <p className="text-slate-300/75 text-base/6 text-center">
              Explore my projects and journey. I&lsquo;m excited to share my
              work with you!
            </p>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}
