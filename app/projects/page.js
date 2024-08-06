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
    <main className="flex min-h-screen flex-col items-center  bg-slate-950 font-sans transition ease-in">
      <div className="h-auto w-full sticky top-0 flex flex-row backdrop-blur-md bg-white/5 shadow-2xl justify-between items-center px-3 sm:px-5 lg:px-20 md:px-10 gap-6 py-6 mb-5 ">
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
          <h1 className="text-gray-50 font-black text-5xl">Projects</h1>
          <p className="text-white/75 text-lg">
            Every project is an opportunity to explore, innovate, and create
            something meaningful. I&apos;m passionate about bringing ideas to
            life and sharing my vision through unique and impactful work.
          </p>
        </div>

        <div className="h-px w-full bg-gray-800 my-16"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white/65 pb-40">
          <a href="https://rayague.github.io/simpleFolio/">
            <div className="w-auto h-auto bg-slate-900/60 rounded-xl shadow-2xl shadow-slate-800/50 delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 duration-100 ">
              <Image
                src="/picture3.jpg"
                width={500}
                height={500}
                alt="Portfolio"
                className="object-cover w-full"
              />
              <h2 className="text-white text-2xl mt-2 mx-3">Portfolio</h2>
              <h3 className="mb-3 mx-3 font-bold">Apr. 2023</h3>
              <p className="p-3">
                I created a personal portfolio to enhance my programming skills.
                This project allowed me to explore various web development
                techniques. The portfolio showcases my creativity and technical
                abilities. It reflects my growth as a developer and highlights
                my projects.
              </p>
            </div>
          </a>
          <a href="https://rayague.github.io/amasprecision/">
            <div className="w-auto h-auto bg-slate-900/60 rounded-xl shadow-2xl shadow-slate-800/50 delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 duration-100 ">
              <Image
                src="/picture4.jpg"
                width={500}
                height={500}
                alt="Amas Precision"
                className="object-cover w-full"
              />
              <h2 className="text-white text-2xl mt-2 mx-3">Amas Precision</h2>
              <h3 className="mb-3 mx-3 font-bold">Mar. 2023</h3>
              <p className="p-3">
                I managed the development of a website for Amas Precision. This
                company specializes in statistical analysis. They provide
                customized data solutions in Cotonou, Benin. The site showcases
                their services and enhances client engagement. It helps clients
                make informed decisions through data understanding.
              </p>
            </div>
          </a>
          <a href="https://oluwatobitrans.notemaster.org/">
            <div className="w-auto h-auto bg-slate-900/60 rounded-xl shadow-2xl shadow-slate-800/50 delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 duration-100 ">
              <Image
                src="/picture2.jpg"
                width={500}
                height={500}
                alt="Oluwatobi Trans"
                className="object-cover w-full"
              />
              <h2 className="text-white text-2xl mt-2 mx-3">Oluwatobi Trans</h2>
              <h3 className="mb-3 mx-3 font-bold">Apr. 2023</h3>
              <p className="p-3">
                I developed a website for Oluwatobi Trans. My friend in the
                transit industry requested this project. The goal was to create
                an online platform to showcase his achievements. The site
                enhances his visibility on the internet. I designed a
                user-friendly interface that highlights his services. This
                website serves as a tool to attract new customers.
              </p>
            </div>
          </a>
          <a href="https://rayague.github.io/fadoul-global-industry/">
            <div className="w-auto h-auto bg-slate-900/60 rounded-xl shadow-2xl shadow-slate-800/50 delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 duration-100 ">
              <Image
                src="/fadoolGlobalIndustry.jpg"
                width={500}
                height={500}
                alt="Fadoul Global Industry"
                className="object-cover w-full"
              />
              <h2 className="text-white text-2xl mt-2 mx-3">
                Fadoul Global Industry
              </h2>
              <h3 className="mb-3 mx-3 font-bold">Apr. 2023</h3>April
              <p className="p-3">
                I developed a website for Fadoul Global Industry at the request
                of a friend. The goal was to present his company and its
                operations. The website highlights the services offered by the
                company. It showcases their expertise and helps attract new
                clients. This project enhances their online presence and
                visibility.
              </p>
            </div>
          </a>

          <a href="https://rayague.github.io/projet_jul_01/">
            <div className="w-auto h-auto bg-slate-900/60 rounded-xl shadow-2xl shadow-slate-800/50 delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 duration-100 ">
              <Image
                src="/h24.jpg"
                width={500}
                height={500}
                alt="H24 Sex_connexion"
                className="object-cover w-full"
              />
              <h2 className="text-white text-2xl mt-2 mx-3">
                H24 Sex_connexion
              </h2>
              <h3 className="mb-3 mx-3 font-bold">Jul. 12 - 2024</h3>
              <p className="p-3">
                I have temporarily stopped working on the H24 Sex_connexion
                project. It is still under analysis. This project is intended
                for an adult audience due to its sensitive content. It features
                photos that are not suitable for all viewers. I was
                collaborating with the requester to build a solid foundation for
                the project. The aim is to develop a comprehensive platform that
                meets specific needs in the future.
              </p>
            </div>
          </a>

          <a href="https://ledigitalmaster.notemaster.org/">
            <div className="w-auto h-auto bg-slate-900/60 rounded-xl shadow-2xl shadow-slate-800/50 delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 duration-100 ">
              <Image
                src="/picture7.jpg"
                width={500}
                height={500}
                alt="Le Digitalemaster"
                className="object-cover w-full"
              />
              <h2 className="text-white text-2xl mt-2 mx-3">
                Le Digitalemaster
              </h2>
              <h3 className="mb-3 mx-3 font-bold">Mar. 2023</h3>
              <p className="p-3">
                I am currently working on the Le Digitalemaster project. This
                project is in progress at the request of an individual. The aim
                is to provide online services for students. It will help
                students find courses and access other resources. The goal is to
                create a comprehensive platform that meets the needs of
                learners.
              </p>
            </div>
          </a>

          <a href="https://rayague.github.io/OnlineCvRayAgueEn/">
            <div className="w-auto h-auto bg-slate-900/60 rounded-xl shadow-2xl shadow-slate-800/50 delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 duration-100 ">
              <Image
                src="/cv.jpg"
                width={500}
                height={500}
                alt="My CV"
                className="object-cover w-full"
              />
              <h2 className="text-white text-2xl mt-2 mx-3">My CV</h2>
              <h3 className="mb-3 mx-3 font-bold">Jul. 2024</h3>
              <p className="p-3">
                I coded my CV using HTML and CSS. This project was done to
                evaluate my programming skills. I aim to create a
                well-structured and appealing CV. I still have some basics to
                solidify and improve the overall design. This project helps me
                enhance my web development abilities.
              </p>
            </div>
          </a>

          <a href="/">
            <div className="w-auto h-auto bg-slate-900/60 rounded-xl shadow-2xl shadow-slate-800/50 delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 duration-100 ">
              <Image
                src="/porto.jpg"
                width={500}
                height={500}
                alt="Portfolio"
                className="object-cover w-full"
              />
              <h2 className="text-white text-2xl mt-2 mx-3">My Portfolio</h2>
              <h3 className="mb-3 mx-3 font-bold">Aug. 2024</h3>
              <p className="p-3">
                I am working on my portfolio website again, this time using a
                framework. The goal is to present my activities and projects
                more effectively. This project allows me to showcase my skills
                and experience in a professional manner. I aim to create an
                engaging user experience and highlight my work.
              </p>
            </div>
          </a>
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
