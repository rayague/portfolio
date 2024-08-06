import Image from "next/image";
import Link from "next/link";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-24 font-sans">
      <div className="h-80 w-full flex flex-col justify-center items-center gap-6">
        <nav className="text-gray-300 flex flex-row decoration-none justify-center text-sm/6 align-center items-center font-bold gap-4">
          <Link
            href="/home"
            className="hover:text-gray-50 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 underline underline-offset-8"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-50 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 underline underline-offset-8"
          >
            Contact
          </Link>
        </nav>
        <h1 className="py-3.5 px-0.5 z-10 text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-9xl whitespace-nowrap bg-clip-text font-bold tracking-tighter">
          Portfolio
        </h1>
        <p className="text-slate-300/75 text-base/6 text-center">
          Explore my projects and journey. I&lsquo;m excited to share my work
          with you!
        </p>
      </div>
    </main>
  );
}
