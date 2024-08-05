"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useEffect } from "next/navigation";
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
  return (
    <main className="flex min-h-screen flex-col items-center justify-normal  bg-slate-950 font-sans">
      <div className="h-auto w-full flex flex-row backdrop-blur-md bg-white/5 shadow-2xl justify-between items-center px-3 sm:px-5 lg:px-20 md:px-10 gap-6 py-6 mb-5 ">
        <button
          onClick={handleBack}
          className="text-gray-50 font-black text-4xl"
        >
          &larr;
        </button>
        <nav className="text-gray-200 flex flex-row justify-end  decoration-none text-md/6 font-extrabold gap-4">
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
        <div className="h-auto w-full flex my-11 flex-col gap-6">
          <h1 className="text-gray-50 font-black text-5xl">Home</h1>
          <p className="text-white/75 text-lg">
            Every project is a new adventure, a way to express my passion for
            creation. I invite you to explore my universe, where each piece
            tells a unique story.
          </p>
        </div>
        <div className="h-px w-full bg-gray-800 my-16"></div>
        <div className="container grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 text-white gap-3 mb-16">
          <Image
            src="/profile.JPG"
            width={400}
            height={400}
            alt="Picture of the author"
            className="shadow-2xl shadow-slate-800/70 object-cover"
          />
          <div className="flex flex-col justify-evenly">
            <h1 className="text-extrabold text-white text-6xl">Hi</h1>
            <h2 className="text-extrabold text-white text-4xl">
              I&apos;m Ray AGUE
            </h2>
            <p className="text-white/75 text-xl md:text-ml">
              Every journey begins with a single step, and I believe that
              creativity is the driving force that transforms dreams into
              reality. With each project, I strive to leave a mark, inspiring
              others to embrace their passions and pursue their unique paths.
            </p>
          </div>
        </div>
        {/* <div className="h-px w-full bg-gray-800 my-16"></div> */}
      </div>

      <div className=" h-auto w-full relative bottom-0 flex justify-center items-center flex-row gap-3 p-3">
        <a
          href="https://www.facebook.com/profile.php?id=100084755843013"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white"
        >
          <FontAwesomeIcon className="size-8" icon={faFacebook} />
        </a>
        <a
          href="https://www.instagram.com/rayague03?igsh=MTg3eWNnN2hzdnI0Zg=="
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white"
        >
          <FontAwesomeIcon className="size-8" icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/in/ray-ague-2066b4247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white"
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
    </main>
  );
}
