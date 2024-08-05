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
          <Link href="/contact" className="hover:text-gray-50">
            Contact
          </Link>
        </nav>
      </div>
      <div className="container px-5 sm:px-8 md:px-12 xl:px24 2xl:px44 lg:px16">
        <div className="h-auto w-full flex my-11 flex-col gap-6">
          <h1 className="text-gray-50 font-black text-5xl">Form</h1>
          <p className="text-white/75 text-lg">
            Connecting with others is the first step towards collaboration and
            growth. I’m always open to new opportunities, ideas, and
            conversations that inspire creativity and innovation.
          </p>
        </div>

        <div className="h-px w-full bg-gray-800 my-16"></div>
        <div className="container pb-28 flex flex-col justify-center items-center text-white gap-6 px-5">
          <form
            action=""
            className="flex flex-col gap-5 border rounded-lg px-6 py-14 bg-slate-900/40 shadow-2xl shadow:bg-slate-400 container sm:px-8  lg:px-16"
            method="post"
          >
            <input
              type="text"
              placeholder="YOUR FIRSTNAME"
              className="bg-slate-900/65 h-16 p-3 text-2xl border rounded-md outline-none transition ease-in "
            />
            <input
              type="text"
              placeholder="YOUR LASTNAME"
              className="bg-slate-900/65 h-16 p-3 text-2xl border rounded-md outline-none transition ease-in "
            />
            <input
              type="date"
              className="bg-slate-900/65 h-16 p-3 text-2xl border rounded-md outline-none transition ease-in  hidden"
            />
            <textarea
              name=""
              id=""
              cols={3}
              rows={6}
              placeholder="YOUR THOUGHTS"
              className="bg-slate-900/65 h-16 p-3 text-2xl border rounded-md outline-none transition ease-in "
            ></textarea>
            <input
              type="file"
              className="bg-slate-900/65 h-16 p-3 text-2xl border rounded-md outline-none transition ease-in "
            />
            <input
              type="submit"
              value="SUBMIT"
              className="bg-sky-500/90 h-16 p-3 text-2xl border rounded border-sky-400 hover:bg-sky-600/75 outline-none my-8 transition ease-in cursor-pointer capitalize"
            />
          </form>
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
