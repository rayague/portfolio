"use client";
import Link from "next/link";
import React from "react";
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
    <main className="flex min-h-screen flex-col items-center  bg-slate-950 font-sans">
      <div className="h-auto w-full flex flex-row backdrop-blur-md bg-white/5 shadow-2xl justify-between items-center px-3 sm:px-5 lg:px-20 md:px-10 gap-6 py-6 mb-5 ">
        <button
          onClick={handleBack}
          className="text-gray-50 font-black text-4xl"
        >
          &larr;
        </button>
        <nav className="text-gray-200 flex flex-row justify-end  decoration-none text-md/6 font-extrabold gap-4">
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
        <div className="h-auto w-full flex my-11 flex-col gap-6">
          <h1 className="text-gray-50 font-black text-5xl">Contact</h1>
          <p className="text-white/75 text-lg">
            Connecting with others is the first step towards collaboration and
            growth. I’m always open to new opportunities, ideas, and
            conversations that inspire creativity and innovation.
          </p>
        </div>

        <div className="h-px w-full bg-gray-800 my-16"></div>
        <div className="container flex flex-col justify-center items-center text-white gap-6">
          <div className="sm:w-ful md:w-full w-full lg:w-1/2 p-7 backdrop-blur-md bg-slate-600/30 border items-center justify-center flex rounded-md">
            {" "}
            <a
              href="https://www.google.com/maps/place/Abomey-Calavi,+Benin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="mr-2" icon={faMapMarkerAlt} />
              Abomey-Calavi - Bénin
            </a>
          </div>
          <div className="sm:w-ful md:w-full w-full lg:w-1/2 p-7 backdrop-blur-md bg-slate-600/30 border rounded-md items-center justify-center flex">
            <a
              href="https://wa.me/22960932967"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="mr-2" icon={faPhone} /> +229 60 93 29
              67
            </a>
          </div>
          <div className="sm:w-ful md:w-full w-full lg:w-1/2 p-7 backdrop-blur-md bg-slate-600/30 border rounded-md items-center justify-center flex">
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
